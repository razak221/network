import React from 'react';
import { Link } from 'react-router-dom';
import NightShiftTimeline from '../components/NightShiftTimeline';
import { mallPartners } from '../data/galleryData';
import { 
  Building2, 
  Moon, 
  ShieldCheck, 
  Shirt, 
  Flame, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  FileCheck,
  Zap,
  Users
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function MallOperationsPage() {
  const handleMallInquiry = () => {
    const text = `Hi Syed Inam! I am planning a mall event and need guidance on mall passes, nocturnal setup permissions, and floor compliance.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text, CONTACT_CONFIG.founders.inam.whatsAppNumber), '_blank');
  };

  const pillars = [
    {
      icon: Moon,
      title: "Nocturnal Mall Setup (11:00 PM – 8:00 AM)",
      desc: "Shopping mall atriums strictly forbid daytime construction. Our dedicated night crew fabricates stages, erects trussing, and installs vinyl graphics silently overnight so your booth is 100% operational before the mall doors open at 10 AM.",
      badge: "Zero Daytime Noise",
      color: "text-amber-800 bg-amber-50 border-amber-200"
    },
    {
      icon: ShieldCheck,
      title: "100% Mall Pass Clearance Guarantee",
      desc: "Never risk having your promoters rejected at the service gate. Operations Lead Syed Inam coordinates all government ID verifications, insurance indemnities, and mall work permits 48 hours prior to deployment.",
      badge: "48h Pre-Approval",
      color: "text-teal-800 bg-teal-50 border-teal-200"
    },
    {
      icon: Shirt,
      title: "Strict Grooming & Uniform Protocol",
      desc: "Your brand reputation is on the line. Every promoter and hostess arrives in pristine branded polo shirts, tailored trousers, and polished footwear with multilingual conversational training.",
      badge: "Corporate Polished",
      color: "text-indigo-800 bg-indigo-50 border-indigo-200"
    },
    {
      icon: Flame,
      title: "Mall Fire & Electrical Safety Compliance",
      desc: "We exclusively utilize heavy-duty fire-rated flex fabrics, low-voltage certified LED power supplies, and clean rubber cable ramps to satisfy strict mall safety audits with zero fines or red tape.",
      badge: "Fire-Rated B1/B2",
      color: "text-rose-800 bg-rose-50 border-rose-200"
    }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Mall Operations SOP</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Operational Authority & Mall Clearances</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            The Mall Operations <span className="text-gradient-gold">Master Blueprint</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Shopping mall atriums are the most tightly regulated spaces in retail. One missing pass or fire certificate halts your entire activation. We manage the entire nocturnal protocol with flawless precision.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <button
              onClick={handleMallInquiry}
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft hover:scale-105 transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Contact Syed Inam (Ops Lead)</span>
            </button>
            <Link
              to="/quote"
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-200 shadow-soft-sm hover:border-amber-300 transition-all"
            >
              Configure Mall Booth Order
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${pillar.color}`}>
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Nocturnal Setup Scrubber */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-luxury">
          <div className="max-w-3xl space-y-3 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Interactive Simulation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              The 11:00 PM to 8:00 AM Nocturnal Timeline Scrubber
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Slide through the overnight installation sequence to see how our nocturnal riggers assemble trusses, mount graphics, and perform AV calibration while the city sleeps.
            </p>
          </div>

          <NightShiftTimeline />
        </div>
      </div>

      {/* Pre-Approved Mall Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-amber-200/60 shadow-soft-sm text-center space-y-6">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
            Pre-Approved Operating Protocol Across Top Atriums
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Our team regularly operates across premier shopping malls, maintaining active security clearance contacts, loading dock access, and familiarity with mall management SOPs:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {mallPartners.map((mall, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-soft-sm flex items-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-600" />
                <span>{mall}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

