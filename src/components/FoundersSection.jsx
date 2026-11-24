import React from 'react';
import { studioLeadership, companyValues } from '../data/foundersData';
import { 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Compass,
  Building2,
  Layers
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function FoundersSection() {
  const handleDeskConsultation = (deskName) => {
    const msg = `Hi Pristine Decore! I would like to consult with your ${deskName} regarding an upcoming construction and interior project.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="studio-standards" className="py-20 md:py-28 relative overflow-hidden bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Integrated Studio Disciplines</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Architectural Mastery &amp; <span className="text-gradient-gold">Turnkey Governance</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Zero contractor middleman friction. Every project contracted with Pristine Decore is engineered, curated, and supervised by our specialized in-house architectural and civil divisions.
          </p>
        </div>

        {/* 3 Studio Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 perspective-1200">
          {studioLeadership.map((division, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-3d-luxury card-3d-hover hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-teal-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {division.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{division.stats}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shadow-soft-gold shrink-0 overflow-hidden">
                    <img
                      src={division.avatar}
                      alt={division.name}
                      className="w-full h-full object-cover rounded-[14px]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors">
                      {division.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-700 mt-0.5">{division.role}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{division.title}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {division.bio}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Core Mandate:</div>
                  <div className="space-y-1.5">
                    {division.focus.map((f, i) => (
                      <div key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Studio Desk Chat Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleDeskConsultation(division.name)}
                  className="w-full py-3 rounded-2xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center gap-2 transition-all shadow-soft-sm"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Consult {division.role}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Company Commitments */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
              The Pristine Decore 4 Quality Guarantees
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Every turnkey contract is backed by our legally binding quality and warranty covenant:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {companyValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-2">
                <div className="flex items-center gap-2.5 text-amber-700 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 shrink-0 text-amber-600" />
                  <span>{val.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
