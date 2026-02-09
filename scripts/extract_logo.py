#!/usr/bin/env python3
"""
从 logo_source 抠出绿色圆角方块+对勾（不含底下文字），统一绿色。
用「高分辨率处理 + 高质量缩小」得到平滑的直线和曲线，无锯齿。
"""
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("请先安装 Pillow: pip install Pillow")
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
DEFAULT_SOURCE = PUBLIC / "logo_source.png"
OUTPUT = PUBLIC / "logo.png"
UNIFORM_GREEN = (16, 185, 129)
# 先放大倍数再缩小，用 LANCZOS 得到平滑边缘
UPSCALE = 4
OUTPUT_SIZE = 1024


def is_green(r: int, g: int, b: int) -> bool:
    return g > 80 and g > r and g > b


def extract_logo(source_path: Path) -> None:
    if not source_path.exists():
        print(f"错误：找不到图片 {source_path}")
        sys.exit(1)

    img = Image.open(source_path).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    x_min, y_min, x_max, y_max = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if is_green(r, g, b):
                x_min = min(x_min, x)
                y_min = min(y_min, y)
                x_max = max(x_max, x)
                y_max = max(y_max, y)

    if x_min >= x_max or y_min >= y_max:
        print("错误：未检测到绿色区域。")
        sys.exit(1)

    pad = 4
    x_min = max(0, x_min - pad)
    y_min = max(0, y_min - pad)
    x_max = min(w, x_max + 1 + pad)
    y_max = min(h, y_max + 1 + pad)

    img = img.crop((x_min, y_min, x_max, y_max))
    cw, ch = img.size
    side_raw = max(cw, ch)

    # 放大：更多像素定义形状，便于后面缩小得到平滑边缘
    side_big = side_raw * UPSCALE
    img_big = img.resize((cw * UPSCALE, ch * UPSCALE), Image.Resampling.LANCZOS)
    square = Image.new("RGBA", (side_big, side_big), (255, 255, 255, 0))
    paste_x = (side_big - cw * UPSCALE) // 2
    paste_y = (side_big - ch * UPSCALE) // 2
    square.paste(img_big, (paste_x, paste_y))

    sq = square.load()
    edge = 4 * UPSCALE
    for y in range(side_big):
        for x in range(side_big):
            r, g, b, a = sq[x, y]
            if r >= 250 and g >= 250 and b >= 250:
                if x <= edge or x >= side_big - edge - 1 or y <= edge or y >= side_big - edge - 1:
                    sq[x, y] = (255, 255, 255, 0)

    for y in range(side_big):
        for x in range(side_big):
            r, g, b, a = sq[x, y]
            if a < 10:
                continue
            if r >= 240 and g >= 240 and b >= 240:
                continue
            sq[x, y] = (*UNIFORM_GREEN, a)

    # 高质量缩小到目标尺寸：直线保持直、曲线平滑，无锯齿
    square = square.resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.Resampling.LANCZOS)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    square.save(OUTPUT, "PNG")
    print(f"已保存: {OUTPUT} （{OUTPUT_SIZE}x{OUTPUT_SIZE}，圆角方块+对勾，边缘平滑）")


if __name__ == "__main__":
    source = Path(sys.argv[1]) if len(sys.argv) >= 2 else DEFAULT_SOURCE
    extract_logo(source)
