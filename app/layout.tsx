import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saguaro Blossoms Learning Services',
  description: 'Compassionate education support for K–12, college, adult learning, ESL, and homeschool families.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
