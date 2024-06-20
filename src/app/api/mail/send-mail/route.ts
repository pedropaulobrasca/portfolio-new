import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface EmailRequest {
  subject: string
  text: string
  email: string
  name: string
}

export async function POST(request: NextRequest) {
  try {
    const { subject, text, email, name }: EmailRequest = await request.json()

    if (!email || !subject || !text || !name) {
      return NextResponse.json(
        { error: 'Email, subject, text and name are required.' },
        { status: 400 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: email,
      to: 'pedropaulobrasca@gmail.com',
      subject: `Email from ${name} (${email}): ${subject}`,
      text,
    }

    // Envia o email
    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 },
    )
  }
}
