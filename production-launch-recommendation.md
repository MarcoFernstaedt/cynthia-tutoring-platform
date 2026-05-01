# Saguaro Blossoms Learning production launch recommendation

## Current state

The site is built in Next.js, but currently configured as a static export:

- `next.config.mjs` has `output: 'export'`
- Current preview deploy target is GitHub Pages
- GitHub Pages cannot run Next API routes or server actions
- Current form delivery uses FormSubmit as a temporary no-backend preview bridge

## Recommendation

For the real launch, keep it simple:

1. Domain/DNS: Cynthia purchases a domain; use Vercel DNS if she wants easiest, or Cloudflare if Marco wants more control
2. Email destination: Cynthia's personal email for now
3. Website hosting: Vercel connected to the GitHub repo
4. Contact form backend: Next.js API route on Vercel
5. Email delivery: Resend from a verified sender/domain when the domain is ready; temporary fallback can send to Cynthia's personal email
6. Spam protection: server-side validation, honeypot, basic rate limiting, and optionally Cloudflare Turnstile
7. Optional inquiry log: Supabase table with sanitized submissions only

## Why not GitHub Pages for production form handling

GitHub Pages is fine for static preview hosting, but it cannot run backend code. A secure production contact form needs server-side code so API keys stay private and submissions can be validated before email delivery.

## Why not Marco's VPS as first choice

The VPS can technically host multiple websites through Nginx by routing different domains to different apps/containers. Current inspection shows Docker is running and an Nginx container is bound to port 80, proxying the old Sentinel site. That means multi-site hosting is feasible.

However, for a small client site, Vercel is the better default because it provides HTTPS, deploy previews, GitHub integration, Next.js runtime support, uptime handling, and less server maintenance. Marco's VPS is better reserved for Marco-owned infrastructure unless there is a strong reason to self-host.

## Production contact API requirements

The contact API should:

- Accept only POST requests
- Validate required fields server-side
- Normalize and length-limit all text fields
- Reject spam honeypot submissions
- Add basic IP/user-agent rate limiting
- Send email through Resend/Postmark/SendGrid/Gmail API with secrets stored as environment variables
- Send a polished HTML/CSS email that matches the Saguaro Blossoms Learning website branding: warm desert palette, floral/saguaro feel, original colorful palette, rounded cards, readable typography, and a clean plain-text fallback
- Include clear inquiry sections in the email: contact details, learner type, area of interest, message/story, submitted timestamp, and source page
- Avoid collecting sensitive student, medical, disability, or education records in the initial form
- Show a success/error state on the page
- Optionally log sanitized submissions to Supabase for Cynthia's review

## Recommended client explanation

"For the preview, the form can use a temporary form-to-email bridge. For the live site, I recommend connecting the website to your own domain and business email, then using a secure backend contact form so inquiries are delivered directly to you without exposing email or API credentials on the website. The easiest production setup is: domain/DNS through Cloudflare, business email through Google Workspace or Zoho Mail, and hosting through Vercel so the Next.js contact form can run securely."

## Payment recommendation

Keep payments listed for now: AZ ESA funds, CashApp, Venmo, and Zelle. Do not add payment buttons until Cynthia chooses the actual workflow.

Ask Cynthia:

"For payments, would you prefer to keep the listed payment methods and arrange payment directly after each inquiry, or would you like us to add formal payment links or checkout through Stripe, Square, PayPal, CashApp, Venmo, or Zelle?"
