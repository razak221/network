import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  HardHat,
  Compass,
  Building2
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { apiService } from '../services/api';
import Toast from './Toast';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Turnkey Luxury Villa',
    areaSqFt: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numericArea = Number(String(form.areaSqFt).replace(/[^0-9]/g, '')) || 0;
    await apiService.submitClientInquiry({
      name: form.name,
      company: 'Studio Consultation Inquiry',
      phone: form.phone,
      email: form.email,
      eventType: form.projectType,
      venue: 'Bengaluru / Site TBD',
      areaSqFt: numericArea,
      customRequest: form.message,
      quotedAmount: 'Consultation Requested',
      source: 'home_contact_form'
    });

    const msg = 
      `*STUDIO CONSULTATION INQUIRY - PRISTINE DECORE (pristinedecore.com)*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || 'N/A'}\n` +
      `Project Typology: ${form.projectType}\n` +
      `Approx Area: ${form.areaSqFt ? form.areaSqFt + ' sq.ft' : 'Not specified'}\n` +
      `Project Details: ${form.message}\n`;
    setToastMsg("Inquiry logged & dispatched to architectural studio desk!");
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FBFBFA] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Architectural Consultation Desk</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Begin Your Construction & <span className="text-gradient-gold">Interior Journey</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Schedule a site inspection or consult our civil engineering and interior architecture studio desks. We guarantee a detailed response within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Studio Desks */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-6">
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Pristine Decore Studio Headquarters
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 shadow-soft-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Official Inquiries & BOQs</div>
                    <div className="text-sm font-bold text-slate-900">{CONTACT_CONFIG.email}</div>
                    <div className="text-xs text-amber-700 font-bold mt-0.5">{CONTACT_CONFIG.domain}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-soft-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Studio Phone & WhatsApp Hotline</div>
                    <a href="tel:+919845302888" className="text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors block">
                      {CONTACT_CONFIG.phoneDisplay}
                    </a>
                    <div className="text-xs text-emerald-700 font-bold mt-0.5">Instant Call & WhatsApp Scheduling</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0 shadow-soft-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Consultation & Site Hours</div>
                    <div className="text-sm font-bold text-slate-900">Monday - Saturday (9:00 AM - 7:30 PM)</div>
                    <div className="text-xs text-slate-500 mt-0.5">On-site structural inspections available 7 days a week</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 shadow-soft-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Registered Studio Address</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{CONTACT_CONFIG.studioAddress}</div>
                    <div className="text-[11px] text-amber-800 font-medium mt-1">
                      18+ Years Registered • GSTIN: <span className="font-mono font-bold">{CONTACT_CONFIG.gstin}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Studio Divisions */}
              <div className="border-t border-slate-100 pt-4 space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Studio Divisions:</div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="font-bold text-slate-900">Civil Engineering Division</span>
                    <span className="text-amber-700 font-semibold text-[11px]">RCC & Turnkey Architecture</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="font-bold text-slate-900">Interior Architecture Division</span>
                    <span className="text-teal-700 font-semibold text-[11px]">Italian Marble & Joinery</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="font-bold text-slate-900">Commercial Fitouts Division</span>
                    <span className="text-emerald-700 font-semibold text-[11px]">Corporate Offices & Retail</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Guarantee Alert */}
            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 flex items-center gap-4 shadow-soft">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900 text-sm">10-Year Structural Engineering Guarantee</div>
                <div className="text-slate-600 mt-0.5">Every civil construction project is backed by our certified 10-year warranty and fixed-price BOQ.</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-soft-lg">
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                Book a Studio Consultation or Site Visit
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Share your property dimensions and requirements for a preliminary architectural review and itemized BOQ estimate.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-slate-900">Inquiry Dispatched Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Your brief has been forwarded to our principal architectural and civil engineering desks. We will connect with you right away.
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
                        placeholder="e.g. Rahul Sharma"
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
                        placeholder="yourname@domain.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Project Typology</label>
                      <select
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white font-medium"
                      >
                        <option value="Turnkey Luxury Villa">Turnkey Luxury Villa (Civil + Interior)</option>
                        <option value="High-End Apartment Interior">High-End Apartment / Penthouse Interior</option>
                        <option value="Commercial Corporate Fitout">Commercial Office / Corporate Fitout</option>
                        <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Bespoke Wardrobes</option>
                        <option value="Structural Renovation">Structural Renovation & Elevation Redesign</option>
                        <option value="Architectural Blueprinting Only">Architectural Blueprinting & 3D Renders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Approximate Area (Sq. Ft)</label>
                    <input
                      type="text"
                      placeholder="e.g. 3,500 sq.ft or 4 BHK Duplex"
                      value={form.areaSqFt}
                      onChange={(e) => setForm({ ...form, areaSqFt: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project Requirements & Timeline *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify your project location, target commencement date, preferred finish grade (Premium / Luxury / Royal), or special architectural features..."
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
                    <span>Send Inquiry to Studio Desk (WhatsApp)</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Your details will be routed directly to our principal engineering desk for preliminary BOQ evaluation.
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
