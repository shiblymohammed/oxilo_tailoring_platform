import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-6">
          <Scissors className="w-10 h-10 text-sky-400" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <p className="text-slate-400 mb-6">This page doesn't exist yet.</p>
        <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-6 py-3">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
