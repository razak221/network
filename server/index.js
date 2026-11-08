import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Admin Credentials specified by user
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@me';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin@123';
const JWT_SECRET = process.env.JWT_SECRET || 'pristine_decore_secret_key_2026';

// CORS configuration (allows Vercel apps, localhost, and custom domains)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Persistent Inquiries Storage
const DATA_DIR = resolve(__dirname, 'data');
const DATA_FILE = resolve(DATA_DIR, 'inquiries.json');

if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}

function loadInquiries() {
  try {
    if (existsSync(DATA_FILE)) {
      const data = readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Failed reading inquiries:', err);
  }
  return [];
}

function saveInquiries(inquiries) {
  try {
    writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed saving inquiries:', err);
  }
}

// Token helper
const activeTokens = new Set();

function generateToken(email) {
  const token = crypto.randomBytes(32).toString('hex');
  activeTokens.add(token);
  return token;
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Missing or invalid token' });
  }
  const token = authHeader.split(' ')[1];
  // Allow demo token or activeTokens
  if (!activeTokens.has(token) && token !== 'demo_admin_token') {
    return res.status(401).json({ success: false, error: 'Unauthorized: Session expired or invalid' });
  }
  next();
}

// -----------------------------------------------------------------------------
// PUBLIC ENDPOINTS
// -----------------------------------------------------------------------------

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Pristine Decore Backend (Render)',
    domain: 'pristinedecore.com',
    founders: ['Syed Inam', 'Razak Ahmed Khan', 'Syed Haamed Ali'],
    timestamp: new Date().toISOString()
  });
});

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'Email and password are required' });
  }

  // Exact credentials check
  if (email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
    const token = generateToken(email);
    return res.json({
      success: true,
      token,
      user: {
        email: ADMIN_EMAIL,
        role: 'Super Administrator',
        name: 'Pristine Decore Admin',
        accessLevel: 'full_executive'
      }
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid credentials. Please verify your administrative ID and password.'
  });
});

// Submit Client Event Inquiry (Public)
app.post('/api/inquiries', (req, res) => {
  try {
    const {
      name,
      company,
      phone,
      email,
      eventType,
      venue,
      durationDays,
      eventDate,
      crew,
      materials,
      customRequest,
      source
    } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, error: 'Name and phone number are required.' });
    }

    const inquiries = loadInquiries();
    const id = `PD-${Math.floor(100000 + Math.random() * 900000)}`;

    const totalCrew = crew ? Object.values(crew).reduce((a, b) => a + Number(b || 0), 0) : 0;
    const totalMaterials = materials ? Object.values(materials).reduce((a, b) => a + Number(b || 0), 0) : 0;

    const newInquiry = {
      id,
      createdAt: new Date().toISOString(),
      name,
      company: company || 'Direct Client',
      phone,
      email: email || '',
      eventType: eventType || 'Mall Activation',
      venue: venue || 'Venue TBD',
      durationDays: Number(durationDays || 1),
      eventDate: eventDate || '',
      totalCrew,
      crew: crew || {},
      totalMaterials,
      materials: materials || {},
      customRequest: customRequest || '',
      status: 'new',
      source: source || 'web_portal',
      quotedAmount: 'Pending Quote',
      notes: 'New submission via pristinedecore.com'
    };

    inquiries.unshift(newInquiry);
    saveInquiries(inquiries);

    res.status(201).json({
      success: true,
      id,
      message: 'Inquiry received and logged to executive desk.',
      inquiry: newInquiry
    });
  } catch (err) {
    console.error('Error logging inquiry:', err);
    res.status(500).json({ success: false, error: 'Internal server error while processing inquiry.' });
  }
});

// -----------------------------------------------------------------------------
// PROTECTED ADMIN ENDPOINTS
// -----------------------------------------------------------------------------

// Get All Inquiries
app.get('/api/admin/inquiries', authMiddleware, (req, res) => {
  const inquiries = loadInquiries();
  const { status, search } = req.query;

  let filtered = inquiries;

  if (status && status !== 'all') {
    filtered = filtered.filter(i => i.status === status);
  }

  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(i => 
      (i.name && i.name.toLowerCase().includes(s)) ||
      (i.company && i.company.toLowerCase().includes(s)) ||
      (i.venue && i.venue.toLowerCase().includes(s)) ||
      (i.phone && i.phone.includes(s)) ||
      (i.id && i.id.toLowerCase().includes(s))
    );
  }

  res.json({
    success: true,
    total: filtered.length,
    inquiries: filtered
  });
});

// Get KPI Stats for Dashboard
app.get('/api/admin/stats', authMiddleware, (req, res) => {
  const inquiries = loadInquiries();
  const totalInquiries = inquiries.length;
  const newCount = inquiries.filter(i => i.status === 'new').length;
  const quotedCount = inquiries.filter(i => i.status === 'quoted').length;
  const confirmedCount = inquiries.filter(i => i.status === 'confirmed').length;
  const totalCrewHeadcount = inquiries.reduce((acc, i) => acc + (i.totalCrew || 0), 0);
  const mallVenuesCount = inquiries.filter(i => (i.venue && i.venue.toLowerCase().includes('mall')) || (i.eventType && i.eventType.toLowerCase().includes('mall'))).length;

  res.json({
    success: true,
    stats: {
      totalInquiries,
      newCount,
      quotedCount,
      confirmedCount,
      totalCrewHeadcount,
      mallVenuesCount
    }
  });
});

// Update Inquiry Status / Notes
app.patch('/api/admin/inquiries/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const { status, notes, quotedAmount } = req.body;

  const inquiries = loadInquiries();
  const index = inquiries.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Inquiry not found' });
  }

  if (status) inquiries[index].status = status;
  if (notes !== undefined) inquiries[index].notes = notes;
  if (quotedAmount !== undefined) inquiries[index].quotedAmount = quotedAmount;
  inquiries[index].updatedAt = new Date().toISOString();

  saveInquiries(inquiries);

  res.json({
    success: true,
    message: 'Inquiry updated successfully',
    inquiry: inquiries[index]
  });
});

// Delete Inquiry
app.delete('/api/admin/inquiries/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const inquiries = loadInquiries();
  const filtered = inquiries.filter(i => i.id !== id);

  if (filtered.length === inquiries.length) {
    return res.status(404).json({ success: false, error: 'Inquiry not found' });
  }

  saveInquiries(filtered);
  res.json({ success: true, message: 'Inquiry removed successfully' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`================================================================`);
  console.log(`🚀 Pristine Decore Backend listening on PORT ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🔐 Admin Auth configured for: ${ADMIN_EMAIL}`);
  console.log(`================================================================`);
});

