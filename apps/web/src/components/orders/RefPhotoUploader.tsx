'use client';

import { useRef, useState } from 'react';
import { Camera, X, Loader2, Image as ImageIcon, Upload } from 'lucide-react';
import { uploadsApi } from '@/lib/api';
import { toast } from 'sonner';

export interface RefPhoto { url: string; key: string }

interface Props {
  photos: RefPhoto[];
  onChange: (photos: RefPhoto[]) => void;
  maxPhotos?: number;
}

export function RefPhotoUploader({ photos, onChange, maxPhotos = 5 }: Props) {
  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFiles = async (files: FileList) => {
    const toAdd = Array.from(files).slice(0, maxPhotos - photos.length);
    if (!toAdd.length) return;
    setUploading(true);
    try {
      const uploaded = await Promise.all(toAdd.map(f => uploadsApi.file(f)));
      onChange([...photos, ...uploaded]);
    } catch {
      toast.error('Failed to upload photo(s)');
    } finally {
      setUploading(false);
      // Reset inputs so same file can be re-selected
      if (cameraRef.current) cameraRef.current.value = '';
      if (galleryRef.current) galleryRef.current.value = '';
    }
  };

  const remove = (idx: number) => onChange(photos.filter((_, i) => i !== idx));

  const remaining = maxPhotos - photos.length;

  return (
    <div>
      <label className="label flex items-center gap-1.5">
        <Camera className="w-3.5 h-3.5 text-sky-400" /> Reference Photos
        <span className="text-slate-600 font-normal">({photos.length}/{maxPhotos})</span>
      </label>

      <div className="flex flex-wrap gap-2 mt-1">
        {photos.map((p, i) => (
          <div key={p.key} className="relative w-16 h-16 group">
            <img src={p.url} alt={`ref-${i}`} className="w-16 h-16 rounded-lg object-cover border border-slate-700" />
            <button
              type="button"
              onClick={() => remove(i)}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3 text-white" />
            </button>
          </div>
        ))}

        {remaining > 0 && !uploading && (
          <>
            {/* Camera capture button */}
            <button
              type="button"
              onClick={() => cameraRef.current?.click()}
              className="w-16 h-16 rounded-lg border-2 border-dashed border-slate-600 hover:border-sky-500 flex flex-col items-center justify-center gap-0.5 text-slate-500 hover:text-sky-400 transition-all"
            >
              <Camera className="w-5 h-5" />
              <span className="text-[9px]">Camera</span>
            </button>

            {/* Gallery upload button */}
            <button
              type="button"
              onClick={() => galleryRef.current?.click()}
              className="w-16 h-16 rounded-lg border-2 border-dashed border-slate-600 hover:border-teal-500 flex flex-col items-center justify-center gap-0.5 text-slate-500 hover:text-teal-400 transition-all"
            >
              <Upload className="w-5 h-5" />
              <span className="text-[9px]">Gallery</span>
            </button>
          </>
        )}

        {uploading && (
          <div className="w-16 h-16 rounded-lg border-2 border-dashed border-sky-500/50 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-sky-400 animate-spin" />
          </div>
        )}
      </div>

      {/* Camera input — forces camera */}
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={e => e.target.files && handleFiles(e.target.files)}
      />

      {/* Gallery input — opens file picker / gallery */}
      <input
        ref={galleryRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={e => e.target.files && handleFiles(e.target.files)}
      />
    </div>
  );
}
