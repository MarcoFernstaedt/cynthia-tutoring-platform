import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'AZ ESA Tutoring Online',
  description: 'Saguaro Blossoms Learning accepts AZ ESA funds as a payment option for eligible Arizona families seeking online reading, writing, ESL, and homeschool tutoring.',
  path: '/az-esa-tutoring/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='AZ ESA Tutoring'
      title='AZ ESA Tutoring Online'
      intro='Eligible Arizona families can ask about using AZ ESA funds for virtual reading, writing, ESL, and homeschool tutoring support.'
      bullets={['AZ ESA funds accepted','Online tutoring for Arizona families','Homeschool support available','Reading, writing, ESL, and language arts']}
      sections={[{title:'Careful ESA support',body:'Saguaro Blossoms Learning accepts AZ ESA funds as a payment option for eligible families. Families should confirm their own program requirements.'},{title:'Good fit for homeschool learners',body:'ESA families often need flexible reading, writing, language arts, and homeschool support that adapts to the learner.'},{title:'What to ask in the inquiry',body:'Families can mention AZ ESA in the contact form so Cynthia can respond with next steps for payment coordination.'}]}
      faqs={[{q:'Can I use AZ ESA funds for tutoring?',a:'Eligible Arizona families may be able to use AZ ESA funds for tutoring services. Saguaro Blossoms Learning accepts AZ ESA funds as a payment option.'},{q:'Do you work with homeschool students?',a:'Yes. Homeschool support is one of the core services.'},{q:'Are sessions online?',a:'Yes. Sessions are virtual only.'}]}
    />
  )
}
