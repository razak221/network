import React from 'react';
import { 
  Building2, 
  Moon, 
  ShieldCheck, 
  Shirt, 
  UserCheck, 
  Flame, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function MallExcellence() {
  const pillars = [
    {
      icon: Moon,
      title: "Nocturnal Mall Setup (11 PM – 8 AM)",
      desc: "Mall atriums allow zero construction during retail hours. Our dedicated night crew fabricates stages, erects trussing, and installs vinyl graphics silently overnight so your booth is 100% operational before the mall doors open at 10 AM.",
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      icon: ShieldCheck,
      title: "100% Mall Pass & Security Clearance",
      desc: "Never risk having your promoters rejected at the service gate. Operations Lead Syed Inam coordinates all government ID verifications, insurance indemnities, and mall work permits 48 hours prior to deployment.",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10"
    },
    {
      icon: Shirt,
      title: "Strict Grooming & Uniform Standards",
      desc: "Your brand reputation is on the line. Every promoter and hostess arrives in pristine branded polo shirts, tailored trousers, and polished footwear with multilingual conversational training.",
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      icon: Flame,
      title: "Mall Fire & Electrical Safety Compliance",
      desc: "We exclusively utilize heavy-duty fire-rated flex fabrics, low-voltage certified LED power supplies, and clean rubber cable trays to satisfy strict mall safety audits with zero fines or red tape.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    }
  ];

  return (
    <section id="mall-ops" className="py-20 md:py-28 bg-[#0D1322] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Mall Operations Blueprint</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Why Mall Events Demand <span className="text-gradient-cyan">Pristine Decore</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Shopping mall management has the strictest event guidelines in the retail industry. Here is how our operational mastery protects your event timeline and brand prestige.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${p.bg} flex items-center justify-center ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Standard Operating Procedure (SOP)</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Mall Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 to-cyan-500/10 border border-white/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-heading font-bold text-xl text-white">Have a Mall Activation Planned This Weekend?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Get your crew passes, roll-up standees, and floor coordinators locked in today.</p>
          </div>
          <a
            href="#builder"
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:scale-105 transition-all shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>Lock In Mall Crew & Setup</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
