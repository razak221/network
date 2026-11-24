import React from 'react';
import { interiorServices } from '../data/servicesData';
import TiltCard3D from './TiltCard3D';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Hammer,
  Compass
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ProductionDecorSection() {
  return (
    <section id="production" className="py-20 md:py-28 bg-[#F4F4F1] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Palette className="w-3.5 h-3.5 text-amber-600" />
            <span>Master Joinery & Interior Architecture</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Luxury Interior Design & <span className="text-gradient-gold">Bespoke Millwork</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From bookmatched Italian marble and Blum-fitted modular kitchens to custom fluted wall panelling and acoustic false ceilings — tailored to the millimeter.
          </p>
        </div>

        {/* Interior Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1200">
          {interiorServices.map((item) => (
            <TiltCard3D
              key={item.id}
              maxTilt={6}
              scale={1.015}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-3d-luxury card-3d-hover hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-soft-sm">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-slate-900 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Specifications &amp; Finishes:</div>
                  <ul className="space-y-2">
                    {item.features.map((spec, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-medium">
                  Ideal For: <span className="text-slate-800 font-semibold">{item.idealFor}</span>
                </div>
                <a
                  href={CONTACT_CONFIG.getWhatsAppUrl(`Hi Pristine Decore! I would like to consult about ${item.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <span>Request Samples</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Visual Callout for Material Authenticity */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-amber-200/80 text-center max-w-3xl mx-auto shadow-soft">
          <p className="text-xs sm:text-sm text-slate-700">
            <strong className="text-amber-700 font-semibold">100% Genuine Material Guarantee:</strong> All Italian marbles, high-density boiling-water-proof (BWP) marine ply, certified German hardware (Blum/Hettich), and low-VOC paints are accompanied by manufacturer authenticity certificates.
          </p>
        </div>

      </div>
    </section>
  );
}
