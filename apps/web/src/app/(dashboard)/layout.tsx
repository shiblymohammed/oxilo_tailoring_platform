'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/auth.store';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import { BottomTabBar } from '@/components/layout/BottomTabBar';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { Scissors } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, _hasHydrated } = useAuthStore();

  useEffect(() => {
    // Only redirect AFTER the store has rehydrated from localStorage
    if (_hasHydrated && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, _hasHydrated, router]);

  // Show loading spinner while store is hydrating (prevents flash redirect)
  if (!_hasHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center animate-pulse">
            <Scissors className="w-6 h-6 text-sky-400" />
          </div>
          <p className="text-slate-500 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="flex h-screen overflow-hidden bg-[#0f172a]">
      {/* ── Desktop: sidebar + navbar ── */}
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Desktop navbar — hidden on mobile */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Mobile header — hidden on desktop */}
        <MobileHeader />

        {/* Main content — extra bottom padding on mobile for tab bar */}
        <main className="flex-1 overflow-y-auto px-3 pt-0 pb-24 md:px-4 md:py-4 lg:px-6 lg:py-6 md:pb-4">
          {children}
        </main>
      </div>

      {/* ── Mobile: bottom tab bar ── */}
      <BottomTabBar />
    </div>
  );
}
