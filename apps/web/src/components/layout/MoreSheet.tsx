'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  CreditCard, Wallet, BarChart3, QrCode, Settings, LogOut, X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/lib/stores/auth.store';
import { authApi } from '@/lib/api';
import { toast } from 'sonner';

const menuItems = [
  { href: '/payments',  icon: CreditCard, label: 'Payments',  desc: 'Track & record payments' },
  { href: '/expenses',  icon: Wallet,     label: 'Expenses',  desc: 'Manage shop expenses' },
  { href: '/analytics', icon: BarChart3,  label: 'Analytics',  desc: 'Revenue & reports' },
  { href: '/scan',      icon: QrCode,     label: 'Scan QR',    desc: 'Scan order QR code' },
  { href: '/settings',  icon: Settings,   label: 'Settings',   desc: 'Shop & payment settings' },
];

interface Props { open: boolean; onClose: () => void }

export function MoreSheet({ open, onClose }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { clearAuth } = useAuthStore();

  /* Close on route change */
  useEffect(() => { onClose(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogout = async () => {
    await authApi.logout();
    clearAuth();
    toast.success('Logged out');
    router.replace('/login');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-200 md:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 bg-[#1e293b] rounded-t-3xl border-t border-slate-700/50 transition-transform duration-300 ease-out md:hidden',
          open ? 'translate-y-0' : 'translate-y-full',
        )}
      >
        {/* Drag handle */}
        <div className="flex justify-center py-3">
          <div className="w-10 h-1 rounded-full bg-slate-600" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-3">
          <h3 className="text-white font-semibold text-lg">More</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Menu items */}
        <div className="px-3 pb-2 space-y-1">
          {menuItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all active:scale-[0.98]',
                  active ? 'bg-sky-500/10 border border-sky-500/20' : 'hover:bg-slate-800/50',
                )}
              >
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                  active ? 'bg-sky-500/20' : 'bg-slate-700/50',
                )}>
                  <item.icon className={cn('w-5 h-5', active ? 'text-sky-400' : 'text-slate-400')} />
                </div>
                <div>
                  <p className={cn('text-sm font-medium', active ? 'text-sky-400' : 'text-white')}>{item.label}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div className="px-3 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] pt-2 border-t border-slate-700/30 mt-2">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
              <LogOut className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Logout</p>
              <p className="text-xs text-red-400/60">Sign out of your account</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
