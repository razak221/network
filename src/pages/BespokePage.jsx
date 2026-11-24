import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bespokeExamples } from '../data/servicesData';
import { 
  Gem, 
  Sparkles, 
  Send, 
  Zap, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Compass,
  Layers
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import Toast from '../components/Toast';

export default function BespokePage() {
  const [customWish, setCustomWish] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!customWish.trim()) return;
    const msg = `*CUSTOM BESPOKE REQUEST - PRISTINE DECORE (pristinedecore.com)*\n\nRequest details:\n"${customWish}"\n\nPlease let me know feasibility, lead time, and sample availability!`;
    setToastMsg("Custom brief dispatched to architectural sourcing atelier!");
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg('')} />}

      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Bespoke Concierge</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Gem className="w-3.5 h-3.5 text-amber-600" />
            <span>Rare Materials & Custom Millwork Concierge</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Whatever You Envision, <br className="hidden sm:inline" />
            <span className="text-gradient-gold">We Engineer & Source</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Need bookmatched Italian Calacatta marble slabs? Solid Burma teak double doors? Switchable smart privacy glass? Or customized brass-inlay wall fluting? If it exists globally, we source it. If it doesn't, our atelier fabricates it.
          </p>
        </div>
      </div>

      {/* Interactive Custom Wishlist Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-luxury card-luxury space-y-6">
          <div className="space-y-2">
            <h3 className="font-heading text-2xl font-bold text-slate-900">
              Submit Your Bespoke Material or Joinery Brief
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Describe your specific architectural requirement. Our principal material atelier will review technical feasibility and reply on WhatsApp with physical sample timelines.
            </p>
          </div>

          <form onSubmit={handleSendWish} className="space-y-4">
            <textarea
              rows={4}
              value={customWish}
              onChange={(e) => setCustomWish(e.target.value)}
              placeholder="e.g. We require 2,500 sq.ft of bookmatched Italian Statuario marble, 10ft cantilevered teakwood entrance door, and custom fluted brass partition screens..."
              className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
              required
            ></textarea>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Atelier Sourcing Evaluation: <strong>Under 2 Hours</strong></span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-soft-gold hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Brief to Architectural Atelier</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Rare Materials & Specialized Joinery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Material Masteries
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900">
            Bespoke Architectural Disciplines Sourced & Installed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {bespokeExamples.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft-sm hover:shadow-3d-luxury card-3d-hover transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  {item.leadTime || 'Procured to Order'}
                </span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">{item.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc || item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
