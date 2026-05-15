'use client';

import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Don't show if already installed or dismissed recently
    const dismissed = localStorage.getItem('install-dismissed');
    if (dismissed && Date.now() - Number(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === 'accepted') {
      setShow(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem('install-dismissed', String(Date.now()));
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-3 right-3 md:left-auto md:right-4 md:bottom-4 md:w-80 z-50 animate-in slide-in-from-bottom-4">
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-4 shadow-2xl shadow-teal-500/20 border border-teal-400/30">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white/60 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
            <span className="text-2xl">✂️</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">Install OXILO</p>
            <p className="text-teal-100 text-xs mt-0.5">Quick access from your home screen</p>
          </div>
          <button
            onClick={handleInstall}
            className="bg-white text-teal-700 font-bold text-xs px-4 py-2 rounded-xl hover:bg-teal-50 transition-colors shrink-0 flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
