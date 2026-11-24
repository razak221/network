import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StageVisualizer from '../components/StageVisualizer';
import TiltCard3D from '../components/TiltCard3D';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TurnkeyProcessRoadmap from '../components/TurnkeyProcessRoadmap';
import MaterialStudio from '../components/MaterialStudio';
import TurnkeyComparisonMatrix from '../components/TurnkeyComparisonMatrix';
import BookingDesk from '../components/BookingDesk';
import ManpowerSection from '../components/ManpowerSection';
import ProductionDecorSection from '../components/ProductionDecorSection';
import MallExcellence from '../components/MallExcellence';
import GallerySection from '../components/GallerySection';
import BespokeConcierge from '../components/BespokeConcierge';
import EstimatorTool from '../components/EstimatorTool';
import FoundersSection from '../components/FoundersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Hammer, 
  Compass,
  CheckCircle2,
  Building2,
  HardHat,
  Palette,
  Box
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Flagship Luxury Hero */}
      <Hero />

      {/* 2. Architectural Pillars / Value Proposition */}
      <section className="py-16 bg-[#FFFDF9] border-y border-amber-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              The Pristine Standard
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Discerning Clients Choose <span className="text-gradient-gold">Pristine Decore</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The premier single-window atelier uniting certified civil engineering, bespoke Italian interior architecture, and transparent fixed-price BOQs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1200">
            <TiltCard3D 
              maxTilt={7} 
              scale={1.02}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury card-3d-hover space-y-4"
            >
              <div 
                style={{ transform: 'translateZ(18px)' }}
                className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold shadow-soft-sm"
              >
                <Palette className="w-6 h-6" />
              </div>
              <h3 
                style={{ transform: 'translateZ(14px)' }}
                className="font-heading text-xl font-bold text-slate-900"
              >
                Luxury Interior Architecture
              </h3>
              <p 
                style={{ transform: 'translateZ(8px)' }}
                className="text-slate-600 text-xs sm:text-sm leading-relaxed"
              >
                Our core mastery: Bookmatched Italian Statuario marble, German Blum modular kitchens, bespoke fluted wall paneling, and architectural smart lighting.
              </p>
              <Link 
                to="/production" 
                style={{ transform: 'translateZ(12px)' }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors pt-2"
              >
                <span>View Interior Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </TiltCard3D>

            <TiltCard3D 
              maxTilt={7} 
              scale={1.02}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury card-3d-hover space-y-4"
            >
              <div 
                style={{ transform: 'translateZ(18px)' }}
                className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold shadow-soft-sm"
              >
                <Building2 className="w-6 h-6" />
              </div>
              <h3 
                style={{ transform: 'translateZ(14px)' }}
                className="font-heading text-xl font-bold text-slate-900"
              >
                Commercial &amp; Campus Interiors
              </h3>
              <p 
                style={{ transform: 'translateZ(8px)' }}
                className="text-slate-600 text-xs sm:text-sm leading-relaxed"
              >
                Smart multimedia school classrooms, acoustic university auditoriums, STEM laboratories, luxury retail boutiques, and corporate office fitouts.
              </p>
              <Link 
                to="/mall-operations" 
                style={{ transform: 'translateZ(12px)' }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors pt-2"
              >
                <span>Review Fitout Standards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </TiltCard3D>

            <TiltCard3D 
              maxTilt={7} 
              scale={1.02}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury card-3d-hover space-y-4"
            >
              <div 
                style={{ transform: 'translateZ(18px)' }}
                className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold shadow-soft-sm"
              >
                <HardHat className="w-6 h-6" />
              </div>
              <h3 
                style={{ transform: 'translateZ(14px)' }}
                className="font-heading text-xl font-bold text-slate-900"
              >
                Turnkey Civil Construction
              </h3>
              <p 
                style={{ transform: 'translateZ(8px)' }}
                className="text-slate-600 text-xs sm:text-sm leading-relaxed"
              >
                Complete ground-up structural construction for luxury private villas and educational blocks with seismic RCC framing and a <strong>10-year structural warranty</strong>.
              </p>
              <Link 
                to="/manpower" 
                style={{ transform: 'translateZ(12px)' }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors pt-2"
              >
                <span>Explore Civil Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </TiltCard3D>
          </div>
        </div>
      </section>

      {/* 3. Interactive 3D Isometric Space Visualizer & 2D Blueprint Teaser */}
      <section className="py-20 bg-[#F4F4F1] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
                <Box className="w-3.5 h-3.5 text-amber-600" />
                <span>Proprietary 3D Isometric &amp; CAD Space Engine</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Inspect Your Space in <span className="text-gradient-gold">True 3D Isometric Perspective</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Experience real-time 3D spatial depth before breaking ground. Switch seamlessly between 3D Isometric Perspective with extruded walls and 2D Architectural CAD Blueprint. Elevate rooms, audit ambient daylight, and inspect luxury finish specs interactively.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3D Isometric cutaway with extruded architectural slabs &amp; spatial heights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive day / night ambient glow toggle for nocturnal lighting audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant switch between 3D volume perspective and 2D CAD dimension blueprint</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  to="/quote"
                  className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-soft-gold flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 fill-white" />
                  <span>Launch Full Cost Estimator Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-3 bg-white rounded-3xl border border-slate-200/80 shadow-luxury">
                <StageVisualizer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Before & After Bare-Shell Transformation Slider */}
      <BeforeAfterSlider />

      {/* 5. Disciplined 3-Phase Execution Roadmap */}
      <TurnkeyProcessRoadmap />

      {/* 6. Luxury Interior Architecture Atelier (Primary Core Specialization) */}
      <ProductionDecorSection />

      {/* 7. Digital Atelier Material Palette & Swatch Studio */}
      <MaterialStudio />

      {/* 8. Why Discerning Clients Choose Us (Comparison Matrix) */}
      <TurnkeyComparisonMatrix />

      {/* 9. Bespoke Custom Millwork & Stone Concierge */}
      <BespokeConcierge />

      {/* 10. Visual Showcase Gallery (130+ Works) */}
      <GallerySection />

      {/* 11. Turnkey Civil Construction & Villa Architecture */}
      <ManpowerSection />

      {/* 12. Commercial & Educational Campus Fitout Governance */}
      <MallExcellence />

      {/* 13. VIP Senior Architect Site Inspection & Audit Booking Desk */}
      <BookingDesk />

      {/* 14. Interactive Estimator Tool */}
      <EstimatorTool />

      {/* 15. Architectural Mastery & Turnkey Governance */}
      <FoundersSection />

      {/* 16. Testimonials & Construction FAQs */}
      <TestimonialsSection />

      {/* 17. Direct Contact Booking Desk */}
      <ContactSection />
    </div>
  );
}
