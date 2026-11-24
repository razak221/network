import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Home,
  Palette,
  Award,
  Compass
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { materialPartners } from '../data/galleryData';
import TiltCard3D from './TiltCard3D';

export default function Hero({ onOpenConfigurator }) {
  const handleScheduleInspection = () => {
    const el = document.getElementById('site-inspection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const msg = "Hi Pristine Decore! I would like to schedule an architectural consultation and site visit for an upcoming construction and interior project.";
      window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
    }
  };

  const handleWhatsApp = () => {
    const msg = "Hi Pristine Decore! I would like to schedule an architectural consultation and site visit for an upcoming construction and interior project.";
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-36 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF9F5] to-[#FAF9F5]">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-amber-100/40 via-rose-50/30 to-teal-50/30 blur-[140px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-7">
          
          {/* Subtle Luxury Pre-Heading */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-amber-300/80 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-luxury-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="uppercase tracking-widest text-[11px] font-bold text-amber-800">
              18+ Years Registered • Bespoke Luxury Interior Design &amp; Turnkey Architecture
            </span>
          </div>

          {/* Main Headline with Editorial Luxury Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-[1.18] flex flex-col items-center">
            <span className="block">Bespoke Architectural</span>
            <span className="block my-1 sm:my-2 font-luxury italic font-normal text-amber-700 text-5xl sm:text-6xl lg:text-7xl leading-snug">
              Luxury Interior Design <span className="font-sans font-light not-italic text-amber-500 text-3xl sm:text-5xl align-baseline">&amp;</span>
            </span>
            <span className="block text-gradient-gold">Turnkey Execution</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Specializing in bespoke luxury interior design — from bookmatched Italian Statuario marble living suites, European Blum modular kitchens, and custom walk-in closets to educational smart classrooms and corporate offices, 
            <strong className="text-slate-900 font-semibold"> backed by turnkey civil engineering, fixed-price BOQs, and 18+ years of registered mastery.</strong>
          </p>

          {/* Call to Actions (Above the fold) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-gold-glow hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Instant Cost Estimator</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/gallery"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-luxury-sm hover:border-amber-300 transition-all flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Explore Portfolio</span>
            </Link>

            <button
              onClick={handleScheduleInspection}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-all flex items-center justify-center gap-2 shadow-luxury-sm"
            >
              <Send className="w-4 h-4 text-emerald-600" />
              <span>Schedule Site Inspection</span>
            </button>
          </div>

          {/* Pristine Architectural Standards Banner */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200/90 shadow-3d-sm">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="text-slate-500 font-medium">Statutory &amp; Quality Credentials:</span>
              <span className="font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">18+ Years Registered</span>
              <span className="text-amber-400">•</span>
              <span className="font-mono font-bold text-slate-900">GSTIN: {CONTACT_CONFIG.gstin}</span>
              <span className="text-amber-400">•</span>
              <span className="font-bold text-slate-900">10-Year Structural Warranty</span>
              <span className="text-amber-400">•</span>
              <span className="font-bold text-slate-900">Fixed-Price BOQ</span>
            </div>
          </div>

          {/* Interactive 3D Spatial Feature Banner */}
          <div className="pt-4 max-w-4xl mx-auto perspective-1200">
            <TiltCard3D 
              maxTilt={6} 
              scale={1.01}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-white via-[#FFFDF9] to-amber-50/60 border border-amber-200/80 shadow-3d-luxury text-left relative overflow-hidden"
            >
              {/* Subtle 3D background depth illumination */}
              <div className="absolute top-0 right-0 w-80 h-40 bg-gradient-to-bl from-amber-200/30 to-transparent blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-[11px] font-bold tracking-wider uppercase border border-amber-300/50">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>3D Spatial Design Architecture</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                    Photorealistic 3D Walkthroughs Before We Cut a Single Panel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Explore exact marble vein matching, Blum hardware kinematics, and 4500K recessed lighting angles in millimeter-precise 3D space prior to on-site execution.
                  </p>
                </div>

                <div className="flex sm:flex-col gap-2 shrink-0">
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-soft-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    3D Isometric BIM
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-soft-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Millimeter Tolerances
                  </span>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* 4 Interactive 3D Trust Metric Cards */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left perspective-1000">
            <TiltCard3D 
              maxTilt={10} 
              scale={1.03}
              className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-3d-luxury hover:border-amber-300 transition-all card-3d-hover"
            >
              <div className="flex items-center gap-2 text-amber-600 mb-1" style={{ transform: 'translateZ(20px)' }}>
                <Building2 className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">18+ Years</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold" style={{ transform: 'translateZ(10px)' }}>
                Registered Interior &amp; Architecture Firm
              </p>
            </TiltCard3D>

            <TiltCard3D 
              maxTilt={10} 
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
              maxTilt={10} 
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
              maxTilt={10} 
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
      </div>

      {/* Elegant Architectural Materials Marquee */}
      <div className="mt-16 border-y border-slate-200/80 bg-white/70 backdrop-blur-md py-4 overflow-hidden marquee-container">
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
