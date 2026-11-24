import React from 'react';
import { Link } from 'react-router-dom';
import { studioLeadership, companyValues } from '../data/foundersData';
import { 
  Crown, 
  ShieldCheck, 
  Send, 
  Phone, 
  CheckCircle2, 
  Award, 
  Building2, 
  Sparkles,
  HardHat,
  Palette,
  Compass,
  ArrowRight
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function AboutPage() {
  const handleDeskChat = (divisionTitle) => {
    const msg = `Hi Pristine Decore! I am reaching out through pristinedecore.com to consult regarding ${divisionTitle}.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">About The Studio</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Luxury Interior Architecture Atelier • 18+ Years Registered</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Bespoke Mastery in <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Luxury Interior Design &amp; Architecture</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Our core craft is luxury interior architecture: uniting rare Italian marble, German modular millwork, and acoustic space curation with turnkey structural execution and fixed-price BOQs.
          </p>
        </div>
      </div>

      {/* Statutory Registration & Corporate Credentials Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50/80 via-white to-teal-50/80 border border-amber-200/90 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-soft-gold">
              18+
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>18+ Years Registered Enterprise (Est. 2008)</span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                Govt. Registered Luxury Interior &amp; Architecture Atelier
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                GSTIN: <span className="font-mono font-bold text-slate-900">{CONTACT_CONFIG.gstin}</span> • Registered Office: {CONTACT_CONFIG.studioAddress}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-800 shadow-soft-sm">
              IS 456 Seismic Compliant
            </span>
            <span className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-800 shadow-soft-sm">
              10-Yr Structural Warranty
            </span>
          </div>
        </div>
      </div>

      {/* 3 Studio Divisions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studioLeadership.map((division, idx) => (
            <div 
              key={division.title || idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-soft-sm">
                  <Compass className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-amber-400 border border-amber-400/40 px-2.5 py-1 rounded-full">
                    {division.role}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mt-2.5">{division.title}</h3>
                  <p className="text-xs text-amber-700 font-semibold mt-1">{division.specialization}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {division.bio}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">Studio Standards:</div>
                  <ul className="space-y-1.5">
                    {division.responsibilities.map((r, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleDeskChat(division.title)}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-amber-700" />
                  <span>Consult This Division</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Guarantees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-luxury space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Engineered For Longevity</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              The Pristine Decore Quality Contract
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Four non-negotiable standards we uphold on every turnkey villa, penthouse, and commercial project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((v, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFFDF9] border border-amber-200/70 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold">Ready to Start Your Construction or Interior Project?</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Schedule an architectural consultation or get an itemized BOQ estimate tailored to your exact floor plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-soft-gold"
            >
              Cost Estimator Studio
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              Contact Studio Desks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
