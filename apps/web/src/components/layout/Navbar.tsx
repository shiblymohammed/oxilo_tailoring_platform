'use client';

import { useAuthStore } from '@/lib/stores/auth.store';
import { authApi } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { LogOut, Bell } from 'lucide-react';
import { toast } from 'sonner';
import { MobileNav } from './Sidebar';

export function Navbar() {
  const { user, clearAuth } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await authApi.logout();
    clearAuth();
    toast.success('Logged out');
    router.replace('/login');
  };

  return (
    <header className="h-14 border-b border-[#334155] bg-[#1e293b] flex items-center justify-between px-4 lg:px-6 shrink-0">
      <div className="flex items-center gap-3">
        <MobileNav />
        <p className="text-sm font-medium text-white hidden sm:block">{user?.shop?.name}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="btn-ghost p-2 rounded-lg">
          <Bell className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center">
            <span className="text-sky-400 text-xs font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-white">{user?.name}</p>
            <p className="text-xs text-slate-400 capitalize">{user?.role?.toLowerCase()}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="btn-ghost p-2 rounded-lg text-slate-400 hover:text-red-400">
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
