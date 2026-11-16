import React, { useState } from 'react';
import { constructionFaqs } from '../data/servicesData';
import { 
  Star, 
  Quote, 
  ChevronDown, 
  HelpCircle
} from 'lucide-react';

const testimonials = [
  {
    quote: "Pristine Decore delivered our 6,500 sq.ft luxury villa from groundbreaking foundation to final white-glove interior handover within the promised 11-month timeline. The fixed-price BOQ had zero hidden escalations.",
    client: "Rajesh & Ananya Verma",
    company: "Private Villa Owners",
    event: "Turnkey Architecture & Interior Fitout",
    stars: 5
  },
  {
    quote: "The modular Italian kitchen, bookmatched Statuario marble flooring, and concealed architectural lighting transformed our penthouse completely. Their civil engineers and master carpenters are true perfectionists.",
    client: "Sameer Kulkarni",
    company: "Penthouse Resident",
    event: "Full Penthouse Interior Architecture",
    stars: 5
  },
  {
    quote: "We commissioned Pristine Decore for our 12,000 sq.ft regional corporate headquarters. From acoustic glass partitions to specialized MEP integration, they met every enterprise specification with flawless execution.",
    client: "Chief Operating Officer",
    company: "Financial Technology Group",
    event: "Turnkey Commercial Office Fitout",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#F4F4F1] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Quote className="w-3.5 h-3.5 text-amber-600" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Trusted by Homeowners & <span className="text-gradient-gold">Commercial Leaders</span>
          </h2>
          <p className="text-slate-600 text-base">
            Real feedback from villa clients and corporate executives who entrusted Pristine Decore with their most ambitious architectural spaces.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-1">
                <div className="font-heading font-bold text-sm text-slate-900">{t.client}</div>
                <div className="text-xs text-amber-700 font-bold">{t.company}</div>
                <div className="text-[11px] text-slate-500">{t.event}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-slate-200">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span>Got Questions?</span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {constructionFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-amber-700 transition-colors"
                >
                  <span className="font-heading font-bold text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
