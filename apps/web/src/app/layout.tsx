import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
import { Providers } from '@/components/Providers';
import { InstallPrompt } from '@/components/InstallPrompt';
import { OfflineBanner } from '@/components/OfflineBanner';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: { default: 'OXILO — Tailor Shop Manager', template: '%s | OXILO' },
  description: 'Smart tailor shop management — orders, measurements, billing & WhatsApp notifications',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'OXILO',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0f172a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#0f172a] text-slate-100">
        <Providers>{children}</Providers>
        <InstallPrompt />
        <OfflineBanner />
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
