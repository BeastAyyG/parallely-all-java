package com.parallely.client.js;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSIndexer;
import org.teavm.jso.JSObject;

public final class Json {
    private Json() {
    }

    public interface Obj extends JSObject {
        @JSIndexer
        JSObject get(String key);

        @JSIndexer
        void set(String key, JSObject value);

        @JSIndexer
        void setStr(String key, String value);

        @JSIndexer
        void setNum(String key, double value);

        @JSIndexer
        void setBool(String key, boolean value);
    }

    public interface Arr extends JSObject {
        @JSIndexer
        JSObject get(int index);

        @JSIndexer
        void set(int index, JSObject value);

        @JSIndexer
        void setStr(int index, String value);

        @JSIndexer
        void setNum(int index, double value);
    }

    @JSBody(params = {}, script = "return {};")
    public static native Obj obj();

    @JSBody(params = {}, script = "return [];")
    public static native Arr arr();

    @JSBody(params = {"s"}, script = "return JSON.parse(s);")
    public static native Obj parse(String s);

    @JSBody(params = {"o"}, script = "return JSON.stringify(o);")
    public static native String stringify(JSObject o);

    @JSBody(params = {"o"}, script = "return JSON.stringify(o, null, 2);")
    public static native String stringifyPretty(JSObject o);

    @JSBody(params = {"o", "k"}, script = "return typeof o[k] === 'string' ? o[k] : '';")
    public static native String str(Obj o, String k);

    @JSBody(params = {"o", "k"}, script = "return typeof o[k] === 'number' ? o[k] : 0;")
    public static native double num(Obj o, String k);

    @JSBody(params = {"o", "k"}, script = "return o[k] === true;")
    public static native boolean bool(Obj o, String k);

    @JSBody(params = {"o", "k"}, script = "return o[k] !== undefined && o[k] !== null;")
    public static native boolean has(Obj o, String k);

    @JSBody(params = {"o", "k"}, script = "return (o[k] !== null && typeof o[k] === 'object' && !Array.isArray(o[k])) ? o[k] : null;")
    public static native Obj getObj(Obj o, String k);

    @JSBody(params = {"o", "k"}, script = "return Array.isArray(o[k]) ? o[k] : null;")
    public static native Arr getArr(Obj o, String k);

    @JSBody(params = {"o", "k"}, script = "delete o[k];")
    public static native void remove(Obj o, String k);

    @JSBody(params = {"o"}, script = "return Object.keys(o);")
    public static native Arr keys(Obj o);

    @JSBody(params = {"a"}, script = "return a.length;")
    public static native int len(Arr a);

    @JSBody(params = {"a", "i"}, script = "return typeof a[i] === 'string' ? a[i] : '';")
    public static native String arrStr(Arr a, int i);

    @JSBody(params = {"a", "i"}, script = "return typeof a[i] === 'number' ? a[i] : 0;")
    public static native double arrNum(Arr a, int i);

    @JSBody(params = {"a", "i"}, script = "return a[i];")
    public static native Obj arrObj(Arr a, int i);

    @JSBody(params = {"a", "v"}, script = "a.push(v);")
    public static native void push(Arr a, JSObject v);

    @JSBody(params = {"a", "v"}, script = "a.push(v);")
    public static native void pushStr(Arr a, String v);

    @JSBody(params = {"a", "v"}, script = "a.push(v);")
    public static native void pushNum(Arr a, double v);
}