import React, { useState } from 'react';
import { 
  Compass, 
  Sun, 
  Moon, 
  Maximize2, 
  CheckCircle2, 
  Home, 
  Grid,
  Layers,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function StageVisualizer({ 
  projectType = 'villa', 
  areaSqFt = 2500, 
  finishTier = 'luxury',
  scope = {} 
}) {
  const [nightMode, setNightMode] = useState(false);

  // Pricing multiplier indicator
  const tierLabel = finishTier === 'ultra' ? 'Royal Bespoke' : finishTier === 'luxury' ? 'Luxury Signature' : 'Premium Standard';

  return (
    <div className={`rounded-3xl border transition-all duration-500 overflow-hidden shadow-luxury ${
      nightMode 
        ? 'bg-[#0B1120] border-amber-500/30 text-white' 
        : 'bg-white border-slate-200/90 text-slate-900'
    }`}>
      {/* Top Controls Bar */}
      <div className={`p-4 sm:p-5 flex items-center justify-between border-b transition-colors ${
        nightMode ? 'border-white/10 bg-white/[0.02]' : 'border-slate-100 bg-slate-50/70'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
            <Compass className="w-4 h-4 animate-spin animate-duration-3000" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm tracking-tight">
              2D Architectural Space Blueprint
            </h4>
            <p className={`text-[10px] sm:text-[11px] ${nightMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Live spatial zoning for {areaSqFt?.toLocaleString() || '2,500'} Sq. Ft ({tierLabel})
            </p>
          </div>
        </div>

        {/* Lighting Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setNightMode(!nightMode)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
              nightMode
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {nightMode ? <Moon className="w-3.5 h-3.5 fill-slate-950" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
            <span className="hidden sm:inline">{nightMode ? 'Evening Ambient Glow' : 'Daylight Plan Mode'}</span>
          </button>
        </div>
      </div>

      {/* Blueprint Visual Canvas */}
      <div className="p-6 relative min-h-[360px] flex flex-col justify-between select-none">
        {/* Subtle Architectural Grid Lines */}
        <div className={`absolute inset-0 pointer-events-none opacity-20 ${
          nightMode 
            ? 'bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]' 
            : 'bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:16px_16px]'
        }`}></div>

        {/* Structural Envelope Outer Dimensions */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pb-2 border-b border-dashed border-slate-300/40">
          <span>STRUCTURAL AXIS A-1</span>
          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 font-bold">
            TOTAL ENVELOPE: {areaSqFt?.toLocaleString() || '2,500'} SQ. FT
          </span>
          <span>STRUCTURAL AXIS B-4</span>
        </div>

        {/* 2D Space Blueprint Floorplan Grid */}
        <div className="relative z-10 my-4 grid grid-cols-12 gap-3">
          
          {/* Living & Dining Grand Salon (Span 7) */}
          <div className={`col-span-12 sm:col-span-7 p-4 rounded-2xl border-2 transition-all ${
            nightMode 
              ? 'bg-amber-500/10 border-amber-400/40 text-amber-200 shadow-gold-glow' 
              : 'bg-amber-50/70 border-amber-300 text-slate-900 shadow-soft-sm'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold font-heading flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Grand Living &amp; Dining Salon
              </span>
              <span className="text-[10px] font-mono opacity-70">~{(areaSqFt * 0.45).toFixed(0)} Sq.Ft</span>
            </div>
            <p className="text-[11px] opacity-80 leading-relaxed">
              Italian Statuario marble flooring, double-height ceiling cove, acoustic wood fluting &amp; magnetic track lighting.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/70 dark:bg-white/10 font-medium">✦ 4500K Ambient Cove</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/70 dark:bg-white/10 font-medium">✦ Bookmatched Marble</span>
            </div>
          </div>

          {/* Modular Chef's Kitchen (Span 5) */}
          <div className={`col-span-12 sm:col-span-5 p-4 rounded-2xl border-2 transition-all ${
            nightMode 
              ? 'bg-teal-500/10 border-teal-400/40 text-teal-200' 
              : 'bg-teal-50/70 border-teal-200 text-slate-900 shadow-soft-sm'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold font-heading flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-teal-600" />
                Modular Chef's Kitchen
              </span>
              <span className="text-[10px] font-mono opacity-70">~{(areaSqFt * 0.22).toFixed(0)} Sq.Ft</span>
            </div>
            <p className="text-[11px] opacity-80 leading-relaxed">
              Anti-scratch acrylic joinery, Blum soft-close hardware, 12mm sintered quartz island with waterfall edges.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/70 dark:bg-white/10 font-medium">✦ German Hardware</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/70 dark:bg-white/10 font-medium">✦ Quartz Island</span>
            </div>
          </div>

          {/* Master Bedroom & Walk-in Closet Wing (Span 8) */}
          <div className={`col-span-12 sm:col-span-8 p-4 rounded-2xl border-2 transition-all ${
            nightMode 
              ? 'bg-indigo-500/10 border-indigo-400/40 text-indigo-200' 
              : 'bg-indigo-50/70 border-indigo-200 text-slate-900 shadow-soft-sm'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold font-heading flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-indigo-600" />
                Master Suite &amp; Walk-In Wardrobe Wing
              </span>
              <span className="text-[10px] font-mono opacity-70">~{(areaSqFt * 0.33).toFixed(0)} Sq.Ft</span>
            </div>
            <p className="text-[11px] opacity-80 leading-relaxed">
              Herringbone oak timber flooring, tinted bronze glass walk-in wardrobe with sensor LED lighting and private ensuite bath.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/70 dark:bg-white/10 font-medium">✦ Sensor Glass Closets</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/70 dark:bg-white/10 font-medium">✦ Hardwood Flooring</span>
            </div>
          </div>

          {/* Architectural Terrace / Balcony Hardscape (Span 4) */}
          <div className={`col-span-12 sm:col-span-4 p-4 rounded-2xl border-2 transition-all ${
            nightMode 
              ? 'bg-rose-500/10 border-rose-400/40 text-rose-200' 
              : 'bg-rose-50/70 border-rose-200 text-slate-900 shadow-soft-sm'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold font-heading">
                Balcony &amp; Deck
              </span>
              <span className="text-[10px] font-mono opacity-70">Hardscaping</span>
            </div>
            <p className="text-[11px] opacity-80 leading-relaxed">
              Travertine non-slip stone, frameless glass balustrade, drainage conduits.
            </p>
          </div>

        </div>

        {/* Blueprint Footer Specs */}
        <div className="relative z-10 pt-3 border-t border-slate-200/50 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              10-Year RCC Structural Warranty
            </span>
            <span className="text-slate-300">•</span>
            <span>Zero-Crack Gyproc Ceilings</span>
          </div>
          <span className="font-mono font-bold text-amber-700">
            CAD SPEC: REV-2026-AR-01
          </span>
        </div>
      </div>
    </div>
  );
}
