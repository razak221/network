import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StageVisualizer from '../components/StageVisualizer';
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
  Users, 
  Hammer, 
  Moon, 
  Clock, 
  Compass,
  CheckCircle2,
  Building2,
  Crown
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function HomePage() {
  // Sample state for the interactive visualizer teaser on home
  const [demoCrew] = React.useState({ promoters: 4, bouncers: 2, ushers: 2, stagehands: 2, supervisors: 1 });
  const [demoMaterials] = React.useState({ standees: 4, flexBackdrop: 1, acrylicBoard: 1, neonSign: 1, balloonArch: 1, soundAndMics: 1 });

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
              Why Premier Event Directors Choose <span className="text-gradient-gold">Pristine Decore</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The only single-window atelier uniting disciplined event manpower with on-demand custom fabrication and 100% nocturnal mall clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">Groomed & Verified Manpower</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Brand promoters, bilingual ushers, and licensed bouncers screened 48 hours prior. Supported by our exclusive <strong>15% standby reserve bench</strong> ready at nearby transit hubs.
              </p>
              <Link to="/manpower" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors pt-2">
                <span>Explore Manpower Rosters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">In-House Turnkey Fabrication</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Laser-cut 3D acrylic signs, neon flex boards, custom flex stage backdrops, and roll-up standees manufactured in our own workshop with zero middleman markups.
              </p>
              <Link to="/production" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors pt-2">
                <span>View Production Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">Nocturnal Mall SOP Specialists</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Complete mastery of mall rules (11:00 PM to 8:00 AM). Fire-rated fabrics, zero daytime noise, clean rubber cable ramps, and guaranteed morning handover before 10 AM.
              </p>
              <Link to="/mall-operations" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors pt-2">
                <span>Review Mall SOPs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive 2D Space Blueprint Teaser */}
      <section className="py-20 bg-[#F4F4F1] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Proprietary 2D Space Blueprint</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Visualize Your Event Layout <span className="text-gradient-gold">Before Build Night</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Test booth layouts, promoter stations, security cordons, and backdrop positioning in real-time. Switch between daylight and nocturnal mall glow modes to verify visibility.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real-time crowd flow & perimeter safety visualization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive day / night glow toggle for lighting audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Export instant formal B2B proposals with one click</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  to="/quote"
                  className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-soft-gold flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 fill-white" />
                  <span>Launch Full Event Builder Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-3 bg-white rounded-3xl border border-slate-200/80 shadow-luxury">
                <StageVisualizer 
                  crew={demoCrew} 
                  materials={demoMaterials} 
                  eventType="mall" 
                  venueName="Phoenix Marketcity Atrium" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Event Manpower Overview */}
      <ManpowerSection />

      {/* 5. Production & Decor Atelier */}
      <ProductionDecorSection />

      {/* 6. Nocturnal Mall Operations SOP & Interactive Timeline */}
      <MallExcellence />

      {/* 7. Visual Showcase Gallery */}
      <GallerySection />

      {/* 8. Bespoke Custom Requests Concierge */}
      <BespokeConcierge />

      {/* 9. Interactive Estimator Tool */}
      <EstimatorTool />

      {/* 10. Founders Direct Leadership Spotlight */}
      <FoundersSection />

      {/* 11. Testimonials & Mall FAQs */}
      <TestimonialsSection />

      {/* 12. Direct Contact Booking Desk */}
      <ContactSection />
    </div>
  );
}
