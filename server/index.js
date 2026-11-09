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

// Root API Landing Dashboard
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pristine Decore API | Render Backend Service</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #0B0F19;
      color: #F8FAFC;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .card {
      max-width: 640px;
      width: 100%;
      background: #111827;
      border: 1px solid rgba(217, 119, 6, 0.3);
      border-radius: 24px;
      padding: 40px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(217, 119, 6, 0.1);
      text-align: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34D399;
      font-size: 12px;
      font-weight: 700;
      border-radius: 999px;
      margin-bottom: 20px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .badge-dot {
      width: 8px;
      height: 8px;
      background: #10B981;
      border-radius: 50%;
      box-shadow: 0 0 10px #10B981;
    }
    h1 {
      font-size: 28px;
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 8px;
      letter-spacing: -0.02em;
    }
    h1 span {
      background: linear-gradient(135deg, #FDE68A 0%, #D97706 50%, #92400E 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: #94A3B8;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 28px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      text-align: left;
      background: #1E293B;
      padding: 20px;
      border-radius: 16px;
      margin-bottom: 28px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .stat-label {
      font-size: 11px;
      color: #64748B;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .stat-val {
      font-size: 13px;
      color: #E2E8F0;
      font-weight: 600;
      font-family: monospace;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }
    .btn {
      padding: 12px 20px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .btn-gold {
      background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
      color: #FFFFFF;
      box-shadow: 0 4px 14px rgba(217, 119, 6, 0.4);
    }
    .btn-gold:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(217, 119, 6, 0.6);
    }
    .btn-dark {
      background: #1E293B;
      color: #E2E8F0;
      border: 1px solid #334155;
    }
    .btn-dark:hover {
      background: #334155;
      color: #FFFFFF;
    }
    footer {
      margin-top: 24px;
      font-size: 11px;
      color: #64748B;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">
      <div class="badge-dot"></div>
      Backend API Operational
    </div>
    
    <h1>PRISTINE <span>DECORE</span> API</h1>
    <p>
      High-performance REST backend powering <strong>pristinedecore.com</strong> for event workforce management, custom fabrication scheduling, and executive inquiry tracking.
    </p>

    <div class="grid">
      <div>
        <div class="stat-label">Hosting Environment</div>
        <div class="stat-val">Render Web Service</div>
      </div>
      <div>
        <div class="stat-label">Official Domain</div>
        <div class="stat-val">pristinedecore.com</div>
      </div>
      <div>
        <div class="stat-label">Founders Command</div>
        <div class="stat-val">Inam • Razak • Haamid</div>
      </div>
      <div>
        <div class="stat-label">Admin Route</div>
        <div class="stat-val">/adminboss</div>
      </div>
    </div>

    <div class="actions">
      <a href="https://pristinedecore.com" class="btn btn-gold" target="_blank" rel="noopener">
        <span>Visit Official Website (pristinedecore.com)</span>
      </a>
      <a href="https://pristinedecore.com/adminboss" class="btn btn-dark" target="_blank" rel="noopener">
        <span>Admin Command Portal</span>
      </a>
      <a href="/api/health" class="btn btn-dark">
        <span>View JSON Health</span>
      </a>
    </div>

    <footer>
      &copy; ${new Date().getFullYear()} Pristine Decore. Direct Co-Founder Governance: Syed Inam, Razak Ahmed Khan, Syed Haamid Ali.
    </footer>
  </div>
</body>
</html>
  `);
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Pristine Decore Backend (Render)',
    domain: 'pristinedecore.com',
    founders: ['Syed Inam', 'Razak Ahmed Khan', 'Syed Haamid Ali'],
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

