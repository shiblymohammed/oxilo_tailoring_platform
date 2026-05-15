import axios from 'axios';

const isDev = process.env.NODE_ENV !== 'production';
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? (isDev ? 'http://localhost:3001/api' : 'https://oxiloserver.bragtly.com/api');

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// Attach access token
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-refresh on 401
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        const { data } = await axios.post(
          `${API_BASE}/auth/refresh`,
          {},
          { withCredentials: true },
        );
        const token = data.data.accessToken;
        localStorage.setItem('accessToken', token);
        original.headers.Authorization = `Bearer ${token}`;
        return api(original);
      } catch {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

export default api;
