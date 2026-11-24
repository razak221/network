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
  email: "decorepristine@gmail.com",
  supportEmail: "decorepristine@gmail.com",
  
  // Official Phone & WhatsApp Hotline
  phone: "+91 98453 02888",
  phoneRaw: "9845302888",
  defaultWhatsAppNumber: "919845302888",
  phoneDisplay: "+91 98453 02888",
  emergencyPhoneDisplay: "+91 98453 02888",
  
  // Direct Studio Desks
  desks: {
    civil: {
      name: "Turnkey Civil & Structural Desk",
      role: "RCC Construction, Villa Engineering & Site Supervision",
      phoneDisplay: "+91 98453 02888",
      phone: "+91 98453 02888",
      whatsAppNumber: "919845302888",
      email: "decorepristine@gmail.com"
    },
    interior: {
      name: "Architectural & Interior Design Desk",
      role: "Concept 3D Visualization, Space Planning & Material Curation",
      phoneDisplay: "+91 98453 02888",
      phone: "+91 98453 02888",
      whatsAppNumber: "919845302888",
      email: "decorepristine@gmail.com"
    },
    commercial: {
      name: "Commercial Fitouts & BOQ Desk",
      role: "Corporate Offices, Retail Showrooms & Fixed-Price Quotes",
      phoneDisplay: "+91 98453 02888",
      phone: "+91 98453 02888",
      whatsAppNumber: "919845302888",
      email: "decorepristine@gmail.com"
    },
    architecture: {
      name: "Architectural & Interior Design Desk",
      role: "Concept 3D Visualization, Space Planning & Material Curation",
      phoneDisplay: "+91 98453 02888",
      phone: "+91 98453 02888",
      whatsAppNumber: "919845302888",
      email: "decorepristine@gmail.com"
    },
    construction: {
      name: "Turnkey Civil & Structural Desk",
      role: "RCC Construction, Villa Engineering & Site Supervision",
      phoneDisplay: "+91 98453 02888",
      phone: "+91 98453 02888",
      whatsAppNumber: "919845302888",
      email: "decorepristine@gmail.com"
    }
  },

  // Statutory Registrations & Credentials
  gstin: "29CPQPK9806M2ZU",
  registrationYears: "18+ Years Registered",
  experienceYears: "18+ Years",
  establishedYear: "2008",

  // Official Registered Studio Address
  studioAddress: "No. 9SP 25, 2nd Stage, HBR Layout, Kadugondanahalli, C.I. Ramaiah Layout, RT Nagar Post, Bengaluru, Karnataka 560032",
  shortAddress: "No. 9SP 25, 2nd Stage, HBR Layout, Bengaluru 560032",
  city: "Bengaluru",
  state: "Karnataka",
  pincode: "560032",
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
