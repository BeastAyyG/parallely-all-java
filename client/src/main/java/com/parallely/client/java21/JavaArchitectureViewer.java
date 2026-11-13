package com.parallely.client.java21;

import com.parallely.client.js.Js;
import com.parallely.client.shell.Clipboard;
import com.parallely.client.shell.Icons;
import com.parallely.client.shell.Ui;
import com.parallely.client.shell.View;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLElement;

import java.util.ArrayList;
import java.util.List;

public final class JavaArchitectureViewer implements View {

    private record CodeSnippet(String id, String title, String filename, String language, String description, String code) {
    }

    private static final String CANVAS_MODEL_CODE = """
            package com.parallely.client.whiteboard;

            // Canvas hit-testing: decide which element (if any) sits under the pointer.
            // Rectangle, Sticky and Text use a box test with a shared hit tolerance;
            // Ellipse uses the normalised circle equation; Stroke and Arrow walk points.
            // (TEXT uses the same box test as RECTANGLE - omitted here for brevity.)

            public final class CanvasModel {

                private static final double DEFAULT_HIT_TOLERANCE = 10;
                private static final double DEFAULT_SHAPE_WIDTH = 160;
                private static final double DEFAULT_RECT_HEIGHT = 100;

                public static boolean isPointInElement(Point point, CanvasElement elem, double hitTolerance) {
                    ElementType type = elem.type();

                    if (type == ElementType.RECTANGLE || type == ElementType.STICKY) {
                        double w = elem.width() != null ? elem.width() : DEFAULT_SHAPE_WIDTH;
                        double h = elem.height() != null ? elem.height() : DEFAULT_RECT_HEIGHT;
                        return point.x() >= elem.x() - hitTolerance
                                && point.x() <= elem.x() + w + hitTolerance
                                && point.y() >= elem.y() - hitTolerance
                                && point.y() <= elem.y() + h + hitTolerance;
                    }

                    if (type == ElementType.ELLIPSE) {
                        double rx = (elem.width() != null ? elem.width() : DEFAULT_SHAPE_WIDTH) / 2;
                        double ry = (elem.height() != null ? elem.height() : DEFAULT_RECT_HEIGHT) / 2;
                        double cx = elem.x() + rx;
                        double cy = elem.y() + ry;
                        double normalized = Math.pow((point.x() - cx) / (rx + hitTolerance), 2)
                                + Math.pow((point.y() - cy) / (ry + hitTolerance), 2);
                        return normalized <= 1;
                    }

                    if (type == ElementType.STROKE && elem.points() != null && !elem.points().isEmpty()) {
                        for (Point p : elem.points()) {
                            double dist = Math.hypot(p.x() - point.x(), p.y() - point.y());
                            if (dist <= elem.strokeWidth() + hitTolerance) {
                                return true;
                            }
                        }
                    }

                    if (type == ElementType.ARROW && elem.points() != null && elem.points().size() >= 2) {
                        return distanceToLineSegment(point, elem.points().get(0), elem.points().get(1))
                                <= elem.strokeWidth() + hitTolerance;
                    }

                    return false;
                }

                /** Shortest distance from the pointer to the arrow's line segment. */
                private static double distanceToLineSegment(Point p, Point a, Point b) {
                    double l2 = Math.pow(b.x() - a.x(), 2) + Math.pow(b.y() - a.y(), 2);
                    if (l2 == 0) {
                        return Math.hypot(p.x() - a.x(), p.y() - a.y());
                    }
                    double t = ((p.x() - a.x()) * (b.x() - a.x()) + (p.y() - a.y()) * (b.y() - a.y())) / l2;
                    t = Math.max(0, Math.min(1, t));
                    return Math.hypot(p.x() - (a.x() + t * (b.x() - a.x())),
                            p.y() - (a.y() + t * (b.y() - a.y())));
                }
            }""";

    private static final String LIVE_SESSION_CODE = """
            package com.parallely.client.whiteboard;

            // One WebSocket session per studio. Every canvas mutation becomes a JSON
            // text frame; the server stores it, then relays it to the other peers.

            public final class LiveSession {

                private static final int CURSOR_THROTTLE_MS = 120;

                private final WhiteboardStudio studio;
                private Ws ws = null;
                private boolean on = false;
                private String room = "main";
                private String name = "Guest-" + randomToken();
                private long lastCursorSent = 0;

                /** Canvas element upsert: the server stores it, then relays it to peers. */
                void upsert(CanvasElement el) {
                    Json.Obj m = Json.obj();
                    m.setStr("type", "element");
                    m.setStr("action", "upsert");
                    m.set("element", WhiteboardJson.toJson(el));
                    send(m);
                }

                void delete(String id) {
                    Json.Obj el = Json.obj();
                    el.setStr("id", id);
                    Json.Obj m = Json.obj();
                    m.setStr("type", "element");
                    m.setStr("action", "delete");
                    m.set("element", el);
                    send(m);
                }

                /** Peer cursors are throttled to ~8 frames/sec to keep the socket quiet. */
                void sendCursor(double x, double y) {
                    if (!on) {
                        return;
                    }
                    long now = System.currentTimeMillis();
                    if (now - lastCursorSent > CURSOR_THROTTLE_MS) {
                        lastCursorSent = now;
                        Json.Obj m = Json.obj();
                        m.setStr("type", "cursor");
                        m.setStr("user", name);
                        m.setNum("x", Math.round(x));
                        m.setNum("y", Math.round(y));
                        send(m);
                    }
                }

                /** Late joiners ask for nothing: the server's snapshot reply fills the canvas. */
                private void handleSnapshot(Json.Obj msg) {
                    Json.Arr arr = Json.getArr(msg, "elements");
                    int n = arr != null ? Json.len(arr) : 0;
                    if (n == 0) {
                        for (CanvasElement el : studio.elements) {
                            upsert(el);          // empty room: seed it with our board
                        }
                    } else {
                        List<CanvasElement> next = new ArrayList<>();
                        for (int i = 0; i < n; i++) {
                            next.add(WhiteboardJson.fromJson(Json.arrObj(arr, i)));
                        }
                        studio.undoStack.add(studio.elements);
                        studio.elements = next;
                    }
                    status = "live";
                    on = true;
                }

                private void send(Json.Obj m) {
                    if (ws != null && ws.isOpen()) {
                        m.setStr("room", room);
                        ws.send(Json.stringify(m));
                    }
                }
            }""";

    private static final String WHITEBOARD_SERVER_CODE = """
            package com.apex.whiteboard;

            // Protocol (JSON text frames over ws://host:port/ws/whiteboard):
            //   {"type":"join",   "room":"main","user":"Asha","color":"#38BDF8"}
            //   {"type":"element","room":"main","action":"upsert","element":{...}}
            //   {"type":"delete", "room":"main","id":"el-123"}
            //   {"type":"clear",  "room":"main"}
            //   {"type":"cursor", "room":"main","user":"Asha","x":120.5,"y":300.0}
            //   {"type":"leave",  "room":"main"}
            // Server replies to join with {"type":"snapshot","room":"main","elements":[...]}
            // and broadcasts {"type":"presence","room":"main","event":"join|leave","user":"..."}.

            public final class WhiteboardServer {

                private final ConcurrentHashMap<String, Room> rooms = new ConcurrentHashMap<>();

                /** Per-room state: member channels + last-write-wins element store. */
                private static final class Room {
                    final ChannelGroup members = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
                    final ConcurrentHashMap<String, JsonNode> elements = new ConcurrentHashMap<>();
                }

                public void start() throws Exception {
                    EventLoopGroup bossGroup = new NioEventLoopGroup(1);
                    // Project Loom virtual threads handle messages
                    EventLoopGroup workerGroup = new NioEventLoopGroup(
                            Runtime.getRuntime().availableProcessors(),
                            Thread.ofVirtual().name("whiteboard-worker-", 0).factory());
                    try {
                        new ServerBootstrap()
                            .group(bossGroup, workerGroup)
                            .channel(NioServerSocketChannel.class)
                            .childHandler(new ChannelInitializer<SocketChannel>() {
                                @Override
                                protected void initChannel(SocketChannel ch) {
                                    ch.pipeline().addLast(new HttpServerCodec());
                                    ch.pipeline().addLast(new HttpObjectAggregator(65536));
                                    ch.pipeline().addLast(new WebSocketServerProtocolHandler("/ws/whiteboard"));
                                    ch.pipeline().addLast(new WhiteboardFrameHandler(rooms));
                                }
                            })
                            .bind(port).sync().channel().closeFuture().sync();
                    } finally {
                        bossGroup.shutdownGracefully();
                        workerGroup.shutdownGracefully();
                    }
                }

                public static void main(String[] args) throws Exception {
                    int port = args.length > 0 ? Integer.parseInt(args[0]) : 8090;
                    new WhiteboardServer(port).start();
                }
            }""";

    private static final String MCQ_CLIENT_CODE = """
            package com.parallely.client.mcq;

            // Live classroom poll: the teacher opens a 30-second poll, every student's
            // pick is one WebSocket frame, and tallies stream back to everyone live.

            public final class McqConsensusView implements View {

                private record QuizOption(String key, String label, boolean isCorrect) {
                }

                private record QuizQuestion(String id, String title, String context, List<QuizOption> options,
                                            String explanation, String trap) {
                }

                private static final int POLL_SECONDS = 30;
                private static final String ROOM = "main";

                private int qIndex = 0;
                private String phase = "idle";            // idle -> open -> revealed
                private final Map<String, String> voters = new LinkedHashMap<>(); // voter -> A/B/C/D

                /** One vote per student: changeable until the reveal, stored server-side. */
                private void castVote(String key) {
                    if (!phase.equals("open")) {
                        notice = phase.equals("idle")
                                ? "The teacher has not started the poll yet. Wait for the poll to open."
                                : "Poll closed. Votes are locked in, the AI Teacher is explaining the answer.";
                        update();
                        return;
                    }
                    voters.put(myName, key);
                    Json.Obj msg = Json.obj();
                    msg.setStr("type", "vote");
                    msg.setStr("room", ROOM);
                    msg.setStr("question", currentQuestionId());
                    msg.setStr("option", key);
                    msg.setStr("user", myName);
                    send(msg);
                    update();
                }

                /** Teacher control: open a 30-second poll for the current question. */
                private void startPoll() {
                    phase = "open";
                    timeLeft = POLL_SECONDS;
                    Json.Obj msg = Json.obj();
                    msg.setStr("type", "poll");
                    msg.setStr("room", ROOM);
                    msg.setStr("question", currentQuestionId());
                    msg.setStr("action", "open");
                    send(msg);
                    update();
                }

                private void handleMessage(String data) {
                    Json.Obj msg = parseSafe(data);
                    if (msg == null) {
                        return;
                    }
                    String type = Json.str(msg, "type");
                    String qid = currentQuestionId();
                    switch (type) {
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
                        case "poll" -> {
                            if (Json.str(msg, "question").equals(qid)
                                    && Json.str(msg, "action").equals("open")) {
                                phase = "open";
                                timeLeft = POLL_SECONDS;
                                update();
                            }
                        }
                        default -> {
                        }
                    }
                }
            }""";

    private static final String VOTE_TALLY_SERVER_CODE = """
            package com.apex.whiteboard;

            // Live-quiz protocol (JSON text frames over the same whiteboard socket):
            //   {"type":"vote","room":"main","question":"q1","option":"B","user":"Asha"}
            //   {"type":"tally","room":"main","question":"q1"}
            // Votes are stored per question; every vote re-broadcasts the running tally.

            public final class WhiteboardServer {

                private final ConcurrentHashMap<String, Room> rooms = new ConcurrentHashMap<>();

                /** Mutable per-room state: members plus last-write-wins element store. */
                private static final class Room {
                    final ChannelGroup members = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
                    final ConcurrentHashMap<String, JsonNode> elements = new ConcurrentHashMap<>();
                    /** Live-quiz votes: question id -> (voter name -> option A/B/C/D). One vote per voter. */
                    final ConcurrentHashMap<String, ConcurrentHashMap<String, String>> votes = new ConcurrentHashMap<>();
                }

                /** Live-quiz vote: one vote per voter per question, changeable until the reveal. */
                private void handleVote(ChannelHandlerContext ctx, String roomName, JsonNode msg) {
                    Room room = rooms.get(roomName);
                    if (room == null) {
                        sendError(ctx, "not in room " + roomName);
                        return;
                    }
                    String question = msg.path("question").asText("");
                    String option = msg.path("option").asText("");
                    if (question.isEmpty() || !(option.equals("A") || option.equals("B")
                            || option.equals("C") || option.equals("D"))) {
                        sendError(ctx, "vote message needs a question and an option A/B/C/D");
                        return;
                    }
                    String user = msg.path("user").asText("");
                    if (user.isEmpty()) {
                        String known = ctx.channel().attr(USER).get();
                        user = known == null ? "anonymous" : known;
                    }
                    room.votes.computeIfAbsent(question, k -> new ConcurrentHashMap<>()).put(user, option);

                    ObjectNode tallyMsg = JSON.createObjectNode();
                    tallyMsg.put("type", "vote");
                    tallyMsg.put("room", roomName);
                    tallyMsg.put("question", question);
                    tallyMsg.put("user", user);
                    tallyMsg.put("option", option);
                    tallyMsg.set("tally", tallyNode(room, question));
                    broadcastExcept(room, ctx.channel(), tallyMsg.toString());
                }

                /** A client asks for the stored votes of one question; reply to the requester only. */
                private void handleTally(ChannelHandlerContext ctx, String roomName, JsonNode msg) {
                    String question = msg.path("question").asText("");
                    Room room = rooms.get(roomName);
                    ObjectNode reply = JSON.createObjectNode();
                    reply.put("type", "tally");
                    reply.put("room", roomName);
                    reply.put("question", question);
                    ObjectNode votersNode = reply.putObject("voters");
                    if (room != null && !question.isEmpty()) {
                        for (var voter : room.votes.getOrDefault(question, new ConcurrentHashMap<>()).entrySet()) {
                            votersNode.put(voter.getKey(), voter.getValue());
                        }
                        reply.set("tally", tallyNode(room, question));
                    } else {
                        reply.set("tally", tallyNode(null, question));
                    }
                    ctx.writeAndFlush(new TextWebSocketFrame(reply.toString()));
                }

                /** Per-option counts for one question. */
                private ObjectNode tallyNode(Room room, String question) {
                    ObjectNode tally = JSON.createObjectNode();
                    int a = 0, b = 0, c = 0, d = 0;
                    if (room != null) {
                        for (String option : room.votes.getOrDefault(question, new ConcurrentHashMap<>()).values()) {
                            switch (option) {
                                case "A" -> a++;
                                case "B" -> b++;
                                case "C" -> c++;
                                case "D" -> d++;
                                default -> {
                                }
                            }
                        }
                    }
                    tally.put("A", a);
                    tally.put("B", b);
                    tally.put("C", c);
                    tally.put("D", d);
                    return tally;
                }
            }""";

    private static final CodeSnippet[] JAVA_FILES = {
            new CodeSnippet(
                    "canvas-model",
                    "Canvas Model & Hit Testing",
                    "CanvasModel.java",
                    "java",
                    "Enum-driven canvas geometry: point-in-shape hit testing for rectangles, stickies, ellipses, strokes and arrows with a shared hit tolerance. (Mirrors client/src/main/java/com/parallely/client/whiteboard/CanvasModel.java)",
                    CANVAS_MODEL_CODE),
            new CodeSnippet(
                    "live-session",
                    "Live Canvas Session",
                    "LiveSession.java",
                    "java",
                    "WebSocket client that keeps the canvas in sync: element upsert/delete frames, snapshot-on-join for late joiners, and peer cursor relay throttled to ~8 fps. (Mirrors client/src/main/java/com/parallely/client/whiteboard/LiveSession.java)",
                    LIVE_SESSION_CODE),
            new CodeSnippet(
                    "whiteboard-server",
                    "Whiteboard WebSocket Server",
                    "WhiteboardServer.java",
                    "java",
                    "Netty WebSocket server with Project Loom virtual-thread workers: room-based channels, last-write-wins element state, snapshot-on-join, cursor relay. (Mirrors server/src/main/java/com/apex/whiteboard/WhiteboardServer.java)",
                    WHITEBOARD_SERVER_CODE),
            new CodeSnippet(
                    "mcq-client",
                    "Live MCQ Poll Client",
                    "McqConsensusView.java",
                    "java",
                    "Java records for questions and options, a 30-second poll phase machine, one vote per student, and live tally updates over the same WebSocket. (Mirrors client/src/main/java/com/parallely/client/mcq/McqConsensusView.java)",
                    MCQ_CLIENT_CODE),
            new CodeSnippet(
                    "vote-tally",
                    "Vote & Tally Relay (Server)",
                    "WhiteboardServer.java",
                    "java",
                    "ConcurrentHashMap of votes per question, one vote per voter, and a running per-option tally broadcast on every vote. (Mirrors server/src/main/java/com/apex/whiteboard/WhiteboardServer.java)",
                    VOTE_TALLY_SERVER_CODE),
    };

    private static final String SELECTOR_BASE_CLS = "text-left p-3.5 rounded-none border transition-all cursor-pointer flex flex-col gap-1 ";
    private static final String SELECTOR_ACTIVE_CLS = "bg-[#C0C0C0]/90 border-[#0000CD]/60 shadow-lg";
    private static final String SELECTOR_INACTIVE_CLS = "bg-white border-black hover:bg-[#D4D4D4]/40";
    private static final String COPY_BUTTON_CLS = "flex items-center gap-2 px-4 py-2 bg-[#0000CD] hover:bg-[#0000CD] text-white rounded-none text-xs font-semibold shadow-sm transition-colors cursor-pointer self-start md:self-auto";
    private static final int COPY_RESET_MS = 2000;

    private final HTMLElement root;
    private final List<Integer> copyTimeouts = new ArrayList<>();
    private HTMLButtonElement copyButton;
    private HTMLButtonElement[] selectorButtons;
    private HTMLElement headerFilename;
    private HTMLElement descriptionBanner;
    private HTMLElement codeEl;
    private String selectedSnippetId = "canvas-model";
    private boolean copied;

    public JavaArchitectureViewer() {
        root = Ui.el("div", "w-full h-full bg-[#008080] text-black p-6 flex flex-col gap-5 select-none overflow-y-auto");
        Ui.add(root, buildBanner(), buildExplorer());
    }

    @Override
    public HTMLElement root() {
        return root;
    }

    @Override
    public void onPrimaryAction() {
    }

    @Override
    public void dispose() {
        for (int id : copyTimeouts) {
            Js.clearTimeout(id);
        }
        copyTimeouts.clear();
    }

    private HTMLElement buildBanner() {
        HTMLElement banner = Ui.el("div", "bg-white border border-black rounded-none p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLElement left = Ui.el("div", "flex items-center gap-3.5");
        HTMLElement iconBox = Ui.html("div", "w-10 h-10 rounded-none bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[#0369A1]", Icons.svg("Cpu", "w-5 h-5"));
        HTMLElement titles = plain("div");
        Ui.add(titles,
                Ui.el("h1", "text-base font-bold text-[#1F1F1F] tracking-tight", "Production Java 21+ Architecture & Engineering Blueprint"),
                Ui.el("p", "text-xs text-[#404040]", "Java 21 Records · TeaVM 0.12.0 · Project Loom Virtual Threads · Netty WebSocket"));
        Ui.add(left, iconBox, titles);
        copyButton = Ui.btnHtml(COPY_BUTTON_CLS, copyButtonInner(), this::handleCopy);
        Ui.add(banner, left, copyButton);
        return banner;
    }

    private HTMLElement buildExplorer() {
        HTMLElement grid = Ui.el("div", "grid grid-cols-1 lg:grid-cols-12 gap-5");
        Ui.add(grid, buildFileSelector(), buildCodeViewer());
        return grid;
    }

    private HTMLElement buildFileSelector() {
        HTMLElement left = Ui.el("div", "lg:col-span-4 flex flex-col gap-2");
        Ui.add(left, Ui.el("span", "font-pixel text-2xl text-white uppercase tracking-wider px-1", "Java 21 Source Blueprint"));
        selectorButtons = new HTMLButtonElement[JAVA_FILES.length];
        for (int i = 0; i < JAVA_FILES.length; i++) {
            CodeSnippet snippet = JAVA_FILES[i];
            HTMLButtonElement button = Ui.btn(selectorClass(snippet.id), "", () -> selectSnippet(snippet.id));
            HTMLElement row = Ui.el("div", "flex items-center justify-between");
            Ui.add(row,
                    Ui.el("span", "text-xs font-bold text-white font-mono", snippet.filename),
                    Ui.el("span", "text-[10px] text-[#0000CD] font-semibold", snippet.title));
            Ui.add(button, row, Ui.el("p", "text-[11px] text-[#404040] line-clamp-2 leading-relaxed", snippet.description));
            selectorButtons[i] = button;
            Ui.add(left, button);
        }
        return left;
    }

    private HTMLElement buildCodeViewer() {
        CodeSnippet active = activeSnippet();
        HTMLElement viewer = Ui.el("div", "lg:col-span-8 bg-slate-950 border border-black rounded-none overflow-hidden flex flex-col shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLElement header = Ui.el("div", "flex items-center justify-between px-4 py-3 bg-[#C0C0C0] border-b border-black");
        HTMLElement headerLeft = Ui.html("div", "flex items-center gap-2 font-mono text-xs text-[#1F1F1F]", Icons.svg("FileCode", "w-4 h-4 text-[#0369A1]"));
        headerFilename = textEl("span", active.filename);
        Ui.add(headerLeft, headerFilename);
        Ui.add(header, headerLeft, Ui.el("span", "text-xs text-[#404040] font-mono", "Java 21 LTS"));
        descriptionBanner = Ui.el("div", "px-4 py-2.5 bg-indigo-950/20 border-b border-black/80 text-xs text-indigo-200", active.description);
        HTMLElement body = Ui.el("div", "p-4 overflow-x-auto font-mono text-xs text-[#E5E5E5] leading-relaxed max-h-[540px]");
        HTMLElement pre = plain("pre");
        codeEl = textEl("code", active.code);
        Ui.add(pre, codeEl);
        Ui.add(body, pre);
        Ui.add(viewer, header, descriptionBanner, body);
        return viewer;
    }

    private void selectSnippet(String id) {
        selectedSnippetId = id;
        for (int i = 0; i < JAVA_FILES.length; i++) {
            Ui.cls(selectorButtons[i], selectorClass(JAVA_FILES[i].id));
        }
        CodeSnippet active = activeSnippet();
        renderCopyButton();
        Ui.setText(headerFilename, active.filename);
        Ui.setText(descriptionBanner, active.description);
        Ui.setText(codeEl, active.code);
    }

    private void handleCopy() {
        Clipboard.copy(activeSnippet().code);
        copied = true;
        renderCopyButton();
        int[] timeoutId = new int[1];
        timeoutId[0] = Js.setTimeout(() -> {
            copyTimeouts.remove(Integer.valueOf(timeoutId[0]));
            copied = false;
            renderCopyButton();
        }, COPY_RESET_MS);
        copyTimeouts.add(timeoutId[0]);
    }

    private void renderCopyButton() {
        Ui.setHtml(copyButton, copyButtonInner());
    }

    private String copyButtonInner() {
        String icon = copied ? Icons.svg("Check", "w-4 h-4 text-emerald-300") : Icons.svg("Copy", "w-4 h-4");
        String label = copied ? "Copied to Clipboard" : "Copy " + activeSnippet().filename;
        return icon + "<span>" + label + "</span>";
    }

    private String selectorClass(String id) {
        return SELECTOR_BASE_CLS + (id.equals(selectedSnippetId) ? SELECTOR_ACTIVE_CLS : SELECTOR_INACTIVE_CLS);
    }

    private CodeSnippet activeSnippet() {
        for (CodeSnippet snippet : JAVA_FILES) {
            if (snippet.id.equals(selectedSnippetId)) {
                return snippet;
            }
        }
        return JAVA_FILES[0];
    }

    private static HTMLElement plain(String tag) {
        return Ui.doc().createElement(tag);
    }

    private static HTMLElement textEl(String tag, String text) {
        HTMLElement e = plain(tag);
        e.setTextContent(text);
        return e;
    }
}
