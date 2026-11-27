import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Send, 
  Calculator, 
  ShieldCheck, 
  Printer, 
  Copy,
  Check
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { apiService } from '../services/api';
import Toast from './Toast';
import StageVisualizer from './StageVisualizer';

const PROJECT_TYPES = [
  { id: 'apartment', label: 'Luxury Residence & Penthouse Interiors', desc: 'Bespoke living suites, Italian marble, modular kitchens & master joinery', rate: 2100 },
  { id: 'institutional', label: 'School, College & University Interiors', desc: 'Smart classrooms, acoustic auditoriums, research labs & campus blocks', rate: 2300 },
  { id: 'commercial', label: 'Corporate Office Fitout', desc: 'Turnkey workplace, acoustic partitions & executive meeting suites', rate: 1950 },
  { id: 'retail', label: 'Luxury Retail Showroom', desc: 'High-impact retail merchandising, custom brass displays & vitrines', rate: 2400 },
  { id: 'villa', label: 'Turnkey Villa (Civil + Interior)', desc: 'Turnkey ground-up civil construction & luxury architecture', rate: 2800 },
  { id: 'renovation', label: 'Interior Remodeling & Renovation', desc: 'Interior reconfiguration, layout overhaul & luxury modernization', rate: 1800 }
];

const FINISH_TIERS = [
  { 
    id: 'premium', 
    name: 'Premium Standard', 
    multiplier: 1.0, 
    specs: 'Imported vitrified tiles, anti-scratch acrylic kitchen, Gyproc ceilings, premium emulsion' 
  },
  { 
    id: 'luxury', 
    name: 'Luxury Signature', 
    multiplier: 1.35, 
    specs: 'Italian Statuario living, PU lacquered shutters, architectural magnetic tracks, smoked veneer' 
  },
  { 
    id: 'ultra', 
    name: 'Royal Ultra-Luxury', 
    multiplier: 1.75, 
    specs: 'Bookmatched marble throughout, custom solid walnut millwork, brushed brass trims, smart automation' 
  }
];

export default function EventBuilder({ isOpenModal = false, onClose, hideHeader = false }) {
  const [searchParams] = useSearchParams();
  const paramType = searchParams.get('type');
  const paramTier = searchParams.get('tier');
  const paramArea = Number(searchParams.get('area'));
  const paramRef = searchParams.get('ref') || '';

  const [projectType, setProjectType] = useState(
    PROJECT_TYPES.some((p) => p.id === paramType) ? paramType : 'apartment'
  );
  const [areaSqFt, setAreaSqFt] = useState(
    Number.isFinite(paramArea) && paramArea >= 500 && paramArea <= 50000 ? paramArea : 2500
  );
  const [finishTier, setFinishTier] = useState(
    FINISH_TIERS.some((t) => t.id === paramTier) ? paramTier : 'luxury'
  );
  const [timelineMonths, setTimelineMonths] = useState(10);
  const [projectLocation, setProjectLocation] = useState('');

  // Scope Toggles
  const [scope, setScope] = useState({
    civilStructural: true,
    modularJoinery: true,
    italianMarble: true,
    ceilingsLighting: true,
    smartAutomation: false,
    mepHvac: true
  });

  // Client Details
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    siteAddress: '',
    notes: paramRef ? `Reference showcase style: ${paramRef}` : ''
  });

  useEffect(() => {
    if (paramType && PROJECT_TYPES.some((p) => p.id === paramType)) setProjectType(paramType);
    if (paramTier && FINISH_TIERS.some((t) => t.id === paramTier)) setFinishTier(paramTier);
    if (Number.isFinite(paramArea) && paramArea >= 500 && paramArea <= 50000) setAreaSqFt(paramArea);
    if (paramRef) {
      setClientInfo((prev) =>
        prev.notes ? prev : { ...prev, notes: `Reference showcase style: ${paramRef}` }
      );
    }
  }, [paramType, paramTier, paramArea, paramRef]);

  const [submitted, setSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [proposalRef] = useState(() => `PD-BOQ-2026-${Math.floor(100000 + Math.random() * 900000)}`);

  const toggleScope = (key) => {
    setScope(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateArea = (delta) => {
    setAreaSqFt(prev => Math.min(50000, Math.max(500, prev + delta)));
  };

  // Cost Calculation Engine
  const baseRate = PROJECT_TYPES.find(p => p.id === projectType)?.rate || 2500;
  const tierMultiplier = FINISH_TIERS.find(t => t.id === finishTier)?.multiplier || 1.35;
  
  // Scope additions
  let scopeMultiplier = 0.65; // Base minimum
  if (scope.civilStructural) scopeMultiplier += 0.35;
  if (scope.modularJoinery) scopeMultiplier += 0.25;
  if (scope.italianMarble) scopeMultiplier += 0.20;
  if (scope.ceilingsLighting) scopeMultiplier += 0.15;
  if (scope.smartAutomation) scopeMultiplier += 0.12;
  if (scope.mepHvac) scopeMultiplier += 0.18;

  const totalEstimate = Math.round(areaSqFt * baseRate * tierMultiplier * (scopeMultiplier / 1.35));
  const civilCost = Math.round(totalEstimate * 0.42);
  const interiorCost = Math.round(totalEstimate * 0.33);
  const mepCost = Math.round(totalEstimate * 0.15);
  const finishesCost = Math.round(totalEstimate * 0.10);

  // Formatted Indian Rupee / Currency
  const formatCost = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakh`;
  };

  // Generate formatted WhatsApp message & persist inquiry
  const handleWhatsAppBooking = async () => {
    const selectedProject = PROJECT_TYPES.find(p => p.id === projectType)?.label || projectType;
    const selectedTier = FINISH_TIERS.find(t => t.id === finishTier)?.name || finishTier;

    if (clientInfo.name.trim() && clientInfo.phone.trim()) {
      await apiService.submitClientInquiry({
        id: proposalRef,
        name: clientInfo.name,
        company: `${selectedTier} Tier`,
        phone: clientInfo.phone,
        email: clientInfo.email,
        eventType: selectedProject,
        venue: projectLocation || 'Bengaluru / Site TBD',
        areaSqFt,
        customRequest: clientInfo.notes,
        quotedAmount: formatCost(totalEstimate),
        source: 'quote_builder'
      });
    }

    let msg = `*NEW ARCHITECTURAL INQUIRY - PRISTINE DECORE*\n\n`;
    msg += `🏛 *Project Type:* ${selectedProject}\n`;
    msg += `📐 *Carpet Area:* ${areaSqFt.toLocaleString()} Sq. Ft\n`;
    msg += `💎 *Finish Tier:* ${selectedTier}\n`;
    if (projectLocation) msg += `📍 *Site Location:* ${projectLocation}\n`;
    msg += `💰 *Indicative Budget Estimate:* ${formatCost(totalEstimate)} (Excl. Govt Taxes)\n\n`;

    msg += `🛠 *SCOPE OF WORK INCLUDED:*\n`;
    if (scope.civilStructural) msg += `• Turnkey Civil & Structural Engineering\n`;
    if (scope.modularJoinery) msg += `• Modular Kitchens, Wardrobes & Custom Millwork\n`;
    if (scope.italianMarble) msg += `• Italian Marble Flooring & Stone Wall Cladding\n`;
    if (scope.ceilingsLighting) msg += `• Architectural Gyproc Ceilings & Magnetic Track Lighting\n`;
    if (scope.mepHvac) msg += `• Concealed MEP, Plumbing & VRV Air Conditioning\n`;
    if (scope.smartAutomation) msg += `• Smart DALI/Lutron Automation & Security\n`;

    if (clientInfo.notes) {
      msg += `\n📝 *Custom Brief:* "${clientInfo.notes}"\n`;
    }

    if (clientInfo.name) {
      msg += `\n👤 *Client Contact:*\n• Name: ${clientInfo.name}\n• Phone: ${clientInfo.phone || 'N/A'}\n• Email: ${clientInfo.email || 'N/A'}`;
    }

    msg += `\n\n_Generated via pristinedecore.com Cost Estimator Studio_`;

    setToastMsg("Architectural estimate formatted and dispatched to studio desk!");
    window.open(CONTACT_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  const handlePrintProposal = () => {
    window.print();
  };

  const handleCopySummary = async () => {
    const selectedProject = PROJECT_TYPES.find((p) => p.id === projectType)?.label || projectType;
    const selectedTier = FINISH_TIERS.find((t) => t.id === finishTier)?.name || finishTier;
    const summary = [
      `PRISTINE DECORE — ARCHITECTURAL BOQ ESTIMATE (${proposalRef})`,
      `Typology: ${selectedProject}`,
      `Finish Tier: ${selectedTier}`,
      `Area: ${areaSqFt.toLocaleString()} Sq. Ft`,
      `Location: ${projectLocation || 'Bengaluru / Site TBD'}`,
      `Estimated Investment: ${formatCost(totalEstimate)} (Civil: ${formatCost(civilCost)} | Joinery: ${formatCost(interiorCost)} | MEP: ${formatCost(mepCost)} | Stone/Finishes: ${formatCost(finishesCost)})`,
      `Hotline: +91 98453 02888 | https://pristinedecore.com`
    ].join('\n');
    try {
      await navigator.clipboard.writeText(summary);
      setToastMsg('Itemized BOQ summary copied to clipboard!');
    } catch {
      setToastMsg('Use Print Proposal or WhatsApp dispatch below.');
    }
  };

  return (
    <section id="builder" className={hideHeader ? "py-4 md:py-6 bg-transparent relative" : "py-20 md:py-28 bg-[#F4F4F1] border-y border-slate-200/80 relative"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 no-print">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
              <Calculator className="w-3.5 h-3.5 text-amber-600" />
              <span>Real-Time Construction &amp; Interior Estimator</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Calculate Your <span className="text-gradient-gold">Project Investment</span> in 2 Minutes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Select your project parameters, area, and finish grade. Receive an itemized turnkey cost estimate with 3D blueprint visualization and instant BOQ export.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurator Steps */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Interactive 3D Space Visualizer & CAD Plan */}
            <StageVisualizer 
              projectType={projectType} 
              areaSqFt={areaSqFt} 
              finishTier={finishTier}
              scope={scope} 
            />

            {paramRef && (
              <div className="px-5 py-3 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs font-semibold flex items-center justify-between gap-2 shadow-soft-sm">
                <span>Estimating parameters pre-loaded from portfolio work: <strong className="font-bold">{paramRef}</strong></span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-amber-200 shrink-0">{areaSqFt.toLocaleString()} Sq. Ft</span>
              </div>
            )}

            {/* Step 1: Project Type & Location */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">1</span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">Project Type &amp; Site Details</h3>
                  <p className="text-xs text-slate-500">Select your architectural typology</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      projectType === type.id
                        ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-500/20 shadow-soft-sm'
                        : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-heading font-bold text-sm text-slate-900">{type.label}</div>
                    <div className="text-[11px] text-slate-500 mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Site Location / City / Neighborhood:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jubilee Hills, Whitefield, Bandra West, Golf Course Road"
                  value={projectLocation}
                  onChange={(e) => setProjectLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 bg-slate-50/50"
                />
              </div>
            </div>

            {/* Step 2: Carpet Area in Square Feet */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">2</span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">Total Built-Up / Carpet Area</h3>
                  <p className="text-xs text-slate-500">Configure total square footage</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-xs text-amber-900 font-medium">Selected Area:</span>
                  <div className="font-heading text-3xl font-extrabold text-slate-900">
                    {areaSqFt.toLocaleString()} <span className="text-sm font-normal text-slate-500">Sq. Ft</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateArea(-500)}
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-100 transition-colors shadow-sm flex items-center justify-center"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => updateArea(500)}
                    className="w-10 h-10 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors shadow-soft-gold flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Area Range Slider & Quick Selector Pills */}
              <div className="space-y-3 pt-1">
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="250"
                  value={Math.min(25000, areaSqFt)}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  aria-label="Square footage area slider"
                />
                <div className="flex flex-wrap gap-2">
                  {[1200, 2500, 4500, 7500, 12000, 25000].map((sqft) => (
                    <button
                      key={sqft}
                      type="button"
                      onClick={() => setAreaSqFt(sqft)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
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
            </div>

            {/* Step 3: Material & Finish Tier */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">3</span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">Material &amp; Finish Specification</h3>
                  <p className="text-xs text-slate-500">Select material grades and craftsmanship tier</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FINISH_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setFinishTier(tier.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      finishTier === tier.id
                        ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-500/20 shadow-soft-sm'
                        : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-heading font-bold text-sm text-slate-900">{tier.name}</div>
                    <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{tier.specs}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Turnkey Scope of Work */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">4</span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">Scope of Work Elements</h3>
                  <p className="text-xs text-slate-500">Toggle turnkey disciplines included in this estimate</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'civilStructural', label: 'Turnkey Civil & Structural Engineering', desc: 'Foundations, RCC framing, brickwork & waterproofing' },
                  { key: 'modularJoinery', label: 'Modular Kitchens & Custom Closets', desc: 'Blum hardware, acrylic/PU finish, sintered quartz' },
                  { key: 'italianMarble', label: 'Italian Marble & Custom Stonework', desc: 'Bookmatched living flooring, cladding & vanity slabs' },
                  { key: 'ceilingsLighting', label: 'Architectural Ceilings & Magnetic Lighting', desc: 'Gyproc ceilings, cove troughs & DALI automation' },
                  { key: 'mepHvac', label: 'Concealed MEP, Plumbing & VRV HVAC', desc: 'Copper piping, electrical conduits, sanitaryware' },
                  { key: 'smartAutomation', label: 'Smart Home Automation & Security', desc: 'Touchless scene switches, biometric entry & surveillance' }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleScope(item.key)}
                    className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                      scope[item.key]
                        ? 'bg-emerald-50/70 border-emerald-400 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      scope[item.key] ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                    }`}>
                      {scope[item.key] && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">{item.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live BOQ Summary & Proposal Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-luxury space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Live BOQ Estimate
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mt-1">Project Investment</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500">Estimated Range:</span>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-700">
                    {formatCost(totalEstimate)}
                  </div>
                </div>
              </div>

              {/* BOQ Discipline Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Itemized Cost Allocation:
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-slate-700 font-medium">Civil &amp; Structural Architecture (42%)</span>
                  <span className="font-bold text-slate-900">{formatCost(civilCost)}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-slate-700 font-medium">Interior Joinery &amp; Modular Systems (33%)</span>
                  <span className="font-bold text-slate-900">{formatCost(interiorCost)}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-slate-700 font-medium">MEP, Electrical, HVAC &amp; Plumbing (15%)</span>
                  <span className="font-bold text-slate-900">{formatCost(mepCost)}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-slate-700 font-medium">Finishes, Stone Cladding &amp; Paints (10%)</span>
                  <span className="font-bold text-slate-900">{formatCost(finishesCost)}</span>
                </div>
              </div>

              {/* Client Brief Fields */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Client &amp; Site Information:
                </div>
                
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 bg-slate-50/50"
                />

                <input
                  type="tel"
                  placeholder="Mobile / WhatsApp Number *"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 bg-slate-50/50"
                />

                <textarea
                  rows="2"
                  placeholder="Custom architectural notes, specific marble preferences, floor count..."
                  value={clientInfo.notes}
                  onChange={(e) => setClientInfo(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 bg-slate-50/50 resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-soft-lg transition-all"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Send Estimate to Studio Architects (WhatsApp)</span>
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handlePrintProposal}
                    className="w-full py-3 rounded-2xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 flex items-center justify-center gap-2 transition-all shadow-soft-sm"
                  >
                    <Printer className="w-4 h-4 text-amber-600" />
                    <span>Print Official BOQ (PDF)</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="w-full py-3 rounded-2xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 flex items-center justify-center gap-2 transition-all shadow-soft-sm"
                  >
                    <Copy className="w-4 h-4 text-amber-600" />
                    <span>Copy BOQ Summary</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-500">
                  Fixed-price BOQ guarantee. No hidden escalations after contract signing.
                </p>
              </div>

              {/* Quality Guarantee Pill */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-2.5 text-xs text-amber-900 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>10-Year RCC Structural Warranty &amp; Milestone Handover Included</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* PRINT-ONLY FORMAL B2B PROPOSAL SHEET */}
      <div className="hidden print:block printable-quote-sheet font-sans p-10 text-slate-900 bg-white border-2 border-slate-900 m-4 rounded-xl">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-wider text-amber-700 font-heading">✦ PRISTINE DECORE</span>
              <span className="text-[10px] uppercase font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">
                18+ Years Registered (Est. 2008)
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-slate-700 font-semibold mt-1">
              Luxury Interior Architecture &amp; Turnkey Civil Construction Atelier
            </p>
            <p className="text-[10px] text-slate-600 mt-0.5">
              GSTIN: <strong>{CONTACT_CONFIG.gstin}</strong> • Registered Office: {CONTACT_CONFIG.studioAddress}
            </p>
            <p className="text-[10px] text-slate-600">
              Hotline: +91 98453 02888 • Email: decorepristine@gmail.com • Web: pristinedecore.com
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3.5 py-1.5 bg-slate-900 text-white text-xs font-bold uppercase rounded-md tracking-wider">
              Executive BOQ Proposal
            </span>
            <p className="text-xs text-slate-700 font-semibold mt-1">Date: {new Date().toLocaleDateString('en-IN')}</p>
            <p className="text-xs text-slate-500 font-mono">Proposal Ref: {proposalRef}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 mb-6 text-xs">
          <div>
            <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Client &amp; Site Coordinates:</p>
            <p className="font-bold text-slate-900 mt-1 text-sm">{clientInfo.name || "Valued Private Client"}</p>
            <p className="text-slate-600 font-mono">Mobile / WhatsApp: {clientInfo.phone || "+91 98453 02888"}</p>
            <p className="text-slate-600">Location: {projectLocation || "Bengaluru Prime Sector"}</p>
          </div>
          <div>
            <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Architectural Parameters:</p>
            <p className="text-slate-900 mt-1"><strong>Typology:</strong> {PROJECT_TYPES.find(p => p.id === projectType)?.label}</p>
            <p className="text-slate-900"><strong>Built-Up Space:</strong> {areaSqFt.toLocaleString()} Sq. Ft</p>
            <p className="text-slate-900"><strong>Craftsmanship Tier:</strong> {FINISH_TIERS.find(t => t.id === finishTier)?.name}</p>
          </div>
        </div>

        <table className="w-full text-xs text-left mb-6 border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-900 text-slate-900 uppercase font-bold text-[10px]">
              <th className="py-2.5">Discipline / Architectural Scope</th>
              <th className="py-2.5">Materials &amp; Engineering Standards</th>
              <th className="py-2.5 text-right">Allocated Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="py-2.5 font-bold">1. Civil &amp; Structural Architecture (42%)</td>
              <td className="py-2.5 text-slate-600">Seismic IS 1893 RCC framing, Fe-550D primary steel, concrete cube test reports</td>
              <td className="py-2.5 text-right font-mono font-bold">{formatCost(civilCost)}</td>
            </tr>
            <tr>
              <td className="py-2.5 font-bold">2. Luxury Interior Joinery (33%)</td>
              <td className="py-2.5 text-slate-600">German Blum Legrabox modular systems, lacquered glass wardrobes, Statuario countertops</td>
              <td className="py-2.5 text-right font-mono font-bold">{formatCost(interiorCost)}</td>
            </tr>
            <tr>
              <td className="py-2.5 font-bold">3. MEP, HVAC &amp; Electrical (15%)</td>
              <td className="py-2.5 text-slate-600">Concealed FRLS copper wiring, Daikin VRV copper runs, luxury Kohler/Artize sanitary</td>
              <td className="py-2.5 text-right font-mono font-bold">{formatCost(mepCost)}</td>
            </tr>
            <tr>
              <td className="py-2.5 font-bold">4. Premium Stonework &amp; Ceilings (10%)</td>
              <td className="py-2.5 text-slate-600">Italian marble bookmatched laying, Saint-Gobain Gyproc false ceilings, magnetic tracks</td>
              <td className="py-2.5 text-right font-mono font-bold">{formatCost(finishesCost)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-slate-900 font-bold bg-amber-50/60">
              <td colSpan="2" className="py-3 text-right uppercase text-[11px] font-extrabold">Total Project Investment (All-Inclusive Fixed BOQ):</td>
              <td className="py-3 text-right font-mono text-base font-black text-amber-900">{formatCost(totalEstimate)}</td>
            </tr>
          </tfoot>
        </table>

        {/* 4-Stage Payment Milestone Schedule */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 mb-6 text-xs space-y-2">
          <div className="text-[10px] uppercase font-bold text-slate-700 tracking-wider">
            Standard Turnkey Milestone Disbursement Schedule:
          </div>
          <div className="grid grid-cols-4 gap-2 text-[11px]">
            <div className="p-2 bg-white rounded border border-slate-200">
              <strong>Milestone 1 (20%):</strong> Site mobilization &amp; structural RCC plinth
            </div>
            <div className="p-2 bg-white rounded border border-slate-200">
              <strong>Milestone 2 (30%):</strong> Superstructure, brickwork &amp; MEP rough-ins
            </div>
            <div className="p-2 bg-white rounded border border-slate-200">
              <strong>Milestone 3 (30%):</strong> Italian marble, false ceilings &amp; modular joinery
            </div>
            <div className="p-2 bg-white rounded border border-slate-200">
              <strong>Milestone 4 (20%):</strong> Painting, lighting fixtures &amp; final handover
            </div>
          </div>
        </div>

        {/* Guarantees & Acceptance Signatures */}
        <div className="grid grid-cols-3 gap-6 border-t-2 border-slate-900 pt-6 text-[11px]">
          <div>
            <p className="font-bold text-slate-900 uppercase">10-Year Civil Warranty</p>
            <p className="text-slate-500 text-[10px] mt-1">Full structural integrity warranty on foundations and RCC suspended slabs.</p>
          </div>
          <div className="text-center pt-8 border-t border-dashed border-slate-300">
            <p className="font-bold text-slate-900 text-xs">Client Acceptance</p>
            <p className="text-slate-400 text-[10px]">Authorized Signature &amp; Date</p>
          </div>
          <div className="text-center pt-8 border-t border-dashed border-slate-300">
            <p className="font-bold text-slate-900 text-xs">For Pristine Decore</p>
            <p className="text-slate-400 text-[10px]">Principal Architect &amp; Seal</p>
          </div>
        </div>
      </div>

      {/* Interactive Toast Notification */}
      {toastMsg && (
        <Toast 
          message={toastMsg} 
          onClose={() => setToastMsg('')} 
        />
      )}
    </section>
  );
}
