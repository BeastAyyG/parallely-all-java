package com.parallely.client.shell;

import org.teavm.jso.dom.html.HTMLElement;

public interface View {
    HTMLElement root();

    void onPrimaryAction();

    void dispose();
}