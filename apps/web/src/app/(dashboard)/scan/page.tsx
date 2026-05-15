'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ordersApi } from '@/lib/api';
import { QrCode, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ScanPage() {
  const router = useRouter();
  const scannerRef = useRef<any>(null);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'found' | 'error'>('idle');
  const [Html5QrcodeScanner, setHtml5QrcodeScanner] = useState<any>(null);

  useEffect(() => {
    // Dynamically import html5-qrcode (client-side only)
    import('html5-qrcode').then(({ Html5QrcodeScanner: Scanner }) => {
      setHtml5QrcodeScanner(() => Scanner);
    });
  }, []);

  useEffect(() => {
    if (!Html5QrcodeScanner) return;

    const scanner = new Html5QrcodeScanner('qr-reader', {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    }, false);

    scanner.render(
      async (decodedText: string) => {
        setStatus('found');
        scanner.clear();
        try {
          let orderId = decodedText;
          try {
            const parsed = JSON.parse(decodedText);
            orderId = parsed.orderId ?? decodedText;
          } catch {}

          const order = await ordersApi.get(orderId);
          toast.success(`Found: ${order.orderNumber}`);
          router.push(`/orders/${order.id}`);
        } catch {
          setStatus('error');
          toast.error('Order not found for this QR code');
        }
      },
      (err: any) => {
        // Ignore scan errors (happens every frame when no QR found)
      }
    );

    setStatus('scanning');
    scannerRef.current = scanner;

    return () => {
      try { scanner.clear(); } catch {}
    };
  }, [Html5QrcodeScanner]);

  return (
    <div className="max-w-sm mx-auto space-y-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
          <QrCode className="w-6 h-6 text-sky-400" /> Scan QR Code
        </h1>
        <p className="text-slate-400 text-sm mt-1">Point camera at an order QR code</p>
      </div>

      <div className="card p-0 overflow-hidden rounded-2xl">
        {status === 'found' && (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
            <p className="text-slate-300">QR Code detected! Redirecting...</p>
          </div>
        )}
        {status === 'error' && (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <AlertCircle className="w-12 h-12 text-red-400" />
            <p className="text-slate-300">Order not found</p>
            <button onClick={() => setStatus('idle')} className="btn-primary text-sm py-2 px-4">Try Again</button>
          </div>
        )}
        <div id="qr-reader" className={status === 'found' || status === 'error' ? 'hidden' : ''} />
      </div>

      <p className="text-center text-slate-600 text-xs">
        Works on mobile — allow camera access when prompted
      </p>
    </div>
  );
}
