import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  HardHat, 
  Flame, 
  CheckCircle2, 
  ArrowRight,
  Compass,
  FileCheck2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import NightShiftTimeline from './NightShiftTimeline';

export default function MallExcellence() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Seismic RCC & Structural Engineering Compliance",
      desc: "All structural designs comply with national seismic building codes. Foundation soil-bearing tests, laser-guided piling, and concrete cube laboratory stress certifications precede every level of vertical construction.",
      color: "text-amber-700",
      bg: "bg-amber-100"
    },
    {
      icon: FileCheck2,
      title: "100% Municipal Clearances & Plan Sanctions",
      desc: "Never navigate municipal bureaucracy alone. Our statutory compliance team coordinates all town planning approvals, environmental clearances, and building sanctions seamlessly before site breaking.",
      color: "text-teal-700",
      bg: "bg-teal-100"
    },
    {
      icon: HardHat,
      title: "Dedicated On-Site Engineering Supervision",
      desc: "Every active construction and interior fitout site is manned by a certified senior civil engineer and quality supervisor overseeing daily material testing, safety protocols, and MEP conduit alignment.",
      color: "text-amber-700",
      bg: "bg-amber-100"
    },
    {
      icon: Flame,
      title: "Fire Safety & National Building Code (NBC) Compliance",
      desc: "We exclusively utilize heavy-duty fire-rated Gyproc partitions, zero-halogen FRLS concealed cabling, integrated smoke dampening systems, and certified emergency egress layouts.",
      color: "text-emerald-700",
      bg: "bg-emerald-100"
    }
  ];

  return (
    <section id="mall-ops" className="py-20 md:py-28 bg-[#F4F4F1] border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold shadow-soft-sm">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Commercial Fitouts & Engineering Standards</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Why High-End Projects Require <span className="text-gradient-teal">Pristine Decore</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Luxury residential construction and corporate commercial fitouts require zero margin for error. Discover how our engineering governance protects your investment.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${p.bg} flex items-center justify-center ${p.color} shadow-soft-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-teal-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Quality Assured & Certified Engineering SOP</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Milestone Timeline */}
        <NightShiftTimeline />

        {/* Bottom Callout */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-teal-50 border border-slate-200 shadow-soft-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">Planning a Luxury Villa or Commercial Fitout?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Get your itemized Bill of Quantities (BOQ) and 3D architectural pre-visualization prepared.</p>
          </div>
          <Link
            to="/quote"
            className="px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-soft-gold hover:scale-[1.02] transition-all shrink-0 flex items-center gap-2"
          >
            <span>Generate Itemized BOQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
