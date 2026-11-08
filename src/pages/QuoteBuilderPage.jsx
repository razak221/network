import React from 'react';
import { Link } from 'react-router-dom';
import EventBuilder from '../components/EventBuilder';
import { 
  Sparkles, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  FileText,
  CreditCard,
  Building2,
  Users
} from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function QuoteBuilderPage() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-10 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Instant Quote Studio</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>2-Minute Real-Time Event Configurator</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Event Manpower & <span className="text-gradient-gold">Production Studio</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Configure your exact workforce headcount, stage trusses, roll-up banners, and 3D glow signs. Watch your stage blueprint update in real-time, then dispatch a formatted brief directly to our founders or export an official printable B2B proposal.
          </p>
        </div>
      </div>

      {/* Embedded EventBuilder Studio */}
      <EventBuilder />

      {/* Commercial & Operational Guarantees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">100% Mall Pass Clearance</h4>
                <p className="text-slate-500 text-xs mt-1">Full documentation, insurance & ID submission handled 48h prior.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">15% Standby Bench</h4>
                <p className="text-slate-500 text-xs mt-1">Pre-briefed backup staff stationed on standby at nearby transit hubs.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">11 PM – 8 AM Setup</h4>
                <p className="text-slate-500 text-xs mt-1">Zero daytime noise disruption; flawless morning mall handover.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">GST Compliant Billing</h4>
                <p className="text-slate-500 text-xs mt-1">Formal tax invoices, purchase orders & vendor registration accepted.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

