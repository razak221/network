import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { 
  Camera, 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Check, 
  ExternalLink,
  Layers
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleInquireProject = (projectTitle) => {
    const text = `Hi Pristine Decore! I saw the showcase project "${projectTitle}" on your website and would like to build a similar setup for our upcoming event.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Visual Portfolio & Showcase</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Field Activations & Executions</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Our Architectural <span className="text-gradient-gold">Showcase Portfolio</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Real setups delivered across premier mall atriums, retail store fronts, and corporate exhibitions. Every photo reflects our single-window standard of elite manpower and custom fabrication.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-soft-gold scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Luxury Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-900 shadow-sm border border-white/40">
                      {item.category.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Impact Stats Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{item.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/60">
                      {item.stats}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <Link
                  to="/quote"
                  className="text-xs font-bold text-slate-700 hover:text-amber-700 transition-colors"
                >
                  Configure In Quote
                </Link>
                <button
                  onClick={() => handleInquireProject(item.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 group"
                >
                  <span>Replicate Look</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

