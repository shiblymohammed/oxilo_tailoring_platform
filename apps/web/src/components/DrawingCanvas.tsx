'use client';
import { useRef, useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

export default function DrawingCanvas({
  value,
  onChange,
}: {
  value?: string;
  onChange: (val: string) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (value && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const img = new Image();
      img.src = value;
      img.onload = () => {
        ctx?.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        ctx?.drawImage(img, 0, 0);
      };
    }
  }, [value]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set up drawing styles
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#38bdf8'; // sky-400

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    
    // Use scaling ratio for responsive canvas
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    
    ctx.beginPath();
    ctx.moveTo((clientX - rect.left) * scaleX, (clientY - rect.top) * scaleY);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    
    ctx.lineTo((clientX - rect.left) * scaleX, (clientY - rect.top) * scaleY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      onChange(canvas.toDataURL('image/png'));
    }
  };

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    onChange('');
  };

  return (
    <div className="flex flex-col gap-2 mt-2 w-full col-span-full">
      <div className="border border-slate-700 bg-[#0f172a] rounded-lg overflow-hidden touch-none w-full relative h-40">
        <canvas
          ref={canvasRef}
          width={800} // High internal resolution
          height={400}
          className="absolute inset-0 w-full h-full cursor-crosshair bg-slate-900/50"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
      <div className="flex justify-between items-center px-1">
        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Draw your pattern inside</p>
        <button type="button" onClick={clear} className="text-xs flex items-center gap-1 text-slate-400 hover:text-red-400 transition-colors">
          <Trash2 className="w-3 h-3" /> Clear
        </button>
      </div>
    </div>
  );
}
