package com.parallely.client.js;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;

public final class Ws {
    public interface MessageHandler {
        void onMessage(String data);
    }

    private final JSObject ws;

    public Ws(String url) {
        ws = open(url);
    }

    public void onOpen(Runnable r) {
        setOnOpen(ws, r::run);
    }

    public void onMessage(MessageHandler h) {
        setOnMessage(ws, h::onMessage);
    }

    public void onClose(Runnable r) {
        setOnClose(ws, r::run);
    }

    public void onError(Runnable r) {
        setOnError(ws, r::run);
    }

    public void send(String msg) {
        send0(ws, msg);
    }

    public boolean isOpen() {
        return state(ws) == 1;
    }

    public void close() {
        close0(ws);
    }

    @JSBody(params = {"url"}, script = "return new WebSocket(url);")
    private static native JSObject open(String url);

    @JSBody(params = {"ws", "msg"}, script = "if (ws.readyState === 1) { ws.send(msg); }")
    private static native void send0(JSObject ws, String msg);

    @JSBody(params = {"ws"}, script = "ws.close();")
    private static native void close0(JSObject ws);

    @JSBody(params = {"ws"}, script = "return ws.readyState;")
    private static native int state(JSObject ws);

    @JSBody(params = {"ws", "cb"}, script = "ws.onopen = function () { cb(); };")
    private static native void setOnOpen(JSObject ws, Js.VoidCb cb);

    @JSBody(params = {"ws", "cb"}, script = "ws.onmessage = function (e) { cb(String(e.data)); };")
    private static native void setOnMessage(JSObject ws, Js.StrCb cb);

    @JSBody(params = {"ws", "cb"}, script = "ws.onclose = function () { cb(); };")
    private static native void setOnClose(JSObject ws, Js.VoidCb cb);

    @JSBody(params = {"ws", "cb"}, script = "ws.onerror = function () { cb(); };")
    private static native void setOnError(JSObject ws, Js.VoidCb cb);
}