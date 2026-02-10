#!/usr/bin/env python3
"""从 logo 生成标签页/图标：放大后居中裁剪，裁掉外围白边。"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "public" / "logo.png"
# 放大系数：>1 时 logo 更大，外围被裁掉，白边不显示
ZOOM = 1.2


def main():
    img = Image.open(LOGO).convert("RGBA")
    w, h = img.size

    for size, out_path in [
        (192, ROOT / "public" / "icon-192.png"),
        (512, ROOT / "public" / "icon-512.png"),
        (192, ROOT / "app" / "icon.png"),
    ]:
        # 目标画布
        out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        # 将 logo 缩放到略大于 size，再居中粘贴，多出的部分被裁掉
        scale = (size / min(w, h)) * ZOOM
        new_w, new_h = int(w * scale), int(h * scale)
        resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        x = (size - new_w) // 2
        y = (size - new_h) // 2
        out.paste(resized, (x, y), resized)
        out.save(out_path, "PNG")
        print("已生成:", out_path)

    print("完成：图标已放大裁剪，白边已裁掉。")


if __name__ == "__main__":
    main()
