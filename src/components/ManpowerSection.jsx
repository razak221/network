import React, { useState } from 'react';
import { manpowerServices } from '../data/servicesData';
import { 
  Users, 
  ShieldCheck, 
  CheckCircle, 
  Star, 
  Sparkles, 
  ArrowRight,
  Clock,
  BadgeCheck
} from 'lucide-react';

export default function ManpowerSection({ onSelectForQuote }) {
  const [selectedService, setSelectedService] = useState(manpowerServices[0].id);

  const activeService = manpowerServices.find(s => s.id === selectedService) || manpowerServices[0];

  return (
    <section id="manpower" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Skilled Event Workforce</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Specialized Manpower for <span className="text-gradient-cyan">Mall & Brand Events</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Groomed, articulate, and verified professionals ready to represent your brand, manage high-density footfall, and ensure seamless on-ground operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manpowerServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    {service.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-xs font-semibold text-slate-200">Key Capabilities:</div>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-500 block">Ideal For:</span>
                  <span className="text-slate-300 line-clamp-1">{service.idealFor}</span>
                </div>
                <a
                  href="#builder"
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400/10 text-amber-400 hover:bg-amber-400 hover:text-slate-950 transition-all flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Book Crew</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* The 15% Standby Bench Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#111827] to-cyan-500/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                Zero-Absenteeism Guarantee for Mall Events
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                We retain a dedicated 15% reserve bench on standby during all active mall hours. If anyone faces travel delays or illness, an immediate replacement arrives within 30 minutes.
              </p>
            </div>
          </div>
          <a
            href="#builder"
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 whitespace-nowrap shrink-0 shadow-lg shadow-amber-500/20"
          >
            Calculate Crew Requirement
          </a>
        </div>

      </div>
    </section>
  );
}

