import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Online Tutoring for Adult Learners',
  description: 'Supportive online reading, writing, ESL, workplace communication, and confidence-building tutoring for adult learners.',
  path: '/adult-learning/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='Adult Learning'
      title='Online Tutoring for Adult Learners'
      intro='Adult learners deserve patient support for reading, writing, English language skills, workplace communication, and academic confidence.'
      bullets={['Adult literacy support','Workplace communication','ESL and English fluency','Writing confidence']}
      sections={[{title:'Who this helps',body:'Adult learning support is for learners returning to school, improving English, building workplace communication, or strengthening reading and writing.'},{title:'Judgment-free growth',body:'Sessions meet adults where they are, with respect for their goals, schedule, and learning history.'},{title:'Practical skills',body:'Tutoring can focus on everyday writing, academic writing, reading comprehension, communication, and confidence.'}]}
      faqs={[{q:'Are sessions online?',a:'Yes. Sessions are virtual only, so learners can work with Cynthia from home.'},{q:'Where is Saguaro Blossoms Learning based?',a:'Saguaro Blossoms Learning is based in Yuma, Arizona, with online tutoring available globally.'},{q:'Can families ask about AZ ESA funds?',a:'Yes. AZ ESA funds are accepted as a payment option for eligible families.'}]}
    />
  )
}
