import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Virtual Homeschool Support for Reading & Writing',
  description: 'Online homeschool support for reading, writing, language arts, curriculum help, progress guidance, and flexible family learning needs.',
  path: '/homeschool-support/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='Homeschool Support'
      title='Virtual Homeschool Support for Reading & Writing'
      intro='Give homeschool learners personalized virtual language arts support in reading, writing, curriculum, and progress planning.'
      bullets={['Reading and writing integration','Curriculum support','Parent collaboration','AZ ESA funds accepted']}
      sections={[{title:'Who this helps',body:'Homeschool support is for families who want extra help with reading, writing, language arts, assignments, and learner confidence.'},{title:'Flexible support',body:'Cynthia can work within a family’s curriculum or help design custom lessons around the learner’s needs.'},{title:'Parent partnership',body:'Sessions can include review, next steps, and parent collaboration when applicable.'}]}
      faqs={[{q:'Are sessions online?',a:'Yes. Sessions are virtual only, so learners can work with Cynthia from home.'},{q:'Where is Saguaro Blossoms Learning based?',a:'Saguaro Blossoms Learning is based in Yuma, Arizona, with online tutoring available globally.'},{q:'Can families ask about AZ ESA funds?',a:'Yes. AZ ESA funds are accepted as a payment option for eligible families.'}]}
    />
  )
}
