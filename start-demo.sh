#!/usr/bin/env bash
# PARALLELY (all-Java whiteboard) - one-command demo launcher for Git Bash.
# Usage: ./start-demo.sh
# Starts the Java/Netty WebSocket server (:8090) and the JDK static server
# (:3000), then waits. Ctrl-C (or closing the terminal) stops both cleanly.

set -u

# Resolve this script's own directory so it works from any working directory.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)" || exit 1
cd "$SCRIPT_DIR" || exit 1

JAR="server/target/apex-engine.jar"
WS_PORT=8090
HTTP_PORT=3000

# This JDK's jwebserver rejects a relative -d ("Path is not absolute"). Use the
# Windows-style absolute path from `pwd -W`; MSYS2_ARG_CONV_EXCL keeps it intact.
WEB_DIR="$(pwd -W 2>/dev/null || pwd)/web"

# A loopback HTTP proxy is exported in this shell. Clear the four proxy
# variables and pin NO_PROXY so local HTTP/WS traffic stays on loopback.
# Both servers (and curl below) inherit this proxy-free environment.
unset HTTP_PROXY HTTPS_PROXY http_proxy https_proxy
export NO_PROXY=127.0.0.1,localhost
export no_proxy=127.0.0.1,localhost

# The browser client (web/app.js) is committed, but the fat server jar is
# build output. Build it only when it is missing.
if [ ! -f "$JAR" ]; then
  echo "[start-demo] $JAR not found - building with ./mvnw -q package ..."
  ./mvnw -q package || { echo "[start-demo] build failed."; exit 1; }
fi

SERVER_PID=""
WEB_PID=""

cleanup() {
  trap - INT TERM EXIT
  echo
  echo "[start-demo] stopping both servers ..."
  if [ -n "$SERVER_PID" ]; then kill "$SERVER_PID" 2>/dev/null || true; fi
  if [ -n "$WEB_PID" ]; then kill "$WEB_PID" 2>/dev/null || true; fi
  if [ -n "$SERVER_PID" ]; then wait "$SERVER_PID" 2>/dev/null || true; fi
  if [ -n "$WEB_PID" ]; then wait "$WEB_PID" 2>/dev/null || true; fi
  echo "[start-demo] stopped."
}
trap cleanup INT TERM EXIT

# Git Bash mangles Windows classpaths unless argument conversion is disabled.
MSYS2_ARG_CONV_EXCL="*" java -cp "$JAR" com.apex.whiteboard.WhiteboardServer "$WS_PORT" &
SERVER_PID=$!

MSYS2_ARG_CONV_EXCL="*" jwebserver -p "$HTTP_PORT" -d "$WEB_DIR" -b 0.0.0.0 &
WEB_PID=$!

echo "[start-demo] waiting for http://localhost:$HTTP_PORT ..."
READY=0
for _ in $(seq 1 60); do
  if curl --noproxy '*' -fs --max-time 2 -o /dev/null "http://localhost:$HTTP_PORT/"; then
    READY=1
    break
  fi
  if ! kill -0 "$SERVER_PID" 2>/dev/null || ! kill -0 "$WEB_PID" 2>/dev/null; then
    echo "[start-demo] a server exited during startup (see output above)."
    exit 1
  fi
  sleep 0.25
done

if [ "$READY" -ne 1 ]; then
  echo "[start-demo] HTTP did not become ready in time."
  exit 1
fi

echo
echo "======================================================================"
echo "  PARALLELY - all-Java collaborative whiteboard is UP"
echo
echo "    Open in your browser:   http://localhost:3000"
echo "    Java WebSocket server:  ws://localhost:8090/ws/whiteboard"
echo
echo "    Press Ctrl-C to stop both servers."
echo
echo "  Two-terminal alternative (from the repo root):"
echo "    MSYS2_ARG_CONV_EXCL=\"*\" java -cp server/target/apex-engine.jar com.apex.whiteboard.WhiteboardServer 8090"
echo "    MSYS2_ARG_CONV_EXCL=\"*\" jwebserver -p 3000 -d \"$WEB_DIR\" -b 0.0.0.0"
echo "======================================================================"
echo

# Keep the launcher alive so the EXIT trap owns the children's lifetime.
wait "$SERVER_PID" "$WEB_PID"
