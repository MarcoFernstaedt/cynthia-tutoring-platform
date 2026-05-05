import type { Metadata } from 'next'
import ExactSaguaroSite from '../exact-site'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Cynthia',
  description: "Learn about Cynthia's English studies background, literacy experience, student-centered teaching philosophy, and virtual tutoring approach.",
  path: '/about/',
})

export default function AboutPage() {
  return <ExactSaguaroSite initialPage="about" />
}
