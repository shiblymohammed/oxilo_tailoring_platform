'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { customersApi } from '@/lib/api';
import { ArrowLeft, Loader2, User } from 'lucide-react';
import Link from 'next/link';

const schema = z.object({
  name:        z.string().min(1, 'Name is required'),
  phone:       z.string().min(6, 'Phone is required'),
  address:     z.string().optional(),
});
type Form = z.infer<typeof schema>;

export default function NewCustomerPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Form) => {
    try {
      const clean = Object.fromEntries(Object.entries(data).filter(([, v]) => v !== '' && v !== undefined));
      const customer = await customersApi.create(clean);
      toast.success(`${customer.name} added!`);
      router.push(`/customers/${customer.id}`);
    } catch (err: any) {
      toast.error(err?.response?.data?.message ?? 'Failed to create customer');
    }
  };

  return (
    <div className="max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/customers" className="btn-ghost p-2 rounded-lg">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-lg font-bold text-white flex items-center gap-2">
            <User className="w-4 h-4 text-sky-400" /> New Customer
          </h1>
          <p className="text-slate-400 text-[11px] mt-0.5">Fill in the customer details below</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Basic Info */}
        <div className="card space-y-4">
          <h2 className="text-sm font-semibold text-slate-300 border-b border-slate-700 pb-2">Basic Information</h2>

          <div className="space-y-4">
            <div>
              <label className="label">Full Name *</label>
              <input {...register('name')} className="input text-sm h-10" placeholder="Ahmed Khan" />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="label">Phone Number *</label>
              <input {...register('phone')} type="tel" inputMode="tel" className="input text-sm h-10" placeholder="9876543210" />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="label">Place (Address)</label>
              <textarea {...register('address')} rows={2} className="input text-sm resize-none" placeholder="Street, City..." />
            </div>
          </div>
        </div>

        {/* Actions - Sticky Bottom */}
        <div className="sticky bottom-safe pb-4 pt-4 mt-8 bg-gradient-to-t from-[#0f172a] via-[#0f172a] to-transparent z-10 -mx-3 px-3 md:mx-0 md:px-0 md:bg-none md:pt-0">
          <div className="flex gap-3">
            <Link href="/customers" className="btn-ghost flex-1 text-center py-3 bg-[#1e293b] border border-[#334155]">
              Cancel
            </Link>
            <button type="submit" disabled={isSubmitting} className="btn-primary flex-[2] flex items-center justify-center gap-2 py-3 shadow-xl shadow-sky-500/20">
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {isSubmitting ? 'Saving...' : 'Save Customer'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
