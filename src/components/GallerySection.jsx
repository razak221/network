import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { 
  Sparkles, 
  Layers, 
  MapPin, 
  ArrowRight, 
  Check, 
  ExternalLink,
  Camera
} from 'lucide-react';

export default function GallerySection({ onSelectLook }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF9F5] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-luxury-sm">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Visual Portfolio & Field Activations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
            Crafted for Impact. <span className="text-gradient-gold">Delivered Overnight.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore recent mall roadshows, custom illuminated 3D signboards, and high-density event setups managed end-to-end by Pristine Decore.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-white shadow-gold-glow scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-luxury card-luxury flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Top Badge: Venue */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow-luxury-sm">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>{item.venue}</span>
                </div>

                {/* Bottom Overlay Stat */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    {item.stats}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick Add CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Turnkey Fulfillment</span>
                  <a
                    href="#builder"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Similar Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mall Partner Strip */}
        <div className="mt-16 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-luxury-sm text-center">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
            Active Overnight Work Permits & Security Badges Pre-Approved At:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <span>Phoenix Marketcity</span>
            <span className="text-amber-400">•</span>
            <span>Inorbit Malls</span>
            <span className="text-amber-400">•</span>
            <span>Nexus Retail Centers</span>
            <span className="text-amber-400">•</span>
            <span>Forum Malls</span>
            <span className="text-amber-400">•</span>
            <span>Orion Atriums</span>
            <span className="text-amber-400">•</span>
            <span>DLF Retail</span>
          </div>
        </div>

      </div>
    </section>
  );
}

