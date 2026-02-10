import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// 初始化 Resend（如果配置了 API Key）
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // 验证必填字段
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!resend) {
      console.warn('⚠️ RESEND_API_KEY missing. Add it to .env.local and restart dev server.')
      return NextResponse.json(
        { error: 'Email service not configured. Add RESEND_API_KEY to .env.local (local) or Vercel env (production).' },
        { status: 503 }
      )
    }

    // 发件人：验证域名后设 RESEND_FROM_EMAIL=website@ticktask.co.ke；否则用 onboarding@resend.dev（仅能发往 Resend 账号邮箱）
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    // 收件人：默认 support@ticktask.co.ke。Resend 测试模式下只能发往账号邮箱，可设 RESEND_TO_EMAIL=你的邮箱
    const toEmail = process.env.RESEND_TO_EMAIL || 'support@ticktask.co.ke'
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `Contact Form: ${name}`,
      html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              This email was sent from the TickTask website contact form.
            </p>
          `,
    })

    if (error) {
      console.error('Resend error:', error)
      let message = (error as { message?: string })?.message || String(error)
      if (message.includes('only send testing emails to your own email') || message.includes('verify a domain')) {
        message = '当前为 Resend 测试模式，仅可发往 Resend 账号邮箱。请在 Vercel/本地设置 RESEND_TO_EMAIL=你的邮箱（如 zhou.jinxi@ticktask.co.ke），或验证域名并设置 RESEND_FROM_EMAIL=website@ticktask.co.ke 后即可发往 support@ticktask.co.ke。'
      }
      return NextResponse.json(
        { error: message },
        { status: 502 }
      )
    }

    console.log('[Contact] Email sent via Resend, id:', data?.id, 'to:', toEmail)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
