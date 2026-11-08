import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function FloatingWidget() {
  const handleWhatsApp = () => {
    const msg = "Hi Pristine Decore! I would like to book event manpower / custom decor supplies.";
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 no-print">
      <Link
        to="/quote"
        className="px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-soft-gold hover:scale-105 transition-all"
        title="Instant Quote Generator"
      >
        <Sparkles className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">Instant Quote</span>
      </Link>

      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-soft-lg hover:scale-105 transition-all group"
        title="Chat with Founders on WhatsApp"
      >
        <Send className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
