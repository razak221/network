import React, { useState } from 'react';
import { bespokeExamples } from '../data/servicesData';
import { 
  Sparkles, 
  Send, 
  PackageSearch, 
  Zap, 
  Clock, 
  ArrowRight,
  Gem,
  Compass
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function BespokeConcierge() {
  const [customWish, setCustomWish] = useState('');

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!customWish.trim()) return;
    const msg = `*BESPOKE MATERIAL / JOINERY REQUEST - PRISTINE DECORE*\n\nRequest details:\n"${customWish}"\n\nPlease let me know material availability, sample delivery, and pricing!`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="bespoke" className="py-20 md:py-28 relative overflow-hidden bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Gem className="w-3.5 h-3.5 text-amber-600" />
            <span>Rare Materials & Custom Millwork Concierge</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            "You Envision It, <span className="text-gradient-gold">We Engineer It"</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From bookmatched Italian Calacatta marble slabs and solid Burma teak doors to automated switchable privacy glass and acoustic brass panelling.
          </p>
        </div>

        {/* Signature Bespoke Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 perspective-1200">
          {bespokeExamples.map((ex, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-3d-luxury card-3d-hover hover:border-amber-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    {ex.tag || 'Bespoke Craft'}
                  </span>
                  {ex.leadTime && (
                    <span className="text-[10px] font-mono font-semibold text-amber-800">
                      {ex.leadTime}
                    </span>
                  )}
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900">
                  {ex.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ex.description || ex.detail}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={CONTACT_CONFIG.getWhatsAppUrl(`Hi Pristine Decore! I would like to inquire about ${ex.title}${ex.tag ? ` (${ex.tag})` : ''}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group"
                >
                  <span>Inquire Specification</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Custom Request Box */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-amber-200/90 shadow-soft-lg">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Zap className="w-4 h-4 fill-amber-600 text-amber-600" />
              <span>Need a Rare Architectural Material or Custom Fixture?</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-slate-900">
              Consult Our Architectural Sourcing Atelier
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Rare quarried marbles, custom CNC fluted brass panelling, double-height chandeliers, or motorized skylights—describe your design brief below:
            </p>
          </div>

          <form onSubmit={handleSendWish} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. 'I need 2,200 sq.ft bookmatched Italian Statuario marble and custom Burma teak doors'..."
                value={customWish}
                onChange={(e) => setCustomWish(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white shadow-inner pr-36"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-soft-gold"
              >
                <Send className="w-3.5 h-3.5 fill-white" />
                <span>Ask Atelier</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                Direct Sourcing Feasibility Within 2 Hours
              </span>
              <span className="flex items-center gap-1.5">
                <Gem className="w-3.5 h-3.5 text-amber-600" />
                Certified Origin & Lab-Tested Materials
              </span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
