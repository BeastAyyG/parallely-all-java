package com.parallely.client.shell;

import com.parallely.client.engine.MatchingEngineStudio;
import com.parallely.client.java21.JavaArchitectureViewer;
import com.parallely.client.js.Js;
import com.parallely.client.mcq.McqConsensusView;
import com.parallely.client.whiteboard.WhiteboardStudio;
import org.teavm.jso.dom.html.HTMLElement;

public final class AppShell {
    private static final String MARQUEE_TEXT =
            "COLLABORATIVE WHITEBOARD • THE NULL POINTERS • SRM UNIVERSITY AP • CSE 213 • ";

    private static final String[][] DESKTOP_ICONS = {
            {"whiteboard", "Whiteboard", "Layers"},
            {"engine", "Matching Engine", "Activity"},
            {"mcq", "MCQ Consensus", "HelpCircle"},
            {"java", "Java 21", "FileCode"},
            {"recycle", "Recycle Bin", "Trash2"},
    };

    private static final String[][] START_MENU_TABS = {
            {"whiteboard", "Whiteboard Studio", "Layers"},
            {"engine", "LMAX Disruptor Engine", "Activity"},
            {"mcq", "Virtual MCQ Consensus", "HelpCircle"},
            {"java", "Java 21 Architecture", "FileCode"},
    };

    private String activeTab = "whiteboard";
    private String windowState = "maximized";
    private boolean startOpen = false;
    private String dialog = null;

    private final HTMLElement root;
    private final HTMLElement bodyArea;
    private final HTMLElement windowEl;
    private final HTMLElement headerSlot;
    private final HTMLElement mainEl;
    private final HTMLElement overlayLayer;
    private final HTMLElement startBtn;
    private final HTMLElement taskbarWindowBtn;
    private final HTMLElement clockEl;
    private View currentView;
    // The whiteboard owns the canvas, the bot swarm and the live WebSocket. Keep a
    // single instance alive for the whole session so switching tabs (or minimizing
    // the window) never tears down a live room or wipes the board.
    private WhiteboardStudio whiteboardView;

    public AppShell() {
        root = Ui.el("div", "relative h-screen win-desktop flex flex-col font-win text-black antialiased overflow-hidden");
        bodyArea = Ui.el("div", "flex-1 min-h-0 relative");
        windowEl = Ui.el("div", "");
        headerSlot = Ui.el("div", "");
        mainEl = Ui.el("main", "flex-1 w-full overflow-hidden min-h-0");
        overlayLayer = Ui.el("div", "");

        HTMLElement titleBar = Ui.el("div", "win-titlebar-gradient flex items-center gap-2 px-2 h-9 shrink-0 select-none");
        Ui.add(titleBar,
                Ui.el("span", "w-6 h-6 bg-[#0000CD] border border-white/60 flex items-center justify-center text-white text-sm leading-none shrink-0", "☰"),
                Ui.el("span", "font-pixel text-2xl leading-none text-white tracking-wide truncate", "Collaborative Whiteboard - the null pointers"));
        HTMLElement titleBtns = Ui.el("span", "ml-auto flex items-center gap-1");
        HTMLElement aboutBtn = Ui.btn("win-title-btn", "?", () -> setDialog("about"));
        Ui.attr(aboutBtn, "title", "About");
        HTMLElement minBtn = Ui.btn("win-title-btn", "_", this::minimize);
        Ui.attr(minBtn, "title", "Minimize");
        HTMLElement restoreBtn = Ui.btn("win-title-btn", "□", this::toggleWindowed);
        Ui.attr(restoreBtn, "title", "Restore");
        HTMLElement closeBtn = Ui.btn("win-title-btn", "×", () -> setDialog("close-confirm"));
        Ui.attr(closeBtn, "title", "Close");
        Ui.add(titleBtns, aboutBtn, minBtn, restoreBtn, closeBtn);
        Ui.add(titleBar, titleBtns);

        HTMLElement marquee = Ui.el("div", "bg-[#008080] border-b-2 border-black overflow-hidden shrink-0 select-none");
        Ui.attr(marquee, "aria-hidden", "true");
        HTMLElement track = Ui.el("div", "win-marquee-track flex whitespace-nowrap font-pixel text-[22px] leading-none text-white py-1 w-max");
        String repeated = MARQUEE_TEXT.repeat(4);
        Ui.add(track, Ui.el("span", "pr-2", repeated), Ui.el("span", "pr-2", repeated));
        Ui.add(marquee, track);

        Ui.add(windowEl, titleBar, marquee, headerSlot, mainEl);

        HTMLElement taskbar = Ui.el("footer", "win-taskbar h-10 shrink-0 flex items-center gap-2 px-2 text-black select-none relative z-30");
        startBtn = Ui.btnHtml("win-btn px-3 py-1 text-sm font-bold flex items-center gap-1.5",
                "<span aria-hidden=\"true\">■</span> Start", this::toggleStart);
        Ui.attr(startBtn, "title", "the null pointers");
        taskbarWindowBtn = Ui.btn("win-sunken px-2 py-1 text-xs truncate max-w-[160px] sm:max-w-xs text-left", "", this::toggleTaskbarButton);
        Ui.add(taskbar, startBtn, taskbarWindowBtn,
                Ui.el("span", "ml-auto font-pixel text-xl leading-none tracking-wide hidden md:block", "SRM UNIVERSITY, AP | 2026 - 27"));
        clockEl = Ui.el("span", "win-sunken px-2 py-1 text-xs tabular-nums", Js.clockString());
        Ui.add(taskbar, clockEl);

        Ui.add(root, bodyArea, taskbar, overlayLayer);

        switchView();
        renderBody();
        renderHeader();
        renderTaskbar();

        Js.setInterval(() -> Ui.setText(clockEl, Js.clockString()), 1000);
    }

    public HTMLElement root() {
        return root;
    }

    private View createView(String tab) {
        return switch (tab) {
            case "whiteboard" -> {
                if (whiteboardView == null) {
                    whiteboardView = new WhiteboardStudio();
                }
                yield whiteboardView;
            }
            case "engine" -> new MatchingEngineStudio();
            case "mcq" -> new McqConsensusView();
            case "java" -> new JavaArchitectureViewer();
            default -> throw new IllegalArgumentException("unknown tab: " + tab);
        };
    }

    private void switchView() {
        if (currentView != null && currentView != whiteboardView) {
            currentView.dispose();
        }
        currentView = createView(activeTab);
        Ui.replaceChildren(mainEl, currentView.root());
    }

    private void disposeView() {
        if (currentView != null && currentView != whiteboardView) {
            currentView.dispose();
        }
        currentView = null;
        Ui.clear(mainEl);
    }

    private String tabName(String tab) {
        return switch (tab) {
            case "whiteboard" -> "Whiteboard Studio";
            case "engine" -> "LMAX Disruptor Engine";
            case "mcq" -> "Virtual MCQ Consensus";
            case "java" -> "Java 21 Architecture";
            default -> tab;
        };
    }

    private String primaryActionLabel() {
        return switch (activeTab) {
            case "whiteboard" -> "Spawn Bot Swarm";
            case "engine" -> "Inject 10k Load Burst";
            case "mcq" -> "Poll Control";
            case "java" -> "Copy Java Quickstart";
            default -> "";
        };
    }

    private void handlePrimaryAction() {
        if (activeTab.equals("java")) {
            Clipboard.copy(JAVA_QUICKSTART);
        } else if (currentView != null) {
            currentView.onPrimaryAction();
        }
    }

    private void openTab(String tab) {
        activeTab = tab;
        windowState = "maximized";
        startOpen = false;
        switchView();
        renderBody();
        renderHeader();
        renderTaskbar();
        renderOverlays();
    }

    private void minimize() {
        windowState = "minimized";
        startOpen = false;
        disposeView();
        renderBody();
        renderTaskbar();
        renderOverlays();
    }

    private void toggleWindowed() {
        windowState = windowState.equals("windowed") ? "maximized" : "windowed";
        renderBody();
        renderHeader();
    }

    private void toggleTaskbarButton() {
        if (windowState.equals("minimized")) {
            windowState = "maximized";
            switchView();
            renderBody();
            renderHeader();
        } else {
            minimize();
        }
        startOpen = false;
        renderTaskbar();
        renderOverlays();
    }

    private void toggleStart() {
        startOpen = !startOpen;
        renderTaskbar();
        renderOverlays();
    }

    private void setDialog(String kind) {
        dialog = kind;
        renderOverlays();
    }

    private void renderBody() {
        Ui.clear(bodyArea);
        if (windowState.equals("minimized")) {
            Ui.add(bodyArea, desktopIcons());
            HTMLElement center = Ui.el("div", "absolute inset-0 flex items-center justify-center pointer-events-none px-6");
            Ui.add(center, Ui.el("span", "font-pixel text-3xl text-white/80 text-center", "Collaborative Whiteboard is minimized"));
            Ui.add(bodyArea, center);
        } else if (windowState.equals("windowed")) {
            Ui.cls(bodyArea, "flex-1 min-h-0 relative flex items-center justify-center p-4 sm:p-8");
            Ui.add(bodyArea, desktopIcons());
            Ui.cls(windowEl, "win-window w-full max-w-6xl h-full flex flex-col overflow-hidden");
            Ui.add(bodyArea, windowEl);
        } else {
            Ui.cls(bodyArea, "flex-1 min-h-0 relative");
            Ui.cls(windowEl, "flex flex-col h-full overflow-hidden");
            Ui.add(bodyArea, windowEl);
        }
    }

    private HTMLElement desktopIcons() {
        HTMLElement wrap = Ui.el("div", "absolute left-3 top-3 z-10 flex flex-col gap-4 select-none");
        for (String[] icon : DESKTOP_ICONS) {
            HTMLElement b = Ui.el("button", "flex flex-col items-center gap-1 w-20 group");
            HTMLElement iconWrap = Ui.el("span", "w-10 h-10 flex items-center justify-center text-white group-hover:bg-white/20 border border-transparent group-hover:border-white/60");
            Ui.setHtml(iconWrap, Icons.svg(icon[2], "w-7 h-7"));
            HTMLElement label = Ui.el("span", "font-pixel text-lg leading-none text-white text-center px-1", icon[1]);
            Ui.setStyle(label, "text-shadow", "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000");
            Ui.add(b, iconWrap, label);
            String id = icon[0];
            Ui.on(b, "click", () -> {
                if (id.equals("recycle")) {
                    setDialog("recycle");
                } else {
                    openTab(id);
                }
            });
            Ui.add(wrap, b);
        }
        return wrap;
    }

    private void renderHeader() {
        Header.build(headerSlot, activeTab, primaryActionLabel(), windowState.equals("windowed"), new Header.Callbacks() {
            @Override
            public void onTabChange(String tab) {
                activeTab = tab;
                switchView();
                renderHeader();
                renderTaskbar();
            }

            @Override
            public void onPrimaryAction() {
                handlePrimaryAction();
            }
        });
    }

    private void renderTaskbar() {
        Ui.cls(startBtn, "win-btn px-3 py-1 text-sm font-bold flex items-center gap-1.5" + (startOpen ? " win-btn-pressed" : ""));
        Ui.setText(taskbarWindowBtn, tabName(activeTab));
        Ui.attr(taskbarWindowBtn, "title", windowState.equals("minimized")
                ? "Restore Collaborative Whiteboard" : "Minimize Collaborative Whiteboard");
    }

    private void renderOverlays() {
        Ui.clear(overlayLayer);
        if (startOpen) {
            HTMLElement backdrop = Ui.el("div", "fixed inset-0 z-40");
            Ui.attr(backdrop, "aria-hidden", "true");
            Ui.on(backdrop, "click", () -> {
                startOpen = false;
                renderTaskbar();
                renderOverlays();
            });
            HTMLElement panel = Ui.el("div", "absolute left-2 bottom-11 z-50 w-64 win-panel p-1 flex");
            HTMLElement sidebar = Ui.el("div", "w-7 shrink-0 bg-[#0000CD] text-white font-pixel text-xl flex items-center justify-center py-2");
            HTMLElement sideText = Ui.el("span", "rotate-180 tracking-wide", "the null pointers");
            Ui.setStyle(sideText, "writing-mode", "vertical-rl");
            Ui.add(sidebar, sideText);
            HTMLElement items = Ui.el("div", "flex-1 py-1");
            for (String[] tab : START_MENU_TABS) {
                HTMLElement b = Ui.btnHtml("w-full flex items-center gap-2 px-2 py-1.5 text-sm font-bold text-left hover:bg-[#0000CD] hover:text-white",
                        Icons.svg(tab[2], "w-4 h-4 shrink-0") + tab[1],
                        () -> openTab(tab[0]));
                Ui.add(items, b);
            }
            Ui.add(items, Ui.el("div", "border-t-2 border-black/20 my-1"));
            HTMLElement about = Ui.btnHtml("w-full flex items-center gap-2 px-2 py-1.5 text-sm font-bold text-left hover:bg-[#0000CD] hover:text-white",
                    "<span class=\"w-4 h-4 flex items-center justify-center font-bold\">?</span> About Collaborative Whiteboard...",
                    () -> {
                        startOpen = false;
                        renderTaskbar();
                        setDialog("about");
                    });
            Ui.add(items, about);
            Ui.add(panel, sidebar, items);
            Ui.add(overlayLayer, backdrop, panel);
        }
        if (dialog != null) {
            Ui.add(overlayLayer, buildDialog(dialog));
        }
    }

    private HTMLElement buildDialog(String kind) {
        String title = switch (kind) {
            case "about" -> "About Collaborative Whiteboard";
            case "recycle" -> "Recycle Bin";
            case "close-confirm" -> "Close Collaborative Whiteboard";
            default -> "";
        };
        HTMLElement overlay = Ui.el("div", "fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4");
        Ui.on(overlay, "click", () -> setDialog(null));
        HTMLElement win = Ui.el("div", "win-window w-full max-w-md");
        Ui.onStop(win, "click", () -> {
        });
        HTMLElement bar = Ui.el("div", "win-titlebar-blue flex items-center gap-2 px-2 py-1 select-none");
        HTMLElement close = Ui.btn("win-title-btn ml-auto", "×", () -> setDialog(null));
        Ui.attr(close, "title", "Close");
        Ui.add(bar, Ui.el("span", "font-pixel text-xl leading-none truncate", title), close);
        HTMLElement content = Ui.el("div", "p-4 text-sm flex flex-col gap-3");
        HTMLElement footer = Ui.el("div", "flex justify-end");
        if (kind.equals("about")) {
            Ui.add(content,
                    Ui.el("p", "font-pixel text-3xl leading-none", "COLLABORATIVE WHITEBOARD"),
                    Ui.el("p", "", "Version 1.0 · Advanced Java Programming Project, CSE 213"),
                    Ui.html("p", "", "Built by <strong>the null pointers</strong>: Naga Nikitha Sanaka, Vanshika Chand, Agastya Pandey, Sai Aswitha, Khalid Raza."),
                    Ui.el("p", "", "Department of Computer Science and Engineering, SRM University, AP | 2026 - 27"),
                    Ui.el("p", "text-xs text-[#404040]", "Real-time whiteboard over a Java 21 WebSocket server, LMAX Disruptor matching engine, and Project Loom virtual threads."));
            Ui.add(footer, Ui.btn("win-btn px-4 py-1 text-sm font-bold", "OK", () -> setDialog(null)));
        } else if (kind.equals("recycle")) {
            Ui.add(content, Ui.el("p", "", "Recycle Bin is empty."));
            Ui.add(footer, Ui.btn("win-btn px-4 py-1 text-sm font-bold", "OK", () -> setDialog(null)));
        } else if (kind.equals("close-confirm")) {
            Ui.add(content, Ui.el("p", "", "Close Collaborative Whiteboard? Your board is saved on the server."));
            Ui.cls(footer, "flex justify-end gap-2");
            Ui.add(footer,
                    Ui.btn("win-btn px-4 py-1 text-sm font-bold", "Yes", () -> {
                        setDialog(null);
                        minimize();
                    }),
                    Ui.btn("win-btn px-4 py-1 text-sm font-bold", "No", () -> setDialog(null)));
        }
        Ui.add(content, footer);
        Ui.add(win, bar, content);
        Ui.add(overlay, win);
        return overlay;
    }

    private static final String JAVA_QUICKSTART = """
            # Apex Java backend quickstart (needs JDK 21 + Maven)
            cd java
            mvn -q package -DskipTests          # builds apex-engine.jar (fat jar)
            java -jar target/apex-engine.jar    # runs the EngineDemoMain walkthrough

            # Whiteboard WebSocket server (rooms, snapshots, cursor relay)
            java -cp target/apex-engine.jar com.apex.whiteboard.WhiteboardServer 8090
            # -> ws://localhost:8090/ws/whiteboard  (protocol documented in README.md)

            # 10,000 virtual-thread order simulation
            java -cp target/apex-engine.jar com.apex.simulator.LoomSimulationMain

            # JMH throughput benchmark
            java -cp target/apex-engine.jar org.openjdk.jmh.Main JmhDisruptorBenchmark

            # Optional knobs
            # -Dapex.wal.dir=./wal            # write-ahead log directory (default ./wal)
            # -Dapex.replicate=host:port      # best-effort UDP replication target
            """;
}