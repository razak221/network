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
  FileText
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

const EVENT_TYPES = [
  { id: 'mall', label: 'Mall Activation / Roadshow', desc: 'Promoters, bouncers & kiosk decor' },
  { id: 'store', label: 'Store Grand Opening', desc: 'Arches, ushers & ribbon cutting' },
  { id: 'corporate', label: 'Corporate Expo / Conference', desc: 'Registration hosts & backdrop' },
  { id: 'product', label: 'Product Launch & Sampling', desc: 'Trained brand ambassadors & AV' },
  { id: 'fest', label: 'College / Public Festival', desc: 'Heavy crowd security & staging' },
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

  const handleOnlineSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="builder" className="py-16 md:py-24 bg-[#0D1322] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Quote Calculator</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Build Your <span className="text-gradient-gold">Event Order</span> in 2 Minutes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Configure manpower headcount, physical banners, boards, and decor items. We’ll generate an instant formatted quote directly to our founders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurator Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Event Type & Details */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">1</span>
                <h3 className="font-heading font-bold text-lg text-white">Select Event Type & Location</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {EVENT_TYPES.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setEventType(type.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      eventType === type.id
                        ? 'bg-amber-400/15 border-amber-400 text-white shadow-sm'
                        : 'bg-white/[0.02] border-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm">{type.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{type.desc}</div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Duration (Days)</label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold text-white text-sm">{durationDays} Day(s)</span>
                    <button
                      type="button"
                      onClick={() => setDurationDays(durationDays + 1)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Mall / Venue Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Inorbit Mall, Phoenix Mall"
                    value={mallVenue}
                    onChange={(e) => setMallVenue(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Approx. Event Date</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Manpower Headcount */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">2</span>
                  <h3 className="font-heading font-bold text-lg text-white">Event Manpower Selection</h3>
                </div>
                <span className="text-xs text-amber-400 font-semibold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
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
                  <div key={item.key} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">{item.name}</div>
                      <div className="text-[11px] text-slate-400">{item.note}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateCrew(item.key, -1)}
                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center font-bold text-white text-sm">{crew[item.key]}</span>
                      <button
                        type="button"
                        onClick={() => updateCrew(item.key, 1)}
                        className="w-7 h-7 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center text-xs font-bold"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Production & Decor Materials */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">3</span>
                <h3 className="font-heading font-bold text-lg text-white">Custom Production, Banners & Decor</h3>
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
                  <div key={item.key} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">{item.name}</div>
                      <div className="text-[11px] text-slate-400">{item.note}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateMaterials(item.key, -1)}
                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center font-bold text-white text-sm">{materials[item.key]}</span>
                      <button
                        type="button"
                        onClick={() => updateMaterials(item.key, 1)}
                        className="w-7 h-7 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center text-xs font-bold"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: The "Request Anything" Bespoke Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white/[0.02] to-cyan-500/10 border border-amber-400/30 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center">4</span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">"Ask For Anything" Custom Request Box</h3>
                  <p className="text-xs text-amber-300">Props, branded uniforms, dry-ice fog machines, mascot suits, VIP carpets...</p>
                </div>
              </div>

              <textarea
                rows={3}
                placeholder="Describe anything else you want for this event (e.g. 'We need 30 printed black polo shirts, 2 confetti blowers, and an 8ft metallic trophy for the awards'). Whatever you ask, we deliver."
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#0B0F19] border border-white/15 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-400 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Right Column: Order Summary & WhatsApp Dispatch */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Event Summary</h3>
                  <p className="text-xs text-slate-400">Pristine Decore Direct Quote</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Direct Founder SLA
                  </span>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Event:</span>
                  <span className="font-semibold text-white">{EVENT_TYPES.find(t => t.id === eventType)?.label}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-semibold text-white">{durationDays} Day(s)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Venue:</span>
                  <span className="font-semibold text-white">{mallVenue || 'Pending Venue'}</span>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <div className="font-bold text-white text-xs mb-1.5 flex items-center justify-between">
                    <span>Manpower Assigned:</span>
                    <span className="text-amber-400">{totalCrewCount} Staff</span>
                  </div>
                  <div className="text-[11px] text-slate-400 space-y-0.5 pl-2">
                    {crew.promoters > 0 && <div>• {crew.promoters}x Promoters / Ambassadors</div>}
                    {crew.bouncers > 0 && <div>• {crew.bouncers}x Bouncers / Security</div>}
                    {crew.ushers > 0 && <div>• {crew.ushers}x Ushers / Greeters</div>}
                    {crew.stagehands > 0 && <div>• {crew.stagehands}x Setup / Stagehands</div>}
                    {crew.supervisors > 0 && <div>• {crew.supervisors}x Floor Supervisors</div>}
                    {totalCrewCount === 0 && <div className="italic text-slate-500">No manpower selected yet</div>}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <div className="font-bold text-white text-xs mb-1.5">Production Items:</div>
                  <div className="text-[11px] text-slate-400 space-y-0.5 pl-2">
                    {materials.standees > 0 && <div>• {materials.standees}x Roll-Up Standees</div>}
                    {materials.flexBackdrop > 0 && <div>• {materials.flexBackdrop}x Custom Backdrop</div>}
                    {materials.acrylicBoard > 0 && <div>• {materials.acrylicBoard}x 3D Glow Board</div>}
                    {materials.neonSign > 0 && <div>• {materials.neonSign}x Neon Flex Sign</div>}
                    {materials.balloonArch > 0 && <div>• {materials.balloonArch}x Thematic Arch</div>}
                    {materials.soundAndMics > 0 && <div>• {materials.soundAndMics}x Sound & Mic Set</div>}
                  </div>
                </div>

                {customRequest.trim() && (
                  <div className="border-t border-white/5 pt-3 bg-white/[0.02] p-2 rounded-lg">
                    <div className="font-bold text-amber-300 text-xs">Custom Wishlist:</div>
                    <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-2 italic">"{customRequest}"</p>
                  </div>
                )}
              </div>

              {/* Quick Contact Inputs */}
              <div className="border-t border-white/10 pt-4 space-y-2">
                <input
                  type="text"
                  placeholder="Your Name / Organising Team *"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Company / Brand"
                    value={clientInfo.company}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* WhatsApp Call to Action */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-4 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                >
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>Send Quote to Founders via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Instant response from Syed Inam, Razak Ahmed Khan, or Syed Haamed Ali.
                </p>
              </div>

              {/* Guarantee Pill */}
              <div className="p-3 rounded-xl bg-amber-400/5 border border-amber-400/20 flex items-center gap-2.5 text-xs text-amber-200">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Mall Pass Clearance + 15% Backup Crew Guarantee Included</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

