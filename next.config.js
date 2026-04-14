/** @type {import('next').NextConfig} */
// Vercel / normal host: leave NEXT_PUBLIC_BASE_PATH unset → site at /
// Subfolder only (e.g. example.com/ppc-shield): set NEXT_PUBLIC_BASE_PATH=/ppc-shield in env, then rebuild
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
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
