'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Plus, Users, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MoreSheet } from './MoreSheet';

const tabs = [
  { href: '/dashboard', icon: Home,    label: 'Home' },
  { href: '/orders',    icon: Package, label: 'Orders' },
  { href: '/orders/new',icon: Plus,    label: 'New',    isFab: true },
  { href: '/customers', icon: Users,   label: 'Customers' },
  { href: '/__more__',  icon: Menu,    label: 'More' },
];

export function BottomTabBar() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1e293b]/95 backdrop-blur-xl border-t border-slate-700/50 pb-safe">
        <div className="grid grid-cols-5 items-center h-14">
          {tabs.map((tab) => {
            const isMore = tab.href === '/__more__';
            const active = isMore
              ? moreOpen
              : tab.href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(tab.href);

            /* ── Center FAB ("+ New Order") ── */
            if (tab.isFab) {
              return (
                <div key={tab.href} className="relative flex items-center justify-center h-full">
                  <Link
                    href={tab.href}
                    className="absolute -top-5 flex items-center justify-center w-[52px] h-[52px] rounded-full bg-gradient-to-br from-sky-400 to-sky-600 shadow-lg shadow-sky-500/40 border-[4px] border-[#0f172a] active:scale-90 transition-transform"
                  >
                    <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </Link>
                </div>
              );
            }

            /* ── "More" tab opens bottom sheet ── */
            if (isMore) {
              return (
                <button
                  key="more"
                  onClick={() => setMoreOpen(true)}
                  className="flex flex-col items-center justify-center h-full"
                >
                  <tab.icon className={cn('w-[22px] h-[22px] transition-colors', moreOpen ? 'text-sky-400' : 'text-slate-500')} />
                  <span className={cn('text-[9px] mt-1 font-medium transition-colors', moreOpen ? 'text-sky-400' : 'text-slate-500')}>
                    {tab.label}
                  </span>
                </button>
              );
            }

            /* ── Normal tabs ── */
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center justify-center h-full"
              >
                <tab.icon className={cn('w-[22px] h-[22px] transition-colors', active ? 'text-sky-400' : 'text-slate-500')} />
                <span className={cn('text-[9px] mt-1 font-medium transition-colors', active ? 'text-sky-400' : 'text-slate-500')}>
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <MoreSheet open={moreOpen} onClose={() => setMoreOpen(false)} />
    </>
  );
}
