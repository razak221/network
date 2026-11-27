import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleryCategories, galleryItems, materialPartners } from '../data/galleryData';
import TiltCard3D from './TiltCard3D';
import SafeImage from './SafeImage';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Compass,
  ShieldCheck,
  Maximize2,
  X
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function GallerySection({ onSelectLook }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxItem(null);
    };
    if (lightboxItem) {
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }
  }, [lightboxItem]);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
            <span>Turnkey Portfolio • {galleryItems.length}+ Real Indian Works</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1200">
          {displayItems.map(item => (
            <TiltCard3D
              key={item.id}
              maxTilt={6}
              scale={1.015}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-luxury hover:shadow-3d-luxury card-3d-hover flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Image Container with Hover Zoom & Click-to-Preview */}
                <div
                  onClick={() => setLightboxItem(item)}
                  className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-zoom-in"
                  title="Click to inspect full resolution"
                >
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                  
                  {/* Top Badge: Venue */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow-soft-sm">
                    <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                    <span className="truncate max-w-[190px]">{item.venue}</span>
                  </div>

                  {/* Quick Expand Pill */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="w-8 h-8 rounded-full bg-slate-900/75 backdrop-blur-md text-white flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </span>
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
              <div className="p-6 pt-3 border-t border-slate-100 mt-2 flex items-center justify-between">
                <Link
                  to="/quote"
                  className="text-xs font-bold text-slate-600 hover:text-amber-700 transition-colors"
                >
                  Estimate BOQ
                </Link>
                <button
                  type="button"
                  onClick={() => handleInquireProject(item.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 group/btn"
                >
                  <span>Inquire Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Explore All 130+ CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-200/80 shadow-soft-md text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Full Portfolio Access</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
              Browse All {galleryItems.length}+ Real Turnkey Architectural Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              High-resolution photography across luxury villas, modular kitchens, master suites, universities, and commercial fitouts.
            </p>
          </div>
          <Link
            to="/gallery"
            className="shrink-0 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-soft-gold hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Explore All {galleryItems.length}+ Projects</span>
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

      {/* Lightbox Modal for Homepage Portfolio */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn no-print"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/65 text-white hover:bg-black flex items-center justify-center transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <SafeImage
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  {lightboxItem.category.toUpperCase()}
                </span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{lightboxItem.venue} • {lightboxItem.stats}</span>
                </p>
                <p className="text-xs text-slate-300 max-w-2xl pt-1">
                  {lightboxItem.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleInquireProject(lightboxItem.title)}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-soft-gold whitespace-nowrap inline-flex items-center gap-2 shrink-0"
              >
                <span>Consult on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
