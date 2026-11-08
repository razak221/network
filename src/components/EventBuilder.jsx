import React, { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  Layers, 
  Calendar, 
  MapPin, 
  Check, 
  Send, 
  Plus, 
  Minus, 
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  FileText,
  Printer
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

const EVENT_TYPES = [
  { id: 'mall', label: 'Mall Activation / Roadshow', desc: 'Promoters, bouncers & kiosk decor' },
  { id: 'store', label: 'Store Grand Opening', desc: 'Arches, ushers & ribbon cutting' },
  { id: 'corporate', label: 'Corporate Expo / Summit', desc: 'Registration hosts & backdrop' },
  { id: 'product', label: 'Product Launch & Sampling', desc: 'Trained brand ambassadors & AV' },
  { id: 'fest', label: 'Public / College Festival', desc: 'Heavy crowd security & staging' },
  { id: 'other', label: 'Custom / Other Event', desc: 'Tell us whatever you need' },
];

export default function EventBuilder({ isOpenModal = false, onClose }) {
  const [eventType, setEventType] = useState('mall');
  const [durationDays, setDurationDays] = useState(2);
  const [mallVenue, setMallVenue] = useState('');
  const [eventDate, setEventDate] = useState('');

  // Manpower State
  const [crew, setCrew] = useState({
    promoters: 4,
    bouncers: 2,
    ushers: 2,
    stagehands: 2,
    supervisors: 1
  });

  // Materials & Production State
  const [materials, setMaterials] = useState({
    standees: 2,
    flexBackdrop: 1,
    acrylicBoard: 1,
    neonSign: 0,
    balloonArch: 1,
    soundAndMics: 1
  });

  // Custom Bespoke Request
  const [customRequest, setCustomRequest] = useState('');

  // Client Details
  const [clientInfo, setClientInfo] = useState({
    name: '',
    company: '',
    phone: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const updateCrew = (key, delta) => {
    setCrew(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta)
    }));
  };

  const updateMaterials = (key, delta) => {
    setMaterials(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta)
    }));
  };

  const totalCrewCount = Object.values(crew).reduce((a, b) => a + b, 0);

  // Generate formatted WhatsApp message
  const handleWhatsAppBooking = () => {
    let msg = `*NEW EVENT INQUIRY - PRISTINE DECORE (pristinedecore.com)*\n\n`;
    msg += `📍 *Event Type:* ${EVENT_TYPES.find(t => t.id === eventType)?.label || eventType}\n`;
    if (mallVenue) msg += `🏢 *Venue/Mall:* ${mallVenue}\n`;
    if (eventDate) msg += `📅 *Date:* ${eventDate}\n`;
    msg += `⏱ *Duration:* ${durationDays} Day(s)\n\n`;

    msg += `👥 *MANPOWER REQUESTED (${totalCrewCount} total):*\n`;
    if (crew.promoters > 0) msg += `• Promoters / Brand Ambassadors: ${crew.promoters}\n`;
    if (crew.bouncers > 0) msg += `• Bouncers / Security: ${crew.bouncers}\n`;
    if (crew.ushers > 0) msg += `• Hospitality Ushers / Hosts: ${crew.ushers}\n`;
    if (crew.stagehands > 0) msg += `• Logistics / Setup Crew: ${crew.stagehands}\n`;
    if (crew.supervisors > 0) msg += `• Floor Supervisors: ${crew.supervisors}\n`;

    msg += `\n🎨 *PRODUCTION & DECOR:*\n`;
    if (materials.standees > 0) msg += `• Roll-Up Standees: ${materials.standees} pcs\n`;
    if (materials.flexBackdrop > 0) msg += `• Custom Flex Backdrop: ${materials.flexBackdrop} set\n`;
    if (materials.acrylicBoard > 0) msg += `• 3D Acrylic / LED Glow Board: ${materials.acrylicBoard} unit\n`;
    if (materials.neonSign > 0) msg += `• Custom Neon Signage: ${materials.neonSign} unit\n`;
    if (materials.balloonArch > 0) msg += `• Thematic Balloon / Entrance Arch: ${materials.balloonArch} set\n`;
    if (materials.soundAndMics > 0) msg += `• Sound System & Wireless Mics: ${materials.soundAndMics} set\n`;

    if (customRequest.trim()) {
      msg += `\n✨ *SPECIAL / BESPOKE REQUEST:*\n"${customRequest.trim()}"\n`;
    }

    if (clientInfo.name) {
      msg += `\n👤 *Client Contact:*\n• Name: ${clientInfo.name}\n• Company/Brand: ${clientInfo.company || 'N/A'}\n• Phone: ${clientInfo.phone || 'N/A'}`;
    }

    msg += `\n\n_Sent via pristinedecore.com Event Configurator_`;

    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="builder" className="py-20 md:py-28 bg-[#F4F4F1] border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Quote Calculator</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Build Your <span className="text-gradient-gold">Event Order</span> in 2 Minutes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Configure manpower headcount, physical banners, boards, and decor items. We’ll generate an instant formatted quote directly to our founders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurator Steps */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Event Type & Details */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">1</span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">Event Type & Venue Details</h3>
                  <p className="text-xs text-slate-500">Select your format and location</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {EVENT_TYPES.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setEventType(type.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      eventType === type.id
                        ? 'bg-amber-50/90 border-amber-500 text-slate-900 shadow-soft-sm ring-1 ring-amber-500'
                        : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm">{type.label}</div>
                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">{type.desc}</div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Duration (Days)</label>
                  <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                      className="p-1.5 rounded-lg bg-white hover:bg-slate-200 text-slate-700 shadow-soft-sm"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="flex-1 text-center font-bold text-slate-900 text-xs sm:text-sm">{durationDays} Day(s)</span>
                    <button
                      type="button"
                      onClick={() => setDurationDays(durationDays + 1)}
                      className="p-1.5 rounded-lg bg-white hover:bg-slate-200 text-slate-700 shadow-soft-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Mall / Venue Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Inorbit Mall, Phoenix Mall"
                    value={mallVenue}
                    onChange={(e) => setMallVenue(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Approx. Event Date</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Manpower Headcount */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-teal-100 text-teal-900 font-bold text-xs flex items-center justify-center">2</span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">Event Manpower Selection</h3>
                    <p className="text-xs text-slate-500">Pick required professional staff</p>
                  </div>
                </div>
                <span className="text-xs text-teal-800 font-bold bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  {totalCrewCount} Crew Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'promoters', name: 'Brand Promoters / Models', note: 'Engage shoppers & sample products' },
                  { key: 'bouncers', name: 'Bouncers / Security Marshals', note: 'Crowd safety & VIP protection' },
                  { key: 'ushers', name: 'Hospitality Ushers & Hosts', note: 'Polished guest reception & badges' },
                  { key: 'stagehands', name: 'Setup & Logistics Crew', note: 'Night installation & heavy lifting' },
                  { key: 'supervisors', name: 'On-Site Floor Supervisors', note: 'Mall liaison & team coordinator' }
                ].map(item => (
                  <div key={item.key} className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between hover:bg-slate-100/60 transition-colors">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</div>
                      <div className="text-[11px] text-slate-500">{item.note}</div>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-soft-sm">
                      <button
                        type="button"
                        onClick={() => updateCrew(item.key, -1)}
                        className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center font-bold text-slate-900 text-sm">{crew[item.key]}</span>
                      <button
                        type="button"
                        onClick={() => updateCrew(item.key, 1)}
                        className="w-7 h-7 rounded-lg bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center text-xs font-bold shadow-soft-sm"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Production & Decor Materials */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">3</span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">Custom Production, Banners & Decor</h3>
                  <p className="text-xs text-slate-500">In-house fabrication checklist</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'standees', name: 'Roll-Up Standees', note: 'Heavy teardrop / aluminium base' },
                  { key: 'flexBackdrop', name: 'Stage Flex / Vinyl Backdrop', note: 'Custom printed with iron frame' },
                  { key: 'acrylicBoard', name: '3D Acrylic / LED Glow Board', note: 'High brightness for mall kiosk' },
                  { key: 'neonSign', name: 'Custom Neon Flex Sign', note: 'Trendy photo-op accent' },
                  { key: 'balloonArch', name: 'Theme Balloon / Entrance Arch', note: 'Grand entrance styling' },
                  { key: 'soundAndMics', name: 'Sound System + Wireless Mics', note: 'Emcee & music setup' }
                ].map(item => (
                  <div key={item.key} className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between hover:bg-slate-100/60 transition-colors">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</div>
                      <div className="text-[11px] text-slate-500">{item.note}</div>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-soft-sm">
                      <button
                        type="button"
                        onClick={() => updateMaterials(item.key, -1)}
                        className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center font-bold text-slate-900 text-sm">{materials[item.key]}</span>
                      <button
                        type="button"
                        onClick={() => updateMaterials(item.key, 1)}
                        className="w-7 h-7 rounded-lg bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center text-xs font-bold shadow-soft-sm"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: The "Request Anything" Bespoke Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50/40 border border-amber-200 shadow-soft space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs flex items-center justify-center shadow-soft-gold">4</span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">"Ask For Anything" Custom Request Box</h3>
                  <p className="text-xs text-amber-800 font-medium">Props, branded uniforms, dry-ice fog machines, mascot suits, VIP carpets...</p>
                </div>
              </div>

              <textarea
                rows={3}
                placeholder="Describe anything else you want for this event (e.g. 'We need 30 printed black polo shirts, 2 confetti blowers, and an 8ft metallic trophy for the awards'). Whatever you ask, we deliver."
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                className="w-full p-4 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-amber-500 shadow-inner resize-none"
              ></textarea>
            </div>
          </div>

          {/* Right Column: Order Summary & WhatsApp Dispatch */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft-lg space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">Event Summary</h3>
                  <p className="text-xs text-slate-500">Pristine Decore Direct Quote</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Direct Founder SLA
                  </span>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Event:</span>
                  <span className="font-bold text-slate-900">{EVENT_TYPES.find(t => t.id === eventType)?.label}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Duration:</span>
                  <span className="font-bold text-slate-900">{durationDays} Day(s)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Venue:</span>
                  <span className="font-bold text-slate-900">{mallVenue || 'Pending Venue'}</span>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-900 text-xs mb-1.5 flex items-center justify-between">
                    <span>Manpower Assigned:</span>
                    <span className="text-amber-600 font-bold">{totalCrewCount} Staff</span>
                  </div>
                  <div className="text-[11px] text-slate-600 space-y-0.5 pl-2">
                    {crew.promoters > 0 && <div>• {crew.promoters}x Promoters / Ambassadors</div>}
                    {crew.bouncers > 0 && <div>• {crew.bouncers}x Bouncers / Security</div>}
                    {crew.ushers > 0 && <div>• {crew.ushers}x Ushers / Greeters</div>}
                    {crew.stagehands > 0 && <div>• {crew.stagehands}x Setup / Stagehands</div>}
                    {crew.supervisors > 0 && <div>• {crew.supervisors}x Floor Supervisors</div>}
                    {totalCrewCount === 0 && <div className="italic text-slate-400">No manpower selected yet</div>}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-900 text-xs mb-1.5">Production Items:</div>
                  <div className="text-[11px] text-slate-600 space-y-0.5 pl-2">
                    {materials.standees > 0 && <div>• {materials.standees}x Roll-Up Standees</div>}
                    {materials.flexBackdrop > 0 && <div>• {materials.flexBackdrop}x Custom Backdrop</div>}
                    {materials.acrylicBoard > 0 && <div>• {materials.acrylicBoard}x 3D Glow Board</div>}
                    {materials.neonSign > 0 && <div>• {materials.neonSign}x Neon Flex Sign</div>}
                    {materials.balloonArch > 0 && <div>• {materials.balloonArch}x Thematic Arch</div>}
                    {materials.soundAndMics > 0 && <div>• {materials.soundAndMics}x Sound & Mic Set</div>}
                  </div>
                </div>

                {customRequest.trim() && (
                  <div className="border-t border-slate-100 pt-3 bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/50">
                    <div className="font-bold text-amber-900 text-xs">Custom Wishlist:</div>
                    <p className="text-[11px] text-slate-700 mt-0.5 line-clamp-2 italic">"{customRequest}"</p>
                  </div>
                )}
              </div>

              {/* Quick Contact Inputs */}
              <div className="border-t border-slate-100 pt-4 space-y-2.5">
                <input
                  type="text"
                  placeholder="Your Name / Organising Team *"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Company / Brand"
                    value={clientInfo.company}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Call to Actions */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-4 rounded-2xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-soft hover:scale-[1.01] transition-all"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Send Quote to Founders via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full py-3 rounded-2xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 flex items-center justify-center gap-2 transition-all shadow-soft-sm"
                >
                  <Printer className="w-4 h-4 text-amber-600" />
                  <span>Print / Save Quote Proposal (PDF)</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Instant response from Syed Inam, Razak Ahmed Khan, or Syed Haamed Ali.
                </p>
              </div>

              {/* Guarantee Pill */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-2.5 text-xs text-amber-900 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% Mall Pass Clearance + 15% Backup Crew Guarantee Included</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* PRINT-ONLY FORMAL B2B PROPOSAL SHEET */}
      <div className="hidden print:block printable-quote-sheet font-sans p-8 text-slate-900 bg-white">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">PRISTINE DECORE</h1>
            <p className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Event Manpower & Custom Production</p>
            <p className="text-xs text-slate-500">pristinedecore.com • info@pristinedecore.com</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-bold uppercase rounded">
              Official Quotation Proposal
            </span>
            <p className="text-xs text-slate-500 mt-1">Date: {new Date().toLocaleDateString()}</p>
            <p className="text-xs text-slate-500 font-mono">Ref: PD-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 mb-6 text-xs">
          <div>
            <p className="text-slate-500 font-semibold uppercase">Client Information</p>
            <p className="text-sm font-bold text-slate-900 mt-1">{clientInfo.name || 'Event Director / Brand Client'}</p>
            <p className="text-slate-700">Company: {clientInfo.company || 'Direct Organization'}</p>
            <p className="text-slate-700">Phone: {clientInfo.phone || 'Direct Line'}</p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold uppercase">Event Details</p>
            <p className="text-sm font-bold text-slate-900 mt-1">{EVENT_TYPES.find(t => t.id === eventType)?.label}</p>
            <p className="text-slate-700">Venue: {mallVenue || 'Designated Mall / Venue'}</p>
            <p className="text-slate-700">Duration: {durationDays} Day(s) {eventDate ? `• Date: ${eventDate}` : ''}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            1. Event Manpower Allocation ({totalCrewCount} Total Staff)
          </h2>
          <table className="w-full text-xs text-left border border-slate-200">
            <thead className="bg-slate-100 text-slate-700 font-semibold">
              <tr>
                <th className="p-2 border-b">Role / Profile</th>
                <th className="p-2 border-b text-center">Quantity</th>
                <th className="p-2 border-b">Operational Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {crew.promoters > 0 && (
                <tr>
                  <td className="p-2 font-medium">Brand Promoters / Models</td>
                  <td className="p-2 text-center font-bold">{crew.promoters}</td>
                  <td className="p-2 text-slate-600">Shopper engagement, product sampling & lead logging</td>
                </tr>
              )}
              {crew.bouncers > 0 && (
                <tr>
                  <td className="p-2 font-medium">Bouncers & Crowd Marshals</td>
                  <td className="p-2 text-center font-bold">{crew.bouncers}</td>
                  <td className="p-2 text-slate-600">Crowd flow safety, queue control & VIP protection</td>
                </tr>
              )}
              {crew.ushers > 0 && (
                <tr>
                  <td className="p-2 font-medium">Hospitality Ushers & Hosts</td>
                  <td className="p-2 text-center font-bold">{crew.ushers}</td>
                  <td className="p-2 text-slate-600">Registration desk, VIP welcoming & badges</td>
                </tr>
              )}
              {crew.stagehands > 0 && (
                <tr>
                  <td className="p-2 font-medium">Logistics & Setup Hands</td>
                  <td className="p-2 text-center font-bold">{crew.stagehands}</td>
                  <td className="p-2 text-slate-600">Night-shift mall booth assembly & strike-down</td>
                </tr>
              )}
              {crew.supervisors > 0 && (
                <tr>
                  <td className="p-2 font-medium">On-Site Floor Supervisors</td>
                  <td className="p-2 text-center font-bold">{crew.supervisors}</td>
                  <td className="p-2 text-slate-600">Mall security liaison, attendance & live reporting</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            2. Custom Production & Decor Deliverables
          </h2>
          <table className="w-full text-xs text-left border border-slate-200">
            <thead className="bg-slate-100 text-slate-700 font-semibold">
              <tr>
                <th className="p-2 border-b">Production Asset</th>
                <th className="p-2 border-b text-center">Quantity</th>
                <th className="p-2 border-b">Specification Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {materials.standees > 0 && (
                <tr>
                  <td className="p-2 font-medium">Roll-Up Standees</td>
                  <td className="p-2 text-center font-bold">{materials.standees} pcs</td>
                  <td className="p-2 text-slate-600">Heavy aluminum / teardrop base with matte non-tear fabric</td>
                </tr>
              )}
              {materials.flexBackdrop > 0 && (
                <tr>
                  <td className="p-2 font-medium">Custom Flex / Stage Backdrop</td>
                  <td className="p-2 text-center font-bold">{materials.flexBackdrop} unit</td>
                  <td className="p-2 text-slate-600">High-resolution star-flex with rigid iron trussing</td>
                </tr>
              )}
              {materials.acrylicBoard > 0 && (
                <tr>
                  <td className="p-2 font-medium">3D Acrylic / LED Glow Board</td>
                  <td className="p-2 text-center font-bold">{materials.acrylicBoard} unit</td>
                  <td className="p-2 text-slate-600">Laser-cut illuminated letters with certified low-voltage wiring</td>
                </tr>
              )}
              {materials.neonSign > 0 && (
                <tr>
                  <td className="p-2 font-medium">Custom Neon Flex Board</td>
                  <td className="p-2 text-center font-bold">{materials.neonSign} unit</td>
                  <td className="p-2 text-slate-600">Vibrant acrylic backing for selfie/photo activation</td>
                </tr>
              )}
              {materials.balloonArch > 0 && (
                <tr>
                  <td className="p-2 font-medium">Thematic Balloon / Floral Arch</td>
                  <td className="p-2 text-center font-bold">{materials.balloonArch} set</td>
                  <td className="p-2 text-slate-600">Custom brand colors, organic styling & entrance framing</td>
                </tr>
              )}
              {materials.soundAndMics > 0 && (
                <tr>
                  <td className="p-2 font-medium">Sound System + Wireless Mics</td>
                  <td className="p-2 text-center font-bold">{materials.soundAndMics} set</td>
                  <td className="p-2 text-slate-600">High-fidelity speakers, UHF wireless mics & audio mixer</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {customRequest.trim() && (
          <div className="mb-6 p-3 bg-amber-50 rounded border border-amber-200 text-xs">
            <p className="font-bold text-amber-900 uppercase">Special Sourcing & Bespoke Requests:</p>
            <p className="text-slate-800 mt-1 italic font-medium">"{customRequest.trim()}"</p>
          </div>
        )}

        <div className="pt-6 border-t-2 border-slate-300 grid grid-cols-3 gap-4 text-center text-xs">
          <div>
            <p className="text-slate-500 uppercase text-[10px] font-bold">Ground Operations Lead</p>
            <p className="font-bold text-slate-900 mt-4">Syed Inam</p>
            <p className="text-slate-500 text-[10px]">Operations & Mall Clearances</p>
          </div>
          <div>
            <p className="text-slate-500 uppercase text-[10px] font-bold">Client Relations Lead</p>
            <p className="font-bold text-slate-900 mt-4">Razak Ahmed Khan</p>
            <p className="text-slate-500 text-[10px]">Business Strategy & Quotes</p>
          </div>
          <div>
            <p className="text-slate-500 uppercase text-[10px] font-bold">Production & Decor Lead</p>
            <p className="font-bold text-slate-900 mt-4">Syed Haamed Ali</p>
            <p className="text-slate-500 text-[10px]">Creative Decor & Print Fabrication</p>
          </div>
        </div>
      </div>
    </section>
  );
}
