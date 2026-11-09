import React from 'react';
import { Send } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function FloatingWidget() {
  const handleWhatsApp = () => {
    const msg = "Hi Pristine Decore! I would like to inquire about event manpower and custom decor production.";
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center no-print">
      <button
        onClick={handleWhatsApp}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-soft-lg hover:scale-110 active:scale-95 transition-all group relative"
        title="Chat with Founders on WhatsApp"
        aria-label="Chat with Founders on WhatsApp"
      >
        {/* Subtle Online Pulse Ring */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
        <Send className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
