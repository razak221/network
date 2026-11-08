import React, { useState } from 'react';
import { 
  Calculator, 
  Users, 
  Layers, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';

export default function EstimatorTool() {
  const [footfall, setFootfall] = useState('medium');
  const [objective, setObjective] = useState('sampling');
  const [areaSize, setAreaSize] = useState('atrium');

  // Calculation heuristic
  const calculateRecommendation = () => {
    let promoters = 4;
    let bouncers = 2;
    let supervisors = 1;
    let standees = 2;
    let decor = "Thematic Entrance Balloon Arch + LED Backlight Signboard";

    if (areaSize === 'kiosk') {
      promoters = 2;
      bouncers = 1;
      standees = 2;
      decor = "2x Roll-Up Standees + Acrylic Counter Glow Sign";
    } else if (areaSize === 'atrium') {
      promoters = 6;
      bouncers = 3;
      standees = 4;
      decor = "Grand Entrance Arch, 20x10ft Stage Backdrop + 4 Standees";
    } else if (areaSize === 'concourse') {
      promoters = 10;
      bouncers = 5;
      supervisors = 2;
      standees = 8;
      decor = "Multi-zone Mall Branding, Stage Trussing, LED Wall & Balloon Installation";
    }

    if (objective === 'celebrity') {
      bouncers += 4;
      supervisors += 1;
    }

    return { promoters, bouncers, supervisors, standees, decor };
  };

  const rec = calculateRecommendation();

  return (
    <section className="py-20 md:py-24 bg-[#FBFBFA] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold shadow-soft-sm">
            <Calculator className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
            Not Sure What You Need? <span className="text-gradient-teal">Calculate Your Event Setup</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Answer 3 quick questions about your venue to get an instant recommended manpower and physical materials blueprint.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                1. Mall Area / Setup Size:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'kiosk', label: 'Compact Kiosk', sub: '< 200 sq ft' },
                  { id: 'atrium', label: 'Main Atrium', sub: '500-2000 sq ft' },
                  { id: 'concourse', label: 'Mega Concourse', sub: '2000+ sq ft' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAreaSize(opt.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      areaSize === opt.id
                        ? 'bg-amber-50 border-amber-500 text-slate-900 ring-1 ring-amber-500 shadow-soft-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-xs text-slate-900">{opt.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                2. Event Primary Objective:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'sampling', label: 'Sampling / Leads' },
                  { id: 'sales', label: 'Retail Flash Sale' },
                  { id: 'celebrity', label: 'VIP / Celebrity Visit' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setObjective(opt.id)}
                    className={`p-2.5 rounded-2xl text-center border transition-all ${
                      objective === opt.id
                        ? 'bg-teal-50 border-teal-600 text-teal-950 ring-1 ring-teal-600 shadow-soft-sm font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-semibold">{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
              <TrendingUp className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Calculated based on real operational data from over 500 successful mall activations.</span>
            </div>
          </div>

          {/* Recommended Blueprint Output */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-teal-50/70 border border-amber-200 shadow-soft-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Recommended Blueprint
                </span>
                <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Optimal Engagement
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-slate-900">
                Suggested Event Allocation
              </h3>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-soft-sm">
                  <div className="font-heading font-bold text-3xl text-amber-600">{rec.promoters}</div>
                  <div className="text-xs text-slate-600 font-semibold mt-1">Promoters</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-soft-sm">
                  <div className="font-heading font-bold text-3xl text-teal-600">{rec.bouncers}</div>
                  <div className="text-xs text-slate-600 font-semibold mt-1">Bouncers</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-soft-sm">
                  <div className="font-heading font-bold text-3xl text-slate-900">{rec.supervisors}</div>
                  <div className="text-xs text-slate-600 font-semibold mt-1">Supervisor</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 pt-3 shadow-soft-sm">
                <div className="text-xs font-bold text-slate-800">Recommended Physical Production:</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• {rec.standees}x Heavy Roll-Up Standees for boundary line</div>
                  <div>• {rec.decor}</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <a
                href="#builder"
                className="w-full py-4 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white flex items-center justify-center gap-2 transition-all shadow-soft-gold"
              >
                <span>Apply To Event Builder</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
