import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { Analytics } from '@vercel/analytics/react';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import QuoteBuilderPage from './pages/QuoteBuilderPage';
import ManpowerPage from './pages/ManpowerPage';
import ProductionPage from './pages/ProductionPage';
import MallOperationsPage from './pages/MallOperationsPage';
import GalleryPage from './pages/GalleryPage';
import BespokePage from './pages/BespokePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminBossPage from './pages/AdminBossPage';

const ROUTE_SEO = {
  '/': {
    title: 'Pristine Decore | Turnkey Civil Construction & Luxury Interior Architecture',
    description: 'Pristine Decore (pristinedecore.com) - Premier atelier for turnkey civil construction, bespoke residential villas, luxury interior architecture, Italian modular kitchens, and corporate commercial fitouts with 10-year structural warranty.'
  },
  '/landing': {
    title: 'Pristine Decore | Flagship Luxury Architecture & Turnkey Design Atelier',
    description: 'Bespoke luxury interior architecture, Italian modular kitchens, master dressing suites, educational campuses, and turnkey civil construction with 10-year structural warranty.'
  },
  '/vip': {
    title: 'VIP Architectural Consultation & Site Audit | Pristine Decore',
    description: 'Book private architectural consultation and on-site laser inspection with senior civil and interior architects from Pristine Decore.'
  },
  '/quote': {
    title: 'Cost Estimator & BOQ Studio | Pristine Decore',
    description: 'Calculate civil construction and interior design budgets by sq.ft, finish tier, and architectural scope with transparent itemized BOQ breakdowns.'
  },
  '/builder': {
    title: 'Cost Estimator & BOQ Studio | Pristine Decore',
    description: 'Calculate civil construction and interior design budgets by sq.ft, finish tier, and architectural scope with transparent itemized BOQ breakdowns.'
  },
  '/manpower': {
    title: 'Turnkey Civil Construction & Architecture | Pristine Decore',
    description: 'Certified civil construction, seismic-compliant RCC framing, structural engineering, foundation piling, and complete MEP coordination with 10-year warranty.'
  },
  '/production': {
    title: 'Luxury Interior Architecture & Custom Joinery | Pristine Decore',
    description: 'Bespoke residential and commercial interior architecture: Italian marble flooring, Blum-hardware modular kitchens, fluted wood wall panelling, and false ceilings.'
  },
  '/mall-operations': {
    title: 'Commercial Fitouts & Engineering Standards | Pristine Decore',
    description: 'Turnkey corporate office fitouts, luxury retail boutiques, acoustic drywall partitioning, central HVAC, and building authority compliance.'
  },
  '/gallery': {
    title: 'Architecture & Interior Design Portfolio | Pristine Decore',
    description: 'Explore completed luxury villas, penthouse interiors, designer modular kitchens, and prestige corporate office fitouts by Pristine Decore.'
  },
  '/bespoke': {
    title: 'Bespoke Joinery & Rare Materials Concierge | Pristine Decore',
    description: 'Source exotic bookmatched Italian marble, custom brass hardware, solid teakwood architectural millwork, and automated smart-home glass.'
  },
  '/about': {
    title: 'About The Studio & Architectural Governance | Pristine Decore',
    description: 'Learn about Pristine Decore studio disciplines, 10-year structural engineering warranties, transparent fixed-price BOQs, and master craftsmanship.'
  },
  '/contact': {
    title: 'Studio Consultation & Site Booking Desk | Pristine Decore',
    description: 'Book an architectural consultation or schedule a site measurement inspection with Pristine Decore civil engineering and interior design desks.'
  },
  '/adminboss': {
    title: 'Admin Command Portal | Pristine Decore',
    description: 'Secure management portal for Pristine Decore architectural inquiries and client project estimations.'
  }
};

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.toLowerCase().startsWith('/adminboss');

  React.useEffect(() => {
    const route = location.pathname.toLowerCase();
    const seo = ROUTE_SEO[route] || ROUTE_SEO['/'];
    document.title = seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://pristinedecore.com${location.pathname}`);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://pristinedecore.com${location.pathname}`);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-800 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Render public Navbar on consumer routes */}
      {!isAdminRoute && <Navbar />}

      {/* Main Multi-Page Dynamic Route View */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/vip" element={<LandingPage />} />
          <Route path="/quote" element={<QuoteBuilderPage />} />
          <Route path="/builder" element={<QuoteBuilderPage />} />
          <Route path="/manpower" element={<ManpowerPage />} />
          <Route path="/production" element={<ProductionPage />} />
          <Route path="/mall-operations" element={<MallOperationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Secret Private Admin Route */}
          <Route path="/adminboss" element={<AdminBossPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Render public Footer and Floating Quick Action on consumer routes */}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingWidget />}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
        <Analytics />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
