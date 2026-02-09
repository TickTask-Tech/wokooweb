#!/usr/bin/env python3
"""把 logo 的绿色改成和网页按钮一致 #10B981"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "public" / "logo.png"
PRIMARY_GREEN = (16, 185, 129)  # #10B981


def main():
    img = Image.open(LOGO).convert("RGBA")
    w, h = img.size
    px = img.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 10:
                continue
            if r >= 240 and g >= 240 and b >= 240:
                continue
            px[x, y] = (*PRIMARY_GREEN, a)
    img.save(LOGO, "PNG")
    print("已把 logo 绿色改为 #10B981")


if __name__ == "__main__":
    main()
