import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Building2,
  Palette,
  Award
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { mallPartners } from '../data/galleryData';

export default function Hero({ onOpenConfigurator }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const msg = "Hi Pristine Decore! I have an urgent event inquiry for manpower / custom event production.";
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
              The Premier Event Production & Workforce Atelier
            </span>
          </div>

          {/* Main Headline with Editorial Luxury Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-[1.18] flex flex-col items-center">
            <span className="block">Architecting Flawless</span>
            <span className="block my-1 sm:my-2 font-luxury italic font-normal text-amber-700 text-5xl sm:text-6xl lg:text-7xl leading-snug">
              Event Manpower <span className="font-sans font-light not-italic text-amber-500 text-3xl sm:text-5xl align-baseline">&amp;</span>
            </span>
            <span className="block text-gradient-gold">Bespoke Production</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            From charismatic brand promoters and disciplined security for high-density mall atriums to laser-cut 3D acrylic signs, roll-up standees, and grand thematic decor — 
            <strong className="text-slate-900 font-semibold"> you request it, we engineer and deliver it on schedule.</strong>
          </p>

          {/* Call to Actions (Above the fold) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-gold-glow hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Build Event &amp; Instant Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/gallery"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-luxury-sm hover:border-amber-300 transition-all flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Explore Visual Showcase</span>
            </Link>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-all flex items-center justify-center gap-2 shadow-luxury-sm"
            >
              <Send className="w-4 h-4 text-emerald-600" />
              <span>24/7 Rapid Response Desk</span>
            </button>
          </div>

          {/* Founders Direct Leadership Banner */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200/90 shadow-luxury-sm">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="text-slate-500 font-medium">Direct Co-Founder Governance:</span>
              <span className="font-bold text-slate-900">Syed Inam</span>
              <span className="text-amber-400">•</span>
              <span className="font-bold text-slate-900">Razak Ahmed Khan</span>
              <span className="text-amber-400">•</span>
              <span className="font-bold text-slate-900">Syed Haamed Ali</span>
            </div>
          </div>

          {/* 4 Trust Metric Cards */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury">
              <div className="flex items-center gap-2 text-amber-600 mb-1">
                <Building2 className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">500+</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">Mall Activations & Flagship Launches</p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury">
              <div className="flex items-center gap-2 text-teal-600 mb-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">100%</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">Mall Security Clearances & Passes</p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury">
              <div className="flex items-center gap-2 text-amber-600 mb-1">
                <Users className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">15% Bench</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">Standby Reserve Crew on Venue Call</p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury">
              <div className="flex items-center gap-2 text-teal-600 mb-1">
                <Clock className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">4 Hours</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">Rush Fabrication & Print Dispatch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Live Venue Marquee */}
      <div className="mt-16 border-y border-slate-200/80 bg-white/70 backdrop-blur-md py-4 overflow-hidden marquee-container">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap pl-2">
            Trusted At Leading Mall Atriums:
          </span>
          <div className="overflow-hidden flex-1 relative">
            <div className="animate-marquee flex items-center gap-8 text-xs font-bold text-slate-700">
              {mallPartners.concat(mallPartners).map((mall, idx) => (
                <div key={idx} className="flex items-center gap-3 shrink-0">
                  <span className="hover:text-amber-700 transition-colors">{mall}</span>
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
