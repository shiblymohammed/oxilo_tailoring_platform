'use client';

import { useOfflineQueue } from '@/hooks/useOfflineSync';
import { Cloud, CloudOff, Loader2, RefreshCw } from 'lucide-react';

export function SyncIndicator() {
  const { pendingCount, isSyncing, syncQueue, isOnline } = useOfflineQueue();

  if (pendingCount === 0 && isOnline) return null;

  return (
    <div className="mx-3 mb-2">
      <div className={`rounded-xl px-3 py-2 text-xs flex items-center justify-between gap-2 ${
        !isOnline
          ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
          : isSyncing
          ? 'bg-sky-500/10 border border-sky-500/20 text-sky-400'
          : 'bg-teal-500/10 border border-teal-500/20 text-teal-400'
      }`}>
        <div className="flex items-center gap-2">
          {!isOnline ? (
            <CloudOff className="w-3.5 h-3.5" />
          ) : isSyncing ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Cloud className="w-3.5 h-3.5" />
          )}
          <span>
            {!isOnline
              ? `${pendingCount} pending`
              : isSyncing
              ? 'Syncing...'
              : `${pendingCount} to sync`}
          </span>
        </div>
        {isOnline && pendingCount > 0 && !isSyncing && (
          <button
            onClick={syncQueue}
            className="hover:text-teal-300 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
