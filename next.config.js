/** @type {import('next').NextConfig} */
const { getSecurityHeaders } = require('./utils/security-headers');

const isDevelopment = process.env.NODE_ENV === 'development';

const nextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  compress: true, // Activer la compression gzip
  poweredByHeader: false, // Supprimer l'en-tête X-Powered-By pour des raisons de sécurité
  reactStrictMode: true, // Activer le mode strict de React
  swcMinify: true, // Utiliser SWC pour la minification
  async headers() {
    return [
      {
        // Appliquer ces en-têtes à toutes les routes
        source: '/:path*',
        headers: getSecurityHeaders(isDevelopment),
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
}

module.exports = nextConfig
