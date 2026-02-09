#!/usr/bin/env python3
"""
把 logo 里的绿色统一成单一绿色（#10B981），保留白色勾和透明背景。
用法：python3 scripts/uniform_logo_green.py [可选: 图片路径，默认 public/logo.png]
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
DEFAULT_IMAGE = PUBLIC / "logo.png"
# 网站主色 primary-500
UNIFORM_GREEN = (16, 185, 129)


def uniform_green(source_path: Path, output_path: Path) -> None:
    if not source_path.exists():
        print(f"错误：找不到图片 {source_path}")
        sys.exit(1)

    img = Image.open(source_path).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a < 10:
                continue
            if r >= 240 and g >= 240 and b >= 240:
                continue
            pixels[x, y] = (*UNIFORM_GREEN, a)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(output_path, "PNG")
    print(f"已保存: {output_path} （绿色已统一为 #10B981）")


if __name__ == "__main__":
    path = Path(sys.argv[1]) if len(sys.argv) >= 2 else DEFAULT_IMAGE
    uniform_green(path, path)
