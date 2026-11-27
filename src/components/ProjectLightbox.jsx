import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight, X, Calculator } from 'lucide-react';
import SafeImage from './SafeImage';
import { CONTACT_CONFIG } from '../config/contact';

/** Maps a portfolio item into clean /quote deep-link query params. */
export function buildQuoteLinkFromItem(item) {
  if (!item) return '/quote';
  const catMap = {
    villas: 'villa',
    institutional: 'institutional',
    commercial: 'commercial',
    interiors: 'apartment',
    kitchens: 'apartment',
    bedrooms: 'apartment',
    closets: 'apartment',
    bathrooms: 'apartment',
  };
  const type = catMap[item.category] || 'apartment';
  const areaMatch = (item.stats || '').replace(/,/g, '').match(/(\d{3,6})\s*sq/i);
  const parsedArea = areaMatch ? Math.min(25000, Math.max(500, Number(areaMatch[1]))) : 3000;
  const params = new URLSearchParams({
    type,
    area: String(parsedArea),
    ref: item.title,
  });
  return `/quote?${params.toString()}`;
}

/**
 * ProjectLightbox — Shared architectural case-study lightbox with keyboard navigation & BOQ handoff.
 */
export default function ProjectLightbox({ items = [], activeItem, onSelect, onClose }) {
  const currentIdx = activeItem ? items.findIndex((i) => i.id === activeItem.id) : -1;
  const hasMultiple = items.length > 1 && currentIdx >= 0;

  const goPrev = () => {
    if (!hasMultiple) return;
    onSelect(items[(currentIdx - 1 + items.length) % items.length]);
  };

  const goNext = () => {
    if (!hasMultiple) return;
    onSelect(items[(currentIdx + 1) % items.length]);
  };

  useEffect(() => {
    if (!activeItem) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeItem, currentIdx, items.length]);

  if (!activeItem) return null;

  const handleWhatsApp = () => {
    const text = `Hi Pristine Decore! I saw "${activeItem.title}" (${activeItem.venue}) on pristinedecore.com and would like to consult on a similar project.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn no-print"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.title}
    >
      <div
        className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Counter & Close Controls */}
        <div className="absolute top-3.5 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          {hasMultiple ? (
            <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-xs font-mono font-bold text-amber-300 border border-amber-400/30 pointer-events-auto">
              {currentIdx + 1} / {items.length}
            </span>
          ) : <span />}
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/70 text-white hover:bg-amber-600 flex items-center justify-center transition-colors pointer-events-auto"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-Resolution Stage with Prev/Next Arrows */}
        <div className="relative aspect-[16/10] bg-black shrink-0 flex items-center justify-center group">
          <SafeImage
            src={activeItem.image}
            alt={activeItem.title}
            className="w-full h-full object-contain"
            loading="eager"
          />

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 hover:bg-amber-600 text-white flex items-center justify-center transition-all border border-white/15"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 hover:bg-amber-600 text-white flex items-center justify-center transition-all border border-white/15"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Case Study Details Footer */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-t border-slate-800 overflow-y-auto">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                {activeItem.category}
              </span>
              <span className="text-[11px] font-mono text-slate-300">{activeItem.stats}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
              {activeItem.title}
            </h3>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{activeItem.venue}</span>
            </p>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed pt-0.5">
              {activeItem.description}
            </p>
            {(activeItem.tags || []).length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeItem.tags.map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    ✦ {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0">
            <Link
              to={buildQuoteLinkFromItem(activeItem)}
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-amber-50 text-xs font-bold transition-all whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-600" />
              <span>Estimate Similar BOQ</span>
            </Link>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-soft-gold whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              <span>Consult on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
