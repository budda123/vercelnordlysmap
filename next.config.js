/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes
  // This allows server-side rendering and fixes mobile/CORS issues
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
