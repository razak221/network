import React from 'react';
import { Link } from 'react-router-dom';
import { founders, companyValues } from '../data/foundersData';
import { 
  Crown, 
  ShieldCheck, 
  Send, 
  Phone, 
  CheckCircle2, 
  Award, 
  Building2, 
  Sparkles,
  Users
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function AboutPage() {
  const handleFounderChat = (founderKey, founderName) => {
    const founderData = CONTACT_CONFIG.founders[founderKey];
    const targetNumber = founderData?.whatsAppNumber || null;
    const msg = `Hi ${founderName}! I am reaching out through pristinedecore.com regarding leadership governance for an upcoming event.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg, targetNumber), '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">About Us & Founders</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Leadership Accountability</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Architecting the New Standard in <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Event Workforce & Production</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Pristine Decore was founded to solve the two biggest headaches in the event industry: unreliable manpower absenteeism and late custom production fabrication.
          </p>
        </div>
      </div>

      {/* 3 Co-Founders In-Depth Profiles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div 
              key={founder.name || idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg transition-all card-luxury flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Avatar with Luxury Gold Ring */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 p-0.5 shadow-soft-gold">
                    <img 
                      src={founder.avatar || founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  <span className="absolute -bottom-2 left-6 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-amber-400 border border-amber-400/40 shadow-sm">
                    {founder.role}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="font-heading text-2xl font-bold text-slate-900">{founder.name}</h3>
                  <p className="text-amber-800 text-xs font-semibold">{founder.title}</p>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {founder.bio}
                </p>

                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Mandate:</span>
                  <ul className="space-y-1.5">
                    {(founder.focus || []).map((item, idx2) => (
                      <li key={idx2} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Founder Chat Trigger */}
              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => handleFounderChat(idx === 0 ? 'inam' : idx === 1 ? 'razak' : 'haamed', founder.name)}
                  className="w-full py-3 rounded-2xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 flex items-center justify-center gap-2 transition-all group"
                >
                  <Send className="w-3.5 h-3.5 text-amber-700 group-hover:scale-110 transition-transform" />
                  <span>Chat Directly with {founder.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Philosophy & The 4 Guarantees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-luxury">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              The Pristine Code
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our 4 Non-Negotiable Operational Guarantees
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every event agreement signed with Pristine Decore includes these commitments in writing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">{val.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

