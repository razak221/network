import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { 
  Camera, 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Check, 
  ExternalLink,
  Layers,
  Compass,
  Search,
  X,
  Maximize2,
  ChevronDown
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

const ITEMS_PER_PAGE = 18;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [lightboxItem, setLightboxItem] = useState(null);

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts = { all: galleryItems.length };
    galleryItems.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(q);
      const inVenue = item.venue.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inTags = (item.tags || []).some(t => t.toLowerCase().includes(q));

      return inTitle || inVenue || inDesc || inTags;
    });
  }, [activeCategory, searchQuery]);

  // Reset pagination when category or search changes
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredItems.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredItems.length);
  };

  const handleInquireProject = (projectTitle) => {
    const text = `Hi Pristine Decore! I saw the showcase project "${projectTitle}" on your website and would like to consult on a similar architectural / interior project.`;
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Visual Portfolio &amp; Showcase</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Turnkey Project Architecture &amp; Interiors • {galleryItems.length}+ Real Works</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Our Architectural <span className="text-gradient-gold">Showcase Portfolio</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Over {galleryItems.length}+ real spaces constructed and delivered across private luxury villas, schools, colleges, university campuses, master penthouses, modular kitchens, and corporate headquarters.
          </p>

          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by material, institution, room or city (e.g. University, School, Lab, Marble, Villa)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all shadow-soft-sm placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills with Item Counts */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {galleryCategories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? 'bg-amber-600 text-white shadow-soft-gold scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50'
                  }`}
                >
                  <span>{cat.label.replace(' (100+)', '')}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.id ? 'bg-amber-700/60 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Status Counter */}
          <div className="pt-2 text-xs font-semibold text-slate-500">
            Showing <span className="font-bold text-slate-900">{visibleItems.length}</span> of{' '}
            <span className="font-bold text-slate-900">{filteredItems.length}</span> matching projects
            {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
          </div>
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-soft-sm max-w-lg mx-auto p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Projects Found</h3>
            <p className="text-xs text-slate-600">
              No architectural projects match your filter &ldquo;{searchQuery}&rdquo;. Try another material or category.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Luxury Overlay & Lightbox Click */}
                  <div
                    onClick={() => setLightboxItem(item)}
                    className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-zoom-in"
                    title="Click to view full resolution"
                  >
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

                    {/* Expand icon on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="w-8 h-8 rounded-full bg-slate-900/70 backdrop-blur-md text-white flex items-center justify-center shadow-md">
                        <Maximize2 className="w-4 h-4" />
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
                    
                    {/* Item Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {(item.tags || []).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 pt-1">
                      {item.description}
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
                    Estimate BOQ
                  </Link>
                  <button
                    onClick={() => handleInquireProject(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 group"
                  >
                    <span>Inquire Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Progressive Load More Actions */}
        {hasMore && (
          <div className="mt-16 text-center space-y-3">
            <div className="inline-flex items-center gap-3">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-soft-gold hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <span>Load More Projects (+{Math.min(ITEMS_PER_PAGE, filteredItems.length - visibleCount)})</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={handleShowAll}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-sm shadow-soft-sm hover:scale-105 active:scale-95 transition-all"
              >
                Show All ({filteredItems.length})
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Showing {visibleItems.length} of {filteredItems.length} curated architectural projects
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Full Resolution Preview */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  {lightboxItem.category.toUpperCase()}
                </span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-1">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{lightboxItem.venue} • {lightboxItem.stats}</span>
                </p>
              </div>

              <button
                onClick={() => handleInquireProject(lightboxItem.title)}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-soft-gold whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>Consult on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
