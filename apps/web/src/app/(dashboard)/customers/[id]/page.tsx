'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { customersApi, measurementsApi } from '@/lib/api';
import { formatDate, formatCurrency, ORDER_STATUS_COLORS } from '@/lib/utils';
import {
  ArrowLeft, Phone, Mail, MapPin, Crown, Star, ShoppingBag,
  Ruler, Plus, Loader2, Calendar, MessageCircle, Pencil,
} from 'lucide-react';
import { useState } from 'react';
import { MeasurementModal, type MeasurementProfile } from '@/components/customers/MeasurementModal';
import { MeasurementCard } from '@/components/customers/MeasurementCard';

export default function CustomerProfilePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [showMeasurement, setShowMeasurement] = useState(false);
  const [editingMeasurement, setEditingMeasurement] = useState<MeasurementProfile | null>(null);

  const { data: customer, isLoading, refetch } = useQuery({
    queryKey: ['customer', id],
    queryFn: () => customersApi.get(id),
  });

  const { data: measurements } = useQuery({
    queryKey: ['measurements', id],
    queryFn: () => measurementsApi.forCustomer(id),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-6 h-6 text-sky-400 animate-spin" />
      </div>
    );
  }

  if (!customer) return <p className="text-red-400">Customer not found</p>;

  const tierColors: Record<string, string> = {
    VIP:      'bg-purple-500/10 text-purple-400 border-purple-500/20',
    FREQUENT: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    REGULAR:  'bg-slate-500/10 text-slate-400 border-slate-500/20',
    INACTIVE: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  return (
    <div className="space-y-5 max-w-5xl">
      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-xl pb-3 -mx-3 px-3 md:-mx-4 md:px-4 lg:-mx-6 lg:px-6 pt-1 mb-4 border-b border-slate-800/50">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <button onClick={() => router.back()} className="btn-ghost p-2 rounded-lg -ml-2">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-sm shrink-0">
                {customer.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-white leading-tight truncate max-w-[150px] sm:max-w-xs">{customer.name}</h1>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`badge border text-[10px] px-1.5 py-0 ${tierColors[customer.tier]}`}>{customer.tier}</span>
                  <span className="text-slate-500 text-[10px] hidden sm:inline">Joined {formatDate(customer.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Link href={`/customers/${customer.id}/edit`} className="btn-ghost p-2 rounded-lg shrink-0">
              <Pencil className="w-4 h-4 text-slate-400" />
            </Link>
            <Link href={`/orders/new?customerId=${customer.id}`} className="btn-primary p-2 sm:px-3 rounded-lg flex items-center gap-1.5 text-xs font-semibold shrink-0">
              <Plus className="w-4 h-4" /> <span className="hidden sm:inline">New Order</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left — Contact & Info */}
        <div className="space-y-4">
          <div className="card space-y-3">
            <h2 className="text-sm font-semibold text-slate-300">Contact Info</h2>
            {customer.phone && (
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" /> {customer.phone}
              </div>
            )}
            {customer.whatsapp && (
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MessageCircle className="w-4 h-4 text-green-500 shrink-0" /> {customer.whatsapp}
              </div>
            )}
            {customer.email && (
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" /> {customer.email}
              </div>
            )}
            {customer.address && (
              <div className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" /> {customer.address}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="card space-y-3">
            <h2 className="text-sm font-semibold text-slate-300">Stats</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Total Orders', value: customer._count?.orders ?? customer.totalOrders ?? 0, icon: ShoppingBag },
                { label: 'Measurements', value: measurements?.length ?? 0, icon: Ruler },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0f172a] rounded-lg p-3 text-center">
                  <stat.icon className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                  <p className="text-white font-bold text-xl">{stat.value}</p>
                  <p className="text-slate-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Special Dates */}
          {(customer.birthday || customer.anniversary) && (
            <div className="card space-y-2">
              <h2 className="text-sm font-semibold text-slate-300">Special Dates</h2>
              {customer.birthday && (
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Calendar className="w-4 h-4 text-pink-400" />
                  Birthday: {formatDate(customer.birthday)}
                </div>
              )}
              {customer.anniversary && (
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  Anniversary: {formatDate(customer.anniversary)}
                </div>
              )}
            </div>
          )}

          {customer.notes && (
            <div className="card">
              <h2 className="text-sm font-semibold text-slate-300 mb-2">Notes</h2>
              <p className="text-slate-400 text-sm">{customer.notes}</p>
            </div>
          )}
        </div>

        {/* Right — Measurements + Orders */}
        <div className="lg:col-span-2 space-y-4">
          {/* Measurements */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <Ruler className="w-4 h-4 text-sky-400" /> Measurements
              </h2>
              <button onClick={() => setShowMeasurement(true)} className="btn-ghost text-xs flex items-center gap-1 py-1.5">
                <Plus className="w-3 h-3" /> Add
              </button>
            </div>

            {!measurements || measurements.length === 0 ? (
              <div className="py-6 text-center">
                <Ruler className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-slate-500 text-sm">No measurements yet</p>
                <button onClick={() => setShowMeasurement(true)} className="btn-primary text-xs mt-3 py-1.5 px-3 inline-flex items-center gap-1">
                  <Plus className="w-3 h-3" /> Add Measurements
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {measurements.map((m: any) => (
                  <div key={m.id} className="relative group">
                    <button
                      onClick={() => setEditingMeasurement({ id: m.id, label: m.label, category: m.category, fields: m.fields })}
                      className="absolute top-3 left-3 z-10 opacity-0 group-hover:opacity-100 w-7 h-7 rounded-lg bg-slate-700/80 hover:bg-sky-600 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                      title="Edit measurements"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <MeasurementCard
                      customerName={customer.name}
                      label={m.label}
                      category={m.category}
                      fields={m.fields}
                      date={formatDate(m.updatedAt || m.createdAt)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Orders */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-sky-400" /> Recent Orders
              </h2>
              <Link href={`/orders/new?customerId=${customer.id}`} className="btn-ghost text-xs flex items-center gap-1 py-1.5">
                <Plus className="w-3 h-3" /> New Order
              </Link>
            </div>

            {!customer.orders || customer.orders.length === 0 ? (
              <p className="text-slate-500 text-sm py-4 text-center">No orders yet</p>
            ) : (
              <div className="space-y-2">
                {customer.orders.map((order: any) => (
                  <Link
                    key={order.id}
                    href={`/orders/${order.id}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#0f172a] hover:bg-slate-700/30 transition-colors border border-slate-700/30"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{order.orderNumber}</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {order.items.map((i: any) => i.garmentType?.name).join(', ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`badge border ${ORDER_STATUS_COLORS[order.status]}`}>
                        {order.status.replace(/_/g, ' ')}
                      </span>
                      <p className="text-xs text-slate-500 mt-1">{formatDate(order.createdAt)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Measurement Modal */}
      {showMeasurement && (
        <MeasurementModal
          customerId={id}
          onClose={() => setShowMeasurement(false)}
          onSaved={() => { setShowMeasurement(false); refetch(); }}
        />
      )}

      {/* Edit Measurement Modal */}
      {editingMeasurement && (
        <MeasurementModal
          customerId={id}
          existing={editingMeasurement}
          onClose={() => setEditingMeasurement(null)}
          onSaved={() => { setEditingMeasurement(null); refetch(); }}
        />
      )}
    </div>
  );
}
