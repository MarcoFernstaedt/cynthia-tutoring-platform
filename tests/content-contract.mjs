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
requireIncludes(exactSite, 'className={`page ${activePage === \'home\' ? \'active\' : \'\'}`}', 'active home page class')
requireIncludes(exactSite, 'className="hero"', 'exact hero class')
requireIncludes(exactSite, 'className="bloom-art"', 'exact bloom art class')
requireIncludes(exactSite, 'className="bloom-petals"', 'exact bloom petals class')
requireIncludes(exactSite, 'className="bloom-center-circle"', 'exact bloom center class')
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
  '@media (max-width: 760px)',
  '@media (prefers-reduced-motion: reduce)',
]) requireIncludes(exactSite + css, marker)

requireIncludes(layout, 'Yuma, Arizona')
requireIncludes(layout, 'Saguaro Blossoms Learning')
requireIncludes(layout, 'Learning as unique and vivid as the saguaro blossom')

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
  'Yuma, Arizona',
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
]) requireIncludes(exactSite, marker)
requireIncludes(css, '.bloom-center-text { color: var(--dark); font-weight: 700; }', 'accessible bloom center text override')
requireIncludes(css, 'outline: 3px solid var(--pink);', 'high-contrast visible focus outline')

console.log('exact attachment conversion contract passed')
