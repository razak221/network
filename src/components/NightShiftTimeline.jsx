import React, { useState } from 'react';
import { 
  Clock, 
  Moon, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Hammer, 
  Volume2, 
  Shirt,
  CalendarCheck
} from 'lucide-react';

const TIMELINE_STEPS = [
  {
    time: "11:00 PM",
    title: "Mall Dock Sign-In & Security Clearance",
    lead: "Syed Inam (Ground Operations)",
    desc: "As the last retail shoppers exit, our logistics convoy unloads at the mall service basement dock. Every crew member signs in with verified government IDs and receives designated nocturnal badges.",
    checkpoints: ["Service freight elevator booked", "Mall security indemnity submitted", "Loading dock clearance"],
    status: "Dock Entry Secured",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200"
  },
  {
    time: "01:00 AM",
    title: "Heavy Trussing, Staging & Carpeting",
    lead: "Syed Haamed Ali (Production Head)",
    desc: "Silent, modular assembly of raised stage decks and aluminum box trussing. Non-slip commercial carpet runners laid with fire-retardant edge taping.",
    checkpoints: ["Stage level & weight-load verified", "Rubber cable protectors installed", "Zero-noise impact tools used"],
    status: "Infrastructure Erected",
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200"
  },
  {
    time: "03:30 AM",
    title: "High-Tension Flex & 3D Signage Mounting",
    lead: "Fabrication Specialists",
    desc: "Seamless 40ft backdrops tensioned onto structural frames with zero wrinkles. Precision laser-cut 3D acrylic letters and glowing neon flex boards mounted and powered.",
    checkpoints: ["1440 DPI print inspection", "12V low-voltage fire-safe power checked", "Illumination lux test"],
    status: "Visual Assets Locked",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-200"
  },
  {
    time: "05:30 AM",
    title: "Audio-Visual Calibration & Sound Check",
    lead: "Sound & Lighting Engineers",
    desc: "Testing wireless UHF microphones, equalizing vocal frequencies, and focusing ambient LED stage lights. Testing emergency backup circuits.",
    checkpoints: ["Zero RF interference on mics", "LED warm/cool wash calibrated", "Speaker throw angles aligned"],
    status: "Tech Ready",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200"
  },
  {
    time: "07:30 AM",
    title: "Thematic Styling, Balloon Arches & Polish",
    lead: "Creative Decor Team",
    desc: "Installation of grand organic entrance balloon garlands, fresh floral centerpieces, polished stanchions, and spotless debris cleanup.",
    checkpoints: ["Spotless vacuuming around booth", "Roll-up standees aligned", "Waste haulage cleared from mall"],
    status: "Aesthetic Perfection",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
  },
  {
    time: "09:30 AM",
    title: "Crew Briefing & Mall Doors Opening",
    lead: "Syed Inam & Razak Ahmed Khan",
    desc: "Day-shift promoters, hostesses, and bouncers assemble for roll-call. Uniforms inspected, brand pitch practiced, and official mall facility sign-off signed before retail doors open at 10 AM.",
    checkpoints: ["100% promoter attendance verified", "15% standby reserve on call", "Official mall pass signed off"],
    status: "LIVE & OPERATIONAL",
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
          <Moon className="w-3.5 h-3.5 text-amber-600" />
          <span>Nocturnal Field Execution SOP</span>
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
          The 11:00 PM to 8:00 AM Mall Transformation
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Slide through the night hours to see how our engineering crew builds your event silently overnight before mall doors open.
        </p>
      </div>

      {/* Interactive Hour Buttons */}
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
              Step {idx + 1}
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
              SOP Checklist Verified:
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
            <Clock className="w-6 h-6" />
          </div>
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Field Commander On-Duty</p>
          <p className="font-bold text-slate-900 text-sm">{current.lead}</p>
          <p className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 py-1 px-2 rounded-full border border-emerald-200">
            100% On-Time Opening Guaranteed
          </p>
        </div>
      </div>
    </div>
  );
}

