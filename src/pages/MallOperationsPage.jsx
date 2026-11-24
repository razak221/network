import React from 'react';
import { Link } from 'react-router-dom';
import NightShiftTimeline from '../components/NightShiftTimeline';
import { materialPartners } from '../data/galleryData';
import { 
  Building2, 
  ShieldCheck, 
  HardHat, 
  Flame, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  FileCheck2,
  Zap,
  Compass,
  Layers
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function MallOperationsPage() {
  const handleCommercialInquiry = () => {
    const text = `Hi Pristine Decore! I am planning a commercial / educational campus fitout (school, college, university or office) and need guidance on architectural blueprints, BOQ estimation, and building code compliance.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Seismic RCC Framing & Structural Load Compliance",
      desc: "All structural designs comply strictly with IS 456 & IS 1893 seismic building codes. Foundation soil-bearing tests, laser-guided piling, and concrete cube laboratory stress certifications precede every level of vertical construction.",
      badge: "IS 456 & 1893 Certified",
      color: "text-amber-800 bg-amber-50 border-amber-200"
    },
    {
      icon: FileCheck2,
      title: "100% Municipal Clearances & Plan Sanctions",
      desc: "Never navigate municipal bureaucracy alone. Our statutory compliance team coordinates all town planning approvals, environmental clearances, and building sanctions seamlessly before site breaking.",
      badge: "Statutory Clearances",
      color: "text-teal-800 bg-teal-50 border-teal-200"
    },
    {
      icon: HardHat,
      title: "Dedicated On-Site Engineering Supervision",
      desc: "Every active construction and interior fitout site is manned by a certified senior civil engineer and quality supervisor overseeing daily material testing, safety protocols, and MEP conduit alignment.",
      badge: "Full-Time Supervision",
      color: "text-indigo-800 bg-indigo-50 border-indigo-200"
    },
    {
      icon: Flame,
      title: "Fire Safety & National Building Code (NBC) Compliance",
      desc: "We exclusively utilize heavy-duty fire-rated Gyproc partitions, zero-halogen FRLS concealed cabling, integrated smoke dampening systems, and certified emergency egress layouts.",
      badge: "NBC 2016 Compliant",
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
          <span className="text-amber-800 font-semibold">Commercial Fitouts & Engineering Standards</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Commercial, Institutional &amp; Educational Campuses</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Commercial &amp; Campus <span className="text-gradient-gold">Engineering Governance</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Corporate office complexes, schools, colleges, university campuses, and commercial institutions demand uncompromising engineering standards, NBC fire code compliance, and transparent milestone delivery.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <button
              onClick={handleCommercialInquiry}
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft hover:scale-105 transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Consult Commercial Desk</span>
            </button>
            <Link
              to="/quote"
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-200 shadow-soft-sm hover:border-amber-300 transition-all"
            >
              Generate Commercial BOQ
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1200">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-3d-luxury transition-all card-luxury card-3d-hover space-y-4"
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

      {/* Interactive Project Milestone Governance Blueprint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-luxury">
          <div className="max-w-3xl space-y-3 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Interactive Governance Blueprint
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Turnkey Project Delivery Lifecycle
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Slide through our 6 project phases from initial core soil drilling and foundation piling to final white-glove architectural handover.
            </p>
          </div>

          <NightShiftTimeline />
        </div>
      </div>

      {/* Certified Material Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-amber-200/60 shadow-soft-sm text-center space-y-6">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
            Certified Material & Hardware Partners
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            We partner with industry-leading manufacturers for all structural steel, certified cement, architectural glass, Italian marble, and European hardware:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {(materialPartners || []).map((partner, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-soft-sm flex items-center gap-2"
              >
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>{partner}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
