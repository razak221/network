import React, { useState } from 'react';
import { bespokeExamples } from '../data/servicesData';
import { 
  Sparkles, 
  Send, 
  PackageSearch, 
  Zap, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function BespokeConcierge() {
  const [customWish, setCustomWish] = useState('');

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!customWish.trim()) return;
    const msg = `*CUSTOM EVENT REQUEST - PRISTINE DECORE*\n\nRequest details:\n"${customWish}"\n\nPlease let me know pricing and lead time!`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="bespoke" className="py-20 md:py-28 relative overflow-hidden bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <PackageSearch className="w-3.5 h-3.5 text-amber-600" />
            <span>On-Demand Bespoke Concierge</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            "You Request Anything, <span className="text-gradient-gold">We Deliver It"</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Don't waste days hunting down multiple suppliers for custom props, branded uniforms, or stage special effects. Tell us what you want, and we’ll source, manufacture, and install it.
          </p>
        </div>

        {/* 4 Example Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {bespokeExamples.map((ex, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  {ex.tag}
                </span>
                <h4 className="font-heading font-bold text-lg text-slate-900">
                  {ex.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ex.detail}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href="#builder"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  <span>Add to my event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Custom Request Box (Soft Pearl Warm Panel) */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-amber-200/90 shadow-soft-lg">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Zap className="w-4 h-4 fill-amber-600 text-amber-600" />
              <span>Need Something Truly Unique?</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-slate-900">
              Send Your Custom Wish Directly to Our Founders
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Mascot suits, celebrity gift hampers, golden ribbons, custom selfie booths, or 500 branded gift mugs—type it below:
            </p>
          </div>

          <form onSubmit={handleSendWish} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. 'I need 20 branded black hoodies, a 12ft gold entrance arch, and 2 confetti cannons for Friday morning'..."
                value={customWish}
                onChange={(e) => setCustomWish(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white shadow-inner pr-36"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-soft-gold"
              >
                <Send className="w-3.5 h-3.5 fill-white" />
                <span>Ask Founders</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                Under 15-Minute Response Time
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                Custom Production Workshop in City
              </span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
