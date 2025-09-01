/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable strict mode
  reactStrictMode: true,
  // Optimize bundle
  swcMinify: true,
}

module.exports = nextConfig