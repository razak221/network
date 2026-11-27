import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 4500 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-24 right-4 sm:right-6 z-50 max-w-sm animate-fadeIn no-print"
    >
      <div className="bg-white/95 backdrop-blur-xl border border-amber-300 p-4 rounded-2xl shadow-3d-luxury flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
          <Sparkles className="w-4 h-4 fill-amber-500" />
        </div>
        <div className="flex-1 pr-2">
          <p className="font-heading font-bold text-xs text-slate-900">Pristine Decore Studio Desk</p>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
