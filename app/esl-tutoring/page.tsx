import type { Metadata } from 'next'
import ServiceLandingPage from '../service-landing'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Online ESL Tutoring for Students & Adults',
  description: 'Virtual ESL tutoring for English language learners working on conversation, reading, writing, pronunciation, fluency, and workplace communication.',
  path: '/esl-tutoring/',
})

export default function Page() {
  return (
    <ServiceLandingPage
      eyebrow='ESL Tutoring'
      title='Online ESL Tutoring for Students & Adults'
      intro='Support English language growth with virtual ESL tutoring for conversation, reading, writing, pronunciation, fluency, and confidence.'
      bullets={['Conversation practice','Reading and writing in English','Workplace language skills','Pronunciation and fluency support']}
      sections={[{title:'Who this helps',body:'ESL tutoring supports adult learners, students, and families who want patient help building English skills.'},{title:'What sessions can cover',body:'Sessions may include conversation, vocabulary, reading, writing, pronunciation, grammar, and workplace communication.'},{title:'A supportive pace',body:'The goal is growth with dignity, confidence, and clear next steps rather than pressure or judgment.'}]}
      faqs={[{q:'Are sessions online?',a:'Yes. Sessions are virtual only, so learners can work with Cynthia from home.'},{q:'Where is Saguaro Blossoms Learning based?',a:'Saguaro Blossoms Learning is based in Yuma, Arizona, with online tutoring available globally.'},{q:'Can families ask about AZ ESA funds?',a:'Yes. AZ ESA funds are accepted as a payment option for eligible families.'}]}
    />
  )
}
