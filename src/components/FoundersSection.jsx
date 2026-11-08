import React from 'react';
import { founders, companyValues } from '../data/foundersData';
import { 
  ShieldCheck, 
  Send, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  Award,
  Crown
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function FoundersSection() {
  const handleFounderChat = (founderKey, founderName) => {
    const founderData = CONTACT_CONFIG.founders[founderKey];
    const targetNumber = founderData?.whatsAppNumber || null;
    const msg = `Hi ${founderName}! I am reaching out through pristinedecore.com regarding an event inquiry.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg, targetNumber), '_blank');
  };

  return (
    <section id="founders" className="py-20 md:py-28 relative overflow-hidden bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>Leadership & Accountability</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Meet the Founders Behind <span className="text-gradient-gold">Pristine Decore</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No anonymous brokers. Every event contracted with Pristine Decore is directly spearheaded, monitored, and guaranteed by our active co-founders.
          </p>
        </div>

        {/* 3 Founders Grid (Soft White Cards with Warm Accents) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-teal-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {founder.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{founder.stats}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 p-0.5 shadow-soft-sm shrink-0">
                    <img
                      src={founder.avatar}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-700 mt-0.5">{founder.role}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{founder.title}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {founder.bio}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Direct Oversight:</div>
                  <div className="space-y-1.5">
                    {founder.focus.map((f, i) => (
                      <div key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Founder Chat Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleFounderChat(idx === 0 ? 'inam' : idx === 1 ? 'razak' : 'haamed', founder.name)}
                  className="w-full py-3 rounded-2xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center gap-2 transition-all shadow-soft-sm"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Connect with {founder.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Company Commitments */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
              The Pristine Decore Service Guarantees
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              When you partner with our founding team, here is what you can always rely on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {companyValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-2">
                <div className="flex items-center gap-2.5 text-amber-700 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 shrink-0 text-amber-600" />
                  <span>{val.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
