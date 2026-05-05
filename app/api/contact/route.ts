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

type EmailPayload = {
  from: string
  to: string[]
  reply_to?: string
  subject: string
  text: string
  html: string
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

function buildBlossomMark() {
  return `
    <div aria-hidden="true" style="width:72px; height:72px; margin:0 auto 14px; position:relative;">
      <div style="position:absolute; left:23px; top:0; width:26px; height:34px; background:#D4006A; border-radius:999px 999px 8px 8px; transform-origin:50% 36px;"></div>
      <div style="position:absolute; left:23px; top:0; width:26px; height:34px; background:#E8008A; border-radius:999px 999px 8px 8px; transform:rotate(72deg); transform-origin:50% 36px;"></div>
      <div style="position:absolute; left:23px; top:0; width:26px; height:34px; background:#F26AA7; border-radius:999px 999px 8px 8px; transform:rotate(144deg); transform-origin:50% 36px;"></div>
      <div style="position:absolute; left:23px; top:0; width:26px; height:34px; background:#D4A017; border-radius:999px 999px 8px 8px; transform:rotate(216deg); transform-origin:50% 36px;"></div>
      <div style="position:absolute; left:23px; top:0; width:26px; height:34px; background:#F0C84A; border-radius:999px 999px 8px 8px; transform:rotate(288deg); transform-origin:50% 36px;"></div>
      <div style="position:absolute; left:26px; top:27px; width:20px; height:20px; background:#FFFBF0; border:3px solid #D4A017; border-radius:999px;"></div>
    </div>
  `
}

function buildEmailShell({
  preheader,
  title,
  intro,
  body,
  footer,
}: {
  preheader: string
  title: string
  intro: string
  body: string
  footer: string
}) {
  return `
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">${escapeHtml(preheader)}</div>
    <div style="margin:0; padding:0; background:#FFFBF0; color:#0D0D0D; font-family:Arial, Helvetica, sans-serif; line-height:1.6;">
      <div style="max-width:700px; margin:0 auto; padding:30px 16px;">
        <div style="background:#FFFFFF; border:1px solid #F0C84A; border-radius:28px; overflow:hidden; box-shadow:0 18px 46px rgba(13,13,13,0.10);">
          <div style="background:linear-gradient(135deg, #D4006A 0%, #E8008A 48%, #D4A017 100%); padding:32px 30px 28px; color:#FFFFFF; text-align:center;">
            ${buildBlossomMark()}
            <p style="margin:0 0 8px; font-size:12px; letter-spacing:0.20em; text-transform:uppercase; font-weight:700; color:#FFF7CC;">Saguaro Blossoms Learning</p>
            <h1 style="margin:0; font-family:Georgia, 'Times New Roman', serif; font-size:32px; line-height:1.18; font-weight:400;">${escapeHtml(title)}</h1>
            <p style="margin:12px auto 0; max-width:520px; font-size:16px; color:#FFF0F7;">${escapeHtml(intro)}</p>
          </div>
          <div style="padding:28px 30px; background:#FFFFFF;">
            ${body}
          </div>
          <div style="padding:20px 30px; background:#FAF3DC; border-top:1px solid #F0C84A;">
            <p style="margin:0; font-size:13px; color:#3A3A3A;">${escapeHtml(footer)}</p>
          </div>
        </div>
        <p style="margin:18px 0 0; text-align:center; font-size:12px; color:#6B5C2A;">Every learner blossoms at their own pace.</p>
      </div>
    </div>
  `
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

function buildVisitorPlainText(inquiry: Inquiry) {
  return [
    'Your inquiry was received',
    '',
    `Hi ${inquiry.firstName},`,
    '',
    'Thank you for reaching out to Saguaro Blossoms Learning. We received your inquiry and will review your message and follow up directly.',
    '',
    'Summary:',
    `Learner type: ${inquiry.learnerType}`,
    `Area of interest: ${inquiry.interest}`,
    '',
    'Message received:',
    inquiry.story,
    '',
    'Every learner blossoms at their own pace.',
  ].join('\n')
}

function buildOwnerHtml(inquiry: Inquiry) {
  const fullName = escapeHtml(`${inquiry.firstName} ${inquiry.lastName}`)
  const body = `
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
  `

  return buildEmailShell({
    preheader: `New inquiry from ${inquiry.firstName} ${inquiry.lastName}`,
    title: 'New website inquiry',
    intro: 'A visitor submitted the contact form from the website.',
    body,
    footer: 'This inquiry was sent from the Saguaro Blossoms Learning website. Use reply to respond directly to the visitor.',
  })
}

function buildVisitorHtml(inquiry: Inquiry) {
  const body = `
    <p style="margin:0 0 18px; font-size:17px; color:#1F1F1F;">Hi ${escapeHtml(inquiry.firstName)},</p>
    <p style="margin:0 0 18px; font-size:16px; color:#1F1F1F;">Thank you for reaching out to Saguaro Blossoms Learning. Your inquiry was received.</p>
    <p style="margin:0 0 22px; font-size:16px; color:#1F1F1F;">We will review your message and follow up directly.</p>

    <div style="background:#FFF0F7; border:1px solid #F7B5D2; border-radius:18px; padding:20px; margin-bottom:22px;">
      <p style="margin:0 0 12px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; color:#D4006A; font-weight:700;">Inquiry summary</p>
      <p style="margin:0 0 8px; font-size:16px;"><strong>Learner type:</strong> ${escapeHtml(inquiry.learnerType)}</p>
      <p style="margin:0; font-size:16px;"><strong>Area of interest:</strong> ${escapeHtml(inquiry.interest)}</p>
    </div>

    <div style="background:#FEF9E7; border:1px solid #F0C84A; border-radius:18px; padding:20px;">
      <p style="margin:0 0 10px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; color:#BF8E0A; font-weight:700;">Message received</p>
      <p style="white-space:pre-wrap; margin:0; font-size:16px; color:#1F1F1F;">${escapeHtml(inquiry.story)}</p>
    </div>
  `

  return buildEmailShell({
    preheader: 'Your inquiry was received by Saguaro Blossoms Learning.',
    title: 'Your inquiry was received',
    intro: 'Thank you for reaching out to Saguaro Blossoms Learning.',
    body,
    footer: 'This automatic confirmation was sent because your email address was entered on the Saguaro Blossoms Learning contact form.',
  })
}

async function sendResendEmail(apiKey: string, payload: EmailPayload) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    signal: AbortSignal.timeout(12000),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Resend email failed: ${response.status} ${errorText}`)
  }
}

async function sendWithResend(inquiry: Inquiry) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'Saguaro Blossoms Learning <onboarding@resend.dev>'

  if (!apiKey || !to) {
    throw new Error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL')
  }

  await Promise.all([
    sendResendEmail(apiKey, {
      from,
      to: [to],
      reply_to: inquiry.email,
      subject: `New Saguaro Blossoms Learning inquiry from ${inquiry.firstName} ${inquiry.lastName}`,
      text: buildPlainText(inquiry),
      html: buildOwnerHtml(inquiry),
    }),
    sendResendEmail(apiKey, {
      from,
      to: [inquiry.email],
      reply_to: to,
      subject: 'Your inquiry was received by Saguaro Blossoms Learning',
      text: buildVisitorPlainText(inquiry),
      html: buildVisitorHtml(inquiry),
    }),
  ])
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

  try {
    await sendWithResend(inquiry)
  } catch (error) {
    console.error('Contact form email failed:', error)
    return NextResponse.json(
      { error: 'There was a problem sending your message. Please try again or contact us directly.' },
      { status: 500 },
    )
  }

  return NextResponse.redirect(new URL('/contact/#success-msg', request.url), 303)
}
