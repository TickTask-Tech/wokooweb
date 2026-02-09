# Wokoo 官网快速启动指南

## 🚀 5 分钟快速开始

### 1. 安装依赖

```bash
cd wokooweb
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 📝 必须更新的内容

在部署前，请更新以下内容：

### 1. 联系信息

**文件**：`components/Footer.tsx` 和 `components/sections/Contact.tsx`

```tsx
// 更新邮箱
info@wokoo.com → 你的实际邮箱

// 更新电话
+254 700 000 000 → 你的实际电话
```

### 2. 社交平台链接

**文件**：`components/Footer.tsx`

```tsx
// 更新社交平台链接
const socialLinks = [
  { icon: Facebook, href: '你的Facebook链接', label: 'Facebook' },
  { icon: Twitter, href: '你的Twitter链接', label: 'Twitter' },
  { icon: Instagram, href: '你的Instagram链接', label: 'Instagram' },
  { icon: Linkedin, href: '你的LinkedIn链接', label: 'LinkedIn' },
]
```

### 3. App 下载链接

**文件**：
- `components/sections/Download.tsx`
- `app/careers/page.tsx`

```tsx
// App Store 链接
<a href="你的App Store链接">...</a>

// Google Play 链接
<a href="你的Google Play链接">...</a>
```

### 4. 域名配置

**文件**：`app/layout.tsx`

```tsx
metadataBase: new URL('https://wokoo.com'), // 替换为你的实际域名
```

**文件**：`app/sitemap.ts`

```tsx
const baseUrl = 'https://wokoo.com' // 替换为你的实际域名
```

### 5. SEO Meta 信息

**文件**：`app/layout.tsx`

检查并更新：
- `title`
- `description`
- `keywords`
- `openGraph.images`（需要添加实际的 OG 图片）

## 🎨 自定义样式

### 修改颜色

**文件**：`tailwind.config.js`

```js
colors: {
  primary: {
    // 修改为你的品牌色
    500: '#你的颜色',
  },
}
```

### 修改字体

**文件**：`app/layout.tsx`

```tsx
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

## 📱 添加图片

### 1. 放置图片

将图片放在 `public/` 目录下：

```
public/
├── og-image.jpg      # Open Graph 图片 (1200x630)
├── logo.png          # Logo
└── services/         # 服务图片
    ├── standard.jpg
    ├── deep.jpg
    └── ...
```

### 2. 使用图片

```tsx
import Image from 'next/image'

<Image
  src="/og-image.jpg"
  alt="Wokoo"
  width={1200}
  height={630}
/>
```

## 🌐 部署到 Vercel

### 方法 1：通过 Vercel Dashboard

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. 选择 `wokooweb` 目录
5. 点击 "Deploy"

### 方法 2：通过 CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd wokooweb
vercel
```

### 环境变量（如果需要）

在 Vercel 项目设置中添加环境变量：
- `NEXT_PUBLIC_SITE_URL` - 网站 URL
- 其他需要的环境变量

## 🔍 SEO 检查清单

部署前检查：

- [ ] 所有页面都有唯一的 title 和 description
- [ ] 所有图片都有 alt 文本
- [ ] 链接都是有效的
- [ ] Sitemap 可以访问：`https://你的域名/sitemap.xml`
- [ ] Robots.txt 可以访问：`https://你的域名/robots.txt`
- [ ] Open Graph 图片已添加
- [ ] 网站速度测试（使用 PageSpeed Insights）

## 📊 添加分析工具

### Google Analytics

1. 获取 GA4 Measurement ID
2. 在 `app/layout.tsx` 中添加：

```tsx
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🐛 常见问题

### 问题：样式不生效

**解决**：确保 `tailwind.config.js` 中的 content 路径正确

### 问题：图片不显示

**解决**：检查图片路径，确保在 `public/` 目录下

### 问题：构建错误

**解决**：
```bash
# 清理缓存
rm -rf .next
npm run build
```

## 📚 更多资源

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [Vercel 部署指南](https://vercel.com/docs)

## 🆘 需要帮助？

查看详细文档：
- `README.md` - 项目说明
- `DESIGN_DOCUMENT.md` - 设计文档

---

**祝你的网站成功上线！** 🎉

