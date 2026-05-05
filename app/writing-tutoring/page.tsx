import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Writing Tutoring Online | Essays, Grammar & Confidence',
  description: 'Online writing tutoring for homeschool students, high school learners, college students, adult learners, and ESL learners seeking stronger expression.',
  path: '/writing-tutoring/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='Writing Tutoring'
      title='Writing Tutoring Online | Essays, Grammar & Confidence'
      intro='Strengthen writing skills with support for essays, grammar, mechanics, academic writing, creative expression, and confidence.'
      bullets={['Academic essay support','Grammar and mechanics','Creative and narrative writing','College and adult writing']}
      sections={[{title:'Who this helps',body:'Writing tutoring is built for learners who need help organizing ideas, improving drafts, understanding assignments, and developing their own voice.'},{title:'Academic integrity',body:'Support focuses on teaching writing skills, planning, feedback, revision, and confidence. It does not replace the learner’s own work.'},{title:'How sessions work',body:'Cynthia helps learners understand the writing process step by step, from brainstorming and structure to revision and final polish.'}]}
      faqs={[{q:'Are sessions online?',a:'Yes. Sessions are virtual only, so learners can work with Cynthia from home.'},{q:'Where is Saguaro Blossoms Learning based?',a:'Saguaro Blossoms Learning is based in Tucson, Arizona, with online tutoring available globally.'},{q:'Can families ask about AZ ESA funds?',a:'Yes. AZ ESA funds are accepted as a payment option for eligible families.'}]}
    />
  )
}
