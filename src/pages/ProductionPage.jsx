import React from 'react';
import { Link } from 'react-router-dom';
import { interiorServices } from '../data/servicesData';
import { 
  Palette, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Gem, 
  Check
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ProductionPage() {
  const handleInteriorInquiry = (itemTitle) => {
    const text = `Hi Pristine Decore! I would like to inquire about luxury interior architecture: ${itemTitle}. Please provide finish options, material samples, and preliminary pricing.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Luxury Interior Architecture</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Palette className="w-3.5 h-3.5 text-amber-600" />
            <span>Master Joinery & Interior Atelier</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Luxury Interior Architecture & <span className="text-gradient-gold">Bespoke Millwork</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            From Italian Statuario marble living suites and European modular kitchens to smart classrooms, university auditoriums, and STEM research labs — crafted to millimeter perfection.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-soft-gold hover:scale-105 transition-all"
            >
              Estimate Interior BOQ
            </Link>
            <button
              onClick={() => handleInteriorInquiry('General Interior Inquiry')}
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft hover:scale-105 transition-all"
            >
              WhatsApp Interior Atelier
            </button>
          </div>
        </div>
      </div>

      {/* Interior Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interiorServices.map((service) => (
            <div 
              key={service.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium">{service.category}</p>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Specifications & Features:</span>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-800 font-bold bg-amber-50 px-2.5 py-1 rounded-lg">
                  {service.badge}
                </span>
                <button
                  onClick={() => handleInteriorInquiry(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 group"
                >
                  <span>Request Samples</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Fabrication Standards Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-luxury">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Atelier Standards
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              European Hardware, Genuine Marbles & Zero-VOC Finishes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every kitchen cabinet, walk-in wardrobe, and architectural false ceiling is fabricated using certified moisture-proof marine ply and precision CNC routers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <Gem className="w-7 h-7 text-amber-600" />
              <h4 className="font-heading font-bold text-sm text-slate-900">Genuine Italian Marbles</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Directly quarried Statuario, Bottochino, and Travertine slabs bookmatched with diamond polishing and anti-stain sealants.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
              <h4 className="font-heading font-bold text-sm text-slate-900">Blum & Hettich Hardware</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Certified German hinges, soft-close lift-up mechanisms, and heavy-duty tandem drawers tested for 200,000 opening cycles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <Layers className="w-7 h-7 text-teal-600" />
              <h4 className="font-heading font-bold text-sm text-slate-900">Zero-VOC PU Finishes</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Eco-safe Italian polyurethanes (Milesi / ICA) ensuring pristine indoor air quality, scratch resistance, and satin-smooth surfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
