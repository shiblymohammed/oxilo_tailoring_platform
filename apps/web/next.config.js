/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    runtimeCaching: [
      // Cache API GET requests (stale-while-revalidate)
      {
        urlPattern: /^https:\/\/oxiloserver\.bragtly\.com\/api\/.*/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'api-cache',
          expiration: { maxEntries: 200, maxAgeSeconds: 5 * 60 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      // Cache images aggressively
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'image-cache',
          expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 },
        },
      },
      // Cache fonts
      {
        urlPattern: /\.(?:woff|woff2|ttf|otf|eot)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'font-cache',
          expiration: { maxEntries: 20, maxAgeSeconds: 365 * 24 * 60 * 60 },
        },
      },
      // Cache Google Fonts
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: { maxEntries: 20, maxAgeSeconds: 365 * 24 * 60 * 60 },
        },
      },
    ],
  },
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
