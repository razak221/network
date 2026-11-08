import React, { useState } from 'react';
import { Send, Sparkles, X, Phone, ShieldCheck } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function FloatingWidget({ onOpenConfigurator }) {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsApp = () => {
    const msg = "Hi Pristine Decore! I would like to book event manpower / custom decor supplies.";
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 no-print">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-white border border-amber-200 text-slate-800 p-3.5 rounded-2xl shadow-soft-lg max-w-xs text-xs space-y-1 relative animate-bounce animate-duration-1000">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-slate-700"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-amber-700 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Founders On-Duty</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-tight pr-3">
            Syed Inam, Razak Ahmed Khan & Syed Haamed Ali are ready to assist with your event setup.
          </p>
        </div>
      )}

      {/* Buttons Row */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenConfigurator}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-soft-gold hover:scale-105 transition-all"
          title="Instant Quote Generator"
        >
          <Sparkles className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Instant Quote</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-soft-lg hover:scale-105 transition-all group"
          title="Chat with Founders on WhatsApp"
        >
          <Send className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
