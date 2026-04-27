import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saguaro Blossoms Learning',
  description: 'Learning as unique and vivid as the saguaro blossom. Saguaro Blossoms Learning supports readers, writers, ESL learners, homeschool families, college students, and adult learners in Tucson, Arizona.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
