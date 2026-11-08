import React, { useState } from 'react';
import { bespokeExamples } from '../data/servicesData';
import { 
  Sparkles, 
  Send, 
  PackageSearch, 
  Zap, 
  Clock, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function BespokeConcierge() {
  const [customWish, setCustomWish] = useState('');

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!customWish.trim()) return;
    const msg = encodeURIComponent(`*CUSTOM EVENT REQUEST - PRISTINE DECORE*\n\nRequest details:\n"${customWish}"\n\nPlease let me know pricing and lead time!`);
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <section id="bespoke" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <PackageSearch className="w-3.5 h-3.5" />
            <span>On-Demand Bespoke Concierge</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            "You Request Anything, <span className="text-gradient-gold">We Deliver It"</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Don't waste days hunting down multiple suppliers for custom props, branded uniforms, or stage special effects. Tell us what you want, and we’ll source, manufacture, and install it.
          </p>
        </div>

        {/* 4 Example Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bespokeExamples.map((ex, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-amber-400/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20">
                  {ex.tag}
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  {ex.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ex.detail}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5">
                <a
                  href="#builder"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>Add to my event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Custom Request Box */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-[#111827] to-cyan-500/15 border border-amber-400/30 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Zap className="w-4 h-4 fill-amber-400" />
              <span>Need Something Truly Unique?</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white">
              Send Your Custom Wish Directly to Our Founders
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
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
                className="w-full px-5 py-4 rounded-2xl bg-[#0B0F19] border border-white/20 text-white text-sm sm:text-base placeholder:text-slate-500 focus:outline-none focus:border-amber-400 shadow-inner pr-36"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
              >
                <Send className="w-3.5 h-3.5 fill-slate-950" />
                <span>Ask Founders</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Under 15-Minute Response Time
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Custom Production Workshop in City
              </span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
