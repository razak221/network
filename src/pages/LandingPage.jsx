import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StageVisualizer from '../components/StageVisualizer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import MaterialStudio from '../components/MaterialStudio';
import TurnkeyProcessRoadmap from '../components/TurnkeyProcessRoadmap';
import TurnkeyComparisonMatrix from '../components/TurnkeyComparisonMatrix';
import BookingDesk from '../components/BookingDesk';
import ProductionDecorSection from '../components/ProductionDecorSection';
import GallerySection from '../components/GallerySection';
import EstimatorTool from '../components/EstimatorTool';
import TestimonialsSection from '../components/TestimonialsSection';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Box, 
  PhoneCall,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function LandingPage() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0 bg-[#FAF9F5]">
      
      {/* 1. Flagship Asymmetric Editorial Hero */}
      <Hero />

      {/* 2. Quick-Jump Section Navigation Bar */}
      <div className="sticky top-[108px] sm:top-[110px] z-30 bg-white/90 backdrop-blur-md border-b border-amber-200/70 shadow-soft-sm py-2.5 px-4 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            {[
              { id: 'visualizer-3d', label: '3D Space Studio' },
              { id: 'transformation', label: 'Before & After' },
              { id: 'roadmap', label: '3-Phase Process' },
              { id: 'materials', label: 'Material Swatches' },
              { id: 'gallery', label: '130+ Projects' },
              { id: 'site-inspection', label: 'VIP Site Audit' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 rounded-full text-[11px] font-bold text-slate-700 hover:bg-amber-50 hover:text-amber-900 border border-transparent hover:border-amber-200 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="tel:+919845302888"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 shrink-0 hover:bg-amber-100 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
            <span>{CONTACT_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* 3. Interactive 3D Isometric Viewport Teaser */}
      <section id="visualizer-3d" className="py-20 bg-[#F4F4F1] border-b border-slate-200/80">
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
                Experience real-time 3D spatial depth before breaking ground. Swap Italian Statuario, Calacatta Gold, or Nero Marquina stone live, switch between 3D cutaway and 2D CAD blueprint, and preview ambient daylight vs. nocturnal glow.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Live camera angles (Isometric, Perspective, Birdseye) &amp; extruded 3D slabs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive Italian stone swatch switcher &amp; daylight/nocturnal lighting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant switch between 3D volume perspective and 2D CAD dimension plan</span>
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
      <div id="transformation">
        <BeforeAfterSlider />
      </div>

      {/* 5. Disciplined 3-Phase Execution Roadmap */}
      <div id="roadmap">
        <TurnkeyProcessRoadmap />
      </div>

      {/* 6. Luxury Interior Architecture Atelier */}
      <ProductionDecorSection />

      {/* 7. Digital Atelier Material Palette & Swatch Studio */}
      <div id="materials">
        <MaterialStudio />
      </div>

      {/* 8. Why Discerning Clients Choose Us (Comparison Matrix) */}
      <TurnkeyComparisonMatrix />

      {/* 9. Visual Showcase Gallery (130+ Works) */}
      <GallerySection />

      {/* 10. Instant Estimator Tool */}
      <EstimatorTool />

      {/* 11. VIP Senior Architect Site Inspection & Audit Booking Desk */}
      <BookingDesk />

      {/* 12. Testimonials & Construction FAQs */}
      <TestimonialsSection />

      {/* 13. Final Conversion Strip (Streamlined CTA to avoid duplicate contact form) */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>18+ Years Registered • GSTIN: {CONTACT_CONFIG.gstin}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">
            Ready to Transform Your Space with Guaranteed BOQ Precision?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Speak directly with our Bengaluru headquarters team ({CONTACT_CONFIG.shortAddress}) for site measurements, physical sample boxes, or custom turnkey proposals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+919845302888"
              className="px-7 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-soft-gold inline-flex items-center gap-2 transition-all hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Studio: {CONTACT_CONFIG.phoneDisplay}</span>
            </a>
            <Link
              to="/gallery"
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm inline-flex items-center gap-2 transition-all"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Browse 130+ Indian Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
