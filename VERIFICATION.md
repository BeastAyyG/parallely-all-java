# PARALLELY — Verification evidence

**Date:** 2026-11-12 (final re-verification 2026-11-13 00:05 IST)
**Remote:** https://github.com/BeastAyyG/parallely-all-java.git (branch `main`)
**Pushed state:** `origin/main`, verified at `d4d2f8c` (docs-only commits may follow); earlier code-complete baseline was `5d05ab2`.

One-page evidence sheet for the all-Java rewrite. Every figure below was produced
by a command run on this machine; logs are in `../demo-check/` and `../tools/`.

## Summary

| Area | Result | Evidence |
|---|---|---|
| Clean build | `mvn clean package` (Maven 3.9.9, JDK 21.0.13) → **BUILD SUCCESS**, 3/3 modules, **48.406 s**, 0 errors | `../demo-check/build-full.log`, `../demo-check/build-report.md` |
| Unit tests — client | **12 tests / 3 classes green**: MatchingEngineTest 4, RingBufferTest 6, CanvasModelTest 2 | `../demo-check/build-full.log` |
| Unit tests — server | **12 tests / 3 classes green**: DisruptorMatchingEngineTest 3, WriteAheadLogTest 2, ZeroGcOrderBookTest 7 | `../demo-check/build-full.log` |
| TeaVM client compile | **282 classes / 2346 methods**, TeaVM 0.12.0 → `web/app.js` | `../demo-check/build-full.log` |
| Reproducibility | `web/app.js` sha256 identical before/after a clean build; `git diff --exit-code -- web/app.js` = 0 | `../demo-check/build-report.md` |
| Wrapper build | `./mvnw -q package` → PASS (exit 0) | `../demo-check/build-report.md` |
| Functional suite | **10/10 PASS** (two tabs + raw WS probe) | `../demo-check/functional-final.log` |
| Extended functional suite | **31/31 PASS** (tools, undo/redo, clear, exports, bots, dialogs, minimize/restore, engine, Java 21, zero JS errors) | `../demo-check/extended-final.log` |
| Stability soak | **11/11 PASS** (bot activity, Go Live, 9 tab switches, 65 s idle, WS cursor relay, clock, single canvas, zero JS errors) | `../demo-check/soak-final.log` |
| Parity captures | **6/6 screenshots**, `JS_ERRORS: none`; static Win95 chrome delta **0.02/255** on every frame | `../demo-check/captures-final2/`, `../demo-check/capture-final.log` |
| LOC census | **7845 Java / 24 HTML / 2 CSS = 7871 lines, Java share 99%** | `tools/census.sh` |
| Pristine check | Original clone `whiteboard-app/` has a clean `git status`; original repo and deployments were never touched | — |

## Functional suite — 10/10

```text
PASS | probe join snapshot | 1 msgs, types: snapshot
PASS | tab A Go Live | clicked
PASS | tab B Go Live | clicked
PASS | draw relayed via Java server | 11 upserts
PASS | cursor relayed | 6 cursor msgs
PASS | tab B canvas has ink | sampled non-black pixels: 17607
PASS | Start Poll button clicked | Start Poll (30s)
PASS | poll open with 4 option rows A-D | rows=4, badges A-D
PASS | poll vote/tally via Java server | clicked option: A, msgs: 1 [vote:A]
PASS | tab A shows my vote = Option A
SUMMARY: 10/10 passed
```

## Extended suite — 31/31

Start menu + 4 items; About / Close / Recycle Bin dialogs; minimize, restore,
maximize/windowed; 7 tools (Pen, Rectangle, Ellipse, Arrow, Sticky, Text, Eraser);
draw → Undo → Redo → Clear verified through canvas colour-mass deltas; Export PNG
and Export Elements JSON; Spawn Bot Swarm; Matching Engine order book / ring
buffer / trade tape + Inject 10k Load Burst; Java 21 blueprint cards + Copy Java
Quickstart; **zero uncaught JS exceptions and zero console errors**.

## Stability soak — 11/11

```text
PASS | bot swarm keeps drawing locally | canvasHash 234669161 -> 762206809
PASS | Go Live clicked | true
PASS | probe join snapshot | 1 msgs
PASS | no duplicated views after 9 tab switches | {"canvases":1,"live":true,...}
PASS | live session survives tab switches | {"canvases":1,"live":true,...}
PASS | live session alive after 65s idle | {"canvases":1,"live":true,...}
PASS | live WS still relays cursors after 65s idle | cursors=3
PASS | zero JS errors across soak | 0 errors
PASS | taskbar clock still ticking | 12:01 AM -> 12:02 AM
PASS | single canvas still after idle | canvases=1
PASS | collaborator counter still rendered | 2125 Collaborators
SUMMARY: 11/11 passed
```

### Why the earlier soak run reported 4/6

The first soak harness (`../demo-check/soak_test_original.cjs`, results in
`../demo-check/soak.log`) made two assumptions that the product never promised:

1. It expected the **live session to survive a view rebuild**. In the original
   React app `App.tsx` renders `{activeTab === 'whiteboard' && <WhiteboardStudio />}`,
   so switching tabs unmounts the studio and its WebSocket cleanup closes the
   connection. The Java port originally reproduced that behaviour exactly.
2. It expected **bot-originated WebSocket traffic**. In the original
   `WhiteboardStudio.tsx` the bot tick only calls `setElements(...)` locally;
   bots never broadcast. Going live also pauses the swarm.

Both were invalid expectations, not regressions. Two changes were made and
re-verified:

- `client/.../shell/AppShell.java` now keeps a single `WhiteboardStudio` instance
  alive for the whole session, so the canvas, bot swarm and live WebSocket survive
  tab switches and minimize/restore. This is a deliberate demo-robustness
  improvement over the original; no visible pixel changes.
- `../tools/soak_test.cjs` was corrected to assert what the app actually promises
  (local bot animation, live-session persistence, WS cursor relay after idle,
  no JS errors), with the CDP startup race and the unclosed probe socket fixed.

All four suites were then re-run against the rebuilt `web/app.js`: 10/10, 31/31,
11/11, 6/6 captures with zero JS errors.

## Visual parity (final captures)

Mean absolute per-channel delta over full 1920×1080 frames, out of 255, versus
the original React baselines in `../captures/`:

| Frame | Whole frame | Static chrome (top 30 px) |
|---|---:|---:|
| 01-studio | 5.36 | 0.02 |
| 02-studio-bots | 11.79 | 0.02 |
| 03-mcq | 1.03 | 0.02 |
| 04-java21 | 0.97 | 0.02 |
| 05-live | 11.78 | 0.02 |
| 06-startmenu | 0.93 | 0.02 |

The larger whole-frame deltas come from animated bot cursors and live canvas ink,
which cannot be aligned between two separate runs. The frozen Win95 shell is
effectively pixel-identical.

## What was verified vs not

**Verified.** A clean Maven reactor build; all 24 client + server JUnit tests;
TeaVM compilation into a byte-for-byte reproducible committed `web/app.js`;
two-tab WebSocket relay of drawing, cursors and MCQ votes/tally through the Java
21 + Netty server; every primary UI flow; 65-second stability with tab switches;
static window-chrome parity across six screenshot pairs; source-line census; and
that the original clone/repo/deployments stayed untouched.

**Not verified / caveats.** Headless screenshot comparison cannot perfectly align
animated content. No formal multi-human load test, cross-browser test, or new
performance benchmark was run. The matching-engine and Java 21 viewer flows were
exercised for rendering and click-safety, not for long-duration simulation.
