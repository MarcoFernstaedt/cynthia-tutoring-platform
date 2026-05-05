import type { Metadata } from 'next'

export const siteUrl = 'https://saguaroblossomslearningservices.com'
export const siteName = 'Saguaro Blossoms Learning'

export const defaultDescription =
  'Learning as unique and vivid as the saguaro blossom. Saguaro Blossoms Learning provides virtual tutoring services globally, including online reading, writing, ESL, homeschool, college, and adult tutoring from Yuma, Arizona.'

export const seoKeywords = [
  'online tutoring',
  'virtual tutoring',
  'reading tutor',
  'writing tutor',
  'ESL tutor',
  'homeschool support',
  'language arts tutoring',
  'college writing tutor',
  'adult ESL tutoring',
  'Yuma Arizona tutor',
  'AZ ESA tutoring',
  'Saguaro Blossoms Learning',
]

export function pageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const canonical = `${siteUrl}${path}`

  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical,
      siteName,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      description: defaultDescription,
      slogan: 'Where every learner blossoms at their own pace',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yuma',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Yuma' },
        { '@type': 'State', name: 'Arizona' },
        { '@type': 'AdministrativeArea', name: 'United States' },
        { '@type': 'Place', name: 'Worldwide virtual tutoring' },
      ],
      knowsAbout: [
        'Reading development',
        'Writing tutoring',
        'English as a Second Language',
        'Homeschool support',
        'College writing',
        'Adult literacy',
      ],
      employee: { '@id': `${siteUrl}/#cynthia` },
      founder: { '@id': `${siteUrl}/#cynthia` },
      makesOffer: [
        { '@id': `${siteUrl}/services/#reading-tutoring` },
        { '@id': `${siteUrl}/services/#writing-tutoring` },
        { '@id': `${siteUrl}/services/#esl-tutoring` },
        { '@id': `${siteUrl}/services/#homeschool-support` },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: ['en', 'es'],
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/services/#reading-tutoring`,
      name: 'Virtual reading tutoring',
      serviceType: 'Reading tutoring',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'Worldwide',
      description: 'Online reading development support for K-12 students, college students, adult learners, ESL learners, and homeschool families.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/services/#writing-tutoring`,
      name: 'Virtual writing tutoring',
      serviceType: 'Writing tutoring',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'Worldwide',
      description: 'Online writing and language arts tutoring for essays, grammar, mechanics, creative writing, academic writing, and adult writing confidence.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/services/#esl-tutoring`,
      name: 'Virtual ESL tutoring',
      serviceType: 'ESL tutoring',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'Worldwide',
      description: 'English as a Second Language tutoring for conversational English, reading, writing, workplace language skills, pronunciation, and fluency.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/services/#homeschool-support`,
      name: 'Virtual homeschool language arts support',
      serviceType: 'Homeschool tutoring',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'Worldwide',
      description: 'Flexible reading, writing, curriculum, assessment, and language arts support for homeschool families.',
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#cynthia`,
      name: 'Cynthia',
      jobTitle: 'English Tutor & Language Arts Specialist',
      worksFor: { '@id': `${siteUrl}/#organization` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yuma',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
      knowsAbout: [
        'Reading tutoring',
        'Writing tutoring',
        'English as a Second Language',
        'Homeschool support',
        'College writing',
        'Adult literacy',
      ],
      hasCredential: [
        "Bachelor's degree in English Studies, Arizona State University",
        "Master's degree in English Studies, Arizona State University",
        'Doctoral studies in English Literature',
      ],
      memberOf: ['AZTESOL', 'AETA', 'NCTE/CCCC', 'TESOL', 'MLA', 'GSOLE'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Saguaro Blossoms Learning offer virtual tutoring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Saguaro Blossoms Learning provides virtual sessions only, with online tutoring available globally from Yuma, Arizona.',
          },
        },
        {
          '@type': 'Question',
          name: 'What subjects does Saguaro Blossoms Learning support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Services include reading development, writing and expression, English as a Second Language, homeschool support, college writing, adult literacy, and language arts tutoring.',
          },
        },
        {
          '@type': 'Question',
          name: 'What payment types are accepted?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Payment is currently accepted through AZ ESA funds, CashApp, Venmo, and Zelle.',
          },
        },
      ],
    },
  ],
}
