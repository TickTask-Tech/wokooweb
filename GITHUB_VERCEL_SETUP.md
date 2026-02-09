# 官网从 GitHub 到 Vercel 完整配置指南

本文档手把手带你完成：**本地 wokooweb → GitHub 仓库（develop + main）→ Vercel 部署 → 环境变量与域名**，直到官网可访问。

---

## 前置准备

- 已安装 Git，并配置好 GitHub 账号（能 push）
- 有 GitHub 组织或个人账号（例如 `TickTask-Tech` 或你的用户名）
- 有 Vercel 账号（可用 GitHub 登录：https://vercel.com/signup）

---

## 第一步：在 GitHub 创建新仓库

1. 打开 **https://github.com/new**（或组织下点击 **New repository**）。
2. 填写：
   - **Repository name**：`wokooweb`（或 `ticktask-web`，任选一个保持一致即可）。
   - **Description**（可选）：`TickTask 官网 / Official marketing site`。
   - **Public**。
   - **不要**勾选 “Add a README file”、“Add .gitignore”、“Choose a license”（本地已有项目，避免冲突）。
3. 点击 **Create repository**。
4. 创建完成后，页面上会显示仓库地址，例如：
   - HTTPS：`https://github.com/TickTask-Tech/wokooweb.git`
   - SSH：`git@github.com:TickTask-Tech/wokooweb.git`  
   记下你要用的那一个（下面以 HTTPS 为例）。

---

## 第二步：本地初始化 Git 并推送到 GitHub

在终端执行（**把 `https://github.com/TickTask-Tech/wokooweb.git` 换成你上一步的仓库地址**）：

```bash
# 1. 进入项目目录
cd /Users/yourlove/Documents/APP/Wokooall/wokooweb

# 2. 初始化 Git
git init

# 3. 添加所有文件（.env*.local 已被 .gitignore 忽略，不会提交）
git add .
git status   # 确认没有不该提交的敏感文件

# 4. 首次提交
git commit -m "Initial commit: TickTask official website"

# 5. 将当前分支命名为 develop，并推送到远程
git branch -M develop
git remote add origin https://github.com/TickTask-Tech/wokooweb.git
git push -u origin develop

# 6. 创建 main 分支（与 develop 内容一致），并推送
git checkout -b main
git push -u origin main

# 7. 切回 develop，日常开发都在 develop 上
git checkout develop
```

说明：

- **develop**：日常开发、预览部署用。
- **main**：生产环境部署用；之后通过「把 develop 合并到 main」来发布正式站。

若 push 时要求登录，按提示在浏览器或命令行完成 GitHub 认证即可。

---

## 第三步：在 Vercel 导入项目并部署

### 3.1 导入 GitHub 仓库

1. 登录 **https://vercel.com**，点击 **Add New… → Project**。
2. 在 **Import Git Repository** 里找到 **wokooweb**（或你起的仓库名），点击 **Import**。
3. 若提示授权 GitHub，按提示授权 Vercel 访问该仓库。

### 3.2 配置项目（Import 时的页面）

| 配置项 | 建议值 | 说明 |
|--------|--------|------|
| **Framework Preset** | Next.js | 一般会自动识别，保持即可。 |
| **Root Directory** | `./` 或留空 | 仓库根目录就是 wokooweb，不要改成子目录。 |
| **Build Command** | `npm run build`（默认） | 保持默认。 |
| **Output Directory** | `.next`（默认） | 保持默认。 |
| **Install Command** | `npm install`（默认） | 保持默认。 |
| **Development Command** | `npm run dev`（默认） | 可选，本地用。 |

### 3.3 环境与分支（重要）

- **Production Branch**：选 **main**。  
  - 只有推送到 `main`（或合并到 main）才会更新「生产环境」的网址。
- 其他分支（如 `develop`）的每次 push 会生成 **Preview 预览部署**，不影响生产。

确认后点击 **Deploy**，等第一次构建完成。

### 3.4 首次部署完成后

- 会得到一个地址，例如：`https://wokooweb-xxx.vercel.app`，这就是**生产环境**（连的是 main）。
- 之后每次 push 到 `develop`，会在 **Deployments** 里多一条 Preview，有单独链接，例如 `https://wokooweb-xxx-git-develop-xxx.vercel.app`。

---

## 第四步：配置环境变量（联系表单发邮件）

官网联系表单通过 Resend 发邮件，需要在 Vercel 里配置：

1. 在 Vercel 打开 **wokooweb** 项目。
2. 进入 **Settings → Environment Variables**。
3. 添加变量（建议只给 **Production** 配真实发信，Preview 可省略或填测试值）：

| Name | Value | 说明 |
|------|--------|------|
| `RESEND_API_KEY` | 你的 Resend API Key | 在 https://resend.com 注册后，API Keys 里创建。 |
| `RESEND_FROM_EMAIL` | 发件人邮箱，如 `website@ticktask.co.ke` | 需在 Resend 中验证过的域名/邮箱。 |

4. **Environment** 选择：
   - 若只希望**生产环境**发真实邮件：只勾选 **Production**。
   - 若希望 Preview 也发（不推荐，易误发）：可勾选 Preview。
5. 保存后，在 **Deployments** 里对**最新一次 Production 部署**点 **⋯ → Redeploy**，让新变量生效。

未配置时，表单仍可提交成功，只是不会发邮件，会在服务端打 log（代码里已处理）。

---

## 第五步：自定义域名（可选）

若你有自己的域名（例如 `ticktask.co.ke` 或 `www.ticktask.co.ke`）：

1. Vercel 项目内：**Settings → Domains**。
2. 输入域名，如 `www.ticktask.co.ke`，按提示添加。
3. 在域名服务商（如 Cloudflare、GoDaddy、Namecheap）的 DNS 里添加 Vercel 要求的记录（一般为 **CNAME** 指向 `cname.vercel-dns.com`，或按 Vercel 页面给出的 A/CNAME 说明操作）。
4. 等 DNS 生效后，Vercel 会显示证书已配置，即可用自定义域名访问官网。

---

## 日常流程小结

| 操作 | 做法 |
|------|------|
| 改官网、本地调试 | 在 `develop` 分支开发，`git push origin develop` → 自动产生 Preview 链接，可先看效果。 |
| 发布到正式站 | 在 GitHub 把 `develop` 合并到 `main`（或 PR 合并到 main），Vercel 会自动部署生产环境。 |
| 本地运行 | `npm install && npm run dev`，浏览器打开 http://localhost:3000。 |

---

## 常见问题

**Q: 修改了环境变量，网站没变？**  
A: 到 **Deployments** 里对当前使用的部署点 **Redeploy**，环境变量会在新构建中生效。

**Q: 只想用 main 一个分支可以吗？**  
A: 可以。在 Vercel 的 Production Branch 保持为 `main`，不推 develop 也行；但保留 develop 便于预览和与其它项目流程一致。

**Q: 联系表单没发邮件？**  
A: 检查 Vercel 的 **Production** 环境变量是否填了 `RESEND_API_KEY` 和 `RESEND_FROM_EMAIL`，且 Resend 里该发件邮箱/域名已验证；改完后 Redeploy 一次。

---

按以上步骤做完，官网就完成了从 GitHub 到 Vercel 的配置；之后只需在 `develop` 开发、合并到 `main` 发布即可。
