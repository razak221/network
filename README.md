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
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🌐 Production Build & Deployment to `pristinedecore.com`

```bash
# Generate optimized production bundle
npm run build
```

The compiled static files will be located in the `dist/` directory, ready to deploy to any hosting provider (Vercel, Netlify, Cloudflare Pages, Firebase Hosting, Hostinger, or Apache/Nginx server).

---

## 📱 Customizing Founder Phone / WhatsApp Numbers

To bind your specific phone numbers for WhatsApp bookings:
- Search for `https://wa.me/?text=` across `src/components/` (specifically in `EventBuilder.jsx`, `Navbar.jsx`, `Hero.jsx`, `ContactSection.jsx`, and `FloatingWidget.jsx`).
- Change to: `https://wa.me/<YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE>?text=...` (e.g. `https://wa.me/919876543210?text=...`).
