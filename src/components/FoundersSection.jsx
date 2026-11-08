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
    <section id="founders" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Crown className="w-3.5 h-3.5" />
            <span>Leadership & Accountability</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Meet the Founders Behind <span className="text-gradient-gold">Pristine Decore</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No anonymous brokers. Every event contracted with Pristine Decore is directly spearheaded, monitored, and guaranteed by our active co-founders.
          </p>
        </div>

        {/* 3 Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    {founder.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{founder.stats}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20">
                    <img
                      src={founder.avatar}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400 mt-0.5">{founder.role}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{founder.title}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                  {founder.bio}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Direct Oversight:</div>
                  <div className="space-y-1">
                    {founder.focus.map((f, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Founder Chat Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => handleFounderChat(idx === 0 ? 'inam' : idx === 1 ? 'razak' : 'haamed', founder.name)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-emerald-500/20 text-slate-200 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Connect with {founder.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Company Commitments */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-white">
              The Pristine Decore Service Guarantees
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              When you partner with our founding team, here is what you can always rely on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {companyValues.map((val, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#111827]/70 border border-white/5 space-y-2">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <span>{val.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
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

