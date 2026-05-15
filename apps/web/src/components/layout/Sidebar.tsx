'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, ShoppingBag, CreditCard,
  BarChart3, Settings, Scissors, QrCode, Menu, X, Wallet,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SyncIndicator } from '@/components/SyncIndicator';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/customers',  icon: Users,           label: 'Customers' },
  { href: '/orders',     icon: ShoppingBag,     label: 'Orders' },
  { href: '/payments',   icon: CreditCard,      label: 'Payments' },
  { href: '/expenses',   icon: Wallet,          label: 'Expenses' },
  { href: '/analytics',  icon: BarChart3,       label: 'Analytics' },
  { href: '/scan',       icon: QrCode,          label: 'Scan QR' },
  { href: '/settings',   icon: Settings,        label: 'Settings' },
];

function NavLinks({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="flex-1 px-3 py-4 space-y-1">
      {navItems.map(({ href, icon: Icon, label }) => {
        const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
              active
                ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50',
            )}
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

/** Desktop sidebar */
export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-60 flex-col bg-[#1e293b] border-r border-[#334155]">
      <div className="flex items-center gap-3 px-5 py-5 border-b border-[#334155]">
        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
          <Scissors className="w-4 h-4 text-sky-400" />
        </div>
        <span className="font-bold text-white text-lg">OXILO</span>
      </div>
      <NavLinks />
      <SyncIndicator />
      <div className="px-5 py-4 border-t border-[#334155]">
        <p className="text-slate-600 text-xs">v1.0.0</p>
      </div>
    </aside>
  );
}

/** Mobile hamburger + drawer */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden btn-ghost p-2 rounded-lg text-slate-400"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 bg-[#1e293b] border-r border-[#334155] flex flex-col transition-transform duration-200 lg:hidden',
        open ? 'translate-x-0' : '-translate-x-full',
      )}>
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#334155]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <Scissors className="w-4 h-4 text-sky-400" />
            </div>
            <span className="font-bold text-white text-lg">OXILO</span>
          </div>
          <button onClick={() => setOpen(false)} className="btn-ghost p-1.5 rounded-lg">
            <X className="w-4 h-4" />
          </button>
        </div>
        <NavLinks onClose={() => setOpen(false)} />
        <SyncIndicator />
      </div>
    </>
  );
}
