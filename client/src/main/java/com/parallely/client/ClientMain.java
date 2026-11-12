package com.parallely.client;

import com.parallely.client.shell.AppShell;
import com.parallely.client.shell.Ui;
import org.teavm.jso.dom.html.HTMLElement;

public final class ClientMain {
    private ClientMain() {
    }

    public static void main(String[] args) {
        HTMLElement root = Ui.byId("root");
        AppShell shell = new AppShell();
        Ui.add(root, shell.root());
    }
}