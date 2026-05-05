import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Reading Tutoring in Yuma, AZ & Online',
  description: 'Personalized virtual reading tutoring for K-12 students, homeschool learners, college students, and adult learners. Based in Yuma, Arizona and available online.',
  path: '/reading-tutoring/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='Reading Tutoring'
      title='Reading Tutoring in Yuma, AZ & Online'
      intro='Build reading confidence with virtual support for phonics, fluency, comprehension, critical reading, and adult literacy.'
      bullets={['K-12 reading support','Adult reading development','Homeschool language arts','Online sessions from Yuma, Arizona']}
      sections={[{title:'Who this helps',body:'Reading tutoring supports young learners, homeschool students, college readers, adult learners, and ESL learners who need patient, individualized reading support.'},{title:'What sessions can cover',body:'Sessions can focus on phonics, fluency, comprehension, vocabulary, critical reading, study strategies, and confidence.'},{title:'How virtual reading tutoring works',body:'Cynthia meets learners online, adapts to their current level, and builds skills without rushing the learning process.'}]}
      faqs={[{q:'Are sessions online?',a:'Yes. Sessions are virtual only, so learners can work with Cynthia from home.'},{q:'Where is Saguaro Blossoms Learning based?',a:'Saguaro Blossoms Learning is based in Yuma, Arizona, with online tutoring available globally.'},{q:'Can families ask about AZ ESA funds?',a:'Yes. AZ ESA funds are accepted as a payment option for eligible families.'}]}
    />
  )
}
