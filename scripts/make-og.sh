#!/bin/bash
# SNSシェア用OG画像 public/og.jpg (1200x630) を scripts/og-card.html から生成する。
# npm run dev を起動した状態で実行すること（画像とフォントの読み込みに使う）。
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --hide-scrollbars --virtual-time-budget=9000 \
  --window-size=1200,630 --screenshot="$ROOT/public/og.png" "file://$ROOT/scripts/og-card.html" 2>/dev/null
python3 - "$ROOT" <<'PY'
import sys, os
from PIL import Image
root=sys.argv[1]
p=os.path.join(root,"public","og.png")
im=Image.open(p).convert("RGB")
im.save(os.path.join(root,"public","og.jpg"),"JPEG",quality=88,optimize=True,progressive=True)
os.remove(p)
print("og.jpg", im.size, f"{os.path.getsize(os.path.join(root,'public','og.jpg'))/1024:.0f}KB")
PY
