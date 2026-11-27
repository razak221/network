import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Send, 
  Info, 
  Gem,
  Copy,
  Package
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { apiService } from '../services/api';
import TiltCard3D from './TiltCard3D';
import SafeImage from './SafeImage';
import Toast from './Toast';

const MOODBOARD_PRESETS = [
  { id: 'penthouse', label: 'Ivory Statuario Penthouse', ids: { stone: 'statuario', wood: 'fluted-oak', metals: 'champagne-gold', glazing: 'smoked-bronze-glass' } },
  { id: 'villa', label: 'Warm Teak Villa', ids: { stone: 'calacatta-gold', wood: 'burma-teak', metals: 'rose-gold', glazing: 'acoustic-boucle' } },
  { id: 'boardroom', label: 'Noir Executive Suite', ids: { stone: 'nero-marquina', wood: 'charcoal-acrylic', metals: 'matte-black-pvd', glazing: 'smart-privacy-glass' } },
  { id: 'campus', label: 'Campus & Auditorium', ids: { stone: 'travertine-classic', wood: 'american-walnut', metals: 'blum-onyx', glazing: 'sintered-stone' } },
];

const MATERIAL_CATEGORIES = [
  { id: 'stone', label: '1. Italian Marble & Quartz' },
  { id: 'wood', label: '2. Veneers & Millwork' },
  { id: 'metals', label: '3. Architectural Hardware' },
  { id: 'glazing', label: '4. Acoustic Glass & Fabrics' }
];

const SWATCH_LIBRARY = {
  stone: [
    {
      id: 'statuario',
      name: 'Bookmatched Italian Statuario',
      origin: 'Carrara Quarries, Tuscany, Italy',
      type: 'First-Choice Extra White Marble',
      image: 'https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=600&auto=format&fit=crop&q=80',
      specs: '20mm Polished Slab • Distinct Grey Feathery Veins • Mirror-Matched',
      cert: '100% Genuine Italian Origin Certificate',
      ideal: 'Double-Height Living Salon, Foyer Flooring & Master Vanity'
    },
    {
      id: 'calacatta-gold',
      name: 'Calacatta Borghini Gold',
      origin: 'Apuan Alps, Italy',
      type: 'Warm Honey & Taupe Veined Marble',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80',
      specs: '20mm Honed / Polished • Warm Golden Ribbons • Low Porosity',
      cert: 'Exclusive Quarry Selection',
      ideal: 'Island Waterfall Counters & Powder Room Cladding'
    },
    {
      id: 'nero-marquina',
      name: 'Spanish Nero Marquina',
      origin: 'Markina-Xemein, Spain',
      type: 'High-Contrast Deep Black Marble',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&auto=format&fit=crop&q=80',
      specs: '18mm Leathered / Polished • Crisp White Calcite Veining',
      cert: 'Grade-A Dense Crystallization',
      ideal: 'Architectural Fireplaces, Bar Counters & Feature Niches'
    },
    {
      id: 'travertine-classic',
      name: 'Classic Roman Navona Travertine',
      origin: 'Tivoli, Rome, Italy',
      type: 'Porous Warm Beige Sedimentary Stone',
      image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&auto=format&fit=crop&q=80',
      specs: 'Open-Pore or Resin-Filled • Thermal Non-Slip Tactile Texture',
      cert: 'AIA & NBC Compliant',
      ideal: 'Outdoor Villa Decks, Stepped Courtyards & Terrace Balconies'
    }
  ],
  wood: [
    {
      id: 'fluted-oak',
      name: '3D Fluted European White Oak',
      origin: 'Bavaria, Germany',
      type: 'Precision-Milled Acoustic Slats',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80',
      specs: '18mm BWP Marine Substrate • Class-1 Fire Treated • Matt PU',
      cert: 'FSC 100% Certified Sustainable Timber',
      ideal: 'Acoustic Living Walls, Headboards & Hidden Secret Doors'
    },
    {
      id: 'burma-teak',
      name: 'Solid Burma Teak & Crown Veneer',
      origin: 'Myanmar Natural Teak Forest',
      type: 'High Natural Silica Hardwood',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&auto=format&fit=crop&q=80',
      specs: 'Natural Oil Finish • Termite-Proof • Deep Golden Grain',
      cert: 'Kiln Dried & Seasoned (<10% Moisture)',
      ideal: 'Monumental 10ft Pivot Entrance Doors & Pooja Mandir Ceilings'
    },
    {
      id: 'charcoal-acrylic',
      name: 'Senosan Super-Matte Acrylic',
      origin: 'Austria (Senosan GmbH)',
      type: 'Anti-Fingerprint Nanotech Acrylic',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&auto=format&fit=crop&q=80',
      specs: 'Laser Edge-Banded • Thermal Self-Healing • Zero Micro-Scratches',
      cert: 'DIN 68861 Chemical Resistance Standard',
      ideal: 'German Modular Kitchen Shutter Profiles & Master Wardrobes'
    },
    {
      id: 'american-walnut',
      name: 'Quarter-Cut American Walnut',
      origin: 'Appalachian Region, USA',
      type: 'Rich Espresso Brown Architectural Veneer',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=80',
      specs: 'Natural Open-Pore Matte Polish • Straight Ribbon Grain',
      cert: 'Zero Formaldehyde Low-VOC Adhesive',
      ideal: 'Study Library Bookshelves & Dining Room Credenzas'
    }
  ],
  metals: [
    {
      id: 'champagne-gold',
      name: 'Brushed Champagne PVD Brass',
      origin: 'Milan Design Cluster, Italy',
      type: 'Physical Vapor Deposition (PVD) Coating',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80',
      specs: 'Solid Brass Core • 10-Year Anti-Tarnish Lifetime Layer',
      cert: 'ISO 9001 Corrosion Certified',
      ideal: 'Fluted Panel Inlays, Wardrobe Edge Grips & Lighting Cans'
    },
    {
      id: 'blum-onyx',
      name: 'German Blum Onyx Black Legrabox',
      origin: 'Vorarlberg, Austria',
      type: 'Concealed Dynamic Drawer Runner System',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&auto=format&fit=crop&q=80',
      specs: '70kg Dynamic Load Rating • 100,000 Opening Cycles Warranty',
      cert: 'Blum Official Manufacturer Guarantee',
      ideal: 'Heavy Pots & Pans Drawers, Pantry Larders & Blum Aventos'
    },
    {
      id: 'rose-gold',
      name: 'Antique Satin Rose Gold',
      origin: 'Germany',
      type: 'Architectural Hardware Trim',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&auto=format&fit=crop&q=80',
      specs: 'Brushed Satin Lacquer • Fingerprint Resistant Coating',
      cert: 'Salt Spray Tested 480 Hours',
      ideal: 'Vanity Drawer Knurled Handles & Bathroom Fitting Accents'
    },
    {
      id: 'matte-black-pvd',
      name: 'Architectural Matte Black PVD',
      origin: 'Hafele / Blum Certified Partners',
      type: 'Electrostatic PVD Stainless Steel',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80',
      specs: 'Scratch-Proof Deep Jet Black • Non-Reflective Satin Texture',
      cert: 'High Durability Standard',
      ideal: 'Minimalist Partition Mullions & Shadowline Ceiling Reveals'
    }
  ],
  glazing: [
    {
      id: 'smoked-bronze-glass',
      name: 'Smoked Bronze Fluted Glass',
      origin: 'Saint-Gobain Glass India',
      type: 'Toughened 8mm Reeded Safety Glass',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=80',
      specs: '8mm Tempered Safety Glass • Privacy Fluting • Polished Edges',
      cert: 'IS 2553 Architectural Safety Glass Certified',
      ideal: 'Walk-In Wardrobe Shutter Doors & Ensuite Bath Enclosures'
    },
    {
      id: 'acoustic-boucle',
      name: 'Belgian Acoustic Bouclé Fabric',
      origin: 'Flanders, Belgium',
      type: 'Textured Wool & Cotton Acoustic Weave',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
      specs: 'NRC 0.75 Sound Absorption • Stain-Resistant Nano-Treated',
      cert: 'OEKO-TEX Standard 100 Eco-Safe',
      ideal: 'Private Home Theatre Walls & Master Bed Acoustic Panels'
    },
    {
      id: 'smart-privacy-glass',
      name: 'Switchable PDLC Smart Glass',
      origin: 'Tokyo, Japan',
      type: 'Polymer Dispersed Liquid Crystal (PDLC)',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80',
      specs: 'Instant Clear-to-Opaque in <100ms • Smart Home / DALI Control',
      cert: 'CE & UL Electrical Safety Standard',
      ideal: 'Executive Boardroom Partitions & Master Bathroom Privacy'
    },
    {
      id: 'sintered-stone',
      name: '12mm Large-Format Sintered Porcelain',
      origin: 'Castellón, Spain',
      type: 'Heat & Stain Proof Ultracompact Slab',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&auto=format&fit=crop&q=80',
      specs: 'Zero Porosity • Withstands 1000°C Direct Heat • Food Safe',
      cert: 'NSF Food Preparation Area Certified',
      ideal: 'Chef Kitchen Prep Counters & Seamless Bathroom Vanity Tops'
    }
  ]
};

export default function MaterialStudio() {
  const [activeCategory, setActiveCategory] = useState('stone');
  const [activeMoodboard, setActiveMoodboard] = useState({
    stone: SWATCH_LIBRARY.stone[0],
    wood: SWATCH_LIBRARY.wood[0],
    metals: SWATCH_LIBRARY.metals[0],
    glazing: SWATCH_LIBRARY.glazing[0]
  });
  const [showCourierForm, setShowCourierForm] = useState(false);
  const [courierInfo, setCourierInfo] = useState({ name: '', phone: '', city: 'Bengaluru' });
  const [toastMsg, setToastMsg] = useState('');

  const selectMaterial = (category, material) => {
    setActiveMoodboard(prev => ({ ...prev, [category]: material }));
  };

  const applyMoodboardPreset = (preset) => {
    setActiveMoodboard({
      stone: SWATCH_LIBRARY.stone.find(m => m.id === preset.ids.stone) || SWATCH_LIBRARY.stone[0],
      wood: SWATCH_LIBRARY.wood.find(m => m.id === preset.ids.wood) || SWATCH_LIBRARY.wood[0],
      metals: SWATCH_LIBRARY.metals.find(m => m.id === preset.ids.metals) || SWATCH_LIBRARY.metals[0],
      glazing: SWATCH_LIBRARY.glazing.find(m => m.id === preset.ids.glazing) || SWATCH_LIBRARY.glazing[0],
    });
    setToastMsg(`Loaded "${preset.label}" 4-layer palette!`);
  };

  const handleRequestSampleBox = (material) => {
    const text = `Hello Pristine Decore! I am exploring materials on pristinedecore.com and would like to request an authentic physical sample of "${material.name}" (${material.origin}) for an upcoming interior project.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  const handleExportMoodboard = () => {
    const text = `Hello Pristine Decore! I assembled my custom luxury material moodboard on pristinedecore.com:\n\n• Stone: ${activeMoodboard.stone.name}\n• Millwork: ${activeMoodboard.wood.name}\n• Hardware: ${activeMoodboard.metals.name}\n• Glass/Fabric: ${activeMoodboard.glazing.name}\n\nPlease share availability, square-foot procurement rates, and physical swatch delivery timeline.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  const handleCopySpec = async () => {
    const sheet = [
      'PRISTINE DECORE — ARCHITECTURAL MOODBOARD SPEC',
      `1. Natural Stone: ${activeMoodboard.stone.name} (${activeMoodboard.stone.origin})`,
      `2. Millwork: ${activeMoodboard.wood.name} (${activeMoodboard.wood.origin})`,
      `3. Hardware: ${activeMoodboard.metals.name} (${activeMoodboard.metals.origin})`,
      `4. Glazing/Surface: ${activeMoodboard.glazing.name} (${activeMoodboard.glazing.origin})`,
      'Studio Hotline: +91 98453 02888 | pristinedecore.com',
    ].join('\n');
    try {
      await navigator.clipboard.writeText(sheet);
      setToastMsg('4-Layer Material Specification copied!');
    } catch {
      handleExportMoodboard();
    }
  };

  const handleCourierSubmit = async (e) => {
    e.preventDefault();
    if (!courierInfo.name.trim() || !courierInfo.phone.trim()) {
      setToastMsg('Please enter your name and WhatsApp number.');
      return;
    }
    const refId = `PD-SWATCH-${Math.floor(1000 + Math.random() * 9000)}`;
    await apiService.submitClientInquiry({
      id: refId,
      name: courierInfo.name,
      company: `Sample Box (${courierInfo.city || 'Bengaluru'})`,
      phone: courierInfo.phone,
      eventType: 'Physical Material Sample Box',
      venue: courierInfo.city || 'Bengaluru',
      customRequest: `Stone: ${activeMoodboard.stone.name} | Wood: ${activeMoodboard.wood.name} | Metal: ${activeMoodboard.metals.name} | Surface: ${activeMoodboard.glazing.name}`,
      quotedAmount: 'Swatch Courier Request',
      source: 'material_studio',
    });
    setToastMsg(`Swatch Box ${refId} dispatched to studio desk!`);
    setShowCourierForm(false);
    handleExportMoodboard();
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF9] border-b border-amber-100/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Gem className="w-3.5 h-3.5 text-amber-600" />
            <span>Digital Atelier Swatch Studio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curate Your Bespoke <span className="text-gradient-gold">Material Palette</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Every marble slab, German Blum hinge, and acoustic timber profile installed by Pristine Decore comes backed by certified global manufacturer provenance. Select materials below to inspect technical specifications and build your custom architectural moodboard.
          </p>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {MATERIAL_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-soft-gold scale-105'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-amber-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Swatch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1200 mb-16">
          {SWATCH_LIBRARY[activeCategory].map((material) => {
            const isSelected = activeMoodboard[activeCategory]?.id === material.id;
            return (
              <TiltCard3D
                key={material.id}
                maxTilt={6}
                scale={1.02}
                className={`p-6 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between card-3d-hover relative overflow-hidden ${
                  isSelected 
                    ? 'border-amber-500 ring-2 ring-amber-500/30 shadow-3d-luxury' 
                    : 'border-slate-200/90 shadow-soft hover:shadow-luxury'
                }`}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-[9px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>In Moodboard</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Swatch Image */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                    <SafeImage 
                      src={material.image} 
                      alt={material.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <span className="text-[10px] font-mono font-bold text-amber-300 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-md">
                        {material.origin}
                      </span>
                    </div>
                  </div>

                  {/* Title & Type */}
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
                      {material.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mt-0.5">
                      {material.type}
                    </p>
                  </div>

                  {/* Technical Specs */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{material.specs}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-[11px] truncate">{material.cert}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footers */}
                <div className="pt-5 mt-4 border-t border-slate-100 space-y-2">
                  <button
                    type="button"
                    onClick={() => selectMaterial(activeCategory, material)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-soft-sm'
                    }`}
                  >
                    <span>{isSelected ? 'Selected for Moodboard' : 'Add to Active Palette'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRequestSampleBox(material)}
                    className="w-full py-1.5 text-[11px] font-semibold text-slate-500 hover:text-amber-700 text-center transition-colors block"
                  >
                    Request Physical Swatch Box →
                  </button>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* Live Active Moodboard Tray */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-3d-luxury">
          {/* Quick Atelier Style Presets */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              1-Click Architectural Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              {MOODBOARD_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyMoodboardPreset(preset)}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 hover:bg-amber-500/20 text-amber-200 border border-white/10 hover:border-amber-400/50 transition-all"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Your Active Architectural Palette</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Client Moodboard Specification Sheet
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                4-layer harmonious synergy curated for luxury residences and institutional campuses.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleCopySpec}
                className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
              >
                <Copy className="w-3.5 h-3.5 text-amber-300" />
                <span>Copy Spec</span>
              </button>
              <button
                type="button"
                onClick={() => setShowCourierForm((s) => !s)}
                className="px-4 py-3 rounded-2xl bg-white text-slate-950 hover:bg-amber-50 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <Package className="w-3.5 h-3.5 text-amber-600" />
                <span>Book Swatch Box</span>
              </button>
              <button
                type="button"
                onClick={handleExportMoodboard}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs shadow-soft-gold flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp Palette</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {showCourierForm && (
            <form onSubmit={handleCourierSubmit} className="my-5 p-4 rounded-2xl bg-white/5 border border-amber-400/30 grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
              <div>
                <label className="block text-[10px] uppercase font-bold text-amber-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  value={courierInfo.name}
                  onChange={(e) => setCourierInfo((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Client / Architect Name"
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-amber-300 mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  value={courierInfo.phone}
                  onChange={(e) => setCourierInfo((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="+91 98..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-amber-300 mb-1">Site City</label>
                <input
                  type="text"
                  value={courierInfo.city}
                  onChange={(e) => setCourierInfo((p) => ({ ...p, city: e.target.value }))}
                  placeholder="Bengaluru"
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
              <button
                type="submit"
                className="py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all"
              >
                Dispatch Physical Samples →
              </button>
            </form>
          )}

          {/* 4 Selected Materials Preview Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Natural Stone / Marble</span>
              <div className="font-heading font-bold text-sm text-white">{activeMoodboard.stone.name}</div>
              <p className="text-[11px] text-slate-400 truncate">{activeMoodboard.stone.origin}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Joinery &amp; Millwork</span>
              <div className="font-heading font-bold text-sm text-white">{activeMoodboard.wood.name}</div>
              <p className="text-[11px] text-slate-400 truncate">{activeMoodboard.wood.origin}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Architectural Metals</span>
              <div className="font-heading font-bold text-sm text-white">{activeMoodboard.metals.name}</div>
              <p className="text-[11px] text-slate-400 truncate">{activeMoodboard.metals.origin}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Glazing &amp; Fabrics</span>
              <div className="font-heading font-bold text-sm text-white">{activeMoodboard.glazing.name}</div>
              <p className="text-[11px] text-slate-400 truncate">{activeMoodboard.glazing.origin}</p>
            </div>
          </div>
        </div>

      </div>

      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg('')} />}
    </section>
  );
}
