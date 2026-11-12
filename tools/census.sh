#!/usr/bin/env bash
# LOC census for the all-Java claim. Counts source lines only (no build output,
# no wrapper scripts, no lockfiles). Run from the repo root.
cd "$(dirname "$0")/.." || exit 1
echo "=== Java (server + client, main + test) ==="
JAVA_LINES=$(find server/src client/src -name '*.java' -exec cat {} + | wc -l)
echo "java: $JAVA_LINES"
echo "=== Non-Java source (frozen shell) ==="
HTML_LINES=$(find web -name '*.html' -exec cat {} + | wc -l)
CSS_LINES=$(find web -name '*.css' -exec cat {} + | wc -l)
echo "html: $HTML_LINES"
echo "css:  $CSS_LINES"
TOTAL=$((JAVA_LINES + HTML_LINES + CSS_LINES))
PCT=$((JAVA_LINES * 100 / TOTAL))
echo "=== TOTAL: $TOTAL lines, Java share: ${PCT}% ==="