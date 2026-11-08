import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Mall Event',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*DIRECT INQUIRY - PRISTINE DECORE (pristinedecore.com)*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || 'N/A'}\n` +
      `Event Type: ${form.eventType}\n` +
      `Details: ${form.message}\n`
    );
    window.open(`https://wa.me/?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0D1322] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Founder Booking Desk</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Let's Make Your Event <span className="text-gradient-gold">Spectacular</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Reach out directly to Syed Inam, Razak Ahmed Khan, or Syed Haamed Ali. We guarantee response within 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Founders Hotline */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#111827] border border-white/10 space-y-6">
              <h3 className="font-heading font-bold text-xl text-white">
                Pristine Decore Command Center
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Official Portal & Domain</div>
                    <div className="text-sm font-bold text-white">info@pristinedecore.com</div>
                    <div className="text-xs text-amber-400 font-semibold mt-0.5">www.pristinedecore.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Founders WhatsApp Desk</div>
                    <div className="text-sm font-bold text-white">Direct 24/7 Priority Support</div>
                    <div className="text-xs text-emerald-400 font-semibold mt-0.5">Instant WhatsApp Response</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Operating Hours</div>
                    <div className="text-sm font-bold text-white">24 Hours / 7 Days a Week</div>
                    <div className="text-xs text-slate-400 mt-0.5">Night Shift Setup Operations Active Daily</div>
                  </div>
                </div>
              </div>

              {/* Founder Badges */}
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Leadership:</div>
                <div className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                    <span className="font-semibold text-white">Syed Inam</span>
                    <span className="text-amber-400 text-[11px]">Operations & Mall Clearances</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                    <span className="font-semibold text-white">Razak Ahmed Khan</span>
                    <span className="text-cyan-400 text-[11px]">Client Relations & Quotes</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                    <span className="font-semibold text-white">Syed Haamed Ali</span>
                    <span className="text-emerald-400 text-[11px]">Decor & Workshop Fabrication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Alert */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/30 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white text-sm">Emergency Last-Minute Request?</div>
                <div className="text-slate-300 mt-0.5">Need crew or standees in under 12 hours? Use our WhatsApp button for immediate dispatch.</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111827] border border-white/10 shadow-2xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Send an Direct Event Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your details below and we will get back to you with custom pricing and crew availability immediately.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-white">Inquiry Forwarded Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your request has been dispatched to Syed Inam, Razak Ahmed Khan, and Syed Haamed Ali. We will connect with you right away.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/20"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 / WhatsApp number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="yourname@brand.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Event Type</label>
                      <select
                        value={form.eventType}
                        onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                      >
                        <option value="Mall Activation">Mall Activation / Roadshow</option>
                        <option value="Store Opening">Store Grand Opening</option>
                        <option value="Corporate Expo">Corporate Expo & Conference</option>
                        <option value="Brand Sampling">Brand Sampling & Promoters</option>
                        <option value="Custom Decor & Print">Custom Decor, Banners & Boards</option>
                        <option value="Other">Other Custom Event</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Event Requirements & Details *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify your event date, mall/venue name, number of promoters or bouncers needed, banners, signboards, or any custom request..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-[1.01] transition-all"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>Send Inquiry to Founders Desk (WhatsApp)</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    By submitting, your details will be delivered directly to the founders for instant response.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
