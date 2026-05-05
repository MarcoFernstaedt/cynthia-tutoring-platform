import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Yuma Tutoring Online | Reading, Writing, ESL & Homeschool',
  description: 'Saguaro Blossoms Learning is based in Yuma, Arizona and offers virtual reading, writing, ESL, homeschool, college, and adult tutoring.',
  path: '/yuma-tutoring/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='Yuma Tutoring'
      title='Yuma Tutoring Online | Reading, Writing, ESL & Homeschool'
      intro='Based in Yuma, Arizona, Saguaro Blossoms Learning offers virtual tutoring for local families and online learners beyond Arizona.'
      bullets={['Based in Yuma, Arizona','Virtual sessions only','Yuma and Arizona families','Online tutoring globally']}
      sections={[{title:'Local roots, online access',body:'Cynthia is based in Yuma, Arizona, while sessions are offered virtually for learners locally and beyond.'},{title:'Services available',body:'Tutoring includes reading development, writing and expression, ESL, homeschool support, college support, and adult learning.'},{title:'How to start',body:'Send an inquiry with the learner type, area of need, and any AZ ESA payment questions.'}]}
      faqs={[{q:'Are sessions online?',a:'Yes. Sessions are virtual only, so learners can work with Cynthia from home.'},{q:'Where is Saguaro Blossoms Learning based?',a:'Saguaro Blossoms Learning is based in Yuma, Arizona, with online tutoring available globally.'},{q:'Can families ask about AZ ESA funds?',a:'Yes. AZ ESA funds are accepted as a payment option for eligible families.'}]}
    />
  )
}
