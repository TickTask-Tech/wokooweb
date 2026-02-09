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

    // 如果配置了 Resend，发送邮件（未验证域名时必须用 Resend 默认发件人，否则 403）
    if (resend) {
      const fromEmail = 'onboarding@resend.dev'
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
        return NextResponse.json(
          { error: 'Email service error. Please try again or contact support@ticktask.co.ke directly.' },
          { status: 502 }
        )
      }
    } else {
      // 如果没有配置 Resend，记录到控制台（开发环境）
      console.log('Contact Form Submission (No email service configured):', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      })
      console.warn(
        '⚠️ RESEND_API_KEY not configured. Emails will not be sent. Please configure Resend to enable email functionality.'
      )
    }

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
