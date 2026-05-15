'use client';

import { useQuery } from '@tanstack/react-query';
import { paymentsApi } from '@/lib/api';
import { formatDate, formatCurrency } from '@/lib/utils';
import { CreditCard, AlertCircle, Loader2, Phone } from 'lucide-react';
import Link from 'next/link';

export default function PaymentsPage() {
  const { data: pending, isLoading } = useQuery({
    queryKey: ['payments', 'pending'],
    queryFn: paymentsApi.pending,
  });

  const totalPending = pending?.reduce((sum: number, o: any) => sum + Number(o.balanceDue), 0) ?? 0;

  return (
    <div className="space-y-5">
      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-xl pb-3 -mx-3 px-3 md:-mx-4 md:px-4 lg:-mx-6 lg:px-6 pt-1 mb-2 border-b border-slate-800/50">
        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-sky-400" /> Payments
            </h1>
            <p className="text-slate-400 text-[11px] mt-0.5">Track pending dues and collections</p>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="card bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20">
        <div className="flex items-center gap-4">
          <AlertCircle className="w-10 h-10 text-amber-400 shrink-0" />
          <div>
            <p className="text-slate-400 text-sm">Total Pending Dues</p>
            <p className="text-3xl font-bold text-amber-400">{formatCurrency(totalPending)}</p>
            <p className="text-slate-500 text-xs mt-0.5">{pending?.length ?? 0} orders with balance due</p>
          </div>
        </div>
      </div>

      {/* Pending List */}
      <div className="card p-0 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-700/50 bg-[#1e293b]">
          <h2 className="text-sm font-semibold text-slate-200">Pending Balance Orders</h2>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 text-sky-400 animate-spin" />
          </div>
        ) : !pending || pending.length === 0 ? (
          <div className="py-12 text-center">
            <CreditCard className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 font-medium">All clear! No pending dues 🎉</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-700/30">
            {pending.map((order: any) => (
              <div key={order.id} className="p-3 hover:bg-slate-800/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-medium text-white max-w-[180px] truncate">{order.customer?.name}</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3 text-slate-500" /> {order.customer?.phone}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <Link href={`/orders/${order.id}`} className="text-[11px] font-semibold text-sky-400 hover:underline">
                      {order.orderNumber}
                    </Link>
                    <p className="text-[10px] text-slate-500 mt-0.5">Due {formatDate(order.deliveryDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3 bg-slate-800/50 rounded-lg p-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500">Total</span>
                    <span className="text-xs text-white">{formatCurrency(order.totalAmount)}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-slate-500">Paid</span>
                    <span className="text-xs text-green-400">{formatCurrency(order.advancePaid)}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-amber-500">Balance</span>
                    <span className="text-sm font-bold text-amber-400">{formatCurrency(order.balanceDue)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
