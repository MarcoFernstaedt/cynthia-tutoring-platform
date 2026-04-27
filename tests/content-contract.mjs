import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const read = (file) => fs.existsSync(path.join(root, file)) ? fs.readFileSync(path.join(root, file), 'utf8') : ''
const files = {
  home: read('app/page.tsx'),
  about: read('app/about/page.tsx'),
  services: read('app/services/page.tsx'),
  contact: read('app/contact/page.tsx'),
  components: read('components/site.tsx'),
  globals: read('app/globals.css'),
  tailwind: read('tailwind.config.cjs'),
}
const source = Object.values(files).join('\n')

const requiredRoutes = ['app/page.tsx', 'app/about/page.tsx', 'app/services/page.tsx', 'app/contact/page.tsx']
const missingRoutes = requiredRoutes.filter((file) => !fs.existsSync(path.join(root, file)))
if (missingRoutes.length) {
  throw new Error(`Missing Cynthia multi-page routes from attached design: ${missingRoutes.join(', ')}`)
}

const exactDesignCopy = [
  'Saguaro Blossoms Learning',
  'Where every learner blossoms at their own pace',
  'Learning as unique and vivid as the saguaro blossom. Rooted in growth. Grounded in possibility.',
  'Every reader. Every writer. Every learner.',
  'Learning for every season of life',
  'From kindergarten to adulthood — every learner finds their harvest here',
  'Rooted in growth. Grounded in possibility.',
  'The seed to harvest philosophy',
  'Plant the seed',
  'Tend with care',
  'Harvest the possibility',
  'Nurturing readers. Nurturing writers. Nurturing confidence.',
  'Reading Development',
  'Writing & Expression',
  'English as a Second Language',
  'Homeschool Support',
  'Your story matters. Let\'s grow it together.',
  'Tell us about your learning journey',
  'Donde cada estudiante florece',
  '$30 consultation',
  'informal discussion and a small formal assessment',
]
const missingCopy = exactDesignCopy.filter((text) => !source.includes(text))
if (missingCopy.length) {
  throw new Error(`Missing exact Cynthia attachment/request copy: ${missingCopy.join(' | ')}`)
}

const designTokens = ['#D4006A', '#E8008A', '#FF7EB3', '#D4A017', '#F0C84A', '#FFFBF0', '#FAF3DC', '#0D0D0D', 'Playfair Display', 'DM Sans']
const missingTokens = designTokens.filter((token) => !source.includes(token))
if (missingTokens.length) {
  throw new Error(`Missing attached design visual tokens: ${missingTokens.join(', ')}`)
}

const structureSignals = ['fixed top-0', 'grid min-h-[calc(100vh-70px)]', 'bloom-pulse', 'rounded-full bg-[#D4006A]', 'border-[#F0C84A]', 'Get Started', 'Begin Your Journey', 'Explore Services']
const missingStructure = structureSignals.filter((signal) => !source.includes(signal))
if (missingStructure.length) {
  throw new Error(`Missing Next/Tailwind reconstruction signals: ${missingStructure.join(', ')}`)
}

console.log('Cynthia exact-design Next/Tailwind contract passed')
