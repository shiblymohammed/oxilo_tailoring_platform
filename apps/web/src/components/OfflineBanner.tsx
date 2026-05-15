'use client';

import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);
  const [showReconnect, setShowReconnect] = useState(false);

  useEffect(() => {
    setIsOffline(!navigator.onLine);

    const goOffline = () => setIsOffline(true);
    const goOnline = () => {
      setIsOffline(false);
      setShowReconnect(true);
      setTimeout(() => setShowReconnect(false), 3000);
    };

    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    return () => {
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online', goOnline);
    };
  }, []);

  if (!isOffline && !showReconnect) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] text-center text-xs font-medium py-1.5 px-4 flex items-center justify-center gap-2 transition-colors ${
      isOffline
        ? 'bg-amber-500/90 text-amber-950'
        : 'bg-emerald-500/90 text-emerald-950'
    }`}>
      {isOffline ? (
        <>
          <WifiOff className="w-3.5 h-3.5" />
          You&apos;re offline — cached data is shown
        </>
      ) : (
        <>
          <Wifi className="w-3.5 h-3.5" />
          Back online!
        </>
      )}
    </div>
  );
}
