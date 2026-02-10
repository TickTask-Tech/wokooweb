# 联系表单「能不能用」自检清单

表单逻辑是通的：页面提交 → `POST /api/contact` → Resend 发信到 **support@ticktask.co.ke**。  
下面条件都满足时，**就能用**。

---

## 必须满足（少一个都发不出去）

| 条件 | 本地 | 线上（Vercel） |
|------|------|----------------|
| **RESEND_API_KEY** | 在 `wokooweb/.env.local` 里写 `RESEND_API_KEY=re_xxx` | 在 Vercel → Settings → Environment Variables 里配置 |
| **改完配置要生效** | 改 `.env.local` 后**重启** `npm run dev` | 改环境变量后到 Deployments 里 **Redeploy** 一次 |

没有 API Key 时，接口会返回 503，页面会显示 “Email service not configured”。

---

## 可选（已验证域名时建议配）

| 条件 | 说明 |
|------|------|
| **RESEND_FROM_EMAIL** | 设为 `website@ticktask.co.ke` 时，发件人显示为你们域名；不设则用 `onboarding@resend.dev`（Resend 测试模式）。 |
| **Resend 里 ticktask.co.ke 已验证** | 若用 `website@ticktask.co.ke` 发信，必须在 Resend 里验证该域名，否则会 403。 |
| **RESEND_TO_EMAIL** | 收件人，默认 `support@ticktask.co.ke`。**测试模式下 Resend 只允许发往账号邮箱**，可设 `RESEND_TO_EMAIL=你的邮箱`（如 zhou.jinxi@ticktask.co.ke）先收信；验证域名并设 RESEND_FROM_EMAIL 后可发往任意收件人。 |

---

## 怎么确认「能用」

**本地：**

1. 确认 `wokooweb/.env.local` 里有 `RESEND_API_KEY=re_你的密钥`。
2. 终端执行：`cd wokooweb && npm run dev`，打开 http://localhost:3000 ，到 Contact 区块。
3. 填 Name、Email、Message，点发送。
4. 看**运行 dev 的终端**：出现 `[Contact] Email sent via Resend, id: xxx to: support@ticktask.co.ke` 就说明接口已调通、Resend 已发信。
5. 去 **support@ticktask.co.ke** 收件箱（和垃圾邮件）看有没有这封邮件。

**线上（Vercel）：**

1. Vercel 里已配置 `RESEND_API_KEY`（和可选 `RESEND_FROM_EMAIL`），并已 Redeploy。
2. 打开线上官网，找到联系表单，同样填表发送。
3. 若页面显示成功，去 **support@ticktask.co.ke** 收件箱/垃圾邮件查看。

**在 Resend 里确认：**  
登录 resend.com → **Emails**：能看到刚发的记录且状态为 **Delivered**，说明发信链路是通的。

---

## 常见情况

- 页面显示成功但收不到信 → 先看 support@ticktask.co.ke 的**垃圾邮件**；再看 Resend → Emails 里该条是否 Delivered。
- 页面报错 “Email service not configured” → 没配 `RESEND_API_KEY` 或环境未生效（本地未重启 / Vercel 未 Redeploy）。
- 页面报错 “Email service error” 或接口 502 → 看 Vercel Functions 日志或本地终端里的 `Resend error:`，多半是发件人域名未验证或 Key 无效。

总结：**表单本身能用，只要 RESEND_API_KEY 配好且生效，邮件就会发到 support@ticktask.co.ke。** 按上面清单逐项检查即可。
