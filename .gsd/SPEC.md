# SPEC.md — Project Specification

> **Status**: `FINALIZED`
>
> ⚠️ **Planning Lock**: No code may be written until this spec is marked `FINALIZED`.

## Vision
Pristine Decore (`pristinedecore.com`) is a unified, single-window digital portal and execution partner providing skilled on-demand event manpower (specializing in high-traffic mall events, corporate expos, store launches) alongside end-to-end custom production supplies (banners, LED glow signboards, thematic decor, staging, and audio-visual gear). Led directly by active co-founders Syed Inam, Razak Ahmed Khan, and Syed Haamed Ali.

## Goals
1. **Interactive Event Builder & Instant Quote Generator** — Allow event organizers and mall agencies to configure required manpower (promoters, bouncers, ushers, setup crew, supervisors) and physical production assets (standees, backdrops, 3D acrylic signs, neon boards, balloon/floral arches, AV gear) with a 1-click formatted WhatsApp dispatch to the founders.
2. **Mall Events Operational Mastery** — Establish and showcase strict adherence to shopping mall protocols: nocturnal setup windows (11 PM - 8 AM), security pass clearance, grooming standards, and a 15% standby reserve crew guarantee.
3. **Bespoke "Ask For Anything" Concierge** — Provide an on-demand sourcing pipeline where clients can order custom props, branded staff apparel, special FX (confetti/fog), and emergency print items.
4. **Founder Transparency & Accountability** — Prominently feature the three co-founders (Syed Inam, Razak Ahmed Khan, Syed Haamed Ali) with their operational responsibilities and direct contact channels.
5. **Interactive Mall Area Estimator** — Provide an automated calculation tool recommending staff and production assets based on venue square footage.

## Non-Goals (Out of Scope)
- No user account creation or login required for initial phase (frictionless quote generation).
- No direct online payment gateway required for v1 (quotes and contracts are finalized B2B via WhatsApp and direct invoice).
- No third-party agency sub-contracting without founder oversight.

## Constraints
- **Domain:** Must strictly align with `pristinedecore.com`.
- **Performance:** Sub-second hydration and 100% mobile-first responsiveness (vital for on-site mall event directors).
- **Communication:** Must seamlessly generate URL-encoded WhatsApp messages containing structured quote specifications.

## Success Criteria
- [x] Web portal operational and responsive across mobile, tablet, and desktop viewports.
- [x] Interactive Event Builder with dynamic live state updates for manpower and production items.
- [x] 1-Click WhatsApp booking generator with structured text encoding.
- [x] Dedicated leadership showcase for Syed Inam, Razak Ahmed Khan, and Syed Haamed Ali.
- [x] Dedicated Mall Operations blueprint with the 15% Standby Bench Guarantee.
- [x] Zero compilation errors in production build (`npm run build`).

## Technical Requirements

| Requirement | Priority | Notes |
|-------------|----------|-------|
| React 18 + Vite | Must-have | Lightning-fast static delivery and modern component state |
| Tailwind CSS | Must-have | High-contrast dark luxury theme with amber and cyan accents |
| Lucide React | Must-have | Lightweight, scalable iconography |
| WhatsApp URL Deep-Link API | Must-have | Automated pre-filled order quotation |
| Git Version Control | Must-have | Atomic commits per feature wave |

---

*Last updated: 2026-11-08*

