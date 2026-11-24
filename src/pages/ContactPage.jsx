import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingDesk from '../components/BookingDesk';
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
  HardHat,
  Palette,
  Compass
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import Toast from '../components/Toast';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Turnkey Luxury Villa',
    location: '',
    areaSqFt: '',
    message: ''
  });

  const [toastMsg, setToastMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = 
      `*ARCHITECTURAL CONSULTATION - PRISTINE DECORE (pristinedecore.com)*\n\n` +
      `👤 *Client Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📧 *Email:* ${form.email || 'N/A'}\n` +
      `🏛 *Project Typology:* ${form.projectType}\n` +
      `📍 *Location:* ${form.location || 'TBD'}\n` +
      `📐 *Approx Area:* ${form.areaSqFt ? form.areaSqFt + ' sq.ft' : 'Not specified'}\n` +
      `📝 *Scope & Brief:* ${form.message}\n`;
    setToastMsg("Inquiry dispatched directly to the architectural studio desk!");
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg('')} />}

      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Studio Consultation & Project Desk</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Turnkey Project Desk</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Consult Our Principal <span className="text-gradient-gold">Architectural Desks</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Connect directly with our civil engineering and interior architecture studio desks for site inspections, 3D pre-visualizations, and transparent fixed-price BOQs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Studio Desks & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury space-y-6">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Direct Studio Desks
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-200 text-amber-900 p-2 shrink-0 shadow-sm flex items-center justify-center font-bold">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-900">Civil Engineering Desk</span>
                      <span className="text-[10px] font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200 shrink-0">Turnkey Civil</span>
                    </div>
                    <p className="text-xs text-slate-600">Foundation Piling, RCC Framing & 10-Yr Structural Warranty</p>
                    <div className="pt-1 flex items-center gap-2">
                      <a 
                        href={CONTACT_CONFIG.getWhatsAppUrl("Hi Pristine Decore! I would like to consult with the Civil Engineering Desk regarding an upcoming construction project.")}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
                      >
                        <Send className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp Direct</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-teal-200 text-teal-900 p-2 shrink-0 shadow-sm flex items-center justify-center font-bold">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-teal-900">Interior Architecture Atelier</span>
                      <span className="text-[10px] font-mono font-bold text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200 shrink-0">Interiors</span>
                    </div>
                    <p className="text-xs text-slate-600">Italian Marble, Modular Kitchens & Custom Millwork</p>
                    <div className="pt-1 flex items-center gap-2">
                      <a 
                        href={CONTACT_CONFIG.getWhatsAppUrl("Hi Pristine Decore! I would like to consult with the Interior Architecture Atelier regarding a luxury interior project.")}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-teal-800 hover:underline flex items-center gap-1"
                      >
                        <Send className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp Direct</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-rose-200 text-rose-900 p-2 shrink-0 shadow-sm flex items-center justify-center font-bold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-rose-900">Commercial Fitouts Desk</span>
                      <span className="text-[10px] font-mono font-bold text-rose-800 bg-white px-2 py-0.5 rounded border border-rose-200 shrink-0">Commercial</span>
                    </div>
                    <p className="text-xs text-slate-600">Corporate Offices, Retail Fitouts & NBC Clearances</p>
                    <div className="pt-1 flex items-center gap-2">
                      <a 
                        href={CONTACT_CONFIG.getWhatsAppUrl("Hi Pristine Decore! I would like to consult regarding a commercial office / retail fitout.")}
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
              </div>

              {/* Office & Official Credentials */}
              <div className="border-t border-slate-100 pt-6 space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Registered Studio Address:</span>
                    <span className="text-slate-600 leading-relaxed block">{CONTACT_CONFIG.studioAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>GSTIN: <strong className="font-mono text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{CONTACT_CONFIG.gstin}</strong> (Govt. Registered)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Enterprise Legacy: <strong className="text-slate-900">{CONTACT_CONFIG.registrationYears}</strong> (Est. 2008)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Studio Hotline: <a href="tel:+919845302888" className="text-slate-900 font-bold hover:text-amber-700 transition-colors">{CONTACT_CONFIG.phoneDisplay}</a></span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Official Inquiries: <strong className="text-slate-900">{CONTACT_CONFIG.email}</strong></span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Official Domain: <strong className="text-slate-900">{CONTACT_CONFIG.domain}</strong></span>
                </div>

                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Structural Warranty: <strong>10-Year Certified Guarantee</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-luxury card-luxury space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Request Project Consultation
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Share your property details to receive a preliminary architectural consultation and itemized BOQ rate sheet.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehta"
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
                      placeholder="e.g. name@domain.com"
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Typology</label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm(prev => ({ ...prev, projectType: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    >
                      <option value="Turnkey Luxury Villa">Turnkey Luxury Villa (Civil + Interior)</option>
                      <option value="Penthouse Interior">Penthouse / Luxury Apartment Interior</option>
                      <option value="Commercial Corporate Fitout">Commercial Corporate Office Fitout</option>
                      <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Custom Wardrobes</option>
                      <option value="Structural Renovation">Structural Renovation & Elevation Redesign</option>
                      <option value="Architectural Blueprinting Only">Architectural Blueprinting & 3D Renders</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Jubilee Hills, Hyderabad"
                      value={form.location}
                      onChange={(e) => setForm(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Built-Up Area (Sq. Ft)</label>
                    <input
                      type="text"
                      placeholder="e.g. 4,500 sq.ft"
                      value={form.areaSqFt}
                      onChange={(e) => setForm(prev => ({ ...prev, areaSqFt: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief / Architectural Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your target finish level (Premium / Luxury / Royal), preferred materials, or timeline requirements..."
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
                  <span>Dispatch Brief to Architectural Desk via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded VIP Senior Architect Site Inspection & Audit Booking Desk */}
      <BookingDesk />
    </div>
  );
}
