import type { Metadata } from 'next'
import ExactSaguaroSite from './exact-site'
import { pageMetadata } from './seo'

export const metadata: Metadata = pageMetadata({
  title: 'Online Reading, Writing & ESL Tutoring',
  description: 'Virtual reading, writing, ESL, homeschool, college, and adult tutoring from Yuma, Arizona, with online sessions available globally.',
  path: '/',
})

export default function HomePage() {
  return <ExactSaguaroSite initialPage="home" />
}
