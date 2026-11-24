import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles, 
  Crown,
  Building2,
  Layers
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

const COMPARISON_ROWS = [
  {
    feature: 'Statutory Registration & History',
    pristine: '18+ Years Registered Enterprise (Est. 2008) • GSTIN: ' + CONTACT_CONFIG.gstin,
    local: 'Unregistered local maistries / informal sole proprietorships',
    apps: 'Brokerage platforms with zero on-ground construction experience',
    pristineWin: true
  },
  {
    feature: 'Cost Security & Pricing Policy',
    pristine: '100% Fixed-Price BOQ Covenant — Zero surprise variations or hidden fees',
    local: 'Initial low quotes escalating 25% – 45% during civil execution',
    apps: 'Estimated app quotes with extensive change-order upcharges',
    pristineWin: true
  },
  {
    feature: 'Structural Civil Warranty',
    pristine: 'Certified 10-Year RCC Structural Warranty with lab cube test reports',
    local: 'Zero written structural warranty once final payment is collected',
    apps: 'Cosmetic 1-year warranty (cannot provide civil structural guarantees)',
    pristineWin: true
  },
  {
    feature: 'Material Authenticity Guarantee',
    pristine: 'Quarry-certified Italian marble & German Blum hardware with certificates',
    local: 'Substituted commercial grade-B stone & non-certified hardware',
    apps: 'Mass-manufactured composite board with generic PVC edge-bands',
    pristineWin: true
  },
  {
    feature: 'On-Site Engineering Supervision',
    pristine: 'Dedicated full-time licensed Civil & Interior Architects stationed daily',
    local: 'Sub-contracted daily laborers with zero technical oversight',
    apps: 'Freelance coordinators making periodic 30-minute photo checks',
    pristineWin: true
  },
  {
    feature: 'Single-Window Turnkey Scope',
    pristine: 'Ground-up civil EPC, seismic RCC, MEP, luxury interiors & campus auditoriums',
    local: 'Fragmented vendors blaming each other for structural delays',
    apps: 'Interior decoration only; cannot execute structural civil construction',
    pristineWin: true
  }
];

export default function TurnkeyComparisonMatrix() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>The Pristine Standard of Governance</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Discerning Clients <span className="text-gradient-gold">Refuse to Settle</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Constructing a luxury private villa, penthouse suite, or institutional campus is a multi-decade investment. Compare the engineering rigor, legal protections, and material guarantees of Pristine Decore against traditional market options.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-3d-luxury">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="p-5 sm:p-6 bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-xs w-1/4">
                    Architectural &amp; Engineering Standards
                  </th>
                  <th className="p-5 sm:p-6 bg-amber-500/10 text-amber-950 font-extrabold text-xs sm:text-sm w-1/3 border-x border-amber-200 relative">
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-heading text-sm sm:text-base font-black">Pristine Decore</span>
                    </div>
                    <span className="text-[10px] text-amber-800 font-semibold block mt-0.5">
                      18+ Yrs Registered Atelier
                    </span>
                  </th>
                  <th className="p-5 sm:p-6 bg-slate-50 text-slate-600 font-semibold text-xs w-1/5">
                    Traditional Local Contractors
                  </th>
                  <th className="p-5 sm:p-6 bg-slate-50 text-slate-600 font-semibold text-xs w-1/5">
                    Generic Online Design Platforms
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    {/* Dimension Name */}
                    <td className="p-5 sm:p-6 font-bold text-slate-900 bg-white">
                      {row.feature}
                    </td>

                    {/* Pristine Decore Value */}
                    <td className="p-5 sm:p-6 bg-amber-50/40 border-x border-amber-200/70 font-semibold text-slate-900">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm leading-relaxed">{row.pristine}</span>
                      </div>
                    </td>

                    {/* Local Contractor */}
                    <td className="p-5 sm:p-6 text-slate-600 bg-white">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-xs leading-relaxed">{row.local}</span>
                      </div>
                    </td>

                    {/* Online App */}
                    <td className="p-5 sm:p-6 text-slate-600 bg-white">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-xs leading-relaxed">{row.apps}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
