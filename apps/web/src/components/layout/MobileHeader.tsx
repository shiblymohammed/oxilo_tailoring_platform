'use client';

import { usePathname } from 'next/navigation';
import { Scissors, QrCode } from 'lucide-react';
import { useAuthStore } from '@/lib/stores/auth.store';
import Link from 'next/link';

const PAGE_TITLES: Record<string, string> = {
  '/dashboard':  'Home',
  '/orders':     'Orders',
  '/orders/new': 'New Order',
  '/customers':  'Customers',
  '/payments':   'Payments',
  '/expenses':   'Expenses',
  '/analytics':  'Analytics',
  '/scan':       'Scan QR',
  '/settings':   'Settings',
};

export function MobileHeader() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);

  /* Derive page title from pathname */
  let title = PAGE_TITLES[pathname] ?? '';
  if (!title && pathname.startsWith('/orders/')) title = 'Order Details';
  if (!title && pathname.startsWith('/customers/')) title = 'Customer';

  return (
    <header className="md:hidden pt-safe sticky top-0 z-30 bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-800/50">
      <div className="flex items-center px-4 h-12 relative">
        {/* Logo / Left Action */}
        <div className="absolute left-4">
          <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
            <Scissors className="w-3.5 h-3.5 text-sky-400" />
          </div>
        </div>

        {/* Centered Title */}
        <div className="flex-1 flex justify-center">
          <span className="font-semibold text-white text-[15px] tracking-tight">{title || 'OXILO'}</span>
        </div>

        {/* Right Actions */}
        <div className="absolute right-4 flex items-center gap-3">
          <Link href="/scan" className="p-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 active:scale-95 transition-transform">
            <QrCode className="w-4 h-4" />
          </Link>
          <div className="w-7 h-7 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
            <span className="text-sky-400 text-[10px] font-bold">
              {user?.name?.charAt(0).toUpperCase() ?? '?'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
