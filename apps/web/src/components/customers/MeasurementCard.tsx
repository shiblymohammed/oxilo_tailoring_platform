'use client';

import { useRef } from 'react';
import { Download, Share2, Ruler, Scissors } from 'lucide-react';
import { toast } from 'sonner';

interface MeasurementCardProps {
  customerName: string;
  label: string;
  category: string;
  fields: Record<string, any>;
  date?: string;
  compact?: boolean; // For order detail inline view
}

export function MeasurementCard({ customerName, label, category, fields, date, compact }: MeasurementCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadAsImage = async () => {
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(cardRef.current!, {
        backgroundColor: '#0f172a',
        scale: 3,
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `${customerName.replace(/\s+/g, '_')}_${label}_measurements.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      toast.success('Measurement card downloaded!');
    } catch {
      toast.error('Failed to download');
    }
  };

  const shareAsImage = async () => {
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(cardRef.current!, {
        backgroundColor: '#0f172a',
        scale: 3,
        useCORS: true,
      });
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], `${customerName}_measurements.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `${customerName} — Measurements`,
            text: `${label} (${category}) measurements`,
            files: [file],
          });
        } else {
          // Fallback to download
          downloadAsImage();
        }
      }, 'image/png');
    } catch {
      toast.error('Sharing not supported');
    }
  };

  const fieldEntries = Object.entries(fields).filter(([_, v]) => v !== '' && v !== null && v !== undefined);
  const textFields = fieldEntries.filter(([k, v]) => typeof v !== 'string' || !v.startsWith('data:image'));
  const imageFields = fieldEntries.filter(([k, v]) => typeof v === 'string' && v.startsWith('data:image'));

  if (compact) {
    return (
      <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700/30 mt-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-medium text-teal-400 flex items-center gap-1">
            <Ruler className="w-3 h-3" /> {label}
          </span>
          <span className="text-[10px] text-slate-500">{category}</span>
        </div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
          {textFields.map(([k, v]) => (
            <div key={k} className="flex justify-between text-[10px]">
              <span className="text-slate-500 capitalize truncate">{k}</span>
              <span className="text-slate-300 font-mono ml-1">{String(v)}&quot;</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Action buttons */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={downloadAsImage}
          className="w-7 h-7 rounded-lg bg-slate-700/80 hover:bg-teal-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          title="Download as image"
        >
          <Download className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={shareAsImage}
          className="w-7 h-7 rounded-lg bg-slate-700/80 hover:bg-teal-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          title="Share as image"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* The card itself (captured as image) */}
      <div
        ref={cardRef}
        className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-4 border border-slate-700/50 overflow-hidden relative"
      >
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-sky-500" />

        {/* Header */}
        <div className="flex items-start justify-between mb-4 pt-1">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
              <Scissors className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{customerName}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-medium text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded">
                  {label}
                </span>
                <span className="text-[10px] text-slate-500">{category}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-slate-500 uppercase tracking-wider">OXILO</p>
            {date && <p className="text-[9px] text-slate-600 mt-0.5">{date}</p>}
          </div>
        </div>

        {/* Measurement Grid */}
        <div className="grid grid-cols-2 gap-2">
          {textFields.map(([key, value]) => (
            <div
              key={key}
              className="bg-[#0f172a]/60 rounded-lg px-3 py-2 border border-slate-700/30"
            >
              <p className="text-[9px] text-slate-500 uppercase tracking-wider capitalize">{key}</p>
              <p className="text-sm font-semibold text-white font-mono mt-0.5">
                {String(value)}<span className="text-teal-400 text-xs ml-0.5">&quot;</span>
              </p>
            </div>
          ))}
        </div>

        {/* Custom Drawings */}
        {imageFields.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-700/30">
            <p className="text-[10px] text-slate-500 font-medium mb-2 uppercase tracking-wider">Custom Drawings</p>
            <div className="grid grid-cols-2 gap-2">
              {imageFields.map(([key, value]) => (
                <div key={key} className="bg-slate-900 rounded-lg p-1 border border-slate-700/50">
                  <p className="text-[9px] text-slate-400 capitalize mb-1 px-1">{key.replace('_drawing', '')}</p>
                  <img src={String(value)} alt={key} className="w-full h-auto rounded bg-slate-800" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-3 pt-2 border-t border-slate-700/30 flex items-center justify-between">
          <p className="text-[9px] text-slate-600">
            Tailored by <span className="text-teal-500 font-medium">OXILO</span>
          </p>
          <div className="flex items-center gap-1.5">
            <Ruler className="w-3 h-3 text-slate-600" />
            <span className="text-[9px] text-slate-600">{textFields.length} measurements</span>
          </div>
        </div>
      </div>
    </div>
  );
}
