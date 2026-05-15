/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
});
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.r2.cloudflarestorage.com' },
      { protocol: 'https', hostname: 'cdn.oxilo.in' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
  async rewrites() {
    const isDev = process.env.NODE_ENV !== 'production';
    const apiUrl = isDev ? 'http://localhost:3001' : 'https://oxiloserver.bragtly.com';
    
    return [
      { source: '/api/files/:path*', destination: `${apiUrl}/api/files/:path*` },
      { source: '/uploads/:path*',   destination: `${apiUrl}/api/files/:path*` },
    ];
  },
};

module.exports = withPWA(nextConfig);
