'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { expensesApi } from '@/lib/api';
import { formatCurrency, formatDate } from '@/lib/utils';
import { useState } from 'react';
import { toast } from 'sonner';
import { Plus, Loader2, Wallet, X, TrendingDown } from 'lucide-react';

const CATEGORIES = ['THREAD','ELECTRICITY','SALARY','FABRIC','RENT','EQUIPMENT','OTHER'];
const CAT_COLORS: Record<string,string> = {
  THREAD: 'bg-blue-500/10 text-blue-400', ELECTRICITY: 'bg-yellow-500/10 text-yellow-400',
  SALARY: 'bg-green-500/10 text-green-400', FABRIC: 'bg-pink-500/10 text-pink-400',
  RENT: 'bg-red-500/10 text-red-400', EQUIPMENT: 'bg-orange-500/10 text-orange-400',
  OTHER: 'bg-slate-500/10 text-slate-400',
};

export default function ExpensesPage() {
  const qc = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ category: 'OTHER', amount: '', description: '', date: new Date().toISOString().slice(0,10) });

  const { data: expenses, isLoading } = useQuery({ queryKey: ['expenses'], queryFn: expensesApi.list });

  const mutation = useMutation({
    mutationFn: () => expensesApi.create({ ...form, amount: parseFloat(form.amount), date: new Date(form.date).toISOString() }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['expenses'] });
      setForm({ category: 'OTHER', amount: '', description: '', date: new Date().toISOString().slice(0,10) });
      setShowForm(false);
      toast.success('Expense added!');
    },
    onError: () => toast.error('Failed to add expense'),
  });

  const set = (k: string) => (e: React.ChangeEvent<any>) => setForm(p => ({ ...p, [k]: e.target.value }));

  // Totals by category
  const totals = (expenses ?? []).reduce((acc: Record<string,number>, e: any) => {
    acc[e.category] = (acc[e.category] ?? 0) + Number(e.amount);
    return acc;
  }, {});
  const grandTotal = Object.values(totals).reduce((s: number, v: any) => s + v, 0);

  return (
    <div className="space-y-5 max-w-4xl">
      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-xl pb-3 -mx-3 px-3 md:-mx-4 md:px-4 lg:-mx-6 lg:px-6 pt-1 mb-2 border-b border-slate-800/50">
        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <Wallet className="w-4 h-4 text-sky-400" /> Expenses
            </h1>
            <p className="text-slate-400 text-[11px] mt-0.5">Track shop costs and overheads</p>
          </div>
          <button onClick={() => setShowForm(true)} className="btn-primary text-sm flex items-center gap-1.5 px-3 ml-auto md:ml-0">
            <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="card col-span-2 md:col-span-1 flex items-center gap-3 bg-red-500/5 border-red-500/20">
          <TrendingDown className="w-8 h-8 text-red-400 shrink-0" />
          <div>
            <p className="text-slate-400 text-xs">Total Spent</p>
            <p className="text-white font-bold text-lg">{formatCurrency(grandTotal)}</p>
          </div>
        </div>
        {Object.entries(totals).slice(0,3).map(([cat, total]) => (
          <div key={cat} className="card">
            <p className={`badge ${CAT_COLORS[cat]} text-xs mb-1`}>{cat}</p>
            <p className="text-white font-bold">{formatCurrency(total as number)}</p>
          </div>
        ))}
      </div>

      {/* Expense list */}
      <div className="card overflow-hidden p-0">
        <div className="px-4 py-3 border-b border-slate-700">
          <h2 className="text-sm font-semibold text-slate-200">All Expenses</h2>
        </div>
        {isLoading ? (
          <div className="flex justify-center py-10"><Loader2 className="w-5 h-5 text-sky-400 animate-spin" /></div>
        ) : !expenses?.length ? (
          <div className="py-12 text-center">
            <Wallet className="w-10 h-10 text-slate-700 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">No expenses yet</p>
            <button onClick={() => setShowForm(true)} className="btn-primary text-xs mt-3 px-4 py-1.5 inline-flex items-center gap-1">
              <Plus className="w-3 h-3" /> Add First Expense
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-700/50">
            {expenses.map((e: any) => (
              <div key={e.id} className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className={`badge ${CAT_COLORS[e.category]} text-xs`}>{e.category}</span>
                  <div>
                    <p className="text-sm text-white">{e.description || e.category}</p>
                    <p className="text-xs text-slate-500">{formatDate(e.date)}</p>
                  </div>
                </div>
                <span className="text-red-400 font-semibold text-sm">-{formatCurrency(e.amount)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Expense Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1e293b] border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
              <h2 className="text-base font-bold text-white">Add Expense</h2>
              <button onClick={() => setShowForm(false)} className="btn-ghost p-1.5 rounded-lg"><X className="w-4 h-4" /></button>
            </div>
            <form onSubmit={e => { e.preventDefault(); mutation.mutate(); }} className="p-5 space-y-3">
              <div>
                <label className="label">Category</label>
                <select value={form.category} onChange={set('category')} className="input">
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Amount (₹) *</label>
                  <input value={form.amount} onChange={set('amount')} type="number" inputMode="decimal" pattern="[0-9]*" min="0" step="0.01" className="input" required />
                </div>
                <div>
                  <label className="label">Date</label>
                  <input value={form.date} onChange={set('date')} type="date" className="input" />
                </div>
              </div>
              <div>
                <label className="label">Description</label>
                <input value={form.description} onChange={set('description')} className="input" placeholder="What was this expense for?" />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowForm(false)} className="btn-ghost flex-1 py-3 bg-[#1e293b] border border-[#334155]">Cancel</button>
                <button type="submit" disabled={mutation.isPending || !form.amount} className="btn-primary flex-[2] flex items-center justify-center gap-2 py-3 shadow-xl shadow-sky-500/20">
                  {mutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
