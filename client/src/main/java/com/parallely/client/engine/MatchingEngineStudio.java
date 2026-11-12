package com.parallely.client.engine;

import com.parallely.client.js.Js;
import com.parallely.client.model.DisruptorMetrics;
import com.parallely.client.model.Order;
import com.parallely.client.model.OrderBookLevel;
import com.parallely.client.model.OrderBookState;
import com.parallely.client.model.OrderInput;
import com.parallely.client.model.OrderSide;
import com.parallely.client.model.OrderStatus;
import com.parallely.client.model.OrderType;
import com.parallely.client.model.RingSlot;
import com.parallely.client.model.SlotState;
import com.parallely.client.model.Trade;
import com.parallely.client.shell.Icons;
import com.parallely.client.shell.Ui;
import com.parallely.client.shell.View;
import org.teavm.jso.JSBody;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLInputElement;
import org.teavm.jso.dom.xml.Text;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public final class MatchingEngineStudio implements View {

    private static final int BATCH_INTERVAL_MS = 50;
    private static final int TELEMETRY_INTERVAL_MS = 500;
    private static final int MAX_LATENCY_SAMPLES = 200;
    private static final int BOOK_ROWS = 6;
    private static final int TAPE_ROWS = 5;
    private static final int TAPE_FETCH = 15;
    private static final int BURST_SIZE = 500;
    private static final int PRIMARY_BURST_REPEATS = 20;

    private final MatchingEngine engine = new MatchingEngine(100.0);
    private final RingBuffer ring = new RingBuffer(64);

    private OrderBookState orderBook;
    private List<Trade> recentTrades = List.of();
    private boolean isSimulating = true;
    private int simulatedTradersCount = 1000;
    private int targetOpsPerSec = 2500;
    private OrderSide orderSide = OrderSide.BUY;
    private OrderType orderType = OrderType.LIMIT;
    private double orderPrice = 100.0;
    private double orderSize = 5;
    private DisruptorMetrics metrics = new DisruptorMetrics(0, 0, 1.2, 3.4, 7.8, 64, 0, 0, 12);

    private long lastProcessedCount = 0;
    private long totalProcessed = 0;
    private final ArrayDeque<Double> latencySamples = new ArrayDeque<>();

    private int simIntervalId = -1;
    private int telemetryIntervalId = -1;
    private boolean disposed = false;

    private final HTMLElement root;
    private final Text throughputText;
    private final Text p99Text;
    private final Text tradersText;
    private final Text midText;
    private final HTMLElement spreadKpiSpan;
    private final Text totalText;
    private final HTMLElement asksWrap;
    private final HTMLElement bidsWrap;
    private final HTMLElement spreadStrong;
    private final HTMLElement lastStrong;
    private final HTMLElement usageSpan;
    private final HTMLElement producerSpan;
    private final List<HTMLElement> slotDivs = new ArrayList<>();
    private final HTMLElement printedSpan;
    private final HTMLElement tapeWrap;
    private final HTMLElement tradersLabel;
    private final HTMLElement opsLabel;
    private final HTMLInputElement tradersSlider;
    private final HTMLInputElement opsSlider;
    private final HTMLButtonElement pauseBtn;
    private final HTMLButtonElement buyBtn;
    private final HTMLButtonElement sellBtn;
    private final HTMLButtonElement limitBtn;
    private final HTMLButtonElement marketBtn;
    private final HTMLElement priceGroup;
    private final HTMLInputElement priceInput;
    private final HTMLInputElement sizeInput;
    private final HTMLButtonElement submitBtn;

    public MatchingEngineStudio() {
        seedBook();
        orderBook = engine.getOrderBookState();

        root = Ui.el("div", "w-full h-full bg-[#008080] text-black p-6 flex flex-col gap-5 select-none overflow-y-auto");

        HTMLElement kpiGrid = Ui.el("div", "grid grid-cols-2 md:grid-cols-5 gap-3.5");
        HTMLElement throughputValue = kpiCard(kpiGrid, "Throughput", "Flame", "w-3.5 h-3.5 text-[#92400E]",
                "text-xl font-bold font-mono tabular-nums text-black flex items-baseline gap-1.5");
        throughputText = textNode(throughputValue, "0");
        Ui.add(throughputValue, Ui.el("span", "text-xs font-normal text-[#404040]", "ops/sec"));

        HTMLElement p99Value = kpiCard(kpiGrid, "p99 Latency", "Zap", "w-3.5 h-3.5 text-[#0000CD]",
                "text-xl font-bold font-mono tabular-nums text-[#0000CD] flex items-baseline gap-1.5");
        p99Text = textNode(p99Value, "3.4");
        Ui.add(p99Value, Ui.el("span", "text-xs font-normal text-[#404040]", "μs"));

        HTMLElement tradersValue = kpiCard(kpiGrid, "Simulated Traders", "Activity", "w-3.5 h-3.5 text-[#047857]",
                "text-xl font-bold font-mono tabular-nums text-emerald-300 flex items-baseline gap-1.5");
        tradersText = textNode(tradersValue, "1,000");
        Ui.add(tradersValue, Ui.el("span", "text-xs font-normal text-[#404040]", "agents"));

        HTMLElement midValue = kpiCard(kpiGrid, "Mid Price &amp; Spread", "TrendingUp", "w-3.5 h-3.5 text-[#0369A1]",
                "text-xl font-bold font-mono tabular-nums text-black flex items-baseline gap-2");
        midText = textNode(midValue, "$100.00");
        spreadKpiSpan = Ui.el("span", "text-xs font-medium text-[#404040]");
        Ui.add(midValue, spreadKpiSpan);

        HTMLElement totalValue = kpiCard(kpiGrid, "Total Matched", "Cpu", "w-3.5 h-3.5 text-purple-400",
                "text-xl font-bold font-mono tabular-nums text-purple-300 flex items-baseline gap-1.5");
        totalText = textNode(totalValue, "0");
        Ui.add(totalValue, Ui.el("span", "text-xs font-normal text-[#404040]", "events"));

        HTMLElement mainGrid = Ui.el("div", "grid grid-cols-1 lg:grid-cols-12 gap-5");

        HTMLElement leftCard = Ui.el("div", "lg:col-span-5 bg-white border border-black rounded-none p-4 flex flex-col gap-3 shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLElement bookHeader = Ui.el("div", "flex items-center justify-between border-b border-black pb-2.5");
        HTMLElement bookTitle = Ui.html("div", "flex items-center gap-2",
                Icons.svg("BarChart3", "w-4 h-4 text-[#0000CD]")
                        + "<h2 class=\"text-sm font-semibold text-black\">L2 Depth Order Book (FIFO Priority)</h2>");
        Ui.add(bookHeader, bookTitle, Ui.el("span", "text-xs font-mono text-[#404040]", "BTC/USD"));
        HTMLElement bookCols = Ui.el("div", "grid grid-cols-3 text-xs font-medium text-black px-2 py-1 bg-[#C0C0C0] rounded-none border border-black");
        Ui.add(bookCols, Ui.el("span", "", "Price (USD)"), Ui.el("span", "text-right", "Size"), Ui.el("span", "text-right", "Depth"));
        asksWrap = Ui.el("div", "flex flex-col-reverse gap-0.5");
        HTMLElement spreadBar = Ui.el("div", "flex items-center justify-between px-3 py-2 bg-slate-950/70 border-y border-black rounded-none text-xs font-mono");
        HTMLElement spreadSpan = Ui.el("span", "text-[#D4D4D4]");
        spreadSpan.appendChild(Ui.doc().createTextNode("Spread: "));
        spreadStrong = Ui.el("strong", "text-white");
        Ui.add(spreadSpan, spreadStrong);
        HTMLElement lastSpan = Ui.el("span", "text-[#D4D4D4]");
        lastSpan.appendChild(Ui.doc().createTextNode("Last Executed: "));
        lastStrong = Ui.el("strong", "text-[#047857]");
        Ui.add(lastSpan, lastStrong);
        Ui.add(spreadBar, spreadSpan, lastSpan);
        bidsWrap = Ui.el("div", "flex flex-col gap-0.5");
        Ui.add(leftCard, bookHeader, bookCols, asksWrap, spreadBar, bidsWrap);

        HTMLElement midCard = Ui.el("div", "lg:col-span-4 bg-white border border-black rounded-none p-4 flex flex-col gap-3.5 shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLElement ringHeader = Ui.el("div", "flex items-center justify-between border-b border-black pb-2.5");
        HTMLElement ringTitle = Ui.html("div", "flex items-center gap-2",
                Icons.svg("Layers", "w-4 h-4 text-[#0000CD]")
                        + "<h2 class=\"text-sm font-semibold text-black\">LMAX Disruptor RingBuffer (64 Slots)</h2>");
        usageSpan = Ui.el("span", "text-xs font-mono text-[#0000CD]");
        Ui.add(ringHeader, ringTitle, usageSpan);

        HTMLElement legend = Ui.el("div", "grid grid-cols-2 gap-2 text-[11px] font-medium text-black bg-[#E8E8E8] p-2.5 rounded-none border border-black");
        HTMLElement producerItem = Ui.el("div", "flex items-center gap-1.5");
        producerSpan = Ui.el("span", "");
        Ui.add(producerItem, Ui.el("span", "w-2.5 h-2.5 rounded-full bg-[#0000CD]"), producerSpan);
        Ui.add(legend, producerItem,
                legendItem("bg-pink-500", "2. WAL Journaler"),
                legendItem("bg-emerald-500", "3. Single-Thread Match Core"),
                legendItem("bg-sky-400", "4. Gateway Publisher"));

        HTMLElement slotsGrid = Ui.el("div", "grid grid-cols-8 gap-1.5 p-2 bg-slate-950/80 rounded-none border border-black/80");
        for (int i = 0; i < ring.getCapacity(); i++) {
            HTMLElement slot = Ui.el("div", "", String.valueOf(i));
            slotDivs.add(slot);
            Ui.add(slotsGrid, slot);
        }

        HTMLElement tape = Ui.el("div", "flex flex-col gap-2 mt-auto");
        HTMLElement tapeHeader = Ui.el("div", "flex items-center justify-between text-xs text-[#404040] border-b border-black pb-1");
        printedSpan = Ui.el("span", "font-mono");
        Ui.add(tapeHeader, Ui.el("span", "font-semibold text-[#1F1F1F]", "Live Trade Tape"), printedSpan);
        tapeWrap = Ui.el("div", "flex flex-col gap-1 max-h-36 overflow-y-auto font-mono text-xs");
        Ui.add(tape, tapeHeader, tapeWrap);
        Ui.add(midCard, ringHeader, legend, slotsGrid, tape);

        HTMLElement rightCol = Ui.el("div", "lg:col-span-3 flex flex-col gap-4");
        HTMLElement simCard = Ui.el("div", "bg-white border border-black rounded-none p-4 flex flex-col gap-3 shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLElement simHeader = Ui.el("div", "flex items-center justify-between");
        Ui.add(simHeader, Ui.html("h3", "text-sm font-semibold text-black flex items-center gap-2",
                Icons.svg("Activity", "w-4 h-4 text-[#047857]") + "Concurrent Multi-User Bot Swarm"));

        HTMLElement tradersGroup = Ui.el("div", "flex flex-col gap-1.5");
        HTMLElement tradersLabelRow = Ui.el("div", "flex justify-between text-xs text-[#404040]");
        tradersLabel = Ui.el("span", "font-mono text-[#047857]");
        Ui.add(tradersLabelRow, Ui.el("span", "", "Active Virtual Traders"), tradersLabel);
        tradersSlider = Ui.input("w-full accent-emerald-500 cursor-pointer", "range", "1000", "");
        Ui.attr(tradersSlider, "min", "50");
        Ui.attr(tradersSlider, "max", "5000");
        Ui.attr(tradersSlider, "step", "50");
        Ui.onInput(tradersSlider, value -> {
            simulatedTradersCount = (int) parseNum(value);
            restartSim();
            update();
        });
        Ui.add(tradersGroup, tradersLabelRow, tradersSlider);

        HTMLElement opsGroup = Ui.el("div", "flex flex-col gap-1.5");
        HTMLElement opsLabelRow = Ui.el("div", "flex justify-between text-xs text-[#404040]");
        opsLabel = Ui.el("span", "font-mono text-[#92400E]");
        Ui.add(opsLabelRow, Ui.el("span", "", "Load Target (Ops/sec)"), opsLabel);
        opsSlider = Ui.input("w-full accent-amber-500 cursor-pointer", "range", "2500", "");
        Ui.attr(opsSlider, "min", "200");
        Ui.attr(opsSlider, "max", "10000");
        Ui.attr(opsSlider, "step", "200");
        Ui.onInput(opsSlider, value -> {
            targetOpsPerSec = (int) parseNum(value);
            restartSim();
            update();
        });
        Ui.add(opsGroup, opsLabelRow, opsSlider);

        HTMLElement simButtons = Ui.el("div", "grid grid-cols-2 gap-2 mt-1");
        pauseBtn = Ui.btnHtml("", "", () -> {
            isSimulating = !isSimulating;
            restartSim();
            update();
        });
        HTMLButtonElement burstBtn = Ui.btnHtml("py-2 px-3 bg-[#0000CD] hover:bg-[#0000CD] text-white rounded-none text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer",
                Icons.svg("Flame", "w-3.5 h-3.5 text-amber-300") + "+500 Burst", () -> {
                    injectBurst();
                    update();
                });
        Ui.add(simButtons, pauseBtn, burstBtn);
        Ui.add(simCard, simHeader, tradersGroup, opsGroup, simButtons);

        HTMLElement form = Ui.el("form", "bg-white border border-black rounded-none p-4 flex flex-col gap-3 shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        onSubmit(form, this::handleManualOrderSubmit);
        HTMLElement formTitle = Ui.el("h3", "text-sm font-semibold text-black", "Submit Manual Order");

        HTMLElement sideToggle = Ui.el("div", "grid grid-cols-2 gap-1.5 p-1 bg-slate-950 rounded-none");
        buyBtn = Ui.btn("", "Buy (Bid)", () -> {
            orderSide = OrderSide.BUY;
            update();
        });
        sellBtn = Ui.btn("", "Sell (Ask)", () -> {
            orderSide = OrderSide.SELL;
            update();
        });
        Ui.attr(buyBtn, "type", "button");
        Ui.attr(sellBtn, "type", "button");
        Ui.add(sideToggle, buyBtn, sellBtn);

        HTMLElement typeToggle = Ui.el("div", "grid grid-cols-2 gap-1.5 p-1 bg-slate-950 rounded-none");
        limitBtn = Ui.btn("", "Limit", () -> {
            orderType = OrderType.LIMIT;
            update();
        });
        marketBtn = Ui.btn("", "Market", () -> {
            orderType = OrderType.MARKET;
            update();
        });
        Ui.attr(limitBtn, "type", "button");
        Ui.attr(marketBtn, "type", "button");
        Ui.add(typeToggle, limitBtn, marketBtn);

        priceGroup = Ui.el("div", "flex flex-col gap-1");
        priceInput = Ui.input("bg-slate-950 border border-black rounded-none px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-[#0000CD]",
                "number", "100", "");
        Ui.attr(priceInput, "step", "0.1");
        Ui.onInput(priceInput, value -> {
            orderPrice = parseNum(value);
            update();
        });
        Ui.add(priceGroup, Ui.el("label", "text-[11px] text-[#404040]", "Price (USD)"), priceInput);

        HTMLElement sizeGroup = Ui.el("div", "flex flex-col gap-1");
        sizeInput = Ui.input("bg-slate-950 border border-black rounded-none px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-[#0000CD]",
                "number", "5", "");
        Ui.attr(sizeInput, "min", "1");
        Ui.attr(sizeInput, "max", "1000");
        Ui.onInput(sizeInput, value -> {
            orderSize = parseNum(value);
            update();
        });
        Ui.add(sizeGroup, Ui.el("label", "text-[11px] text-[#404040]", "Quantity (Units)"), sizeInput);

        submitBtn = Ui.btn("", "", () -> {
        });
        Ui.attr(submitBtn, "type", "submit");
        Ui.add(form, formTitle, sideToggle, typeToggle, priceGroup, sizeGroup, submitBtn);
        Ui.add(rightCol, simCard, form);

        Ui.add(mainGrid, leftCard, midCard, rightCol);
        Ui.add(root, kpiGrid, mainGrid);

        update();
        telemetryIntervalId = Js.setInterval(this::telemetryTick, TELEMETRY_INTERVAL_MS);
        restartSim();
    }

    @Override
    public HTMLElement root() {
        return root;
    }

    @Override
    public void onPrimaryAction() {
        for (int i = 0; i < PRIMARY_BURST_REPEATS; i++) {
            injectBurst();
        }
        update();
    }

    @Override
    public void dispose() {
        disposed = true;
        if (simIntervalId >= 0) {
            Js.clearInterval(simIntervalId);
            simIntervalId = -1;
        }
        if (telemetryIntervalId >= 0) {
            Js.clearInterval(telemetryIntervalId);
            telemetryIntervalId = -1;
        }
    }

    private void seedBook() {
        for (int i = 1; i <= 6; i++) {
            engine.processOrder(new OrderInput("seed-bid-" + i, "mm-bid-" + i, "MarketMaker_B" + i,
                    OrderSide.BUY, OrderType.LIMIT, round2(100.0 - i * 0.25), (int) (10 + Math.random() * 40)));
        }
        for (int i = 1; i <= 6; i++) {
            engine.processOrder(new OrderInput("seed-ask-" + i, "mm-ask-" + i, "MarketMaker_A" + i,
                    OrderSide.SELL, OrderType.LIMIT, round2(100.0 + i * 0.25), (int) (10 + Math.random() * 40)));
        }
    }

    private void restartSim() {
        if (simIntervalId >= 0) {
            Js.clearInterval(simIntervalId);
            simIntervalId = -1;
        }
        if (!isSimulating) {
            return;
        }
        int batchSize = Math.max(1, (int) Math.round(targetOpsPerSec * BATCH_INTERVAL_MS / 1000.0));
        simIntervalId = Js.setInterval(() -> simTick(batchSize), BATCH_INTERVAL_MS);
    }

    private void simTick(int batchSize) {
        if (disposed) {
            return;
        }
        double basePrice = engine.getOrderBookState().midPrice();
        if (basePrice == 0) {
            basePrice = 100.0;
        }
        for (int i = 0; i < batchSize; i++) {
            OrderSide side = Math.random() > 0.5 ? OrderSide.BUY : OrderSide.SELL;
            boolean isMarket = Math.random() < 0.2;
            double delta = (Math.random() - 0.5) * 1.5;
            double price = isMarket ? 0
                    : round2(Math.max(10, side == OrderSide.BUY ? basePrice - Math.abs(delta) : basePrice + Math.abs(delta)));
            int size = (int) (1 + Math.random() * 15);
            int traderIdx = (int) (Math.random() * simulatedTradersCount);
            Order order = new Order("sim-" + System.currentTimeMillis() + "-" + i + "-" + randomToken(),
                    "agent-" + traderIdx, "Trader_" + traderIdx, side,
                    isMarket ? OrderType.MARKET : OrderType.LIMIT, price, size, 0,
                    System.currentTimeMillis(), OrderStatus.NEW);

            double t0 = Js.now();
            ring.publish(order);
            ring.stepJournaler(1);
            ring.stepMatching(1, o -> engine.processOrder(toInput(o)));
            ring.stepPublisher(1);
            double latencyUs = (Js.now() - t0) * 1000;
            latencySamples.addLast(latencyUs);
            if (latencySamples.size() > MAX_LATENCY_SAMPLES) {
                latencySamples.removeFirst();
            }
            totalProcessed++;
        }
        orderBook = engine.getOrderBookState();
        recentTrades = fetchTrades();
        update();
    }

    private void telemetryTick() {
        if (disposed) {
            return;
        }
        long currentCount = totalProcessed;
        long delta = currentCount - lastProcessedCount;
        lastProcessedCount = currentCount;
        double throughput = delta * 2;

        double avg = 1.2;
        double p99 = 3.4;
        double max = 7.8;
        if (!latencySamples.isEmpty()) {
            double[] sorted = new double[latencySamples.size()];
            int i = 0;
            double sum = 0;
            for (double v : latencySamples) {
                sorted[i++] = v;
                sum += v;
            }
            Arrays.sort(sorted);
            avg = round1(sum / sorted.length);
            double p99Raw = sorted[(int) Math.floor(sorted.length * 0.99)];
            p99 = round1(p99Raw != 0 ? p99Raw : avg);
            double maxRaw = sorted[sorted.length - 1];
            max = round1(maxRaw != 0 ? maxRaw : avg);
        }

        RingBuffer.Cursors cursors = ring.getCursors();
        metrics = new DisruptorMetrics(currentCount, throughput, avg, p99, max, ring.getCapacity(),
                cursors.producer(), cursors.matching(), ring.getBufferUtilization());
        update();
    }

    private void handleManualOrderSubmit() {
        Order order = new Order("manual-" + System.currentTimeMillis(), "user-trader", "You (Host)",
                orderSide, orderType, orderType == OrderType.MARKET ? 0 : orderPrice, orderSize, 0,
                System.currentTimeMillis(), OrderStatus.NEW);
        ring.publish(order);
        ring.stepJournaler(1);
        ring.stepMatching(1, o -> engine.processOrder(toInput(o)));
        ring.stepPublisher(1);
        orderBook = engine.getOrderBookState();
        recentTrades = fetchTrades();
        totalProcessed++;
        update();
    }

    private void injectBurst() {
        double basePrice = engine.getOrderBookState().midPrice();
        if (basePrice == 0) {
            basePrice = 100.0;
        }
        for (int i = 0; i < BURST_SIZE; i++) {
            OrderSide side = Math.random() > 0.5 ? OrderSide.BUY : OrderSide.SELL;
            boolean isMarket = Math.random() < 0.35;
            double delta = (Math.random() - 0.5) * 2;
            double price = isMarket ? 0 : round2(basePrice + delta);
            int size = (int) (1 + Math.random() * 20);
            Order order = new Order("burst-" + System.currentTimeMillis() + "-" + i,
                    "burst-agent-" + i, "BurstBot_" + i, side,
                    isMarket ? OrderType.MARKET : OrderType.LIMIT, price, size, 0,
                    System.currentTimeMillis(), OrderStatus.NEW);
            ring.publish(order);
            ring.stepJournaler(1);
            ring.stepMatching(1, o -> engine.processOrder(toInput(o)));
            ring.stepPublisher(1);
            totalProcessed++;
        }
        orderBook = engine.getOrderBookState();
        recentTrades = fetchTrades();
    }

    private List<Trade> fetchTrades() {
        List<Trade> all = engine.getRecentTrades();
        return all.size() > TAPE_FETCH ? new ArrayList<>(all.subList(0, TAPE_FETCH)) : all;
    }

    private static OrderInput toInput(Order o) {
        return new OrderInput(o.getId(), o.getTraderId(), o.getTraderName(), o.getSide(), o.getType(),
                o.getPrice(), o.getSize(), o.getTimestamp(), o.getOptionKey());
    }

    private void update() {
        throughputText.setTextContent(toLocaleString(metrics.throughputOpsSec()));
        p99Text.setTextContent(numStr(metrics.p99LatencyUs()));
        tradersText.setTextContent(toLocaleString(simulatedTradersCount));
        midText.setTextContent("$" + toFixed2(orderBook.midPrice()));
        Ui.setText(spreadKpiSpan, "spread $" + toFixed2(orderBook.spread()));
        totalText.setTextContent(toLocaleString(metrics.totalProcessed()));

        double maxVolume = 1;
        for (OrderBookLevel level : orderBook.bids()) {
            maxVolume = Math.max(maxVolume, level.totalVolume());
        }
        for (OrderBookLevel level : orderBook.asks()) {
            maxVolume = Math.max(maxVolume, level.totalVolume());
        }

        Ui.clear(asksWrap);
        List<OrderBookLevel> asks = orderBook.asks();
        for (int i = 0; i < Math.min(BOOK_ROWS, asks.size()); i++) {
            Ui.add(asksWrap, bookRow(asks.get(i), maxVolume, true));
        }
        Ui.clear(bidsWrap);
        List<OrderBookLevel> bids = orderBook.bids();
        for (int i = 0; i < Math.min(BOOK_ROWS, bids.size()); i++) {
            Ui.add(bidsWrap, bookRow(bids.get(i), maxVolume, false));
        }

        Ui.setText(spreadStrong, "$" + toFixed2(orderBook.spread()));
        Ui.setText(lastStrong, "$" + toFixed2(orderBook.lastTradePrice()));

        Ui.setText(usageSpan, "Usage: " + (int) metrics.ringBufferUsage() + "%");
        Ui.setText(producerSpan, "1. Producer Seq: " + metrics.producerCursor());
        List<RingSlot> slots = ring.getSlots();
        for (int i = 0; i < slotDivs.size(); i++) {
            RingSlot slot = slots.get(i);
            HTMLElement div = slotDivs.get(i);
            Ui.cls(div, "h-7 rounded flex items-center justify-center text-[10px] font-mono border transition-all " + slotBg(slot.getState()));
            Ui.attr(div, "title", "Slot #" + slot.getIndex() + " | Seq: " + slot.getSequence() + " | State: " + slot.getState().name());
        }

        Ui.setText(printedSpan, recentTrades.size() + " printed");
        Ui.clear(tapeWrap);
        for (int i = 0; i < Math.min(TAPE_ROWS, recentTrades.size()); i++) {
            Ui.add(tapeWrap, tapeRow(recentTrades.get(i)));
        }

        Ui.setText(tradersLabel, simulatedTradersCount + " bots");
        Ui.setText(opsLabel, targetOpsPerSec + " ops/s");
        syncSlider(tradersSlider, simulatedTradersCount);
        syncSlider(opsSlider, targetOpsPerSec);

        Ui.cls(pauseBtn, "py-2 px-3 rounded-none text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer "
                + (isSimulating ? "bg-rose-950/60 text-rose-300 border border-rose-800/60 hover:bg-rose-900/60"
                : "bg-emerald-600 text-white hover:bg-emerald-500"));
        Ui.setHtml(pauseBtn, Icons.svg(isSimulating ? "Pause" : "Play", "w-3.5 h-3.5") + (isSimulating ? "Pause Load" : "Start Swarm"));

        Ui.cls(buyBtn, "py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer "
                + (orderSide == OrderSide.BUY ? "bg-emerald-600 text-white" : "text-[#404040] hover:text-black"));
        Ui.cls(sellBtn, "py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer "
                + (orderSide == OrderSide.SELL ? "bg-rose-600 text-white" : "text-[#404040] hover:text-black"));
        Ui.cls(limitBtn, "py-1 text-xs font-medium rounded-md transition-all cursor-pointer "
                + (orderType == OrderType.LIMIT ? "bg-[#0000CD] text-white" : "text-[#404040] hover:text-black"));
        Ui.cls(marketBtn, "py-1 text-xs font-medium rounded-md transition-all cursor-pointer "
                + (orderType == OrderType.MARKET ? "bg-[#0000CD] text-white" : "text-[#404040] hover:text-black"));

        Ui.show(priceGroup, orderType == OrderType.LIMIT);
        syncNumberInput(priceInput, orderPrice);
        syncNumberInput(sizeInput, orderSize);

        Ui.cls(submitBtn, "w-full py-2 rounded-none text-xs font-semibold shadow-md transition-all cursor-pointer "
                + (orderSide == OrderSide.BUY ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                : "bg-rose-600 hover:bg-rose-500 text-white"));
        Ui.setText(submitBtn, "Execute " + orderSide.name() + " " + orderType.name());
    }

    private static HTMLElement kpiCard(HTMLElement grid, String label, String icon, String iconCls, String valueCls) {
        HTMLElement card = Ui.el("div", "bg-white border border-black rounded-none p-3.5 flex flex-col");
        HTMLElement header = Ui.html("div", "flex items-center justify-between text-xs text-[#404040] mb-1",
                "<span>" + label + "</span>" + Icons.svg(icon, iconCls));
        HTMLElement value = Ui.el("div", valueCls);
        Ui.add(card, header, value);
        Ui.add(grid, card);
        return value;
    }

    private static Text textNode(HTMLElement parent, String text) {
        Text t = Ui.doc().createTextNode(text);
        parent.appendChild(t);
        return t;
    }

    private static HTMLElement legendItem(String dotCls, String text) {
        HTMLElement item = Ui.el("div", "flex items-center gap-1.5");
        Ui.add(item, Ui.el("span", "w-2.5 h-2.5 rounded-full " + dotCls), Ui.el("span", "", text));
        return item;
    }

    private static HTMLElement bookRow(OrderBookLevel level, double maxVolume, boolean isAsk) {
        int depthPct = (int) Math.min(100, Math.round(level.totalVolume() / maxVolume * 100));
        HTMLElement row = Ui.el("div", "relative grid grid-cols-3 text-xs font-mono tabular-nums px-2 py-1.5 rounded hover:bg-[#D4D4D4]/50 transition-colors");
        HTMLElement bar = Ui.el("div", "absolute inset-y-0 right-0 " + (isAsk ? "bg-rose-500/15" : "bg-emerald-500/15") + " rounded pointer-events-none");
        Ui.setStyle(bar, "width", depthPct + "%");
        HTMLElement price = Ui.el("span", (isAsk ? "text-[#DC2626]" : "text-[#047857]") + " font-semibold relative z-10",
                "$" + toFixed2(level.price()));
        HTMLElement size = Ui.el("span", "text-right text-[#1F1F1F] relative z-10", numStr(level.totalVolume()));
        HTMLElement depth = Ui.el("span", "text-right text-[#404040] relative z-10", depthPct + "%");
        Ui.add(row, bar, price, size, depth);
        return row;
    }

    private static HTMLElement tapeRow(Trade tr) {
        boolean buy = tr.aggressiveSide() == OrderSide.BUY;
        String colorCls = buy ? "text-[#047857]" : "text-[#DC2626]";
        HTMLElement row = Ui.el("div", "flex items-center justify-between px-2 py-1 bg-slate-950/40 rounded");
        HTMLElement left = Ui.html("div", "flex items-center gap-1.5",
                Icons.svg(buy ? "ArrowUpRight" : "ArrowDownRight", "w-3.5 h-3.5 " + colorCls)
                        + "<span class=\"" + colorCls + "\">$" + toFixed2(tr.price()) + "</span>");
        HTMLElement size = Ui.el("span", "text-[#1F1F1F]", numStr(tr.size()) + " units");
        HTMLElement time = Ui.el("span", "text-[#404040] text-[10px]", localeTime(tr.timestamp()));
        Ui.add(row, left, size, time);
        return row;
    }

    private static String slotBg(SlotState state) {
        return switch (state) {
            case PUBLISHED -> "bg-[#0000CD]/80 border-indigo-400 text-white";
            case JOURNALED -> "bg-pink-500/80 border-pink-400 text-white";
            case MATCHED -> "bg-emerald-500/80 border-emerald-400 text-white";
            case DISPATCHED -> "bg-sky-500/50 border-sky-400 text-sky-100";
            default -> "bg-[#D4D4D4] border-black text-slate-600";
        };
    }

    private static void syncSlider(HTMLInputElement slider, int value) {
        String text = String.valueOf(value);
        if (!slider.getValue().equals(text)) {
            slider.setValue(text);
        }
    }

    private static void syncNumberInput(HTMLInputElement input, double value) {
        String current = input.getValue();
        if (value == 0 && current.isEmpty()) {
            return;
        }
        if (parseNum(current) != value) {
            input.setValue(numStr(value));
        }
    }

    private static double parseNum(String s) {
        try {
            return Double.parseDouble(s);
        } catch (NumberFormatException e) {
            return 0;
        }
    }

    private static double round1(double value) {
        return new BigDecimal(value).setScale(1, RoundingMode.HALF_UP).doubleValue();
    }

    private static double round2(double value) {
        return new BigDecimal(value).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }

    @JSBody(params = {"n"}, script = "return n.toLocaleString();")
    private static native String toLocaleString(double n);

    @JSBody(params = {"n"}, script = "return String(n);")
    private static native String numStr(double n);

    @JSBody(params = {"n"}, script = "return n.toFixed(2);")
    private static native String toFixed2(double n);

    @JSBody(params = {"ts"}, script = "return new Date(ts).toLocaleTimeString();")
    private static native String localeTime(double ts);

    @JSBody(params = {}, script = "return Math.random().toString(36).slice(2, 5);")
    private static native String randomToken();

    @JSBody(params = {"e", "cb"}, script = "e.addEventListener('submit', function (ev) { ev.preventDefault(); cb(); });")
    private static native void onSubmit(HTMLElement e, Js.VoidCb cb);
}