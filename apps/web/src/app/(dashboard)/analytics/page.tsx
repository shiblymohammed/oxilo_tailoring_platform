'use client';

import { useQuery } from '@tanstack/react-query';
import { analyticsApi } from '@/lib/api';
import { formatCurrency } from '@/lib/utils';
import {
  BarChart3, TrendingUp, Users, ShoppingBag, CheckCircle2,
  AlertTriangle, Clock, Package, Crown, Star, Loader2,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { format, subDays } from 'date-fns';

const TIER_ICON: Record<string, any> = { VIP: Crown, FREQUENT: Star, REGULAR: null };

export default function AnalyticsPage() {
  const today = new Date();
  const from = format(subDays(today, 29), 'yyyy-MM-dd');
  const to   = format(today, 'yyyy-MM-dd');

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['analytics', 'dashboard'],
    queryFn: analyticsApi.dashboard,
  });

  const { data: revenue } = useQuery({
    queryKey: ['analytics', 'revenue', from, to],
    queryFn: () => analyticsApi.revenue(from, to),
  });

  const { data: topCustomers } = useQuery({
    queryKey: ['analytics', 'top-customers'],
    queryFn: analyticsApi.topCustomers,
  });

  const revenueData = revenue?.map((r: any) => ({
    date: format(new Date(r.paidAt), 'dd MMM'),
    revenue: Number(r._sum.amount),
  })) ?? [];

  const kpis = stats ? [
    { label: 'Total Orders',     value: stats.totalOrders,     icon: ShoppingBag, color: 'text-blue-400',   bg: 'bg-blue-500/10' },
    { label: 'Active Orders',    value: stats.pendingOrders,   icon: Clock,        color: 'text-amber-400',  bg: 'bg-amber-500/10' },
    { label: 'Ready to Pickup',  value: stats.readyOrders,     icon: CheckCircle2, color: 'text-green-400',  bg: 'bg-green-500/10' },
    { label: "Today's Delivery", value: stats.todayDeliveries, icon: Package,      color: 'text-sky-400',    bg: 'bg-sky-500/10' },
    { label: 'Month Revenue',    value: formatCurrency(stats.monthRevenue), icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Total Customers',  value: stats.totalCustomers,  icon: Users,        color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'Delayed Orders',   value: stats.delayedOrders,   icon: AlertTriangle,color: 'text-red-400',    bg: 'bg-red-500/10' },
  ] : [];

  return (
    <div className="space-y-5">
      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-xl pb-3 -mx-3 px-3 md:-mx-4 md:px-4 lg:-mx-6 lg:px-6 pt-1 mb-2 border-b border-slate-800/50">
        <div className="hidden md:block">
          <h1 className="text-lg font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-sky-400" /> Analytics
          </h1>
          <p className="text-slate-400 text-[11px] mt-0.5">Business overview and performance metrics</p>
        </div>
      </div>

      {statsLoading ? (
        <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 text-sky-400 animate-spin" /></div>
      ) : (
        <>
          {/* KPI Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="card p-3 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${kpi.bg} flex items-center justify-center shrink-0`}>
                  <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-[10px] truncate">{kpi.label}</p>
                  <p className="text-white font-bold text-base leading-tight truncate">{kpi.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 card">
              <h2 className="text-sm font-semibold text-white mb-4">Revenue — Last 30 Days</h2>
              {revenueData.length === 0 ? (
                <div className="flex items-center justify-center py-12 text-slate-600">
                  <p className="text-sm">No revenue data yet</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f1f5f9' }}
                      formatter={(v: any) => [`₹${v}`, 'Revenue']}
                    />
                    <Bar dataKey="revenue" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Top Customers */}
            <div className="card">
              <h2 className="text-sm font-semibold text-white mb-3">Top Customers</h2>
              {!topCustomers || topCustomers.length === 0 ? (
                <p className="text-slate-500 text-sm py-4 text-center">No customers yet</p>
              ) : (
                <div className="space-y-2">
                  {topCustomers.slice(0, 8).map((c: any, i: number) => {
                    const Icon = TIER_ICON[c.tier];
                    return (
                      <div key={c.id} className="flex items-center gap-3">
                        <span className="text-slate-600 text-xs w-4">{i + 1}</span>
                        <div className="w-7 h-7 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 text-xs font-bold shrink-0">
                          {c.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white truncate">{c.name}</p>
                          <p className="text-xs text-slate-500">{c.totalOrders} orders</p>
                        </div>
                        {Icon && <Icon className="w-3.5 h-3.5 text-purple-400 shrink-0" />}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
