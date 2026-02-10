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

    // 逻辑：访客填表 → 邮件发到 support@ticktask.co.ke，reply_to 为访客邮箱，你在 support 里直接回复即可
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: 'support@ticktask.co.ke',
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
      let errMsg = (error as { message?: string })?.message || String(error)
      if (errMsg.includes('only send testing emails to your own email') || errMsg.includes('verify a domain')) {
        errMsg = '发信到 support@ticktask.co.ke 需在 Resend 验证域名 ticktask.co.ke，并在 Vercel 设置 RESEND_FROM_EMAIL=website@ticktask.co.ke。详见项目内 RESEND_DOMAIN_VERIFY.md。'
      }
      return NextResponse.json(
        { error: errMsg },
        { status: 502 }
      )
    }

    console.log('[Contact] Email sent via Resend, id:', data?.id, 'to: support@ticktask.co.ke')

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
