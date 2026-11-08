import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventBuilder from './components/EventBuilder';
import GallerySection from './components/GallerySection';
import ManpowerSection from './components/ManpowerSection';
import ProductionDecorSection from './components/ProductionDecorSection';
import BespokeConcierge from './components/BespokeConcierge';
import MallExcellence from './components/MallExcellence';
import EstimatorTool from './components/EstimatorTool';
import FoundersSection from './components/FoundersSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

export default function App() {
  const scrollToBuilder = () => {
    const el = document.getElementById('builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-800 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Sticky Header */}
      <Navbar 
        onOpenConfigurator={scrollToBuilder} 
        onOpenContact={scrollToContact} 
      />

      <main className="flex-grow">
        {/* Hero Section with Live Marquee */}
        <Hero onOpenConfigurator={scrollToBuilder} />

        {/* Interactive Event Builder & Instant Quote */}
        <EventBuilder />

        {/* Visual Showcase Gallery (TASK-008) */}
        <GallerySection onSelectLook={scrollToBuilder} />

        {/* Event Manpower Specialization */}
        <ManpowerSection onSelectForQuote={scrollToBuilder} />

        {/* Custom Production, Banners & Signboards */}
        <ProductionDecorSection />

        {/* "Whatever You Need, We Deliver" Bespoke Concierge */}
        <BespokeConcierge />

        {/* Mall Operations Mastery & SOP */}
        <MallExcellence />

        {/* Interactive Estimator Tool */}
        <EstimatorTool />

        {/* Founders Spotlight: Syed Inam, Razak Ahmed Khan, Syed Haamed Ali */}
        <FoundersSection />

        {/* Testimonials & Mall FAQs */}
        <TestimonialsSection />

        {/* Contact & Direct Booking Desk */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Quick Action Widget */}
      <FloatingWidget onOpenConfigurator={scrollToBuilder} />
    </div>
  );
}
