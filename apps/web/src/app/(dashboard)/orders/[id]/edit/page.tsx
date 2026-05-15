'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ordersApi } from '@/lib/api';
import { ArrowLeft, Loader2, Save } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const PRIORITIES = ['NORMAL','URGENT','WEDDING','FESTIVAL','VIP'];

export default function EditOrderPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const qc = useQueryClient();
  const [initialized, setInitialized] = useState(false);
  const [form, setForm] = useState({ notes: '', deliveryDate: '', priority: 'NORMAL' });

  const { data: order, isLoading } = useQuery({
    queryKey: ['order', id],
    queryFn: () => ordersApi.get(id),
  });

  if (order && !initialized) {
    setForm({
      notes:        order.notes ?? '',
      deliveryDate: order.deliveryDate ? new Date(order.deliveryDate).toISOString().slice(0,10) : '',
      priority:     order.priority ?? 'NORMAL',
    });
    setInitialized(true);
  }

  const mutation = useMutation({
    mutationFn: () => ordersApi.update(id, {
      notes:       form.notes || undefined,
      deliveryDate: form.deliveryDate ? new Date(form.deliveryDate).toISOString() : undefined,
      priority:    form.priority,
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['order', id] });
      toast.success('Order updated!');
      router.push(`/orders/${id}`);
    },
    onError: () => toast.error('Failed to update order'),
  });

  if (isLoading) return <div className="flex justify-center py-32"><Loader2 className="w-6 h-6 text-sky-400 animate-spin" /></div>;
  if (!order) return <p className="text-red-400 p-4">Order not found</p>;

  return (
    <div className="max-w-xl space-y-5">
      <div className="flex items-center gap-3">
        <Link href={`/orders/${id}`} className="btn-ghost p-2 rounded-lg"><ArrowLeft className="w-4 h-4" /></Link>
        <div>
          <h1 className="text-xl font-bold text-white">Edit Order</h1>
          <p className="text-slate-400 text-sm">{order.orderNumber} · {order.customer?.name}</p>
        </div>
      </div>

      <form onSubmit={e => { e.preventDefault(); mutation.mutate(); }} className="space-y-4">
        <div className="card space-y-4">
          <h2 className="label-section">Order Details</h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Delivery Date</label>
              <input value={form.deliveryDate} onChange={e => setForm(p => ({ ...p, deliveryDate: e.target.value }))}
                type="date" className="input" />
            </div>
            <div>
              <label className="label">Priority</label>
              <select value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))} className="input">
                {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="label">Notes / Special Instructions</label>
            <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
              rows={4} className="input resize-none" placeholder="e.g. Embroidery on collar, deep neck, use blue lining..." />
          </div>
        </div>

        {/* Items info (read-only for now) */}
        <div className="card space-y-2">
          <h2 className="label-section">Items</h2>
          <p className="text-slate-500 text-xs">To add or remove garment items, duplicate the order and modify the new copy.</p>
          {order.items?.map((item: any) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b border-slate-700/30 last:border-0 text-sm">
              <span className="text-slate-300">{item.garmentType?.name}</span>
              <span className="text-slate-400">₹{Number(item.unitPrice).toFixed(0)}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <Link href={`/orders/${id}`} className="btn-ghost flex-1 text-center py-3">Cancel</Link>
          <button type="submit" disabled={mutation.isPending}
            className="btn-primary flex-1 flex items-center justify-center gap-2 py-3">
            {mutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {mutation.isPending ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
