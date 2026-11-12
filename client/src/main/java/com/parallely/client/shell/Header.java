package com.parallely.client.shell;

import org.teavm.jso.dom.html.HTMLElement;

public final class Header {
    public interface Callbacks {
        void onTabChange(String tab);

        void onPrimaryAction();
    }

    private static final String[][] TABS = {
            {"whiteboard", "Whiteboard Studio", "Whiteboard", "Layers"},
            {"mcq", "Virtual MCQ Consensus", "MCQ Pool", "HelpCircle"},
            {"java", "Java 21 Architecture", "Java 21", "FileCode"},
    };

    private Header() {
    }

    public static void build(HTMLElement slot, String activeTab, String primaryActionLabel, boolean compact, Callbacks cb) {
        Ui.clear(slot);

        HTMLElement header = Ui.el("header", "flex items-center justify-between gap-4 px-3 py-2 bg-[#C0C0C0] border-b-2 border-black text-black select-none");

        HTMLElement brand = Ui.el("div", "flex items-center gap-2 whitespace-nowrap shrink-0");
        Ui.add(brand, Ui.el("div", "w-8 h-8 win-titlebar-blue flex items-center justify-center font-pixel text-2xl leading-none border-2 border-black", "☰"));
        HTMLElement brandText = Ui.el("div", "leading-none");
        Ui.add(brandText,
                Ui.el("span", "font-pixel text-[24px] leading-none tracking-wide block", "COLLABORATIVE WHITEBOARD"),
                Ui.el("span", "text-[11px] font-bold block mt-0.5", "the null pointers · CSE 213"));
        Ui.add(brand, brandText);

        HTMLElement nav = Ui.el("nav", "hidden md:flex items-center gap-1.5 text-xs font-bold");
        for (String[] tab : TABS) {
            String cls = "flex items-center gap-1.5 px-2 py-1.5 whitespace-nowrap shrink-0 "
                    + (activeTab.equals(tab[0]) ? "win-btn-selected" : "win-btn");
            HTMLElement b = Ui.btnHtml(cls,
                    Icons.svg(tab[3], "w-4 h-4") + "<span class=\"" + (compact ? "hidden" : "hidden xl:inline") + "\">" + tab[1] + "</span>",
                    () -> cb.onTabChange(tab[0]));
            Ui.add(nav, b);
        }

        HTMLElement zone3 = Ui.el("div", "flex items-center gap-3 shrink-0");
        HTMLElement primary = Ui.btnHtml("win-btn-selected flex items-center gap-2 px-3 py-1.5 text-xs font-bold whitespace-nowrap shrink-0",
                Icons.svg("Sparkles", "w-3.5 h-3.5") + "<span class=\"truncate max-w-[120px] md:max-w-none\">" + primaryActionLabel + "</span>",
                cb::onPrimaryAction);
        Ui.add(zone3, primary);

        Ui.add(header, brand, nav, zone3);

        HTMLElement mobile = Ui.el("nav", "flex md:hidden items-center justify-around bg-[#C0C0C0] border-b-2 border-black px-2 py-2 text-xs font-bold overflow-x-auto");
        for (String[] tab : TABS) {
            String cls = "flex items-center gap-1.5 px-2.5 py-1 whitespace-nowrap shrink-0 "
                    + (activeTab.equals(tab[0]) ? "win-btn-selected" : "win-btn");
            HTMLElement b = Ui.btnHtml(cls, Icons.svg(tab[3], "w-4 h-4") + tab[2], () -> cb.onTabChange(tab[0]));
            Ui.add(mobile, b);
        }

        Ui.add(slot, header, mobile);
    }
}