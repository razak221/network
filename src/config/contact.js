/**
 * Centralized Contact Configuration for Pristine Decore (pristinedecore.com)
 * Update phone numbers, WhatsApp numbers, and emails here to reflect across the entire site.
 */

export const CONTACT_CONFIG = {
  domain: "pristinedecore.com",
  siteUrl: "https://pristinedecore.com",
  brandName: "Pristine Decore",
  brandTagline: "Event Manpower & Custom Production",
  
  // Primary Business Channels
  email: "info@pristinedecore.com",
  supportEmail: "support@pristinedecore.com",
  
  // Default WhatsApp Dispatch Number (Country code + phone without '+' or spaces)
  // Example: "919876543210" or empty string "" for client selector
  defaultWhatsAppNumber: "", 
  
  // Emergency Desk Phone
  emergencyPhoneDisplay: "+91 24/7 Rapid Desk",
  
  // Founders Individual Contacts
  founders: {
    inam: {
      name: "Syed Inam",
      role: "Operations & Ground Execution",
      phoneDisplay: "Direct Operations Desk",
      whatsAppNumber: "", // Set personal WhatsApp if desired
      email: "inam@pristinedecore.com"
    },
    razak: {
      name: "Razak Ahmed Khan",
      role: "Client Relations & Business Strategy",
      phoneDisplay: "Direct Strategy Desk",
      whatsAppNumber: "", // Set personal WhatsApp if desired
      email: "razak@pristinedecore.com"
    },
    haamed: {
      name: "Syed Haamed Ali",
      role: "Creative Decor & Print Fabrication",
      phoneDisplay: "Direct Production Desk",
      whatsAppNumber: "", // Set personal WhatsApp if desired
      email: "haamed@pristinedecore.com"
    }
  },

  // Helper function to build a pre-filled WhatsApp URL
  getWhatsAppUrl: (message, targetNumber = null) => {
    const phone = targetNumber || CONTACT_CONFIG.defaultWhatsAppNumber;
    const encoded = encodeURIComponent(message);
    if (phone && phone.trim()) {
      return `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encoded}`;
    }
    return `https://wa.me/?text=${encoded}`;
  }
};
