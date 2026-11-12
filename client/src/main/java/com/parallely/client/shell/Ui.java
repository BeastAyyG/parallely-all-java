package com.parallely.client.shell;

import com.parallely.client.js.Js;
import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.KeyboardEvent;
import org.teavm.jso.dom.events.MouseEvent;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLInputElement;

public final class Ui {
    private Ui() {
    }

    public interface MouseHandler {
        void handle(MouseEvent e);
    }

    public interface KeyHandler {
        void handle(KeyboardEvent e);
    }

    public interface InputHandler {
        void handle(String value);
    }

    public static HTMLDocument doc() {
        return HTMLDocument.current();
    }

    public static HTMLElement el(String tag, String cls) {
        HTMLElement e = doc().createElement(tag);
        e.setClassName(cls);
        return e;
    }

    public static HTMLElement el(String tag, String cls, String text) {
        HTMLElement e = el(tag, cls);
        e.setTextContent(text);
        return e;
    }

    public static HTMLElement html(String tag, String cls, String innerHtml) {
        HTMLElement e = el(tag, cls);
        e.setInnerHTML(innerHtml);
        return e;
    }

    public static HTMLButtonElement btn(String cls, String text, Runnable onClick) {
        HTMLButtonElement b = (HTMLButtonElement) doc().createElement("button");
        b.setClassName(cls);
        b.setTextContent(text);
        b.addEventListener("click", evt -> onClick.run());
        return b;
    }

    public static HTMLButtonElement btnHtml(String cls, String innerHtml, Runnable onClick) {
        HTMLButtonElement b = (HTMLButtonElement) doc().createElement("button");
        b.setClassName(cls);
        b.setInnerHTML(innerHtml);
        b.addEventListener("click", evt -> onClick.run());
        return b;
    }

    public static HTMLInputElement input(String cls, String type, String value, String placeholder) {
        HTMLInputElement i = (HTMLInputElement) doc().createElement("input");
        i.setClassName(cls);
        i.setType(type);
        i.setValue(value);
        i.setPlaceholder(placeholder);
        return i;
    }

    public static HTMLElement add(HTMLElement parent, HTMLElement... kids) {
        for (HTMLElement k : kids) {
            parent.appendChild(k);
        }
        return parent;
    }

    public static void clear(HTMLElement e) {
        e.setInnerHTML("");
    }

    public static void on(HTMLElement e, String event, Runnable r) {
        e.addEventListener(event, evt -> r.run());
    }

    public static void onStop(HTMLElement e, String event, Runnable r) {
        e.addEventListener(event, evt -> {
            Js.stopPropagation((JSObject) evt);
            r.run();
        });
    }

    public static void onMouse(HTMLElement e, String event, MouseHandler h) {
        e.addEventListener(event, evt -> h.handle((MouseEvent) evt));
    }

    public static void onKey(HTMLElement e, String event, KeyHandler h) {
        e.addEventListener(event, evt -> h.handle((KeyboardEvent) evt));
    }

    public static void onInput(HTMLInputElement e, InputHandler h) {
        e.addEventListener("input", evt -> h.handle(Js.targetValue((JSObject) evt)));
    }

    public static void show(HTMLElement e, boolean visible) {
        setStyle(e, "display", visible ? "" : "none");
    }

    public static void setText(HTMLElement e, String text) {
        e.setTextContent(text);
    }

    public static void setHtml(HTMLElement e, String innerHtml) {
        e.setInnerHTML(innerHtml);
    }

    public static void cls(HTMLElement e, String cls) {
        e.setClassName(cls);
    }

    public static HTMLElement byId(String id) {
        return doc().getElementById(id);
    }

    @JSBody(params = {"e", "c"}, script = "e.classList.add(c);")
    public static native void addCls(HTMLElement e, String c);

    @JSBody(params = {"e", "c"}, script = "e.classList.remove(c);")
    public static native void removeCls(HTMLElement e, String c);

    @JSBody(params = {"e", "p", "v"}, script = "if (v === '') { e.style.removeProperty(p); } else { e.style.setProperty(p, v); }")
    public static native void setStyle(HTMLElement e, String p, String v);

    @JSBody(params = {"e", "n", "v"}, script = "e.setAttribute(n, v);")
    public static native void attr(HTMLElement e, String n, String v);

    @JSBody(params = {"e"}, script = "e.remove();")
    public static native void remove(HTMLElement e);

    @JSBody(params = {"p", "k"}, script = "p.replaceChildren(k);")
    public static native void replaceChildren(HTMLElement p, HTMLElement k);

    @JSBody(params = {"e"}, script = "e.scrollTop = e.scrollHeight;")
    public static native void scrollDown(HTMLElement e);

    @JSBody(params = {"e"}, script = "e.focus();")
    public static native void focus(HTMLElement e);

    @JSBody(params = {"e"}, script = "return e.getBoundingClientRect();")
    public static native JSObject rect(HTMLElement e);

    @JSBody(params = {"r"}, script = "return r.left;")
    public static native double rectLeft(JSObject rect);

    @JSBody(params = {"r"}, script = "return r.top;")
    public static native double rectTop(JSObject rect);

    @JSBody(params = {"r"}, script = "return r.width;")
    public static native double rectWidth(JSObject rect);

    @JSBody(params = {"r"}, script = "return r.height;")
    public static native double rectHeight(JSObject rect);
}