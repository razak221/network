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

export default function Hero({ onOpenConfigurator }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Pristine Decore! I have an urgent event inquiry for manpower / custom event production.");
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-cyan-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-glow-gold backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Mall Events • Corporate Shows • Custom Sourcing • 24/7 Execution</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Skilled Event <span className="text-gradient-gold">Manpower</span> &<br className="hidden sm:inline" />
            Custom <span className="text-gradient-cyan">Production</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Need energetic promoters, bouncers, and setup crew for mall activations? Or roll-up banners, glow signboards, and thematic decor? 
            <strong className="text-white font-semibold"> Whatever you request, we provide it on time.</strong>
          </p>

          {/* Founders Direct Endorsement */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-[#111827]/80 px-4 py-2 rounded-xl border border-white/10">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Direct Leadership Accountability: <strong className="text-slate-200">Syed Inam</strong>, <strong className="text-slate-200">Razak Ahmed Khan</strong> & <strong className="text-slate-200">Syed Haamed Ali</strong>
            </span>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenConfigurator}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Build Event & Instant Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('manpower')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm sm:text-base font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Hire Mall Manpower</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm sm:text-base font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-emerald-400" />
              <span>Emergency 24/7 Desk</span>
            </button>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-400/20 transition-all">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Building2 className="w-5 h-5" />
                <span className="font-heading font-bold text-lg text-white">500+</span>
              </div>
              <p className="text-xs text-slate-400">Mall & Brand Events Successfully Delivered</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-400/20 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-heading font-bold text-lg text-white">100%</span>
              </div>
              <p className="text-xs text-slate-400">Mall Security Clearance & Pass Compliance</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-400/20 transition-all">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Users className="w-5 h-5" />
                <span className="font-heading font-bold text-lg text-white">15% Bench</span>
              </div>
              <p className="text-xs text-slate-400">Standby Backup Crew on Immediate Call</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-400/20 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Clock className="w-5 h-5" />
                <span className="font-heading font-bold text-lg text-white">4 Hours</span>
              </div>
              <p className="text-xs text-slate-400">Emergency Print & Setup Turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

