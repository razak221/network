import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Volume2, 
  Sun, 
  Moon, 
  Maximize2,
  CheckCircle2,
  Compass
} from 'lucide-react';

export default function StageVisualizer({ crew, materials, eventType, venueName }) {
  const [nightMode, setNightMode] = useState(false);

  const totalCrew = Object.values(crew).reduce((a, b) => a + b, 0);

  return (
    <div className={`rounded-3xl border transition-all duration-500 overflow-hidden shadow-luxury ${
      nightMode 
        ? 'bg-[#0B0F19] border-amber-500/30 text-white' 
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
              Interactive 2D Space Blueprint
            </h4>
            <p className={`text-[10px] sm:text-[11px] ${nightMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Live floorplan updates as you adjust crew and production assets
            </p>
          </div>
        </div>

        {/* Ambient Mode Toggle */}
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
            <span className="hidden sm:inline">{nightMode ? 'Nocturnal Setup Glow' : 'Daylight Mall View'}</span>
          </button>
        </div>
      </div>

      {/* Blueprint Visual Canvas */}
      <div className="p-6 relative min-h-[340px] flex flex-col justify-between select-none">
        {/* Subtle Architectural Grid Lines */}
        <div className={`absolute inset-0 pointer-events-none opacity-20 ${
          nightMode 
            ? 'bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]' 
            : 'bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:16px_16px]'
        }`}></div>

        {/* Backdrop Wall / Stage Line */}
        <div className="relative z-10 w-full mb-6">
          <div className={`w-full py-2 px-4 rounded-xl border-2 text-center text-xs font-bold transition-all ${
            materials.flexBackdrop > 0
              ? nightMode
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-gold-glow'
                : 'bg-amber-50 border-amber-500 text-amber-900 shadow-soft-sm'
              : nightMode
                ? 'bg-white/5 border-dashed border-white/20 text-slate-500'
                : 'bg-slate-100 border-dashed border-slate-300 text-slate-400'
          }`}>
            <div className="flex items-center justify-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>
                {materials.flexBackdrop > 0 
                  ? `Stage Backdrop Wall (${materials.flexBackdrop} Unit Installed)` 
                  : 'Backdrop Area (Add Stage Flex Backdrop to activate)'}
              </span>
            </div>
            {materials.acrylicBoard > 0 && (
              <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-400 border border-cyan-400/40">
                ✦ 3D Illuminated Acrylic Logo Attached
              </span>
            )}
            {materials.neonSign > 0 && (
              <span className="inline-block mt-1 ml-1.5 px-2 py-0.5 rounded text-[10px] bg-pink-500/20 text-pink-400 border border-pink-400/40 animate-pulse">
                ✦ Custom Neon Flex Signboard (Glowing)
              </span>
            )}
          </div>
        </div>

        {/* Center Zone: Staging & Promoters */}
        <div className="relative z-10 my-4 flex-1 flex flex-col items-center justify-center">
          
          {/* Audio Visual Speakers on Left & Right */}
          {materials.soundAndMics > 0 && (
            <div className="w-full flex justify-between px-2 mb-4">
              <span className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 ${
                nightMode ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-700'
              }`}>
                <Volume2 className="w-3 h-3 text-teal-500" />
                <span>PA Tower L</span>
              </span>
              <span className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 ${
                nightMode ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-700'
              }`}>
                <Volume2 className="w-3 h-3 text-teal-500" />
                <span>PA Tower R</span>
              </span>
            </div>
          )}

          {/* Interactive Promoters Floor Representation */}
          <div className="w-full max-w-lg grid grid-cols-4 sm:grid-cols-6 gap-3 justify-items-center py-4">
            {/* Promoters Pins */}
            {[...Array(crew.promoters || 0)].map((_, i) => (
              <div 
                key={`p-${i}`}
                className="group relative flex flex-col items-center animate-fadeIn"
                title={`Brand Promoter #${i + 1}`}
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shadow-gold-glow ring-2 ring-amber-300">
                  P
                </div>
                <span className={`text-[9px] mt-1 font-semibold ${nightMode ? 'text-amber-300' : 'text-slate-700'}`}>
                  Promoter
                </span>
              </div>
            ))}

            {/* Ushers Pins */}
            {[...Array(crew.ushers || 0)].map((_, i) => (
              <div 
                key={`u-${i}`}
                className="group relative flex flex-col items-center animate-fadeIn"
                title={`Hospitality Usher #${i + 1}`}
              >
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shadow-sm ring-2 ring-teal-300">
                  U
                </div>
                <span className={`text-[9px] mt-1 font-semibold ${nightMode ? 'text-teal-300' : 'text-slate-700'}`}>
                  Usher
                </span>
              </div>
            ))}

            {/* Supervisor Pin */}
            {[...Array(crew.supervisors || 0)].map((_, i) => (
              <div 
                key={`s-${i}`}
                className="group relative flex flex-col items-center animate-fadeIn"
                title="Floor Supervisor"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-400 shadow-md">
                  ★
                </div>
                <span className={`text-[9px] mt-1 font-bold ${nightMode ? 'text-amber-400' : 'text-slate-900'}`}>
                  Lead
                </span>
              </div>
            ))}

            {totalCrew === 0 && (
              <div className="col-span-full text-center py-4 text-xs text-slate-400 italic">
                Add promoters or ushers in Step 2 to position them on the floorplan.
              </div>
            )}
          </div>
        </div>

        {/* Front Perimeter / Entrance Line with Bouncers & Standees */}
        <div className="relative z-10 w-full pt-4 border-t-2 border-dashed border-slate-300/40">
          <div className="flex items-center justify-between">
            {/* Left Standee */}
            <div className="flex items-center gap-1.5">
              {materials.standees > 0 && (
                <div className={`px-2 py-1 rounded text-[10px] font-bold ${
                  nightMode ? 'bg-amber-400/20 text-amber-300' : 'bg-amber-100 text-amber-900'
                }`}>
                  Standee #{1}
                </div>
              )}
            </div>

            {/* Center Entrance Gate & Bouncers */}
            <div className="flex items-center gap-3">
              {materials.balloonArch > 0 && (
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                  nightMode ? 'bg-pink-500/20 text-pink-300 border-pink-400/40' : 'bg-pink-50 text-pink-800 border-pink-200'
                }`}>
                  ✨ Grand Thematic Entrance Archway
                </span>
              )}

              {/* Bouncers at Entrance */}
              {[...Array(crew.bouncers || 0)].map((_, i) => (
                <div key={`b-${i}`} className="flex items-center gap-1">
                  <div className="w-7 h-7 rounded-lg bg-red-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                    B
                  </div>
                  <span className={`text-[10px] font-bold ${nightMode ? 'text-red-400' : 'text-red-700'}`}>
                    Security
                  </span>
                </div>
              ))}
            </div>

            {/* Right Standee */}
            <div className="flex items-center gap-1.5">
              {materials.standees > 1 && (
                <div className={`px-2 py-1 rounded text-[10px] font-bold ${
                  nightMode ? 'bg-amber-400/20 text-amber-300' : 'bg-amber-100 text-amber-900'
                }`}>
                  Standee #{materials.standees}
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-3">
            <span className={`text-[10px] uppercase font-bold tracking-widest ${
              nightMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              ▲ MALL VISITOR FOOTFALL FLOW DIRECTION ▲
            </span>
          </div>
        </div>

      </div>

      {/* Blueprint Footer Stats */}
      <div className={`p-4 text-xs font-semibold flex flex-wrap items-center justify-between gap-2 border-t transition-colors ${
        nightMode ? 'border-white/10 bg-white/[0.01] text-slate-400' : 'border-slate-100 bg-slate-50/50 text-slate-600'
      }`}>
        <div className="flex items-center gap-4">
          <span>Active Venue: <strong className={nightMode ? 'text-white' : 'text-slate-900'}>{venueName || 'Mall Main Atrium'}</strong></span>
          <span>Total Ground Deployment: <strong className="text-amber-600 font-bold">{totalCrew} Staff</strong></span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>SOP Layout Verified</span>
        </div>
      </div>
    </div>
  );
}
