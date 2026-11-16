import React, { useState } from 'react';
import { 
  Calculator, 
  HardHat, 
  Palette, 
  Building2, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EstimatorTool() {
  const [projectType, setProjectType] = useState('villa');
  const [finishTier, setFinishTier] = useState('luxury');
  const [sqFt, setSqFt] = useState(3500);

  // Rate per sq.ft calculation
  const getRatePerSqFt = () => {
    let base = 2200; // Premium
    if (finishTier === 'luxury') base = 3400;
    if (finishTier === 'royal') base = 5200;

    if (projectType === 'commercial') base = Math.round(base * 0.9);
    if (projectType === 'interior_only') base = Math.round(base * 0.7);

    return base;
  };

  const rate = getRatePerSqFt();
  const totalEstimatedCost = rate * sqFt;
  const civilShare = Math.round(totalEstimatedCost * (projectType === 'interior_only' ? 0.15 : 0.45));
  const interiorShare = Math.round(totalEstimatedCost * (projectType === 'interior_only' ? 0.65 : 0.35));
  const mepShare = totalEstimatedCost - civilShare - interiorShare;
  const estimatedMonths = Math.max(3, Math.round(sqFt / 450));

  return (
    <section className="py-20 md:py-24 bg-[#FBFBFA] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold shadow-soft-sm">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Quick Architectural Estimator</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
            Instant Construction & <span className="text-gradient-gold">Interior Budget Calculator</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your typology, area, and finish grade to see immediate cost projections, category breakdowns, and delivery timelines.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                1. Project Typology:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'villa', label: 'Luxury Villa', sub: 'Civil + Interior' },
                  { id: 'interior_only', label: 'Penthouse', sub: 'Luxury Interiors' },
                  { id: 'commercial', label: 'Corporate', sub: 'Office Fitout' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setProjectType(opt.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      projectType === opt.id
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
                2. Finish Grade Tier:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'premium', label: 'Premium', rate: '₹2.2k/sqft' },
                  { id: 'luxury', label: 'Luxury', rate: '₹3.4k/sqft' },
                  { id: 'royal', label: 'Royal Atelier', rate: '₹5.2k/sqft' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFinishTier(opt.id)}
                    className={`p-2.5 rounded-2xl text-center border transition-all ${
                      finishTier === opt.id
                        ? 'bg-teal-50 border-teal-600 text-teal-950 ring-1 ring-teal-600 shadow-soft-sm font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-semibold">{opt.label}</div>
                    <div className="text-[10px] text-teal-700 font-bold">{opt.rate}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                <span>3. Built-Up Area:</span>
                <span className="text-slate-900 font-extrabold text-sm">{sqFt.toLocaleString()} sq. ft</span>
              </div>
              <input
                type="range"
                min="1000"
                max="12000"
                step="250"
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1,000 sq ft</span>
                <span>6,000 sq ft</span>
                <span>12,000 sq ft</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Includes 10-year structural engineering warranty, MEP blueprints, and fixed-price BOQ guarantee.</span>
            </div>
          </div>

          {/* Recommended Blueprint Output */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-teal-50/70 border border-amber-200 shadow-soft-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Estimated Investment
                </span>
                <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  ~{estimatedMonths} Months Handover
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-500 font-medium">Preliminary Turnkey Estimate</div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1">
                  ₹{(totalEstimatedCost / 100000).toFixed(2)} Lakhs
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Approx. ₹{rate.toLocaleString()} per sq. ft built-up</div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-center shadow-soft-sm">
                  <div className="font-heading font-bold text-sm text-amber-700">₹{(civilShare / 100000).toFixed(1)}L</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Civil & RCC</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-center shadow-soft-sm">
                  <div className="font-heading font-bold text-sm text-teal-700">₹{(interiorShare / 100000).toFixed(1)}L</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Interiors</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-center shadow-soft-sm">
                  <div className="font-heading font-bold text-sm text-slate-900">₹{(mepShare / 100000).toFixed(1)}L</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">MEP & Auto</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 text-xs text-slate-600 shadow-soft-sm">
                <div className="font-bold text-slate-800">Included In This Scope:</div>
                <div>• Seismic-compliant RCC framing or complete demolition</div>
                <div>• Italian marble flooring & Blum-hardware modular kitchen</div>
                <div>• Concealed Finolex wiring, CPVC plumbing & VRV ducting</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to="/quote"
                className="w-full py-4 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white flex items-center justify-center gap-2 transition-all shadow-soft-gold"
              >
                <span>Open Full BOQ Builder Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
