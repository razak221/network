import React from 'react';
import { Link } from 'react-router-dom';
import { constructionServices } from '../data/servicesData';
import { 
  HardHat, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Award, 
  Building2, 
  Compass, 
  Layers,
  FileCheck2
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ManpowerPage() {
  const handleConsultDirect = (title) => {
    const text = `Hi Pristine Decore! I am interested in consulting regarding civil construction: ${title}. Please send me engineering specs and preliminary BOQ estimates.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Civil Construction & Architecture</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold shadow-soft-sm">
            <HardHat className="w-3.5 h-3.5 text-amber-600" />
            <span>Turnkey Civil Engineering Atelier</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Turnkey Civil Construction & <span className="text-gradient-gold">Structural Architecture</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            From deep piling foundations and seismic RCC framing to luxury private villas, schools, colleges, and university campus infrastructure — delivered with certified engineering and a 10-year structural warranty.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-soft-gold hover:scale-105 transition-all"
            >
              Generate Itemized BOQ
            </Link>
            <button
              onClick={() => handleConsultDirect('Turnkey Villa Construction')}
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft hover:scale-105 transition-all"
            >
              WhatsApp Engineering Desk
            </button>
          </div>
        </div>
      </div>

      {/* 6 Civil Construction Disciplines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constructionServices.map((service) => (
            <div 
              key={service.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                  <HardHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium">{service.category}</p>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Engineering Disciplines:</span>
                  <ul className="space-y-1.5">
                    {service.features.map((duty, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
                  {service.badge}
                </span>
                <button
                  onClick={() => handleConsultDirect(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 group"
                >
                  <span>Consult Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 10-Year Structural Engineering Warranty */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50/50 border border-amber-200/90 shadow-luxury">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>10-Year Structural Engineering Warranty</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Rigorous Concrete Testing & Certified Steel Pour Governance
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Every foundation, column, and suspended slab pour undergoes computerized laboratory compression testing (7-day and 28-day cure cycles). We exclusively utilize Fe-550D primary TMT steel and 53-grade certified cement with full traceability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
                <div className="font-bold text-slate-900 text-sm">Lab-Tested Concrete</div>
                <p className="text-slate-500 text-xs mt-1">Cube compression test reports furnished for every structural slab.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
                <div className="font-bold text-slate-900 text-sm">Fe-550D Primary Steel</div>
                <p className="text-slate-500 text-xs mt-1">Tata Tiscon or JSW Neosteel with mill test certificates.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
                <div className="font-bold text-slate-900 text-sm">Senior Site Engineer</div>
                <p className="text-slate-500 text-xs mt-1">Full-time licensed civil engineer stationed daily on-site.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft-sm space-y-3">
            <Compass className="w-8 h-8 text-amber-600" />
            <h4 className="font-heading font-bold text-lg text-slate-900">Seismic IS 1893 Design</h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              All architectural blueprints and RCC frame designs are vetted for seismic resistance, lateral wind loads, and ground bearing capacities.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft-sm space-y-3">
            <Layers className="w-8 h-8 text-teal-600" />
            <h4 className="font-heading font-bold text-lg text-slate-900">Multi-Layer Waterproofing</h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Crystalline foundation tanking and polyurethane membrane waterproofing across terraces, bathrooms, and balconies backed by 72-hour ponding tests.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft-sm space-y-3">
            <FileCheck2 className="w-8 h-8 text-indigo-600" />
            <h4 className="font-heading font-bold text-lg text-slate-900">Transparent Fixed-Price BOQ</h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Itemized Bill of Quantities fixing every material brand, thickness, and specification with zero mid-project escalation surprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
