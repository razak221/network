import React from 'react';
import { Link } from 'react-router-dom';
import { manpowerServices } from '../data/servicesData';
import { 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Award, 
  Shirt, 
  UserCheck, 
  PhoneCall,
  Sparkles,
  Zap,
  Building2
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ManpowerPage() {
  const handleHireDirect = (role) => {
    const text = `Hi Pristine Decore! I am interested in hiring event manpower: ${role}. Please send me available rosters and rates.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Event Manpower Services</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold shadow-soft-sm">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            <span>Vetted & Groomed Event Workforce</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Specialized Workforce for <span className="text-gradient-teal">Mall Activations & Expos</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            High-caliber, groomed, and articulate event talent trained to represent luxury and FMCG brands, manage dense mall atrium footfall, and maintain flawless crowd etiquette.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-soft-gold hover:scale-105 transition-all"
            >
              Configure Crew in Quote Studio
            </Link>
            <button
              onClick={() => handleHireDirect('General Workforce Inquiry')}
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft hover:scale-105 transition-all"
            >
              WhatsApp Operations Desk
            </button>
          </div>
        </div>
      </div>

      {/* 6 Manpower Roles In-Depth */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manpowerServices.map((service) => (
            <div 
              key={service.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium">{service.category || service.tagline}</p>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {service.description || service.desc}
                </p>

                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Capabilities:</span>
                  <ul className="space-y-1.5">
                    {(service.features || service.duties || []).map((duty, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
                  {service.turnaround || '24h Deployment'}
                </span>
                <button
                  onClick={() => handleHireDirect(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-900 group"
                >
                  <span>Book Role</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 15% Standby Bench Guarantee Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50/50 border border-amber-200/90 shadow-luxury">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Industry-First Zero Absenteeism Contract</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              The Pristine 15% Standby Reserve Bench Guarantee
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Nothing ruins a high-stakes mall launch faster than promoters not showing up. For every booking of 4 or more personnel, Pristine Decore assigns an extra <strong>15% standby crew</strong> stationed at nearby transit hubs at <strong>zero additional fee to you</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
                <div className="font-bold text-slate-900 text-sm">30-Min Rapid Swap</div>
                <p className="text-slate-500 text-xs mt-1">If anyone falls ill, a pre-briefed backup arrives in under 30 minutes.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
                <div className="font-bold text-slate-900 text-sm">Pre-Briefed & Attired</div>
                <p className="text-slate-500 text-xs mt-1">Backup crew wears identical branded attire and has reviewed your brief.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
                <div className="font-bold text-slate-900 text-sm">Supervisor Monitored</div>
                <p className="text-slate-500 text-xs mt-1">On-ground supervisors track biometric check-in 1 hour before mall gates open.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grooming & Uniform Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft-sm space-y-3">
            <Shirt className="w-8 h-8 text-amber-600" />
            <h4 className="font-heading font-bold text-lg text-slate-900">Impeccable Dress Code</h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Crisp corporate black or white collars, tailored slacks, clean formal footwear, and branded aprons/sashes as required by your campaign aesthetic.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft-sm space-y-3">
            <UserCheck className="w-8 h-8 text-teal-600" />
            <h4 className="font-heading font-bold text-lg text-slate-900">48h ID Verification</h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Every staff member's government ID, criminal background check, and mall work badge clearance is processed 48 hours prior to deployment.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft-sm space-y-3">
            <Award className="w-8 h-8 text-indigo-600" />
            <h4 className="font-heading font-bold text-lg text-slate-900">Multilingual Fluency</h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Trained in English, Hindi, and regional languages to comfortably engage diverse shopper demographics and log qualified leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

