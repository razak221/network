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
    title: 'Pristine Decore | Luxury Event Manpower & Bespoke Production Architecture',
    description: 'Pristine Decore (pristinedecore.com) - The premier single-window event partner. Elite manpower for mall activations, turnkey custom fabrication, LED/neon signage, luxury decor & AV production. Co-founded by Syed Inam, Razak Ahmed Khan, and Syed Haamid Ali.'
  },
  '/quote': {
    title: 'Instant Quote Studio | Pristine Decore',
    description: 'Configure manpower headcount, physical banners, stage trusses, and 3D glow signs with real-time pricing and formal B2B proposal generation.'
  },
  '/builder': {
    title: 'Instant Quote Studio | Pristine Decore',
    description: 'Configure manpower headcount, physical banners, stage trusses, and 3D glow signs with real-time pricing and formal B2B proposal generation.'
  },
  '/manpower': {
    title: 'Event Manpower & Workforce Services | Pristine Decore',
    description: 'High-caliber event personnel: mall promoters, security marshals, hospitality ushers, setup crew, and on-site supervisors with 15% standby guarantee.'
  },
  '/production': {
    title: 'Event Production, Signage & Decor Fabrication | Pristine Decore',
    description: 'In-house workshop fabrication: 3D acrylic letters, neon glow signs, roll-up standees, stage backdrops, and nocturnal mall installation.'
  },
  '/mall-operations': {
    title: 'Mall Clearances & Nocturnal Operations | Pristine Decore',
    description: 'Zero-delay ground execution: security gate passes, work-at-height compliance, 11 PM to 8 AM quiet setups, and venue restoration.'
  },
  '/gallery': {
    title: 'Visual Showcase & Portfolio | Pristine Decore',
    description: 'Explore executed activations, atrium installations, brand roadshows, and bespoke event setups by Pristine Decore.'
  },
  '/bespoke': {
    title: 'Bespoke Event Wishlist & Custom Requests | Pristine Decore',
    description: 'Have a rare, unique, or last-minute requirement? Submit a custom event brief directly to co-founders for rapid feasibility review.'
  },
  '/about': {
    title: 'Leadership & Founders | Pristine Decore',
    description: 'Direct founder accountability. Meet co-founders Syed Inam, Razak Ahmed Khan, and Syed Haamid Ali steering operations, strategy, and fabrication.'
  },
  '/contact': {
    title: 'Contact Us & Direct Founders Hotline | Pristine Decore',
    description: 'Get in touch with Pristine Decore. 24/7 rapid response desk, direct WhatsApp founder hotline, and corporate inquiries.'
  },
  '/adminboss': {
    title: 'Admin Command Portal | Pristine Decore',
    description: 'Secure management portal for Pristine Decore operations.'
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
