import type { MetadataRoute } from 'next'
import { siteUrl } from './seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/services/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/reading-tutoring/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/writing-tutoring/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/esl-tutoring/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/homeschool-support/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/adult-learning/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/college-student-support/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/az-esa-tutoring/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/yuma-tutoring/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/virtual-tutoring/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]
}
