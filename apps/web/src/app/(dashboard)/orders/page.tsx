'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ordersApi } from '@/lib/api';
import { formatDate, formatCurrency, ORDER_STATUS_COLORS, PRIORITY_COLORS } from '@/lib/utils';
import {
  ShoppingBag, Search, Loader2, Plus,
  AlertTriangle, Clock, ArrowRight,
} from 'lucide-react';

const STATUSES = ['RECEIVED','MEASUREMENT_TAKEN','CUTTING','STITCHING','TRIAL','ALTERATION','READY','DELIVERED'];

const STATUS_LABELS: Record<string, string> = {
  RECEIVED: 'Received', MEASUREMENT_TAKEN: 'Measured', CUTTING: 'Cutting',
  STITCHING: 'Stitching', TRIAL: 'Trial', ALTERATION: 'Alteration',
  READY: 'Ready', DELIVERED: 'Delivered', CANCELLED: 'Cancelled',
};

export default function OrdersPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['orders', search, statusFilter],
    queryFn: ({ pageParam = 1 }) => ordersApi.list({
      search: search || undefined,
      status: statusFilter || undefined,
      page: pageParam,
      limit: 20,
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.page < lastPage.meta.totalPages) {
        return lastPage.meta.page + 1;
      }
      return undefined;
    }
  });

  const allOrders = data ? data.pages.flatMap(p => p.data) : [];

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage || isFetchingNextPage) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) fetchNextPage(); },
      { threshold: 0.1 }
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="flex flex-col h-full space-y-4 max-w-3xl mx-auto">
      {/* ── Sticky Header & Filters ── */}
      <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-xl pb-3 -mx-3 px-3 md:-mx-4 md:px-4 lg:-mx-6 lg:px-6 pt-1">
        <div className="hidden md:flex items-center justify-between mb-3">
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-sky-400" /> Orders
            </h1>
            <p className="text-slate-400 text-[11px] mt-0.5">
              {data?.pages[0]?.meta?.total ? `${data.pages[0].meta.total} total orders` : 'Loading...'}
            </p>
          </div>
          <Link href="/orders/new" className="btn-primary text-sm flex items-center gap-2">
            Create Order
          </Link>
        </div>

        {/* Search & Filter Row */}
        <div className="flex gap-2">
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search orders..."
              className="input pl-9 text-sm h-10 w-full"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input w-auto shrink-0 min-w-[100px] max-w-[120px] text-[11px] h-10 bg-[#1e293b] truncate"
          >
            <option value="">All Status</option>
            {STATUSES.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
          </select>
          <Link href="/orders/new" className="btn-primary h-10 px-3 flex md:hidden items-center justify-center shrink-0">
            <Plus className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Order List ── */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 text-sky-400 animate-spin" />
        </div>
      ) : allOrders.length === 0 ? (
        <div className="card py-16 text-center border-dashed">
          <ShoppingBag className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400 font-medium">No orders found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {allOrders.map((order) => (
            <div
              key={order.id}
              onClick={() => router.push(`/orders/${order.id}`)}
              className="card p-3 hover:border-sky-500/30 cursor-pointer flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-sky-400 font-semibold text-[11px] mb-0.5">{order.orderNumber}</span>
                  <span className="text-white font-medium text-sm truncate max-w-[160px] leading-tight">{order.customer?.name}</span>
                </div>
                <div className="flex flex-col items-end shrink-0 ml-2">
                  <span className={`badge border text-[10px] px-2 py-0 ${ORDER_STATUS_COLORS[order.status]}`}>
                    {STATUS_LABELS[order.status]}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end mt-1">
                <div className="flex flex-col gap-1 min-w-0 flex-1 pr-3">
                  <p className="text-xs text-slate-400 truncate w-full">
                    {order.items?.map((i: any) => i.garmentType?.name).join(', ') || 'No items'}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] w-full">
                    {new Date(order.deliveryDate) < new Date() && order.status !== 'DELIVERED' ? (
                      <AlertTriangle className="w-3 h-3 text-red-400 shrink-0" />
                    ) : (
                      <Clock className="w-3 h-3 text-slate-500 shrink-0" />
                    )}
                    <span className={`${new Date(order.deliveryDate) < new Date() && order.status !== 'DELIVERED' ? 'text-red-400 font-medium' : 'text-slate-400'} truncate`}>
                      Due: {formatDate(order.deliveryDate)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex flex-col items-end border-r border-slate-700/50 pr-2">
                    <span className="text-slate-500 text-[9px] uppercase">Total</span>
                    <span className="text-[11px] text-white">
                      {formatCurrency(order.totalAmount)}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-slate-500 text-[9px] uppercase">Balance</span>
                    <span className={`text-xs font-bold ${Number(order.balanceDue) > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {formatCurrency(order.balanceDue)}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block" />
                </div>
              </div>
            </div>
          ))}

          {/* Infinite scroll sentinel */}
          <div ref={loadMoreRef} className="py-4 flex justify-center">
            {isFetchingNextPage && <Loader2 className="w-5 h-5 text-sky-400 animate-spin" />}
          </div>
        </div>
      )}
    </div>
  );
}
