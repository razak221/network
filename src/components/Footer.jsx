import React from 'react';
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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-soft-gold">
                <span className="font-heading text-lg">PD</span>
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-white">
                  PRISTINE<span className="text-amber-400">DECORE</span>
                </span>
                <span className="block text-[10px] text-amber-300 font-mono">{CONTACT_CONFIG.domain}</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your single-window partner for high-caliber event manpower (promoters, bouncers, ushers, setup crew) and custom on-demand production (banners, signboards, theme decor, sound & lighting).
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <div className="text-amber-400 font-semibold">Founding Team:</div>
              <div className="text-white font-medium">Syed Inam • Razak Ahmed Khan • Syed Haamed Ali</div>
            </div>
          </div>

          {/* Manpower Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Event Manpower
            </h4>
            <ul className="space-y-2">
              <li><a href="#manpower" className="hover:text-amber-400 transition-colors">Mall Promoters & Models</a></li>
              <li><a href="#manpower" className="hover:text-amber-400 transition-colors">Bouncers & Security Marshals</a></li>
              <li><a href="#manpower" className="hover:text-amber-400 transition-colors">Hospitality Ushers & Hosts</a></li>
              <li><a href="#manpower" className="hover:text-amber-400 transition-colors">Nocturnal Mall Setup Crew</a></li>
              <li><a href="#manpower" className="hover:text-amber-400 transition-colors">On-Site Floor Supervisors</a></li>
              <li><a href="#manpower" className="hover:text-amber-400 transition-colors">Audio-Visual Technicians</a></li>
            </ul>
          </div>

          {/* Production & Decor */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Production & Decor
            </h4>
            <ul className="space-y-2">
              <li><a href="#production" className="hover:text-amber-400 transition-colors">Roll-Up Pull Standees</a></li>
              <li><a href="#production" className="hover:text-amber-400 transition-colors">Custom Flex Backdrops</a></li>
              <li><a href="#production" className="hover:text-amber-400 transition-colors">3D Acrylic & Glow Signs</a></li>
              <li><a href="#production" className="hover:text-amber-400 transition-colors">Custom Neon Flex Boards</a></li>
              <li><a href="#production" className="hover:text-amber-400 transition-colors">Thematic Entrance Arches</a></li>
              <li><a href="#production" className="hover:text-amber-400 transition-colors">Staging, Sound & Lighting</a></li>
            </ul>
          </div>

          {/* Quick Actions & Domains */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Direct Access
            </h4>
            <ul className="space-y-2">
              <li><a href="#builder" className="text-amber-400 font-semibold hover:underline">Instant Event Quote</a></li>
              <li><a href="#mall-ops" className="hover:text-amber-400 transition-colors">Mall Operations SOP</a></li>
              <li><a href="#founders" className="hover:text-amber-400 transition-colors">Meet the Leadership</a></li>
              <li><a href="#bespoke" className="hover:text-amber-400 transition-colors">Custom Bespoke Requests</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Direct WhatsApp Hotline</a></li>
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
