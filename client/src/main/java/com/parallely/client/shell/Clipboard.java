package com.parallely.client.shell;

import org.teavm.jso.JSBody;

public final class Clipboard {
    private Clipboard() {
    }

    @JSBody(params = {"text"}, script = """
            function fallback(t) {
              var ta = document.createElement('textarea');
              ta.value = t;
              ta.setAttribute('readonly', '');
              ta.style.position = 'fixed';
              ta.style.opacity = '0';
              document.body.appendChild(ta);
              ta.select();
              try { document.execCommand('copy'); } finally { document.body.removeChild(ta); }
            }
            try {
              if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).catch(function () { fallback(text); });
                return;
              }
            } catch (e) { /* fall through */ }
            fallback(text);
            """)
    public static native void copy(String text);
}