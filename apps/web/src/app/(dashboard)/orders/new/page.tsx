'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { customersApi, ordersApi, settingsApi, shopApi } from '@/lib/api';
import { formatCurrency } from '@/lib/utils';
import { ArrowLeft, Plus, Trash2, Loader2, Search, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { RefPhotoUploader, type RefPhoto } from '@/components/orders/RefPhotoUploader';
import { VoiceNoteRecorder, type VoiceNote } from '@/components/orders/VoiceNoteRecorder';

interface AddOn { id: string; name: string; extraCost: number }
interface OrderItem {
  garmentTypeId: string;
  garmentTypeName: string;
  basePrice: number;
  selectedAddOns: AddOn[];
  measurementProfileId: string;
  notes: string;
  photos: RefPhoto[];
  voiceNote: VoiceNote | null;
}

export default function NewOrderPage() {
  const router = useRouter();
  const params = useSearchParams();
  const prefilledCustomerId = params.get('customerId') ?? '';

  const [customerSearch, setCustomerSearch] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [priority, setPriority] = useState('NORMAL');
  const [notes, setNotes] = useState('');
  const [advancePaid, setAdvancePaid] = useState('');
  const [payMethod, setPayMethod] = useState('CASH');
  const [items, setItems] = useState<OrderItem[]>([]);
  const [expandedItem, setExpandedItem] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);

  const { data: garmentTypes } = useQuery({ queryKey: ['garment-types'], queryFn: settingsApi.garmentTypes });
  const { data: addOns } = useQuery({ queryKey: ['pricing-rules'], queryFn: settingsApi.pricingRules });
  const { data: shop }   = useQuery({ queryKey: ['shop'], queryFn: shopApi.get });
  const { data: customersData } = useQuery({
    queryKey: ['customers-search', customerSearch],
    queryFn: () => customersApi.list({ search: customerSearch, limit: 8 }),
    enabled: customerSearch.length >= 1,
  });
  const { data: customerDetail } = useQuery({
    queryKey: ['customer-detail', selectedCustomer?.id],
    queryFn: () => customersApi.get(selectedCustomer.id),
    enabled: !!selectedCustomer?.id,
  });

  useEffect(() => {
    if (prefilledCustomerId) {
      customersApi.get(prefilledCustomerId).then((c) => {
        setSelectedCustomer(c);
        setCustomerSearch(c.name);
      });
    }
  }, [prefilledCustomerId]);

  const selectCustomer = (c: any) => {
    setSelectedCustomer(c);
    setCustomerSearch(c.name);
    setShowCustomerDropdown(false);
    // Update measurement profiles on each item
    setItems(prev => prev.map(item => ({ ...item, measurementProfileId: '' })));
  };

  const addItem = () => {
    setItems(prev => [...prev, {
      garmentTypeId: '',
      garmentTypeName: '',
      basePrice: 0,
      selectedAddOns: [],
      measurementProfileId: '',
      notes: '',
      photos: [],
      voiceNote: null,
    }]);
    setExpandedItem(items.length);
  };

  const removeItem = (idx: number) => setItems(prev => prev.filter((_, i) => i !== idx));

  const setGarmentType = (idx: number, gtId: string) => {
    const gt = garmentTypes?.find((g: any) => g.id === gtId);
    setItems(prev => prev.map((item, i) => i === idx ? {
      ...item,
      garmentTypeId: gtId,
      garmentTypeName: gt?.name ?? '',
      basePrice: Number(gt?.basePrice ?? 0),
      selectedAddOns: [],
    } : item));
  };

  const toggleAddOn = (idx: number, ao: any) => {
    setItems(prev => prev.map((item, i) => {
      if (i !== idx) return item;
      const exists = item.selectedAddOns.find(a => a.id === ao.id);
      return {
        ...item,
        selectedAddOns: exists
          ? item.selectedAddOns.filter(a => a.id !== ao.id)
          : [...item.selectedAddOns, { id: ao.id, name: ao.name, extraCost: Number(ao.extraCost) }],
      };
    }));
  };

  const getItemTotal = (item: OrderItem) =>
    item.basePrice + item.selectedAddOns.reduce((s, ao) => s + ao.extraCost, 0);

  const orderTotal = items.reduce((s, item) => s + getItemTotal(item), 0);
  const advance = parseFloat(advancePaid) || 0;
  const balance = Math.max(0, orderTotal - advance);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomer) return toast.error('Select a customer first');
    if (!deliveryDate) return toast.error('Set a delivery date');
    if (items.length === 0 || items.some(i => !i.garmentTypeId)) return toast.error('Add at least one garment');

    setSubmitting(true);
    try {
      const order = await ordersApi.create({
        customerId: selectedCustomer.id,
        deliveryDate: new Date(deliveryDate).toISOString(),
        priority,
        notes: notes || undefined,
        advancePaid: advance,
        items: items.map(item => ({
          garmentTypeId: item.garmentTypeId,
          measurementProfileId: item.measurementProfileId || undefined,
          quantity: 1,
          unitPrice: item.basePrice,
          addOns: item.selectedAddOns.map(ao => ({ name: ao.name, price: ao.extraCost })),
          notes: JSON.stringify({
            text: item.notes || undefined,
            photos: item.photos.length ? item.photos : undefined,
            voice: item.voiceNote ?? undefined,
          }),
        })),
      });
      toast.success(`Order ${order.orderNumber} created!`);
      router.push(`/orders/${order.id}`);
    } catch (err: any) {
      toast.error(err?.response?.data?.message ?? 'Failed to create order');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/orders" className="btn-ghost p-2 rounded-lg"><ArrowLeft className="w-4 h-4" /></Link>
        <div>
          <h1 className="text-xl font-bold text-white">New Order</h1>
          <p className="text-slate-400 text-sm">Create a new tailoring order</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ── Customer ── */}
        <div className="card space-y-3">
          <h2 className="label-section">Customer</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              value={customerSearch}
              onChange={(e) => { setCustomerSearch(e.target.value); setShowCustomerDropdown(true); }}
              onFocus={() => setShowCustomerDropdown(true)}
              className="input pl-9"
              placeholder="Search customer by name or phone..."
            />
          </div>
          {selectedCustomer && (
            <div className="flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-lg px-3 py-2">
              <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold shrink-0">
                {selectedCustomer.name.charAt(0)}
              </div>
              <p className="text-sm text-sky-300 font-medium">{selectedCustomer.name}</p>
              <p className="text-xs text-sky-500 ml-1">· {selectedCustomer.phone}</p>
            </div>
          )}
          {showCustomerDropdown && customersData?.data?.length > 0 && (
            <div className="absolute z-20 w-full mt-1 bg-[#1e293b] border border-slate-700 rounded-lg overflow-hidden shadow-2xl">
              {customersData.data.map((c: any) => (
                <button key={c.id} type="button" onClick={() => selectCustomer(c)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-700/50 text-left">
                  <div className="w-7 h-7 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 text-xs font-bold shrink-0">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm text-white">{c.name}</p>
                    <p className="text-xs text-slate-400">{c.phone}</p>
                  </div>
                </button>
              ))}
              <Link href={`/customers/new`} className="flex items-center gap-2 px-4 py-2.5 text-sky-400 text-sm hover:bg-slate-700/50 border-t border-slate-700">
                <Plus className="w-3 h-3" /> Add new customer
              </Link>
            </div>
          )}
        </div>

        {/* ── Order Info ── */}
        <div className="card space-y-3">
          <h2 className="label-section">Order Details</h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Delivery Date *</label>
              <input value={deliveryDate} onChange={e => setDeliveryDate(e.target.value)} type="date" className="input" required />
            </div>
            <div>
              <label className="label">Priority</label>
              <select value={priority} onChange={e => setPriority(e.target.value)} className="input">
                <option value="NORMAL">Normal</option>
                <option value="URGENT">🔴 Urgent</option>
                <option value="WEDDING">💒 Wedding</option>
                <option value="FESTIVAL">🎉 Festival</option>
                <option value="VIP">⭐ VIP</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">Notes</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2} className="input resize-none" placeholder="Special instructions..." />
          </div>
        </div>

        {/* ── Items ── */}
        <div className="card space-y-3">
          <h2 className="label-section">Garments</h2>

          {items.length === 0 && (
            <p className="text-slate-500 text-sm text-center py-3">No items yet — add a garment below</p>
          )}

          {items.map((item, idx) => {
            const itemTotal = getItemTotal(item);
            const isExpanded = expandedItem === idx;
            return (
              <div key={idx} className="border border-slate-700/50 rounded-xl overflow-hidden">
                {/* Item header — div not button to avoid button-in-button nesting */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setExpandedItem(isExpanded ? null : idx)}
                  onKeyDown={e => e.key === 'Enter' && setExpandedItem(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-[#0f172a] hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 font-medium">#{idx + 1}</span>
                    <span className="text-sm text-white font-medium">
                      {item.garmentTypeName || <span className="text-slate-500">Select garment...</span>}
                    </span>
                    {item.selectedAddOns.length > 0 && (
                      <span className="badge bg-sky-500/10 text-sky-400 text-xs">+{item.selectedAddOns.length} add-ons</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {itemTotal > 0 && <span className="text-sky-400 font-bold text-sm">{formatCurrency(itemTotal)}</span>}
                    <button type="button" onClick={(e) => { e.stopPropagation(); removeItem(idx); }}
                      className="text-red-400 hover:text-red-300 p-1 rounded">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-3 space-y-3 border-t border-slate-700/50">
                    {/* Garment type */}
                    <div>
                      <label className="label text-xs">Garment Type *</label>
                      <select
                        value={item.garmentTypeId}
                        onChange={e => setGarmentType(idx, e.target.value)}
                        className="input"
                      >
                        <option value="">Select garment...</option>
                        {garmentTypes?.map((g: any) => (
                          <option key={g.id} value={g.id}>{g.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Base price — read only */}
                    {item.basePrice > 0 && (
                      <div className="flex items-center justify-between bg-slate-800/50 rounded-lg px-3 py-2">
                        <span className="text-xs text-slate-400">Base price</span>
                        <span className="text-white font-medium text-sm">{formatCurrency(item.basePrice)}</span>
                      </div>
                    )}

                    {/* Add-ons */}
                    {item.garmentTypeId && addOns && addOns.length > 0 && (
                      <div>
                        <label className="label text-xs mb-2 block">Add-ons (optional)</label>
                        <div className="grid grid-cols-2 gap-2">
                          {addOns.map((ao: any) => {
                            const checked = item.selectedAddOns.some(a => a.id === ao.id);
                            return (
                              <button
                                key={ao.id}
                                type="button"
                                onClick={() => toggleAddOn(idx, ao)}
                                className={`flex items-center justify-between px-3 py-2 rounded-lg border text-sm transition-all ${
                                  checked
                                    ? 'border-sky-500/50 bg-sky-500/10 text-sky-300'
                                    : 'border-slate-700 bg-slate-800/30 text-slate-400 hover:border-slate-600'
                                }`}
                              >
                                <span className="truncate">{ao.name}</span>
                                <span className="shrink-0 ml-1 font-medium">
                                  +{formatCurrency(ao.extraCost)}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Item total */}
                    {item.selectedAddOns.length > 0 && (
                      <div className="flex items-center justify-between bg-sky-500/5 border border-sky-500/20 rounded-lg px-3 py-2">
                        <span className="text-xs text-slate-400">Item Total</span>
                        <span className="text-sky-400 font-bold text-sm">{formatCurrency(itemTotal)}</span>
                      </div>
                    )}

                    {/* Measurement profile */}
                    {customerDetail?.measurements?.length > 0 && (
                      <div>
                        <label className="label text-xs">Measurement Profile</label>
                        <select
                          value={item.measurementProfileId}
                          onChange={e => setItems(prev => prev.map((it, i) => i === idx ? { ...it, measurementProfileId: e.target.value } : it))}
                          className="input"
                        >
                          <option value="">No profile selected</option>
                          {customerDetail.measurements.map((m: any) => (
                            <option key={m.id} value={m.id}>{m.label} ({m.category})</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Notes */}
                    <div>
                      <label className="label text-xs">Item Notes</label>
                      <input
                        value={item.notes}
                        onChange={e => setItems(prev => prev.map((it, i) => i === idx ? { ...it, notes: e.target.value } : it))}
                        className="input text-sm"
                        placeholder="e.g. deep neck, embroidery on collar..."
                      />
                    </div>

                    {/* Reference Photos */}
                    <RefPhotoUploader
                      photos={item.photos}
                      onChange={photos => setItems(prev => prev.map((it, i) => i === idx ? { ...it, photos } : it))}
                    />

                    {/* Voice Note */}
                    <div>
                      <label className="label text-xs flex items-center gap-1.5">🎙️ Voice Note</label>
                      <VoiceNoteRecorder
                        voiceNote={item.voiceNote}
                        onChange={vn => setItems(prev => prev.map((it, i) => i === idx ? { ...it, voiceNote: vn } : it))}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <button type="button" onClick={addItem}
            className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-slate-700 rounded-xl text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-all text-sm">
            <Plus className="w-4 h-4" /> Add Garment
          </button>
        </div>

        {/* ── Payment ── */}
        {orderTotal > 0 && (
          <div className="card space-y-3">
            <h2 className="label-section">Advance Payment</h2>
            <div className="bg-[#0f172a] rounded-xl p-4 space-y-2 mb-3">
              {items.map((item, i) => item.garmentTypeId && (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-slate-400">{item.garmentTypeName}
                    {item.selectedAddOns.length > 0 && <span className="text-xs text-slate-600 ml-1">+ {item.selectedAddOns.map(a => a.name).join(', ')}</span>}
                  </span>
                  <span className="text-white">{formatCurrency(getItemTotal(item))}</span>
                </div>
              ))}
              <div className="flex justify-between text-base font-bold border-t border-slate-700 pt-2 mt-2">
                <span className="text-slate-300">Total</span>
                <span className="text-white">{formatCurrency(orderTotal)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Advance Paid (₹)</label>
                <input value={advancePaid} onChange={e => setAdvancePaid(e.target.value)}
                  type="number" inputMode="decimal" pattern="[0-9]*" min="0" max={orderTotal} className="input" placeholder="0" />
              </div>
              <div>
                <label className="label">Payment Mode</label>
                <div className="flex gap-2">
                  {['CASH', 'UPI'].map(m => (
                    <button key={m} type="button" onClick={() => setPayMethod(m)}
                      className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                        payMethod === m ? 'border-sky-500 bg-sky-500/10 text-sky-400' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>{m === 'UPI' ? '📱 UPI / QR' : m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {advance > 0 && (
              <div className="flex justify-between text-sm bg-amber-500/5 border border-amber-500/20 rounded-lg px-3 py-2">
                <span className="text-slate-400">Balance due on delivery</span>
                <span className="text-amber-400 font-bold">{formatCurrency(balance)}</span>
              </div>
            )}

            {/* UPI QR Code */}
            {payMethod === 'UPI' && (
              <div className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 mt-2">
                {shop?.upiId ? (
                  <>
                    <p className="text-slate-800 text-sm font-semibold mb-1">📱 Scan to Pay via UPI</p>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(`upi://pay?pa=${shop.upiId}&pn=${encodeURIComponent(shop.name ?? 'Shop')}&am=${(advance || orderTotal).toFixed(2)}&cu=INR`)}&size=200x200`}
                      alt="UPI QR" className="w-44 h-44 rounded-lg"
                    />
                    <p className="text-slate-700 text-xs font-medium">{shop.upiId}</p>
                    <p className="text-slate-500 text-xs">
                      {advance > 0
                        ? `Pay advance: ${formatCurrency(advance)}`
                        : `Pay full amount: ${formatCurrency(orderTotal)}`
                      }
                    </p>
                  </>
                ) : (
                  <p className="text-amber-600 text-xs text-center">⚠️ Add UPI ID in Settings → Payment Settings to show QR</p>
                )}
              </div>
            )}
          </div>
        )}

        <div className="sticky bottom-safe pb-4 pt-4 mt-8 bg-gradient-to-t from-[#0f172a] via-[#0f172a] to-transparent z-10 -mx-3 px-3 md:mx-0 md:px-0 md:bg-none md:pt-0">
          <div className="flex gap-3">
            <Link href="/orders" className="btn-ghost flex-1 text-center py-3 bg-[#1e293b] border border-[#334155]">Cancel</Link>
            <button type="submit" disabled={submitting}
              className="btn-primary flex-[2] flex items-center justify-center gap-2 py-3 shadow-xl shadow-sky-500/20">
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {submitting ? 'Creating...' : `Create Order${orderTotal > 0 ? ` · ${formatCurrency(orderTotal)}` : ''}`}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
