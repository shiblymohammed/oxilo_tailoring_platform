'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsApi, shopApi } from '@/lib/api';
import { useState } from 'react';
import { toast } from 'sonner';
import { Settings, Plus, Loader2, Tag, Scissors, Check, X, Pencil, Store, SlidersHorizontal } from 'lucide-react';
import SchemaBuilderModal from '@/components/SchemaBuilderModal';

function EditableRow({
  label,
  value,
  valuePrefix = '',
  valueSuffix = '',
  onSave,
  onConfigureSchema,
}: {
  label: string;
  value: string | number;
  valuePrefix?: string;
  valueSuffix?: string;
  onSave: (newLabel: string, newValue: string) => Promise<void>;
  onConfigureSchema?: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [editLabel, setEditLabel] = useState(String(label));
  const [editValue, setEditValue] = useState(String(value));
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(editLabel, editValue);
      setEditing(false);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditLabel(String(label));
    setEditValue(String(value));
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="flex items-center gap-2 py-2 border-b border-slate-700/30 last:border-0">
        <input
          value={editLabel}
          onChange={(e) => setEditLabel(e.target.value)}
          className="input flex-1 py-1.5 text-sm"
          placeholder="Name"
          autoFocus
        />
        <div className="relative w-32 shrink-0">
          {valuePrefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">{valuePrefix}</span>
          )}
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            type="number"
            inputMode="decimal"
            pattern="[0-9]*"
            min="0"
            className={`input py-1.5 text-sm w-full ${valuePrefix ? 'pl-6' : ''}`}
            placeholder="Price"
          />
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="p-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
        >
          {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={handleCancel}
          className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between py-2.5 border-b border-slate-700/30 last:border-0 group">
      <p className="text-sm text-white">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-sky-400 font-medium text-sm">
          {valuePrefix}{Number(value).toFixed(0)}{valueSuffix}
        </span>
        <button
          onClick={() => setEditing(true)}
          className="opacity-0 group-hover:opacity-100 p-1 rounded text-slate-500 hover:text-slate-200 transition-all"
          title="Edit"
        >
          <Pencil className="w-3 h-3" />
        </button>
        {onConfigureSchema && (
          <button
            onClick={onConfigureSchema}
            className="opacity-0 group-hover:opacity-100 p-1 rounded text-sky-500 hover:text-sky-400 hover:bg-sky-500/10 transition-all ml-1"
            title="Configure Schema"
          >
            <SlidersHorizontal className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const qc = useQueryClient();

  const { data: garmentTypes, isLoading: gtLoading } = useQuery({
    queryKey: ['garment-types'],
    queryFn: settingsApi.garmentTypes,
  });

  const { data: pricingRules, isLoading: prLoading } = useQuery({
    queryKey: ['pricing-rules'],
    queryFn: settingsApi.pricingRules,
  });

  const { data: shop } = useQuery({ queryKey: ['shop'], queryFn: shopApi.get });

  const [newGarment, setNewGarment] = useState({ name: '', basePrice: '' });
  const [newAddon, setNewAddon]     = useState({ name: '', extraCost: '' });
  const [upiId, setUpiId]           = useState('');
  const [upiSaving, setUpiSaving]   = useState(false);
  const [selectedGarment, setSelectedGarment] = useState<any>(null);

  // Sync UPI ID from backend
  if (shop?.upiId && upiId === '') setUpiId(shop.upiId);

  const addGarment = useMutation({
    mutationFn: () => settingsApi.createGarmentType({
      name: newGarment.name,
      basePrice: parseFloat(newGarment.basePrice),
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['garment-types'] });
      setNewGarment({ name: '', basePrice: '' });
      toast.success('Garment type added!');
    },
    onError: () => toast.error('Failed to add garment type'),
  });

  const updateGarment = async (id: string, name: string, basePrice: string) => {
    try {
      await settingsApi.updateGarmentType(id, { name, basePrice: parseFloat(basePrice) });
      qc.invalidateQueries({ queryKey: ['garment-types'] });
      toast.success('Price updated!');
    } catch {
      toast.error('Failed to update');
      throw new Error('Failed');
    }
  };

  const updateGarmentSchema = async (schema: any) => {
    if (!selectedGarment) return;
    try {
      await settingsApi.updateGarmentType(selectedGarment.id, { measurementSchema: schema });
      qc.invalidateQueries({ queryKey: ['garment-types'] });
      toast.success('Schema saved!');
    } catch {
      toast.error('Failed to save schema');
      throw new Error('Failed');
    }
  };

  const addAddon = useMutation({
    mutationFn: () => settingsApi.createPricingRule({
      name: newAddon.name,
      extraCost: parseFloat(newAddon.extraCost),
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['pricing-rules'] });
      setNewAddon({ name: '', extraCost: '' });
      toast.success('Add-on added!');
    },
    onError: () => toast.error('Failed to add add-on'),
  });

  const updateAddon = async (id: string, name: string, extraCost: string) => {
    try {
      await settingsApi.updatePricingRule(id, { name, extraCost: parseFloat(extraCost) });
      qc.invalidateQueries({ queryKey: ['pricing-rules'] });
      toast.success('Price updated!');
    } catch {
      toast.error('Failed to update');
      throw new Error('Failed');
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-xl pb-3 -mx-3 px-3 md:-mx-4 md:px-4 lg:-mx-6 lg:px-6 pt-1 mb-2 border-b border-slate-800/50">
        <div className="hidden md:block">
          <h1 className="text-lg font-bold text-white flex items-center gap-2">
            <Settings className="w-4 h-4 text-sky-400" /> Settings
          </h1>
          <p className="text-slate-400 text-[11px] mt-0.5">
            Configure garment types and pricing — hover any row to edit
          </p>
        </div>
      </div>

      {/* Garment Types */}
      <div className="card space-y-2">
        <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-1">
          <h2 className="text-sm font-semibold text-white flex items-center gap-2">
            <Scissors className="w-4 h-4 text-sky-400" /> Garment Types
          </h2>
          <p className="text-slate-500 text-xs">Base price (₹) — hover to edit</p>
        </div>

        {gtLoading ? (
          <div className="flex justify-center py-6">
            <Loader2 className="w-5 h-5 text-sky-400 animate-spin" />
          </div>
        ) : (
          <div>
            {garmentTypes?.map((g: any) => (
              <EditableRow
                key={g.id}
                label={g.name}
                value={g.basePrice}
                valuePrefix="₹"
                onSave={(name, basePrice) => updateGarment(g.id, name, basePrice)}
                onConfigureSchema={() => setSelectedGarment(g)}
              />
            ))}
          </div>
        )}

        {/* Add new */}
        <div className="flex gap-2 pt-3 border-t border-slate-700/50">
          <input
            value={newGarment.name}
            onChange={(e) => setNewGarment(p => ({ ...p, name: e.target.value }))}
            className="input flex-1 py-2 text-sm"
            placeholder="New garment (e.g. Kurta)"
            onKeyDown={(e) => e.key === 'Enter' && newGarment.name && newGarment.basePrice && addGarment.mutate()}
          />
          <div className="relative w-32 shrink-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">₹</span>
            <input
              value={newGarment.basePrice}
              onChange={(e) => setNewGarment(p => ({ ...p, basePrice: e.target.value }))}
              type="number"
              inputMode="decimal"
              pattern="[0-9]*"
              className="input py-2 text-sm pl-6 w-full"
              placeholder="Price"
            />
          </div>
          <button
            onClick={() => addGarment.mutate()}
            disabled={!newGarment.name || !newGarment.basePrice || addGarment.isPending}
            className="btn-primary px-3 flex items-center gap-1.5 text-sm shrink-0"
          >
            {addGarment.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </div>
      </div>

      {/* Pricing Add-ons */}
      <div className="card space-y-2">
        <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-1">
          <h2 className="text-sm font-semibold text-white flex items-center gap-2">
            <Tag className="w-4 h-4 text-sky-400" /> Pricing Add-ons
          </h2>
          <p className="text-slate-500 text-xs">Extra charge per item — hover to edit</p>
        </div>

        {prLoading ? (
          <div className="flex justify-center py-6">
            <Loader2 className="w-5 h-5 text-sky-400 animate-spin" />
          </div>
        ) : (
          <div>
            {pricingRules?.map((r: any) => (
              <EditableRow
                key={r.id}
                label={r.name}
                value={r.extraCost}
                valuePrefix="+"
                valueSuffix="₹"
                onSave={(name, extraCost) => updateAddon(r.id, name, extraCost)}
              />
            ))}
          </div>
        )}

        {/* Add new */}
        <div className="flex gap-2 pt-3 border-t border-slate-700/50">
          <input
            value={newAddon.name}
            onChange={(e) => setNewAddon(p => ({ ...p, name: e.target.value }))}
            className="input flex-1 py-2 text-sm"
            placeholder="New add-on (e.g. Embroidery)"
            onKeyDown={(e) => e.key === 'Enter' && newAddon.name && newAddon.extraCost && addAddon.mutate()}
          />
          <div className="relative w-32 shrink-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">+₹</span>
            <input
              value={newAddon.extraCost}
              onChange={(e) => setNewAddon(p => ({ ...p, extraCost: e.target.value }))}
              type="number"
              inputMode="decimal"
              pattern="[0-9]*"
              className="input py-2 text-sm pl-8 w-full"
              placeholder="Extra"
            />
          </div>
          <button
            onClick={() => addAddon.mutate()}
            disabled={!newAddon.name || !newAddon.extraCost || addAddon.isPending}
            className="btn-primary px-3 flex items-center gap-1.5 text-sm shrink-0"
          >
            {addAddon.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="card space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-700 pb-3 mb-1">
          <Store className="w-4 h-4 text-sky-400" />
          <h2 className="text-sm font-semibold text-white">Payment Settings</h2>
        </div>

        <div>
          <label className="label">UPI ID <span className="text-slate-500 font-normal">(for payment QR on order completion)</span></label>
          <div className="flex gap-2">
            <input
              value={upiId}
              onChange={e => setUpiId(e.target.value)}
              type="email"
              inputMode="email"
              className="input flex-1 text-sm h-10"
              placeholder="yourname@upi or yourname@paytm"
            />
            <button
              onClick={async () => {
                setUpiSaving(true);
                try {
                  await shopApi.update({ upiId });
                  qc.invalidateQueries({ queryKey: ['shop'] });
                  toast.success('UPI ID saved!');
                } catch { toast.error('Failed to save'); }
                finally { setUpiSaving(false); }
              }}
              disabled={upiSaving || !upiId}
              className="btn-primary px-4 flex items-center gap-1.5 text-sm h-10 shrink-0"
            >
              {upiSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
              Save
            </button>
          </div>
          {upiId && (
            <div className="mt-3 flex items-center gap-3 bg-[#0f172a] rounded-lg p-3">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(`upi://pay?pa=${upiId}&cu=INR`)}&size=80x80`}
                alt="UPI QR preview"
                className="w-16 h-16 rounded bg-white p-1"
              />
              <div>
                <p className="text-sm text-white font-medium">{upiId}</p>
                <p className="text-xs text-slate-400 mt-0.5">Customers will see this QR when paying on delivery</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hint */}
      <p className="text-slate-600 text-xs text-center">
        💡 Prices set here are defaults — you can always override on individual orders
      </p>

      <SchemaBuilderModal 
        isOpen={!!selectedGarment} 
        onClose={() => setSelectedGarment(null)} 
        garmentType={selectedGarment} 
        onSave={updateGarmentSchema} 
      />
    </div>
  );
}
