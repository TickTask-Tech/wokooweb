# 在 Resend 里验证 ticktask.co.ke 域名

验证完成后，就可以用 `website@ticktask.co.ke` 或 `support@ticktask.co.ke` 发信，不再用 `onboarding@resend.dev`。

---

## 第一步：在 Resend 添加域名

1. 登录 **https://resend.com**
2. 左侧点 **Domains** → **Add Domain**
3. 输入：**ticktask.co.ke**（不要带 www，不要带 http）
4. 点添加

---

## 第二步：按 Resend 提示添加 DNS 记录

添加域名后，Resend 会给出几条 DNS 记录（通常在 **Domains → 点进 ticktask.co.ke** 里能看到），类型大致如下：

| 类型 | 名称 / Host | 值 / Value | 说明 |
|------|-------------|------------|------|
| **MX** | 一般留空或 `@` | Resend 给的 mx 值（如 `feedback-smtp.xxx.amazonses.com`） | 收退信 |
| **TXT** | 可能叫 `resend._domainkey` 或类似 | Resend 给的一长串 | DKIM 验证 |
| **TXT** | 可能还有一条 SPF 相关 | Resend 给的 `v=spf1...` | 发件人认证 |

**你要做的**：到 **ticktask.co.ke 的域名服务商**（如 Cloudflare、GoDaddy、Namecheap、阿里云等）的 **DNS 管理** 里，按 Resend 页面上显示的 **每条记录的 Type、Name、Value** 原样添加，不要改名字或值。

- **Name/Host**：Resend 写 `@` 就填 `@` 或留空；写 `resend._domainkey` 就填 `resend._domainkey`（有的厂商要写完整如 `resend._domainkey.ticktask.co.ke`，以你域名商为准）。
- **Value**：从 Resend 复制粘贴，不要多空格、少字符。

---

## 第三步：回 Resend 点验证

1. DNS 保存后，等 **几分钟到几小时**（一般 5–30 分钟就够）。
2. 回到 Resend **Domains** → 点 **ticktask.co.ke**。
3. 点 **Verify** 或 **Check DNS**。
4. 状态变成 **Verified** 就说明备案好了。

若验证失败，Resend 会提示哪条记录不对，对照 Resend 上的要求和你在 DNS 里填的是否完全一致（包括 Name、Value、类型）。

---

## 第四步：改回用自家域名发信

域名验证通过后：

1. **Vercel**（生产）：在 **Environment Variables** 里加或改：
   - `RESEND_FROM_EMAIL` = `website@ticktask.co.ke`（或 `support@ticktask.co.ke`，任选一个在 Resend 里显示为已验证的）
2. **本地**：在 `wokooweb/.env.local` 里加一行：
   ```env
   RESEND_FROM_EMAIL=website@ticktask.co.ke
   ```
3. 把联系表单 API 改回**读环境变量**发件人（目前是写死 `onboarding@resend.dev`），这样有配置就用你的域名，没有配置再用默认。

改完后 **Redeploy**（Vercel）或**重启** `npm run dev`（本地），再发一封测试，收件箱里发件人就会是 `website@ticktask.co.ke`。

---

## 常见问题

- **一直不通过**：用 https://mxtoolbox.com 或域名商自带的 DNS 查询，看 MX/TXT 是否已经生效、值和 Resend 给的是否一致。
- **不知道 DNS 在哪**：谁卖你 ticktask.co.ke 的，就登录那家控制台找「DNS / 解析 / DNS Management」。
- **Resend 提示的记录和我上面表里不一样**：以 **Resend 当前页面显示的为准**，按它给的 Type、Name、Value 一条条加到 DNS 即可。

域名在 Resend 里“备案”好 = 在 Resend 里 **Add Domain** 并按要求加 DNS 直到状态变成 **Verified**。
