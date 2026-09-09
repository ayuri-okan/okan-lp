#!/bin/bash
# ローカルの表示確認用スクリーンショット。
#   npm run dev を起動した状態で  ./scripts/shot.sh  を実行
# 出力: shots/desktop.png / shots/mobile.png
# ※ Chromeのヘッドレスは最小ビューポート幅が500pxなので、
#   390px相当の確認はできない（560pxブレークポイントの確認はできる）。
set -e
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL="${1:-http://127.0.0.1:5173/}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/shots"
mkdir -p "$OUT"
"$CHROME" --headless --disable-gpu --hide-scrollbars --virtual-time-budget=9000 \
  --window-size=1280,10000 --screenshot="$OUT/desktop.png" "$URL" 2>/dev/null
"$CHROME" --headless --disable-gpu --hide-scrollbars --virtual-time-budget=9000 \
  --window-size=500,17000 --screenshot="$OUT/mobile.png" "$URL" 2>/dev/null
echo "→ $OUT/desktop.png / $OUT/mobile.png"
