# 邮件发送配置指南

## 📧 联系表单邮件发送设置

联系表单现在已配置为发送邮件到 `support@ticktask.co.ke`。需要配置 Resend 服务来启用邮件发送功能。

## 🚀 快速设置

### 1. 注册 Resend 账号

1. 访问 [Resend](https://resend.com)
2. 注册账号（免费版每月可发送 3,000 封邮件）
3. 验证你的邮箱

### 2. 获取 API Key

1. 登录 Resend Dashboard
2. 进入 **API Keys** 页面
3. 点击 **Create API Key**
4. 复制生成的 API Key（格式：`re_xxxxxxxxxxxxxxxxxxxxx`）

### 3. 验证发送域名

1. 在 Resend Dashboard 进入 **Domains** 页面
2. 添加域名：`ticktask.co.ke`
3. 按照提示添加 DNS 记录到你的域名提供商
4. 等待验证完成（通常几分钟）

### 4. 配置环境变量

在 `wokooweb` 目录下创建 `.env.local` 文件：

```env
RESEND_API_KEY=re_你的API密钥
RESEND_FROM_EMAIL=website@ticktask.co.ke
```

### 5. 安装依赖

```bash
cd wokooweb
npm install
```

## ✅ 验证配置

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 访问联系表单页面
3. 填写并提交表单
4. 检查 `support@ticktask.co.ke` 邮箱是否收到邮件

## 🔧 故障排除

### 邮件未发送

1. **检查环境变量**：
   - 确保 `.env.local` 文件存在
   - 确保 `RESEND_API_KEY` 正确
   - 重启开发服务器

2. **检查域名验证**：
   - 确保 `ticktask.co.ke` 已在 Resend 验证
   - 检查 DNS 记录是否正确

3. **查看控制台日志**：
   - 检查服务器控制台是否有错误信息
   - 检查浏览器控制台是否有网络错误

### 开发环境测试

如果没有配置 Resend，表单提交会：
- ✅ 返回成功消息
- ✅ 在服务器控制台记录提交信息
- ⚠️ 不会实际发送邮件

## 📝 邮件格式

发送到 `support@ticktask.co.ke` 的邮件包含：
- **主题**：`Contact Form: [用户姓名]`
- **发件人**：`website@ticktask.co.ke`
- **回复地址**：用户填写的邮箱
- **内容**：
  - 用户姓名
  - 用户邮箱
  - 用户消息

## 🔒 安全注意事项

1. **不要提交 `.env.local` 到 Git**
2. **在生产环境使用环境变量**（Vercel、Netlify 等）
3. **定期轮换 API Key**
4. **监控邮件发送量**（避免超出免费额度）

## 🌐 部署到生产环境

### Vercel

1. 在 Vercel 项目设置中添加环境变量：
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`

2. 重新部署项目

### 其他平台

在对应平台的环境变量设置中添加相同的变量。

---

**需要帮助？** 查看 [Resend 文档](https://resend.com/docs) 或联系技术支持。

