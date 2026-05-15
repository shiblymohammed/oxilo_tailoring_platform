'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ordersApi } from '@/lib/api';
import { QrCode, Loader2, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

export default function ScanPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const scannerRef = useRef<any>(null);
  const [status, setStatus] = useState<'loading' | 'scanning' | 'found' | 'error'>('loading');

  useEffect(() => {
    let stopped = false;

    async function startScanner() {
      try {
        const { Html5Qrcode } = await import('html5-qrcode');

        if (stopped) return;

        const scanner = new Html5Qrcode('qr-reader-hidden');
        scannerRef.current = scanner;

        await scanner.start(
          { facingMode: 'environment' }, // Force back camera only
          {
            fps: 15,
            qrbox: { width: 250, height: 250 },
            aspectRatio: 1,
          },
          async (decodedText) => {
            setStatus('found');
            await scanner.stop();

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
          () => {} // Ignore per-frame errors
        );

        if (!stopped) setStatus('scanning');
      } catch (err) {
        console.error('Scanner error:', err);
        toast.error('Could not access camera');
        setStatus('error');
      }
    }

    startScanner();

    return () => {
      stopped = true;
      try { scannerRef.current?.stop(); } catch {}
    };
  }, []);

  const retry = async () => {
    setStatus('loading');
    try { await scannerRef.current?.stop(); } catch {}

    const { Html5Qrcode } = await import('html5-qrcode');
    const scanner = new Html5Qrcode('qr-reader-hidden');
    scannerRef.current = scanner;

    await scanner.start(
      { facingMode: 'environment' },
      { fps: 15, qrbox: { width: 250, height: 250 }, aspectRatio: 1 },
      async (decodedText) => {
        setStatus('found');
        await scanner.stop();
        try {
          let orderId = decodedText;
          try { const p = JSON.parse(decodedText); orderId = p.orderId ?? decodedText; } catch {}
          const order = await ordersApi.get(orderId);
          toast.success(`Found: ${order.orderNumber}`);
          router.push(`/orders/${order.id}`);
        } catch {
          setStatus('error');
          toast.error('Order not found');
        }
      },
      () => {}
    );
    setStatus('scanning');
  };

  return (
    <div className="max-w-sm mx-auto space-y-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
          <QrCode className="w-6 h-6 text-teal-400" /> Scan QR Code
        </h1>
        <p className="text-slate-400 text-sm mt-1">Point your camera at an order QR code</p>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10">
        {/* Scanner renders the video here */}
        <div id="qr-reader-hidden" className={status === 'found' || status === 'error' ? 'hidden' : ''} />

        {/* Scanning overlay */}
        {status === 'scanning' && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-56 h-56 border-2 border-teal-400/60 rounded-xl relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-teal-400 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-teal-400 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-teal-400 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-teal-400 rounded-br-lg" />
              {/* Animated scan line */}
              <div className="absolute left-2 right-2 h-0.5 bg-teal-400/80 animate-pulse top-1/2" />
            </div>
          </div>
        )}

        {/* Loading state */}
        {status === 'loading' && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <Loader2 className="w-10 h-10 text-teal-400 animate-spin" />
            <p className="text-slate-400 text-sm">Opening camera...</p>
          </div>
        )}

        {/* Found state */}
        {status === 'found' && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
            <p className="text-slate-300">QR Code detected! Redirecting...</p>
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <AlertCircle className="w-12 h-12 text-red-400" />
            <p className="text-slate-300">Order not found or camera error</p>
            <button
              onClick={retry}
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium py-2.5 px-5 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
