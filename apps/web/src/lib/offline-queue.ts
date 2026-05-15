import { get, set } from 'idb-keyval';

export interface QueuedMutation {
  id: string;
  type: 'CREATE_CUSTOMER' | 'CREATE_ORDER' | 'UPDATE_ORDER_STATUS' | 'CREATE_PAYMENT';
  payload: any;
  createdAt: number;
  retries: number;
  status: 'pending' | 'syncing' | 'failed';
}

const QUEUE_KEY = 'oxilo-offline-queue';

export const offlineQueue = {
  async getAll(): Promise<QueuedMutation[]> {
    return (await get(QUEUE_KEY)) || [];
  },

  async add(type: QueuedMutation['type'], payload: any): Promise<QueuedMutation> {
    const queue = await this.getAll();
    const mutation: QueuedMutation = {
      id: `offline-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      type,
      payload,
      createdAt: Date.now(),
      retries: 0,
      status: 'pending',
    };
    queue.push(mutation);
    await set(QUEUE_KEY, queue);
    window.dispatchEvent(new CustomEvent('offline-queue-update', { detail: queue.length }));
    return mutation;
  },

  async remove(id: string): Promise<void> {
    const queue = await this.getAll();
    const filtered = queue.filter(m => m.id !== id);
    await set(QUEUE_KEY, filtered);
    window.dispatchEvent(new CustomEvent('offline-queue-update', { detail: filtered.length }));
  },

  async update(id: string, updates: Partial<QueuedMutation>): Promise<void> {
    const queue = await this.getAll();
    const idx = queue.findIndex(m => m.id === id);
    if (idx >= 0) {
      queue[idx] = { ...queue[idx], ...updates };
      await set(QUEUE_KEY, queue);
    }
  },

  async clear(): Promise<void> {
    await set(QUEUE_KEY, []);
    window.dispatchEvent(new CustomEvent('offline-queue-update', { detail: 0 }));
  },

  async count(): Promise<number> {
    const queue = await this.getAll();
    return queue.length;
  },
};
