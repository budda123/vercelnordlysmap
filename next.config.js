/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server-side rendering for Vercel deployment
  // This enables API routes and fixes all mobile/CORS issues
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
