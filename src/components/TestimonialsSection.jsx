import React, { useState } from 'react';
import { mallFaqs } from '../data/servicesData';
import { 
  Star, 
  Quote, 
  ChevronDown, 
  CheckCircle2, 
  HelpCircle,
  Building2
} from 'lucide-react';

const testimonials = [
  {
    quote: "Pristine Decore managed our 4-day electronics roadshow across 2 major malls. Their promoters were punctual, well-trained, and their setup crew assembled the entire 30ft booth overnight with zero complaints from mall authorities.",
    client: "Marketing Director",
    company: "Consumer Tech Brand",
    event: "Mall Roadshow & Product Launch",
    stars: 5
  },
  {
    quote: "Finding high-caliber promoters and last-minute custom acrylic glow signs from the same vendor was a lifesaver. Razak Ahmed Khan and Syed Inam handled our corporate conference seamlessly.",
    client: "Head of Experiential Events",
    company: "National Retail Chain",
    event: "Flagship Store Opening",
    stars: 5
  },
  {
    quote: "We had a VIP celebrity walkthrough on a Saturday evening. The bouncers provided by Pristine Decore were exceptionally disciplined and handled intense crowd swarms with complete composure.",
    client: "Operations Manager",
    company: "Premium Fashion Label",
    event: "Celebrity Meet & Greet",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Quote className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Trusted by Event Agencies & <span className="text-gradient-gold">Mall Organizers</span>
          </h2>
          <p className="text-slate-300 text-base">
            Real feedback from brand directors and event planners who trust Pristine Decore for their most crucial activations.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 space-y-1">
                <div className="font-heading font-bold text-sm text-white">{t.client}</div>
                <div className="text-xs text-amber-400 font-medium">{t.company}</div>
                <div className="text-[11px] text-slate-500">{t.event}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {mallFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-amber-400 transition-colors"
                >
                  <span className="font-heading font-bold text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

