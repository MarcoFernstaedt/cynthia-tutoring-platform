import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Virtual Tutoring for Reading, Writing, ESL & Homeschool',
  description: 'Online tutoring for reading, writing, ESL, homeschool support, college students, and adult learners from Saguaro Blossoms Learning.',
  path: '/virtual-tutoring/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='Virtual Tutoring'
      title='Virtual Tutoring for Reading, Writing, ESL & Homeschool'
      intro='Virtual tutoring makes supportive reading, writing, ESL, homeschool, college, and adult learning help available from home.'
      bullets={['Online sessions from home','Reading and writing support','ESL and adult learning','Homeschool and college support']}
      sections={[{title:'Why virtual tutoring works',body:'Online sessions can give learners a comfortable setting, flexible access, and consistent support without travel.'},{title:'What learners can work on',body:'Sessions can cover reading, writing, language arts, ESL, academic writing, homeschool needs, and adult learning goals.'},{title:'Global availability',body:'Saguaro Blossoms Learning is based in Yuma, Arizona, with virtual tutoring available globally.'}]}
      faqs={[{q:'Are sessions online?',a:'Yes. Sessions are virtual only, so learners can work with Cynthia from home.'},{q:'Where is Saguaro Blossoms Learning based?',a:'Saguaro Blossoms Learning is based in Yuma, Arizona, with online tutoring available globally.'},{q:'Can families ask about AZ ESA funds?',a:'Yes. AZ ESA funds are accepted as a payment option for eligible families.'}]}
    />
  )
}
