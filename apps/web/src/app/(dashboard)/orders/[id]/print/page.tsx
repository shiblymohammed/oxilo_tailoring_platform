'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { ordersApi } from '@/lib/api';
import { formatDate, formatCurrency, formatDateTime } from '@/lib/utils';
import { Loader2, Printer, Share2, Download, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

export default function PrintOrderPage() {
  const { id } = useParams<{ id: string }>();
  const slipRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const { data: order, isLoading } = useQuery({
    queryKey: ['order', id],
    queryFn: () => ordersApi.get(id),
  });

  const generateImage = async (): Promise<string> => {
    if (!slipRef.current) throw new Error('Slip not mounted');
    const { toPng } = await import('html-to-image');
    return toPng(slipRef.current, {
      quality: 1,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
    });
  };

  const handlePrint = async () => {
    setGenerating(true);
    try {
      const dataUrl = await generateImage();
      const win = window.open('', '_blank');
      if (!win) return toast.error('Pop-up blocked — allow pop-ups and try again');
      win.document.write(`
        <html><head><title>Order ${order?.orderNumber}</title>
        <style>
          body { margin:0; padding:0; background:#fff; }
          img { max-width:100%; display:block; }
          @media print { @page { margin:0; size:auto; } }
        </style></head>
        <body>
          <img src="${dataUrl}" onload="window.print();window.close();" />
        </body></html>
      `);
      win.document.close();
    } catch {
      toast.error('Failed to generate print image');
    } finally {
      setGenerating(false);
    }
  };

  const handleDownload = async () => {
    setGenerating(true);
    try {
      const dataUrl = await generateImage();
      const link = document.createElement('a');
      link.download = `Order-${order?.orderNumber}.png`;
      link.href = dataUrl;
      link.click();
      toast.success('Image downloaded!');
    } catch {
      toast.error('Failed to generate image');
    } finally {
      setGenerating(false);
    }
  };

  const handleShare = async () => {
    setGenerating(true);
    try {
      const dataUrl = await generateImage();
      setImageUrl(dataUrl);

      // Try Web Share API (mobile — works on Android/iOS)
      if (navigator.canShare) {
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        const file = new File([blob], `Order-${order?.orderNumber}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `Order ${order?.orderNumber}`,
            text: `Hi ${order?.customer?.name}, your order receipt from us.`,
            files: [file],
          });
          return;
        }
      }

      // Fallback: open WhatsApp Web with a pre-filled message
      const msg = encodeURIComponent(
        `Hello ${order?.customer?.name},\nYour order *${order?.orderNumber}* is ready!\nTotal: ${formatCurrency(order?.totalAmount)}, Balance due: ${formatCurrency(order?.balanceDue)}\nDelivery: ${formatDate(order?.deliveryDate)}`
      );
      const phone = (order?.customer?.whatsapp || order?.customer?.phone || '').replace(/\D/g, '');
      const waUrl = phone
        ? `https://wa.me/${phone.startsWith('91') ? phone : '91' + phone}?text=${msg}`
        : `https://web.whatsapp.com/send?text=${msg}`;

      // Also download the image so they can attach it manually
      const link = document.createElement('a');
      link.download = `Order-${order?.orderNumber}.png`;
      link.href = dataUrl;
      link.click();

      window.open(waUrl, '_blank');
      toast.success('Image downloaded + WhatsApp opened!');
    } catch (err: any) {
      if (err?.name !== 'AbortError') toast.error('Failed to share');
    } finally {
      setGenerating(false);
    }
  };

  if (isLoading) return (
    <div className="flex justify-center py-32"><Loader2 className="w-6 h-6 text-sky-400 animate-spin" /></div>
  );
  if (!order) return <p className="text-red-400 p-4">Order not found</p>;

  const addOnsTotal = (item: any) =>
    Array.isArray(item.addOns) ? item.addOns.reduce((s: number, ao: any) => s + (ao.price || 0), 0) : 0;

  const discount = Number(order.discountAmount ?? 0);

  return (
    <div className="space-y-5">
      {/* ── Screen Controls ── */}
      <div className="flex items-center gap-3 flex-wrap">
        <Link href={`/orders/${id}`} className="btn-ghost p-2 rounded-lg">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <span className="text-slate-300 text-sm font-medium">Order Slip — {order.orderNumber}</span>
        <div className="ml-auto flex gap-2 flex-wrap">
          <button onClick={handleDownload} disabled={generating}
            className="btn-ghost flex items-center gap-2 text-sm py-2">
            {generating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
            Download PNG
          </button>
          <button onClick={handleShare} disabled={generating}
            className="btn-ghost flex items-center gap-2 text-sm py-2 border border-green-500/30 text-green-400 hover:bg-green-500/10">
            {generating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Share2 className="w-3.5 h-3.5" />}
            Share on WhatsApp
          </button>
          <button onClick={handlePrint} disabled={generating}
            className="btn-primary flex items-center gap-2 text-sm py-2">
            {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Printer className="w-4 h-4" />}
            Print
          </button>
        </div>
      </div>

      {/* ── Preview note ── */}
      <p className="text-slate-500 text-xs text-center">
        👆 The white slip below is exactly what gets printed / shared as image
      </p>

      {/* ── THE SLIP (this is what gets captured) ── */}
      <div className="flex justify-center">
        <div
          ref={slipRef}
          className="bg-white text-gray-900 w-[400px] font-sans"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', lineHeight: '1.5' }}
        >
          {/* Header */}
          <div style={{ background: '#0f172a', color: 'white', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
              {(order as any).shop?.name ?? 'OXILO'}
            </p>
            <p style={{ fontSize: '11px', color: '#94a3b8', margin: '4px 0 0' }}>Order Receipt</p>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ background: '#14b8a6', borderRadius: '4px', padding: '2px 8px', fontWeight: 'bold' }}>
                {order.orderNumber}
              </span>
              <span style={{ color: '#94a3b8' }}>{formatDate(order.createdAt)}</span>
            </div>
          </div>

          {/* Customer */}
          <div style={{ padding: '12px 16px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontWeight: 'bold', fontSize: '15px', margin: 0 }}>{order.customer?.name}</p>
                <p style={{ color: '#64748b', fontSize: '12px', margin: '2px 0 0' }}>{order.customer?.phone}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Delivery</p>
                <p style={{ fontWeight: 'bold', color: '#0f172a', margin: '2px 0 0' }}>{formatDate(order.deliveryDate)}</p>
              </div>
            </div>
            {order.priority !== 'NORMAL' && (
              <div style={{ marginTop: '6px', display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: '9999px', fontSize: '11px', fontWeight: 'bold' }}>
                ⚡ {order.priority}
              </div>
            )}
          </div>

          {/* Items */}
          <div style={{ padding: '12px 16px' }}>
            <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>GARMENTS</p>
            {order.items?.map((item: any, i: number) => (
              <div key={item.id} style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: i < order.items.length - 1 ? '1px dashed #e2e8f0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ fontWeight: 'bold', margin: 0 }}>{i + 1}. {item.garmentType?.name}</p>
                  <p style={{ fontWeight: 'bold', margin: 0 }}>₹{(Number(item.unitPrice) + addOnsTotal(item)).toFixed(0)}</p>
                </div>

                {/* Measurements */}
                {item.measurementProfile?.fields && (
                  <div style={{ marginTop: '6px', background: '#f1f5f9', borderRadius: '4px', padding: '6px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2px' }}>
                    {Object.entries(item.measurementProfile.fields as Record<string, any>).map(([k, v]) => (
                      <div key={k} style={{ fontSize: '11px' }}>
                        <span style={{ color: '#64748b', textTransform: 'capitalize' }}>{k}: </span>
                        <span style={{ fontWeight: 'bold' }}>{String(v)}"</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add-ons */}
                {Array.isArray(item.addOns) && item.addOns.length > 0 && (
                  <div style={{ marginTop: '4px' }}>
                    {item.addOns.map((ao: any) => (
                      <div key={ao.name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#0d9488' }}>
                        <span>+ {ao.name}</span>
                        <span>+₹{(ao.price || 0).toFixed(0)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.notes && (
                  <p style={{ fontSize: '11px', color: '#64748b', fontStyle: 'italic', margin: '4px 0 0' }}>"{item.notes}"</p>
                )}
              </div>
            ))}
          </div>

          {/* Payment */}
          <div style={{ background: '#f8fafc', borderTop: '2px solid #e2e8f0', padding: '12px 16px' }}>
            <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>PAYMENT</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#475569' }}>Garments Total</span>
                <span style={{ fontWeight: '600' }}>{formatCurrency(order.totalAmount)}</span>
              </div>
              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#16a34a' }}>Discount{order.discountNote ? ` (${order.discountNote})` : ''}</span>
                  <span style={{ color: '#16a34a', fontWeight: '600' }}>-{formatCurrency(discount)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#475569' }}>Advance Paid</span>
                <span style={{ color: '#0d9488', fontWeight: '600' }}>{formatCurrency(order.advancePaid)}</span>
              </div>
              {Number(order.balanceDue) <= 0 ? (
                <div style={{ marginTop: '8px', background: '#dcfce7', border: '1px solid #86efac', borderRadius: '8px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#166534', fontWeight: 'bold', fontSize: '15px' }}>✓ FULLY PAID</span>
                  <span style={{ color: '#16a34a', fontSize: '13px', fontWeight: '600' }}>{formatCurrency(order.totalAmount)}</span>
                </div>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold', borderTop: '1px solid #cbd5e1', paddingTop: '6px', marginTop: '4px' }}>
                  <span>Balance Due</span>
                  <span style={{ color: '#dc2626' }}>{formatCurrency(order.balanceDue)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Status + Notes */}
          {(order.notes || order.status === 'DELIVERED') && (
            <div style={{ padding: '10px 16px', borderTop: '1px solid #e2e8f0' }}>
              {order.status === 'DELIVERED' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 'bold', marginBottom: order.notes ? '6px' : 0 }}>
                  <span>✓</span><span>Delivered</span>
                </div>
              )}
              {order.notes && (
                <div style={{ background: '#fefce8', border: '1px solid #fde68a', borderRadius: '6px', padding: '8px', fontSize: '12px', color: '#713f12' }}>
                  <strong>Note: </strong>{order.notes}
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div style={{ background: '#0f172a', color: '#94a3b8', textAlign: 'center', padding: '10px 16px', fontSize: '11px' }}>
            <p style={{ margin: 0 }}>Thank you for choosing us! 🙏</p>
            <p style={{ margin: '4px 0 0', fontSize: '10px' }}>Generated {formatDateTime(new Date())}</p>
          </div>
        </div>
      </div>

      {/* Generated preview */}
      {imageUrl && (
        <div className="mt-4 text-center">
          <p className="text-slate-400 text-sm mb-2">Generated Image Preview</p>
          <img src={imageUrl} alt="Receipt" className="mx-auto rounded-lg shadow-lg max-w-sm" />
        </div>
      )}
    </div>
  );
}
