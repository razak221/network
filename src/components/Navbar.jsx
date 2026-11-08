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
    const text = encodeURIComponent("Hello Pristine Decore! I would like to inquire about event manpower and custom production supplies for an upcoming event.");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-4 py-1.5 text-xs font-semibold text-center tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-slate-950 animate-pulse"></span>
        <span>MALL ACTIVATIONS & CORPORATE EVENTS SPECIALISTS — 24/7 RAPID DEPLOYMENT DESK</span>
        <span className="hidden sm:inline opacity-80">| Founders Direct: Syed Inam, Razak Ahmed Khan, Syed Haamed Ali</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-heading text-xl tracking-tighter">PD</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  PRISTINE<span className="text-amber-400">DECORE</span>
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                  pristinedecore.com
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
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
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  link.highlight
                    ? "bg-amber-400/10 text-amber-400 hover:bg-amber-400/20 border border-amber-400/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
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
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 flex items-center gap-1.5 transition-all shadow-sm"
              title="Chat with Founders on WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </button>

            <button
              onClick={onOpenConfigurator}
              className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConfigurator}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 sm:hidden"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1322] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-amber-400"
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
              className="w-full py-2.5 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>WhatsApp Direct to Founders</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfigurator();
              }}
              className="w-full py-2.5 rounded-xl text-sm font-bold bg-amber-400 text-slate-950 flex items-center justify-center gap-2"
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
