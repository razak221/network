import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  Building2,
  Users
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import Toast from '../components/Toast';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Mall Activation',
    venue: '',
    durationDays: 1,
    message: ''
  });

  const [toastMsg, setToastMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = 
      `*DIRECT INQUIRY - PRISTINE DECORE (pristinedecore.com)*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📧 *Email:* ${form.email || 'N/A'}\n` +
      `🎪 *Event Type:* ${form.eventType}\n` +
      `📍 *Venue:* ${form.venue || 'TBD'}\n` +
      `⏱ *Duration:* ${form.durationDays} Day(s)\n` +
      `📝 *Details:* ${form.message}\n`;
    setToastMsg("Inquiry dispatched directly to founders' WhatsApp desk!");
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  const handleCallFounder = (founderKey) => {
    const founder = CONTACT_CONFIG.founders[founderKey];
    if (founder?.phone) {
      window.open(`tel:${founder.phone}`, '_self');
    }
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg('')} />}

      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Contact & Rapid Response Desk</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>24/7 Operations Desk</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Direct Co-Founder <span className="text-gradient-gold">Contact Desk</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Skip bureaucratic agency layers. When you contact Pristine Decore, you are connected directly with our leadership team for immediate quotes and deployment schedules.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Founder Hotlines & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury space-y-6">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Direct Founder Hotlines
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900">Syed Inam</span>
                    <span className="text-[10px] font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">Mall Clearances</span>
                  </div>
                  <p className="text-xs text-slate-600">On-Ground Logistics & Nocturnal Mall Passes</p>
                  <div className="pt-2 flex items-center gap-2">
                    <a 
                      href={CONTACT_CONFIG.getWhatsAppUrl("Hi Syed Inam! Reaching out via pristinedecore.com", CONTACT_CONFIG.founders.inam.whatsAppNumber)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
                    >
                      <Send className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-900">Razak Ahmed Khan</span>
                    <span className="text-[10px] font-mono font-bold text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200">Client Strategy</span>
                  </div>
                  <p className="text-xs text-slate-600">Brand Partnerships, Commercial Inquiries & Quotes</p>
                  <div className="pt-2 flex items-center gap-2">
                    <a 
                      href={CONTACT_CONFIG.getWhatsAppUrl("Hi Razak! Reaching out via pristinedecore.com", CONTACT_CONFIG.founders.razak.whatsAppNumber)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-teal-800 hover:underline flex items-center gap-1"
                    >
                      <Send className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-900">Syed Haamed Ali</span>
                    <span className="text-[10px] font-mono font-bold text-rose-800 bg-white px-2 py-0.5 rounded border border-rose-200">Production</span>
                  </div>
                  <p className="text-xs text-slate-600">Custom Fabrication, Signage Specs & Decor</p>
                  <div className="pt-2 flex items-center gap-2">
                    <a 
                      href={CONTACT_CONFIG.getWhatsAppUrl("Hi Syed Haamed! Reaching out via pristinedecore.com", CONTACT_CONFIG.founders.haamed.whatsAppNumber)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-rose-800 hover:underline flex items-center gap-1"
                    >
                      <Send className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Office & Official Credentials */}
              <div className="border-t border-slate-100 pt-6 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Official Inquiries: <strong className="text-slate-900">{CONTACT_CONFIG.email}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Official Domain: <strong className="text-slate-900">{CONTACT_CONFIG.domain}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nocturnal Shift Desk: <strong>11:00 PM – 8:00 AM Active</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-luxury card-luxury space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Send Event Specification
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Fill in your brief to receive an instant WhatsApp callback and formal rate sheet.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name / Brand Contact *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={form.name}
                      onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@brand.com"
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Event Type</label>
                    <select
                      value={form.eventType}
                      onChange={(e) => setForm(prev => ({ ...prev, eventType: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    >
                      <option value="Mall Activation">Mall Activation / Roadshow</option>
                      <option value="Store Grand Opening">Store Grand Opening</option>
                      <option value="Corporate Expo">Corporate Expo / Summit</option>
                      <option value="Product Launch">Product Launch & Sampling</option>
                      <option value="Custom Decor & Manpower">Custom Decor & Manpower Only</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Mall / Venue</label>
                    <input
                      type="text"
                      placeholder="e.g. Phoenix Marketcity Atrium"
                      value={form.venue}
                      onChange={(e) => setForm(prev => ({ ...prev, venue: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Event Duration (Days)</label>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={form.durationDays}
                      onChange={(e) => setForm(prev => ({ ...prev, durationDays: Number(e.target.value) }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Event Brief / Special Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about required promoters, bouncers, backdrop sizes, 3D signs, or custom delivery deadlines..."
                    value={form.message}
                    onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-gold-glow hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Dispatch Brief to Co-Founders via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

