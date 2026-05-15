'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { customersApi } from '@/lib/api';
import { toast } from 'sonner';
import { ArrowLeft, Loader2, Save } from 'lucide-react';
import Link from 'next/link';

const GENDERS = ['MALE', 'FEMALE', 'OTHER'];

export default function EditCustomerPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const qc = useQueryClient();

  const { data: customer, isLoading } = useQuery({
    queryKey: ['customer', id],
    queryFn: () => customersApi.get(id),
  });

  const [form, setForm] = useState<Record<string, string>>({});
  const [initialized, setInitialized] = useState(false);

  if (customer && !initialized) {
    setForm({
      name:        customer.name        ?? '',
      phone:       customer.phone       ?? '',
      whatsapp:    customer.whatsapp    ?? '',
      email:       customer.email       ?? '',
      address:     customer.address     ?? '',
      gender:      customer.gender      ?? '',
      birthday:    customer.birthday    ? customer.birthday.slice(0, 10) : '',
      anniversary: customer.anniversary ? customer.anniversary.slice(0, 10) : '',
      notes:       customer.notes       ?? '',
    });
    setInitialized(true);
  }

  const mutation = useMutation({
    mutationFn: () => {
      const data: any = { ...form };
      if (!data.birthday)    delete data.birthday;
      if (!data.anniversary) delete data.anniversary;
      if (!data.gender)      delete data.gender;
      if (data.birthday)    data.birthday    = new Date(data.birthday).toISOString();
      if (data.anniversary) data.anniversary = new Date(data.anniversary).toISOString();
      return customersApi.update(id, data);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['customer', id] });
      toast.success('Customer updated!');
      router.push(`/customers/${id}`);
    },
    onError: () => toast.error('Failed to update customer'),
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  if (isLoading) return <div className="flex justify-center py-32"><Loader2 className="w-6 h-6 text-sky-400 animate-spin" /></div>;

  return (
    <div className="max-w-xl space-y-5">
      <div className="flex items-center gap-3">
        <Link href={`/customers/${id}`} className="btn-ghost p-2 rounded-lg"><ArrowLeft className="w-4 h-4" /></Link>
        <div>
          <h1 className="text-xl font-bold text-white">Edit Customer</h1>
          <p className="text-slate-400 text-sm">{customer?.name}</p>
        </div>
      </div>

      <form onSubmit={e => { e.preventDefault(); mutation.mutate(); }} className="space-y-4">
        <div className="card space-y-4">
          <h2 className="label-section">Basic Info</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="label">Full Name *</label>
              <input value={form.name ?? ''} onChange={set('name')} className="input" required />
            </div>
            <div>
              <label className="label">Phone *</label>
              <input value={form.phone ?? ''} onChange={set('phone')} className="input" required />
            </div>
            <div>
              <label className="label">WhatsApp</label>
              <input value={form.whatsapp ?? ''} onChange={set('whatsapp')} className="input" placeholder="If different" />
            </div>
            <div>
              <label className="label">Email</label>
              <input value={form.email ?? ''} onChange={set('email')} type="email" className="input" />
            </div>
            <div>
              <label className="label">Gender</label>
              <select value={form.gender ?? ''} onChange={set('gender')} className="input">
                <option value="">Not specified</option>
                {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="col-span-2">
              <label className="label">Address</label>
              <input value={form.address ?? ''} onChange={set('address')} className="input" />
            </div>
          </div>
        </div>

        <div className="card space-y-4">
          <h2 className="label-section">Special Dates</h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Birthday</label>
              <input value={form.birthday ?? ''} onChange={set('birthday')} type="date" className="input" />
            </div>
            <div>
              <label className="label">Anniversary</label>
              <input value={form.anniversary ?? ''} onChange={set('anniversary')} type="date" className="input" />
            </div>
          </div>
        </div>

        <div className="card space-y-3">
          <h2 className="label-section">Notes</h2>
          <textarea value={form.notes ?? ''} onChange={set('notes')} rows={3} className="input resize-none" placeholder="Any notes about this customer..." />
        </div>

        <div className="flex gap-3">
          <Link href={`/customers/${id}`} className="btn-ghost flex-1 text-center py-3">Cancel</Link>
          <button type="submit" disabled={mutation.isPending} className="btn-primary flex-1 flex items-center justify-center gap-2 py-3">
            {mutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {mutation.isPending ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
