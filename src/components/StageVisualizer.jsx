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
  ShieldCheck,
  Box,
  Eye,
  Sliders,
  ChevronRight
} from 'lucide-react';

export default function StageVisualizer({ 
  projectType = 'villa', 
  areaSqFt = 2500, 
  finishTier = 'luxury',
  scope = {} 
}) {
  const [nightMode, setNightMode] = useState(false);
  const [viewMode, setViewMode] = useState('3d'); // '3d' or '2d'
  const [selectedRoom, setSelectedRoom] = useState('salon');
  const [tiltAngle, setTiltAngle] = useState({ x: 46, z: -28 });

  // Pricing multiplier indicator
  const tierLabel = finishTier === 'ultra' ? 'Royal Bespoke' : finishTier === 'luxury' ? 'Luxury Signature' : 'Premium Standard';

  const rooms = {
    salon: {
      name: "Grand Living & Dining Salon",
      areaShare: 0.45,
      spec: "Bookmatched Italian Statuario marble, 3D fluted acoustic oak wall paneling, recessed magnetic track spotlights.",
      height: "3.4m Ceiling",
      highlights: ["Italian Statuario Slabs", "DALI Scene Lighting", "Acoustic Slats"]
    },
    kitchen: {
      name: "Modular Chef's Kitchen",
      areaShare: 0.22,
      spec: "Anti-scratch matte acrylic joinery, German Blum Aventos hardware, 12mm sintered stone island with mitred 45° waterfall.",
      height: "2.8m Ceiling",
      highlights: ["German Blum Hardware", "Sintered Quartz Island", "Zero-VOC Finish"]
    },
    suite: {
      name: "Master Suite & Walk-In Wardrobe",
      areaShare: 0.33,
      spec: "Smoked glass profile wardrobes with infrared sensor LED vertical strips, herringbone smoked oak flooring, acoustic false ceiling.",
      height: "3.0m Ceiling",
      highlights: ["Sensor Glass Wardrobes", "Herringbone Oak Planks", "Private Ensuite"]
    },
    terrace: {
      name: "Balcony & Hardscape Deck",
      areaShare: 0.12,
      spec: "Flamed non-slip travertine stone tiles, frameless structural glass balustrade with stainless-steel base channel.",
      height: "Open Sky Deck",
      highlights: ["Flamed Travertine", "Frameless Glass Balustrade", "Perimeter Drains"]
    }
  };

  return (
    <div className={`rounded-3xl border transition-all duration-500 overflow-hidden shadow-3d-luxury ${
      nightMode 
        ? 'bg-[#0B1120] border-amber-500/30 text-white' 
        : 'bg-white border-slate-200/90 text-slate-900'
    }`}>
      {/* Top Controls Bar */}
      <div className={`p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b transition-colors ${
        nightMode ? 'border-white/10 bg-white/[0.02]' : 'border-slate-100 bg-slate-50/70'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shadow-sm">
            {viewMode === '3d' ? (
              <Box className="w-4 h-4 animate-pulse text-amber-600" />
            ) : (
              <Compass className="w-4 h-4 text-amber-600" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-heading font-bold text-xs sm:text-sm tracking-tight">
                {viewMode === '3d' ? '3D Isometric Space Perspective' : '2D Architectural Space Blueprint'}
              </h4>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                {viewMode === '3d' ? 'Interactive 3D Cutaway' : 'CAD Plan'}
              </span>
            </div>
            <p className={`text-[10px] sm:text-[11px] ${nightMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Spatial interior modeling for {areaSqFt?.toLocaleString() || '2,500'} Sq. Ft • {tierLabel}
            </p>
          </div>
        </div>

        {/* View Mode & Lighting Mode Toggles */}
        <div className="flex items-center gap-2">
          {/* 3D vs 2D Switcher */}
          <div className="flex items-center p-0.5 rounded-xl bg-slate-200/70 dark:bg-slate-800 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setViewMode('3d')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                viewMode === '3d'
                  ? 'bg-amber-600 text-white font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('2d')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                viewMode === '2d'
                  ? 'bg-white text-slate-900 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>2D CAD</span>
            </button>
          </div>

          {/* Lighting Mode Toggle */}
          <button
            type="button"
            onClick={() => setNightMode(!nightMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
              nightMode
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            title="Toggle Daylight Plan / Nocturnal Ambient Glow"
          >
            {nightMode ? <Moon className="w-3.5 h-3.5 fill-slate-950" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
            <span className="hidden sm:inline">{nightMode ? 'Nocturnal Glow' : 'Daylight'}</span>
          </button>
        </div>
      </div>

      {/* Blueprint Visual Canvas (With 3D Isometric Viewport) */}
      <div className="p-6 relative min-h-[380px] flex flex-col justify-between select-none overflow-hidden">
        {/* Subtle Architectural Grid Lines */}
        <div className={`absolute inset-0 pointer-events-none opacity-20 ${
          nightMode 
            ? 'bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]' 
            : 'bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:20px_20px]'
        }`}></div>

        {/* Structural Envelope Outer Dimensions */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pb-2 border-b border-dashed border-slate-300/40">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            AXIS A-1 [X: 0.00m]
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold border border-amber-300/30">
            TOTAL BUILT-UP: {areaSqFt?.toLocaleString() || '2,500'} SQ. FT • HEIGHT: 3.4m
          </span>
          <span>AXIS B-4 [Y: 18.50m]</span>
        </div>

        {/* 3D VIEWPORT CONTAINER */}
        <div 
          className="relative z-10 my-6 py-4 perspective-1200 transition-all duration-700 flex items-center justify-center"
        >
          <div 
            style={{
              transform: viewMode === '3d' 
                ? `perspective(1200px) rotateX(${tiltAngle.x}deg) rotateZ(${tiltAngle.z}deg)` 
                : 'perspective(1200px) rotateX(0deg) rotateZ(0deg)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="w-full grid grid-cols-12 gap-3.5 preserve-3d"
          >
            {/* 1. Grand Living & Dining Salon (Span 7) */}
            <div 
              onClick={() => setSelectedRoom('salon')}
              style={{
                transform: selectedRoom === 'salon' && viewMode === '3d' ? 'translateZ(20px)' : 'translateZ(0px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`col-span-12 sm:col-span-7 p-4 sm:p-5 rounded-2xl cursor-pointer relative preserve-3d transition-all ${
                viewMode === '3d' ? 'wall-3d-extruded' : 'border-2'
              } ${
                selectedRoom === 'salon'
                  ? 'ring-2 ring-amber-500 shadow-gold-glow'
                  : ''
              } ${
                nightMode 
                  ? 'bg-gradient-to-br from-amber-950/40 via-amber-900/20 to-slate-900/80 border-amber-400/50 text-amber-100' 
                  : 'bg-gradient-to-br from-amber-50/90 via-white to-amber-100/40 border-amber-300 text-slate-900 shadow-soft-sm'
              }`}
            >
              {/* 3D Floating Spatial Indicator Badge */}
              {viewMode === '3d' && (
                <div 
                  style={{
                    transform: 'translateZ(30px) rotateX(-46deg) rotateZ(28deg)',
                    transformOrigin: 'bottom left'
                  }}
                  className="absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-3d-sm z-20 pointer-events-none"
                >
                  3.4m High Ceiling
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold font-heading flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Grand Living &amp; Dining Salon
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-300/40">
                  ~{(areaSqFt * 0.45).toFixed(0)} Sq.Ft
                </span>
              </div>
              <p className="text-[11px] opacity-80 leading-relaxed">
                Bookmatched Italian Statuario marble slabs, double-height acoustic fluting, recessed magnetic track lights.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/80 dark:bg-white/10 font-medium border border-amber-200/50">✦ Bookmatched Marble</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/80 dark:bg-white/10 font-medium border border-amber-200/50">✦ 3D Acoustic Fluting</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/80 dark:bg-white/10 font-medium border border-amber-200/50">✦ DALI Magnetic Tracks</span>
              </div>
            </div>

            {/* 2. Modular Chef's Kitchen (Span 5) */}
            <div 
              onClick={() => setSelectedRoom('kitchen')}
              style={{
                transform: selectedRoom === 'kitchen' && viewMode === '3d' ? 'translateZ(20px)' : 'translateZ(0px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`col-span-12 sm:col-span-5 p-4 sm:p-5 rounded-2xl cursor-pointer relative preserve-3d transition-all ${
                viewMode === '3d' ? 'wall-3d-extruded' : 'border-2'
              } ${
                selectedRoom === 'kitchen'
                  ? 'ring-2 ring-teal-500 shadow-soft-lg'
                  : ''
              } ${
                nightMode 
                  ? 'bg-gradient-to-br from-teal-950/40 via-teal-900/20 to-slate-900/80 border-teal-400/50 text-teal-100' 
                  : 'bg-gradient-to-br from-teal-50/90 via-white to-teal-100/40 border-teal-200 text-slate-900 shadow-soft-sm'
              }`}
            >
              {viewMode === '3d' && (
                <div 
                  style={{
                    transform: 'translateZ(30px) rotateX(-46deg) rotateZ(28deg)',
                    transformOrigin: 'bottom left'
                  }}
                  className="absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-teal-600 text-white shadow-3d-sm z-20 pointer-events-none"
                >
                  Blum Hardware
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold font-heading flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  Modular Chef's Kitchen
                </span>
                <span className="text-[10px] font-mono font-bold text-teal-800 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded border border-teal-300/40">
                  ~{(areaSqFt * 0.22).toFixed(0)} Sq.Ft
                </span>
              </div>
              <p className="text-[11px] opacity-80 leading-relaxed">
                Anti-scratch acrylic joinery, German Blum Aventos hardware, 12mm sintered quartz waterfall island.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/80 dark:bg-white/10 font-medium border border-teal-200/50">✦ Blum Legrabox</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/80 dark:bg-white/10 font-medium border border-teal-200/50">✦ Quartz Waterfall</span>
              </div>
            </div>

            {/* 3. Master Suite & Walk-In Wardrobe (Span 8) */}
            <div 
              onClick={() => setSelectedRoom('suite')}
              style={{
                transform: selectedRoom === 'suite' && viewMode === '3d' ? 'translateZ(20px)' : 'translateZ(0px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`col-span-12 sm:col-span-8 p-4 sm:p-5 rounded-2xl cursor-pointer relative preserve-3d transition-all ${
                viewMode === '3d' ? 'wall-3d-extruded' : 'border-2'
              } ${
                selectedRoom === 'suite'
                  ? 'ring-2 ring-indigo-500 shadow-soft-lg'
                  : ''
              } ${
                nightMode 
                  ? 'bg-gradient-to-br from-indigo-950/40 via-indigo-900/20 to-slate-900/80 border-indigo-400/50 text-indigo-100' 
                  : 'bg-gradient-to-br from-indigo-50/90 via-white to-indigo-100/40 border-indigo-200 text-slate-900 shadow-soft-sm'
              }`}
            >
              {viewMode === '3d' && (
                <div 
                  style={{
                    transform: 'translateZ(30px) rotateX(-46deg) rotateZ(28deg)',
                    transformOrigin: 'bottom left'
                  }}
                  className="absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-indigo-600 text-white shadow-3d-sm z-20 pointer-events-none"
                >
                  Sensor Closets
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold font-heading flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-indigo-600" />
                  Master Suite &amp; Walk-In Wardrobe Wing
                </span>
                <span className="text-[10px] font-mono font-bold text-indigo-800 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-300/40">
                  ~{(areaSqFt * 0.33).toFixed(0)} Sq.Ft
                </span>
              </div>
              <p className="text-[11px] opacity-80 leading-relaxed">
                Herringbone smoked oak flooring, tinted bronze glass walk-in wardrobe with sensor LED profiles and ensuite bath.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/80 dark:bg-white/10 font-medium border border-indigo-200/50">✦ Smoked Glass Closets</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-white/80 dark:bg-white/10 font-medium border border-indigo-200/50">✦ Herringbone Oak</span>
              </div>
            </div>

            {/* 4. Terrace Balcony & Hardscape Deck (Span 4) */}
            <div 
              onClick={() => setSelectedRoom('terrace')}
              style={{
                transform: selectedRoom === 'terrace' && viewMode === '3d' ? 'translateZ(20px)' : 'translateZ(0px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`col-span-12 sm:col-span-4 p-4 sm:p-5 rounded-2xl cursor-pointer relative preserve-3d transition-all ${
                viewMode === '3d' ? 'wall-3d-extruded' : 'border-2'
              } ${
                selectedRoom === 'terrace'
                  ? 'ring-2 ring-rose-500 shadow-soft-lg'
                  : ''
              } ${
                nightMode 
                  ? 'bg-gradient-to-br from-rose-950/40 via-rose-900/20 to-slate-900/80 border-rose-400/50 text-rose-100' 
                  : 'bg-gradient-to-br from-rose-50/90 via-white to-rose-100/40 border-rose-200 text-slate-900 shadow-soft-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold font-heading">
                  Balcony &amp; Deck
                </span>
                <span className="text-[10px] font-mono font-bold text-rose-800 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-300/40">
                  ~{(areaSqFt * 0.12).toFixed(0)} Sq.Ft
                </span>
              </div>
              <p className="text-[11px] opacity-80 leading-relaxed">
                Flamed non-slip travertine stone, frameless glass balustrade.
              </p>
            </div>
          </div>
        </div>

        {/* Selected Room Interactive 3D Drawer */}
        {selectedRoom && rooms[selectedRoom] && (
          <div className={`relative z-10 p-3.5 sm:p-4 rounded-2xl border transition-all mt-2 ${
            nightMode 
              ? 'bg-white/5 border-white/10 text-slate-200' 
              : 'bg-slate-50/90 border-slate-200 text-slate-800'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Inspecting: {rooms[selectedRoom].name}
                </span>
                <span className="text-[10px] font-mono bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded">
                  {rooms[selectedRoom].height}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                {rooms[selectedRoom].highlights.map((h, i) => (
                  <span key={i} className="font-semibold text-amber-700 dark:text-amber-400">
                    {h} {i < rooms[selectedRoom].highlights.length - 1 ? '•' : ''}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
              {rooms[selectedRoom].spec}
            </p>
          </div>
        )}

        {/* Blueprint Footer Specs */}
        <div className="relative z-10 pt-3 mt-3 border-t border-slate-200/50 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              18+ Years Registered Craft
            </span>
            <span className="text-slate-300">•</span>
            <span>10-Yr Structural Warranty</span>
            <span className="text-slate-300">•</span>
            <span>Fixed-Price BOQ</span>
          </div>
          <span className="font-mono font-bold text-amber-700">
            3D MODEL: PD-ISO-2026-V3
          </span>
        </div>
      </div>
    </div>
  );
}
