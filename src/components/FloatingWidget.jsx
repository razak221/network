import React, { useState } from 'react';
import { Send, Sparkles, X, Phone, ShieldCheck } from 'lucide-react';

export default function FloatingWidget({ onOpenConfigurator }) {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Pristine Decore! I would like to book event manpower / custom decor supplies.");
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-[#111827] border border-amber-400/40 text-white p-3 rounded-2xl shadow-2xl max-w-xs text-xs space-y-1 relative animate-bounce animate-duration-1000">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-white"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-amber-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Founders On-Duty</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight pr-3">
            Syed Inam, Razak Ahmed Khan & Syed Haamed Ali are ready to assist with your event setup.
          </p>
        </div>
      )}

      {/* Buttons Row */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenConfigurator}
          className="px-4 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-105 transition-all"
          title="Instant Quote Generator"
        >
          <Sparkles className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline">Instant Quote</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all group"
          title="Chat with Founders on WhatsApp"
        >
          <Send className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
