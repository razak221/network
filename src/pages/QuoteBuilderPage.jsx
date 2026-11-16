import React from 'react';
import { Link } from 'react-router-dom';
import EventBuilder from '../components/EventBuilder';
import { 
  Sparkles, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  FileCheck2, 
  FileText,
  CreditCard,
  Building2,
  HardHat,
  Palette,
  Compass
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
          <span className="text-amber-800 font-semibold">Cost Estimator & BOQ Studio</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-soft-sm">
            <CalculatorIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>Real-Time Turnkey Cost Configurator</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Construction & Interior <span className="text-gradient-gold">Cost Estimator Studio</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Configure your exact property built-up area, finish tier, civil scope, modular kitchen, and smart-home features. Watch your architectural space blueprint update in real-time, then dispatch a formatted brief directly to our architectural desk or export an official printable BOQ proposal.
          </p>
        </div>
      </div>

      {/* Embedded Estimator Studio */}
      <EventBuilder hideHeader={true} />

      {/* Engineering & Quality Guarantees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-luxury">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">10-Year Structural Warranty</h4>
                <p className="text-slate-500 text-xs mt-1">Full civil RCC engineering warranty with certified material testing.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">Fixed-Price BOQ Guarantee</h4>
                <p className="text-slate-500 text-xs mt-1">Zero hidden cost escalations or mid-project budget inflation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">Full-Time Site Engineers</h4>
                <p className="text-slate-500 text-xs mt-1">Dedicated senior civil supervisor on-site every single day.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">GST Milestone Billing</h4>
                <p className="text-slate-500 text-xs mt-1">Escrow milestone-based disbursements linked to inspected work stages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalculatorIcon(props) {
  return <Compass {...props} />;
}
