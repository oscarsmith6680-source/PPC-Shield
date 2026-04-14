/** @type {import('next').NextConfig} */
// Only use basePath and assetPrefix for production builds (deployment)
// For local development (npm run dev), these should be empty
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only set basePath for production builds, not for local dev
  ...(isDev ? {} : {
    basePath: '/ppc-shield',
    assetPrefix: '/ppc-shield',
  }),
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
