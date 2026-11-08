# TASK.md — Ralph Loop Task Board
## Project: Pristine Decore (`pristinedecore.com`)
**Methodology:** Ralph Autonomous Loop (Geoffrey Huntley Pattern)  
**Rules:** One task per context cycle → Verify with command → Atomic Git Commit → Loop

---

## Current Status Overview
- **Completed Tasks:** 5
- **Pending Tasks:** 5
- **Current Active Task:** `TASK-006`

---

## Milestone 1: Core Portal & Event Configurator (Foundational)

- [x] **TASK-001: Project Architecture & Theme System**
  - **Scope:** Initialize Vite + React 18, Tailwind CSS dark luxury theme (`#0B0F19`), Space Grotesk / Plus Jakarta Sans typography, and Lucide React iconography.
  - **Verification:** `npm run build` succeeds with zero errors.
  - **Commit:** `9d153f5`

- [x] **TASK-002: Interactive Event Builder & Quote Calculator**
  - **Scope:** Develop 4-step configurator (`EventBuilder.jsx`) supporting event types, 5 manpower categories with counters, 6 custom production checklist items, and bespoke request textarea.
  - **Verification:** Real-time state updates and summary calculations render accurately.
  - **Commit:** `9d153f5`

- [x] **TASK-003: 1-Click WhatsApp Booking Generator**
  - **Scope:** Build URL-encoded WhatsApp deep-link generator that formats event type, dates, headcount, materials, custom notes, and organizer contact into a readable message to founders.
  - **Verification:** URL encoded strings verified in browser and dev server.
  - **Commit:** `9d153f5`

- [x] **TASK-004: Mall Operations Blueprint & 15% Bench Guarantee**
  - **Scope:** Author `MallExcellence.jsx` highlighting nocturnal setup (11 PM - 8 AM), mall security clearance, grooming standards, fire-safe compliance, and 15% standby reserve crew.
  - **Verification:** All 4 operational SOP cards render with responsive layouts.
  - **Commit:** `9d153f5`

- [x] **TASK-005: Founders Leadership Spotlight**
  - **Scope:** Create `FoundersSection.jsx` showcasing Syed Inam (Ops), Razak Ahmed Khan (Client Relations), and Syed Haamed Ali (Production) with direct contact triggers.
  - **Verification:** Bio cards and individual founder chat triggers verified.
  - **Commit:** `9d153f5`

---

## Milestone 2: Feature Enhancements & Production Optimization

- [ ] **TASK-006: Dedicated Contact Configuration & Dynamic Phone Binding**
  - **Scope:** Create a centralized config file `src/config/contact.js` defining official phone numbers, WhatsApp numbers, email, and social links for Syed Inam, Razak Ahmed Khan, and Syed Haamed Ali so they can be managed from a single place across `Navbar`, `EventBuilder`, `FoundersSection`, `ContactSection`, and `FloatingWidget`.
  - **Files:** `src/config/contact.js`, `src/components/EventBuilder.jsx`, `src/components/Navbar.jsx`, `src/components/FoundersSection.jsx`, `src/components/FloatingWidget.jsx`, `src/components/ContactSection.jsx`.
  - **Verification:** `npm run build` passes; all WhatsApp triggers import from centralized config.
  - **Status:** READY FOR EXECUTION

- [ ] **TASK-007: Event Quote Printable Summary & Download PDF Trigger**
  - **Scope:** Add a "Print / Save Quote PDF" button in `EventBuilder.jsx` that formats the active configured event breakdown into a clean, printable B2B proposal sheet with Pristine Decore header and founder signatures.
  - **Files:** `src/components/EventBuilder.jsx`, `src/index.css` (print styles).
  - **Verification:** `npm run build` passes; print styles hide UI clutter and display formal quotation layout.
  - **Status:** PENDING

- [ ] **TASK-008: Interactive Event Showcase & Mall Activations Gallery**
  - **Scope:** Build an interactive image gallery component `src/components/GallerySection.jsx` featuring categorized event previews (Mall Activations, Stage Backdrops, 3D Neon Displays, Brand Kiosks) with category filter pills and lightbox preview.
  - **Files:** `src/components/GallerySection.jsx`, `src/App.jsx`.
  - **Verification:** `npm run build` passes; category filtering works smoothly without layout shift.
  - **Status:** PENDING

- [ ] **TASK-009: SEO, Meta Tags & Open Graph Social Cards for pristinedecore.com**
  - **Scope:** Enhance `index.html` with complete Open Graph (`og:title`, `og:description`, `og:image`, `og:url`), Twitter card meta tags, structured JSON-LD Schema (`LocalBusiness` / `EventPlanningService`), canonical link, and theme colors for social sharing preview.
  - **Files:** `index.html`.
  - **Verification:** HTML validator check; JSON-LD syntax validates with schema.org.
  - **Status:** PENDING

- [ ] **TASK-010: Form Validation & Toast Feedback Notification System**
  - **Scope:** Implement an accessible, non-blocking toast notification banner that triggers upon submitting inquiries or copying event quotes, confirming instant dispatch to founders.
  - **Files:** `src/components/Toast.jsx`, `src/components/EventBuilder.jsx`, `src/components/ContactSection.jsx`.
  - **Verification:** `npm run build` passes; toasts auto-dismiss after 4 seconds.
  - **Status:** PENDING

---

## Ralph Loop Execution Instructions
1. Inspect `TASK.md` and identify the first unchecked task `[ ]`.
2. Review the task **Scope** and **Verification** requirements.
3. Make the necessary code modifications.
4. Run `npm run build` to verify zero errors.
5. Update the task checkbox to `[x]` in `TASK.md` with git commit hash.
6. Commit changes to git: `git commit -m "feat(scope): <description>"`.
7. Exit so the next loop cycle starts with a fresh context.
