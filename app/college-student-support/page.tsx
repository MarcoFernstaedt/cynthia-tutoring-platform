import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'College Writing & Reading Support Online',
  description: 'Virtual support for college students working on academic reading, essay writing, planning, revision, and stronger communication.',
  path: '/college-student-support/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='College Support'
      title='College Writing & Reading Support Online'
      intro='Online support for college students who want to strengthen academic reading, essay writing, planning, revision, and confidence.'
      bullets={['Academic reading','Essay organization','Draft feedback and revision','Study and communication skills']}
      sections={[{title:'Who this helps',body:'College support is for students who need help understanding assignments, organizing ideas, improving drafts, and building academic confidence.'},{title:'Academic integrity',body:'Cynthia helps students learn and improve their own work through guidance, structure, and feedback.'},{title:'Skills beyond one assignment',body:'The goal is to build strategies students can use across classes and future writing tasks.'}]}
      faqs={[{q:'Are sessions online?',a:'Yes. Sessions are virtual only, so learners can work with Cynthia from home.'},{q:'Where is Saguaro Blossoms Learning based?',a:'Saguaro Blossoms Learning is based in Tucson, Arizona, with online tutoring available globally.'},{q:'Can families ask about AZ ESA funds?',a:'Yes. AZ ESA funds are accepted as a payment option for eligible families.'}]}
    />
  )
}
