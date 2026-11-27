import React, { useState, useRef } from 'react';
import { 
  Compass, 
  Sun, 
  Moon, 
  Home, 
  Grid, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Box,
  RotateCcw,
  Palette,
  Move
} from 'lucide-react';

const STONE_FINISHES = {
  statuario: {
    label: 'Italian Statuario',
    swatchClass: 'bg-gradient-to-br from-slate-50 via-white to-slate-200 border-slate-300',
    salonDay: 'from-amber-50/95 via-white to-amber-100/40 border-amber-300 text-slate-900',
    salonNight: 'from-amber-950/50 via-slate-900/90 to-slate-950 border-amber-400/50 text-amber-100',
    tagName: 'Statuario White Marble'
  },
  calacatta: {
    label: 'Calacatta Gold',
    swatchClass: 'bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-200 border-amber-400',
    salonDay: 'from-yellow-50/95 via-amber-50/60 to-amber-100/70 border-amber-400 text-slate-900',
    salonNight: 'from-amber-900/55 via-stone-900/90 to-slate-950 border-amber-300/60 text-amber-50',
    tagName: 'Calacatta Borghini Gold'
  },
  marquina: {
    label: 'Nero Marquina',
    swatchClass: 'bg-gradient-to-br from-slate-800 via-slate-900 to-black border-amber-500/60',
    salonDay: 'from-slate-800 via-slate-900 to-slate-950 border-amber-400/70 text-white',
    salonNight: 'from-black via-slate-900 to-amber-950/40 border-amber-400/70 text-amber-100',
    tagName: 'Spanish Nero Marquina'
  }
};

const CAMERA_PRESETS = [
  { id: 'iso', label: 'Isometric', x: 46, z: -28 },
  { id: 'low', label: 'Perspective', x: 56, z: -14 },
  { id: 'elevated', label: 'Birdseye', x: 34, z: -38 }
];

export default function StageVisualizer({ 
  projectType = 'villa', 
  areaSqFt = 2500, 
  finishTier = 'luxury',
  scope = {} 
}) {
  const [nightMode, setNightMode] = useState(false);
  const [viewMode, setViewMode] = useState('3d');
  const [selectedRoom, setSelectedRoom] = useState('salon');
  const [stoneFinish, setStoneFinish] = useState('statuario');
  const [tiltAngle, setTiltAngle] = useState({ x: 46, z: -28 });
  const [activePreset, setActivePreset] = useState('iso');
  const [isOrbiting, setIsOrbiting] = useState(false);
  const orbitRef = useRef({ active: false, moved: false, startX: 0, startY: 0, baseX: 46, baseZ: -28 });

  const tierLabel = finishTier === 'ultra' || finishTier === 'royal'
    ? 'Royal Bespoke'
    : finishTier === 'luxury'
      ? 'Luxury Signature'
      : 'Premium Standard';

  const stone = STONE_FINISHES[stoneFinish];
  const isDarkSalonSurface = nightMode || stoneFinish === 'marquina';
  const isCampus = projectType === 'institutional';
  const isCommercial = projectType === 'commercial' || projectType === 'retail';

  const rooms = isCampus
    ? {
        salon: {
          title: 'Acoustic University Auditorium',
          tag: '3.8m Acoustic Baffles',
          share: 0.45,
          height: '6.2m Tiered Span',
          shortDesc: 'Micro-perforated timber acoustic paneling, DMX stage lighting, and fire-rated ergonomic tiered seating.',
          chips: [stone.tagName, 'NRC 0.85 Baffles', 'DMX Stage Control'],
          spec: `Equipped with ${stone.tagName} lobby paving, micro-perforated acoustic timber baffling, and high-capacity central HVAC.`
        },
        kitchen: {
          title: 'STEM & Research Laboratories',
          tag: 'Epoxy & Fume Hoods',
          share: 0.22,
          height: '3.6m Ceiling',
          shortDesc: 'Acid-resistant solid epoxy benches, integrated vacuum/gas trunks, and safety shower systems.',
          chips: ['Epoxy Tops', 'Fume Extraction'],
          spec: 'Laboratory-grade stainless steel conduits, anti-static vinyl flooring, and NBC 2016 emergency suppression clearance.'
        },
        suite: {
          title: 'Smart Multimedia Classroom Wing',
          tag: 'Circadian 5000K LED',
          share: 0.33,
          height: '3.4m Ceiling',
          shortDesc: 'Glare-free circadian lighting, integrated interactive digital wall framing, and anti-sag student desks.',
          chips: ['Acoustic Drywall', 'Smart AV Integration'],
          spec: 'Engineered for optimal speech clarity (STC 50+ partitions) with heavy-traffic vitrified flooring rated for campuses.'
        },
        terrace: {
          title: 'Academic Quad & Plaza',
          tag: 'Outdoor Stone',
          share: 0.12,
          height: 'Open Campus Courtyard',
          shortDesc: 'Flamed non-slip granite amphitheater seating and rain-harvesting drainage.'
        }
      }
    : isCommercial
      ? {
          salon: {
            title: 'Executive Atrium & Reception',
            tag: 'Double-Height Lobby',
            share: 0.45,
            height: '4.2m Lobby Span',
            shortDesc: `${stone.tagName} monolith desk, smoked glass partitions, and architectural magnetic track lights.`,
            chips: [stone.tagName, 'STC 45 Acoustic Glass', 'DALI Scene Control'],
            spec: `Showcases bookmatched ${stone.tagName} reception cladding with seamless PDLC switchable glass privacy walls.`
          },
          kitchen: {
            title: 'Breakout Cafe & Barista Lounge',
            tag: 'Blum Commercial',
            share: 0.22,
            height: '3.0m Ceiling',
            shortDesc: 'Sintered quartz islands, concealed espresso equipment runs, and acoustic PET felt baffles.',
            chips: ['Blum Hardware', 'Sintered Quartz'],
            spec: 'High-footfall acoustic dining suite featuring antibacterial sintered surfaces and DALI warm task lighting.'
          },
          suite: {
            title: 'Boardrooms & Agile Pods',
            tag: 'VRV & Acoustic AV',
            share: 0.33,
            height: '3.2m Ceiling',
            shortDesc: 'Double-glazed demountable glass pods, recessed power trunks, and concealed VRV conditioning.',
            chips: ['Biometric Access', 'Demountable Glass'],
            spec: 'Confidential acoustic boardroom envelopes rated at STC 48 with zero-glare teleconferencing illumination.'
          },
          terrace: {
            title: 'Sky Deck Lounge',
            tag: 'Hardscape',
            share: 0.12,
            height: 'Open Sky Deck',
            shortDesc: 'Flamed non-slip travertine stone tiles with frameless laminated glass railings.'
          }
        }
      : {
          salon: {
            title: 'Grand Living & Dining Salon',
            tag: '3.4m High Ceiling',
            share: 0.45,
            height: '3.4m Ceiling',
            shortDesc: `${stone.tagName} slabs, 3D fluted acoustic oak wall paneling, and recessed magnetic track lights.`,
            chips: [stone.tagName, '3D Acoustic Fluting', 'DALI Magnetic Tracks'],
            spec: `Curated with ${stone.tagName}, bookmatched grain alignment, 3D fluted acoustic oak wall paneling, and DALI recessed scene spots.`
          },
          kitchen: {
            title: "Modular Chef's Kitchen",
            tag: 'Blum Hardware',
            share: 0.22,
            height: '2.8m Ceiling',
            shortDesc: 'Anti-scratch acrylic joinery, German Blum Aventos hardware, 12mm sintered quartz waterfall island.',
            chips: ['Blum Legrabox', 'Quartz Waterfall'],
            spec: '100% boiling-water-proof (BWP) marine ply carcass with German Blum Aventos hardware and 45° mitred sintered quartz island.'
          },
          suite: {
            title: 'Master Suite & Walk-In Wardrobe Wing',
            tag: 'Sensor Closets',
            share: 0.33,
            height: '3.0m Ceiling',
            shortDesc: 'Herringbone smoked oak flooring, tinted bronze glass walk-in wardrobe with sensor LED profiles.',
            chips: ['Smoked Glass Closets', 'Herringbone Oak'],
            spec: 'Tinted bronze aluminum-profile wardrobes with 3000K infrared sensor LED rails and custom leather organizer trays.'
          },
          terrace: {
            title: 'Balcony & Deck',
            tag: 'Outdoor Stone',
            share: 0.12,
            height: 'Open Sky Deck',
            shortDesc: 'Flamed non-slip travertine stone, frameless structural glass balustrade.'
          }
        };

  const applyPreset = (preset) => {
    setActivePreset(preset.id);
    setTiltAngle({ x: preset.x, z: preset.z });
    setViewMode('3d');
  };

  const handleOrbitDown = (e) => {
    if (viewMode !== '3d') return;
    orbitRef.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      baseX: tiltAngle.x,
      baseZ: tiltAngle.z,
    };
  };

  const handleOrbitMove = (e) => {
    if (!orbitRef.current.active || viewMode !== '3d') return;
    const dx = e.clientX - orbitRef.current.startX;
    const dy = e.clientY - orbitRef.current.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      orbitRef.current.moved = true;
      setIsOrbiting(true);
      setActivePreset('custom');
      const nextZ = Math.max(-62, Math.min(24, orbitRef.current.baseZ + dx * 0.22));
      const nextX = Math.max(20, Math.min(64, orbitRef.current.baseX - dy * 0.18));
      setTiltAngle({ x: Math.round(nextX), z: Math.round(nextZ) });
    }
  };

  const handleOrbitUp = () => {
    orbitRef.current.active = false;
    setTimeout(() => setIsOrbiting(false), 40);
  };

  const safeSelectRoom = (key) => {
    if (!orbitRef.current.moved) setSelectedRoom(key);
  };

  const safeArea = areaSqFt || 2500;
  const marbleSqFtEst = Math.round(safeArea * 0.62);
  const joineryRunFt = Math.round(safeArea * 0.14);
  const lightingNodes = Math.max(12, Math.round(safeArea / 65));

  return (
    <div
      className={`rounded-3xl border transition-all duration-500 overflow-hidden shadow-3d-luxury ${
        nightMode 
          ? 'bg-[#0B1120] border-amber-500/30 text-white' 
          : 'bg-white border-slate-200/90 text-slate-900'
      }`}
    >
      {/* Top Controls Bar */}
      <div
        className={`p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b transition-colors ${
          nightMode ? 'border-white/10 bg-white/[0.03]' : 'border-slate-100 bg-slate-50/80'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-sm ${
            nightMode ? 'bg-amber-500/20 border-amber-400/40 text-amber-400' : 'bg-amber-500/10 border-amber-500/30 text-amber-600'
          }`}>
            {viewMode === '3d' ? <Box className="w-4 h-4" /> : <Compass className="w-4 h-4" />}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-heading font-bold text-xs sm:text-sm tracking-tight">
                {viewMode === '3d' ? '3D Isometric Space Perspective' : '2D Architectural Space Blueprint'}
              </h4>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                nightMode
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                  : 'bg-amber-100 text-amber-900 border-amber-300'
              }`}>
                {viewMode === '3d' ? 'Interactive 3D Cutaway' : 'CAD Plan'}
              </span>
            </div>
            <p className={`text-[10px] sm:text-[11px] ${nightMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Spatial modeling for {areaSqFt?.toLocaleString() || '2,500'} Sq. Ft • {tierLabel}
            </p>
          </div>
        </div>

        {/* View Mode & Lighting Toggles */}
        <div className="flex items-center gap-2">
          <div className={`flex items-center p-0.5 rounded-xl text-xs font-semibold ${
            nightMode ? 'bg-slate-800 border border-slate-700' : 'bg-slate-200/70'
          }`}>
            <button
              type="button"
              onClick={() => setViewMode('3d')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                viewMode === '3d'
                  ? 'bg-amber-600 text-white font-bold shadow-sm'
                  : nightMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
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
                  : nightMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>2D CAD</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setNightMode(!nightMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
              nightMode
                ? 'bg-amber-400 text-slate-950 font-bold hover:bg-amber-300'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            title="Toggle Daylight Plan / Nocturnal Ambient Glow"
          >
            {nightMode ? <Moon className="w-3.5 h-3.5 fill-slate-950" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
            <span className="hidden sm:inline">{nightMode ? 'Nocturnal' : 'Daylight'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Finish & 3D Camera Angle Sub-Toolbar */}
      <div
        className={`px-4 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b text-[11px] ${
          nightMode ? 'border-white/10 bg-slate-900/60 text-slate-300' : 'border-slate-100 bg-white text-slate-600'
        }`}
      >
        {/* Live Stone Swatch Selector */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold flex items-center gap-1 text-[10px] uppercase tracking-wider opacity-75">
            <Palette className="w-3 h-3 text-amber-500" />
            Stone:
          </span>
          {Object.entries(STONE_FINISHES).map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setStoneFinish(key)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-all ${
                stoneFinish === key
                  ? 'border-amber-500 ring-1 ring-amber-500/40 bg-amber-500/10'
                  : nightMode ? 'border-white/10 hover:border-white/30' : 'border-slate-200 hover:border-amber-300'
              }`}
            >
              <span className={`w-3 h-3 rounded-full border ${item.swatchClass}`}></span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* 3D Angle Presets + Orbit Indicator */}
        {viewMode === '3d' && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold opacity-75 mr-1">
              <Move className="w-3 h-3 text-amber-500" />
              Drag to orbit:
            </span>
            {CAMERA_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all ${
                  activePreset === preset.id
                    ? 'bg-amber-600 text-white'
                    : nightMode ? 'bg-white/5 text-slate-300 hover:bg-white/15' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {preset.label}
              </button>
            ))}
            {activePreset === 'custom' && (
              <button
                type="button"
                onClick={() => applyPreset(CAMERA_PRESETS[0])}
                className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 inline-flex items-center gap-1"
                title="Reset Orbit"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>{tiltAngle.x}°/{tiltAngle.z}°</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Blueprint Visual Canvas (With 3D Isometric Viewport) */}
      <div className="p-5 sm:p-6 relative min-h-[380px] flex flex-col justify-between select-none overflow-hidden">
        {/* Subtle Architectural Grid Lines */}
        <div
          className={`absolute inset-0 pointer-events-none opacity-25 ${
            nightMode 
              ? 'bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]' 
              : 'bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:20px_20px]'
          }`}
        ></div>

        {/* Structural Envelope Outer Dimensions */}
        <div className={`relative z-10 flex items-center justify-between text-[10px] font-mono pb-2 border-b border-dashed ${
          nightMode ? 'text-slate-400 border-slate-700' : 'text-slate-500 border-slate-300/60'
        }`}>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            AXIS A-1 [X: 0.00m]
          </span>
          <span className={`px-2.5 py-0.5 rounded-full font-bold border ${
            nightMode
              ? 'bg-amber-500/15 text-amber-300 border-amber-400/30'
              : 'bg-amber-500/10 text-amber-900 border-amber-300/50'
          }`}>
            AREA: {areaSqFt?.toLocaleString() || '2,500'} SQ. FT • {rooms[selectedRoom]?.height}
          </span>
          <span>AXIS B-4 [Y: 18.50m]</span>
        </div>

        {/* 3D VIEWPORT CONTAINER (Drag-to-Orbit Enabled) */}
        <div
          onPointerDown={handleOrbitDown}
          onPointerMove={handleOrbitMove}
          onPointerUp={handleOrbitUp}
          onPointerCancel={handleOrbitUp}
          onPointerLeave={handleOrbitUp}
          className={`relative z-10 my-6 py-4 perspective-1200 transition-all duration-700 flex items-center justify-center touch-pan-y ${
            viewMode === '3d' ? (isOrbiting ? 'cursor-grabbing' : 'cursor-grab') : ''
          }`}
        >
          <div 
            style={{
              transform: viewMode === '3d' 
                ? `perspective(1200px) rotateX(${tiltAngle.x}deg) rotateZ(${tiltAngle.z}deg)` 
                : 'perspective(1200px) rotateX(0deg) rotateZ(0deg)',
              transformStyle: 'preserve-3d',
              transition: isOrbiting ? 'none' : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="w-full grid grid-cols-12 gap-3.5 preserve-3d"
          >
            {/* 1. Primary Salon / Hall Block (Span 7) */}
            <div 
              onClick={() => safeSelectRoom('salon')}
              style={{
                transform: selectedRoom === 'salon' && viewMode === '3d' ? 'translateZ(20px)' : 'translateZ(0px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`col-span-12 sm:col-span-7 p-4 sm:p-5 rounded-2xl cursor-pointer relative preserve-3d transition-all bg-gradient-to-br ${
                viewMode === '3d' ? 'wall-3d-extruded border' : 'border-2'
              } ${
                selectedRoom === 'salon' ? 'ring-2 ring-amber-500 shadow-gold-glow' : ''
              } ${
                nightMode ? stone.salonNight : stone.salonDay
              }`}
            >
              {viewMode === '3d' && (
                <div 
                  style={{
                    transform: `translateZ(30px) rotateX(${-tiltAngle.x}deg) rotateZ(${-tiltAngle.z}deg)`,
                    transformOrigin: 'bottom left'
                  }}
                  className="hidden sm:block absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-3d-sm z-20 pointer-events-none"
                >
                  {rooms.salon.tag}
                </div>
              )}

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs sm:text-sm font-bold font-heading flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  {rooms.salon.title}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${
                  isDarkSalonSurface
                    ? 'bg-amber-950/70 text-amber-300 border-amber-400/40'
                    : 'bg-amber-50 text-amber-800 border-amber-300/60'
                }`}>
                  ~{(areaSqFt * 0.45).toFixed(0)} Sq.Ft
                </span>
              </div>
              <p className="text-[11px] opacity-85 leading-relaxed">
                {rooms.salon.shortDesc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {rooms.salon.chips.map((chip, cIdx) => (
                  <span
                    key={cIdx}
                    className={`text-[9px] px-2 py-0.5 rounded font-medium border ${
                      isDarkSalonSurface
                        ? 'bg-white/10 text-amber-100 border-white/15'
                        : 'bg-white/85 text-slate-800 border-amber-200/70'
                    }`}
                  >
                    ✦ {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Kitchen / Lab Block (Span 5) */}
            <div 
              onClick={() => safeSelectRoom('kitchen')}
              style={{
                transform: selectedRoom === 'kitchen' && viewMode === '3d' ? 'translateZ(20px)' : 'translateZ(0px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`col-span-12 sm:col-span-5 p-4 sm:p-5 rounded-2xl cursor-pointer relative preserve-3d transition-all bg-gradient-to-br ${
                viewMode === '3d' ? 'wall-3d-extruded border' : 'border-2'
              } ${
                selectedRoom === 'kitchen' ? 'ring-2 ring-teal-500 shadow-soft-lg' : ''
              } ${
                nightMode 
                  ? 'from-teal-950/60 via-slate-900/90 to-slate-950 border-teal-400/50 text-teal-100' 
                  : 'from-teal-50/95 via-white to-teal-100/40 border-teal-200 text-slate-900 shadow-soft-sm'
              }`}
            >
              {viewMode === '3d' && (
                <div 
                  style={{
                    transform: `translateZ(30px) rotateX(${-tiltAngle.x}deg) rotateZ(${-tiltAngle.z}deg)`,
                    transformOrigin: 'bottom left'
                  }}
                  className="hidden sm:block absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-teal-600 text-white shadow-3d-sm z-20 pointer-events-none"
                >
                  {rooms.kitchen.tag}
                </div>
              )}

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs sm:text-sm font-bold font-heading flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                  {rooms.kitchen.title}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${
                  nightMode
                    ? 'bg-teal-950/70 text-teal-300 border-teal-400/40'
                    : 'bg-teal-50 text-teal-800 border-teal-300/60'
                }`}>
                  ~{(areaSqFt * 0.22).toFixed(0)} Sq.Ft
                </span>
              </div>
              <p className="text-[11px] opacity-85 leading-relaxed">
                {rooms.kitchen.shortDesc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {rooms.kitchen.chips.map((chip, cIdx) => (
                  <span
                    key={cIdx}
                    className={`text-[9px] px-2 py-0.5 rounded font-medium border ${
                      nightMode
                        ? 'bg-white/10 text-teal-100 border-white/15'
                        : 'bg-white/85 text-slate-800 border-teal-200/70'
                    }`}
                  >
                    ✦ {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Master Suite / Classroom Wing (Span 8) */}
            <div 
              onClick={() => safeSelectRoom('suite')}
              style={{
                transform: selectedRoom === 'suite' && viewMode === '3d' ? 'translateZ(20px)' : 'translateZ(0px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`col-span-12 sm:col-span-8 p-4 sm:p-5 rounded-2xl cursor-pointer relative preserve-3d transition-all bg-gradient-to-br ${
                viewMode === '3d' ? 'wall-3d-extruded border' : 'border-2'
              } ${
                selectedRoom === 'suite' ? 'ring-2 ring-indigo-500 shadow-soft-lg' : ''
              } ${
                nightMode 
                  ? 'from-indigo-950/60 via-slate-900/90 to-slate-950 border-indigo-400/50 text-indigo-100' 
                  : 'from-indigo-50/95 via-white to-indigo-100/40 border-indigo-200 text-slate-900 shadow-soft-sm'
              }`}
            >
              {viewMode === '3d' && (
                <div 
                  style={{
                    transform: `translateZ(30px) rotateX(${-tiltAngle.x}deg) rotateZ(${-tiltAngle.z}deg)`,
                    transformOrigin: 'bottom left'
                  }}
                  className="hidden sm:block absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-indigo-600 text-white shadow-3d-sm z-20 pointer-events-none"
                >
                  {rooms.suite.tag}
                </div>
              )}

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs sm:text-sm font-bold font-heading flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  {rooms.suite.title}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${
                  nightMode
                    ? 'bg-indigo-950/70 text-indigo-300 border-indigo-400/40'
                    : 'bg-indigo-50 text-indigo-800 border-indigo-300/60'
                }`}>
                  ~{(areaSqFt * 0.33).toFixed(0)} Sq.Ft
                </span>
              </div>
              <p className="text-[11px] opacity-85 leading-relaxed">
                {rooms.suite.shortDesc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {rooms.suite.chips.map((chip, cIdx) => (
                  <span
                    key={cIdx}
                    className={`text-[9px] px-2 py-0.5 rounded font-medium border ${
                      nightMode
                        ? 'bg-white/10 text-indigo-100 border-white/15'
                        : 'bg-white/85 text-slate-800 border-indigo-200/70'
                    }`}
                  >
                    ✦ {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Terrace / Quad Block (Span 4) */}
            <div 
              onClick={() => safeSelectRoom('terrace')}
              style={{
                transform: selectedRoom === 'terrace' && viewMode === '3d' ? 'translateZ(20px)' : 'translateZ(0px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`col-span-12 sm:col-span-4 p-4 sm:p-5 rounded-2xl cursor-pointer relative preserve-3d transition-all bg-gradient-to-br ${
                viewMode === '3d' ? 'wall-3d-extruded border' : 'border-2'
              } ${
                selectedRoom === 'terrace' ? 'ring-2 ring-rose-500 shadow-soft-lg' : ''
              } ${
                nightMode 
                  ? 'from-rose-950/60 via-slate-900/90 to-slate-950 border-rose-400/50 text-rose-100' 
                  : 'from-rose-50/95 via-white to-rose-100/40 border-rose-200 text-slate-900 shadow-soft-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs sm:text-sm font-bold font-heading">
                  {rooms.terrace.title}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${
                  nightMode
                    ? 'bg-rose-950/70 text-rose-300 border-rose-400/40'
                    : 'bg-rose-50 text-rose-800 border-rose-300/60'
                }`}>
                  ~{(areaSqFt * 0.12).toFixed(0)} Sq.Ft
                </span>
              </div>
              <p className="text-[11px] opacity-85 leading-relaxed">
                {rooms.terrace.shortDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Selected Room Interactive 3D Inspection Drawer */}
        {selectedRoom && rooms[selectedRoom] && (
          <div className={`relative z-10 p-3.5 sm:p-4 rounded-2xl border transition-all mt-2 ${
            nightMode 
              ? 'bg-white/[0.06] border-white/15 text-slate-200' 
              : 'bg-slate-50/90 border-slate-200 text-slate-800'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                <span className={`text-xs font-bold uppercase tracking-wider ${nightMode ? 'text-white' : 'text-slate-900'}`}>
                  Inspecting: {rooms[selectedRoom].title}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  nightMode ? 'bg-amber-900/50 text-amber-300' : 'bg-amber-100 text-amber-900'
                }`}>
                  {rooms[selectedRoom].height}
                </span>
              </div>
              <span className={`text-[11px] font-semibold ${nightMode ? 'text-amber-400' : 'text-amber-700'}`}>
                Click any room slab to inspect
              </span>
            </div>
            <p className={`text-xs mt-1.5 leading-relaxed ${nightMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {rooms[selectedRoom].spec || rooms[selectedRoom].shortDesc}
            </p>
            {/* Dynamic Computed Quantity Takeoff HUD */}
            <div className={`mt-3 pt-2.5 border-t grid grid-cols-3 gap-2 text-[10px] font-mono ${
              nightMode ? 'border-white/10 text-slate-300' : 'border-slate-200/80 text-slate-700'
            }`}>
              <div>
                <span className="opacity-65 block uppercase text-[9px]">Stone Takeoff</span>
                <strong className="font-bold text-amber-500">{marbleSqFtEst.toLocaleString()} Sq.Ft</strong>
              </div>
              <div>
                <span className="opacity-65 block uppercase text-[9px]">Joinery Run</span>
                <strong className="font-bold text-teal-500">{joineryRunFt} R.Ft</strong>
              </div>
              <div>
                <span className="opacity-65 block uppercase text-[9px]">DALI Nodes</span>
                <strong className="font-bold">{lightingNodes} Fixtures</strong>
              </div>
            </div>
          </div>
        )}

        {/* Blueprint Footer Specs */}
        <div className={`relative z-10 pt-3 mt-3 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] ${
          nightMode ? 'border-white/10 text-slate-400' : 'border-slate-200/70 text-slate-500'
        }`}>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`flex items-center gap-1 font-semibold ${nightMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
              <ShieldCheck className={`w-3.5 h-3.5 ${nightMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
              18+ Years Registered Craft
            </span>
            <span className="opacity-40">•</span>
            <span>10-Yr Structural Warranty</span>
            <span className="opacity-40 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Fixed-Price BOQ</span>
          </div>
          <span className={`font-mono font-bold ${nightMode ? 'text-amber-400' : 'text-amber-700'}`}>
            3D MODEL: PD-ISO-2026-V3
          </span>
        </div>
      </div>
    </div>
  );
}
