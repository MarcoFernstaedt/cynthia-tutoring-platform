import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const read = (file) => fs.existsSync(path.join(root, file)) ? fs.readFileSync(path.join(root, file), 'utf8') : ''
const page = read('app/page.tsx')
const site = read('components/site.tsx')
const css = read('app/globals.css')
const about = read('app/about/page.tsx')
const services = read('app/services/page.tsx')
const contact = read('app/contact/page.tsx')

function assertIncludes(haystack, needle, label = needle) {
  if (!haystack.includes(needle)) {
    console.error(`Missing ${label}: ${needle}`)
    process.exit(1)
  }
}

function assertNotIncludes(haystack, needle, label = needle) {
  if (haystack.includes(needle)) {
    console.error(`Unexpected ${label}: ${needle}`)
    process.exit(1)
  }
}

const requiredCopy = [
  'Saguaro Blossoms Learning',
  'Where every learner blossoms at their own pace',
  'Learning as unique and vivid as the saguaro blossom',
  'Every reader. Every writer. Every learner.',
  'Nurturing readers',
  'Nurturing writers',
  'Nurturing confidence',
  'Donde cada estudiante florece',
  'Learning for every season of life',
  'Rooted in growth.',
  'Grounded in possibility.',
  'The seed to harvest philosophy',
  'Reading Development',
  'Writing & Expression',
  'English as a Second Language',
  'Homeschool Support',
  'Your story matters.',
  "Let's grow it together.",
]
for (const text of requiredCopy) assertIncludes(page + about + services + contact + site, text)

const exactDesignClasses = [
  'className="hero"',
  'className="hero-left"',
  'className="hero-right"',
  'className="bloom-art"',
  'className="bloom-petals"',
  'className="bloom-center-circle"',
  'className="tagline-strip"',
  'className="features-grid"',
  'className="about-hero"',
  'className="philosophy-grid"',
  'className="services-hero"',
  'className="services-grid"',
  'className="contact-form-wrap"',
]
for (const klass of exactDesignClasses) assertIncludes(page + about + services + contact, klass)

const cssTokens = [
  '--pink:        #D4006A',
  '.hero {',
  '.hero-right::before',
  '.bloom-petals',
  '.petal:nth-child(8)',
  '.tagline-strip',
  '.service-card::before',
  '@media (max-width: 900px)',
  '@media (max-width: 640px)',
  '@media (prefers-reduced-motion: reduce)',
  '.sr-only',
  ':focus-visible',
]
for (const token of cssTokens) assertIncludes(css, token)

assertNotIncludes(page, 'blur-3xl', 'old cloud/blur approximation')
assertNotIncludes(page, 'bg-gradient-to-br', 'old hero gradient approximation')
assertNotIncludes(css, 'outline: none;', 'inaccessible focus removal')

const petalCount = (page.match(/className="petal"/g) || []).length
if (petalCount !== 8) {
  console.error(`Expected exactly 8 decorative petals, found ${petalCount}`)
  process.exit(1)
}

const accessibilityContracts = [
  'aria-label="Primary navigation"',
  'aria-hidden="true"',
  'htmlFor="first-name"',
  'id="first-name"',
  'htmlFor="last-name"',
  'id="last-name"',
  'htmlFor="email"',
  'id="email"',
  'htmlFor="learner-type"',
  'id="learner-type"',
  'htmlFor="interest"',
  'id="interest"',
  'htmlFor="story"',
  'id="story"',
]
for (const token of accessibilityContracts) assertIncludes(page + about + services + contact + site, token)

const appCopy = page + about + services + contact + site
const typoExpectations = [
  ['I see every learner', 'I see every learned'],
  ['Every learner blooms at their own pace', 'Every learner bloom at their own pace'],
]
for (const [good, bad] of typoExpectations) {
  assertIncludes(appCopy, good)
  assertNotIncludes(appCopy, bad)
}

console.log('content/design/accessibility contract passed')
