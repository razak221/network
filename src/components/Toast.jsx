import React, { useEffect } from 'react';
import { CheckCircle2, X, Sparkles } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 4000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-24 right-6 z-50 max-w-sm animate-bounce animate-duration-500">
      <div className="bg-white/95 backdrop-blur-md border border-amber-300 p-4 rounded-2xl shadow-luxury-lg flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
          <Sparkles className="w-4 h-4 fill-amber-500" />
        </div>
        <div className="flex-1 pr-2">
          <p className="font-heading font-bold text-xs text-slate-900">Pristine Decore Dispatch</p>
          <p className="text-xs text-slate-600 mt-0.5">{message}</p>
        </div>
        <button
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
