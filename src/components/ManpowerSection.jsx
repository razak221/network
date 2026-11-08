import React from 'react';
import { manpowerServices } from '../data/servicesData';
import { 
  Users, 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  ArrowRight
} from 'lucide-react';

export default function ManpowerSection({ onSelectForQuote }) {
  return (
    <section id="manpower" className="py-20 md:py-28 relative overflow-hidden bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold shadow-soft-sm">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            <span>Skilled Event Workforce</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Specialized Manpower for <span className="text-gradient-teal">Mall & Brand Events</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Groomed, articulate, and verified professionals ready to represent your brand, manage high-density footfall, and ensure seamless on-ground operations.
          </p>
        </div>

        {/* Services Grid (Soft Light Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manpowerServices.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {service.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Key Capabilities:</div>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] text-slate-500">
                  <span className="text-slate-400 block font-semibold">Ideal For:</span>
                  <span className="text-slate-700 line-clamp-1">{service.idealFor}</span>
                </div>
                <a
                  href="#builder"
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-50 text-amber-800 hover:bg-amber-500 hover:text-white transition-all flex items-center gap-1 shrink-0 ml-2 shadow-soft-sm"
                >
                  <span>Book Crew</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* The 15% Standby Bench Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-teal-50 border border-amber-200/80 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 shadow-soft-sm">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                Zero-Absenteeism Guarantee for Mall Events
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                We retain a dedicated 15% reserve bench on standby during all active mall hours. If anyone faces travel delays or illness, an immediate replacement arrives within 30 minutes.
              </p>
            </div>
          </div>
          <a
            href="#builder"
            className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white whitespace-nowrap shrink-0 shadow-soft-gold"
          >
            Calculate Crew Requirement
          </a>
        </div>

      </div>
    </section>
  );
}
