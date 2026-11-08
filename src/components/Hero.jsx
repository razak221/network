import React from 'react';
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
  Palette
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

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
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-amber-50/40 via-[#FBFBFA] to-[#FBFBFA]">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-amber-200/30 via-rose-100/20 to-teal-100/20 blur-[130px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-soft backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Mall Events • Corporate Shows • Custom Sourcing • 24/7 Execution</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Skilled Event <span className="text-gradient-gold">Manpower</span> &<br className="hidden sm:inline" />
            Custom <span className="text-gradient-teal">Production</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Need energetic promoters, bouncers, and setup crew for mall activations? Or roll-up banners, glow signboards, and thematic decor? 
            <strong className="text-slate-900 font-semibold"> Whatever you request, we provide it on time.</strong>
          </p>

          {/* Founders Direct Endorsement */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-soft-sm">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Direct Leadership Accountability: <strong className="text-slate-900">Syed Inam</strong>, <strong className="text-slate-900">Razak Ahmed Khan</strong> & <strong className="text-slate-900">Syed Haamed Ali</strong>
            </span>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenConfigurator}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-soft-gold hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Build Event & Instant Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('manpower')}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl text-sm sm:text-base font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-soft-sm transition-all flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-teal-600" />
              <span>Hire Mall Manpower</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl text-sm sm:text-base font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-all flex items-center justify-center gap-2 shadow-soft-sm"
            >
              <Send className="w-4 h-4 text-emerald-600" />
              <span>Emergency 24/7 Desk</span>
            </button>
          </div>

          {/* Trust Guarantees Bar (Soft Light Cards) */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="flex items-center gap-2 text-amber-600 mb-1">
                <Building2 className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">500+</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Mall & Brand Events Successfully Delivered</p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="flex items-center gap-2 text-teal-600 mb-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">100%</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Mall Security Clearance & Pass Compliance</p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="flex items-center gap-2 text-amber-600 mb-1">
                <Users className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">15% Bench</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Standby Backup Crew on Immediate Call</p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="flex items-center gap-2 text-teal-600 mb-1">
                <Clock className="w-5 h-5" />
                <span className="font-heading font-bold text-xl text-slate-900">4 Hours</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Emergency Print & Setup Turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
