import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryCategories, galleryItems, materialPartners } from '../data/galleryData';
import { 
  Sparkles, 
  Layers, 
  MapPin, 
  ArrowRight, 
  Check, 
  Compass,
  Camera,
  ShieldCheck
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function GallerySection({ onSelectLook }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Show top 6 featured projects on homepage
  const displayItems = filteredItems.slice(0, 6);

  const handleInquireProject = (title) => {
    const text = `Hi Pristine Decore! I am interested in an architectural / interior design consultation for a project similar to "${title}".`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF9F5] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Turnkey Portfolio • 100+ Real Projects</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Crafted with Precision. <span className="text-gradient-gold">Engineered to Endure.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore recent turnkey residential villas, schools, colleges, university auditoriums, modular kitchens, and corporate spaces delivered by Pristine Decore with 10-year structural warranties.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map(item => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-luxury hover:shadow-luxury-lg flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                  
                  {/* Top Badge: Venue */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow-soft-sm">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    <span className="truncate max-w-[200px]">{item.venue}</span>
                  </div>

                  {/* Bottom Overlay Stat */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-amber-400/30">
                      {item.stats}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
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

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <Link
                  to="/quote"
                  className="text-xs font-bold text-slate-600 hover:text-amber-700 transition-colors"
                >
                  Estimate BOQ
                </Link>
                <button
                  type="button"
                  onClick={() => handleInquireProject(item.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 group"
                >
                  <span>Inquire Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All 100+ CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-200/80 shadow-soft-md text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Full Portfolio Access</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
              Browse All 100+ Real Turnkey Architectural Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              High-resolution photography across luxury villas, modular kitchens, master suites, and commercial fitouts.
            </p>
          </div>
          <Link
            to="/gallery"
            className="shrink-0 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-soft-gold hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Explore All 100+ Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Certified Material Partners Strip */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">
              Certified Materials &amp; Engineering Specification Partners
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700">
            {materialPartners.map((partner, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-amber-800 transition-colors">{partner}</span>
                {idx < materialPartners.length - 1 && <span className="text-amber-400">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
