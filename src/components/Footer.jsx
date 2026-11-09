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
  Heart
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
              Your single-window partner for high-caliber event manpower (promoters, bouncers, ushers, setup crew) and custom on-demand production (banners, signboards, theme decor, sound & lighting).
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <div className="text-amber-400 font-semibold">Founding Team:</div>
              <div className="text-white font-medium">Syed Inam • Razak Ahmed Khan • Syed Haamid Ali</div>
            </div>
          </div>

          {/* Manpower Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Event Manpower
            </h4>
            <ul className="space-y-2">
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Mall Promoters & Models</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Bouncers & Security Marshals</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Hospitality Ushers & Hosts</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Nocturnal Mall Setup Crew</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">On-Site Floor Supervisors</Link></li>
              <li><Link to="/manpower" className="hover:text-amber-400 transition-colors">Audio-Visual Technicians</Link></li>
            </ul>
          </div>

          {/* Production & Decor */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Production & Decor
            </h4>
            <ul className="space-y-2">
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Roll-Up Pull Standees</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Custom Flex Backdrops</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">3D Acrylic & Glow Signs</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Custom Neon Flex Boards</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Thematic Entrance Arches</Link></li>
              <li><Link to="/production" className="hover:text-amber-400 transition-colors">Staging, Sound & Lighting</Link></li>
            </ul>
          </div>

          {/* Quick Actions & Domains */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Direct Access
            </h4>
            <ul className="space-y-2">
              <li><Link to="/quote" className="text-amber-400 font-semibold hover:underline">Instant Event Quote</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Showcase Portfolio</Link></li>
              <li><Link to="/mall-operations" className="hover:text-amber-400 transition-colors">Mall Operations SOP</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Meet the Leadership</Link></li>
              <li><Link to="/bespoke" className="hover:text-amber-400 transition-colors">Custom Bespoke Requests</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Direct WhatsApp Hotline</Link></li>
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
            <span>Specialists in Mall Events & Workforce Solutions</span>
            <span>•</span>
            <span>Designed for Flawless Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
