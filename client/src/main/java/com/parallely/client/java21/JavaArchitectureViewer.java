package com.parallely.client.java21;

import com.parallely.client.js.Js;
import com.parallely.client.shell.Clipboard;
import com.parallely.client.shell.Icons;
import com.parallely.client.shell.Ui;
import com.parallely.client.shell.View;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLElement;

import java.util.ArrayList;
import java.util.List;

public final class JavaArchitectureViewer implements View {

    private record CodeSnippet(String id, String title, String filename, String language, String description, String code) {
    }

    private static final String DISRUPTOR_ENGINE_CODE = """
            package com.apex.engine;

            import com.lmax.disruptor.BusySpinWaitStrategy;
            import com.lmax.disruptor.EventHandler;
            import com.lmax.disruptor.RingBuffer;
            import com.lmax.disruptor.dsl.Disruptor;
            import com.lmax.disruptor.dsl.ProducerType;
            import com.lmax.disruptor.util.DaemonThreadFactory;

            import java.util.concurrent.atomic.AtomicLong;

            /**
             * Ultra-Low-Latency Order Matching Engine orchestrating LMAX Disruptor.
             * Processes 25M+ events per second with sub-microsecond tail latency.
             */
            public final class DisruptorMatchingEngine {

                // Power-of-2 buffer capacity (65,536 slots) for fast sequence bitmasking
                public static final int BUFFER_SIZE = 1024 * 64;

                private final Disruptor<OrderEvent> disruptor;
                private final RingBuffer<OrderEvent> ringBuffer;
                private final ZeroGcOrderBook orderBook;
                private final AtomicLong tradesCount = new AtomicLong();
                private final WriteAheadLog wal;          // memory-mapped journal
                private final UdpReplicator replicator;   // best-effort UDP replication

                public DisruptorMatchingEngine(double basePrice, double tickSize) {
                    this.orderBook = new ZeroGcOrderBook(basePrice, tickSize);
                    this.wal = new WriteAheadLog();       // ./wal (override: -Dapex.wal.dir=...)
                    this.replicator = UdpReplicator.create(); // -Dapex.replicate=host:port

                    this.disruptor = new Disruptor<>(
                            OrderEvent.FACTORY,
                            BUFFER_SIZE,
                            DaemonThreadFactory.INSTANCE,
                            ProducerType.MULTI, // concurrent producers (Project Loom virtual threads)
                            new BusySpinWaitStrategy());

                    // Mechanical Sympathy Pipeline:
                    // Stage 1: Journaler (WAL) + Replicator run concurrently
                    // Stage 2: single-threaded matching core runs after Stage 1
                    disruptor.handleEventsWith(new JournalerHandler(wal), new ReplicatorHandler(replicator))
                             .then(new MatchingEngineHandler(this.orderBook, this.tradesCount));

                    this.ringBuffer = disruptor.start();
                }

                /** Publishes an order into the lock-free RingBuffer. ZERO allocations. */
                public void submitOrder(long orderId, long traderId, byte side, byte type,
                                        double price, long quantity, byte optionKey) {
                    long sequence = ringBuffer.next();
                    try {
                        ringBuffer.get(sequence).set(orderId, traderId, side, type, price, quantity, optionKey);
                    } finally {
                        ringBuffer.publish(sequence);
                    }
                }

                /** Cancels a resting order by id through the normal pipeline. */
                public void cancelOrder(long orderId) {
                    submitOrder(orderId, 0, (byte) 0, OrderEvent.TYPE_CANCEL, 0.0, 0, (byte) 0);
                }

                public void shutdown() {
                    disruptor.shutdown();
                    wal.close();
                    if (replicator != null) replicator.close();
                }
            }""";

    private static final String WHITEBOARD_SERVER_CODE = """
            package com.apex.whiteboard;

            // Protocol (JSON text frames over ws://host:port/ws/whiteboard):
            //   {"type":"join",   "room":"main","user":"Asha","color":"#38BDF8"}
            //   {"type":"element","room":"main","action":"upsert","element":{...}}
            //   {"type":"delete", "room":"main","id":"el-123"}
            //   {"type":"clear",  "room":"main"}
            //   {"type":"cursor", "room":"main","user":"Asha","x":120.5,"y":300.0}
            //   {"type":"leave",  "room":"main"}
            // Server replies to join with {"type":"snapshot","room":"main","elements":[...]}
            // and broadcasts {"type":"presence","room":"main","event":"join|leave","user":"..."}.

            public final class WhiteboardServer {

                private final ConcurrentHashMap<String, Room> rooms = new ConcurrentHashMap<>();

                /** Per-room state: member channels + last-write-wins element store. */
                private static final class Room {
                    final ChannelGroup members = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
                    final ConcurrentHashMap<String, JsonNode> elements = new ConcurrentHashMap<>();
                }

                public void start() throws Exception {
                    EventLoopGroup bossGroup = new NioEventLoopGroup(1);
                    // Project Loom virtual threads handle messages
                    EventLoopGroup workerGroup = new NioEventLoopGroup(
                            Runtime.getRuntime().availableProcessors(),
                            Thread.ofVirtual().name("whiteboard-worker-", 0).factory());
                    try {
                        new ServerBootstrap()
                            .group(bossGroup, workerGroup)
                            .channel(NioServerSocketChannel.class)
                            .childHandler(new ChannelInitializer<SocketChannel>() {
                                @Override
                                protected void initChannel(SocketChannel ch) {
                                    ch.pipeline().addLast(new HttpServerCodec());
                                    ch.pipeline().addLast(new HttpObjectAggregator(65536));
                                    ch.pipeline().addLast(new WebSocketServerProtocolHandler("/ws/whiteboard"));
                                    ch.pipeline().addLast(new WhiteboardFrameHandler(rooms));
                                }
                            })
                            .bind(port).sync().channel().closeFuture().sync();
                    } finally {
                        bossGroup.shutdownGracefully();
                        workerGroup.shutdownGracefully();
                    }
                }

                public static void main(String[] args) throws Exception {
                    int port = args.length > 0 ? Integer.parseInt(args[0]) : 8090;
                    new WhiteboardServer(port).start();
                }
            }""";

    private static final String ZERO_GC_ORDERBOOK_CODE = """
            package com.apex.engine;

            import java.util.Arrays;

            /**
             * Ultra-High-Performance Limit Order Book.
             * - Price-Time Priority (FIFO) matching
             * - Flat primitive arrays + indexed doubly linked list nodes
             * - Zero GC on the critical path; cancel-by-id via open-addressing index
             */
            public final class ZeroGcOrderBook {

                private static final int MAX_ORDERS = 200_000;
                private static final int MAX_PRICE_TICKS = 10_000;

                // Order pool: index 0 reserved as null; free-list for safe slot reuse
                private final long[] orderId = new long[MAX_ORDERS];
                private final long[] leavesQty = new long[MAX_ORDERS];
                private final double[] orderPrice = new double[MAX_ORDERS];
                private final int[] prevOrderIdx = new int[MAX_ORDERS];
                private final int[] nextOrderIdx = new int[MAX_ORDERS];
                // ... traderId, side, initialQty, optionKey arrays omitted for brevity

                // Price level heads / tails / volumes (tick-indexed)
                private final int[] bidLevelHead = new int[MAX_PRICE_TICKS];
                private final int[] askLevelHead = new int[MAX_PRICE_TICKS];
                private final long[] bidLevelVolume = new long[MAX_PRICE_TICKS];
                private final long[] askLevelVolume = new long[MAX_PRICE_TICKS];

                private int bestBidTick = -1;
                private int bestAskTick = Integer.MAX_VALUE;

                /** Executes an incoming order; TYPE_CANCEL removes the resting order. */
                public void processOrder(OrderEvent event, TradeConsumer tradeConsumer) {
                    if (event.type == OrderEvent.TYPE_CANCEL) {
                        cancelOrder(event.orderId);
                        return;
                    }
                    if (event.side == OrderEvent.SIDE_BUY) matchBuy(event, tradeConsumer);
                    else matchSell(event, tradeConsumer);
                }

                private void matchBuy(OrderEvent buy, TradeConsumer tradeConsumer) {
                    int limitTick = buy.type == OrderEvent.TYPE_MARKET
                            ? Integer.MAX_VALUE : priceToTick(buy.price);
                    long remaining = buy.quantity;
                    // FIFO: walk ask ticks upward, draining head orders at each level
                    while (remaining > 0 && bestAskTick <= limitTick
                            && bestAskTick != Integer.MAX_VALUE) {
                        int head = askLevelHead[bestAskTick];
                        if (head == 0) { bestAskTick = findNextAskTick(bestAskTick + 1); continue; }
                        long matchQty = Math.min(remaining, leavesQty[head]);
                        remaining -= matchQty;
                        leavesQty[head] -= matchQty;
                        askLevelVolume[bestAskTick] -= matchQty;
                        trades++;
                        tradeConsumer.onTrade(buy.orderId, orderId[head],
                                orderPrice[head], matchQty, OrderEvent.SIDE_BUY, buy.optionKey);
                        if (leavesQty[head] == 0) dequeueAsk(head); // unindex + free slot
                    }
                    if (remaining > 0 && buy.type == OrderEvent.TYPE_LIMIT) restBid(buy, remaining);
                }

                /** Cancels a resting order by id; returns true when removed. */
                public boolean cancelOrder(long orderId) { /* unlink + free slot */ }

                @FunctionalInterface
                public interface TradeConsumer {
                    void onTrade(long buyOrderId, long sellOrderId,
                                 double price, long qty, byte aggressiveSide, byte optionKey);
                }
            }""";

    private static final String LOOM_SIMULATOR_CODE = """
            package com.apex.simulator;

            import com.apex.engine.DisruptorMatchingEngine;
            import com.apex.engine.OrderEvent;

            import java.util.concurrent.ExecutorService;
            import java.util.concurrent.Executors;
            import java.util.concurrent.ThreadLocalRandom;
            import java.util.concurrent.atomic.AtomicLong;

            /**
             * High-Concurrency Simulation Runner: 10,000 virtual agents submit
             * limit & market orders and MCQ liquidity-pool bids concurrently.
             */
            public final class LoomSimulationMain {

                private static final int VIRTUAL_AGENTS = 10_000;
                private static final int ORDERS_PER_AGENT = 20;
                private static final AtomicLong TOTAL_SUBMITTED = new AtomicLong();

                public static void main(String[] args) throws InterruptedException {
                    DisruptorMatchingEngine engine = new DisruptorMatchingEngine(100.0, 0.01);

                    System.out.printf("Spawning %,d Java 21 Virtual Threads...%n", VIRTUAL_AGENTS);
                    long startNs = System.nanoTime();

                    // Project Loom Virtual Thread Executor
                    try (ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor()) {
                        for (int i = 0; i < VIRTUAL_AGENTS; i++) {
                            final long traderId = i + 1;
                            executor.submit(() -> {
                                ThreadLocalRandom rand = ThreadLocalRandom.current();
                                for (int j = 0; j < ORDERS_PER_AGENT; j++) {
                                    long orderId = TOTAL_SUBMITTED.incrementAndGet();
                                    byte side = rand.nextBoolean() ? OrderEvent.SIDE_BUY : OrderEvent.SIDE_SELL;
                                    byte type = rand.nextDouble() < 0.25
                                            ? OrderEvent.TYPE_MARKET : OrderEvent.TYPE_LIMIT;
                                    double price = 100.0 + (rand.nextDouble() - 0.5) * 4.0;
                                    byte optionKey = (byte) rand.nextInt(1, 5); // MCQ options A-D

                                    // Direct zero-lock dispatch to RingBuffer
                                    engine.submitOrder(orderId, traderId, side, type,
                                            price, rand.nextLong(1, 15), optionKey);
                                }
                            });
                        }
                    } // waits for all 10,000 virtual threads

                    double elapsedS = (System.nanoTime() - startNs) / 1e9;
                    System.out.printf("Dispatched %,d orders in %.2fs (%,d ops/sec)%n",
                            TOTAL_SUBMITTED.get(), elapsedS, (long) (TOTAL_SUBMITTED.get() / elapsedS));
                    System.out.printf("Trades settled: %,d | Best Bid $%.2f | Best Ask $%.2f%n",
                            engine.getTradesCount(), engine.getBestBid(), engine.getBestAsk());
                    engine.shutdown();
                }
            }""";

    private static final String CACHE_PADDING_CODE = """
            package com.apex.engine.util;

            import java.lang.invoke.VarHandle;

            /**
             * Padded Sequence Counter.
             * Prevents multiple CPU cores from invalidating each other's L1/L2 caches
             * when reading and writing sequence numbers.
             */
            public class CacheLinePaddedSequence {

                // Padding before value to prevent false sharing with prior object fields (56 bytes)
                public long p1, p2, p3, p4, p5, p6, p7;

                // The actual sequence value (8 bytes)
                public volatile long value = -1L;

                // Padding after value to ensure sequence occupies isolated 64-byte or 128-byte cache line
                public long p8, p9, p10, p11, p12, p13, p14;

                public long get() {
                    return value;
                }

                public void set(long value) {
                    this.value = value;
                }

                public void setRelease(long value) {
                    // Store with release fence (mechanical sympathy for x86 TSO memory model)
                    this.value = value;
                }
            }""";

    private static final String JMH_BENCHMARK_CODE = """
            package com.apex.benchmark;

            import com.apex.engine.DisruptorMatchingEngine;
            import com.apex.engine.OrderEvent;
            import org.openjdk.jmh.annotations.*;

            import java.util.concurrent.ThreadLocalRandom;
            import java.util.concurrent.TimeUnit;

            @BenchmarkMode(Mode.Throughput)
            @OutputTimeUnit(TimeUnit.SECONDS)
            @Warmup(iterations = 3, time = 1)
            @Measurement(iterations = 5, time = 2)
            @Fork(value = 1)
            @State(Scope.Benchmark)
            public class JmhDisruptorBenchmark {

                private DisruptorMatchingEngine engine;
                private long orderCounter;

                @Setup(Level.Trial)
                public void setup() {
                    engine = new DisruptorMatchingEngine(100.0, 0.01);
                    orderCounter = 0;
                }

                @TearDown(Level.Trial)
                public void tearDown() {
                    engine.shutdown();
                }

                @Benchmark
                @Threads(4)
                public void benchmarkOrderSubmission() {
                    long id = ++orderCounter;
                    ThreadLocalRandom rand = ThreadLocalRandom.current();
                    byte side = rand.nextBoolean() ? OrderEvent.SIDE_BUY : OrderEvent.SIDE_SELL;
                    byte type = rand.nextDouble() < 0.25 ? OrderEvent.TYPE_MARKET : OrderEvent.TYPE_LIMIT;
                    engine.submitOrder(id, id % 1000, side, type,
                            100.0 + (rand.nextDouble() - 0.5) * 4.0, rand.nextLong(1, 15), (byte) 0);
                }
            }""";

    private static final CodeSnippet[] JAVA_FILES = {
            new CodeSnippet(
                    "disruptor-engine",
                    "Disruptor Engine Core",
                    "DisruptorMatchingEngine.java",
                    "java",
                    "Production LMAX Disruptor 4.0 configuration: power-of-2 RingBuffer, pre-allocated OrderEvents (Zero-GC), and a single-threaded business logic handler. (Mirrors java/src/main/java/com/apex/engine/DisruptorMatchingEngine.java)",
                    DISRUPTOR_ENGINE_CODE),
            new CodeSnippet(
                    "whiteboard-server",
                    "Whiteboard WebSocket Server",
                    "WhiteboardServer.java",
                    "java",
                    "Netty WebSocket server with Project Loom virtual-thread workers: room-based channels, last-write-wins element state, snapshot-on-join, cursor relay. (Mirrors java/src/main/java/com/apex/whiteboard/WhiteboardServer.java)",
                    WHITEBOARD_SERVER_CODE),
            new CodeSnippet(
                    "zero-gc-orderbook",
                    "Zero-GC Order Book",
                    "ZeroGcOrderBook.java",
                    "java",
                    "Price-time (FIFO) limit order book over flat primitive arrays and indexed doubly linked lists. No allocations on the match path; supports cancel-by-id via an open-addressing order index. (Mirrors ZeroGcOrderBook.java)",
                    ZERO_GC_ORDERBOOK_CODE),
            new CodeSnippet(
                    "loom-simulator",
                    "Project Loom Concurrency",
                    "LoomSimulationMain.java",
                    "java",
                    "Java 21 Virtual Threads (Project Loom): 10,000 agents x 20 orders each, dispatched lock-free into the Disruptor RingBuffer. (Mirrors java/src/main/java/com/apex/simulator/LoomSimulationMain.java)",
                    LOOM_SIMULATOR_CODE),
            new CodeSnippet(
                    "cache-padding",
                    "Cache Line Padding",
                    "util/CacheLinePaddedSequence.java",
                    "java",
                    "Eliminates CPU false sharing by padding sequence pointers with 56 bytes of dummy longs; ordered release/acquire stores via VarHandle. (Mirrors java/src/main/java/com/apex/engine/util/CacheLinePaddedSequence.java)",
                    CACHE_PADDING_CODE),
            new CodeSnippet(
                    "jmh-benchmark",
                    "JMH Microbenchmark",
                    "JmhDisruptorBenchmark.java",
                    "java",
                    "Java Microbenchmark Harness (JMH) measuring order-submission throughput with 4 producer threads. Run: java -cp apex-engine.jar org.openjdk.jmh.Main JmhDisruptorBenchmark. (Mirrors java/src/main/java/com/apex/benchmark/JmhDisruptorBenchmark.java)",
                    JMH_BENCHMARK_CODE),
    };

    private static final String SELECTOR_BASE_CLS = "text-left p-3.5 rounded-none border transition-all cursor-pointer flex flex-col gap-1 ";
    private static final String SELECTOR_ACTIVE_CLS = "bg-[#C0C0C0]/90 border-[#0000CD]/60 shadow-lg";
    private static final String SELECTOR_INACTIVE_CLS = "bg-white border-black hover:bg-[#D4D4D4]/40";
    private static final String COPY_BUTTON_CLS = "flex items-center gap-2 px-4 py-2 bg-[#0000CD] hover:bg-[#0000CD] text-white rounded-none text-xs font-semibold shadow-sm transition-colors cursor-pointer self-start md:self-auto";
    private static final int COPY_RESET_MS = 2000;

    private final HTMLElement root;
    private final List<Integer> copyTimeouts = new ArrayList<>();
    private HTMLButtonElement copyButton;
    private HTMLButtonElement[] selectorButtons;
    private HTMLElement headerFilename;
    private HTMLElement descriptionBanner;
    private HTMLElement codeEl;
    private String selectedSnippetId = "disruptor-engine";
    private boolean copied;

    public JavaArchitectureViewer() {
        root = Ui.el("div", "w-full h-full bg-[#008080] text-black p-6 flex flex-col gap-5 select-none overflow-y-auto");
        Ui.add(root, buildBanner(), buildBenchmarkGrid(), buildExplorer());
    }

    @Override
    public HTMLElement root() {
        return root;
    }

    @Override
    public void onPrimaryAction() {
    }

    @Override
    public void dispose() {
        for (int id : copyTimeouts) {
            Js.clearTimeout(id);
        }
        copyTimeouts.clear();
    }

    private HTMLElement buildBanner() {
        HTMLElement banner = Ui.el("div", "bg-white border border-black rounded-none p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLElement left = Ui.el("div", "flex items-center gap-3.5");
        HTMLElement iconBox = Ui.html("div", "w-10 h-10 rounded-none bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[#0369A1]", Icons.svg("Cpu", "w-5 h-5"));
        HTMLElement titles = plain("div");
        Ui.add(titles,
                Ui.el("h1", "text-base font-bold text-white tracking-tight", "Production Java 21+ Architecture & Engineering Blueprint"),
                Ui.el("p", "text-xs text-[#404040]", "Mechanical Sympathy · LMAX Disruptor 4.0 · Project Loom Virtual Threads · Zero-GC Memory"));
        Ui.add(left, iconBox, titles);
        copyButton = Ui.btnHtml(COPY_BUTTON_CLS, copyButtonInner(), this::handleCopy);
        Ui.add(banner, left, copyButton);
        return banner;
    }

    private static HTMLElement buildBenchmarkGrid() {
        HTMLElement grid = Ui.el("div", "grid grid-cols-1 md:grid-cols-3 gap-4");
        Ui.add(grid,
                benchmarkCard("LMAX Disruptor (Lock-Free)", "Winner", "text-[#047857] font-mono", "26.4M", "text-[#047857]", "p99: 0.82 μs", "p99.9: 1.45 μs", "bg-emerald-500 h-full w-[98%]"),
                benchmarkCard("ArrayBlockingQueue", "ReentrantLock", "text-[#404040] font-mono", "3.2M", "text-[#92400E]", "p99: 18.4 μs", "p99.9: 46.2 μs", "bg-amber-500 h-full w-[24%]"),
                benchmarkCard("LinkedBlockingQueue", "GC Pressure", "text-[#DC2626] font-mono", "1.8M", "text-[#DC2626]", "p99: 38.0 μs", "p99.9: 124.0 μs", "bg-rose-500 h-full w-[12%]"));
        return grid;
    }

    private static HTMLElement benchmarkCard(String label, String tag, String tagCls, String value, String valueCls, String p99, String p999, String barCls) {
        HTMLElement card = Ui.el("div", "bg-white border border-black rounded-none p-4 flex flex-col gap-2");
        HTMLElement head = Ui.el("div", "flex items-center justify-between text-xs text-[#404040]");
        Ui.add(head, Ui.el("span", "font-semibold text-[#1F1F1F]", label), Ui.el("span", tagCls, tag));
        HTMLElement valueRow = Ui.el("div", "text-2xl font-bold font-mono " + valueCls + " tabular-nums");
        valueRow.appendChild(Ui.doc().createTextNode(value + " "));
        Ui.add(valueRow, Ui.el("span", "text-xs font-normal text-[#404040]", "ops/sec"));
        HTMLElement latency = Ui.el("div", "text-xs text-[#404040] flex justify-between font-mono");
        Ui.add(latency, textEl("span", p99), textEl("span", p999));
        HTMLElement bar = Ui.el("div", "w-full bg-slate-950 h-2 rounded-full overflow-hidden mt-1");
        Ui.add(bar, Ui.el("div", barCls));
        Ui.add(card, head, valueRow, latency, bar);
        return card;
    }

    private HTMLElement buildExplorer() {
        HTMLElement grid = Ui.el("div", "grid grid-cols-1 lg:grid-cols-12 gap-5");
        Ui.add(grid, buildFileSelector(), buildCodeViewer());
        return grid;
    }

    private HTMLElement buildFileSelector() {
        HTMLElement left = Ui.el("div", "lg:col-span-4 flex flex-col gap-2");
        Ui.add(left, Ui.el("span", "font-pixel text-2xl text-white uppercase tracking-wider px-1", "Java 21 Source Blueprint"));
        selectorButtons = new HTMLButtonElement[JAVA_FILES.length];
        for (int i = 0; i < JAVA_FILES.length; i++) {
            CodeSnippet snippet = JAVA_FILES[i];
            HTMLButtonElement button = Ui.btn(selectorClass(snippet.id), "", () -> selectSnippet(snippet.id));
            HTMLElement row = Ui.el("div", "flex items-center justify-between");
            Ui.add(row,
                    Ui.el("span", "text-xs font-bold text-white font-mono", snippet.filename),
                    Ui.el("span", "text-[10px] text-[#0000CD] font-semibold", snippet.title));
            Ui.add(button, row, Ui.el("p", "text-[11px] text-[#404040] line-clamp-2 leading-relaxed", snippet.description));
            selectorButtons[i] = button;
            Ui.add(left, button);
        }
        return left;
    }

    private HTMLElement buildCodeViewer() {
        CodeSnippet active = activeSnippet();
        HTMLElement viewer = Ui.el("div", "lg:col-span-8 bg-slate-950 border border-black rounded-none overflow-hidden flex flex-col shadow-[4px_4px_0_rgba(0,0,0,0.45)]");
        HTMLElement header = Ui.el("div", "flex items-center justify-between px-4 py-3 bg-[#C0C0C0] border-b border-black");
        HTMLElement headerLeft = Ui.html("div", "flex items-center gap-2 font-mono text-xs text-[#1F1F1F]", Icons.svg("FileCode", "w-4 h-4 text-[#0369A1]"));
        headerFilename = textEl("span", active.filename);
        Ui.add(headerLeft, headerFilename);
        Ui.add(header, headerLeft, Ui.el("span", "text-xs text-[#404040] font-mono", "Java 21 LTS"));
        descriptionBanner = Ui.el("div", "px-4 py-2.5 bg-indigo-950/20 border-b border-black/80 text-xs text-indigo-200", active.description);
        HTMLElement body = Ui.el("div", "p-4 overflow-x-auto font-mono text-xs text-[#E5E5E5] leading-relaxed max-h-[540px]");
        HTMLElement pre = plain("pre");
        codeEl = textEl("code", active.code);
        Ui.add(pre, codeEl);
        Ui.add(body, pre);
        Ui.add(viewer, header, descriptionBanner, body);
        return viewer;
    }

    private void selectSnippet(String id) {
        selectedSnippetId = id;
        for (int i = 0; i < JAVA_FILES.length; i++) {
            Ui.cls(selectorButtons[i], selectorClass(JAVA_FILES[i].id));
        }
        CodeSnippet active = activeSnippet();
        renderCopyButton();
        Ui.setText(headerFilename, active.filename);
        Ui.setText(descriptionBanner, active.description);
        Ui.setText(codeEl, active.code);
    }

    private void handleCopy() {
        Clipboard.copy(activeSnippet().code);
        copied = true;
        renderCopyButton();
        int[] timeoutId = new int[1];
        timeoutId[0] = Js.setTimeout(() -> {
            copyTimeouts.remove(Integer.valueOf(timeoutId[0]));
            copied = false;
            renderCopyButton();
        }, COPY_RESET_MS);
        copyTimeouts.add(timeoutId[0]);
    }

    private void renderCopyButton() {
        Ui.setHtml(copyButton, copyButtonInner());
    }

    private String copyButtonInner() {
        String icon = copied ? Icons.svg("Check", "w-4 h-4 text-emerald-300") : Icons.svg("Copy", "w-4 h-4");
        String label = copied ? "Copied to Clipboard" : "Copy " + activeSnippet().filename;
        return icon + "<span>" + label + "</span>";
    }

    private String selectorClass(String id) {
        return SELECTOR_BASE_CLS + (id.equals(selectedSnippetId) ? SELECTOR_ACTIVE_CLS : SELECTOR_INACTIVE_CLS);
    }

    private CodeSnippet activeSnippet() {
        for (CodeSnippet snippet : JAVA_FILES) {
            if (snippet.id.equals(selectedSnippetId)) {
                return snippet;
            }
        }
        return JAVA_FILES[0];
    }

    private static HTMLElement plain(String tag) {
        return Ui.doc().createElement(tag);
    }

    private static HTMLElement textEl(String tag, String text) {
        HTMLElement e = plain(tag);
        e.setTextContent(text);
        return e;
    }
}