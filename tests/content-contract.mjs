import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const sourcePath = '/home/marco/obsidian-vault/Agent-Mercury/ops/cynthia-latest-design/saguaro_blossoms_v2.html'
const source = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, 'utf8') : ''
const referenceCssHash = 'f91cb49469bc7e6c6bf6254308b3ee3c27bc213bbc65b2a6424ea35048048af6'
const referenceCssLength = 21559
const page = read('app/page.tsx')
const exactSite = read('app/exact-site.tsx')
const combinedPages = page + exactSite + read('app/about/page.tsx') + read('app/services/page.tsx') + read('app/contact/page.tsx')
const css = read('app/globals.css')
const layout = read('app/layout.tsx')
const contactApi = read('app/api/contact/route.ts')
const nextConfig = read('next.config.mjs')
const packageJson = read('package.json')
const seo = read('app/seo.ts')
const sitemap = read('app/sitemap.ts')
const robots = read('app/robots.ts')
const openGraphImage = read('app/opengraph-image.tsx')
const iconImage = read('app/icon.tsx')
const blossomSvg = read('public/saguaro-blossom-email.svg')
const websiteBlossomSvg = read('public/saguaro-blossom-website.svg')

function fail(message) {
  console.error(message)
  process.exit(1)
}

function requireIncludes(haystack, needle, label = needle) {
  if (!haystack.includes(needle)) fail(`Missing ${label}: ${needle}`)
}

function extractStyle(html) {
  const match = html.match(/<style>([\s\S]*?)<\/style>/)
  if (!match) fail('Provided HTML has no <style> block')
  return match[1].trim()
}

function sourceHas(needle) {
  requireIncludes(source, needle, `source attachment ${needle}`)
}

// Source-of-truth attachment markers are enforced locally when the private attachment exists.
if (source) {
  for (const marker of [
    '<nav>',
    '<div class="page active" id="page-home">',
    '<section class="hero">',
    '<div class="bloom-art">',
    '<div class="tagline-strip">',
    '<div class="page" id="page-about">',
    '<div class="page" id="page-services">',
    '<div class="page" id="page-contact">',
    'function showPage(page)',
  ]) sourceHas(marker)
}

// Next implementation must be a direct conversion of the provided single-file SPA,
// not a redesigned multi-page approximation.
requireIncludes(exactSite, "'use client'", 'client-side converted SPA')
requireIncludes(exactSite, 'const [activePage, setActivePage]', 'showPage state')
requireIncludes(exactSite, 'function showPage(pageName', 'converted showPage behavior')
requireIncludes(combinedPages, 'initialPage="home"', 'home route initial page')
requireIncludes(combinedPages, 'initialPage="about"', 'about route initial page')
requireIncludes(combinedPages, 'initialPage="services"', 'services route initial page')
requireIncludes(combinedPages, 'initialPage="contact"', 'contact route initial page')
requireIncludes(exactSite, 'id="page-home"', 'home page id')
requireIncludes(exactSite, 'id="page-about"', 'about page id')
requireIncludes(exactSite, 'id="page-services"', 'services page id')
requireIncludes(exactSite, 'id="page-contact"', 'contact page id')
requireIncludes(exactSite, 'className="page active"', 'active page render class')
requireIncludes(exactSite, 'className="hero"', 'exact hero class')
requireIncludes(exactSite, 'className="bloom-art"', 'exact bloom art class')
requireIncludes(exactSite, 'className="bloom-svg-mark"', 'website flower uses hosted SVG asset')
requireIncludes(exactSite, 'src={`${assetBasePath}/saguaro-blossom-website.svg`}', 'website flower SVG source with base path')
requireIncludes(exactSite, 'alt=""', 'website decorative flower has empty alt text')
requireIncludes(exactSite, 'aria-hidden="true"', 'website decorative flower hidden from screen readers')
requireIncludes(exactSite, "import Image from 'next/image'", 'website SVG uses Next Image')
requireIncludes(nextConfig, 'NEXT_PUBLIC_SITE_BASE_PATH', 'GitHub Pages SVG asset base path env')
requireIncludes(css, 'margin: 0 auto 2rem;', 'website flower preserves spacing before quote')
requireIncludes(exactSite, 'className="tagline-strip"', 'exact tagline strip class')
requireIncludes(exactSite, 'showPage(\'contact\')', 'contact navigation conversion')
if (combinedPages.includes('from \'@/components/site\'') || combinedPages.includes('from "@/components/site"')) {
  fail('Homepage still imports redesigned shared shell instead of direct attachment conversion')
}

// Keep the exact reference desktop CSS first; append mobile/accessibility overrides only after it.
const normalizedCss = css.replace(/@tailwind[^;]+;\s*/g, '').trim()
const localReferenceStyle = source ? extractStyle(source) : null
const referencePrefix = normalizedCss.slice(0, referenceCssLength)
const actualPrefixHash = crypto.createHash('sha256').update(referencePrefix).digest('hex')
if (actualPrefixHash !== referenceCssHash) {
  fail(`Desktop CSS is not copied verbatim from attachment first. expected prefix sha256 ${referenceCssHash}, got ${actualPrefixHash}`)
}
if (localReferenceStyle && !normalizedCss.startsWith(localReferenceStyle)) {
  fail('Desktop CSS is not copied verbatim from local attachment first')
}

// Accessibility/mobile enhancements required, but they must not replace desktop source CSS.
for (const marker of [
  'skip-link',
  'aria-label="Primary navigation"',
  'aria-labelledby="home-title"',
  'htmlFor="first-name"',
  'action="/api/contact"',
  'method="POST"',
  'name="_subject"',
  'name="_honey"',
  'tabIndex={-1}',
  'aria-hidden="true"',
  'required />',
  'required>',
  'required></textarea>',
  'const [language, setLanguage] = useState<Language>(\'en\')',
  'Thank you for reaching out. Your inquiry has been sent to Saguaro Blossoms Learning.',
  'This form sends your inquiry directly to Saguaro Blossoms Learning by email.',
  '@media (max-width: 760px)',
  '@media (prefers-reduced-motion: reduce)',
]) requireIncludes(exactSite + css, marker)

requireIncludes(layout + seo, 'Tucson, Arizona')
requireIncludes(layout + seo, 'Saguaro Blossoms Learning')
requireIncludes(layout + seo, 'Learning as unique and vivid as the saguaro blossom')
requireIncludes(packageJson, '"@vercel/analytics"', 'Vercel Analytics dependency')
requireIncludes(layout, "import { Analytics } from '@vercel/analytics/next'", 'Vercel Analytics layout import')
requireIncludes(layout, '<Analytics />', 'Vercel Analytics component')

for (const marker of [
  "import { track } from '@vercel/analytics'",
  "track('language_switch'",
  "track('consultation_cta_click'",
  "track('services_cta_click'",
  "track('contact_form_start'",
  "track('contact_form_submit'",
  "track('pricing_package_view'",
  "track('nav_page_click'",
  "track('seo_topic_click'",
  'onFocusCapture={trackContactFormStart}',
  "trackServiceTopic('reading_tutoring'",
  "trackServiceTopic('az_esa_tutoring'",
]) requireIncludes(exactSite, marker)


// SEO launch requirements for the production custom domain.
for (const marker of [
  'https://saguaroblossomslearningservices.com',
  'Online Reading, Writing & ESL Tutoring',
  'metadataBase: new URL(siteUrl)',
  'alternates: { canonical }',
  'openGraph',
  'twitter',
  'robots',
  'application/ld+json',
  'organizationJsonLd',
]) requireIncludes(layout + seo, marker)

for (const marker of [
  'EducationalOrganization',
  'LocalBusiness',
  'FAQPage',
  'Virtual reading tutoring',
  'Virtual writing tutoring',
  'Virtual ESL tutoring',
  'Virtual homeschool language arts support',
  'AZ ESA tutoring',
]) requireIncludes(seo, marker)

for (const marker of [
  'Online tutoring for reading, writing, ESL, and homeschool support',
  'Saguaro Blossoms Learning provides virtual tutoring for K-12 students',
  'Online tutoring available globally',
  'seo-service-summary',
  'seo-service-list',
]) requireIncludes(exactSite + css, marker)

for (const marker of [
  'export default function sitemap()',
  '/services/',
  "priority: 1",
  'changeFrequency',
]) requireIncludes(sitemap, marker)

for (const marker of [
  'export default function robots()',
  "allow: '/'",
  'sitemap.xml',
  'host: siteUrl',
]) requireIncludes(robots, marker)

// Cynthia feedback from 2026-04-27: restore her About blurb, Why Saguaro
// Blossoms rationale, and refined pricing while keeping the site accessible.
for (const marker of [
  'My education career began in elementary settings',
  'earned my teaching credentials and adding additional experience as a tutor and a teacher before moving onto higher education',
  'My education and experience have worked to enable me to understand learners at every level which allows me to meet them where they are.',
  'graduate coursework in applied linguistics',
  'ongoing doctoral studies in English Literature',
  'Why Choose Saguaro Blooms',
  'the saguaro cactus embodies everything I believe about learning and growth',
  'Unlike wildflowers that I sow in my garden that bloom quickly and fade',
  'That steady, supported growth is what creates something truly lasting and beautiful.',
  'I see every learned the same way.',
  'Growth isn’t about speed',
  'Every learner bloom at their own pace is not simply a tagline but encompasses my philosophy.',
  'with patience, without judgment — and plant the seed of confidence and curiosity.',
  'individual seasons — celebrating progress and navigating challenges together.',
  'a first chapter written, a voice found, a new language spoken with pride and confidence.',
  'Individual Session Pricing',
  '$40/hour K-8',
  '$50/hour grades 9-college',
  'Family rates keep the initial rate as stated',
  '24-hour cancellation policy applies',
  "const [language, setLanguage] = useState<Language>('en')",
  "type Language = 'en' | 'es'",
  'aria-label="Switch site language"',
  'id="main-content" lang={language}',
  'English',
  'Español',
  'Tucson, Arizona',
  'Donde cada estudiante florece a su propio ritmo',
  'Paquetes especiales',
  '<ul className="service-list special-packages-list">',
  '<li>Small groups are $30/hour per individual.</li>',
  '<li>Family rates keep the initial rate as stated, with additional members receiving $5 off for the second and subsequent learners.</li>',
  '<li>Customized asynchronous packages are $250–$300 depending on grade level and need.</li>',
  '<li>Six- and eight-week commitments receive 10% off; twelve-week commitments receive 15% off.</li>',
  '<li>A 24-hour cancellation policy applies, with a cancellation fee of ½ the standard rate for cancellations not made within 24 hours.</li>',
  'aria-labelledby="why-saguaro-title"',
  'aria-labelledby="pricing-title"',
  'Virtual sessions only',
  'Solo sesiones virtuales',
  'Online reading, writing, ESL, and homeschool support from Tucson, Arizona, with virtual services available globally.',
  'Apoyo virtual de lectura, escritura, ESL y educación en casa desde Tucson, Arizona, con servicios virtuales disponibles globalmente.',
  'Virtual services available globally',
  'Servicios virtuales disponibles globalmente',
  'Payment types accepted',
  'Payment is currently accepted through AZ ESA funds, CashApp, Venmo, and Zelle.',
  'AZ ESA funds',
  'CashApp',
  'Venmo',
  'Zelle',
]) requireIncludes(exactSite, marker)

for (const forbidden of ['In-person', 'in-person', 'in person', 'presencial', 'Presencial', 'Virtual services available statewide', 'Servicios virtuales disponibles en todo Arizona', 'buy.stripe.com', 'paypal.com', 'square.link', 'apple-pay', 'Apple Pay button']) {
  if (exactSite.includes(forbidden) || layout.includes(forbidden)) fail(`Virtual-only update still contains forbidden in-person wording: ${forbidden}`)
}
requireIncludes(layout + seo, 'virtual tutoring services globally')
requireIncludes(css, '.payment-method-list', 'payment method list styling')
requireIncludes(css, '.form-honeypot', 'contact form honeypot styling')
requireIncludes(css, '.form-note', 'contact form note styling')
requireIncludes(css, '.contact-form-wrap .form-success:target', 'contact form visible success styling')
requireIncludes(css, 'overscroll-behavior-y: none', 'overscroll bounce prevention')
requireIncludes(css, 'overflow-x: hidden', 'horizontal overscroll prevention')
requireIncludes(css, 'overflow-y: auto', 'mouse wheel vertical scrolling')
requireIncludes(css, 'scrollbar-width: none', 'modern hidden scrollbar in Firefox')
requireIncludes(css, 'html::-webkit-scrollbar', 'modern hidden scrollbar in Chromium/Safari')
requireIncludes(css, 'flex-wrap: wrap', 'mobile tagline wraps instead of clipping')
requireIncludes(css, 'overflow-wrap: anywhere', 'mobile tagline long text cannot be cut off')
requireIncludes(css, 'overflow: visible', 'mobile hero/flower overflow remains visible')
requireIncludes(css, 'margin-top: 0', 'mobile footer bottom removes ivory gap')
requireIncludes(css, 'row-gap: 2rem', 'mobile footer columns have breathing room')


for (const marker of [
  'function pagePath',
  "window.history.pushState(null, '', nextPath)",
  'href={pagePath(page)}',
  'id="reading-tutoring"',
  'id="writing-tutoring"',
  'id="esl-tutoring"',
  'id="homeschool-support"',
  'faq-section',
  'Common questions about virtual tutoring',
  'seo-internal-links',
  'conversion-band',
]) requireIncludes(exactSite, marker)

for (const marker of [
  'Large-desktop polish',
  'max-width: 1280px',
  'max-width: 1060px',
  '.landing-page',
  '.landing-hero',
  '.landing-highlights',
]) requireIncludes(css, marker)

for (const marker of [
  '/reading-tutoring/',
  '/writing-tutoring/',
  '/esl-tutoring/',
  '/homeschool-support/',
  '/az-esa-tutoring/',
  '/tucson-tutoring/',
  '/virtual-tutoring/',
]) requireIncludes(sitemap + exactSite, marker)

requireIncludes(read('app/service-landing.tsx'), 'Start a Tutoring Inquiry', 'service landing conversion CTA')
requireIncludes(read('app/az-esa-tutoring/page.tsx'), 'AZ ESA funds as a payment option', 'AZ ESA landing page')
requireIncludes(read('app/tucson-tutoring/page.tsx'), 'based in Tucson, Arizona', 'Tucson landing page')

for (const marker of [
  'export const runtime = \'nodejs\'',
  'process.env.RESEND_API_KEY',
  'process.env.CONTACT_TO_EMAIL',
  'process.env.CONTACT_FROM_EMAIL',
  'await request.formData()',
  'form.get(\'_honey\')',
  'first-name',
  'last-name',
  'learner-type',
  'New Saguaro Blossoms Learning inquiry',
  'https://api.resend.com/emails',
  'NextResponse.redirect(new URL(\'/contact/#success-msg\'',
  'buildOwnerHtml',
  'buildVisitorHtml',
  'buildBlossomMark',
  'background:#FFF0F7',
  'buildWebsiteFlowerMark',
  'https://saguaroblossomslearningservices.com/saguaro-blossom-email.svg',
  'alt="Decorative Saguaro Blossoms flower"',
  'Your inquiry was received',
  'Thank you for reaching out to Saguaro Blossoms Learning',
  'Every learner blossoms at their own pace',
  'We will review your message and follow up directly.',
  'to: [inquiry.email]',
  'reply_to: to',
  'Promise.all',
]) requireIncludes(contactApi, marker)

for (const marker of [
  '<svg',
  'viewBox="0 0 280 280"',
  'Decorative Saguaro Blossoms email flower',
  'rotate(45 140 140)',
  'rotate(315 140 140)',
  'width="80" height="120"',
  'fill="#D4006A"',
  'fill="#E8008A"',
  'fill="#D4A017"',
  'Saguaro',
  'Blossoms',
]) requireIncludes(blossomSvg, marker)

for (const marker of [
  '<svg',
  'viewBox="0 0 280 280"',
  'Decorative Saguaro Blossoms flower',
  'rotate(45 140 140)',
  'rotate(315 140 140)',
  'width="80" height="120"',
  'fill="#D4006A"',
  'fill="#E8008A"',
  'fill="#D4A017"',
  'Every',
  'voice',
]) requireIncludes(websiteBlossomSvg, marker)

if (blossomSvg.includes('>Every</text>') || blossomSvg.includes('>voice</text>')) fail('Email SVG still says Every voice')
if (websiteBlossomSvg.includes('>Saguaro</text>') || websiteBlossomSvg.includes('>Blossoms</text>')) fail('Website SVG should keep Every voice')

for (const marker of [
  'function PreviewFlower',
  'petalRotations',
  'borderRadius: `${petalWidth / 2}px',
  'transform: `rotate(${rotation}deg)`',
  'Every{\'\\n\'}voice',
]) requireIncludes(openGraphImage, marker)

for (const marker of [
  'const rotations = [0, 45, 90, 135, 180, 225, 270, 315]',
  'transform: `rotate(${rotation}deg)`',
  "background: '#FFF0F7'",
  "background: '#D4A017'",
  "display: 'flex'",
  "alignItems: 'center'",
  "justifyContent: 'center'",
]) requireIncludes(iconImage, marker)

if (openGraphImage.includes('Bloom circle')) fail('Open Graph image still labels the preview art as a circle')
if (openGraphImage.includes('width: 190') && openGraphImage.includes('height: 190') && openGraphImage.includes("borderRadius: '50%'")) fail('Open Graph image still uses the old circular preview badge')
if (iconImage.includes("borderRadius: '50%',\n          background: 'linear-gradient(135deg")) fail('Icon still uses old circular badge')

requireIncludes(nextConfig, "...(isGithubPages ? { output: 'export'", 'GitHub Pages export only when requested')
if (nextConfig.includes("output: 'export',\n  trailingSlash")) fail('Next config exports unconditionally, which prevents API routes on Vercel')

console.log('exact attachment conversion contract passed')
