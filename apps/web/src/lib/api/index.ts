import api from './client';
import { offlineQueue } from '@/lib/offline-queue';
import { toast } from 'sonner';

function isNetworkError(error: any): boolean {
  return !error.response && (error.code === 'ERR_NETWORK' || !navigator.onLine);
}

export const authApi = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }).then((r) => r.data.data),

  logout: () => api.post('/auth/logout'),

  me: () => api.get('/auth/me').then((r) => r.data.data),
};

export const customersApi = {
  list: (params?: Record<string, unknown>) =>
    api.get('/customers', { params }).then((r) => r.data),

  get: (id: string) => api.get(`/customers/${id}`).then((r) => r.data.data),

  create: async (data: unknown) => {
    try {
      return await api.post('/customers', data).then((r) => r.data.data);
    } catch (err) {
      if (isNetworkError(err)) {
        await offlineQueue.add('CREATE_CUSTOMER', data);
        toast.info('Saved offline — will sync when back online');
        return { id: `offline-${Date.now()}`, ...(data as any), _offline: true };
      }
      throw err;
    }
  },

  update: (id: string, data: unknown) =>
    api.patch(`/customers/${id}`, data).then((r) => r.data.data),

  getOrders: (id: string, params?: Record<string, unknown>) =>
    api.get(`/customers/${id}/orders`, { params }).then((r) => r.data),
};

export const ordersApi = {
  list: (params?: Record<string, unknown>) =>
    api.get('/orders', { params }).then((r) => r.data),
  get: (id: string) => api.get(`/orders/${id}`).then((r) => r.data.data),

  create: async (data: unknown) => {
    try {
      return await api.post('/orders', data).then((r) => r.data.data);
    } catch (err) {
      if (isNetworkError(err)) {
        await offlineQueue.add('CREATE_ORDER', data);
        toast.info('Order saved offline — will sync when back online');
        return { id: `offline-${Date.now()}`, ...(data as any), _offline: true };
      }
      throw err;
    }
  },

  update: (id: string, data: unknown) => api.patch(`/orders/${id}`, data).then((r) => r.data.data),

  updateStatus: async (id: string, data: unknown) => {
    try {
      return await api.patch(`/orders/${id}/status`, data).then((r) => r.data.data);
    } catch (err) {
      if (isNetworkError(err)) {
        await offlineQueue.add('UPDATE_ORDER_STATUS', { id, ...(data as any) });
        toast.info('Status update queued — will sync when back online');
        return { id, ...(data as any), _offline: true };
      }
      throw err;
    }
  },

  duplicate: (id: string) => api.post(`/orders/${id}/duplicate`).then((r) => r.data.data),
  complete: (id: string, data: unknown) => api.post(`/orders/${id}/complete`, data).then((r) => r.data.data),
  todayDeliveries: () => api.get('/orders/today/deliveries').then((r) => r.data.data),
  delayed: () => api.get('/orders/today/delayed').then((r) => r.data.data),
};

export const shopApi = {
  get: () => api.get('/settings/shop').then((r) => r.data.data),
  update: (data: unknown) => api.patch('/settings/shop', data).then((r) => r.data.data),
};

export const paymentsApi = {
  pending: () => api.get('/payments/pending').then((r) => r.data.data),

  create: async (data: unknown) => {
    try {
      return await api.post('/payments', data).then((r) => r.data.data);
    } catch (err) {
      if (isNetworkError(err)) {
        await offlineQueue.add('CREATE_PAYMENT', data);
        toast.info('Payment saved offline — will sync when back online');
        return { id: `offline-${Date.now()}`, ...(data as any), _offline: true };
      }
      throw err;
    }
  },

  forOrder: (orderId: string) => api.get(`/payments/order/${orderId}`).then((r) => r.data.data),
};

export const measurementsApi = {
  forCustomer: (customerId: string) =>
    api.get(`/measurements/customer/${customerId}`).then((r) => r.data.data),
  create: (customerId: string, data: unknown) =>
    api.post(`/measurements/customer/${customerId}`, data).then((r) => r.data.data),
  update: (profileId: string, data: unknown) =>
    api.patch(`/measurements/${profileId}`, data).then((r) => r.data.data),
  history: (profileId: string) =>
    api.get(`/measurements/${profileId}/history`).then((r) => r.data.data),
};

export const analyticsApi = {
  dashboard: () => api.get('/analytics/dashboard').then((r) => r.data.data),
  revenue: (from: string, to: string) =>
    api.get('/analytics/revenue', { params: { from, to } }).then((r) => r.data.data),
  topCustomers: () => api.get('/analytics/top-customers').then((r) => r.data.data),
};

export const settingsApi = {
  garmentTypes: () => api.get('/settings/garment-types').then((r) => r.data.data),
  createGarmentType: (data: unknown) =>
    api.post('/settings/garment-types', data).then((r) => r.data.data),
  updateGarmentType: (id: string, data: unknown) =>
    api.patch(`/settings/garment-types/${id}`, data).then((r) => r.data.data),
  pricingRules: () => api.get('/settings/pricing-rules').then((r) => r.data.data),
  createPricingRule: (data: unknown) =>
    api.post('/settings/pricing-rules', data).then((r) => r.data.data),
  updatePricingRule: (id: string, data: unknown) =>
    api.patch(`/settings/pricing-rules/${id}`, data).then((r) => r.data.data),
};

export const expensesApi = {
  list: () => api.get('/expenses').then((r) => r.data.data),
  create: (data: unknown) => api.post('/expenses', data).then((r) => r.data.data),
};

export const uploadsApi = {
  /** Upload any file — returns { url, key }. Do NOT set Content-Type manually; axios sets the multipart boundary. */
  file: (file: File): Promise<{ url: string; key: string }> => {
    const fd = new FormData();
    fd.append('file', file);
    return api.post('/uploads/file', fd).then((r) => r.data.data);
  },
};

