'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ordersApi, shopApi, paymentsApi } from '@/lib/api';
import { formatDate, formatDateTime, formatCurrency } from '@/lib/utils';
import { ArrowLeft, Loader2, Copy, Printer, Phone, CreditCard, ChevronRight, CheckCheck, X, Tag, Clock, Calendar, Pencil, PlusCircle, Mic, Play, Pause, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { MeasurementCard } from '@/components/customers/MeasurementCard';

const STAGES = [
  { status: 'RECEIVED',          label: 'Received',  emoji: '📋' },
  { status: 'MEASUREMENT_TAKEN', label: 'Measured',  emoji: '📏' },
  { status: 'STITCHING',         label: 'Stitching', emoji: '🧵' },
] as const;

const STATUS_LABELS: Record<string, string> = {
  RECEIVED: 'Received', MEASUREMENT_TAKEN: 'Measured', CUTTING: 'Cutting',
  STITCHING: 'Stitching', TRIAL: 'Trial', ALTERATION: 'Alteration',
  READY: 'Ready', DELIVERED: 'Delivered', CANCELLED: 'Cancelled',
};

function upiQrUrl(upiId: string, amount: number, shopName: string, ref: string) {
  const str = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(shopName)}&am=${amount.toFixed(2)}&cu=INR&tn=${encodeURIComponent('Order ' + ref)}`;
  return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(str)}&size=200x200&margin=10`;
}

function Pill({ children, color }: { children: React.ReactNode; color: string }) {
  return <span className={`badge border text-xs ${color}`}>{children}</span>;
}

// ── Parse item notes (plain text OR JSON with photos/voice) ──────────────────
function parseItemNotes(raw: string | null | undefined): { text?: string; photos?: {url:string;key:string}[]; voice?: {url:string;duration:number} } {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null) return parsed;
  } catch { /* plain text */ }
  return { text: raw };
}

// ── Mini voice player (native <audio> — CORS safe) ───────────────────────────
function VoicePlayer({ url, duration }: { url: string; duration: number }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const fmtTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().catch(() => toast.error('Cannot play audio')); setPlaying(true); }
  };

  return (
    <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 mt-2">
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={() => {
          const el = audioRef.current;
          if (el) setProgress(el.currentTime / (el.duration || 1));
        }}
        onEnded={() => { setPlaying(false); setProgress(0); }}
      />
      <button type="button" onClick={toggle}
        className="w-7 h-7 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center shrink-0 transition-colors">
        {playing ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white ml-0.5" />}
      </button>
      <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
        <div className="h-full bg-sky-400 rounded-full transition-all" style={{ width: `${progress * 100}%` }} />
      </div>
      <span className="text-xs text-slate-400 shrink-0 flex items-center gap-1">
        <Mic className="w-3 h-3" />{fmtTime(duration)}
      </span>
    </div>
  );
}

// ── Image lightbox ────────────────────────────────────────────────────────────
function ImageLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}>
      <button onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
        <X className="w-5 h-5 text-white" />
      </button>
      <img src={src} alt="Reference"
        className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl object-contain"
        onClick={e => e.stopPropagation()} />
    </div>
  );
}

// ── Complete Modal ────────────────────────────────────────────────────────────
function CompleteModal({ order, onClose }: { order: any; onClose: () => void }) {
  const qc = useQueryClient();
  const { data: shop } = useQuery({ queryKey: ['shop'], queryFn: shopApi.get });

  const [discount,     setDiscount]    = useState('0');
  const [discountNote, setDiscNote]    = useState('');
  const [payMethod,    setPayMethod]   = useState<'CASH' | 'UPI'>('CASH');
  const [saving,       setSaving]      = useState(false);

  const discNum     = Math.max(0, parseFloat(discount) || 0);
  const balanceDue  = Number(order.balanceDue);
  const afterDisc   = Math.max(0, balanceDue - discNum);
  const [payAmount, setPayAmount] = useState(String(balanceDue));

  // Auto-update pay amount when discount changes
  useEffect(() => { setPayAmount(String(afterDisc)); }, [afterDisc]);

  const payNum    = parseFloat(payAmount) || 0;
  const remaining = Math.max(0, afterDisc - payNum);

  const handleComplete = async () => {
    setSaving(true);
    try {
      await ordersApi.complete(order.id, {
        discountAmount: discNum,
        discountNote:   discountNote || undefined,
        paymentAmount:  payNum,
        paymentMethod:  payMethod,
      });
      qc.invalidateQueries({ queryKey: ['order', order.id] });
      toast.success('Order completed! 🎉');
      onClose();
    } catch { toast.error('Failed to complete order'); }
    finally { setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#1e293b] border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700 bg-green-500/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCheck className="w-5 h-5 text-green-400" /> Complete Order
          </h2>
          <button onClick={onClose} className="btn-ghost p-1.5 rounded-lg"><X className="w-4 h-4" /></button>
        </div>

        <div className="p-5 space-y-4">
          {/* Summary */}
          <div className="bg-[#0f172a] rounded-xl p-4 space-y-2">
            <Row label="Order Total"    value={formatCurrency(order.totalAmount)} valueClass="text-white font-bold" />
            <Row label="Already Paid"   value={formatCurrency(order.advancePaid)} valueClass="text-green-400" />
            <div className="border-t border-slate-700 pt-2">
              <Row label="Balance Due"  value={formatCurrency(balanceDue)} valueClass="text-amber-400 font-bold" />
            </div>
          </div>

          {/* Discount */}
          <div>
            <label className="label">Discount (₹) — optional</label>
            <input value={discount} onChange={e => setDiscount(e.target.value)}
              type="number" min="0" max={balanceDue} className="input" />
            {discNum > 0 && (
              <input value={discountNote} onChange={e => setDiscNote(e.target.value)}
                className="input mt-2 text-sm" placeholder="Reason (e.g. loyal customer)" />
            )}
          </div>

          {discNum > 0 && (
            <div className="flex items-center justify-between bg-green-500/5 border border-green-500/20 rounded-lg px-3 py-2">
              <span className="text-sm text-slate-400">After Discount</span>
              <span className="text-green-400 font-bold">{formatCurrency(afterDisc)}</span>
            </div>
          )}

          {afterDisc > 0 && (
            <>
              <div>
                <label className="label">Payment Mode</label>
                <div className="flex gap-2">
                  {(['CASH','UPI'] as const).map(m => (
                    <button key={m} type="button" onClick={() => setPayMethod(m)}
                      className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-all ${
                        payMethod === m
                          ? m === 'UPI' ? 'border-purple-500 bg-purple-500/10 text-purple-300' : 'border-green-500 bg-green-500/10 text-green-300'
                          : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      {m === 'CASH' ? '💵 Cash' : '📱 UPI'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label">Amount Collecting (₹)</label>
                <input value={payAmount} onChange={e => setPayAmount(e.target.value)}
                  type="number" min="0" max={afterDisc} className="input" />
              </div>

              {/* UPI QR — uses afterDisc */}
              {payMethod === 'UPI' && shop?.upiId && payNum > 0 && (
                <div className="flex flex-col items-center gap-2 bg-white rounded-xl p-4">
                  <img src={upiQrUrl(shop.upiId, payNum, shop.name, order.orderNumber)} alt="UPI QR" className="w-44 h-44 rounded-lg" />
                  <p className="text-slate-700 text-xs font-medium">{shop.upiId}</p>
                  <p className="text-slate-500 text-xs">
                    Scan to pay {formatCurrency(payNum)}
                    {discNum > 0 && <span className="text-green-600 ml-1">(after ₹{discNum} discount)</span>}
                  </p>
                </div>
              )}
              {payMethod === 'UPI' && !shop?.upiId && (
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-xs text-amber-400">
                  ⚠️ Add UPI ID in Settings → Payment Settings to show QR
                </div>
              )}
            </>
          )}

          {remaining > 0 && (
            <div className="flex justify-between text-sm bg-amber-500/5 border border-amber-500/20 rounded-lg px-3 py-2">
              <span className="text-slate-400">Still pending after this</span>
              <span className="text-amber-400 font-bold">{formatCurrency(remaining)}</span>
            </div>
          )}

          <button onClick={handleComplete} disabled={saving}
            className="w-full py-3 flex items-center justify-center gap-2 text-base font-semibold rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all disabled:opacity-50">
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCheck className="w-5 h-5" />}
            {saving ? 'Completing...' : 'Mark as Delivered ✓'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, valueClass = 'text-white' }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-400">{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const qc = useQueryClient();
  const [showComplete, setShowComplete] = useState(false);
  const [showPayment,  setShowPayment]  = useState(false);
  const [lightboxSrc,  setLightboxSrc]  = useState<string | null>(null);

  const { data: order, isLoading } = useQuery({
    queryKey: ['order', id],
    queryFn: () => ordersApi.get(id),
  });

  const { data: shop } = useQuery({ queryKey: ['shop'], queryFn: shopApi.get });

  const handleWhatsAppShare = () => {
    if (!order?.customer?.phone) {
      toast.error('Customer has no phone number');
      return;
    }

    const phone = order.customer.phone.replace(/\D/g, '');
    const shopName = shop?.name || 'OXILO';
    const total = Number(order.totalAmount);
    const advance = Number(order.advancePaid);
    const balance = Number(order.balanceDue);
    
    let msg = `Hello ${order.customer.name},\n\nHere are the details for your Order *#${order.orderNumber}* at ${shopName}:\n`;
    msg += `Total: ₹${total}\n`;
    msg += `Advance: ₹${advance}\n`;
    msg += `Balance Due: *₹${balance}*\n\n`;

    if (balance > 0 && shop?.upiId) {
      const qrUrl = upiQrUrl(shop.upiId, balance, shopName, order.orderNumber);
      msg += `You can pay your balance via UPI by scanning this QR Code:\n`;
      msg += `${qrUrl}\n\n`;
    }

    msg += `Thank you!`;

    window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const statusMut = useMutation({
    mutationFn: (status: string) => ordersApi.updateStatus(id, { status }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['order', id] }); toast.success('Status updated!'); },
    onError: () => toast.error('Failed'),
  });

  const dupMut = useMutation({
    mutationFn: () => ordersApi.duplicate(id),
    onSuccess: (o: any) => { toast.success(`${o.orderNumber} created!`); },
  });

  if (isLoading) return <div className="flex justify-center py-32"><Loader2 className="w-6 h-6 text-sky-400 animate-spin" /></div>;
  if (!order) return <p className="text-red-400 p-4">Order not found</p>;

  const stageIdx    = STAGES.findIndex(s => s.status === order.status);
  const isDelivered = order.status === 'DELIVERED' || order.status === 'CANCELLED';
  const nextStage   = (!isDelivered && stageIdx < STAGES.length - 1) ? STAGES[stageIdx + 1] : null;
  const canComplete = !isDelivered && order.status === 'STITCHING';

  const totalAmount   = Number(order.totalAmount);
  const advancePaid   = Number(order.advancePaid);
  const balanceDue    = Number(order.balanceDue);
  const discount      = Number(order.discountAmount ?? 0);
  const finalAmount   = totalAmount - discount;

  return (
    <div className="space-y-5 max-w-4xl">
      {/* Header */}
      <div className="flex items-start gap-3 flex-wrap">
        <Link href="/orders" className="btn-ghost p-2 rounded-lg mt-1"><ArrowLeft className="w-4 h-4" /></Link>
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-white">{order.orderNumber}</h1>
            <Pill color={isDelivered ? 'border-green-500/30 bg-green-500/10 text-green-400' : 'border-sky-500/30 bg-sky-500/10 text-sky-400'}>
              {isDelivered ? '✓ Delivered' : STATUS_LABELS[order.status]}
            </Pill>
            {order.priority !== 'NORMAL' && (
              <Pill color="border-amber-500/30 bg-amber-500/10 text-amber-400">{order.priority}</Pill>
            )}
          </div>
          <p className="text-slate-500 text-xs mt-1 flex items-center gap-1.5">
            <Clock className="w-3 h-3" /> Created {formatDateTime(order.createdAt)}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {!isDelivered && (
            <>
              <Link href={`/orders/${id}/edit`} className="btn-ghost text-sm py-2 flex items-center gap-1.5">
                <Pencil className="w-3.5 h-3.5" /> Edit
              </Link>
              {Number(order.balanceDue) > 0 && (
                <button onClick={() => setShowPayment(true)} className="btn-ghost text-sm py-2 flex items-center gap-1.5 border border-green-500/30 text-green-400 hover:bg-green-500/10">
                  <PlusCircle className="w-3.5 h-3.5" /> Record Payment
                </button>
              )}
            </>
          )}
          <button onClick={() => dupMut.mutate()} disabled={dupMut.isPending} className="btn-ghost text-sm py-2 flex items-center gap-1.5">
            <Copy className="w-3.5 h-3.5" /> Repeat
          </button>
          <button onClick={handleWhatsAppShare} className="btn-ghost text-sm py-2 flex items-center gap-1.5 text-emerald-400 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            WhatsApp
          </button>
          <Link href={`/orders/${id}/print`} className="btn-ghost text-sm py-2 flex items-center gap-1.5">
            <Printer className="w-3.5 h-3.5" /> Print Slip
          </Link>
        </div>
      </div>

      {/* Progress */}
      {!isDelivered && (
        <div className="card space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-sm font-semibold text-slate-200">Order Progress</p>
            <div className="flex gap-2">
              {nextStage && (
                <button onClick={() => statusMut.mutate(nextStage.status)} disabled={statusMut.isPending}
                  className="btn-primary text-sm py-2 flex items-center gap-1.5">
                  {statusMut.isPending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  Move to {nextStage.label}
                </button>
              )}
              {canComplete && (
                <button onClick={() => setShowComplete(true)}
                  className="py-2 px-4 rounded-lg border border-green-500 bg-green-500/10 text-green-400 hover:bg-green-500/20 text-sm font-medium flex items-center gap-1.5 transition-all">
                  <CheckCheck className="w-3.5 h-3.5" /> Complete Order
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {STAGES.map((stage, i) => {
              const done    = i < stageIdx;
              const current = i === stageIdx;
              return (
                <div key={stage.status} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 text-xl transition-all ${
                      done ? 'border-green-500 bg-green-500/10' : current ? 'border-sky-500 bg-sky-500/10 ring-4 ring-sky-500/20' : 'border-slate-700 bg-slate-800'
                    }`}>{done ? '✓' : stage.emoji}</div>
                    <p className={`text-xs font-medium ${current ? 'text-sky-400' : done ? 'text-green-400' : 'text-slate-600'}`}>{stage.label}</p>
                  </div>
                  {i < STAGES.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < stageIdx ? 'bg-green-500' : 'bg-slate-700'}`} />}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {isDelivered && (
        <div className="card bg-green-500/5 border-green-500/20 flex items-center gap-3">
          <CheckCheck className="w-8 h-8 text-green-400 shrink-0" />
          <div>
            <p className="text-green-400 font-semibold">Order Delivered</p>
            {discount > 0 && <p className="text-slate-400 text-sm">Discount of {formatCurrency(discount)} applied{order.discountNote ? ` · ${order.discountNote}` : ''}</p>}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* ── Left Column ── */}
        <div className="space-y-4">
          {/* Customer */}
          <div className="card space-y-3">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Customer</h2>
            <Link href={`/customers/${order.customer?.id}`}
              className="flex items-center gap-3 hover:bg-slate-700/30 -mx-2 px-2 py-2 rounded-lg transition-colors">
              <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold text-lg shrink-0">
                {order.customer?.name?.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{order.customer?.name}</p>
                <p className="text-xs text-slate-400 flex items-center gap-1"><Phone className="w-3 h-3" />{order.customer?.phone}</p>
              </div>
            </Link>
            <div className="space-y-1.5 pt-1 border-t border-slate-700/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" /> Delivery</span>
                <span className="text-slate-300 font-medium">{formatDate(order.deliveryDate)}</span>
              </div>
              {order.assignedTo && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Assigned to</span>
                  <span className="text-slate-300">{order.assignedTo.name}</span>
                </div>
              )}
            </div>
          </div>

          {/* Payment breakdown */}
          <div className="card space-y-3">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5" /> Payment Breakdown
            </h2>
            <div className="space-y-2">
              <Row label="Garments Total" value={formatCurrency(totalAmount)} />
              {discount > 0 && (
                <>
                  <Row label={`Discount${order.discountNote ? ` (${order.discountNote})` : ''}`}
                       value={`-${formatCurrency(discount)}`} valueClass="text-green-400" />
                  <Row label="Net Payable" value={formatCurrency(finalAmount)} valueClass="text-white font-semibold" />
                </>
              )}
              <Row label="Advance Paid" value={formatCurrency(advancePaid)} valueClass="text-sky-400" />
              <div className="border-t border-slate-700 pt-2">
                <Row label="Balance Due" value={formatCurrency(balanceDue)}
                     valueClass={balanceDue > 0 ? 'text-amber-400 font-bold text-base' : 'text-green-400 font-bold'} />
              </div>
            </div>

            {/* Payment records */}
            {order.payments?.length > 0 && (
              <div className="border-t border-slate-700/50 pt-3 space-y-2">
                <p className="text-xs text-slate-500 font-medium">Payment History</p>
                {order.payments.map((p: any) => (
                  <div key={p.id} className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${p.method === 'UPI' ? 'bg-purple-400' : 'bg-green-400'}`} />
                        <span className="text-xs text-slate-300 font-medium">{formatCurrency(p.amount)}</span>
                        <span className={`badge text-xs px-1.5 py-0 ${p.method === 'UPI' ? 'bg-purple-500/10 text-purple-400' : 'bg-green-500/10 text-green-400'}`}>
                          {p.method}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 ml-3">{formatDateTime(p.paidAt)}</p>
                      {p.notes && <p className="text-xs text-slate-600 ml-3 italic">{p.notes}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* QR code */}
          {order.qrCode && (
            <div className="card text-center space-y-2">
              <p className="text-xs text-slate-400">Order QR Code</p>
              <img src={order.qrCode} alt="QR" className="w-28 h-28 mx-auto rounded-lg" />
              <p className="text-xs text-slate-500">{order.orderNumber}</p>
            </div>
          )}
        </div>

        {/* ── Right Column ── */}
        <div className="lg:col-span-2 space-y-4">
          {/* Garments */}
          <div className="card space-y-3">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Garments</h2>
            {order.items?.map((item: any) => {
              const addOnsTotal = Array.isArray(item.addOns)
                ? item.addOns.reduce((s: number, ao: any) => s + (ao.price || ao.extraCost || 0), 0) : 0;
              return (
                <div key={item.id} className="bg-[#0f172a] rounded-xl p-4 border border-slate-700/40">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{item.garmentType?.name}</p>
                      {item.measurementProfile && item.measurementProfile.fields && (
                        <MeasurementCard
                          customerName={order.customer?.name || ''}
                          label={item.measurementProfile.label}
                          category={item.measurementProfile.category}
                          fields={item.measurementProfile.fields}
                          compact
                        />
                      )}
                      {Array.isArray(item.addOns) && item.addOns.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {item.addOns.map((ao: any) => (
                            <div key={ao.name} className="flex items-center justify-between text-xs">
                              <span className="flex items-center gap-1 text-sky-400">
                                <Tag className="w-3 h-3" />{ao.name}
                              </span>
                              <span className="text-sky-300">+{formatCurrency(ao.price || ao.extraCost)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {(() => {
                        const media = parseItemNotes(item.notes);
                        return (
                          <>
                            {media.text && <p className="text-xs text-slate-500 mt-1.5 italic">"{media.text}"</p>}
                            {/* Reference photos */}
                            {media.photos && media.photos.length > 0 && (
                              <div className="mt-2">
                                <p className="text-xs text-slate-500 flex items-center gap-1 mb-1.5">
                                  <ImageIcon className="w-3 h-3" /> Reference Photos ({media.photos.length})
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {media.photos.map((p, pi) => (
                                    <button
                                      key={pi}
                                      type="button"
                                      onClick={() => setLightboxSrc(p.url)}
                                      className="focus:outline-none"
                                    >
                                      <img
                                        src={p.url}
                                        alt={`ref-${pi}`}
                                        className="w-16 h-16 rounded-lg object-cover border border-slate-700 hover:border-sky-500 transition-colors cursor-pointer"
                                      />
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                            {/* Voice note */}
                            {media.voice && (
                              <div className="mt-1">
                                <p className="text-xs text-slate-500 flex items-center gap-1 mb-0.5">
                                  <Mic className="w-3 h-3" /> Voice Note
                                </p>
                                <VoicePlayer url={media.voice.url} duration={media.voice.duration} />
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-white font-bold">{formatCurrency(Number(item.unitPrice) + addOnsTotal)}</p>
                      {addOnsTotal > 0 && (
                        <p className="text-xs text-slate-500 mt-0.5">Base: {formatCurrency(item.unitPrice)}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Items total */}
            <div className="flex justify-between items-center pt-2 border-t border-slate-700 text-sm font-semibold">
              <span className="text-slate-300">{order.items?.length} item{order.items?.length !== 1 ? 's' : ''}</span>
              <span className="text-white">{formatCurrency(totalAmount)}</span>
            </div>
          </div>

          {/* Order notes */}
          {order.notes && (
            <div className="card">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Notes</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{order.notes}</p>
            </div>
          )}

          {/* Activity log */}
          <div className="card">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Activity Log</h2>
            <div className="space-y-3">
              {order.statusLogs?.map((log: any, i: number) => (
                <div key={log.id} className="flex items-start gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-2 h-2 rounded-full mt-1 ${i === 0 ? 'bg-sky-400' : 'bg-slate-600'}`} />
                    {i < order.statusLogs.length - 1 && <div className="w-px flex-1 bg-slate-700 mt-1.5 mb-0.5 min-h-[16px]" />}
                  </div>
                  <div className="flex-1 pb-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm text-white font-medium">{STATUS_LABELS[log.status] ?? log.status}</p>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-slate-400">{formatDate(log.changedAt)}</p>
                        <p className="text-xs text-slate-600">{new Date(log.changedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                      </div>
                    </div>
                    {log.note && <p className="text-xs text-slate-500 mt-0.5">{log.note}</p>}
                    {log.user && <p className="text-xs text-slate-600 mt-0.5">by {log.user.name}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showComplete && <CompleteModal order={order} onClose={() => setShowComplete(false)} />}

      {showPayment && (
        <RecordPaymentModal
          order={order}
          onClose={() => setShowPayment(false)}
          onSaved={() => { setShowPayment(false); qc.invalidateQueries({ queryKey: ['order', id] }); }}
        />
      )}

      {lightboxSrc && <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  );
}

// ── Record Payment Modal ──────────────────────────────────────────────────────
function RecordPaymentModal({ order, onClose, onSaved }: { order: any; onClose: () => void; onSaved: () => void }) {
  const { data: shop } = useQuery({ queryKey: ['shop'], queryFn: shopApi.get });
  const [amount,    setAmount]    = useState(String(Number(order.balanceDue)));
  const [method,    setMethod]    = useState<'CASH'|'UPI'>('CASH');
  const [notes,     setNotes]     = useState('');
  const [saving,    setSaving]    = useState(false);

  const amountNum = parseFloat(amount) || 0;

  const handleSave = async () => {
    if (!amountNum) return toast.error('Enter an amount');
    setSaving(true);
    try {
      await paymentsApi.create({ orderId: order.id, amount: amountNum, method, notes: notes || undefined });
      toast.success(`Payment of ${formatCurrency(amountNum)} recorded!`);
      onSaved();
    } catch { toast.error('Failed to record payment'); }
    finally { setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#1e293b] border border-slate-700 rounded-2xl w-full max-w-sm shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
          <h2 className="font-bold text-white flex items-center gap-2"><PlusCircle className="w-4 h-4 text-green-400" /> Record Payment</h2>
          <button onClick={onClose} className="btn-ghost p-1.5 rounded-lg"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-5 space-y-4">
          <div className="bg-[#0f172a] rounded-lg px-3 py-2 flex justify-between text-sm">
            <span className="text-slate-400">Balance Due</span>
            <span className="text-amber-400 font-bold">{formatCurrency(order.balanceDue)}</span>
          </div>
          <div>
            <label className="label">Amount (₹)</label>
            <input value={amount} onChange={e => setAmount(e.target.value)} type="number" min="1" max={Number(order.balanceDue)} className="input" />
          </div>
          <div>
            <label className="label">Payment Mode</label>
            <div className="flex gap-2">
              {(['CASH','UPI'] as const).map(m => (
                <button key={m} type="button" onClick={() => setMethod(m)}
                  className={`flex-1 py-2.5 rounded-xl border text-sm font-semibold transition-all ${method === m
                    ? m === 'UPI' ? 'border-purple-500 bg-purple-500/10 text-purple-300' : 'border-green-500 bg-green-500/10 text-green-300'
                    : 'border-slate-700 text-slate-400'}`}>
                  {m === 'CASH' ? '💵 Cash' : '📱 UPI'}
                </button>
              ))}
            </div>
          </div>
          {method === 'UPI' && amountNum > 0 && shop?.upiId && (
            <div className="flex flex-col items-center gap-1.5 bg-white rounded-xl p-3">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(`upi://pay?pa=${shop.upiId}&am=${amountNum.toFixed(2)}&cu=INR&tn=Order ${order.orderNumber}`)}&size=160x160`} alt="QR" className="w-36 h-36 rounded" />
              <p className="text-slate-700 text-xs">{shop.upiId} · {formatCurrency(amountNum)}</p>
            </div>
          )}
          <div>
            <label className="label">Note (optional)</label>
            <input value={notes} onChange={e => setNotes(e.target.value)} className="input text-sm" placeholder="e.g. partial advance" />
          </div>
          <div className="flex gap-3">
            <button onClick={onClose} className="btn-ghost flex-1 py-2.5">Cancel</button>
            <button onClick={handleSave} disabled={saving || !amountNum} className="btn-primary flex-1 py-2.5 flex items-center justify-center gap-2">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {saving ? 'Saving...' : 'Record Payment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
