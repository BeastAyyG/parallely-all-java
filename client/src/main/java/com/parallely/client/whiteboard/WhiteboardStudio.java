package com.parallely.client.whiteboard;

import com.parallely.client.js.Js;
import com.parallely.client.js.Json;
import com.parallely.client.model.CanvasElement;
import com.parallely.client.model.Collaborator;
import com.parallely.client.model.ElementType;
import com.parallely.client.model.Point;
import com.parallely.client.model.ToolType;
import com.parallely.client.shell.Icons;
import com.parallely.client.shell.Ui;
import com.parallely.client.shell.View;
import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;
import org.teavm.jso.dom.events.MouseEvent;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLInputElement;

import java.util.ArrayList;
import java.util.List;

public final class WhiteboardStudio implements View {
    private static final String[] COLOR_PALETTE = {
            "#FFFFFF", "#94A3B8", "#38BDF8", "#818CF8", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"
    };
    static final String[] STICKY_COLORS = {"#FEF08A", "#BFDBFE", "#BBF7D0", "#FBCFE8", "#FED7AA"};
    private static final String[] BEHAVIOR_IDS = {"architect", "ideator", "explorer"};
    private static final String[] BEHAVIOR_ICONS = {"DraftingCompass", "Brain", "Footprints"};
    private static final String[] BEHAVIOR_LABELS = {
            "Architects draw nodes", "Ideators drop stickies", "Explorers roam only"
    };

    final BotSwarm swarm = new BotSwarm(this);
    final LiveSession session = new LiveSession(this);

    private final HTMLElement root;
    private final HTMLElement toolbar;
    private final HTMLElement countSpan;
    private final HTMLElement avatarsDiv;
    private final HTMLButtonElement[] behaviorBtns = new HTMLButtonElement[3];
    private final HTMLButtonElement pauseBtn;
    private final HTMLElement liveDiv;
    private final HTMLElement radioIcon;
    private final HTMLInputElement nameInput;
    private final HTMLInputElement roomInput;
    private final HTMLButtonElement connectBtn;
    private final HTMLElement errorSpan;
    final HTMLElement canvasContainer;
    private final HTMLCanvasElement canvas;
    private final CanvasRenderer renderer;
    private final HTMLElement zoomSpan;
    private final HTMLElement editorDiv;
    private final HTMLInputElement editorInput;

    private ToolType activeTool = ToolType.PEN;
    private String selectedColor = "#38BDF8";
    private String selectedStickyColor = "#FEF08A";
    private final double strokeWidth = 3;
    double zoom = 1;
    double panX = 0;
    double panY = 0;

    List<CanvasElement> elements = Elements.seed();
    final List<List<CanvasElement>> undoStack = new ArrayList<>();
    private final List<List<CanvasElement>> redoStack = new ArrayList<>();
    private boolean isDrawing = false;
    private CanvasElement currentElement = null;
    String selectedElementId = null;

    private boolean disposed = false;
    boolean canvasDirty = true;
    boolean toolbarDirty = true;
    boolean avatarsDirty = true;
    boolean peersDirty = true;
    private String lastCountText = "";
    private String lastPauseSig = "";
    private String lastLiveSig = "";
    private String lastZoomText = "";
    private final List<HTMLButtonElement> avatarButtons = new ArrayList<>();
    private final List<HTMLElement> peerAvatarEls = new ArrayList<>();
    private final JSObject resizeHandle;

    public WhiteboardStudio() {
        root = Ui.el("div", "relative w-full h-full bg-[#008080] overflow-hidden flex flex-col select-none");
        toolbar = Ui.el("div", "absolute top-3 left-2 right-2 md:right-auto md:left-6 z-20 flex items-center gap-2 bg-[#C0C0C0] border-2 border-black rounded-none px-2.5 py-1.5 md:px-3 md:py-2 shadow-[4px_4px_0_rgba(0,0,0,0.45)] overflow-x-auto max-w-[calc(100vw-16px)]");

        HTMLElement presence = Ui.el("div", "absolute top-16 left-2 md:top-[76px] md:left-auto md:right-6 z-20 flex items-center gap-2.5 md:gap-3 bg-[#C0C0C0] border-2 border-black rounded-none px-3 py-1.5 md:px-4 md:py-2 shadow-[4px_4px_0_rgba(0,0,0,0.45)] max-w-[calc(100vw-16px)] overflow-x-auto");
        HTMLElement countGroup = Ui.el("div", "flex items-center gap-2");
        appendHtml(countGroup, Icons.svg("Users", "w-4 h-4 text-[#0000CD]"));
        countSpan = Ui.el("span", "text-xs font-semibold text-black");
        countGroup.appendChild(countSpan);
        avatarsDiv = Ui.el("div", "flex items-center -space-x-1.5 overflow-hidden");

        HTMLElement botControls = Ui.el("div", "flex items-center gap-1.5 pl-2 border-l border-black");
        HTMLElement behaviorGroup = Ui.el("div", "flex items-center gap-0.5 bg-white rounded-none p-0.5");
        behaviorGroup.setTitle("Bot swarm behavior");
        for (int i = 0; i < 3; i++) {
            String id = BEHAVIOR_IDS[i];
            behaviorBtns[i] = Ui.btnHtml("", Icons.svg(BEHAVIOR_ICONS[i], "w-3.5 h-3.5"), () -> {
                swarm.setBehavior(id);
                syncUi();
            });
            behaviorBtns[i].setTitle(BEHAVIOR_LABELS[i]);
            behaviorGroup.appendChild(behaviorBtns[i]);
        }
        pauseBtn = Ui.btnHtml("", "", () -> {
            swarm.toggleActive();
            syncUi();
        });
        HTMLButtonElement addBotsBtn = Ui.btnHtml(
                "px-2 py-1 bg-[#C0C0C0] hover:bg-slate-700 text-black text-xs rounded-none flex items-center gap-1 font-medium transition-colors",
                Icons.svg("Plus", "w-3 h-3 text-[#0000CD]") + "+5 Bots", () -> {
                    swarm.addBots(5);
                    syncUi();
                });
        addBotsBtn.setTitle("Spawn +5 Collaborator Bots");
        Ui.add(botControls, behaviorGroup, pauseBtn, addBotsBtn);

        liveDiv = Ui.el("div", "flex items-center gap-1.5 pl-2 border-l border-black");
        liveDiv.setTitle("Join a live room hosted by the Java server");
        appendHtml(liveDiv, Icons.svg("RadioTower", "w-4 h-4 text-[#404040]"));
        radioIcon = (HTMLElement) liveDiv.getLastChild();
        nameInput = Ui.input("bg-white text-xs text-black px-2 py-1 rounded-none border border-black focus:outline-none focus:border-[#0000CD] w-20",
                "text", session.displayName(), "Name");
        nameInput.setTitle("Your display name");
        Ui.onInput(nameInput, v -> {
            String effective = session.setName(v);
            if (!nameInput.getValue().equals(effective)) {
                nameInput.setValue(effective);
            }
        });
        roomInput = Ui.input("bg-white text-xs text-black px-2 py-1 rounded-none border border-black focus:outline-none focus:border-[#0000CD] w-20",
                "text", session.room(), "Room");
        roomInput.setTitle("Room name \u2014 everyone with the same room draws together");
        Ui.onInput(roomInput, v -> {
            String effective = session.setRoom(v);
            if (!roomInput.getValue().equals(effective)) {
                roomInput.setValue(effective);
            }
        });
        connectBtn = Ui.btnHtml("", "", () -> {
            if (session.isOn()) {
                session.disconnect();
            } else {
                session.connect();
            }
        });
        errorSpan = Ui.el("span", "text-[10px] text-[#DC2626]", "server unreachable");
        Ui.add(liveDiv, nameInput, roomInput, connectBtn, errorSpan);
        Ui.add(presence, countGroup, avatarsDiv, botControls, liveDiv);

        canvasContainer = Ui.el("div", "flex-1 w-full h-full relative cursor-crosshair");
        canvas = (HTMLCanvasElement) Ui.doc().createElement("canvas");
        canvas.setClassName("absolute inset-0 w-full h-full touch-none");
        Ui.onMouse(canvas, "pointerdown", this::handlePointerDown);
        Ui.onMouse(canvas, "pointermove", this::handlePointerMove);
        Ui.onMouse(canvas, "pointerup", e -> handlePointerUp());
        canvasContainer.appendChild(canvas);
        renderer = new CanvasRenderer(canvas);

        HTMLElement zoomBar = Ui.el("div", "absolute bottom-4 left-6 z-20 flex items-center gap-2 bg-[#C0C0C0] border-2 border-black rounded-none px-3 py-1.5 text-xs text-[#1F1F1F] shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLButtonElement zoomOutBtn = Ui.btnHtml("p-1 hover:text-black", Icons.svg("ZoomOut", "w-3.5 h-3.5"),
                () -> setZoom(Math.max(0.4, round1(zoom - 0.1))));
        zoomOutBtn.setTitle("Zoom Out");
        zoomSpan = Ui.el("span", "font-mono tabular-nums px-1");
        HTMLButtonElement zoomInBtn = Ui.btnHtml("p-1 hover:text-black", Icons.svg("ZoomIn", "w-3.5 h-3.5"),
                () -> setZoom(Math.min(2.5, round1(zoom + 0.1))));
        zoomInBtn.setTitle("Zoom In");
        HTMLButtonElement resetBtn = Ui.btnHtml("ml-1 p-1 hover:text-black text-[#404040]", Icons.svg("Maximize2", "w-3.5 h-3.5"),
                this::resetView);
        resetBtn.setTitle("Reset View");
        Ui.add(zoomBar, zoomOutBtn, zoomSpan, zoomInBtn, resetBtn);

        editorDiv = Ui.el("div", "absolute bottom-4 right-6 z-20 bg-white  border border-[#0000CD] rounded-none p-3 shadow-[4px_4px_0_rgba(0,0,0,0.45)] flex items-center gap-3");
        editorDiv.appendChild(Ui.el("span", "text-xs font-medium text-[#0000CD]", "Selected Node"));
        editorInput = Ui.input("bg-[#C0C0C0] text-xs text-black px-3 py-1.5 rounded-none border border-black focus:outline-none focus:border-[#0000CD] w-48",
                "text", "", "Edit text...");
        Ui.onInput(editorInput, this::handleEditorInput);
        Ui.on(editorInput, "blur", this::handleEditorBlur);
        editorDiv.appendChild(editorInput);
        editorDiv.appendChild(Ui.btn("px-2.5 py-1.5 text-xs text-[#DC2626] hover:bg-rose-950/40 rounded-none transition-colors",
                "Delete", this::handleDeleteSelected));
        Ui.show(editorDiv, false);

        Ui.add(root, toolbar, presence, canvasContainer, zoomBar, editorDiv);

        swarm.start();
        resizeHandle = addWindowResize(this::syncCanvasSize);
        syncUi();
        Js.raf(this::frame);
    }

    @Override
    public HTMLElement root() {
        return root;
    }

    @Override
    public void onPrimaryAction() {
        swarm.spawn(15);
        syncUi();
    }

    @Override
    public void dispose() {
        disposed = true;
        swarm.dispose();
        removeWindowResize(resizeHandle);
        session.dispose();
    }

    private void frame(double t) {
        if (disposed) {
            return;
        }
        syncCanvasSize();
        if (canvasDirty) {
            canvasDirty = false;
            renderer.render(elements, currentElement, selectedElementId, swarm.bots(), session.peers(), panX, panY, zoom);
        }
        Js.raf(this::frame);
    }

    private void syncCanvasSize() {
        int w = canvasContainer.getClientWidth();
        int h = canvasContainer.getClientHeight();
        if (w > 0 && h > 0 && (canvas.getWidth() != w || canvas.getHeight() != h)) {
            canvas.setWidth(w);
            canvas.setHeight(h);
            canvasDirty = true;
        }
    }

    void syncUi() {
        if (toolbarDirty) {
            toolbarDirty = false;
            rebuildToolbar();
        }
        String count = (1 + swarm.bots().size() + session.peers().size()) + " Collaborators";
        if (!count.equals(lastCountText)) {
            lastCountText = count;
            Ui.setText(countSpan, count);
        }
        if (avatarsDirty) {
            avatarsDirty = false;
            rebuildBotAvatars();
        } else {
            updateBotAvatarTitles();
        }
        for (int i = 0; i < 3; i++) {
            Ui.cls(behaviorBtns[i], "p-1.5 rounded-md transition-colors cursor-pointer "
                    + (swarm.behavior().equals(BEHAVIOR_IDS[i]) ? "bg-[#0000CD] text-white" : "text-[#404040] hover:text-black"));
        }
        String pauseSig = swarm.isActive() ? "1" : "0";
        if (!pauseSig.equals(lastPauseSig)) {
            lastPauseSig = pauseSig;
            Ui.cls(pauseBtn, "p-1.5 rounded-none text-xs font-medium flex items-center gap-1 transition-colors "
                    + (swarm.isActive() ? "bg-emerald-950/60 text-[#047857] border border-emerald-800/60" : "bg-[#C0C0C0] text-[#404040]"));
            pauseBtn.setTitle(swarm.isActive() ? "Pause Bot Swarm" : "Resume Bot Swarm");
            Ui.setHtml(pauseBtn, Icons.svg(swarm.isActive() ? "Pause" : "Play", "w-3.5 h-3.5") + (swarm.isActive() ? "Active" : "Paused"));
        }
        String liveSig = session.isOn() + "|" + session.status() + "|" + session.room();
        if (!liveSig.equals(lastLiveSig)) {
            lastLiveSig = liveSig;
            Ui.attr(radioIcon, "class", "w-4 h-4 " + (session.isOn() ? "text-[#047857]" : "text-[#404040]"));
            Ui.show(nameInput, !session.isOn());
            Ui.show(roomInput, !session.isOn());
            if (!session.isOn()) {
                if (!nameInput.getValue().equals(session.displayName())) {
                    nameInput.setValue(session.displayName());
                }
                if (!roomInput.getValue().equals(session.room())) {
                    roomInput.setValue(session.room());
                }
            }
            connectBtn.setDisabled(session.status().equals("connecting"));
            Ui.cls(connectBtn, "px-2.5 py-1 text-xs font-semibold rounded-none flex items-center gap-1.5 transition-colors disabled:opacity-50 "
                    + (session.isOn() ? "bg-rose-950/60 text-rose-300 border border-rose-800/60 hover:bg-rose-900/60"
                    : "bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900/60"));
            connectBtn.setTitle(session.isOn() ? "Leave live room \"" + session.room() + "\""
                    : "Connect to the live whiteboard server on this machine (port 8090)");
            String label = session.status().equals("connecting") ? "Connecting\u2026" : session.isOn() ? "Live: " + session.room() : "Go Live";
            Ui.setHtml(connectBtn, Icons.svg(session.isOn() ? "WifiOff" : "Wifi", "w-3.5 h-3.5") + label);
            Ui.show(errorSpan, session.status().equals("error"));
        }
        if (peersDirty) {
            peersDirty = false;
            rebuildPeerAvatars();
        }
        String zoomText = Math.round(zoom * 100) + "%";
        if (!zoomText.equals(lastZoomText)) {
            lastZoomText = zoomText;
            Ui.setText(zoomSpan, zoomText);
        }
        updateEditor();
    }

    private void rebuildToolbar() {
        Ui.clear(toolbar);
        HTMLElement tools = Ui.el("div", "flex items-center gap-1 border-r border-black pr-2");
        Ui.add(tools,
                toolButton(ToolType.SELECT, "MousePointer", "Select & Move", "win-btn-selected"),
                toolButton(ToolType.PEN, "Pencil", "Freehand Vector Pen", "win-btn-selected"),
                toolButton(ToolType.RECTANGLE, "Square", "Architecture Box", "win-btn-selected"),
                toolButton(ToolType.ELLIPSE, "Circle", "RingBuffer Ellipse", "win-btn-selected"),
                toolButton(ToolType.ARROW, "ArrowRight", "Connector Arrow", "win-btn-selected"),
                toolButton(ToolType.STICKY, "StickyNote", "Architecture Sticky Note", "win-btn-sticky"),
                toolButton(ToolType.TEXT, "Type", "Text Component", "win-btn-selected"),
                toolButton(ToolType.ERASER, "Eraser", "Eraser", "win-btn-danger"));

        HTMLElement palette = Ui.el("div", "flex items-center gap-1.5 border-r border-black pr-2");
        if (activeTool != ToolType.STICKY) {
            for (String c : COLOR_PALETTE) {
                HTMLButtonElement b = Ui.btn("w-5 h-5 rounded-full transition-transform "
                        + (selectedColor.equals(c) ? "scale-125 ring-2 ring-indigo-400" : "hover:scale-110"), "", () -> {
                    selectedColor = c;
                    toolbarDirty = true;
                    syncUi();
                });
                Ui.setStyle(b, "background-color", c);
                palette.appendChild(b);
            }
        } else {
            for (String c : STICKY_COLORS) {
                HTMLButtonElement b = Ui.btn("w-5 h-5 rounded-sm transition-transform "
                        + (selectedStickyColor.equals(c) ? "scale-125 ring-2 ring-white" : "hover:scale-110"), "", () -> {
                    selectedStickyColor = c;
                    toolbarDirty = true;
                    syncUi();
                });
                Ui.setStyle(b, "background-color", c);
                palette.appendChild(b);
            }
        }

        HTMLElement history = Ui.el("div", "flex items-center gap-1");
        HTMLButtonElement undoBtn = Ui.btnHtml("p-2 win-btn disabled:opacity-30 disabled:cursor-not-allowed",
                Icons.svg("RotateCcw", "w-4 h-4"), this::handleUndo);
        undoBtn.setDisabled(undoStack.isEmpty());
        undoBtn.setTitle("Undo");
        HTMLButtonElement redoBtn = Ui.btnHtml("p-2 win-btn disabled:opacity-30 disabled:cursor-not-allowed",
                Icons.svg("RotateCw", "w-4 h-4"), this::handleRedo);
        redoBtn.setDisabled(redoStack.isEmpty());
        redoBtn.setTitle("Redo");
        HTMLButtonElement clearBtn = Ui.btnHtml("p-2 win-btn", Icons.svg("Trash2", "w-4 h-4"), this::handleClear);
        clearBtn.setTitle("Clear Canvas");
        HTMLButtonElement pngBtn = Ui.btnHtml("p-2 win-btn", Icons.svg("Download", "w-4 h-4"), this::handleExportPng);
        pngBtn.setTitle("Export PNG Diagram");
        HTMLButtonElement jsonBtn = Ui.btnHtml("p-2 win-btn", Icons.svg("FileJson", "w-4 h-4"), this::handleExportJson);
        jsonBtn.setTitle("Export Elements JSON");
        Ui.add(history, undoBtn, redoBtn, clearBtn, pngBtn, jsonBtn);
        Ui.add(toolbar, tools, palette, history);
    }

    private HTMLButtonElement toolButton(ToolType tool, String icon, String title, String activeCls) {
        HTMLButtonElement b = Ui.btnHtml("p-2 " + (activeTool == tool ? activeCls : "win-btn"),
                Icons.svg(icon, "w-4 h-4"), () -> {
                    activeTool = tool;
                    toolbarDirty = true;
                    syncUi();
                });
        b.setTitle(title);
        return b;
    }

    private void rebuildBotAvatars() {
        Ui.clear(avatarsDiv);
        avatarButtons.clear();
        HTMLElement host = Ui.el("div",
                "w-7 h-7 rounded-full bg-[#0000CD] border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow",
                "You");
        host.setTitle("You (Session Host)");
        avatarsDiv.appendChild(host);
        List<Collaborator> bots = swarm.bots();
        int n = Math.min(5, bots.size());
        for (int i = 0; i < n; i++) {
            Collaborator bot = bots.get(i);
            boolean following = bot.getId().equals(swarm.followId());
            HTMLButtonElement b = Ui.btnHtml(
                    "w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white shadow transition-transform hover:scale-110 cursor-pointer "
                            + (following ? "border-indigo-400 scale-110" : "border-slate-900"),
                    following ? Icons.svg("Crosshair", "w-3.5 h-3.5") : "", () -> {
                        swarm.toggleFollow(bot.getId());
                        syncUi();
                    });
            if (!following) {
                b.setTextContent(String.valueOf(bot.getName().charAt(0)));
            }
            Ui.setStyle(b, "background-color", bot.getColor());
            b.setTitle(avatarTitle(bot, following));
            avatarsDiv.appendChild(b);
            avatarButtons.add(b);
        }
        if (bots.size() > 5) {
            avatarsDiv.appendChild(Ui.el("div",
                    "w-7 h-7 rounded-full bg-[#C0C0C0] border-2 border-slate-900 flex items-center justify-center text-[10px] font-medium text-[#1F1F1F]",
                    "+" + (bots.size() - 5)));
        }
    }

    private void updateBotAvatarTitles() {
        List<Collaborator> bots = swarm.bots();
        int n = Math.min(avatarButtons.size(), bots.size());
        for (int i = 0; i < n; i++) {
            Collaborator bot = bots.get(i);
            avatarButtons.get(i).setTitle(avatarTitle(bot, bot.getId().equals(swarm.followId())));
        }
    }

    private static String avatarTitle(Collaborator bot, boolean following) {
        return bot.getName() + " \u2014 " + bot.getLastAction() + " (click to " + (following ? "stop following" : "follow") + ")";
    }

    private void rebuildPeerAvatars() {
        for (HTMLElement e : peerAvatarEls) {
            Ui.remove(e);
        }
        peerAvatarEls.clear();
        List<Collaborator> peers = session.peers();
        int n = Math.min(4, peers.size());
        for (int i = 0; i < n; i++) {
            Collaborator p = peers.get(i);
            HTMLElement d = Ui.el("div",
                    "w-7 h-7 rounded-full border-2 border-[#047857] flex items-center justify-center text-[10px] font-bold text-white shadow",
                    String.valueOf(Character.toUpperCase(p.getName().charAt(0))));
            Ui.setStyle(d, "background-color", p.getColor());
            d.setTitle(p.getName() + " (live)");
            liveDiv.appendChild(d);
            peerAvatarEls.add(d);
        }
        if (peers.size() > 4) {
            HTMLElement d = Ui.el("div",
                    "w-7 h-7 rounded-full bg-[#C0C0C0] border-2 border-slate-900 flex items-center justify-center text-[10px] font-medium text-[#1F1F1F]",
                    "+" + (peers.size() - 4));
            liveDiv.appendChild(d);
            peerAvatarEls.add(d);
        }
    }

    private void updateEditor() {
        if (selectedElementId == null) {
            Ui.show(editorDiv, false);
            return;
        }
        Ui.show(editorDiv, true);
        CanvasElement el = Elements.findById(elements, selectedElementId);
        String value = el != null && el.text() != null ? el.text() : "";
        if (!editorInput.getValue().equals(value)) {
            editorInput.setValue(value);
        }
    }

    private void handleEditorInput(String val) {
        if (selectedElementId == null) {
            return;
        }
        List<CanvasElement> next = new ArrayList<>(elements.size());
        for (CanvasElement el : elements) {
            next.add(el.id().equals(selectedElementId) ? Elements.withText(el, val) : el);
        }
        elements = next;
        canvasDirty = true;
    }

    private void handleEditorBlur() {
        CanvasElement el = selectedElementId != null ? Elements.findById(elements, selectedElementId) : null;
        if (el != null) {
            session.upsert(el);
        }
    }

    private void handleDeleteSelected() {
        String id = selectedElementId;
        if (id == null) {
            return;
        }
        elements = Elements.withoutId(elements, id);
        session.delete(id);
        selectedElementId = null;
        canvasDirty = true;
        syncUi();
    }

    private void handlePointerDown(MouseEvent e) {
        JSObject rect = Ui.rect(canvas);
        double x = (pointerX(e) - Ui.rectLeft(rect) - panX) / zoom;
        double y = (pointerY(e) - Ui.rectTop(rect) - panY) / zoom;

        if (activeTool == ToolType.SELECT) {
            CanvasElement hit = hitTest(x, y);
            selectedElementId = hit != null ? hit.id() : null;
            canvasDirty = true;
            syncUi();
            return;
        }
        if (activeTool == ToolType.ERASER) {
            CanvasElement hit = hitTest(x, y);
            if (hit != null) {
                undoStack.add(elements);
                elements = Elements.withoutId(elements, hit.id());
                session.delete(hit.id());
                toolbarDirty = true;
                canvasDirty = true;
                syncUi();
            }
            return;
        }

        isDrawing = true;
        long now = System.currentTimeMillis();
        if (activeTool == ToolType.PEN) {
            currentElement = new CanvasElement("el-" + now, ElementType.STROKE, Elements.pointsOf(new Point(x, y)),
                    x, y, null, null, selectedColor, null, strokeWidth, null, "user", "You", selectedColor, now);
        } else if (activeTool == ToolType.RECTANGLE || activeTool == ToolType.ELLIPSE) {
            ElementType type = activeTool == ToolType.RECTANGLE ? ElementType.RECTANGLE : ElementType.ELLIPSE;
            currentElement = new CanvasElement("el-" + now, type, null, x, y, 1.0, 1.0,
                    selectedColor, selectedColor + "18", strokeWidth, null, "user", "You", selectedColor, now);
        } else if (activeTool == ToolType.ARROW) {
            currentElement = new CanvasElement("el-" + now, ElementType.ARROW, Elements.pointsOf(new Point(x, y), new Point(x, y)),
                    x, y, null, null, selectedColor, null, strokeWidth, null, "user", "You", selectedColor, now);
        } else if (activeTool == ToolType.STICKY) {
            CanvasElement sticky = new CanvasElement("el-" + now, ElementType.STICKY, null, x, y, 170.0, 130.0,
                    selectedStickyColor, null, 1, "New architecture note...", "user", "You", "#38BDF8", now);
            undoStack.add(elements);
            elements = Elements.appended(elements, sticky);
            session.upsert(sticky);
            isDrawing = false;
            selectedElementId = sticky.id();
            toolbarDirty = true;
            syncUi();
        } else if (activeTool == ToolType.TEXT) {
            CanvasElement text = new CanvasElement("el-" + now, ElementType.TEXT, null, x, y, 180.0, 30.0,
                    selectedColor, null, 1, "System Component", "user", "You", selectedColor, now);
            undoStack.add(elements);
            elements = Elements.appended(elements, text);
            session.upsert(text);
            isDrawing = false;
            selectedElementId = text.id();
            toolbarDirty = true;
            syncUi();
        }
        canvasDirty = true;
    }

    private void handlePointerMove(MouseEvent e) {
        JSObject rect = Ui.rect(canvas);
        double x = (pointerX(e) - Ui.rectLeft(rect) - panX) / zoom;
        double y = (pointerY(e) - Ui.rectTop(rect) - panY) / zoom;

        session.sendCursor(x, y);

        if (!isDrawing || currentElement == null) {
            return;
        }
        CanvasElement prev = currentElement;
        if (prev.type() == ElementType.STROKE) {
            List<Point> pts = new ArrayList<>(prev.points());
            pts.add(new Point(x, y));
            currentElement = Elements.withPoints(prev, pts);
        } else if (prev.type() == ElementType.RECTANGLE || prev.type() == ElementType.ELLIPSE) {
            double w = x - prev.x();
            double h = y - prev.y();
            currentElement = new CanvasElement(prev.id(), prev.type(), prev.points(),
                    w < 0 ? x : prev.x(), h < 0 ? y : prev.y(), Math.abs(w), Math.abs(h),
                    prev.color(), prev.fillColor(), prev.strokeWidth(), prev.text(),
                    prev.authorId(), prev.authorName(), prev.authorColor(), prev.updatedAt());
        } else if (prev.type() == ElementType.ARROW) {
            currentElement = Elements.withPoints(prev, Elements.pointsOf(prev.points().get(0), new Point(x, y)));
        }
        canvasDirty = true;
    }

    private void handlePointerUp() {
        if (isDrawing && currentElement != null) {
            undoStack.add(elements);
            redoStack.clear();
            elements = Elements.appended(elements, currentElement);
            session.upsert(currentElement);
            currentElement = null;
            toolbarDirty = true;
        }
        isDrawing = false;
        canvasDirty = true;
        syncUi();
    }

    private CanvasElement hitTest(double x, double y) {
        Point pt = new Point(x, y);
        for (int i = elements.size() - 1; i >= 0; i--) {
            if (CanvasModel.isPointInElement(pt, elements.get(i))) {
                return elements.get(i);
            }
        }
        return null;
    }

    private void handleUndo() {
        if (undoStack.isEmpty()) {
            return;
        }
        List<CanvasElement> prev = undoStack.remove(undoStack.size() - 1);
        redoStack.add(elements);
        syncDiffLive(elements, prev);
        elements = prev;
        toolbarDirty = true;
        canvasDirty = true;
        syncUi();
    }

    private void handleRedo() {
        if (redoStack.isEmpty()) {
            return;
        }
        List<CanvasElement> next = redoStack.remove(redoStack.size() - 1);
        undoStack.add(elements);
        syncDiffLive(elements, next);
        elements = next;
        toolbarDirty = true;
        canvasDirty = true;
        syncUi();
    }

    private void syncDiffLive(List<CanvasElement> from, List<CanvasElement> to) {
        if (!session.hasSocket()) {
            return;
        }
        for (CanvasElement e : from) {
            if (Elements.findById(to, e.id()) == null) {
                session.delete(e.id());
            }
        }
        for (CanvasElement e : to) {
            if (Elements.findById(from, e.id()) != e) {
                session.upsert(e);
            }
        }
    }

    private void handleClear() {
        undoStack.add(elements);
        elements = new ArrayList<>();
        selectedElementId = null;
        session.clear();
        toolbarDirty = true;
        canvasDirty = true;
        syncUi();
    }

    private void handleExportPng() {
        Js.download("whiteboard-architecture-" + System.currentTimeMillis() + ".png", Js.canvasToDataUrl(canvas));
    }

    private void handleExportJson() {
        String url = Js.createBlobUrl(Json.stringifyPretty(WhiteboardJson.toJsonList(elements)), "application/json");
        Js.download("whiteboard-elements-" + System.currentTimeMillis() + ".json", url);
        revokeUrl(url);
    }

    private void setZoom(double z) {
        double old = zoom;
        zoom = z;
        if (zoom != old) {
            swarm.followCam();
        }
        canvasDirty = true;
        syncUi();
    }

    private void resetView() {
        double old = zoom;
        zoom = 1;
        panX = 0;
        panY = 0;
        if (zoom != old) {
            swarm.followCam();
        }
        canvasDirty = true;
        syncUi();
    }

    private static double round1(double v) {
        return Math.round(v * 10) / 10.0;
    }

    @JSBody(params = {"cb"}, script = "var f = function () { cb(); }; window.addEventListener('resize', f); return f;")
    private static native JSObject addWindowResize(Js.VoidCb cb);

    @JSBody(params = {"f"}, script = "window.removeEventListener('resize', f);")
    private static native void removeWindowResize(JSObject f);

    @JSBody(params = {"e", "html"}, script = "e.insertAdjacentHTML('beforeend', html);")
    private static native void appendHtml(HTMLElement e, String html);

    @JSBody(params = {"url"}, script = "URL.revokeObjectURL(url);")
    private static native void revokeUrl(String url);

    @JSBody(params = {"e"}, script = "return e.clientX;")
    private static native double pointerX(MouseEvent e);

    @JSBody(params = {"e"}, script = "return e.clientY;")
    private static native double pointerY(MouseEvent e);
}