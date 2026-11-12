# PARALLELY — live links and deployment notes

**Last updated:** 2026-11-13 00:50 IST
**Source commit on `main`:** `ba6ba39` (plus the deployment docs commit)

## Live links

| Target | URL | What it is |
|---|---|---|
| Vercel (primary shareable demo) | https://parallely-all-java-demo.vercel.app | Static Win95 shell + generated `app.js`, public |
| GitHub Pages | https://beastayyg.github.io/parallely-all-java/ | Same static snapshot, served from the `gh-pages` branch |
| GitHub repo | https://github.com/BeastAyyG/parallely-all-java | Source on `main` (currently **private**) |
| Local full demo | http://localhost:3000 via `./start-demo.sh` | Everything, including the Java WebSocket server |

Verified on Vercel with headless Chromium: page title correct, 49 buttons,
1 canvas, Start menu, "Whiteboard Studio", 2 stylesheets, `app.js`/`app.css`
both HTTP 200, **zero JS errors**. A `favicon.ico` is included so even the
default favicon request returns 200.

## What works online — and what does not

**Works:** the entire Win95 desktop, all four tabs (Whiteboard Studio, MCQ
Consensus, Matching Engine, Java 21 Architecture), canvas tools, undo/redo,
clear, PNG/JSON export, bot swarm, ring-buffer visualizer, 10k load burst,
blueprint cards, dialogs, minimize/restore, Start menu and taskbar clock.
These are all client-side Java compiled by TeaVM; they need no backend.

**Does NOT work online:** **Go Live** and the live MCQ vote/tally round-trip.
The client hardcodes `ws://<host>:8090/ws/whiteboard`, which needs the Java 21 +
Netty server (`apex-engine.jar`) running as a long-lived JVM process. Vercel and
GitHub Pages only serve static files — they cannot host that JVM — and an
`https://` page cannot open a `ws://...:8090` socket. For those two flows run
`./start-demo.sh` locally and use http://localhost:3000. This is a platform
constraint, not a bug in the app; the local demo is fully functional and has
10/10 + 31/31 + 11/11 automated checks passing.

## Deployment layout

- `main` — Java sources, Maven build, tests, docs, `web/` static shell.
- `gh-pages` — a separate branch containing **only** `index.html`, `app.css`,
  `app.js` and `favicon.ico`, i.e. a snapshot of `web/`. It has no Java sources
  and shares no history with `main`.
- Vercel project `parallely-all-java-demo` (team `beastayygs-projects`) — the
  same snapshot, no build command, no framework, no Node/npm step.

These are **static snapshots**. They do not rebuild themselves. After changing
Java client code, run `./mvnw -q package` (regenerates `web/app.js`) and then:

```bash
# refresh the Vercel deployment
cp web/index.html web/app.css web/app.js web/favicon.ico ../parallely-all-java-demo/
cd ../parallely-all-java-demo && vercel deploy --prod --yes

# refresh GitHub Pages (from a checkout of the gh-pages branch)
cp ../parallely-java/web/{index.html,app.css,app.js,favicon.ico} .
git add -A && git commit -m "deploy: refresh static shell" && git push origin gh-pages
```

## Never-touch guarantee

Only the **new** repo `BeastAyyG/parallely-all-java`, its `gh-pages` branch and
the **new** Vercel project `parallely-all-java-demo` were created or modified.

The original repo
`BeastAyyG/white-board-pw-one-collabrative-with-java-integration-`, its
`theme/retro-win95` branch, its GitHub Pages site
(https://beastayyg.github.io/white-board-pw-one-collabrative-with-java-integration-/,
status `built`) and any pre-existing Vercel deployment were **not** changed.
The local clone `whiteboard-app/` remains clean. They are still the live backup.
