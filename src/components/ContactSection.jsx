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
import { CONTACT_CONFIG } from '../config/contact';
import Toast from './Toast';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Mall Event',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = 
      `*DIRECT INQUIRY - PRISTINE DECORE (pristinedecore.com)*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || 'N/A'}\n` +
      `Event Type: ${form.eventType}\n` +
      `Details: ${form.message}\n`;
    setToastMsg("Inquiry dispatched to founders' direct desk!");
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FBFBFA] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Founder Booking Desk</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Let's Make Your Event <span className="text-gradient-gold">Spectacular</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out directly to Syed Inam, Razak Ahmed Khan, or Syed Haamid Ali. We guarantee response within 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Founders Hotline */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-6">
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Pristine Decore Command Center
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 shadow-soft-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Official Portal & Domain</div>
                    <div className="text-sm font-bold text-slate-900">{CONTACT_CONFIG.email}</div>
                    <div className="text-xs text-amber-700 font-bold mt-0.5">{CONTACT_CONFIG.domain}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-soft-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Founders WhatsApp Desk</div>
                    <div className="text-sm font-bold text-slate-900">Direct 24/7 Priority Support</div>
                    <div className="text-xs text-emerald-700 font-bold mt-0.5">Instant WhatsApp Response</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0 shadow-soft-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Operating Hours</div>
                    <div className="text-sm font-bold text-slate-900">24 Hours / 7 Days a Week</div>
                    <div className="text-xs text-slate-500 mt-0.5">Night Shift Setup Operations Active Daily</div>
                  </div>
                </div>
              </div>

              {/* Founder Badges */}
              <div className="border-t border-slate-100 pt-4 space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Active Leadership:</div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="font-bold text-slate-900">Syed Inam</span>
                    <span className="text-amber-700 font-semibold text-[11px]">Operations & Mall Clearances</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="font-bold text-slate-900">Razak Ahmed Khan</span>
                    <span className="text-teal-700 font-semibold text-[11px]">Client Relations & Quotes</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="font-bold text-slate-900">Syed Haamid Ali</span>
                    <span className="text-emerald-700 font-semibold text-[11px]">Decor & Workshop Fabrication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Alert */}
            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 flex items-center gap-4 shadow-soft">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900 text-sm">Emergency Last-Minute Request?</div>
                <div className="text-slate-600 mt-0.5">Need crew or standees in under 12 hours? Use our WhatsApp button for immediate dispatch.</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-soft-lg">
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                Send a Direct Event Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details below and we will get back to you with custom pricing and crew availability immediately.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-slate-900">Inquiry Forwarded Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Your request has been dispatched to Syed Inam, Razak Ahmed Khan, and Syed Haamid Ali. We will connect with you right away.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 / WhatsApp number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="yourname@brand.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Event Type</label>
                      <select
                        value={form.eventType}
                        onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white font-medium"
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Event Requirements & Details *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify your event date, mall/venue name, number of promoters or bouncers needed, banners, signboards, or any custom request..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white flex items-center justify-center gap-2 shadow-soft-gold hover:scale-[1.01] transition-all"
                  >
                    <Send className="w-4 h-4 fill-white" />
                    <span>Send Inquiry to Founders Desk (WhatsApp)</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    By submitting, your details will be delivered directly to the founders for instant response.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {toastMsg && (
        <Toast 
          message={toastMsg} 
          onClose={() => setToastMsg('')} 
        />
      )}
    </section>
  );
}
