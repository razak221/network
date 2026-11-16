import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Hammer, 
  HardHat,
  Compass,
  Building2,
  CalendarCheck
} from 'lucide-react';

const TIMELINE_STEPS = [
  {
    time: "Month 1-2",
    title: "Geotechnical Soil Testing & Foundation Piling",
    lead: "Geotechnical & Foundation Engineering Team",
    desc: "Certified soil core drilling, bearing capacity analysis, laser-guided excavation, and reinforced bored piling/raft slab construction with subterranean crystalline waterproofing.",
    checkpoints: ["Geotechnical core lab certified", "Piling load capacity verified", "Waterproofing membrane tested"],
    status: "Foundation Certified",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200"
  },
  {
    time: "Month 3-5",
    title: "Seismic RCC Structural Framing & Slab Pours",
    lead: "Senior Structural Engineering Lead",
    desc: "Precision shuttering, primary-grade Fe-550D TMT reinforcement, and monolithic concrete slab pours with automated curing sensors and 7/28-day cube compression strength testing.",
    checkpoints: ["Tata/JSW primary steel mill test reports", "Ultratech 53-grade concrete certified", "Seismic zone compliance verified"],
    status: "Superstructure Erected",
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200"
  },
  {
    time: "Month 6-7",
    title: "AAC Block Masonry & Concealed MEP Infrastructure",
    lead: "MEP & Infrastructure Desk",
    desc: "Thermal insulating AAC block walls, multi-circuit concealed electrical conduit runs with Finolex wiring, pressure-tested CPVC plumbing, and VRV/HVAC copper ducting.",
    checkpoints: ["Concealed conduit pressure test 10 bar", "Pre-plaster wall chase inspection", "VRV copper line nitrogen pressure test"],
    status: "Infrastructure Locked",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-200"
  },
  {
    time: "Month 8-9",
    title: "Multi-Coat Waterproofing & Gyproc Plastering",
    lead: "Quality Assurance & Waterproofing Specialist",
    desc: "Polyurethane elastomeric waterproofing applied to all wet areas, balconies, and terraces with 72-hour ponding tests, followed by laser-aligned Gyproc veneer plastering.",
    checkpoints: ["72-hr terrace ponding test certified", "Laser 90-degree corner plumb verified", "Zero-shrinkage plaster curing check"],
    status: "Surfaces Prepped",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200"
  },
  {
    time: "Month 10-11",
    title: "Italian Marble Flooring & Modular European Joinery",
    lead: "Principal Interior Architect & Master Joiner",
    desc: "Diamond-cut Italian Statuario/Bottochino marble dry-laid and polished, German Blum-hardware modular kitchens erected, and bespoke fluted wall panelling installed to 1mm tolerances.",
    checkpoints: ["Italian marble dry-lay pattern approved", "Blum soft-close hinge alignment verified", "Zero-VOC PU finish gloss inspection"],
    status: "Luxury Interior Realized",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
  },
  {
    time: "Month 12",
    title: "120-Point Snag Audit & White-Glove Handover",
    lead: "Project Director & Handover Desk",
    desc: "Comprehensive 120-point digital architectural audit, deep industrial cleaning, smart-home automation programming, and formal key handover with structural warranty documents.",
    checkpoints: ["120-point snag list zeroed out", "10-Year structural warranty bound", "As-built CAD & MEP drawings delivered"],
    status: "COMPLETED & HANDED OVER",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
  }
];

export default function NightShiftTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const current = TIMELINE_STEPS[activeStep];

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-luxury my-12">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
          <CalendarCheck className="w-3.5 h-3.5 text-amber-600" />
          <span>Turnkey Project Governance Blueprint</span>
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
          From Groundbreaking Foundation to White-Glove Handover
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Explore each milestone phase of our turnkey civil construction and luxury interior delivery lifecycle.
        </p>
      </div>

      {/* Interactive Phase Buttons */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
        {TIMELINE_STEPS.map((step, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-2xl text-center border transition-all ${
              activeStep === idx
                ? 'bg-amber-500 text-white border-amber-600 shadow-gold-glow scale-105 font-bold'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 font-medium'
            }`}
          >
            <div className="text-xs sm:text-sm tracking-tight">{step.time}</div>
            <div className={`text-[10px] mt-0.5 truncate ${activeStep === idx ? 'text-amber-100' : 'text-slate-400'}`}>
              Phase {idx + 1}
            </div>
          </button>
        ))}
      </div>

      {/* Active Phase Display Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-amber-50/30 border border-slate-200/90 shadow-soft-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              {current.time} Focus
            </span>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${current.badgeColor}`}>
              {current.status}
            </span>
          </div>

          <h4 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
            {current.title}
          </h4>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {current.desc}
          </p>

          <div className="pt-2">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Engineering QA Milestones Verified:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {current.checkpoints.map((cp, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-luxury-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium">{cp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Badge Card */}
        <div className="md:col-span-4 p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-luxury-sm">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-sm">
            <HardHat className="w-6 h-6" />
          </div>
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Supervising Engineering Desk</p>
          <p className="font-bold text-slate-900 text-sm">{current.lead}</p>
          <p className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 py-1 px-2 rounded-full border border-emerald-200">
            10-Year Warranty Certified
          </p>
        </div>
      </div>
    </div>
  );
}
