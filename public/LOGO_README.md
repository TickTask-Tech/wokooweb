# 如何替换网站 Logo

把 **logo 文件**放到 **wokooweb/public/** 目录下，并命名为下面其中一个即可：

- **logo.png**（推荐，支持透明背景）
- 若用 SVG，命名为 **logo.svg**，并告知开发把代码里的 `LOGO_PATH` 改为 `'/logo.svg'`

## 放置步骤

1. 把你的 logo 文件复制到：`Wokooall/wokooweb/public/`
2. 重命名为：`logo.png`（或 `logo.svg`）
3. 刷新网页，顶栏和页脚会自动显示你的 logo

## 建议尺寸

- 顶栏：约 **36×36 px** 或更大（代码会按比例缩小）
- 页脚：约 **40×40 px** 或更大
- 若 logo 不是正方形也没关系，会按比例完整显示（不变形）
