'use client';

import { useState, useEffect } from 'react';
import { Camera, Mic, Bell, Shield, ChevronRight, Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface PermissionItem {
  id: string;
  label: string;
  description: string;
  icon: any;
  color: string;
  status: 'pending' | 'granted' | 'denied' | 'unsupported';
}

export function PermissionsPrompt() {
  const [show, setShow] = useState(false);
  const [permissions, setPermissions] = useState<PermissionItem[]>([
    { id: 'camera', label: 'Camera', description: 'QR scanning & reference photos', icon: Camera, color: 'text-sky-400', status: 'pending' },
    { id: 'microphone', label: 'Microphone', description: 'Voice notes for orders', icon: Mic, color: 'text-teal-400', status: 'pending' },
    { id: 'notifications', label: 'Notifications', description: 'Order updates & reminders', icon: Bell, color: 'text-amber-400', status: 'pending' },
  ]);

  useEffect(() => {
    // Only show once — check localStorage
    const asked = localStorage.getItem('permissions-asked');
    if (asked) return;

    // Show after a short delay so login completes first
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const requestPermission = async (id: string) => {
    const update = (status: PermissionItem['status']) => {
      setPermissions(prev => prev.map(p => p.id === id ? { ...p, status } : p));
    };

    try {
      if (id === 'camera') {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        stream.getTracks().forEach(t => t.stop());
        update('granted');
      } else if (id === 'microphone') {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(t => t.stop());
        update('granted');
      } else if (id === 'notifications') {
        if (!('Notification' in window)) {
          update('unsupported');
          return;
        }
        const result = await Notification.requestPermission();
        update(result === 'granted' ? 'granted' : 'denied');
      }
    } catch {
      update('denied');
    }
  };

  const requestAll = async () => {
    for (const p of permissions) {
      if (p.status === 'pending') {
        await requestPermission(p.id);
      }
    }
  };

  const handleDone = () => {
    localStorage.setItem('permissions-asked', 'true');
    setShow(false);
    const granted = permissions.filter(p => p.status === 'granted').length;
    if (granted > 0) toast.success(`${granted} permission${granted > 1 ? 's' : ''} granted!`);
  };

  if (!show) return null;

  const allDone = permissions.every(p => p.status !== 'pending');

  return (
    <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1e293b] rounded-2xl w-full max-w-sm border border-slate-700/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-sky-600 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">App Permissions</h2>
              <p className="text-white/70 text-xs mt-0.5">OXILO needs these to work best</p>
            </div>
          </div>
        </div>

        {/* Permission List */}
        <div className="p-4 space-y-2">
          {permissions.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  p.status === 'granted'
                    ? 'bg-emerald-500/5 border-emerald-500/20'
                    : p.status === 'denied'
                    ? 'bg-red-500/5 border-red-500/20'
                    : 'bg-slate-800/50 border-slate-700/30 hover:border-slate-600'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  p.status === 'granted' ? 'bg-emerald-500/10' : p.status === 'denied' ? 'bg-red-500/10' : 'bg-slate-700/50'
                }`}>
                  <Icon className={`w-4 h-4 ${p.status === 'granted' ? 'text-emerald-400' : p.status === 'denied' ? 'text-red-400' : p.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{p.label}</p>
                  <p className="text-[10px] text-slate-500">{p.description}</p>
                </div>
                {p.status === 'granted' ? (
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : p.status === 'denied' ? (
                  <X className="w-4 h-4 text-red-400 shrink-0" />
                ) : (
                  <button
                    onClick={() => requestPermission(p.id)}
                    className="text-xs text-sky-400 hover:text-sky-300 font-medium shrink-0 flex items-center gap-0.5"
                  >
                    Allow <ChevronRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="px-4 pb-4 flex gap-2">
          {!allDone ? (
            <>
              <button
                onClick={handleDone}
                className="flex-1 py-2.5 text-sm text-slate-400 hover:text-slate-300 rounded-xl transition-colors"
              >
                Skip
              </button>
              <button
                onClick={requestAll}
                className="flex-1 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition-colors"
              >
                Allow All
              </button>
            </>
          ) : (
            <button
              onClick={handleDone}
              className="w-full py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition-colors"
            >
              Continue to OXILO
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
