import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import buildUtils from './build-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.btov-dev.com'],
    unoptimized: true
  },
  experimental: {
    serverActions: true
  }
}

export default nextConfig;
