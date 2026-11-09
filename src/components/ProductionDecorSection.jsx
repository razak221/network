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
    <section id="production" className="py-20 md:py-28 bg-[#F4F4F1] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Hammer className="w-3.5 h-3.5 text-amber-600" />
            <span>In-House Workshop & Print Hub</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Custom Banners, <span className="text-gradient-gold">Boards & Event Decor</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
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
                className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-soft-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Specifications & Finishes:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Mall Fire & Electrical Certified
                  </span>
                  <a
                    href="#builder"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-800 transition-all flex items-center gap-1.5 shadow-soft-sm"
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
        <div className="mt-12 p-6 rounded-3xl bg-white border border-amber-200/80 text-center max-w-3xl mx-auto shadow-soft">
          <p className="text-xs sm:text-sm text-slate-700">
            <strong className="text-amber-700 font-semibold">Rush Print Emergency?</strong> If your sponsor changes artwork at 6:00 PM the night before a mall launch, co-founder Syed Haamid Ali's production desk provides priority night-run printing for morning delivery.
          </p>
        </div>

      </div>
    </section>
  );
}
