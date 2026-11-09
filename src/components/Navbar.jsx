import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { 
  Users, 
  Sparkles, 
  PhoneCall, 
  Menu, 
  X, 
  ShieldCheck, 
  Send,
  Calendar,
  Layers
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function Navbar({ onOpenConfigurator, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isQuotePage = location.pathname.startsWith('/quote') || location.pathname.startsWith('/builder');

  const desktopNavLinks = [
    { label: "Showcase", to: "/gallery" },
    { label: "Manpower", to: "/manpower" },
    { label: "Production", to: "/production" },
    { label: "Mall Ops", to: "/mall-operations" },
    { label: "Founders", to: "/about" },
    { label: "Bespoke", to: "/bespoke" },
    { label: "Contact", to: "/contact" },
  ];

  const mobileNavLinks = [
    { label: "Home", to: "/" },
    { label: "Showcase", to: "/gallery" },
    { label: "Manpower", to: "/manpower" },
    { label: "Production & Decor", to: "/production" },
    { label: "Mall Operations", to: "/mall-operations" },
    { label: "About Founders", to: "/about" },
    { label: "Bespoke Wishlist", to: "/bespoke" },
    { label: "Contact", to: "/contact" },
  ];

  const handleWhatsAppDirect = () => {
    const text = "Hello Pristine Decore! I would like to inquire about event manpower and custom production supplies for an upcoming event.";
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  const handleLaunchQuote = () => {
    navigate('/quote');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      {/* Top Banner Alert (Soft Light Champagne) */}
      <div className="bg-amber-50 text-amber-900 border-b border-amber-200/50 px-4 py-1.5 text-xs font-semibold text-center tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
        <span>MALL ACTIVATIONS & CORPORATE EVENTS SPECIALISTS — 24/7 RAPID DEPLOYMENT DESK</span>
        <span className="hidden sm:inline opacity-70">| Founders Direct: Syed Inam, Razak Ahmed Khan, Syed Haamid Ali</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <Logo size="md" variant="dark" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 shrink-0">
            {desktopNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `px-2.5 2xl:px-3 py-1.5 2xl:py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-amber-100 text-amber-900 border border-amber-300 shadow-soft-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={handleWhatsAppDirect}
              className="px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 flex items-center gap-1.5 transition-all shadow-soft-sm whitespace-nowrap"
              title="Chat with Founders on WhatsApp"
            >
              <Send className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden 2xl:inline">WhatsApp Direct</span>
              <span className="2xl:hidden">WhatsApp</span>
            </button>

            {!isQuotePage && (
              <Link
                to="/quote"
                className="px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white flex items-center gap-1.5 shadow-soft-gold hover:scale-[1.02] transition-all whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 fill-white" />
                <span>Instant Quote</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/quote"
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-white sm:hidden"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn max-h-[85vh] overflow-y-auto">
          {mobileNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-amber-100 text-amber-900 border border-amber-300 font-bold"
                  : "text-slate-700 hover:bg-amber-50 hover:text-amber-700"
              }`}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppDirect();
              }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>WhatsApp Direct to Founders</span>
            </button>
            <Link
              to="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl text-sm font-bold bg-amber-500 text-white flex items-center justify-center gap-2 shadow-soft-gold"
            >
              <Sparkles className="w-4 h-4" />
              <span>Build Event & Get Instant Quote</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
