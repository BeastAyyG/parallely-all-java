package com.parallely.client.whiteboard;

import com.parallely.client.js.Js;
import com.parallely.client.js.Json;
import com.parallely.client.js.Ws;
import com.parallely.client.model.CanvasElement;
import com.parallely.client.model.Collaborator;
import com.parallely.client.model.Point;
import com.parallely.client.model.ToolType;

import java.util.ArrayList;
import java.util.List;

final class LiveSession {
    private static final String[] PEER_COLORS = {
            "#38BDF8", "#34D399", "#FBBF24", "#F472B6", "#A78BFA", "#818CF8", "#F97316", "#2DD4B6"
    };
    private static final int CURSOR_THROTTLE_MS = 120;
    private static final int MAX_NAME_LEN = 16;
    private static final int MAX_ROOM_LEN = 24;

    private final WhiteboardStudio studio;
    private Ws ws = null;
    private boolean on = false;
    private String room = "main";
    private String name = "Guest-" + asciiUpper(randomToken());
    private final String myColor = peerColorFor(name);
    private List<Collaborator> peers = new ArrayList<>();
    private String status = "off";
    private long lastCursorSent = 0;

    LiveSession(WhiteboardStudio studio) {
        this.studio = studio;
    }

    boolean isOn() {
        return on;
    }

    boolean hasSocket() {
        return ws != null;
    }

    String status() {
        return status;
    }

    String room() {
        return room;
    }

    String displayName() {
        return name;
    }

    List<Collaborator> peers() {
        return peers;
    }

    String setName(String v) {
        name = v.length() > MAX_NAME_LEN ? v.substring(0, MAX_NAME_LEN) : v;
        return name;
    }

    String setRoom(String v) {
        String s = v.length() > MAX_ROOM_LEN ? v.substring(0, MAX_ROOM_LEN) : v;
        room = s.isEmpty() ? "main" : s;
        return room;
    }

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

    void clear() {
        Json.Obj m = Json.obj();
        m.setStr("type", "clear");
        send(m);
    }

    private void send(Json.Obj m) {
        if (ws != null && ws.isOpen()) {
            m.setStr("room", room);
            ws.send(Json.stringify(m));
        }
    }

    void connect() {
        if (ws != null) {
            return;
        }
        status = "connecting";
        studio.syncUi();
        String host = Js.hostname();
        if (host == null || host.isEmpty()) {
            host = "localhost";
        }
        Ws socket = new Ws("ws://" + host + ":8090/ws/whiteboard");
        ws = socket;
        socket.onOpen(() -> {
            Json.Obj m = Json.obj();
            m.setStr("type", "join");
            m.setStr("room", room);
            m.setStr("user", name);
            m.setStr("color", myColor);
            socket.send(Json.stringify(m));
        });
        socket.onMessage(this::handleMessage);
        socket.onError(() -> {
            status = "error";
            studio.syncUi();
        });
        socket.onClose(() -> {
            ws = null;
            on = false;
            peers = new ArrayList<>();
            studio.peersDirty = true;
            if (status.equals("live")) {
                status = "off";
            }
            studio.syncUi();
        });
    }

    void disconnect() {
        Ws socket = ws;
        if (socket != null) {
            Json.Obj m = Json.obj();
            m.setStr("type", "leave");
            m.setStr("room", room);
            socket.send(Json.stringify(m));
            socket.close();
        }
        ws = null;
        on = false;
        peers = new ArrayList<>();
        studio.peersDirty = true;
        status = "off";
        studio.syncUi();
    }

    void dispose() {
        if (ws != null) {
            ws.close();
        }
    }

    private void handleMessage(String data) {
        Json.Obj msg;
        try {
            msg = Json.parse(data);
        } catch (Exception e) {
            return;
        }
        String msgRoom = Json.str(msg, "room");
        if (!msgRoom.isEmpty() && !msgRoom.equals(room)) {
            return;
        }
        String type = Json.str(msg, "type");
        if (type.equals("snapshot")) {
            handleSnapshot(msg);
        } else if (type.equals("element")) {
            handleElement(msg);
        } else if (type.equals("presence")) {
            handlePresence(msg);
        } else if (type.equals("clear")) {
            studio.elements = new ArrayList<>();
            studio.selectedElementId = null;
            studio.canvasDirty = true;
            studio.syncUi();
        } else if (type.equals("delete")) {
            String id = Json.str(msg, "id");
            if (!id.isEmpty()) {
                studio.elements = Elements.withoutId(studio.elements, id);
                studio.canvasDirty = true;
                studio.syncUi();
            }
        } else if (type.equals("cursor")) {
            handleCursor(msg);
        }
    }

    private void handleSnapshot(Json.Obj msg) {
        Json.Arr arr = Json.getArr(msg, "elements");
        int n = arr != null ? Json.len(arr) : 0;
        if (n == 0) {
            for (CanvasElement el : studio.elements) {
                upsert(el);
            }
        } else {
            List<CanvasElement> next = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                try {
                    next.add(WhiteboardJson.fromJson(Json.arrObj(arr, i)));
                } catch (Exception e) {
                    // skip malformed elements like the TSX renderer ignores unknown types
                }
            }
            studio.undoStack.add(studio.elements);
            studio.elements = next;
            studio.toolbarDirty = true;
        }
        status = "live";
        on = true;
        studio.swarm.pause();
        studio.canvasDirty = true;
        studio.syncUi();
    }

    private void handleElement(Json.Obj msg) {
        Json.Obj elObj = Json.getObj(msg, "element");
        if (elObj == null) {
            return;
        }
        String id = Json.str(elObj, "id");
        if (id.isEmpty()) {
            return;
        }
        if (Json.str(msg, "action").equals("delete")) {
            studio.elements = Elements.withoutId(studio.elements, id);
        } else {
            CanvasElement el;
            try {
                el = WhiteboardJson.fromJson(elObj);
            } catch (Exception e) {
                return;
            }
            int idx = Elements.indexOfId(studio.elements, id);
            List<CanvasElement> next = new ArrayList<>(studio.elements);
            if (idx >= 0) {
                next.set(idx, Elements.withUpdatedAt(el, System.currentTimeMillis()));
            } else {
                next.add(el);
            }
            studio.elements = next;
        }
        studio.canvasDirty = true;
        studio.syncUi();
    }

    private void handlePresence(Json.Obj msg) {
        String peerName = Json.str(msg, "user");
        if (peerName.isEmpty()) {
            peerName = "anon";
        }
        if (peerName.equals(name)) {
            return;
        }
        if (Json.str(msg, "event").equals("leave")) {
            List<Collaborator> next = new ArrayList<>();
            for (Collaborator p : peers) {
                if (!p.getName().equals(peerName)) {
                    next.add(p);
                }
            }
            peers = next;
            studio.peersDirty = true;
        } else if (findPeer(peerName) == null) {
            peers = appendedPeer(peers, new Collaborator("peer-" + peerName, peerName, peerColorFor(peerName),
                    new Point(600, 400), ToolType.SELECT, false, peerName, "joined", System.currentTimeMillis()));
            studio.peersDirty = true;
        }
        studio.syncUi();
    }

    private void handleCursor(Json.Obj msg) {
        String peerName = Json.str(msg, "user");
        if (peerName.isEmpty() || peerName.equals(name)) {
            return;
        }
        Point pt = new Point(Json.num(msg, "x"), Json.num(msg, "y"));
        Collaborator existing = findPeer(peerName);
        if (existing == null) {
            peers = appendedPeer(peers, new Collaborator("peer-" + peerName, peerName, peerColorFor(peerName),
                    pt, ToolType.SELECT, false, peerName, "drawing", System.currentTimeMillis()));
            studio.peersDirty = true;
        } else {
            existing.setCursor(pt);
            existing.setLastActive(System.currentTimeMillis());
        }
        studio.canvasDirty = true;
        studio.syncUi();
    }

    private Collaborator findPeer(String peerName) {
        for (Collaborator p : peers) {
            if (p.getName().equals(peerName)) {
                return p;
            }
        }
        return null;
    }

    private static List<Collaborator> appendedPeer(List<Collaborator> list, Collaborator p) {
        List<Collaborator> next = new ArrayList<>(list);
        next.add(p);
        return next;
    }

    private static String peerColorFor(String peerName) {
        int h = 0;
        for (int i = 0; i < peerName.length(); i++) {
            h = h * 31 + peerName.charAt(i);
        }
        return PEER_COLORS[(int) ((h & 0xFFFFFFFFL) % PEER_COLORS.length)];
    }

    private static String randomToken() {
        String digits = "0123456789abcdefghijklmnopqrstuvwxyz";
        StringBuilder sb = new StringBuilder(4);
        for (int i = 0; i < 4; i++) {
            sb.append(digits.charAt((int) (Math.random() * 36)));
        }
        return sb.toString();
    }

    private static String asciiUpper(String s) {
        StringBuilder sb = new StringBuilder(s.length());
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            sb.append(c >= 'a' && c <= 'z' ? (char) (c - 32) : c);
        }
        return sb.toString();
    }
}