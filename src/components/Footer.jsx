import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { 
  Sparkles, 
  Send, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUp,
  Building2,
  HardHat,
  Palette,
  Compass
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/">
              <Logo size="md" variant="light" showTagline={true} />
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Premier luxury interior architecture atelier and turnkey design studio with 18+ years of registered mastery. Specializing in bespoke living suites, Italian modular kitchens, master walk-in closets, educational smart classrooms, and commercial fitouts backed by fixed-price BOQs and 10-year structural warranties.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <div className="text-amber-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Statutory &amp; Engineering Certifications:</span>
              </div>
              <div className="text-slate-300 font-medium">18+ Years Registered • GSTIN: <span className="font-mono text-amber-300">{CONTACT_CONFIG.gstin}</span></div>
              <div className="text-slate-400 text-[11px] leading-relaxed">
                Registered Office: {CONTACT_CONFIG.studioAddress}
              </div>
              <div className="pt-1">
                <a href="tel:+919845302888" className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Studio Desk: +91 98453 02888</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interior Architecture (Main Forte) */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-amber-500" />
              <span>Luxury Interiors</span>
            </h4>
            <ul className="space-y-2">
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Living &amp; Penthouse Suites</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Modular European Kitchens</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Master Walk-In Closets</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Italian Marble Flooring</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Smart Classrooms &amp; Labs</Link></li>
              <li><Link to="/bespoke" className="hover:text-amber-400 transition-colors">Bespoke Millwork &amp; Stone</Link></li>
            </ul>
          </div>

          {/* Turnkey Civil & Campus Construction */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
              <HardHat className="w-3.5 h-3.5 text-amber-500" />
              <span>Civil &amp; Campus</span>
            </h4>
            <ul className="space-y-2">
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Luxury Villa Construction</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">School &amp; University Campuses</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Commercial Complexes</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Structural Renovation</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Foundation &amp; Piling Works</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Exterior Hardscaping &amp; Plazas</Link></li>
            </ul>
          </div>

          {/* Studio Direct Access */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-500" />
              <span>Studio Desks</span>
            </h4>
            <ul className="space-y-2">
              <li><Link to="/quote" className="text-amber-400 font-semibold hover:underline">Cost Estimator & BOQ</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Portfolio Showcase</Link></li>
              <li><Link to="/mall-operations" className="hover:text-amber-400 transition-colors">Commercial Fitout Standards</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Studio Story & Quality</Link></li>
              <li><Link to="/bespoke" className="hover:text-amber-400 transition-colors">Bespoke Materials Concierge</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Consult Architectural Desk</Link></li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Pristine Decore</strong> ({CONTACT_CONFIG.domain}). 18+ Years Registered • GSTIN: <span className="font-mono text-slate-300">{CONTACT_CONFIG.gstin}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Bengaluru, Karnataka 560032</span>
            <span>•</span>
            <span>10-Yr Structural Warranty</span>
            <span>•</span>
            <span>Fixed-Price BOQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
