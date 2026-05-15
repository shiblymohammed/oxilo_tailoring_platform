'use client';

import Link from 'next/link';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useVirtualizer } from '@tanstack/react-virtual';
import { customersApi } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import {
  Users, Search, Phone, Crown, Star, UserX,
  Loader2, ArrowRight, Plus
} from 'lucide-react';

const TIER_CONFIG: Record<string, { label: string; color: string; icon: any }> = {
  VIP:      { label: 'VIP',      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: Crown },
  FREQUENT: { label: 'Frequent', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20',         icon: Star },
  REGULAR:  { label: 'Regular',  color: 'bg-slate-500/10 text-slate-400 border-slate-500/20',   icon: null },
  INACTIVE: { label: 'Inactive', color: 'bg-red-500/10 text-red-400 border-red-500/20',         icon: UserX },
};

export default function CustomersPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search
  const handleSearch = (val: string) => {
    setSearch(val);
    clearTimeout((window as any)._searchTimer);
    (window as any)._searchTimer = setTimeout(() => {
      setDebouncedSearch(val);
    }, 350);
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['customers', debouncedSearch],
    queryFn: ({ pageParam = 1 }) => customersApi.list({ search: debouncedSearch || undefined, page: pageParam, limit: 20 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.page < lastPage.meta.totalPages) {
        return lastPage.meta.page + 1;
      }
      return undefined;
    }
  });

  const allCustomers = data ? data.pages.flatMap(p => p.data) : [];

  /* Virtualizer */
  const scrollElementRef = useRef<Element | null>(null);
  
  useEffect(() => {
    scrollElementRef.current = document.querySelector('main');
  }, []);

  const virtualizer = useVirtualizer({
    count: hasNextPage ? allCustomers.length + 1 : allCustomers.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => 80, // Approx height of customer card
    overscan: 5,
  });

  // Infinite fetch trigger
  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse();
    if (!lastItem) return;
    if (lastItem.index >= allCustomers.length - 1 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, allCustomers.length, isFetchingNextPage, virtualizer.getVirtualItems()]);

  return (
    <div className="flex flex-col h-full space-y-4 max-w-3xl mx-auto">
      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-xl pb-3 -mx-3 px-3 md:-mx-4 md:px-4 lg:-mx-6 lg:px-6 pt-1">
        <div className="hidden md:flex items-center justify-between mb-3">
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-400" /> Customers
            </h1>
            <p className="text-slate-400 text-[11px] mt-0.5">
              {data?.pages[0]?.meta?.total ? `${data.pages[0].meta.total} total customers` : 'Loading...'}
            </p>
          </div>
          <Link href="/customers/new" className="btn-primary text-sm flex items-center gap-2">
            New Customer
          </Link>
        </div>

        {/* Search Row */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by name or phone..."
              className="input pl-9 text-sm h-10 w-full"
            />
          </div>
          <Link href="/customers/new" className="btn-primary h-10 px-3 flex md:hidden items-center justify-center shrink-0">
            <Plus className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Virtualized List ── */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 text-sky-400 animate-spin" />
        </div>
      ) : allCustomers.length === 0 ? (
        <div className="card py-16 text-center border-dashed">
          <Users className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400 font-medium">No customers yet</p>
          <Link href="/customers/new" className="btn-primary inline-flex items-center gap-2 mt-4">
            Add Customer
          </Link>
        </div>
      ) : (
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const isLoaderRow = virtualRow.index > allCustomers.length - 1;
            const customer = allCustomers[virtualRow.index];

            if (isLoaderRow) {
              return (
                <div
                  key={virtualRow.index}
                  ref={virtualizer.measureElement}
                  data-index={virtualRow.index}
                  className="flex justify-center py-4 absolute top-0 left-0 w-full"
                  style={{ transform: `translateY(${virtualRow.start}px)` }}
                >
                  <Loader2 className="w-5 h-5 text-sky-400 animate-spin" />
                </div>
              );
            }

            const tier = TIER_CONFIG[customer.tier] ?? TIER_CONFIG.REGULAR;
            const TierIcon = tier.icon;

            return (
              <div
                key={virtualRow.index}
                ref={virtualizer.measureElement}
                data-index={virtualRow.index}
                className="absolute top-0 left-0 w-full px-0.5 pb-2"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <div
                  onClick={() => router.push(`/customers/${customer.id}`)}
                  className="card p-3 hover:border-sky-500/30 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                      <span className="text-sky-400 text-sm font-bold">
                        {customer.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-medium text-sm truncate max-w-[150px] leading-tight">
                        {customer.name}
                      </span>
                      <span className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-slate-500" /> {customer.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                      <span className={`badge border text-[10px] px-2 py-0.5 ${tier.color} flex items-center gap-1`}>
                        {TierIcon && <TierIcon className="w-3 h-3" />}
                        {tier.label}
                      </span>
                      <span className="text-slate-500 text-[10px] mt-1">
                        {customer._count?.orders ?? customer.totalOrders ?? 0} Orders
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
