/**
 * Centralized Contact & Brand Configuration for Pristine Decore
 * Luxury Construction & Bespoke Interior Design Atelier
 */

export const CONTACT_CONFIG = {
  domain: "pristinedecore.com",
  siteUrl: "https://pristinedecore.com",
  brandName: "Pristine Decore",
  brandTagline: "Luxury Construction & Bespoke Interior Design",
  
  // Official Studio Communications
  email: "info@pristinedecore.com",
  supportEmail: "projects@pristinedecore.com",
  
  // Central Studio WhatsApp Hotline (Leave blank or add official business number)
  defaultWhatsAppNumber: "",
  
  // Direct Studio Desks
  desks: {
    civil: {
      name: "Turnkey Civil & Structural Desk",
      role: "RCC Construction, Villa Engineering & Site Supervision",
      phoneDisplay: "+91 Civil Engineering Desk",
      whatsAppNumber: "",
      email: "construction@pristinedecore.com"
    },
    interior: {
      name: "Architectural & Interior Design Desk",
      role: "Concept 3D Visualization, Space Planning & Material Curation",
      phoneDisplay: "+91 Studio Architecture Desk",
      whatsAppNumber: "",
      email: "design@pristinedecore.com"
    },
    commercial: {
      name: "Commercial Fitouts & BOQ Desk",
      role: "Corporate Offices, Retail Showrooms & Fixed-Price Quotes",
      phoneDisplay: "+91 Commercial Projects Desk",
      whatsAppNumber: "",
      email: "commercial@pristinedecore.com"
    },
    architecture: {
      name: "Architectural & Interior Design Desk",
      role: "Concept 3D Visualization, Space Planning & Material Curation",
      phoneDisplay: "+91 Studio Architecture Desk",
      whatsAppNumber: "",
      email: "design@pristinedecore.com"
    },
    construction: {
      name: "Turnkey Civil & Structural Desk",
      role: "RCC Construction, Villa Engineering & Site Supervision",
      phoneDisplay: "+91 Civil Engineering Desk",
      whatsAppNumber: "",
      email: "construction@pristinedecore.com"
    }
  },

  // Emergency & Priority Project Hotline
  emergencyPhoneDisplay: "+91 24/7 Site Inspection Desk",

  // Studio Address
  studioAddress: "Atelier Suite 402, Signature Towers, Prime Business District",
  operatingHours: "Monday – Saturday: 9:00 AM – 7:30 PM (Site Operations 24/7)",

  // Helper function to build pre-filled WhatsApp URLs
  getWhatsAppUrl: (message, targetNumber = null) => {
    const phone = targetNumber || CONTACT_CONFIG.defaultWhatsAppNumber;
    const encoded = encodeURIComponent(message);
    if (phone && phone.trim()) {
      return `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encoded}`;
    }
    return `https://wa.me/?text=${encoded}`;
  }
};
