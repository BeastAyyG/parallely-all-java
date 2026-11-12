package com.parallely.client.js;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSFunctor;
import org.teavm.jso.JSObject;

public final class Js {
    private Js() {
    }

    @JSFunctor
    public interface VoidCb extends JSObject {
        void call();
    }

    @JSFunctor
    public interface StrCb extends JSObject {
        void call(String s);
    }

    @JSFunctor
    public interface FrameCb extends JSObject {
        void call(double t);
    }

    @JSBody(params = {"cb", "ms"}, script = "return setInterval(cb, ms);")
    public static native int setInterval(VoidCb cb, int ms);

    @JSBody(params = {"id"}, script = "clearInterval(id);")
    public static native void clearInterval(int id);

    @JSBody(params = {"cb", "ms"}, script = "return setTimeout(cb, ms);")
    public static native int setTimeout(VoidCb cb, int ms);

    @JSBody(params = {"id"}, script = "clearTimeout(id);")
    public static native void clearTimeout(int id);

    @JSBody(params = {"cb"}, script = "requestAnimationFrame(cb);")
    public static native void raf(FrameCb cb);

    @JSBody(params = {}, script = "return location.hostname;")
    public static native String hostname();

    @JSBody(params = {}, script = "return devicePixelRatio || 1;")
    public static native double devicePixelRatio();

    @JSBody(params = {}, script = "return innerWidth;")
    public static native int innerWidth();

    @JSBody(params = {}, script = "return innerHeight;")
    public static native int innerHeight();

    @JSBody(params = {}, script = "return performance.now();")
    public static native double now();

    @JSBody(params = {"s"}, script = "console.log(s);")
    public static native void consoleLog(String s);

    @JSBody(params = {}, script = "return new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});")
    public static native String clockString();

    @JSBody(params = {"filename", "url"}, script = "var a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();")
    public static native void download(String filename, String url);

    @JSBody(params = {"content", "mime"}, script = "return URL.createObjectURL(new Blob([content], {type: mime}));")
    public static native String createBlobUrl(String content, String mime);

    @JSBody(params = {"c"}, script = "return c.toDataURL('image/png');")
    public static native String canvasToDataUrl(JSObject canvas);

    @JSBody(params = {"e"}, script = "e.preventDefault();")
    public static native void preventDefault(JSObject event);

    @JSBody(params = {"e"}, script = "e.stopPropagation();")
    public static native void stopPropagation(JSObject event);

    @JSBody(params = {"e"}, script = "return e.target.value;")
    public static native String targetValue(JSObject event);
}