import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  HardHat, 
  Palette, 
  ArrowRight,
  Phone,
  User,
  Compass
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import TiltCard3D from './TiltCard3D';

const TYPOLOGIES = [
  { id: 'villa', label: 'Luxury Private Villa', icon: HardHat, desc: 'Turnkey Ground-Up Civil & Italian Interiors' },
  { id: 'penthouse', label: 'Apartment / Sky Penthouse', icon: Palette, desc: 'Bespoke Joinery, Blum Kitchen & Marble Fitouts' },
  { id: 'campus', label: 'School / University Campus', icon: Building2, desc: 'Auditoriums, Classrooms & Institutional Civil Blocks' },
  { id: 'commercial', label: 'Commercial & Retail Fitout', icon: Compass, desc: 'Corporate HQ Offices, Flagship Boutiques & Restaurants' }
];

const LOCALITIES = [
  'Sadashivanagar, Bengaluru',
  'Indiranagar / Lavelle Road, Bengaluru',
  'Koramangala / HSR Layout, Bengaluru',
  'Whitefield / Sarjapur Road, Bengaluru',
  'HBR Layout / RT Nagar / Hebbal, Bengaluru',
  'Jayanagar / JP Nagar, Bengaluru',
  'Other Bengaluru Prime Sector',
  'Pan-India Prime Metro (Mumbai / Delhi / Hyderabad / Goa)'
];

const TIME_SLOTS = [
  { id: 'morning', label: 'Morning Slot', time: '10:30 AM – 12:30 PM' },
  { id: 'afternoon', label: 'Afternoon Slot', time: '02:30 PM – 04:30 PM' },
  { id: 'evening', label: 'Twilight Slot', time: '05:30 PM – 07:30 PM' }
];

export default function BookingDesk() {
  const [step, setStep] = useState(1);
  const [selectedTypology, setSelectedTypology] = useState('villa');
  const [selectedLocality, setSelectedLocality] = useState(LOCALITIES[0]);
  const [customLocality, setCustomLocality] = useState('');
  const [areaSqFt, setAreaSqFt] = useState(3500);
  const [siteStage, setSiteStage] = useState('bare-shell'); // 'plot', 'bare-shell', 'renovation'
  
  // Date default to 2 days from now
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 2);
  const minDate = new Date().toISOString().split('T')[0];
  const [inspectionDate, setInspectionDate] = useState(defaultDate.toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState('morning');

  // Client Details
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      alert("Please enter your name and contact phone number.");
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refCode = `PD-INSP-2026-${randomSuffix}`;
    setBookingRef(refCode);
    setBookingConfirmed(true);

    const typologyLabel = TYPOLOGIES.find(t => t.id === selectedTypology)?.label || selectedTypology;
    const slotLabel = TIME_SLOTS.find(s => s.id === selectedSlot)?.time || selectedSlot;
    const finalLocation = selectedLocality.includes('Other') && customLocality.trim() ? customLocality : selectedLocality;

    const msg = `*VIP SITE AUDIT & CONSULTATION REQUEST*\n*Ref: ${refCode}*\n\n` +
      `• *Client:* ${clientName}\n` +
      `• *Phone:* ${clientPhone}\n` +
      `• *Typology:* ${typologyLabel}\n` +
      `• *Location:* ${finalLocation}\n` +
      `• *Built-Up Area:* ${areaSqFt.toLocaleString()} Sq. Ft\n` +
      `• *Site Stage:* ${siteStage.toUpperCase()}\n` +
      `• *Requested Date:* ${inspectionDate}\n` +
      `• *Preferred Time:* ${slotLabel}\n` +
      (clientNotes ? `• *Architectural Notes:* "${clientNotes}"\n\n` : '\n') +
      `Please confirm the senior civil/interior architect assignment from Pristine Decore studio hotline (+91 98453 02888).`;

    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  const handleCalendarLink = () => {
    const title = encodeURIComponent(`Pristine Decore Site Inspection — ${bookingRef}`);
    const details = encodeURIComponent(`VIP Architectural Consultation & Site Audit by Senior Project Architect from Pristine Decore (pristinedecore.com). Reference: ${bookingRef}`);
    const location = encodeURIComponent(selectedLocality);
    const dateFormatted = inspectionDate.replace(/-/g, '');
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dateFormatted}T050000Z/${dateFormatted}T070000Z`;
    window.open(calUrl, '_blank');
  };

  return (
    <section id="site-inspection" className="py-20 md:py-28 bg-[#F4F4F1] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>VIP Site Inspection &amp; Consultation Desk</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule a Senior Architect <span className="text-gradient-gold">Site Audit</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Invite our licensed civil engineers and interior architects to your site for laser-measured spatial clearances, structural load vetting, and transparent BOQ estimations.
          </p>
        </div>

        {/* Main Booking Panel */}
        <div className="max-w-4xl mx-auto">
          {bookingConfirmed ? (
            /* Confirmation View */
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-300 shadow-3d-luxury text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-soft-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  {bookingRef}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Site Audit Booking Dispatched!
                </h3>
                <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{clientName}</strong>. Your request for an on-site architectural evaluation has been routed to our principal studio desk. A senior civil architect will connect with you on WhatsApp at <strong>{clientPhone}</strong>.
                </p>
              </div>

              {/* Summary Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto text-left text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Typology</span>
                  <span className="font-bold text-slate-800">{TYPOLOGIES.find(t => t.id === selectedTypology)?.label}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Area</span>
                  <span className="font-bold text-slate-800">{areaSqFt.toLocaleString()} Sq. Ft</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Target Date</span>
                  <span className="font-bold text-slate-800">{inspectionDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                  <span className="font-bold text-slate-800 truncate block">{selectedLocality.split(',')[0]}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCalendarLink}
                  className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-soft-sm flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Add to Google Calendar</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBookingConfirmed(false)}
                  className="px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs"
                >
                  Schedule Another Site Audit
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Multi-Step Form */
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-3d-luxury space-y-8">
              
              {/* Step Progress Pills */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                {[
                  { num: 1, label: 'Typology & Stage' },
                  { num: 2, label: 'Site Location & Area' },
                  { num: 3, label: 'Date & Contact' }
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                      step >= s.num ? 'bg-amber-600 text-white shadow-soft-gold' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {s.num}
                    </span>
                    <span className={`text-xs font-semibold hidden sm:inline ${
                      step >= s.num ? 'text-slate-900 font-bold' : 'text-slate-400'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* STEP 1: Typology & Site Stage */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      Step 1: Select Architectural Typology
                    </h3>
                    <p className="text-xs text-slate-500">
                      Choose the project discipline for targeted senior engineer assignment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TYPOLOGIES.map((typ) => {
                      const Icon = typ.icon;
                      const isSelected = selectedTypology === typ.id;
                      return (
                        <div
                          key={typ.id}
                          onClick={() => setSelectedTypology(typ.id)}
                          className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-500/20 shadow-soft-sm'
                              : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              isSelected ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-heading font-bold text-sm text-slate-900">{typ.label}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5">{typ.desc}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Current Site Stage */}
                  <div className="pt-2 space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Current Site Stage:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'plot', label: 'Empty Plot', sub: 'Ground-up civil EPC' },
                        { id: 'bare-shell', label: 'Bare Concrete Shell', sub: 'Civil superstructure up' },
                        { id: 'renovation', label: 'Existing Structure', sub: 'Interiors / Retrofit' }
                      ].map((stg) => (
                        <button
                          key={stg.id}
                          type="button"
                          onClick={() => setSiteStage(stg.id)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            siteStage === stg.id
                              ? 'bg-slate-900 text-white border-slate-900 shadow-soft-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300'
                          }`}
                        >
                          <div className="font-bold text-xs">{stg.label}</div>
                          <div className={`text-[10px] mt-0.5 ${siteStage === stg.id ? 'text-amber-300' : 'text-slate-400'}`}>
                            {stg.sub}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-soft-gold"
                    >
                      <span>Continue to Site Location</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Location & Area */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      Step 2: Project Location &amp; Built-Up Area
                    </h3>
                    <p className="text-xs text-slate-500">
                      Specify the site location so our nearest engineering hub can mobilize.
                    </p>
                  </div>

                  {/* Locality Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Prime Location Sector:
                    </label>
                    <select
                      value={selectedLocality}
                      onChange={(e) => setSelectedLocality(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold focus:outline-none focus:border-amber-500"
                    >
                      {LOCALITIES.map((loc, idx) => (
                        <option key={idx} value={loc}>{loc}</option>
                      ))}
                    </select>

                    {selectedLocality.includes('Other') && (
                      <input
                        type="text"
                        placeholder="Enter specific layout, city or landmark..."
                        value={customLocality}
                        onChange={(e) => setCustomLocality(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 mt-2"
                      />
                    )}
                  </div>

                  {/* Area Slider */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Estimated Built-Up Area:
                      </label>
                      <span className="font-mono text-base font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
                        {areaSqFt.toLocaleString()} Sq. Ft
                      </span>
                    </div>

                    <input
                      type="range"
                      min="1200"
                      max="25000"
                      step="250"
                      value={areaSqFt}
                      onChange={(e) => setAreaSqFt(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />

                    <div className="flex flex-wrap gap-2 pt-1">
                      {[1500, 3500, 6500, 10000, 18000].map((sqft) => (
                        <button
                          key={sqft}
                          type="button"
                          onClick={() => setAreaSqFt(sqft)}
                          className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all ${
                            areaSqFt === sqft
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300'
                          }`}
                        >
                          {sqft.toLocaleString()} Sq. Ft
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-soft-gold"
                    >
                      <span>Continue to Date &amp; Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Date, Time Slot & Client Coordinates */}
              {step === 3 && (
                <form onSubmit={handleConfirmBooking} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      Step 3: Preferred Schedule &amp; Contact
                    </h3>
                    <p className="text-xs text-slate-500">
                      Pick your desired inspection window. Our senior engineer will confirm on WhatsApp.
                    </p>
                  </div>

                  {/* Date & Time Slot Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Inspection Date:
                      </label>
                      <input
                        type="date"
                        min={minDate}
                        value={inspectionDate}
                        onChange={(e) => setInspectionDate(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold focus:outline-none focus:border-amber-500"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Preferred Window:
                      </label>
                      <select
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold focus:outline-none focus:border-amber-500"
                      >
                        {TIME_SLOTS.map(slot => (
                          <option key={slot.id} value={slot.id}>
                            {slot.label} ({slot.time})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Client Coordinates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Client / Enterprise Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          placeholder="e.g. Vikramaditya Rao"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 bg-slate-50/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Mobile / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          placeholder="e.g. +91 98450 12345"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 bg-slate-50/50"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Custom Notes */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Specific Architectural Requirements / Site Access Notes:
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need evaluation for double-height living room Italian marble, German modular kitchen, and soil bearing capacity test..."
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 bg-slate-50/50 resize-none"
                    ></textarea>
                  </div>

                  {/* Statutory & Privacy Guarantee Strip */}
                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between text-xs text-amber-900">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>18+ Years Registered Atelier • GSTIN: <strong>{CONTACT_CONFIG.gstin}</strong></span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-800">100% Free Initial Site Audit</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-soft-gold hover:scale-105 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Confirm &amp; Mobilize Senior Architect</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
