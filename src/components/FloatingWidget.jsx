import React, { useState, useEffect } from 'react';
import { Send, ArrowUp } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function FloatingWidget() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleWhatsApp = () => {
    const msg = "Hi Pristine Decore! I would like to inquire about luxury interior architecture, institutional campuses, and turnkey execution.";
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 no-print">
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-amber-700 hover:border-amber-300 flex items-center justify-center shadow-soft-md transition-all hover:scale-110"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <button
        type="button"
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-3d-floating border-2 border-white/90 hover:scale-105 active:scale-95 transition-all group relative"
        title="Consult Architectural Desk on WhatsApp (+91 98453 02888)"
        aria-label="Consult Architectural Desk on WhatsApp"
      >
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <Send className="w-5 h-5 fill-white transition-transform group-hover:scale-110" />
        <span className="hidden md:block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-soft-lg border border-amber-400/30">
          WhatsApp Atelier
        </span>
      </button>
    </div>
  );
}
