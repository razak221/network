import React, { useState, useEffect } from 'react';
import { Send, Calculator, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 no-print">
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

      <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-3d-floating">
        <Link
          to="/quote"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 text-xs font-bold transition-all"
          title="Open Cost Estimator Studio"
        >
          <Calculator className="w-3.5 h-3.5 text-amber-600" />
          <span>BOQ Estimator</span>
        </Link>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="h-12 px-4 sm:px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-soft-md hover:scale-105 active:scale-95 transition-all group relative"
          title="Consult Architectural Desk on WhatsApp (+91 98453 02888)"
          aria-label="Consult Architectural Desk on WhatsApp"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300"></span>
          </span>
          <Send className="w-4 h-4 fill-white shrink-0" />
          <span className="text-xs font-bold whitespace-nowrap">WhatsApp Atelier</span>
        </button>
      </div>
    </div>
  );
}
