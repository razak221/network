import React from 'react';
import { productionServices } from '../data/servicesData';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Volume2, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Hammer
} from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Sparkles: Sparkles,
  Palette: Palette,
  Volume2: Volume2
};

export default function ProductionDecorSection() {
  return (
    <section id="production" className="py-20 md:py-28 bg-[#0D1322] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Hammer className="w-3.5 h-3.5" />
            <span>In-House Workshop & Print Hub</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Custom Banners, <span className="text-gradient-gold">Boards & Event Decor</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Direct from our fabrication workshop to your event venue. No middleman markups, high-definition printing, and mall-approved safety standards.
          </p>
        </div>

        {/* 4 Main Production Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productionServices.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Specifications & Finishes:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.02] p-2 rounded-lg border border-white/5">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Mall Fire & Electrical Certified
                  </span>
                  <a
                    href="#builder"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-amber-400 hover:text-slate-950 text-white transition-all flex items-center gap-1.5"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout for Fast Turnaround */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-amber-400 font-semibold">Rush Print Emergency?</strong> If your sponsor changes artwork at 6:00 PM the night before a mall launch, co-founder Syed Haamed Ali's production desk provides priority night-run printing for morning delivery.
          </p>
        </div>

      </div>
    </section>
  );
}
