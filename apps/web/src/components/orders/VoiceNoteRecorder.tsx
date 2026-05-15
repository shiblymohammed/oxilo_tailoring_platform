'use client';

import { useRef, useState, useCallback } from 'react';
import { Mic, Trash2, Loader2, Play, Pause } from 'lucide-react';
import { uploadsApi } from '@/lib/api';
import { toast } from 'sonner';

export interface VoiceNote { url: string; key: string; duration: number }

interface Props {
  voiceNote: VoiceNote | null;
  onChange: (vn: VoiceNote | null) => void;
}

/** Pick the best supported MIME type for recording */
function getSupportedMime(): string {
  const types = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg;codecs=opus',
    'audio/ogg',
    'audio/mp4',
  ];
  return types.find(t => MediaRecorder.isTypeSupported(t)) ?? '';
}

export function VoiceNoteRecorder({ voiceNote, onChange }: Props) {
  const [recState, setRecState] = useState<'idle' | 'recording' | 'uploading'>('idle');
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying]   = useState(false);
  const [progress, setProgress] = useState(0);
  const mediaRef  = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef  = useRef<HTMLAudioElement | null>(null);

  /* ── Start recording ── */
  const startRec = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mime = getSupportedMime();
      if (!mime) { toast.error('Voice recording not supported in this browser'); return; }
      const mr = new MediaRecorder(stream, { mimeType: mime });
      chunksRef.current = [];
      mr.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mr.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        const blob = new Blob(chunksRef.current, { type: mime });
        const ext  = mime.includes('ogg') ? 'ogg' : mime.includes('mp4') ? 'mp4' : 'webm';
        setRecState('uploading');
        try {
          const file   = new File([blob], `voice-${Date.now()}.${ext}`, { type: mime });
          const result = await uploadsApi.file(file);
          onChange({ ...result, duration });
        } catch {
          toast.error('Failed to upload voice note');
        } finally {
          setRecState('idle');
        }
      };
      mr.start(200); // collect in 200ms chunks
      mediaRef.current = mr;
      setRecState('recording');
      setDuration(0);
      timerRef.current = setInterval(() => setDuration(d => d + 1), 1000);
    } catch {
      toast.error('Microphone access denied');
    }
  }, [duration, onChange]);

  /* ── Stop recording ── */
  const stopRec = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (mediaRef.current?.state === 'recording') mediaRef.current.stop();
  }, []);

  /* ── Playback ── */
  const togglePlay = () => {
    if (!voiceNote) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(voiceNote.url);
      audioRef.current.ontimeupdate = () => {
        const el = audioRef.current;
        if (el) setProgress(el.currentTime / (el.duration || 1));
      };
      audioRef.current.onended = () => { setPlaying(false); setProgress(0); };
      audioRef.current.onerror = () => toast.error('Cannot play voice note — try re-recording');
    }
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().catch(() => toast.error('Playback failed')); setPlaying(true); }
  };

  const deleteNote = () => {
    audioRef.current?.pause();
    audioRef.current = null;
    onChange(null);
    setRecState('idle');
    setDuration(0);
    setPlaying(false);
    setProgress(0);
  };

  const fmtTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  /* ── Uploading state ── */
  if (recState === 'uploading') return (
    <div className="flex items-center gap-2 text-slate-400 text-sm py-2">
      <Loader2 className="w-4 h-4 animate-spin text-sky-400" /> Uploading voice note...
    </div>
  );

  /* ── Recorded note player ── */
  if (voiceNote) return (
    <div className="flex items-center gap-3 bg-[#0f172a] rounded-xl px-4 py-2.5 border border-slate-700">
      <button type="button" onClick={togglePlay}
        className="w-8 h-8 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center shrink-0 transition-colors">
        {playing ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
      </button>
      <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <div className="h-full bg-sky-400 rounded-full transition-all" style={{ width: `${progress * 100}%` }} />
      </div>
      <span className="text-xs text-slate-400 shrink-0">{fmtTime(voiceNote.duration)}</span>
      <button type="button" onClick={deleteNote} className="text-red-400 hover:text-red-300 p-1 shrink-0">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );

  /* ── Record button ── */
  return (
    <div
      onMouseDown={startRec}
      onMouseUp={stopRec}
      onTouchStart={startRec}
      onTouchEnd={stopRec}
      role="button"
      tabIndex={0}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all select-none cursor-pointer ${
        recState === 'recording'
          ? 'border-red-500 bg-red-500/10 text-red-400 animate-pulse'
          : 'border-slate-600 text-slate-400 hover:border-sky-500 hover:text-sky-400'
      }`}
    >
      <Mic className="w-3.5 h-3.5" />
      {recState === 'recording'
        ? `Recording... ${fmtTime(duration)} — release to stop`
        : 'Hold to record voice note'}
    </div>
  );
}
