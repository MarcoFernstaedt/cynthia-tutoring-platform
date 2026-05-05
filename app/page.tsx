import type { Metadata } from 'next'
import ExactSaguaroSite from './exact-site'
import { pageMetadata } from './seo'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Saguaro Blossoms Learning | Online Reading, Writing & ESL Tutoring',
    description: 'Virtual reading, writing, ESL, homeschool, college, and adult tutoring from Yuma, Arizona, with online sessions available globally.',
    path: '/',
  }),
  title: {
    absolute: 'Saguaro Blossoms Learning | Online Reading, Writing & ESL Tutoring',
  },
}

export default function HomePage() {
  return <ExactSaguaroSite initialPage="home" />
}
