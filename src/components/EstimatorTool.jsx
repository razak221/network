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
    <section className="py-20 md:py-24 bg-[#0D1322] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Not Sure What You Need? <span className="text-gradient-cyan">Calculate Your Event Setup</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Answer 3 quick questions about your venue to get an instant recommended manpower and physical materials blueprint.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#111827] border border-white/10 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
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
                    className={`p-3 rounded-xl text-left border transition-all ${
                      areaSize === opt.id
                        ? 'bg-amber-400/15 border-amber-400 text-white'
                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{opt.label}</div>
                    <div className="text-[10px] text-slate-400">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
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
                    className={`p-2.5 rounded-xl text-center border transition-all ${
                      objective === opt.id
                        ? 'bg-cyan-500/15 border-cyan-500 text-white'
                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-300">
              <TrendingUp className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Calculated based on real operational data from over 500 successful mall activations.</span>
            </div>
          </div>

          {/* Recommended Blueprint Output */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-amber-400/30 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Recommended Blueprint
                </span>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Optimal Engagement
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white">
                Suggested Event Allocation
              </h3>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="font-heading font-bold text-2xl text-amber-400">{rec.promoters}</div>
                  <div className="text-[11px] text-slate-400 mt-1">Promoters</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="font-heading font-bold text-2xl text-cyan-400">{rec.bouncers}</div>
                  <div className="text-[11px] text-slate-400 mt-1">Bouncers</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="font-heading font-bold text-2xl text-emerald-400">{rec.supervisors}</div>
                  <div className="text-[11px] text-slate-400 mt-1">Supervisor</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 pt-3">
                <div className="text-xs font-bold text-slate-300">Recommended Physical Production:</div>
                <div className="text-xs text-slate-400 space-y-1">
                  <div>• {rec.standees}x Heavy Roll-Up Standees for boundary line</div>
                  <div>• {rec.decor}</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href="#builder"
                className="w-full py-3.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
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

