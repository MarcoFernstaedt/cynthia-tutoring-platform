import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type Inquiry = {
  firstName: string
  lastName: string
  email: string
  learnerType: string
  interest: string
  story: string
}

function clean(value: FormDataEntryValue | null) {
  return String(value ?? '').trim().slice(0, 4000)
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function buildPlainText(inquiry: Inquiry) {
  return [
    'New Saguaro Blossoms Learning inquiry',
    '',
    `Name: ${inquiry.firstName} ${inquiry.lastName}`,
    `Email: ${inquiry.email}`,
    `Learner type: ${inquiry.learnerType}`,
    `Area of interest: ${inquiry.interest}`,
    '',
    'Message:',
    inquiry.story,
  ].join('\n')
}

function buildHtml(inquiry: Inquiry) {
  const fullName = escapeHtml(`${inquiry.firstName} ${inquiry.lastName}`)
  return `
    <div style="margin:0; padding:0; background:#FFFBF0; color:#0D0D0D; font-family:Arial, Helvetica, sans-serif; line-height:1.6;">
      <div style="max-width:680px; margin:0 auto; padding:28px 16px;">
        <div style="background:#FFFFFF; border:1px solid #F0C84A; border-radius:24px; overflow:hidden; box-shadow:0 16px 40px rgba(13,13,13,0.08);">
          <div style="background:linear-gradient(135deg, #D4006A 0%, #E8008A 48%, #D4A017 100%); padding:28px 30px; color:#FFFFFF;">
            <p style="margin:0 0 8px; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; font-weight:700;">Saguaro Blossoms Learning</p>
            <h1 style="margin:0; font-family:Georgia, 'Times New Roman', serif; font-size:30px; line-height:1.2; font-weight:400;">New website inquiry</h1>
            <p style="margin:10px 0 0; font-size:15px; color:#FFF0F7;">A visitor submitted the contact form from the website.</p>
          </div>

          <div style="padding:28px 30px; background:#FFFFFF;">
            <div style="border-left:4px solid #D4006A; padding:14px 18px; background:#FFF0F7; border-radius:0 16px 16px 0; margin-bottom:22px;">
              <p style="margin:0; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; color:#3A3A3A;">Reply to</p>
              <p style="margin:4px 0 0; font-size:20px; font-weight:700; color:#0D0D0D;">${fullName}</p>
              <p style="margin:2px 0 0; font-size:16px;"><a style="color:#D4006A; text-decoration:none; font-weight:700;" href="mailto:${escapeHtml(inquiry.email)}">${escapeHtml(inquiry.email)}</a></p>
            </div>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin:0 0 22px;">
              <tr>
                <td style="padding:12px 0; border-bottom:1px solid #FAF3DC; color:#3A3A3A; font-size:13px; text-transform:uppercase; letter-spacing:0.08em; width:38%;">Learner type</td>
                <td style="padding:12px 0; border-bottom:1px solid #FAF3DC; color:#0D0D0D; font-size:16px; font-weight:700;">${escapeHtml(inquiry.learnerType)}</td>
              </tr>
              <tr>
                <td style="padding:12px 0; border-bottom:1px solid #FAF3DC; color:#3A3A3A; font-size:13px; text-transform:uppercase; letter-spacing:0.08em;">Area of interest</td>
                <td style="padding:12px 0; border-bottom:1px solid #FAF3DC; color:#0D0D0D; font-size:16px; font-weight:700;">${escapeHtml(inquiry.interest)}</td>
              </tr>
            </table>

            <div style="background:#FEF9E7; border:1px solid #F0C84A; border-radius:18px; padding:20px;">
              <p style="margin:0 0 10px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; color:#BF8E0A; font-weight:700;">Message</p>
              <p style="white-space:pre-wrap; margin:0; font-size:16px; color:#1F1F1F;">${escapeHtml(inquiry.story)}</p>
            </div>
          </div>

          <div style="padding:18px 30px; background:#FAF3DC; border-top:1px solid #F0C84A;">
            <p style="margin:0; font-size:13px; color:#3A3A3A;">This inquiry was sent from the Saguaro Blossoms Learning website. Use reply to respond directly to the visitor.</p>
          </div>
        </div>
      </div>
    </div>
  `
}

async function sendWithResend(inquiry: Inquiry) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'Saguaro Blossoms Learning <onboarding@resend.dev>'

  if (!apiKey || !to) {
    throw new Error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    signal: AbortSignal.timeout(12000),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: inquiry.email,
      subject: `New Saguaro Blossoms Learning inquiry from ${inquiry.firstName} ${inquiry.lastName}`,
      text: buildPlainText(inquiry),
      html: buildHtml(inquiry),
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Resend email failed: ${response.status} ${errorText}`)
  }
}

export async function POST(request: Request) {
  const form = await request.formData()

  if (clean(form.get('_honey'))) {
    return NextResponse.redirect(new URL('/contact/#success-msg', request.url), 303)
  }

  const inquiry: Inquiry = {
    firstName: clean(form.get('first-name')),
    lastName: clean(form.get('last-name')),
    email: clean(form.get('email')),
    learnerType: clean(form.get('learner-type')),
    interest: clean(form.get('interest')),
    story: clean(form.get('story')),
  }

  const hasAllRequired = Object.values(inquiry).every(Boolean) && isValidEmail(inquiry.email)
  if (!hasAllRequired) {
    return NextResponse.json({ error: 'Please complete all required fields with a valid email address.' }, { status: 400 })
  }

  await sendWithResend(inquiry)

  return NextResponse.redirect(new URL('/contact/#success-msg', request.url), 303)
}
