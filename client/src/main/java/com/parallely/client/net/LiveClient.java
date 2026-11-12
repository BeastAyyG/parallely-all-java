package com.parallely.client.net;

import com.parallely.client.js.Js;
import com.parallely.client.js.Json;
import com.parallely.client.js.Ws;

public final class LiveClient {
    public interface Handler {
        void onMessage(Json.Obj msg);

        void onOpen();

        void onClose();
    }

    private final Ws ws;
    private final String room;
    private final String user;
    private final String color;

    public LiveClient(String room, String user, String color, Handler h) {
        this.room = room;
        this.user = user;
        this.color = color;
        ws = new Ws("ws://" + Js.hostname() + ":8090/ws/whiteboard");
        ws.onOpen(() -> {
            join();
            h.onOpen();
        });
        ws.onMessage(data -> h.onMessage(Json.parse(data)));
        ws.onClose(h::onClose);
    }

    public void join() {
        Json.Obj m = Json.obj();
        m.setStr("type", "join");
        m.setStr("room", room);
        m.setStr("user", user);
        m.setStr("color", color);
        send(m);
    }

    public void send(Json.Obj m) {
        ws.send(Json.stringify(m));
    }

    public boolean isOpen() {
        return ws.isOpen();
    }

    public void close() {
        ws.close();
    }

    public String room() {
        return room;
    }

    public String user() {
        return user;
    }

    public String color() {
        return color;
    }
}