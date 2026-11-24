import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowLeftRight, 
  CheckCircle2, 
  Building2, 
  Palette, 
  Layers, 
  ShieldCheck, 
  MapPin, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import TiltCard3D from './TiltCard3D';

const TRANSFORMATION_PROJECTS = [
  {
    id: 'villa-salon',
    tabLabel: 'Luxury Villa Salon',
    title: 'Sadashivanagar Private Villa — Living Salon',
    location: 'Sadashivanagar, Bengaluru',
    category: 'Turnkey Civil to Luxury Interior',
    duration: '6 Months Turnkey Execution',
    beforeImg: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?w=1200&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    beforeLabel: 'Raw Bare-Shell Concrete & Steel Superstructure',
    afterLabel: 'Handover: Italian Statuario & 3D Fluted Oak Salon',
    stats: '3,800 Sq. Ft Living Pavilion',
    specs: [
      'Bookmatched Italian Statuario Marble Slabs',
      'Double-Height 3D Fluted Acoustic Oak Walls',
      'Magnetic DALI Smart Architectural Track Lights',
      'Seismic IS 1893 RCC Structural Framework'
    ],
    beforeStage: 'Civil Superstructure (Month 2)',
    afterStage: 'Ready for Occupancy (Month 7)'
  },
  {
    id: 'modular-kitchen',
    tabLabel: 'Master Chef Kitchen',
    title: 'Whitefield Sky Penthouse — German Modular Kitchen',
    location: 'Whitefield, Bengaluru',
    category: 'Civil Rough-In to Modular Mastery',
    duration: '45 Days Fitout',
    beforeImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&auto=format&fit=crop&q=80',
    beforeLabel: 'Exposed Brickwork & Conduit MEP Rough-Ins',
    afterLabel: 'Handover: German Blum Joinery & Sintered Quartz',
    stats: '650 Sq. Ft Chef’s Island Suite',
    specs: [
      'German Blum Legrabox Electronic Push-to-Open',
      '12mm Sintered Stone Waterfall Island Counter',
      'Anti-Scratch Matte Acrylic BWP Marine Joinery',
      'Concealed Ducted Hood & Zero-VOC PU Finish'
    ],
    beforeStage: 'Rough Masonry & MEP (Day 15)',
    afterStage: 'Flawless Installation (Day 45)'
  },
  {
    id: 'campus-auditorium',
    tabLabel: 'University Auditorium',
    title: 'Bengaluru Tech University — 500-Seat Auditorium',
    location: 'Sarjapur Road Campus, Bengaluru',
    category: 'Institutional Campus Fitout',
    duration: '90 Days Turnkey',
    beforeImg: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80',
    beforeLabel: 'Bare Industrial Concrete Shell & Trusses',
    afterLabel: 'Handover: Acoustic Baffled 500-Seat Hall',
    stats: '14,000 Sq. Ft Campus Auditorium',
    specs: [
      'NRC 0.85 Fabric-Wrapped Acoustic Wall Paneling',
      'Class-1 Fire Retardant Auditorium Seating',
      'DMX Architectural Stage Lighting Control',
      'Central VRV HVAC with Acoustic Attenuators'
    ],
    beforeStage: 'Bare Shell Civil Hall (Month 1)',
    afterStage: 'Commissioned Auditorium (Month 3)'
  },
  {
    id: 'master-suite',
    tabLabel: 'Master Bedroom Wing',
    title: 'Indiranagar Prime Residence — Master Bedroom Suite',
    location: 'Indiranagar 100ft Road, Bengaluru',
    category: 'Luxury Suite Architecture',
    duration: '4 Months Turnkey',
    beforeImg: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&auto=format&fit=crop&q=80',
    beforeLabel: 'Bare Concrete Screed & Wall Openings',
    afterLabel: 'Handover: Herringbone Oak & Sensor Glass Closets',
    stats: '1,200 Sq. Ft Master Suite Wing',
    specs: [
      'European Smoked Herringbone Hardwood Flooring',
      'Tinted Bronze Profile Sensor Walk-In Closets',
      'Acoustic Velvet Headboard Cladding',
      'Private Spa Ensuite with Statuario Slab Walls'
    ],
    beforeStage: 'Civil Demolition & Plaster (Week 3)',
    afterStage: 'Final Turnkey Handover (Week 16)'
  }
];

export default function BeforeAfterSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeProject = TRANSFORMATION_PROJECTS[activeIdx];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleInquireTransformation = () => {
    const text = `Hello Pristine Decore! I saw your Bare-Shell to Luxury Transformation for "${activeProject.title}" on pristinedecore.com and would like to consult on my upcoming project.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <ArrowLeftRight className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Site Transformation Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Bare-Shell Concrete to <span className="text-gradient-gold">Bespoke Architectural Luxury</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Drag the interactive slider below to inspect how Pristine Decore transitions empty concrete slabs, structural steel, and masonry rough-ins into world-class living suites and institutional campuses.
          </p>

          {/* Project Switcher Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {TRANSFORMATION_PROJECTS.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  setActiveIdx(idx);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  activeIdx === idx
                    ? 'bg-amber-600 text-white shadow-soft-gold scale-105'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-amber-50/50'
                }`}
              >
                <span>{project.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* The Interactive Slider Viewport */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/90 shadow-3d-luxury space-y-6">
            
            {/* Project Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                    {activeProject.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    {activeProject.location}
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-slate-700">{activeProject.stats}</span>
                  <span>•</span>
                  <span className="font-mono text-amber-700 font-bold">{activeProject.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-amber-400 border border-amber-400/40">
                  {activeProject.category}
                </span>
              </div>
            </div>

            {/* Drag Container */}
            <div
              ref={containerRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                if (e.touches && e.touches[0]) {
                  handleMove(e.touches[0].clientX);
                }
              }}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-inner border border-slate-200"
            >
              {/* After Image (Background, Full Width) */}
              <img
                src={activeProject.afterImg}
                alt={activeProject.afterLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="eager"
              />

              {/* After Badge (Top Right) */}
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/40 shadow-luxury pointer-events-none flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>AFTER: {activeProject.afterStage}</span>
              </div>

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={activeProject.beforeImg}
                  alt={activeProject.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                    maxWidth: 'none'
                  }}
                  loading="eager"
                />

                {/* Dark overlay on before image for industrial contrast */}
                <div className="absolute inset-0 bg-slate-950/20"></div>

                {/* Before Badge (Top Left) */}
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-slate-200 text-xs font-bold border border-slate-700 shadow-luxury pointer-events-none flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>BEFORE: {activeProject.beforeStage}</span>
                </div>
              </div>

              {/* Vertical Divider Line with Physical Brass Grip Knob */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                {/* Vertical Line */}
                <div className="w-1 h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"></div>

                {/* Center Grip Pill Knob */}
                <div className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 text-slate-950 shadow-3d-floating border-2 border-white flex items-center justify-center transform hover:scale-110 transition-transform">
                  <ArrowLeftRight className="w-5 h-5 font-extrabold drop-shadow" />
                </div>
              </div>

              {/* Bottom Instructions Helper Pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none px-4 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-[11px] text-slate-300 font-medium border border-white/20">
                ↔ Drag handle to reveal civil transformation
              </div>
            </div>

            {/* Specifications Matrix & Action */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
              <div className="lg:col-span-8 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Architectural Specifications Executed:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleInquireTransformation}
                  className="w-full px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-soft-gold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 fill-white" />
                  <span>Consult Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-center text-slate-500">
                  Backed by 10-Yr Structural Civil Warranty
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
