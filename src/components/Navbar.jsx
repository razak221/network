import React, { useState } from 'react';
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

  const navLinks = [
    { label: "Build Event", href: "#builder", highlight: true },
    { label: "Manpower", href: "#manpower" },
    { label: "Decor & Production", href: "#production" },
    { label: "Mall Operations", href: "#mall-ops" },
    { label: "Founders", href: "#founders" },
    { label: "Custom Requests", href: "#bespoke" },
    { label: "Contact", href: "#contact" },
  ];

  const handleWhatsAppDirect = () => {
    const text = "Hello Pristine Decore! I would like to inquire about event manpower and custom production supplies for an upcoming event.";
    window.open(CONTACT_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      {/* Top Banner Alert (Soft Light Champagne) */}
      <div className="bg-amber-50 text-amber-900 border-b border-amber-200/50 px-4 py-1.5 text-xs font-semibold text-center tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
        <span>MALL ACTIVATIONS & CORPORATE EVENTS SPECIALISTS — 24/7 RAPID DEPLOYMENT DESK</span>
        <span className="hidden sm:inline opacity-70">| Founders Direct: Syed Inam, Razak Ahmed Khan, Syed Haamed Ali</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white font-black shadow-soft-gold group-hover:scale-105 transition-transform duration-200">
              <span className="font-heading text-xl tracking-tighter">PD</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                  PRISTINE<span className="text-amber-600">DECORE</span>
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  pristinedecore.com
                </span>
              </div>
              <p className="text-[11px] text-slate-500 tracking-wider uppercase font-medium">
                Event Manpower & Custom Production
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  link.highlight
                    ? "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsAppDirect}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 flex items-center gap-1.5 transition-all shadow-soft-sm"
              title="Chat with Founders on WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </button>

            <button
              onClick={onOpenConfigurator}
              className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white flex items-center gap-2 shadow-soft-gold hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConfigurator}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-white sm:hidden"
            >
              Quote
            </button>
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
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              {link.label}
            </a>
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfigurator();
              }}
              className="w-full py-2.5 rounded-xl text-sm font-bold bg-amber-500 text-white flex items-center justify-center gap-2 shadow-soft-gold"
            >
              <Sparkles className="w-4 h-4" />
              <span>Build Event & Get Instant Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
