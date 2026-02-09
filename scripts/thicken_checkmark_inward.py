#!/usr/bin/env python3
"""把 logo 对勾右上角弧线向内加粗（不向外超出）。"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "public" / "logo.png"

# 视为白色的阈值
WHITE_MIN = 250
ALPHA_MIN = 200
# 视为绿色/非对勾（可被加粗覆盖）
def is_white(r, g, b, a):
    return a >= ALPHA_MIN and r >= WHITE_MIN and g >= WHITE_MIN and b >= WHITE_MIN


def main():
    img = Image.open(LOGO).convert("RGBA")
    w, h = img.size
    px = img.load()

    # 1) 白色对勾掩码 + 质心
    total_x, total_y, count = 0, 0, 0
    for y in range(h):
        for x in range(w):
            if is_white(*px[x, y]):
                total_x += x
                total_y += y
                count += 1
    if count == 0:
        print("未找到对勾白色区域")
        return
    cx, cy = total_x // count, total_y // count

    # 2) 边界：白色且至少有一个非白邻居
    def has_nonwhite_neighbor(x, y):
        for dy in (-1, 0, 1):
            for dx in (-1, 0, 1):
                if dx == 0 and dy == 0:
                    continue
                nx, ny = x + dx, y + dy
                if 0 <= nx < w and 0 <= ny < h and not is_white(*px[nx, ny]):
                    return True
        return False

    boundary = []
    for y in range(h):
        for x in range(w):
            if is_white(*px[x, y]) and has_nonwhite_neighbor(x, y):
                boundary.append((x, y))

    # 3) 只保留「对勾右上角」弧线：最右上那一小段边界（右笔末端弧线）
    boundary.sort(key=lambda p: (-p[0], p[1]))
    n_tip = max(1, min(len(boundary) // 20, 80))
    top_right = boundary[:n_tip]

    # 4) 向内方向 = 从边界点指向质心，取整为 1 像素步
    to_add = []
    for (x, y) in top_right:
        dx = cx - x
        dy = cy - y
        if dx == 0 and dy == 0:
            continue
        # 单位步进（向内 1 像素）
        if abs(dx) >= abs(dy):
            step_x = 1 if dx > 0 else -1
            step_y = round(dy / abs(dx)) if dx != 0 else 0
        else:
            step_y = 1 if dy > 0 else -1
            step_x = round(dx / abs(dy)) if dy != 0 else 0
        nx, ny = x + step_x, y + step_y
        if 0 <= nx < w and 0 <= ny < h and not is_white(*px[nx, ny]):
            to_add.append((nx, ny))

    # 去重后改为白色（保留原 alpha 或 255）
    for (x, y) in set(to_add):
        r, g, b, a = px[x, y]
        # 只把绿色/半透明改为白，不破坏透明
        if a < 10:
            continue
        px[x, y] = (255, 255, 255, 255)

    img.save(LOGO, "PNG")
    print("已将对勾右上角弧线向内加粗，共添加", len(set(to_add)), "像素")


if __name__ == "__main__":
    main()
