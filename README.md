# Pristine Decore (pristinedecore.com)
### Event Manpower, Custom Production & On-Demand Sourcing Portal

Founded by:
- **Syed Inam** — Head of Ground Operations & Mall Compliance
- **Razak Ahmed Khan** — Head of Business Strategy & Client Experience
- **Syed Haamed Ali** — Head of Creative Decor, Print & Fabrication

---

## 🚀 Features

1. **Interactive Event Builder & Instant Quote Calculator:**
   - Multi-step interactive configurator for mall events, brand roadshows, and corporate expos.
   - Live manpower headcount selectors (Promoters, Ushers, Bouncers, Setup Crew, Supervisors).
   - Materials and decor checklist (Roll-up standees, Flex backdrops, 3D acrylic signs, Neon signs, Theme arches, Sound/Mics).
   - Bespoke "Request Anything" free-text input.
   - **1-Click WhatsApp Booking Generator:** Pre-formats the entire event quote into a readable message sent directly to the founders.

2. **Mall Events Operational Mastery:**
   - Nocturnal mall setup SOP (11 PM - 8 AM).
   - Mall security pass clearances and background-checked staff.
   - 15% standby reserve crew guarantee for zero-absenteeism.
   - Mall fire-retardant and low-voltage safety certification.

3. **In-House Workshop & Custom Production:**
   - Custom print fabrication: roll-up standees, seamless media backdrops.
   - Laser-cut 3D acrylic signs, illuminated LED glow boards, and custom neon flex.
   - Thematic balloon garlands, fresh floral arches, and stage setups.
   - Sound systems, wireless lapels/handheld microphones, and ambient lighting.

4. **"Ask For Anything" Bespoke Concierge:**
   - On-demand sourcing for custom branded polo shirts, caps, badges, confetti guns, dry-ice fog machines, mascot suits, and unique props.

5. **Direct Founder Accountability:**
   - Dedicated profiles and direct WhatsApp touchpoints for Syed Inam, Razak Ahmed Khan, and Syed Haamed Ali.

---

## 🛠️ Local Development

```bash
# 1. Install frontend dependencies
npm install

# 2. Start local frontend server (runs on port 3000)
npm run dev

# 3. In another terminal, start backend server (runs on port 5001)
cd server
npm install
npm start
```

---

## 🚀 Deployment Guide (Vercel Frontend + Render Backend)

### 1. Frontend on Vercel
1. Import this repository into [Vercel](https://vercel.com).
2. Framework Preset: **Vite** (auto-detected).
3. Root Directory: `./` (leave default).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. `vercel.json` is already configured for full SPA routing (handles deep routes `/quote`, `/manpower`, `/adminboss`, etc.).
7. Set Environment Variable in Vercel:
   - `VITE_API_URL`: Your deployed Render backend URL (e.g., `https://pristine-decore-api.onrender.com`).

### 2. Backend on Render
1. Go to [Render Dashboard](https://dashboard.render.com) and click **New + > Web Service** (or use Blueprint with `render.yaml`).
2. Connect your GitHub repository `razak221/network`.
3. Root Directory: `server` (or leave default if using Blueprint).
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Environment Variables:
   - `ADMIN_EMAIL`: `admin@me`
   - `ADMIN_PASSWORD`: `admin@123`
   - `PORT`: `10000`
   - `NODE_ENV`: `production`

---

## 🔐 Secret Executive Portal (`/adminboss`)

* **URL Path:** `/adminboss`
* **Administrative ID:** `admin@me`
* **Administrative Password:** `admin@123`
* **Capabilities:** Real-time KPI analytics, client inquiry review, status changes (New, Quoted, Confirmed), CSV roster export, and 1-click WhatsApp reply directly to client phone numbers.

---

## 📱 Customizing Founder Phone / WhatsApp Numbers

To bind your specific phone numbers for WhatsApp bookings:
- Search for `https://wa.me/?text=` across `src/components/` (specifically in `EventBuilder.jsx`, `Navbar.jsx`, `Hero.jsx`, `ContactSection.jsx`, and `FloatingWidget.jsx`).
- Change to: `https://wa.me/<YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE>?text=...` (e.g. `https://wa.me/919876543210?text=...`).

