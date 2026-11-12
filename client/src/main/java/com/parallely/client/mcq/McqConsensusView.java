package com.parallely.client.mcq;

import com.parallely.client.js.Js;
import com.parallely.client.js.Json;
import com.parallely.client.js.Ws;
import com.parallely.client.shell.Icons;
import com.parallely.client.shell.Ui;
import com.parallely.client.shell.View;
import org.teavm.jso.JSBody;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLInputElement;
import org.teavm.jso.dom.xml.Text;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public final class McqConsensusView implements View {

    private record QuizOption(String key, String label, boolean isCorrect) {
    }

    private record QuizQuestion(String id, String title, String context, List<QuizOption> options,
                                String explanation, String trap) {
    }

    private static final int POLL_SECONDS = 30;
    private static final String ROOM = "main";
    private static final String[] KEYS = {"A", "B", "C", "D"};

    private static final List<QuizQuestion> QUESTIONS = List.of(
            new QuizQuestion("q1",
                    "Which concurrency pattern guarantees the lowest tail latency for order book processing?",
                    "High-frequency trading exchanges need to avoid lock contention, context switches, and cache invalidation storms.",
                    List.of(
                            new QuizOption("A", "Single-Thread Core with LMAX Disruptor RingBuffer", true),
                            new QuizOption("B", "Java synchronized blocks on OrderBook object", false),
                            new QuizOption("C", "ThreadPool with ConcurrentLinkedQueue", false),
                            new QuizOption("D", "Actor model with Akka asynchronous mailboxes", false)),
                    "One thread owns the whole match path, so there is no lock to contend for, no context switch, and no cache line bouncing between cores. The Disruptor ring buffer is pre-allocated, so the hot path allocates nothing and the GC never pauses a match. That is why tail latency stays in single-digit microseconds instead of spiking under load.",
                    "Most classes pick B. Synchronized blocks feel safe, but every match then queues on one monitor and every core invalidates the same cache line, which is exactly what inflates p99."),
            new QuizQuestion("q2",
                    "How does LMAX Disruptor eliminate false sharing between producer and consumer threads?",
                    "When independent variables reside on the same 64-byte L1/L2 cache line, concurrent writes force cache line invalidations.",
                    List.of(
                            new QuizOption("A", "Cache line padding with @Contended or 128 bytes dummy fields", true),
                            new QuizOption("B", "Using volatile variables without locks", false),
                            new QuizOption("C", "Calling Thread.yield() after every write", false),
                            new QuizOption("D", "Compacting JVM heap with ZGC generational collection", false)),
                    "Two threads writing different variables that share one 64-byte cache line force the line to bounce between cores on every write. Padding puts each hot variable on its own line, so a write invalidates nothing the other thread owns. The Disruptor pads its sequence counters to 128 bytes for the same reason.",
                    "Volatile fixes visibility, not sharing. A volatile write to a shared line still invalidates every other core’s copy, so the bouncing continues."),
            new QuizQuestion("q3",
                    "What does a Project Loom virtual thread give you that a platform thread pool does not?",
                    "The matching engine runs 10,000 simulated traders. Each one blocks on I/O while it waits for market data.",
                    List.of(
                            new QuizOption("A", "Thousands of cheap threads that park without holding an OS thread", true),
                            new QuizOption("B", "Faster garbage collection for short-lived objects", false),
                            new QuizOption("C", "Automatic parallelisation of sequential loops", false),
                            new QuizOption("D", "A lock-free replacement for synchronized blocks", false)),
                    "A virtual thread costs a few kilobytes and parks without holding an OS thread, so a million of them can block on I/O at once while a small pool of carrier threads does the real work. A platform thread costs around a megabyte of stack and blocks its OS thread, so a thread pool stalls once every thread is waiting.",
                    "Loom does not parallelise your code. It only makes blocking cheap. A slow loop is still a slow loop, it just stops wasting a whole OS thread while it waits."),
            new QuizQuestion("q4",
                    "Why is the order book kept as flat primitive arrays instead of a tree of Order objects?",
                    "The matching loop walks price levels in order, thousands of times a second, on the hottest path in the engine.",
                    List.of(
                            new QuizOption("A", "Contiguous arrays keep the hot data in L1/L2 cache and avoid pointer chasing", true),
                            new QuizOption("B", "Arrays let the JVM skip garbage collection entirely", false),
                            new QuizOption("C", "Trees cannot store price-time priority", false),
                            new QuizOption("D", "Primitive arrays use less heap only for small books", false)),
                    "The match loop walks price levels in order, so a flat array means sequential access that the CPU prefetcher loves: the next level is already in L1/L2 before you need it. A tree of Order objects means pointer chasing through the heap, a cache miss per level, and an allocation every time an order is created.",
                    "Arrays do not switch the GC off. The win is cache locality and zero allocation on the match path, not escaping the collector."));

    private int qIndex = 0;
    private String phase = "idle";
    private final Map<String, String> voters = new LinkedHashMap<>();
    private String myName = "Guest-" + (int) Math.floor(1000 + Math.random() * 9000);
    private Integer timeLeft = null;
    private String connected = "connecting";
    private String notice = null;

    private Ws ws;
    private int countdownId = -1;
    private String countdownPhase = null;
    private Integer countdownTime = null;
    private boolean disposed = false;

    private final HTMLElement root;
    private final Text votesText;
    private final Text leadingText;
    private final HTMLElement leadingPctSpan;
    private final Text correctText;
    private final HTMLElement correctPctSpan;
    private final Text timeText;
    private final HTMLElement questionGroup;
    private final HTMLInputElement nameInput;
    private final HTMLElement titleEl;
    private final HTMLElement contextEl;
    private final List<OptionRow> optionRows = new ArrayList<>();
    private final HTMLElement statusBar;
    private final HTMLElement statusText;
    private final HTMLElement statusTimer;
    private final HTMLElement noticeEl;
    private final List<HTMLButtonElement> qButtons = new ArrayList<>();
    private final HTMLButtonElement startBtn;
    private final HTMLButtonElement revealBtn;
    private final HTMLButtonElement nextBtn;
    private final HTMLElement connRow;
    private final HTMLElement aiCard;
    private final List<HTMLElement> aiBody = new ArrayList<>();

    private final class OptionRow {
        HTMLElement root;
        HTMLElement bar;
        HTMLElement badge;
        HTMLElement label;
        HTMLElement count;
        HTMLElement pick;
        HTMLElement pct;
        HTMLElement correct;
    }

    public McqConsensusView() {
        root = Ui.el("div", "w-full h-full bg-[#008080] text-black p-6 flex flex-col gap-5 select-none overflow-y-auto");

        HTMLElement kpiGrid = Ui.el("div", "grid grid-cols-2 md:grid-cols-4 gap-3.5");

        HTMLElement votesValue = kpiCard(kpiGrid, "Students answered", "Users", "w-3.5 h-3.5 text-[#0000CD]",
                "text-xl font-bold font-mono tabular-nums text-black flex items-baseline gap-1.5");
        votesText = textNode(votesValue, "0");
        Ui.add(votesValue, Ui.el("span", "text-xs font-normal text-[#404040]", "votes"));

        HTMLElement leadingValue = kpiCard(kpiGrid, "Leading option", "Trophy", "w-3.5 h-3.5 text-yellow-400",
                "text-xl font-bold font-mono tabular-nums text-black flex items-baseline gap-2");
        leadingText = textNode(leadingValue, "—");
        leadingPctSpan = Ui.el("span", "text-xs font-medium text-[#404040]");
        Ui.add(leadingValue, leadingPctSpan);

        HTMLElement correctValue = kpiCard(kpiGrid, "Correct picks", "CheckCircle2", "w-3.5 h-3.5 text-[#047857]",
                "text-xl font-bold font-mono tabular-nums text-black flex items-baseline gap-2");
        correctText = textNode(correctValue, "—");
        correctPctSpan = Ui.el("span", "text-xs font-medium text-[#404040]");
        Ui.add(correctValue, correctPctSpan);

        HTMLElement timeValue = kpiCard(kpiGrid, "Time left", "Timer", "w-3.5 h-3.5 text-[#92400E]",
                "text-xl font-bold font-mono tabular-nums text-black flex items-baseline gap-1.5");
        timeText = textNode(timeValue, "Not started");

        HTMLElement mainGrid = Ui.el("div", "grid grid-cols-1 lg:grid-cols-12 gap-5");
        HTMLElement leftCard = Ui.el("div", "lg:col-span-8 bg-white border border-black rounded-none p-6 flex flex-col gap-5 shadow-[4px_4px_0_rgba(0,0,0,0.45)]");

        HTMLElement leftHeader = Ui.el("div", "flex items-center justify-between border-b border-black pb-3 gap-3 flex-wrap");
        questionGroup = Ui.el("div", "flex items-center gap-2");
        HTMLElement nameLabel = Ui.el("label", "flex items-center gap-1.5 text-xs text-[#404040]");
        nameLabel.appendChild(Ui.doc().createTextNode("Answering as"));
        nameInput = Ui.input("win-sunken px-2 py-1 text-xs font-bold text-black w-28 outline-none", "text", myName, "");
        Ui.attr(nameInput, "aria-label", "Your name");
        Ui.onInput(nameInput, value -> {
            String next = value.length() > 20 ? value.substring(0, 20) : value;
            if (next.isEmpty()) {
                next = "Guest";
            }
            myName = next;
            if (!nameInput.getValue().equals(next)) {
                nameInput.setValue(next);
            }
            update();
        });
        Ui.add(nameLabel, nameInput);
        Ui.add(leftHeader, questionGroup, nameLabel);

        HTMLElement questionBody = Ui.el("div", "flex flex-col gap-2");
        titleEl = Ui.el("h2", "text-lg font-bold text-black tracking-tight");
        contextEl = Ui.el("p", "text-xs text-[#404040] leading-relaxed");
        Ui.add(questionBody, titleEl, contextEl);

        HTMLElement optionsWrap = Ui.el("div", "flex flex-col gap-3");
        for (QuizOption opt : QUESTIONS.get(0).options()) {
            OptionRow row = buildOptionRow(opt);
            optionRows.add(row);
            Ui.add(optionsWrap, row.root);
        }

        statusBar = Ui.el("div", "");
        statusText = Ui.el("span", "");
        statusTimer = Ui.el("span", "font-pixel text-2xl leading-none tabular-nums shrink-0");
        Ui.add(statusBar, statusText, statusTimer);

        noticeEl = Ui.el("div", "text-xs text-[#92400E] font-semibold");

        Ui.add(leftCard, leftHeader, questionBody, optionsWrap, statusBar, noticeEl);

        HTMLElement rightCol = Ui.el("div", "lg:col-span-4 flex flex-col gap-4");
        HTMLElement teacherCard = Ui.el("div", "bg-white border border-black rounded-none p-5 flex flex-col gap-4 shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLElement teacherTitle = Ui.html("h3", "text-sm font-semibold text-black flex items-center gap-2",
                Icons.svg("Users", "w-4 h-4 text-[#0000CD]") + "Teacher Controls");

        HTMLElement qRow = Ui.el("div", "flex items-center gap-2");
        for (int i = 0; i < QUESTIONS.size(); i++) {
            int idx = i;
            HTMLButtonElement b = Ui.btn("px-3 py-1 text-xs font-semibold cursor-pointer win-btn", "Q" + (i + 1),
                    () -> switchQuestion(idx));
            qButtons.add(b);
            Ui.add(qRow, b);
        }

        HTMLElement controlGrid = Ui.el("div", "grid grid-cols-1 gap-2");
        startBtn = Ui.btnHtml("win-btn-selected py-2 px-3 text-xs font-bold flex items-center justify-center gap-1.5 disabled:opacity-40",
                Icons.svg("Play", "w-3.5 h-3.5") + "Start Poll (30s)", this::startPoll);
        revealBtn = Ui.btnHtml("win-btn py-2 px-3 text-xs font-bold flex items-center justify-center gap-1.5 disabled:opacity-40",
                Icons.svg("CheckCircle2", "w-3.5 h-3.5") + "Reveal Answer", this::reveal);
        nextBtn = Ui.btnHtml("win-btn py-2 px-3 text-xs font-bold flex items-center justify-center gap-1.5 disabled:opacity-40",
                "Next Question", this::nextQuestion);
        Ui.add(controlGrid, startBtn, revealBtn, nextBtn);

        connRow = Ui.el("div", "flex items-center gap-2 text-xs text-[#404040] border-t border-black/20 pt-3");
        Ui.add(teacherCard, teacherTitle, qRow, controlGrid, connRow);

        aiCard = Ui.el("div", "border-2 border-black rounded-none p-5 flex flex-col gap-2.5 shadow-[4px_4px_0_rgba(0,0,0,0.45)] text-xs text-black bg-[#FFFF99]");
        HTMLElement aiHeader = Ui.html("span", "font-semibold flex items-center gap-1.5",
                Icons.svg("GraduationCap", "w-4 h-4 text-[#0000CD]") + "AI Teacher");
        Ui.add(aiCard, aiHeader);

        Ui.add(rightCol, teacherCard, aiCard);
        Ui.add(mainGrid, leftCard, rightCol);
        Ui.add(root, kpiGrid, mainGrid);

        update();
        connect();
    }

    @Override
    public HTMLElement root() {
        return root;
    }

    @Override
    public void onPrimaryAction() {
        if (phase.equals("open")) {
            reveal();
        } else if (phase.equals("revealed")) {
            nextQuestion();
        } else {
            startPoll();
        }
    }

    @Override
    public void dispose() {
        disposed = true;
        if (countdownId >= 0) {
            Js.clearTimeout(countdownId);
            countdownId = -1;
        }
        if (ws != null) {
            try {
                ws.close();
            } catch (RuntimeException ignored) {
            }
            ws = null;
        }
    }

    private static HTMLElement kpiCard(HTMLElement grid, String label, String icon, String iconCls, String valueCls) {
        HTMLElement card = Ui.el("div", "bg-white border border-black rounded-none p-3.5 flex flex-col");
        HTMLElement header = Ui.html("div", "flex items-center justify-between text-xs text-[#404040] mb-1",
                "<span>" + label + "</span>" + Icons.svg(icon, iconCls));
        HTMLElement value = Ui.el("div", valueCls);
        Ui.add(card, header, value);
        Ui.add(grid, card);
        return value;
    }

    private static Text textNode(HTMLElement parent, String text) {
        Text t = Ui.doc().createTextNode(text);
        parent.appendChild(t);
        return t;
    }

    private OptionRow buildOptionRow(QuizOption opt) {
        OptionRow row = new OptionRow();
        row.root = Ui.el("div", "");
        Ui.on(row.root, "click", () -> castVote(opt.key()));
        row.bar = Ui.el("div", "");
        HTMLElement content = Ui.el("div", "relative z-10 flex items-center justify-between gap-4");
        HTMLElement left = Ui.el("div", "flex items-center gap-3.5");
        row.badge = Ui.el("div", "", opt.key());
        HTMLElement labelCol = Ui.el("div", "flex flex-col");
        row.label = Ui.el("span", "text-sm font-semibold text-black", opt.label());
        HTMLElement meta = Ui.el("div", "flex items-center gap-2 text-xs text-[#404040] mt-0.5 font-mono");
        row.count = Ui.el("span", "");
        row.pick = Ui.el("span", "font-bold text-[#0000CD]", "· Your pick");
        Ui.add(meta, row.count, row.pick);
        Ui.add(labelCol, row.label, meta);
        Ui.add(left, row.badge, labelCol);
        HTMLElement right = Ui.el("div", "flex items-center gap-4 shrink-0 text-right font-mono");
        HTMLElement pctCol = Ui.el("div", "flex flex-col");
        row.pct = Ui.el("span", "text-lg font-bold text-black tabular-nums");
        HTMLElement ofVotes = Ui.el("span", "text-[10px] text-[#404040] uppercase tracking-wider", "of votes");
        Ui.add(pctCol, row.pct, ofVotes);
        row.correct = Ui.html("div", "hidden sm:flex items-center gap-1 text-[#047857] text-xs font-semibold",
                Icons.svg("CheckCircle2", "w-4 h-4") + "<span>Correct</span>");
        Ui.add(right, pctCol, row.correct);
        Ui.add(content, left, right);
        Ui.add(row.root, row.bar, content);
        return row;
    }

    private void startPoll() {
        phase = "open";
        timeLeft = POLL_SECONDS;
        notice = null;
        Json.Obj msg = Json.obj();
        msg.setStr("type", "poll");
        msg.setStr("room", ROOM);
        msg.setStr("question", currentQuestionId());
        msg.setStr("action", "open");
        send(msg);
        update();
    }

    private void reveal() {
        phase = "revealed";
        timeLeft = null;
        Json.Obj msg = Json.obj();
        msg.setStr("type", "poll");
        msg.setStr("room", ROOM);
        msg.setStr("question", currentQuestionId());
        msg.setStr("action", "reveal");
        send(msg);
        update();
    }

    private void switchQuestion(int idx) {
        if (idx < 0 || idx >= QUESTIONS.size()) {
            return;
        }
        qIndex = idx;
        phase = "idle";
        timeLeft = null;
        voters.clear();
        notice = null;
        Json.Obj msg = Json.obj();
        msg.setStr("type", "question");
        msg.setStr("room", ROOM);
        msg.setStr("question", QUESTIONS.get(idx).id());
        send(msg);
        requestTally(QUESTIONS.get(idx).id());
        update();
    }

    private void nextQuestion() {
        switchQuestion((qIndex + 1) % QUESTIONS.size());
    }

    private void castVote(String key) {
        if (!phase.equals("open")) {
            notice = phase.equals("idle")
                    ? "The teacher has not started the poll yet. Wait for the poll to open."
                    : "Poll closed. Votes are locked in, the AI Teacher is explaining the answer.";
            update();
            return;
        }
        voters.put(myName, key);
        notice = null;
        Json.Obj msg = Json.obj();
        msg.setStr("type", "vote");
        msg.setStr("room", ROOM);
        msg.setStr("question", currentQuestionId());
        msg.setStr("option", key);
        msg.setStr("user", myName);
        send(msg);
        update();
    }

    private String currentQuestionId() {
        return QUESTIONS.get(qIndex).id();
    }

    private void send(Json.Obj msg) {
        if (ws != null && ws.isOpen()) {
            ws.send(Json.stringify(msg));
        }
    }

    private void requestTally(String questionId) {
        Json.Obj msg = Json.obj();
        msg.setStr("type", "tally");
        msg.setStr("room", ROOM);
        msg.setStr("question", questionId);
        send(msg);
    }

    private void connect() {
        try {
            String host = Js.hostname();
            if (host == null || host.isEmpty()) {
                host = "localhost";
            }
            ws = new Ws("ws://" + host + ":8090/ws/whiteboard");
            ws.onOpen(() -> {
                if (disposed) {
                    return;
                }
                connected = "live";
                Json.Obj join = Json.obj();
                join.setStr("type", "join");
                join.setStr("room", ROOM);
                join.setStr("user", myName);
                join.setStr("color", "#0000CD");
                send(join);
                requestTally(currentQuestionId());
                update();
            });
            ws.onMessage(this::handleMessage);
            ws.onError(() -> {
                if (disposed) {
                    return;
                }
                connected = "demo";
                update();
            });
            ws.onClose(() -> {
                if (disposed) {
                    return;
                }
                if (connected.equals("live")) {
                    connected = "demo";
                }
                update();
            });
        } catch (RuntimeException e) {
            connected = "demo";
        }
    }

    private void handleMessage(String data) {
        if (disposed) {
            return;
        }
        Json.Obj msg = parseSafe(data);
        if (msg == null) {
            return;
        }
        String room = Json.str(msg, "room");
        if (!room.isEmpty() && !room.equals(ROOM)) {
            return;
        }
        String type = Json.str(msg, "type");
        String qid = currentQuestionId();
        switch (type) {
            case "snapshot" -> {
                Json.Obj votes = Json.getObj(msg, "votes");
                if (votes != null) {
                    Json.Obj mine = Json.getObj(votes, qid);
                    if (mine != null) {
                        replaceVoters(mine);
                        update();
                    }
                }
            }
            case "vote" -> {
                String user = Json.str(msg, "user");
                String option = Json.str(msg, "option");
                if (Json.str(msg, "question").equals(qid) && !user.isEmpty() && !option.isEmpty()) {
                    voters.put(user, option);
                    update();
                }
            }
            case "tally" -> {
                Json.Obj tallyVoters = Json.getObj(msg, "voters");
                if (Json.str(msg, "question").equals(qid) && tallyVoters != null) {
                    replaceVoters(tallyVoters);
                    update();
                }
            }
            case "question" -> {
                String nextId = Json.str(msg, "question");
                if (!nextId.isEmpty()) {
                    for (int i = 0; i < QUESTIONS.size(); i++) {
                        if (QUESTIONS.get(i).id().equals(nextId)) {
                            qIndex = i;
                            phase = "idle";
                            timeLeft = null;
                            voters.clear();
                            notice = null;
                            update();
                            break;
                        }
                    }
                }
            }
            case "poll" -> {
                if (Json.str(msg, "question").equals(qid)) {
                    String action = Json.str(msg, "action");
                    if (action.equals("open")) {
                        phase = "open";
                        timeLeft = POLL_SECONDS;
                        notice = null;
                        update();
                    } else if (action.equals("reveal")) {
                        phase = "revealed";
                        timeLeft = null;
                        update();
                    }
                }
            }
            default -> {
            }
        }
    }

    private void replaceVoters(Json.Obj obj) {
        voters.clear();
        Json.Arr keys = Json.keys(obj);
        for (int i = 0; i < Json.len(keys); i++) {
            String user = Json.arrStr(keys, i);
            voters.put(user, Json.str(obj, user));
        }
    }

    private void update() {
        QuizQuestion question = QUESTIONS.get(qIndex);
        int[] tally = tallyOf(voters);
        int totalVotes = voters.size();
        String myVote = voters.get(myName);
        int correctIdx = correctIndex(question);
        boolean open = phase.equals("open");
        boolean revealed = phase.equals("revealed");

        String leadingKey = null;
        int leadingCount = -1;
        if (totalVotes > 0) {
            for (int i = 0; i < 4; i++) {
                if (tally[i] > leadingCount) {
                    leadingCount = tally[i];
                    leadingKey = KEYS[i];
                }
            }
        }
        int leadingPct = leadingKey != null ? (int) Math.round(leadingCount * 100.0 / totalVotes) : 0;
        int correctCount = revealed ? tally[correctIdx] : 0;
        int correctPct = revealed && totalVotes > 0 ? (int) Math.round(correctCount * 100.0 / totalVotes) : 0;

        votesText.setTextContent(String.valueOf(totalVotes));
        leadingText.setTextContent(leadingKey != null ? "Option " + leadingKey : "—");
        Ui.show(leadingPctSpan, leadingKey != null);
        if (leadingKey != null) {
            Ui.setText(leadingPctSpan, "(" + leadingPct + "% of votes)");
        }
        correctText.setTextContent(revealed ? String.valueOf(correctCount) : "—");
        Ui.show(correctPctSpan, revealed);
        if (revealed) {
            Ui.setText(correctPctSpan, "(" + correctPct + "% got it right)");
        }
        timeText.setTextContent(open && timeLeft != null ? timeLeft + "s" : revealed ? "Closed" : "Not started");

        String badgeCls = open ? "bg-[#047857] text-white" : revealed ? "bg-[#0000CD] text-white" : "bg-[#C0C0C0] text-black";
        String badgeText = open ? "POLL OPEN" : revealed ? "ANSWER REVEALED" : "WAITING";
        Ui.setHtml(questionGroup, Icons.svg("HelpCircle", "w-5 h-5 text-[#0000CD]")
                + "<span class=\"text-sm font-semibold text-black\">Question " + (qIndex + 1) + " of " + QUESTIONS.size() + "</span>"
                + "<span class=\"text-xs font-bold px-2 py-0.5 " + badgeCls + "\">" + badgeText + "</span>");

        Ui.setText(titleEl, question.title());
        Ui.setText(contextEl, question.context());

        for (int i = 0; i < optionRows.size(); i++) {
            QuizOption opt = question.options().get(i);
            OptionRow row = optionRows.get(i);
            int count = tally[i];
            int pct = totalVotes > 0 ? (int) Math.round(count * 100.0 / totalVotes) : 0;
            boolean isMine = opt.key().equals(myVote);
            boolean isCorrectRow = revealed && opt.isCorrect();

            Ui.cls(row.root, "relative overflow-hidden border rounded-none p-4 cursor-pointer transition-all "
                    + (isCorrectRow ? "border-[#047857] bg-[#FFFF99]"
                    : isMine ? "border-[#0000CD] bg-[#0000CD]/10"
                    : "border-black bg-white hover:border-black"));
            Ui.cls(row.bar, "absolute inset-y-0 left-0 transition-all duration-300 pointer-events-none "
                    + (isCorrectRow ? "bg-[#047857]/20" : "bg-[#0000CD]/10"));
            Ui.setStyle(row.bar, "width", pct + "%");
            Ui.cls(row.badge, "w-8 h-8 rounded-none flex items-center justify-center font-bold text-sm shrink-0 "
                    + (isCorrectRow ? "bg-[#047857] text-white"
                    : isMine ? "bg-[#0000CD] text-white"
                    : "bg-[#C0C0C0] text-[#1F1F1F]"));
            Ui.setText(row.label, opt.label());
            Ui.setText(row.count, count + " vote" + (count == 1 ? "" : "s"));
            Ui.show(row.pick, isMine);
            Ui.setText(row.pct, pct + "%");
            Ui.show(row.correct, isCorrectRow);
        }

        Ui.cls(statusBar, "p-3 border rounded-none text-xs flex items-center justify-between gap-3 "
                + (open ? "bg-[#0000CD]/10 border-[#0000CD]/40 text-black" : "bg-[#C0C0C0]/40 border-black/30 text-[#404040]"));
        String correctKey = KEYS[correctIdx];
        String status;
        if (open) {
            status = myVote != null
                    ? "Your answer: Option " + myVote + ". Tap another option to change it before time runs out."
                    : "Poll is open. Tap an option to answer.";
        } else if (revealed) {
            status = myVote != null
                    ? "Poll closed. You picked Option " + myVote
                    + (myVote.equals(correctKey) ? ", correct!" : ", the answer was Option " + correctKey + ".")
                    : "Poll closed. You did not answer this one.";
        } else {
            status = "The teacher has not started the poll yet.";
        }
        Ui.setText(statusText, status);
        boolean showTimer = open && timeLeft != null;
        Ui.show(statusTimer, showTimer);
        if (showTimer) {
            Ui.setText(statusTimer, timeLeft + "s");
        }

        Ui.show(noticeEl, notice != null);
        if (notice != null) {
            Ui.setText(noticeEl, notice);
        }

        for (int i = 0; i < qButtons.size(); i++) {
            Ui.cls(qButtons.get(i), "px-3 py-1 text-xs font-semibold cursor-pointer "
                    + (qIndex == i ? "win-btn-selected" : "win-btn"));
        }
        startBtn.setDisabled(!phase.equals("idle"));
        revealBtn.setDisabled(!open);
        nextBtn.setDisabled(open);

        if (connected.equals("live")) {
            Ui.setHtml(connRow, Icons.svg("Radio", "w-3.5 h-3.5 text-[#047857]")
                    + "<span>Live: votes sync through the Java server.</span>");
        } else if (connected.equals("connecting")) {
            Ui.setHtml(connRow, Icons.svg("Radio", "w-3.5 h-3.5 text-[#92400E]")
                    + "<span>Connecting to the Java server…</span>");
        } else {
            Ui.setHtml(connRow, Icons.svg("WifiOff", "w-3.5 h-3.5 text-[#92400E]")
                    + "<span>Demo mode: no server found, votes stay on this screen.</span>");
        }

        for (HTMLElement node : aiBody) {
            Ui.remove(node);
        }
        aiBody.clear();
        if (revealed) {
            HTMLElement explanation = Ui.el("p", "leading-relaxed", question.explanation());
            HTMLElement trap = Ui.el("p", "leading-relaxed");
            Ui.add(trap, Ui.el("strong", "", "Watch out: "));
            trap.appendChild(Ui.doc().createTextNode(question.trap()));
            String summary = totalVotes > 0
                    ? correctPct + "% of the class got it right. "
                    + (correctKey.equals(leadingKey) ? "The crowd was right this time." : "Most of the class picked Option " + leadingKey + ".")
                    : "Nobody voted on this one.";
            HTMLElement summaryEl = Ui.el("p", "leading-relaxed font-semibold", summary);
            aiBody.add(explanation);
            aiBody.add(trap);
            aiBody.add(summaryEl);
            Ui.add(aiCard, explanation, trap, summaryEl);
        } else {
            HTMLElement idle = Ui.el("p", "leading-relaxed text-[#404040]",
                    "The AI Teacher explains the answer once the poll closes. No peeking, answer first, then learn why.");
            aiBody.add(idle);
            Ui.add(aiCard, idle);
        }

        syncCountdown();
    }

    private void syncCountdown() {
        // The TSX effect deps are [phase, timeLeft] only: unrelated re-renders must not restart the tick.
        boolean sameState = phase.equals(countdownPhase)
                && (timeLeft == null ? countdownTime == null : timeLeft.equals(countdownTime));
        if (countdownId >= 0 && sameState) {
            return;
        }
        if (countdownId >= 0) {
            Js.clearTimeout(countdownId);
            countdownId = -1;
        }
        countdownPhase = phase;
        countdownTime = timeLeft;
        if (!phase.equals("open") || timeLeft == null) {
            return;
        }
        if (timeLeft <= 0) {
            reveal();
            return;
        }
        countdownId = Js.setTimeout(() -> {
            if (timeLeft != null) {
                timeLeft = timeLeft - 1;
                update();
            }
        }, 1000);
    }

    private static int[] tallyOf(Map<String, String> voters) {
        int[] tally = new int[4];
        for (String v : voters.values()) {
            if (v.length() == 1 && v.charAt(0) >= 'A' && v.charAt(0) <= 'D') {
                tally[v.charAt(0) - 'A']++;
            }
        }
        return tally;
    }

    private static int correctIndex(QuizQuestion question) {
        for (int i = 0; i < question.options().size(); i++) {
            if (question.options().get(i).isCorrect()) {
                return i;
            }
        }
        return 0;
    }

    @JSBody(params = {"s"}, script = "try { return JSON.parse(s); } catch (e) { return null; }")
    private static native Json.Obj parseSafe(String s);
}