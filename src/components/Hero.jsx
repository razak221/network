import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Palette,
  Compass,
  MapPin,
  Calendar
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { materialPartners } from '../data/galleryData';
import TiltCard3D from './TiltCard3D';
import SafeImage from './SafeImage';

const HERO_SHOWCASE_SLIDES = [
  {
    id: 'living',
    category: 'interiors',
    tab: 'Living Salons',
    badge: 'Interiors First',
    title: 'Bookmatched Italian Marble & Fluted Salon',
    location: 'Sadashivanagar, Bengaluru',
    metric: '5,400 Sq. Ft • German Blum & Fluted Oak',
    image: 'https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'kitchen',
    category: 'kitchens',
    tab: 'Kitchens',
    badge: 'Lifetime Hardware',
    title: 'Sintered Waterfall Island & Blum Legrabox Suite',
    location: 'Whitefield Sky Penthouse, Bengaluru',
    metric: '12mm Porcelain Island • Zero-VOC Matte PU',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'closets',
    category: 'closets',
    tab: 'Wardrobes',
    badge: 'Custom Joinery',
    title: 'Fluted Bronze Glass Walk-In Dressing Suite',
    location: 'Jubilee Hills Enclave, Hyderabad',
    metric: 'Sensor LED Profiles • Bespoke Leather Trays',
    image: 'https://images.pexels.com/photos/30465909/pexels-photo-30465909/free-photo-of-luxury-modern-walk-in-wardrobe-design.jpeg?auto=compress&cs=tinysrgb&w=1000'
  },
  {
    id: 'campus',
    category: 'institutional',
    tab: 'Campuses',
    badge: 'NBC 2016 Grade',
    title: 'Acoustic Lecture Halls & Campus Architecture',
    location: 'Sarjapur Road Campus, Bengaluru',
    metric: 'Turnkey Institutional Civil & Smart Classrooms',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop&q=80'
  }
];

export default function Hero({ onOpenConfigurator }) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentSlide = HERO_SHOWCASE_SLIDES[activeSlideIdx];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlideIdx((prev) => (prev + 1) % HERO_SHOWCASE_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleScheduleInspection = () => {
    const el = document.getElementById('site-inspection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const msg = "Hi Pristine Decore! I would like to schedule an architectural consultation and site visit for an upcoming interior and construction project.";
      window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
    }
  };

  return (
    <section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF9F5] to-[#FAF9F5]">
      {/* Subtle Ambient Gold & Pearl Backdrop */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] bg-gradient-to-tr from-amber-100/45 via-rose-50/30 to-teal-50/35 blur-[140px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Asymmetric Flagship Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Value Proposition & Immediate Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Verified Legacy Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-xs font-semibold tracking-wide shadow-luxury-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-bold text-amber-800">
                18+ Years Registered Atelier • Est. 2008
              </span>
            </div>

            {/* Flagship Typography Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              <span className="block">Bespoke Architectural</span>
              <span className="block my-1 font-luxury italic font-normal text-amber-700 text-5xl sm:text-6xl xl:text-[64px] leading-[1.1]">
                Luxury Interior Design <span className="font-sans font-light not-italic text-amber-500 text-3xl sm:text-5xl align-baseline">&amp;</span>
              </span>
              <span className="block text-gradient-gold">Turnkey Execution</span>
            </h1>

            {/* Positioning Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Craftsmanship led by interiors — from bookmatched Italian Statuario marble salons, German Blum modular kitchens, and custom dressing suites to international schools, colleges, and university infrastructure, 
              <strong className="text-slate-900 font-semibold"> backed by turnkey civil engineering, fixed-price BOQs, and a 10-year warranty.</strong>
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <Link
                to="/quote"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-gold-glow hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                <span>Instant BOQ Cost Estimator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={handleScheduleInspection}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-all flex items-center justify-center gap-2 shadow-soft-sm"
              >
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>Book VIP Site Audit</span>
              </button>

              <Link
                to="/gallery"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-luxury-sm hover:border-amber-300 transition-all flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-amber-600" />
                <span>130+ Projects</span>
              </Link>
            </div>

            {/* Statutory Credentials Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-700">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-soft-sm font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>GSTIN: <span className="font-mono font-bold text-slate-900">{CONTACT_CONFIG.gstin}</span></span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-soft-sm font-semibold">
                <span>10-Yr Civil Warranty</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-soft-sm font-semibold">
                <span>Fixed-Price BOQ</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Floating Architectural Showcase Card */}
          <div
            className="lg:col-span-6 perspective-1200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <TiltCard3D
              maxTilt={6}
              scale={1.015}
              className="rounded-[2rem] bg-white p-3 sm:p-4 border border-amber-200/80 shadow-3d-luxury relative"
            >
              {/* High-Resolution Real Indian Architectural Canvas */}
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-900 preserve-3d">
                <SafeImage
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

                {/* Top Floating 3D Spec Pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-extrabold uppercase tracking-wider shadow-soft-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    {currentSlide.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold border border-amber-400/30">
                    3D BIM Pre-Verified
                  </span>
                </div>

                {/* Bottom Overlay Editorial Caption + Direct Category Deep Link */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-300">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{currentSlide.location}</span>
                    </div>
                    <h2 className="font-heading text-lg sm:text-xl font-extrabold leading-snug text-white">
                      {currentSlide.title}
                    </h2>
                    <p className="text-[11px] text-slate-300 font-medium">
                      {currentSlide.metric}
                    </p>
                  </div>

                  <Link
                    to={`/gallery?category=${currentSlide.category}`}
                    className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/95 hover:bg-amber-400 text-slate-950 text-[11px] font-bold shrink-0 shadow-soft-sm transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Interactive Slide Switcher Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                {HERO_SHOWCASE_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => {
                      setActiveSlideIdx(idx);
                      setIsPaused(true);
                    }}
                    className={`px-2.5 py-2 rounded-xl text-[11px] font-bold text-center transition-all truncate ${
                      activeSlideIdx === idx
                        ? 'bg-slate-900 text-amber-300 shadow-soft-sm'
                        : 'bg-slate-50 text-slate-600 hover:bg-amber-50 hover:text-amber-900 border border-slate-200/70'
                    }`}
                  >
                    {slide.tab}
                  </button>
                ))}
              </div>
            </TiltCard3D>
          </div>

        </div>

        {/* 4 Interactive 3D Trust Metric Cards */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto text-left perspective-1000">
          <TiltCard3D 
            maxTilt={8} 
            scale={1.03}
            className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-3d-luxury hover:border-amber-300 transition-all card-3d-hover"
          >
            <div className="flex items-center gap-2 text-amber-600 mb-1" style={{ transform: 'translateZ(20px)' }}>
              <Building2 className="w-5 h-5" />
              <span className="font-heading font-bold text-xl text-slate-900">18+ Years</span>
            </div>
            <p className="text-xs text-slate-500 font-semibold" style={{ transform: 'translateZ(10px)' }}>
              Govt. Registered Interior &amp; Architecture Firm
            </p>
          </TiltCard3D>

          <TiltCard3D 
            maxTilt={8} 
            scale={1.03}
            className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-3d-luxury hover:border-rose-300 transition-all card-3d-hover"
          >
            <div className="flex items-center gap-2 text-rose-600 mb-1" style={{ transform: 'translateZ(20px)' }}>
              <Palette className="w-5 h-5" />
              <span className="font-heading font-bold text-xl text-slate-900">500+</span>
            </div>
            <p className="text-xs text-slate-500 font-semibold" style={{ transform: 'translateZ(10px)' }}>
              Luxury Residential &amp; Campus Interiors Curated
            </p>
          </TiltCard3D>

          <TiltCard3D 
            maxTilt={8} 
            scale={1.03}
            className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-3d-luxury hover:border-amber-300 transition-all card-3d-hover"
          >
            <div className="flex items-center gap-2 text-amber-600 mb-1" style={{ transform: 'translateZ(20px)' }}>
              <Compass className="w-5 h-5" />
              <span className="font-heading font-bold text-xl text-slate-900">Blum &amp; Marble</span>
            </div>
            <p className="text-xs text-slate-500 font-semibold" style={{ transform: 'translateZ(10px)' }}>
              German Hardware Lifetime &amp; Italian Stone
            </p>
          </TiltCard3D>

          <TiltCard3D 
            maxTilt={8} 
            scale={1.03}
            className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-3d-luxury hover:border-teal-300 transition-all card-3d-hover"
          >
            <div className="flex items-center gap-2 text-teal-600 mb-1" style={{ transform: 'translateZ(20px)' }}>
              <ShieldCheck className="w-5 h-5" />
              <span className="font-heading font-bold text-xl text-slate-900">10-Yr BOQ</span>
            </div>
            <p className="text-xs text-slate-500 font-semibold" style={{ transform: 'translateZ(10px)' }}>
              Fixed-Price Covenant &amp; Turnkey Warranty
            </p>
          </TiltCard3D>
        </div>

      </div>

      {/* Elegant Architectural Materials Marquee */}
      <div className="mt-12 border-y border-slate-200/80 bg-white/75 backdrop-blur-md py-4 overflow-hidden marquee-container">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap pl-2">
            Engineered With World-Class Materials:
          </span>
          <div className="overflow-hidden flex-1 relative">
            <div className="animate-marquee flex items-center gap-8 text-xs font-bold text-slate-700">
              {materialPartners.concat(materialPartners).map((partner, idx) => (
                <div key={idx} className="flex items-center gap-3 shrink-0">
                  <span className="hover:text-amber-700 transition-colors">{partner}</span>
                  <span className="text-amber-300">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
