import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import QuoteBuilderPage from './pages/QuoteBuilderPage';
import ManpowerPage from './pages/ManpowerPage';
import ProductionPage from './pages/ProductionPage';
import MallOperationsPage from './pages/MallOperationsPage';
import GalleryPage from './pages/GalleryPage';
import BespokePage from './pages/BespokePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration on page transition */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#FAF9F5] text-slate-800 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
        {/* Sticky Header with Multi-Page Navigation */}
        <Navbar />

        {/* Dynamic Route Container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quote" element={<QuoteBuilderPage />} />
            <Route path="/builder" element={<QuoteBuilderPage />} />
            <Route path="/manpower" element={<ManpowerPage />} />
            <Route path="/production" element={<ProductionPage />} />
            <Route path="/mall-operations" element={<MallOperationsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/bespoke" element={<BespokePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Luxury Footer */}
        <Footer />

        {/* Floating Quick Action Widget */}
        <FloatingWidget />
      </div>
    </BrowserRouter>
  );
}
