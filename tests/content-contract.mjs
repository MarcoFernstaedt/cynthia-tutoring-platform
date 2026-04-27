import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const source = fs.existsSync(path.join(root, 'app/page.tsx')) ? fs.readFileSync(path.join(root, 'app/page.tsx'), 'utf8') : ''
const globals = fs.existsSync(path.join(root, 'app/globals.css')) ? fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8') : ''
const requirements = fs.existsSync(path.join(root, 'requirements_from_cynthia.md')) ? fs.readFileSync(path.join(root, 'requirements_from_cynthia.md'), 'utf8') : ''

const requiredCopy = [
  'Saguaro Blossoms Learning Services',
  'Rooted in growth. Strengthened by time. Blossoming into possibilities.',
  'K–12',
  'College Students',
  'Adult Learners',
  'English as a Second Language',
  'Homeschool Support',
  'ESA Funds',
  'CashApp',
  'Venmo',
  'Zelle',
  '$25',
  '$60',
  '6-week commitment',
  '12-week commitment',
  'Family rates',
  '$5 discount',
  'Customized asynchronous packages',
  '$250–$300',
  'ESA Funds beginning May 2026',
  'AZTESOL',
  'NCTE/CCCC',
  'Where every learner blossoms at their own pace',
  'Donde cada estudiante florece',
  '$30 consultation',
  'Schedule a $30 consultation',
  'Explore services',
  'Services and pricing are together',
  'Why Saguaro Blossoms?',
  'Tell us about your learning journey',
  'Begin Your Journey',
]

const missing = requiredCopy.filter((text) => !source.includes(text))
if (missing.length) {
  throw new Error(`Missing required Cynthia content: ${missing.join(', ')}`)
}

const aboutBlock = requirements.slice(requirements.indexOf('About me:') + 'About me:\n'.length, requirements.indexOf('Why Choose Saguaro Blooms'))
const whyBlock = requirements.slice(requirements.indexOf('I chose this name'), requirements.indexOf('The seed'))
const verbatimParagraphs = [...aboutBlock.trimEnd().split('\n').filter(Boolean), ...whyBlock.trimEnd().split('\n').filter(Boolean)]
const missingVerbatim = verbatimParagraphs.filter((paragraph) => !source.includes(paragraph))
if (missingVerbatim.length) {
  throw new Error(`Missing verbatim About/Why Cynthia copy: ${missingVerbatim.join(' | ')}`)
}

const requiredUiSignals = ['aria-label=', '<main', '<section', 'Plant the seed', 'Tend with care', 'Harvest the possibility']
const missingUi = requiredUiSignals.filter((text) => !source.includes(text))
if (missingUi.length) {
  throw new Error(`Missing polished/accessibility UI signals: ${missingUi.join(', ')}`)
}

if (!globals.includes('tailwind') && !globals.includes('@import "tailwindcss"')) {
  throw new Error('Tailwind/global styling not configured')
}

console.log('Cynthia tutoring platform content contract passed')
