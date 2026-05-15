'use client';

import { useState, useEffect, useCallback } from 'react';
import { offlineQueue, QueuedMutation } from '@/lib/offline-queue';
import { customersApi, ordersApi, paymentsApi } from '@/lib/api';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  return isOnline;
}

export function useOfflineQueue() {
  const [pendingCount, setPendingCount] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const isOnline = useNetworkStatus();
  const queryClient = useQueryClient();

  // Load initial count
  useEffect(() => {
    offlineQueue.count().then(setPendingCount);
  }, []);

  // Listen for queue updates
  useEffect(() => {
    const handler = (e: CustomEvent) => setPendingCount(e.detail);
    window.addEventListener('offline-queue-update', handler as any);
    return () => window.removeEventListener('offline-queue-update', handler as any);
  }, []);

  // Auto-sync when back online
  useEffect(() => {
    if (isOnline && pendingCount > 0 && !isSyncing) {
      syncQueue();
    }
  }, [isOnline, pendingCount]);

  const syncQueue = useCallback(async () => {
    if (isSyncing) return;
    setIsSyncing(true);

    const queue = await offlineQueue.getAll();
    let successCount = 0;
    let failCount = 0;

    for (const mutation of queue) {
      try {
        await executeMutation(mutation);
        await offlineQueue.remove(mutation.id);
        successCount++;
      } catch (err) {
        console.error(`Sync failed for ${mutation.id}:`, err);
        await offlineQueue.update(mutation.id, {
          retries: mutation.retries + 1,
          status: 'failed',
        });
        failCount++;
      }
    }

    if (successCount > 0) {
      toast.success(`Synced ${successCount} offline change${successCount > 1 ? 's' : ''}`);
      // Invalidate relevant queries to refresh data
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    }

    if (failCount > 0) {
      toast.error(`${failCount} change${failCount > 1 ? 's' : ''} failed to sync`);
    }

    setIsSyncing(false);
  }, [isSyncing, queryClient]);

  return { pendingCount, isSyncing, syncQueue, isOnline };
}

async function executeMutation(mutation: QueuedMutation) {
  switch (mutation.type) {
    case 'CREATE_CUSTOMER':
      return customersApi.create(mutation.payload);
    case 'CREATE_ORDER':
      return ordersApi.create(mutation.payload);
    case 'UPDATE_ORDER_STATUS':
      return ordersApi.updateStatus(mutation.payload.id, mutation.payload.status);
    case 'CREATE_PAYMENT':
      return paymentsApi.create(mutation.payload);
    default:
      throw new Error(`Unknown mutation type: ${mutation.type}`);
  }
}
