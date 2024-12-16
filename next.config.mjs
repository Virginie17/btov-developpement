/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.btov-dev.com'],
    unoptimized: true
  },
  experimental: {
    serverActions: true,
  },
  // Désactivation de certaines optimisations qui peuvent causer des problèmes
  swcMinify: false,
  poweredByHeader: false,
  reactStrictMode: true,
  // Configuration des headers pour l'API
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
}

export default nextConfig;
