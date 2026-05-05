import type { Metadata } from 'next'
import ExactSaguaroSite from '../exact-site'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Online Tutoring Services | Reading, Writing, ESL & Homeschool',
  description: 'Explore virtual reading tutoring, writing tutoring, ESL support, homeschool language arts support, college writing, adult learning, pricing, and AZ ESA payment options.',
  path: '/services/',
})

export default function ServicesPage() {
  return <ExactSaguaroSite initialPage="services" />
}
