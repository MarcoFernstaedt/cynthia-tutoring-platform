/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'cynthia-tutoring-platform'

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages ? { output: 'export' } : {}),
  ...(isGithubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
}

export default nextConfig
