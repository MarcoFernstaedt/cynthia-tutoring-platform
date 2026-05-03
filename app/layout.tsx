import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saguaro Blossoms Learning',
  description: 'Learning as unique and vivid as the saguaro blossom. Saguaro Blossoms Learning provides virtual tutoring services globally for readers, writers, ESL learners, homeschool families, college students, and adult learners from Yuma, Arizona.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
