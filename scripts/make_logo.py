#!/usr/bin/env python3
"""
圆角绿色方块用代码画；对勾从 logo_source 里只抠「白色勾」的精确形状，贴进方块内。
"""
from pathlib import Path

try:
    from PIL import Image, ImageDraw
except ImportError:
    print("请先安装 Pillow: pip install Pillow")
    exit(1)

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
SOURCE = PUBLIC / "logo_source.png"
OUTPUT = PUBLIC / "logo.png"
SIZE = 1024
GREEN = (16, 185, 129)
PAD = 64
RADIUS = 128


def is_green(r, g, b):
    return g > 80 and g > r and g > b


def is_white(r, g, b):
    return r >= 240 and g >= 240 and b >= 240


def main():
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle(
        [PAD, PAD, SIZE - PAD, SIZE - PAD],
        radius=RADIUS,
        fill=GREEN,
        outline=None,
    )

    if not SOURCE.exists():
        OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        img.save(OUTPUT, "PNG")
        print("已保存: 仅方块")
        return

    src = Image.open(SOURCE).convert("RGBA")
    w, h = src.size
    px = src.load()

    # 绿色区域边界
    x_min, y_min, x_max, y_max = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if is_green(r, g, b):
                x_min = min(x_min, x)
                y_min = min(y_min, y)
                x_max = max(x_max, x)
                y_max = max(y_max, y)
    if x_min >= x_max or y_min >= y_max:
        img.save(OUTPUT, "PNG")
        return

    pad = 2
    x_min = max(0, x_min - pad)
    y_min = max(0, y_min - pad)
    x_max = min(w, x_max + 1 + pad)
    y_max = min(h, y_max + 1 + pad)
    crop = src.crop((x_min, y_min, x_max, y_max))
    cw, ch = crop.size
    cp = crop.load()

    # 只留对勾：纯白保留，其余全部透明
    for y in range(ch):
        for x in range(cw):
            r, g, b, a = cp[x, y]
            if not is_white(r, g, b):
                cp[x, y] = (255, 255, 255, 0)
            else:
                cp[x, y] = (255, 255, 255, a)

    # 对勾的精确边界框（只含白色像素）
    wx_min, wy_min, wx_max, wy_max = cw, ch, 0, 0
    for y in range(ch):
        for x in range(cw):
            if cp[x, y][3] > 10:
                wx_min = min(wx_min, x)
                wy_min = min(wy_min, y)
                wx_max = max(wx_max, x)
                wy_max = max(wy_max, y)
    if wx_min >= wx_max or wy_min >= wy_max:
        img.save(OUTPUT, "PNG")
        return

    check_only = crop.crop((wx_min, wy_min, wx_max + 1, wy_max + 1))
    cw2, ch2 = check_only.size

    inner = SIZE - 2 * PAD
    scale = min(inner / cw2, inner / ch2) * 0.85
    new_w = max(1, int(cw2 * scale))
    new_h = max(1, int(ch2 * scale))
    check_only = check_only.resize((new_w, new_h), Image.Resampling.LANCZOS)
    paste_x = PAD + (inner - new_w) // 2
    paste_y = PAD + (inner - new_h) // 2
    img.paste(check_only, (paste_x, paste_y), check_only)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUTPUT, "PNG")
    print("已保存: 方块 + 仅对勾")


if __name__ == "__main__":
    main()
