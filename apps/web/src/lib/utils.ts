import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number | string, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency, maximumFractionDigits: 0 }).format(Number(amount));
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date));
}

export function formatDateTime(date: string | Date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  }).format(new Date(date));
}

export function formatTime(date: string | Date) {
  return new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }).format(new Date(date));
}

export const ORDER_STATUS_COLORS: Record<string, string> = {
  RECEIVED:         'bg-blue-500/10 text-blue-400 border-blue-500/20',
  MEASUREMENT_TAKEN:'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  CUTTING:          'bg-orange-500/10 text-orange-400 border-orange-500/20',
  STITCHING:        'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  TRIAL:            'bg-purple-500/10 text-purple-400 border-purple-500/20',
  ALTERATION:       'bg-pink-500/10 text-pink-400 border-pink-500/20',
  READY:            'bg-green-500/10 text-green-400 border-green-500/20',
  DELIVERED:        'bg-slate-500/10 text-slate-400 border-slate-500/20',
  CANCELLED:        'bg-red-500/10 text-red-400 border-red-500/20',
};

export const PRIORITY_COLORS: Record<string, string> = {
  NORMAL:  'bg-slate-500/10 text-slate-400',
  URGENT:  'bg-red-500/10 text-red-400',
  WEDDING: 'bg-pink-500/10 text-pink-400',
  FESTIVAL:'bg-amber-500/10 text-amber-400',
  VIP:     'bg-purple-500/10 text-purple-400',
};
