import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { defaultDescription, organizationJsonLd, pageMetadata, siteName, siteUrl } from './seo'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Saguaro Blossoms Learning | Online Reading, Writing & ESL Tutoring',
    description: defaultDescription,
  }),
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'Saguaro Blossoms Learning | Online Reading, Writing & ESL Tutoring',
    template: `%s | ${siteName}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'education',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
