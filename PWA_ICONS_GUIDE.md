# PWA 图标创建指南

## 📱 需要的图标文件

为了让 PWA（添加到主屏幕）功能完整，需要创建以下图标：

1. **icon-192.png** - 192x192 像素
2. **icon-512.png** - 512x512 像素

## 🎨 图标设计要求

### 基本要求
- **尺寸**：192x192px 和 512x512px
- **格式**：PNG（支持透明背景）
- **内容**：TickTask Logo（字母 "T" 或完整 Logo）
- **背景**：品牌绿色 (#10B981) 或透明

### 设计建议
- 使用 TickTask 的品牌色（绿色 #10B981）
- 保持简洁，在小尺寸下也能清晰识别
- 可以使用白色字母 "T" 在绿色背景上
- 或者使用完整的 TickTask Logo

## 🛠️ 创建图标的方法

### 方法 1：使用在线工具（推荐）

1. **PWA Asset Generator**
   - 访问：https://www.pwabuilder.com/imageGenerator
   - 上传你的 Logo
   - 自动生成所有尺寸

2. **RealFaviconGenerator**
   - 访问：https://realfavicongenerator.net/
   - 上传 Logo
   - 生成所有图标格式

### 方法 2：使用设计软件

1. **Figma**
   - 创建 512x512px 画布
   - 设计图标
   - 导出为 PNG

2. **Photoshop/Illustrator**
   - 创建 512x512px 文档
   - 设计图标
   - 导出为 PNG
   - 使用 ImageMagick 或在线工具调整到 192x192px

### 方法 3：使用命令行工具

如果你有 ImageMagick：

```bash
# 假设你有一个 logo.png (512x512)
convert logo.png -resize 192x192 public/icon-192.png
cp logo.png public/icon-512.png
```

## 📁 文件位置

将图标文件放在：
```
wokooweb/public/
├── icon-192.png
└── icon-512.png
```

## ✅ 验证

1. 在手机浏览器打开网站
2. 查看浏览器菜单是否有"添加到主屏幕"选项
3. 添加后，主屏幕应该显示 TickTask 图标

## 🚀 临时方案

如果暂时没有图标，网站仍然可以正常工作，只是：
- PWA 安装功能可能不完整
- 主屏幕图标会使用浏览器默认图标

---

**提示**：可以使用 TickTask 的 Logo（如果有）或创建一个简单的绿色方块 + 白色 "T" 字母。


