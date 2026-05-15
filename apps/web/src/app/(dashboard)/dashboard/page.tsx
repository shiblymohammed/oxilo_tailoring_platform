'use client';

import { useQuery } from '@tanstack/react-query';
import { ordersApi, analyticsApi } from '@/lib/api';
import { formatCurrency, formatDate, ORDER_STATUS_COLORS } from '@/lib/utils';
import { useAuthStore } from '@/lib/stores/auth.store';
import Link from 'next/link';
import {
  Plus, Search, QrCode, Users, Settings, BarChart3,
  Package, AlertTriangle, Clock, CreditCard,
  ArrowRight, Loader2, Scissors,
} from 'lucide-react';

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);

  /* ── Mini stats for the alert badges ── */
  const { data: stats } = useQuery({
    queryKey: ['analytics', 'dashboard'],
    queryFn: analyticsApi.dashboard,
    refetchInterval: 60_000,
  });

  /* ── Recent orders (last 10) ── */
  const { data: recentOrders, isLoading: ordersLoading } = useQuery({
    queryKey: ['orders', 'recent'],
    queryFn: () => ordersApi.list({ limit: 10, sort: '-createdAt' }),
  });

  /* ── Today's deliveries ── */
  const { data: todayDeliveries } = useQuery({
    queryKey: ['orders', 'today-deliveries'],
    queryFn: ordersApi.todayDeliveries,
  });

  /* ── Delayed orders ── */
  const { data: delayed } = useQuery({
    queryKey: ['orders', 'delayed'],
    queryFn: ordersApi.delayed,
  });

  const quickActions = [
    { label: 'New Order',       href: '/orders/new',  icon: Plus,       color: 'from-sky-500 to-blue-600',    desc: 'Create order' },
    { label: 'All Orders',      href: '/orders',      icon: Package,    color: 'from-violet-500 to-purple-600', desc: 'Manage orders' },
    { label: 'Customers',       href: '/customers',   icon: Users,      color: 'from-emerald-500 to-teal-600',  desc: 'View customers' },
    { label: 'Scan QR',         href: '/scan',        icon: QrCode,     color: 'from-amber-500 to-orange-600',  desc: 'Scan order QR' },
    { label: 'Payments',        href: '/payments',    icon: CreditCard, color: 'from-pink-500 to-rose-600',     desc: 'Track payments' },
    { label: 'Analytics',       href: '/analytics',   icon: BarChart3,  color: 'from-cyan-500 to-sky-600',      desc: 'View reports' },
    { label: 'Settings',        href: '/settings',    icon: Settings,   color: 'from-slate-500 to-slate-600',   desc: 'Shop settings' },
    { label: 'Expenses',        href: '/expenses',    icon: Scissors,   color: 'from-red-500 to-rose-600',      desc: 'Track expenses' },
  ];

  const pendingCount  = stats?.pendingOrders ?? 0;
  const delayedCount  = stats?.delayedOrders ?? 0;
  const todayCount    = todayDeliveries?.length ?? 0;
  const pendingDues   = stats?.pendingDues ?? 0;

  return (
    <div className="space-y-6">
      {/* ── Greeting ── */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          {getGreeting()}, {user?.name?.split(' ')[0]} 👋
        </h1>
        <p className="text-slate-400 text-sm mt-0.5">Quick actions & overview</p>
      </div>

      {/* ── Alert Badges ── */}
      {(delayedCount > 0 || pendingDues > 0) && (
        <div className="flex flex-wrap gap-2">
          {delayedCount > 0 && (
            <Link href="/orders?status=delayed" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors">
              <AlertTriangle className="w-4 h-4" />
              {delayedCount} delayed order{delayedCount > 1 ? 's' : ''}
            </Link>
          )}
          {pendingDues > 0 && (
            <Link href="/payments" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/20 transition-colors">
              <CreditCard className="w-4 h-4" />
              {formatCurrency(pendingDues)} pending dues
            </Link>
          )}
        </div>
      )}

      {/* ── Quick Actions Grid ── */}
      <div>
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group flex flex-col items-center gap-1.5 p-2 md:p-4 rounded-2xl bg-[#0f172a]/50 md:bg-[#0f172a] border border-transparent md:border-slate-800 transition-all active:scale-95"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-[1.1rem] bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                <action.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-[11px] md:text-xs font-medium text-slate-300 text-center leading-tight mt-0.5">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mini Stats Row ── */}
      <div className="grid grid-cols-3 gap-3">
        <div className="card flex items-center gap-3 py-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-none">{pendingCount}</p>
            <p className="text-slate-500 text-[11px]">Pending</p>
          </div>
        </div>
        <div className="card flex items-center gap-3 py-3">
          <div className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
            <Package className="w-4 h-4 text-sky-400" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-none">{todayCount}</p>
            <p className="text-slate-500 text-[11px]">Today&apos;s Delivery</p>
          </div>
        </div>
        <div className="card flex items-center gap-3 py-3">
          <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4 text-red-400" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-none">{delayedCount}</p>
            <p className="text-slate-500 text-[11px]">Delayed</p>
          </div>
        </div>
      </div>

      {/* ── Two-column: Recent Orders + Today/Delayed ── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

        {/* Recent Orders — wider column */}
        <div className="md:col-span-3 card">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-sky-400" /> Recent Orders
            </h2>
            <Link href="/orders" className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {ordersLoading ? (
            <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 text-sky-400 animate-spin" /></div>
          ) : !recentOrders?.data || recentOrders.data.length === 0 ? (
            <div className="flex flex-col items-center py-8 gap-2">
              <Package className="w-8 h-8 text-slate-700" />
              <p className="text-slate-500 text-sm">No orders yet</p>
              <Link href="/orders/new" className="text-xs text-sky-400 hover:text-sky-300">Create your first order →</Link>
            </div>
          ) : (
            <div className="space-y-1">
              {recentOrders.data.slice(0, 8).map((order: any) => (
                <Link
                  key={order.id}
                  href={`/orders/${order.id}`}
                  className="flex items-center justify-between py-2.5 px-3 -mx-1 rounded-xl hover:bg-slate-800/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 text-xs font-bold shrink-0">
                      {order.customer?.name?.charAt(0) ?? '?'}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white truncate">{order.customer?.name}</p>
                      <p className="text-xs text-slate-500">{order.orderNumber} · {formatDate(order.createdAt)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-slate-400 font-medium">{formatCurrency(order.totalAmount)}</span>
                    <span className={`badge border text-[10px] ${ORDER_STATUS_COLORS[order.status]}`}>
                      {order.status.replace(/_/g, ' ')}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right column: Today's Deliveries + Delayed */}
        <div className="md:col-span-2 space-y-4">
          {/* Today's Deliveries */}
          <div className="card">
            <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Package className="w-4 h-4 text-sky-400" /> Today&apos;s Deliveries
              {todayCount > 0 && <span className="bg-sky-500/20 text-sky-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full">{todayCount}</span>}
            </h2>
            {todayCount === 0 ? (
              <p className="text-slate-500 text-sm py-3 text-center">No deliveries today</p>
            ) : (
              <div className="space-y-1.5">
                {todayDeliveries!.slice(0, 5).map((order: any) => (
                  <Link key={order.id} href={`/orders/${order.id}`}
                    className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <div>
                      <p className="text-sm font-medium text-white">{order.customer.name}</p>
                      <p className="text-xs text-slate-500">{order.orderNumber}</p>
                    </div>
                    <span className={`badge border text-[10px] ${ORDER_STATUS_COLORS[order.status]}`}>
                      {order.status.replace(/_/g, ' ')}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Delayed Orders */}
          {delayed && delayed.length > 0 && (
            <div className="card border-red-500/20">
              <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" /> Delayed
                <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full">{delayed.length}</span>
              </h2>
              <div className="space-y-1.5">
                {delayed.slice(0, 5).map((order: any) => (
                  <Link key={order.id} href={`/orders/${order.id}`}
                    className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-red-500/5 transition-colors">
                    <div>
                      <p className="text-sm font-medium text-white">{order.customer.name}</p>
                      <p className="text-xs text-red-400">Due {formatDate(order.deliveryDate)}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}
