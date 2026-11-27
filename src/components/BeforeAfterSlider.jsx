import React, { useState, useRef, useCallback } from 'react';
import { 
  Sparkles, 
  ArrowLeftRight, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import SafeImage from './SafeImage';

const TRANSFORMATION_PROJECTS = [
  {
    id: 'villa-salon',
    tabLabel: 'Luxury Living Salon',
    title: 'Sadashivanagar Private Villa — Living Salon',
    location: 'Sadashivanagar, Bengaluru',
    category: 'Bare Interior Frame to Luxury Salon',
    duration: '5 Months Turnkey Execution',
    beforeImg: 'https://images.unsplash.com/photo-1768321914688-86ff62032d47?w=1200&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=1200&auto=format&fit=crop&q=80',
    beforeLabel: 'Exposed Timber Framing, Piping & Unfinished Walls',
    afterLabel: 'Handover: Marble Flooring, Fluted Molding & Brass Ring Lights',
    stats: '3,800 Sq. Ft Living Pavilion',
    specs: [
      'Bookmatched Imported Marble Living Flooring',
      'Bespoke Moulded Acoustic Wall Paneling',
      'Architectural Ring Chandelier & DALI Controls',
      'Concealed Copper MEP & Gyproc Ceiling Frame'
    ],
    beforeStage: 'Interior Framing & MEP (Month 2)',
    afterStage: 'Turnkey Handover (Month 5)'
  },
  {
    id: 'modular-kitchen',
    tabLabel: 'Master Chef Kitchen',
    title: 'Whitefield Sky Penthouse — German Modular Kitchen',
    location: 'Whitefield, Bengaluru',
    category: 'Raw Masonry Shell to Modular Mastery',
    duration: '45 Days Fitout',
    beforeImg: 'https://images.unsplash.com/photo-1768321902380-c65dbd4df3f2?w=1200&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&auto=format&fit=crop&q=80',
    beforeLabel: 'Exposed Brickwork, Metal Ceiling Grid & Drywall Sheets',
    afterLabel: 'Handover: German Blum Joinery & Waterfall Quartz Island',
    stats: '650 Sq. Ft Chef’s Island Suite',
    specs: [
      'German Blum Legrabox Soft-Close Hardware',
      '12mm Waterfall Sintered Stone Island Counter',
      'Natural Oak & Anti-Scratch Matte White Joinery',
      'Recessed Under-Cabinet LED & Zero-VOC Finish'
    ],
    beforeStage: 'Brickwork & Ceiling Grid (Day 15)',
    afterStage: 'Flawless Installation (Day 45)'
  },
  {
    id: 'villa-civil',
    tabLabel: 'Turnkey Villa EPC',
    title: 'Prestige Golfshire — Ground-Up Villa Architecture',
    location: 'Nandi Hills Road, Bengaluru',
    category: 'RCC Structural Shell to Completed Estate',
    duration: '12 Months Civil + Interior EPC',
    beforeImg: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1200&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    beforeLabel: 'Multi-Story Reinforced Concrete & Shuttering Superstructure',
    afterLabel: 'Handover: Contemporary Villa Exterior & Warm Lighting',
    stats: '6,800 Sq. Ft Turnkey Villa Build',
    specs: [
      'Seismic IS 1893 RCC Structural Framework',
      'Exterior Weather-Shield Timber & Stone Facade',
      'Cantilevered Floor-to-Ceiling Toughened Glazing',
      '10-Year Certified Structural Civil Warranty'
    ],
    beforeStage: 'Civil RCC Superstructure (Month 4)',
    afterStage: 'Completed Estate (Month 12)'
  },
  {
    id: 'campus-auditorium',
    tabLabel: 'University Campus',
    title: 'Bengaluru Tech University — Library & Academic Wing',
    location: 'Sarjapur Road Campus, Bengaluru',
    category: 'Institutional Campus Fitout',
    duration: '90 Days Turnkey',
    beforeImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&auto=format&fit=crop&q=80',
    beforeLabel: 'Structural Steel Roof Trusses & Precision Joinery Work',
    afterLabel: 'Handover: Acoustic Research Library & Academic Wing',
    stats: '18,500 Sq. Ft Institutional Fitout',
    specs: [
      'STC 50+ Acoustic Ceiling & Partition Baffles',
      'Heavy-Duty Solid Wood & Steel Millwork Stacks',
      'Glare-Free 5000K Circadian Study Lighting',
      'National Building Code (NBC 2016) Fire Compliant'
    ],
    beforeStage: 'Structural Framing & Millwork (Month 1)',
    afterStage: 'Commissioned Wing (Month 3)'
  }
];

export default function BeforeAfterSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeProject = TRANSFORMATION_PROJECTS[activeIdx];

  const updateFromClientX = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const clampedX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((clampedX / rect.width) * 100);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos(prev => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos(prev => Math.min(95, prev + 5));
    }
  };

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
            Drag the interactive slider below to inspect how Pristine Decore transitions raw framing, concrete shells, and masonry rough-ins into world-class living suites, villas, and institutional campuses.
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
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-1">
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

            {/* Drag Container using pixel-exact CSS clipPath */}
            <div
              ref={containerRef}
              role="slider"
              tabIndex={0}
              aria-label="Before and after construction transformation comparison"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPos)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handleKeyDown}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden select-none touch-none cursor-ew-resize shadow-inner border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {/* After Image (Full Canvas) */}
              <SafeImage
                src={activeProject.afterImg}
                alt={activeProject.afterLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="eager"
              />

              {/* After Badge (Top Right) */}
              <div className="hidden sm:flex absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/40 shadow-luxury pointer-events-none items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>AFTER: {activeProject.afterStage}</span>
              </div>

              {/* Before Layer */}
              <div
                className="absolute inset-0 pointer-events-none will-change-[clip-path]"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <SafeImage
                  src={activeProject.beforeImg}
                  alt={activeProject.beforeLabel}
                  className="w-full h-full object-cover pointer-events-none"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-slate-950/15"></div>
                <div className="hidden sm:flex absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-slate-200 text-xs font-bold border border-slate-700 shadow-luxury pointer-events-none items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>BEFORE: {activeProject.beforeStage}</span>
                </div>
              </div>

              {/* Compact Mobile Stage Badges */}
              <div className="sm:hidden absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-slate-900/85 text-white text-[10px] font-bold pointer-events-none">
                BEFORE
              </div>
              <div className="sm:hidden absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-amber-600/90 text-white text-[10px] font-bold pointer-events-none">
                AFTER
              </div>

              {/* Vertical Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-0.5 sm:w-1 h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.65)]"></div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 text-slate-950 shadow-3d-floating border-2 border-white flex items-center justify-center">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Helper Pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none px-3.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-[10px] sm:text-[11px] text-slate-200 font-medium border border-white/20 whitespace-nowrap">
                ↔ Drag or use ← / → keys to compare
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
