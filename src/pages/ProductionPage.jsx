import React from 'react';
import { Link } from 'react-router-dom';
import { productionServices } from '../data/servicesData';
import { 
  Hammer, 
  Sparkles, 
  Layers, 
  Palette, 
  Volume2, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Zap,
  Wrench
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

const iconMap = {
  Layers: Layers,
  Sparkles: Sparkles,
  Palette: Palette,
  Volume2: Volume2
};

export default function ProductionPage() {
  const handleProductionInquiry = (itemTitle) => {
    const text = `Hi Pristine Decore! I would like to inquire about custom production / signage for my event: ${itemTitle}. Please provide technical specs and pricing.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Custom Production & Fabrication</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Hammer className="w-3.5 h-3.5 text-amber-600" />
            <span>In-House Workshop & Large Format Print Hub</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Turnkey Event Production & <span className="text-gradient-gold">Bespoke Fabrication</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            From heavy-duty roll-up banners and massive seamless flex backdrops to 3D laser-cut acrylic signs, neon flex selfie boards, and professional sound staging — engineered directly in our atelier.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-soft-gold hover:scale-105 transition-all"
            >
              Add Materials in Quote Studio
            </Link>
            <button
              onClick={() => handleProductionInquiry('General Fabrication Inquiry')}
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft hover:scale-105 transition-all"
            >
              WhatsApp Production Lead
            </button>
          </div>
        </div>
      </div>

      {/* Production Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productionServices.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div 
                key={service.id}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-500 text-xs mt-1 font-medium">{service.tagline}</p>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Technical Specs:</span>
                    <ul className="space-y-1.5">
                      {service.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-amber-800 font-bold bg-amber-50 px-2.5 py-1 rounded-lg">
                    {service.leadTime || '24-48h Build'}
                  </span>
                  <button
                    onClick={() => handleProductionInquiry(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 group"
                  >
                    <span>Request Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Workshop Fabrication Standards Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-luxury">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Manufacturing Standards
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Precision Engineering Meets Strict Venue Compliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Because mall security and fire marshals can shut down non-compliant setups, our fabrication atelier adheres to stringent fire-retardant and low-voltage electrical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <Flame className="w-7 h-7 text-rose-600" />
              <h4 className="font-heading font-bold text-sm text-slate-900">Fire-Retardant Star-Flex</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                All backdrop fabrics and banners carry certified flame-spread ratings to pass immediate mall fire safety inspections.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <Zap className="w-7 h-7 text-amber-600" />
              <h4 className="font-heading font-bold text-sm text-slate-900">Certified 12V LED Power</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                All 3D signs and neon flex boards run on fused 12V transformers, eliminating high-voltage risks in crowded public spaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <Wrench className="w-7 h-7 text-teal-600" />
              <h4 className="font-heading font-bold text-sm text-slate-900">Heavy-Duty Iron Rigging</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Custom iron box-trusses and sandbag ballasts engineered to withstand atrium air currents without tipping or shifting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
