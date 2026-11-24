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
              Premier architectural and civil engineering studio delivering turnkey residential villas, educational campus infrastructure (schools, colleges &amp; universities), bespoke luxury interiors, and commercial fitouts backed by transparent fixed-price BOQs and 10-year structural warranties.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <div className="text-amber-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Quality & Engineering Certifications:</span>
              </div>
              <div className="text-slate-300 font-medium">10-Year Structural Warranty • ISO Certified Processes • Transparent BOQ</div>
              <div className="pt-2">
                <a href="tel:+919845302888" className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Studio Desk: +91 98453 02888</span>
                </a>
              </div>
            </div>
          </div>

          {/* Civil Construction */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
              <HardHat className="w-3.5 h-3.5 text-amber-500" />
              <span>Civil Construction</span>
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

          {/* Interior Architecture */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-amber-500" />
              <span>Luxury Interiors</span>
            </h4>
            <ul className="space-y-2">
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Smart Classrooms &amp; Labs</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">University Auditoriums</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Modular European Kitchens</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Italian Marble Flooring</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Bespoke Millwork &amp; Closets</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Architectural False Ceilings</Link></li>
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
            © {new Date().getFullYear()} <strong className="text-white">Pristine Decore</strong> ({CONTACT_CONFIG.domain}). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Turnkey Civil Construction & Luxury Interior Architecture</span>
            <span>•</span>
            <span>Fixed-Price BOQ Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
