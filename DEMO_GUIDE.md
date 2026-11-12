# PARALLELY — 5-minute demo script

A scripted walkthrough for a reviewer, in front of one browser window. Keep the
launcher terminal visible so the two ports are on show.

**Before you start.** In Git Bash run `./start-demo.sh`, or on Windows
double-click `start-demo.cmd`. The launcher starts the Java WebSocket server on
8090 and `jwebserver` on 3000, waits for HTTP, and prints a banner. Open
**http://localhost:3000**. Press Ctrl-C in the launcher to stop both servers.

## Script

### 1. The desktop loads (0:00)

**Click:** nothing — just load the URL.

**Say:** "This is the original React app's Windows-95 desktop, preserved
byte-for-byte as `web/index.html` and `web/app.css`. Everything behind it —
the window manager, the canvas, the network client — is Java compiled to
JavaScript by TeaVM. No Node, no TypeScript, no React at runtime."

### 2. Whiteboard Studio — tools and drawing (0:30)

**Click:** stay on the default **Whiteboard Studio** tab in the top nav. Pick a
tool from the left toolbar (Pencil / Freehand Vector Pen), choose a colour
swatch, and drag on the canvas to draw a few strokes. Use Undo / Redo and the
trash icon (**Clear Canvas**) to show the canvas model updating.

**Say:** "The tools, element model and renderer are Java classes. `CanvasModel`
is one of the ported test suites — 2 JUnit tests cover it."

### 3. Spawn Bot Swarm (1:00)

**Click:** the header's primary action **Spawn Bot Swarm** (top right). Then use
**+5 Bots** and the **Pause Bot Swarm / Resume Bot Swarm** control in the bot
toolbar.

**Say:** "Each bot is simulated in the Java client — drawn with the same canvas
model a human uses. This is the busiest screen, and it is still just compiled
Java."

### 4. Go Live — prove the Java server relays it (1:30)

**Click:** in the studio toolbar find the live controls (name, room, and the
**Go Live** button). Click **Go Live**; it connects to
`ws://localhost:8090/ws/whiteboard`. Open a **second browser tab** at the same
URL and click **Go Live** there too, keeping the same room name. Draw a stroke
in tab A and watch it appear in tab B; move the mouse and watch the remote
cursor.

**Say:** "Both tabs are plain TeaVM clients. The stroke and cursor go over the
WebSocket to the Java 21 + Netty server on 8090, which broadcasts them to the
room. That is real server-side relay, not a local echo — the headless functional
suite logged `11 upserts` and `6 cursor msgs` on the socket and sampled ink on
tab B's canvas. The live session, the drawing and the bot swarm now survive tab
switches and minimize/restore, so you can leave this tab, show another view and
come back without reconnecting."

### 5. MCQ — Start Poll and vote (2:30)

**Click:** top-nav tab **Virtual MCQ Consensus** (short label **MCQ Pool** on
narrow windows). Click **Start Poll (30s)** in Poll Control — or the header's
**Poll Control** primary action. Four option rows A–D appear. Click one, e.g.
**Option A**.

**Say:** "The vote is a WebSocket message, and the tally comes back from the
server. The status line shows 'Your answer: Option A' and 'Students answered'
increments; with the poll open in the second tab its tally updates too. The
functional suite logged `vote:A` on the socket and confirmed the other tab sees
the vote."

### 6. Matching Engine — 10k burst and ring buffer (3:15)

**Click:** **Start** on the taskbar → **LMAX Disruptor Engine**. This is the
fourth view, reached from the Start menu; the top nav holds the other three.
The header primary action now reads **Inject 10k Load Burst** — click it (or
**+500 Burst** inside the studio). Watch the order book, the live trade tape and
the ring-buffer slots fill as orders are published and matched.

**Say:** "This is the LMAX Disruptor model ported 1:1 from the TypeScript
original into Java. The ring buffer and matching engine are the same classes
covered by `RingBufferTest` (6 tests) and `MatchingEngineTest` (4 tests)."

### 7. Java 21 tab — blueprints (4:00)

**Click:** top-nav tab **Java 21 Architecture** (short label **Java 21**). You
see "Production Java 21+ Architecture & Engineering Blueprint" and a **Java 21
Source Blueprint** selector listing real source files such as
`DisruptorMatchingEngine.java`, `WhiteboardServer.java`,
`LoomSimulationMain.java` and `JmhDisruptorBenchmark.java`. Click one to view its
blueprint, then **Copy &lt;filename&gt;** (or the header's **Copy Java
Quickstart**).

**Say:** "These blueprints describe the actual Java backend in this repo —
virtual threads, the Disruptor, the JMH benchmark — not a mock-up."

### 8. Start menu, dialogs and minimize (4:30)

**Click:** **Start** → **About Collaborative Whiteboard...**, then **OK**. Use
the title-bar `?` for the same dialog, `_` to minimize (desktop icons and
"Collaborative Whiteboard is minimized" appear), `□` for the windowed view, and
`×` for the "Close Collaborative Whiteboard? Your board is saved on the
server." confirmation — choose **No**. Click the taskbar window button to
minimize and restore. The **Recycle Bin** desktop icon opens another dialog.

**Say:** "Even the Win95 chrome — taskbar, Start menu, dialogs, minimize — is
built in Java through TeaVM's DOM bindings. It is the one place the frozen
HTML/CSS shell is allowed to show through."

## How to prove it's all Java

Run this from the repo root:

```bash
bash tools/census.sh
```

It reports **java: 7836**, **html: 24**, **css: 2** — **TOTAL: 7862 lines,
Java share: 99%**. Points to make while it runs:

- `client/src/main/java/` is the entire browser app in pure Java: shell,
  whiteboard studio, MCQ consensus, matching engine and Java 21 viewer. The
  DOM, canvas and WebSocket calls go through TeaVM JSO wrappers.
- `web/app.js` is **GENERATED** build output, not source. `./mvnw -q package`
  runs TeaVM 0.12.0, which compiled **282 classes / 2346 methods** into that
  single file. It is committed so the page loads with no build step.
- The only non-Java sources are `web/index.html` (24 lines) and `web/app.css`
  (2 lines): the frozen Win95 shell.
- `server/src/main/java/` is the Java 21 + Netty backend, unchanged from the
  original project.

> **Troubleshooting**
>
> - **Port 8090 already in use** — the second server will fail to bind and the
>   launcher reports a server exited during startup. Find the owner with
>   `netstat -ano | findstr :8090` (cmd), stop it with `taskkill /PID <pid> /F`,
>   or close the other demo, then rerun `./start-demo.sh`.
> - **`jwebserver` not found** — it ships with the JDK, not Node. Check
>   `java -version` reports 21 and `where jwebserver` resolves. On this machine
>   it lives in `C:\Program Files\Microsoft\jdk-21.0.13.21-hotspot\bin`.
> - **`jwebserver` says "Path is not absolute"** — this JDK requires an
>   absolute `-d` path. `start-demo.sh` supplies one automatically; for a
>   manual run use `-d "$(pwd -W)/web"` with `MSYS2_ARG_CONV_EXCL="*"`, or
>   `cd web` and run `jwebserver -p 3000 -b 0.0.0.0` with no `-d`.
> - **Blank page / nothing renders** — run `./mvnw -q package` to regenerate
>   `web/app.js`, then hard-refresh with Ctrl+F5. Confirm `web/app.js` is
>   present (it is committed).
> - **Proxy or connection problems** — a loopback HTTP proxy is exported in this
>   shell, so local checks use `curl --noproxy '*'`. `start-demo.sh` unsets
>   `HTTP_PROXY`, `HTTPS_PROXY`, `http_proxy`, `https_proxy` and sets
>   `NO_PROXY=127.0.0.1,localhost` before starting both servers. Open
>   `http://localhost:3000` directly and make sure the browser is not routing
>   localhost through a proxy; the client connects to
>   `ws://localhost:8090/ws/whiteboard`.

## Links

- Repository: https://github.com/BeastAyyG/parallely-all-java.git (branch `main`)
- Build/test/parity evidence: `VERIFICATION.md`
- Two-terminal run and protocol table: `README.md`
