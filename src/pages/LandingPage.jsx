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
import BespokeConcierge from '../components/BespokeConcierge';
import EstimatorTool from '../components/EstimatorTool';
import FoundersSection from '../components/FoundersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import TiltCard3D from '../components/TiltCard3D';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  HardHat, 
  Palette, 
  Box, 
  Phone, 
  Calendar,
  Send,
  Compass
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function LandingPage() {
  const handleDirectCall = () => {
    window.location.href = "tel:+919845302888";
  };

  const handleWhatsAppConsult = () => {
    const text = "Hello Pristine Decore! I am exploring your flagship landing page on pristinedecore.com and would like to schedule an architectural consultation for an upcoming luxury project.";
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="space-y-0 bg-[#FAF9F5]">
      
      {/* Flagship Hero Section */}
      <Hero />

      {/* 2. Interactive 3D Isometric Viewport Teaser */}
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

      {/* 3. Interactive Before & After Bare-Shell Transformation Slider */}
      <BeforeAfterSlider />

      {/* 4. Disciplined 3-Phase Execution Roadmap */}
      <TurnkeyProcessRoadmap />

      {/* 5. Luxury Interior Architecture Atelier */}
      <ProductionDecorSection />

      {/* 6. Digital Atelier Material Palette & Swatch Studio */}
      <MaterialStudio />

      {/* 7. Why Discerning Clients Choose Us (Comparison Matrix) */}
      <TurnkeyComparisonMatrix />

      {/* 8. Bespoke Custom Millwork & Rare Stones */}
      <BespokeConcierge />

      {/* 9. Visual Showcase Gallery (100+ Works) */}
      <GallerySection />

      {/* 10. VIP Senior Architect Site Inspection & Audit Booking Desk */}
      <BookingDesk />

      {/* 11. Interactive Estimator Tool */}
      <EstimatorTool />

      {/* 12. Architectural Mastery & Governance */}
      <FoundersSection />

      {/* 13. Testimonials & Construction FAQs */}
      <TestimonialsSection />

      {/* 14. Direct Contact Booking Desk */}
      <ContactSection />
    </div>
  );
}
