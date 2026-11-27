/**
 * Pristine Decore API Service
 * Handles communication with Render backend (/api/*) with seamless local fallback
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || (
  typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:5001'
    : 'https://network-m7pn.onrender.com'
);
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
      createdAt: "2026-11-20T11:30:00.000Z",
      name: "Arjun Malhotra",
      company: "Private Villa Residence",
      phone: "+91 98201 44521",
      email: "a.malhotra@malhotraholdings.in",
      eventType: "Turnkey Villa (Civil + Interior)",
      venue: "Sadashivanagar, Bengaluru",
      areaSqFt: 5400,
      durationDays: 240,
      eventDate: "2026-12-05",
      totalCrew: 18,
      crew: { promoters: 0, bouncers: 0, ushers: 0, stagehands: 0, supervisors: 2 },
      totalMaterials: 6,
      materials: {},
      customRequest: "Double-height bookmatched Italian Statuario marble living salon, German Blum Legrabox modular kitchen, and seismic RCC framing.",
      status: "new",
      source: "quote_builder",
      quotedAmount: "₹1.84 Cr",
      notes: "Civil engineering & interior architecture desks reviewing laser CAD measurements."
    },
    {
      id: "PD-736192",
      createdAt: "2026-11-19T15:15:00.000Z",
      name: "Dr. Meenakshi Rao",
      company: "Bengaluru International Academy Trust",
      phone: "+91 98450 11982",
      email: "director@bia-trust.edu.in",
      eventType: "School, College & University Interiors",
      venue: "Sarjapur Road Campus, Bengaluru",
      areaSqFt: 14000,
      durationDays: 120,
      eventDate: "2026-12-15",
      totalCrew: 26,
      crew: {},
      totalMaterials: 8,
      materials: {},
      customRequest: "500-seat acoustic timber auditorium (NRC 0.85), 12 smart circadian classrooms, and acid-resistant STEM chemistry labs.",
      status: "quoted",
      source: "vip_booking",
      quotedAmount: "₹3.25 Cr",
      notes: "Itemized BOQ proposal PDF dispatched. Campus committee review scheduled."
    },
    {
      id: "PD-619284",
      createdAt: "2026-11-18T10:45:00.000Z",
      name: "Rohan Deshmukh",
      company: "FinEdge Technologies Pvt. Ltd.",
      phone: "+91 97110 58291",
      email: "rohan.d@finedge.in",
      eventType: "Corporate Office Fitout",
      venue: "Indiranagar 100ft Road, Bengaluru",
      areaSqFt: 7200,
      durationDays: 75,
      eventDate: "2026-12-02",
      totalCrew: 15,
      crew: {},
      totalMaterials: 5,
      materials: {},
      customRequest: "STC 45 acoustic glass boardrooms, PDLC smart privacy glass executive cabin, and Daikin VRV climate zoning.",
      status: "confirmed",
      source: "quote_builder",
      quotedAmount: "₹1.48 Cr",
      notes: "Milestone 1 advance cleared. On-site supervisor stationed daily."
    },
    {
      id: "PD-509182",
      createdAt: "2026-11-16T17:20:00.000Z",
      name: "Kavita & Vikram Oberoi",
      company: "Sky Penthouse Residence",
      phone: "+91 99001 77281",
      email: "k.oberoi@domain.in",
      eventType: "Luxury Residence & Penthouse Interiors",
      venue: "Whitefield, Bengaluru",
      areaSqFt: 3800,
      durationDays: 90,
      eventDate: "2026-12-10",
      totalCrew: 12,
      crew: {},
      totalMaterials: 4,
      materials: {},
      customRequest: "Calacatta Gold waterfall kitchen island, smoked bronze glass walk-in closet with sensor LEDs, and fluted oak walls.",
      status: "in_review",
      source: "contact_form",
      quotedAmount: "₹92.50 Lakh",
      notes: "Interior architecture atelier preparing physical marble & Blum sample box."
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
    const id = inquiryData.id || `PD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newEntry = {
      id,
      createdAt: new Date().toISOString(),
      status: 'new',
      quotedAmount: inquiryData.quotedAmount || 'Pending Quote',
      ...inquiryData
    };
    items.unshift(newEntry);
    saveStoredInquiries(items);
    return { success: true, id, inquiry: newEntry };
  }
};

