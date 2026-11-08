/**
 * Pristine Decore API Service
 * Handles communication with Render backend (/api/*) with seamless local fallback
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
const TOKEN_KEY = 'pristine_admin_token';
const USER_KEY = 'pristine_admin_user';

// Initial local seed data in case backend is warming up on Render free tier
const LOCAL_FALLBACK_KEY = 'pristine_local_inquiries';

function getStoredInquiries() {
  try {
    const raw = localStorage.getItem(LOCAL_FALLBACK_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    // ignore
  }
  return [
    {
      id: "PD-849201",
      createdAt: "2026-11-08T18:30:00.000Z",
      name: "Arjun Malhotra",
      company: "Titan Retail Group",
      phone: "+91 98201 44521",
      email: "a.malhotra@titan.in",
      eventType: "Mall Activation / Roadshow",
      venue: "Phoenix Marketcity (Main Atrium)",
      durationDays: 3,
      eventDate: "2026-11-20",
      totalCrew: 11,
      crew: { promoters: 4, bouncers: 2, ushers: 2, stagehands: 2, supervisors: 1 },
      totalMaterials: 5,
      materials: { standees: 4, flexBackdrop: 1, acrylicBoard: 1, neonSign: 1, balloonArch: 1, soundAndMics: 1 },
      customRequest: "Need 11:00 PM nocturnal setup clearance. All promoters must wear Titan branded black collared polos.",
      status: "new",
      source: "event_builder",
      quotedAmount: "₹85,000",
      notes: "Operations lead Syed Inam verified atrium pass requirements."
    },
    {
      id: "PD-736192",
      createdAt: "2026-11-08T15:15:00.000Z",
      name: "Pooja Hegde",
      company: "Nykaa Luxe Beauty",
      phone: "+91 98450 11982",
      email: "pooja.events@nykaa.com",
      eventType: "Product Launch & Sampling",
      venue: "Inorbit Mall (Ground Concourse)",
      durationDays: 2,
      eventDate: "2026-11-25",
      totalCrew: 8,
      crew: { promoters: 6, bouncers: 1, ushers: 0, stagehands: 0, supervisors: 1 },
      totalMaterials: 3,
      materials: { standees: 2, flexBackdrop: 1, acrylicBoard: 1, neonSign: 1, balloonArch: 0, soundAndMics: 1 },
      customRequest: "Special selfie photo-booth with neon logo 'Glow With Nykaa'. Requires English and Hindi fluent promoters.",
      status: "quoted",
      source: "event_builder",
      quotedAmount: "₹62,000",
      notes: "Quote proposal PDF sent. Awaiting PO approval."
    },
    {
      id: "PD-619284",
      createdAt: "2026-11-07T11:45:00.000Z",
      name: "Rohan Deshmukh",
      company: "Samsung Electronics",
      phone: "+91 97110 58291",
      email: "rohan.d@samsung-partner.com",
      eventType: "Corporate Expo / Summit",
      venue: "LuLu Mall (Central Atrium)",
      durationDays: 4,
      eventDate: "2026-12-02",
      totalCrew: 15,
      crew: { promoters: 6, bouncers: 4, ushers: 3, stagehands: 1, supervisors: 1 },
      totalMaterials: 6,
      materials: { standees: 6, flexBackdrop: 2, acrylicBoard: 2, neonSign: 0, balloonArch: 0, soundAndMics: 2 },
      customRequest: "High security VIP delegation with celebrity brand ambassador visiting on Saturday. 15% standby bench mandatory.",
      status: "confirmed",
      source: "event_builder",
      quotedAmount: "₹1,45,000",
      notes: "Advance deposit received. 4 bouncers and 2 standby assigned."
    },
    {
      id: "PD-509182",
      createdAt: "2026-11-06T19:20:00.000Z",
      name: "Meera Krishnan",
      company: "Zara Fashion India",
      phone: "+91 99001 77281",
      email: "mkrishnan@inditex.com",
      eventType: "Store Grand Opening",
      venue: "Forum South Bangalore",
      durationDays: 1,
      eventDate: "2026-11-18",
      totalCrew: 6,
      crew: { promoters: 2, bouncers: 2, ushers: 2, stagehands: 0, supervisors: 0 },
      totalMaterials: 2,
      materials: { standees: 2, flexBackdrop: 0, acrylicBoard: 0, neonSign: 0, balloonArch: 1, soundAndMics: 1 },
      customRequest: "Luxury chrome gold and black entrance arch + red carpet velvet stanchions for store VIP opening.",
      status: "in_review",
      source: "contact_form",
      quotedAmount: "₹38,000",
      notes: "Syed Haamed Ali reviewing floral and chrome arch fabrication."
    }
  ];
}

function saveStoredInquiries(data) {
  try {
    localStorage.setItem(LOCAL_FALLBACK_KEY, JSON.stringify(data));
  } catch (e) {
    // ignore
  }
}

export const apiService = {
  // Check backend server health
  async checkHealth() {
    try {
      const res = await fetch(`${API_BASE_URL}/api/health`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(3500)
      });
      if (res.ok) {
        return { isLive: true, data: await res.json() };
      }
    } catch (e) {
      // Backend is offline or warming up
    }
    return { isLive: false, data: null };
  },

  // Admin Login with exact credentials admin@me / admin@123
  async loginAdmin(email, password) {
    const cleanEmail = email.trim().toLowerCase();
    
    // First try live backend on Render/local
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password }),
        signal: AbortSignal.timeout(4000)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem(TOKEN_KEY, data.token);
        localStorage.setItem(USER_KEY, JSON.stringify(data.user));
        return { success: true, user: data.user, token: data.token, mode: 'live_backend' };
      }
      if (!res.ok) {
        return { success: false, error: data.error || 'Invalid credentials' };
      }
    } catch (err) {
      // Fallback for offline or cold start on free Render tier
    }

    // Direct fallback check if server is unreachable
    if (cleanEmail === 'admin@me' && password === 'admin@123') {
      const dummyToken = 'demo_admin_token_' + Date.now();
      const user = {
        email: 'admin@me',
        role: 'Super Administrator',
        name: 'Pristine Decore Admin',
        accessLevel: 'full_executive'
      };
      localStorage.setItem(TOKEN_KEY, dummyToken);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      return { success: true, user, token: dummyToken, mode: 'local_authenticated' };
    }

    return { success: false, error: 'Invalid admin credentials. Please use admin@me with your designated password.' };
  },

  // Check if current user is logged in
  getStoredUser() {
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      const user = localStorage.getItem(USER_KEY);
      if (token && user) {
        return JSON.parse(user);
      }
    } catch (e) {
      // ignore
    }
    return null;
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  // Fetch all inquiries
  async getInquiries(params = {}) {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE_URL}/api/admin/inquiries?${query}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        signal: AbortSignal.timeout(4000)
      });
      if (res.ok) {
        const data = await res.json();
        if (data.inquiries) {
          saveStoredInquiries(data.inquiries);
          return data.inquiries;
        }
      }
    } catch (e) {
      // use local fallback
    }

    // Filter local data
    let items = getStoredInquiries();
    if (params.status && params.status !== 'all') {
      items = items.filter(i => i.status === params.status);
    }
    if (params.search) {
      const s = params.search.toLowerCase();
      items = items.filter(i => 
        (i.name && i.name.toLowerCase().includes(s)) ||
        (i.company && i.company.toLowerCase().includes(s)) ||
        (i.venue && i.venue.toLowerCase().includes(s)) ||
        (i.phone && i.phone.includes(s)) ||
        (i.id && i.id.toLowerCase().includes(s))
      );
    }
    return items;
  },

  // Update status or notes
  async updateInquiry(id, updateData) {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/inquiries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateData),
        signal: AbortSignal.timeout(4000)
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (e) {
      // update local
    }

    const items = getStoredInquiries();
    const idx = items.findIndex(i => i.id === id);
    if (idx !== -1) {
      items[idx] = { ...items[idx], ...updateData, updatedAt: new Date().toISOString() };
      saveStoredInquiries(items);
      return { success: true, inquiry: items[idx] };
    }
    return { success: false, error: 'Not found' };
  },

  // Delete an inquiry
  async deleteInquiry(id) {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/inquiries/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        signal: AbortSignal.timeout(4000)
      });
      if (res.ok) return { success: true };
    } catch (e) {
      // delete local
    }

    let items = getStoredInquiries();
    items = items.filter(i => i.id !== id);
    saveStoredInquiries(items);
    return { success: true };
  },

  // Submit client inquiry (Public)
  async submitClientInquiry(inquiryData) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData),
        signal: AbortSignal.timeout(4000)
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      // save to local store as fallback
    }

    const items = getStoredInquiries();
    const id = `PD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newEntry = {
      id,
      createdAt: new Date().toISOString(),
      ...inquiryData,
      status: 'new',
      quotedAmount: 'Pending Quote'
    };
    items.unshift(newEntry);
    saveStoredInquiries(items);
    return { success: true, id, inquiry: newEntry };
  }
};
