import React from 'react';
import { 
  Compass, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Clock,
  HardHat,
  Palette,
  FileCheck2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard3D from './TiltCard3D';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Laser CAD Survey & 3D BIM Prototyping',
    timeline: 'Days 1 – 14',
    badge: 'Phase 1: Architecture',
    desc: 'Our senior architects conduct millimeter-accurate laser site surveys. We develop photorealistic 3D walkthroughs, audit daylight scene angles, and finalize space circulation before touching a single brick.',
    highlights: [
      'Laser site topography & structural clearance audit',
      '3D Isometric model with day/night ambient lighting',
      'Millimeter-accurate MEP, electrical & plumbing schematics',
      'Floor plan circulation & spatial zoning optimization'
    ],
    icon: Compass,
    iconBg: 'bg-amber-50 text-amber-700'
  },
  {
    number: '02',
    title: 'Material Curation & Fixed-Price BOQ Covenant',
    timeline: 'Days 15 – 30',
    badge: 'Phase 2: Commercial Governance',
    desc: 'You select certified Italian marble slabs, German Blum hardware, and acoustic timber profiles. We generate an all-inclusive, line-by-line BOQ. Once contracted, your project cost is legally locked with zero mid-project escalations.',
    highlights: [
      'Quarry-direct Italian Statuario & Calacatta slab inspection',
      'Certified German Blum & Hafele hardware provenance',
      'Itemized transparent BOQ with zero hidden variations',
      '4-stage milestone-based escrow disbursement schedule'
    ],
    icon: FileCheck2,
    iconBg: 'bg-teal-50 text-teal-700'
  },
  {
    number: '03',
    title: 'Turnkey Civil Execution & White-Glove Handover',
    timeline: 'Months 2 – 8',
    badge: 'Phase 3: Turnkey EPC',
    desc: 'Senior licensed civil and interior engineers supervise every structural pour and millwork installation daily. The project is delivered turnkey, deep-cleaned, snag-free, and backed by our formal 10-year structural warranty.',
    highlights: [
      'Seismic IS 1893 RCC framework with Fe-550D TMT steel',
      'Independent laboratory concrete cube compression testing',
      'Factory-finished laser edge-banded joinery installation',
      'Formal 10-Year Structural Civil Warranty Certificate'
    ],
    icon: HardHat,
    iconBg: 'bg-rose-50 text-rose-700'
  }
];

export default function TurnkeyProcessRoadmap() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFDF9] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Turnkey Execution Governance</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Raw Site to <span className="text-gradient-gold">Turnkey Luxury Handover</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Our disciplined 3-phase architectural roadmap eliminates contractor ambiguity, ensures zero cost overruns, and guarantees absolute engineering precision at every milestone.
          </p>
        </div>

        {/* 3 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1200 mb-14">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <TiltCard3D
                key={step.number}
                maxTilt={6}
                scale={1.02}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-3d-luxury transition-all card-luxury card-3d-hover flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Top Subtle Phase Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-200 group-hover:text-amber-500 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center font-bold shadow-soft-sm shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {step.badge}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Deliverables &amp; Controls:
                    </span>
                    <ul className="space-y-1.5">
                      {step.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Audited Quality
                  </span>
                  <Link
                    to="/quote"
                    className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    <span>Estimate BOQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* Quality Banner Guarantee */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white max-w-4xl mx-auto shadow-3d-luxury flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Zero Middleman Friction Guarantee</span>
            </div>
            <h4 className="font-heading text-xl font-bold text-white">
              One Single Contract. Complete In-House Delivery.
            </h4>
            <p className="text-xs text-slate-400">
              Architecture, civil construction, interior joinery, and MEP handled exclusively by Pristine Decore.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-soft-gold hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>Book Initial Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
