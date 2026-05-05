import type { Metadata } from 'next'
import ExactSaguaroSite from '../exact-site'
import { pageMetadata } from '../seo'

export const metadata: Metadata = pageMetadata({
  title: 'Contact | Virtual Tutoring Inquiry',
  description: 'Contact Saguaro Blossoms Learning for online reading, writing, ESL, homeschool, college, and adult tutoring inquiries.',
  path: '/contact/',
})

export default function ContactPage() {
  return <ExactSaguaroSite initialPage="contact" />
}
