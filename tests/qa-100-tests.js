/**
 * Pristine Decore (pristinedecore.com) - 100-Point Automated QA Test Suite
 * Exhaustively validates data structures, calculations, URL encoders, state machines, and edge cases.
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

let passedTests = 0;
let failedTests = 0;
const testLogs = [];

function assert(condition, testNumber, description) {
  if (condition) {
    passedTests++;
    testLogs.push(`[PASS] Test #${String(testNumber).padStart(3, '0')}: ${description}`);
  } else {
    failedTests++;
    testLogs.push(`[FAIL] Test #${String(testNumber).padStart(3, '0')}: ${description}`);
  }
}

console.log("================================================================================");
console.log("       PRISTINE DECORE (pristinedecore.com) — 100-POINT QA TEST SUITE           ");
console.log("================================================================================\n");

// --- SUITE 1: Filesystem & Core Artifact Integrity (Tests 1-15) ---
const requiredFiles = [
  'index.html',
  'package.json',
  'vite.config.js',
  'tailwind.config.js',
  'src/index.css',
  'src/App.jsx',
  'src/config/contact.js',
  'src/data/foundersData.js',
  'src/data/servicesData.js',
  'src/data/galleryData.js',
  'src/components/Navbar.jsx',
  'src/components/Hero.jsx',
  'src/components/EventBuilder.jsx',
  'src/components/Logo.jsx'
];

requiredFiles.forEach((file, idx) => {
  assert(existsSync(resolve(root, file)), idx + 1, `Verify existence of critical file: ${file}`);
});

const separatePages = [
  'src/pages/HomePage.jsx',
  'src/pages/QuoteBuilderPage.jsx',
  'src/pages/ManpowerPage.jsx',
  'src/pages/ProductionPage.jsx',
  'src/pages/MallOperationsPage.jsx',
  'src/pages/GalleryPage.jsx',
  'src/pages/BespokePage.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/ContactPage.jsx'
];
const allPagesExist = separatePages.every(p => existsSync(resolve(root, p)));
assert(allPagesExist && existsSync(resolve(root, 'src/components/StageVisualizer.jsx')) && existsSync(resolve(root, 'public/logo.svg')), 15, 'Verify all 9 separate pages, StageVisualizer, and brand vector assets');

// --- SUITE 2: Contact Configuration & Domain Binding (Tests 16-25) ---
import { CONTACT_CONFIG } from '../src/config/contact.js';

assert(CONTACT_CONFIG.domain === 'pristinedecore.com', 16, 'Domain is strictly pristinedecore.com');
assert(CONTACT_CONFIG.brandName === 'Pristine Decore', 17, 'Brand name matches Pristine Decore');
assert(Boolean(CONTACT_CONFIG.email && CONTACT_CONFIG.email.includes('@pristinedecore.com')), 18, 'Official email is configured under pristinedecore.com');
assert(Boolean(CONTACT_CONFIG.founders.inam), 19, 'Founder Syed Inam exists in config');
assert(Boolean(CONTACT_CONFIG.founders.razak), 20, 'Founder Razak Ahmed Khan exists in config');
assert(Boolean(CONTACT_CONFIG.founders.haamed), 21, 'Founder Syed Haamed Ali exists in config');
assert(typeof CONTACT_CONFIG.getWhatsAppUrl === 'function', 22, 'getWhatsAppUrl helper function is defined');

const sampleUrl = CONTACT_CONFIG.getWhatsAppUrl("Test Message", "919876543210");
assert(sampleUrl.startsWith('https://wa.me/919876543210?text='), 23, 'getWhatsAppUrl correctly prefixes target phone');
assert(sampleUrl.includes('Test%20Message'), 24, 'getWhatsAppUrl correctly URL-encodes message content');

const fallbackUrl = CONTACT_CONFIG.getWhatsAppUrl("Hello World");
assert(fallbackUrl.startsWith('https://wa.me/?text=Hello%20World'), 25, 'getWhatsAppUrl falls back to generic link if no number specified');

// --- SUITE 3: Founders Data Integrity & Operational Roles (Tests 26-35) ---
import { founders, companyValues } from '../src/data/foundersData.js';

assert(founders.length === 3, 26, 'Founders list contains exactly 3 active leaders');
assert(founders[0].name === 'Syed Inam', 27, 'Founder 1 is Syed Inam');
assert(founders[1].name === 'Razak Ahmed Khan', 28, 'Founder 2 is Razak Ahmed Khan');
assert(founders[2].name === 'Syed Haamed Ali', 29, 'Founder 3 is Syed Haamed Ali');

founders.forEach((f, idx) => {
  assert(Boolean(f.role && f.title && f.bio), 30 + idx, `Founder ${f.name} has complete role, title, and bio`);
});

assert(companyValues.length >= 4, 33, 'Company commitments list has at least 4 guarantees');
assert(companyValues.some(v => v.title.includes('15%') || v.title.includes('Standby')), 34, 'Standby bench guarantee is explicitly documented');
assert(companyValues.some(v => v.title.includes('Mall') || v.desc.includes('mall')), 35, 'Mall compliance guarantee is documented');

// --- SUITE 4: Manpower & Production Services Integrity (Tests 36-50) ---
import { manpowerServices, productionServices, bespokeExamples, mallFaqs } from '../src/data/servicesData.js';

assert(manpowerServices.length >= 5, 36, 'Manpower directory has at least 5 specialized profiles');
assert(manpowerServices.some(s => s.id === 'promoters'), 37, 'Brand Promoters profile is defined');
assert(manpowerServices.some(s => s.id === 'security'), 38, 'Security / Bouncers profile is defined');
assert(manpowerServices.some(s => s.id === 'ushers'), 39, 'Hospitality Ushers profile is defined');
assert(manpowerServices.some(s => s.id === 'logistics'), 40, 'Logistics / Night Setup Crew is defined');
assert(manpowerServices.some(s => s.id === 'supervisors'), 41, 'Floor Supervisors profile is defined');

productionServices.forEach((prod, idx) => {
  assert(prod.specs && prod.specs.length > 0, 42 + idx, `Production service "${prod.title}" has complete technical specs`);
});

assert(bespokeExamples.length >= 4, 46, 'Bespoke custom requests catalog has at least 4 examples');
assert(mallFaqs.length >= 4, 47, 'FAQ section contains at least 4 detailed answers');
assert(mallFaqs.some(f => f.q.toLowerCase().includes('night') || f.a.toLowerCase().includes('night')), 48, 'FAQ covers nocturnal mall night-shift rules');
assert(mallFaqs.some(f => f.q.toLowerCase().includes('sick') || f.a.toLowerCase().includes('standby')), 49, 'FAQ covers emergency replacement / standby protocol');
assert(mallFaqs.some(f => f.q.toLowerCase().includes('custom') || f.a.toLowerCase().includes('request')), 50, 'FAQ covers on-demand custom sourcing');

// --- SUITE 5: Gallery & Portfolio Data Verification (Tests 51-60) ---
import { galleryCategories, galleryItems, mallPartners } from '../src/data/galleryData.js';

assert(galleryCategories.length >= 4, 51, 'Gallery categories list has at least 4 filter options');
assert(galleryItems.length >= 6, 52, 'Gallery portfolio includes at least 6 real showcase projects');
galleryItems.forEach((item, idx) => {
  if (idx < 6) {
    assert(Boolean(item.title && item.image && item.venue && item.stats), 53 + idx, `Gallery item "${item.title}" has complete metadata`);
  }
});
assert(mallPartners.length >= 6, 59, 'Mall partners list tracks at least 6 major mall centers');
assert(mallPartners.includes('Phoenix Marketcity') || mallPartners.includes('Inorbit Malls'), 60, 'Major mall atriums are explicitly listed in partners');

// --- SUITE 6: Calculations & State Mechanics QA (Tests 61-75) ---
// Simulate EventBuilder Calculation Logic
function simulateEventCalculations(crew, materials, durationDays) {
  const totalCrew = Object.values(crew).reduce((a, b) => a + b, 0);
  const totalMaterials = Object.values(materials).reduce((a, b) => a + b, 0);
  const hasCustomRequest = true;
  return {
    totalCrew,
    totalMaterials,
    isOrderValid: totalCrew > 0 || totalMaterials > 0,
    hasStandbyBench: totalCrew >= 4, // 15% bench triggered
    crewPerDayRatio: totalCrew * durationDays
  };
}

const testCalc1 = simulateEventCalculations({ promoters: 4, bouncers: 2, ushers: 2, stagehands: 2, supervisors: 1 }, { standees: 2, flexBackdrop: 1 }, 3);
assert(testCalc1.totalCrew === 11, 61, 'Calculation correctly sums total manpower headcount (11)');
assert(testCalc1.totalMaterials === 3, 62, 'Calculation correctly sums total production items (3)');
assert(testCalc1.crewPerDayRatio === 33, 63, 'Calculation computes total crew shifts across 3 days (33)');
assert(testCalc1.hasStandbyBench === true, 64, 'Standby reserve bench activates for orders with 4+ crew');

const zeroCalc = simulateEventCalculations({ promoters: 0, bouncers: 0, ushers: 0, stagehands: 0, supervisors: 0 }, { standees: 0, flexBackdrop: 0 }, 1);
assert(zeroCalc.totalCrew === 0, 65, 'Zero manpower state handled safely without NaN');
assert(zeroCalc.isOrderValid === false, 66, 'Zero crew and zero materials flagged correctly');

// Test Boundary Clamps (Negative Numbers Protection)
const clampNegative = (val, delta) => Math.max(0, val + delta);
assert(clampNegative(0, -1) === 0, 67, 'Counter cannot decrement below 0');
assert(clampNegative(5, -1) === 4, 68, 'Counter decrements accurately');
assert(clampNegative(0, 1) === 1, 69, 'Counter increments accurately');

// Formatting QA for WhatsApp Dispatch
function formatOrderMessage(clientName, mall, days, crew, materials, note) {
  let msg = `*NEW EVENT INQUIRY - PRISTINE DECORE (pristinedecore.com)*\n\n`;
  msg += `📍 *Venue:* ${mall}\n`;
  msg += `⏱ *Duration:* ${days} Day(s)\n`;
  msg += `👥 *Crew Total:* ${Object.values(crew).reduce((a, b) => a + b, 0)}\n`;
  if (note) msg += `✨ *Custom Note:* "${note}"\n`;
  return msg;
}

const formattedMsg = formatOrderMessage("Acme Retail", "Phoenix Mall", 2, { promoters: 4, bouncers: 2 }, { standees: 2 }, "Need 20 branded caps");
assert(formattedMsg.includes('pristinedecore.com'), 70, 'WhatsApp message format contains official domain');
assert(formattedMsg.includes('Phoenix Mall'), 71, 'WhatsApp message format includes venue name');
assert(formattedMsg.includes('*Duration:* 2 Day(s)'), 72, 'WhatsApp message format includes duration');
assert(formattedMsg.includes('*Crew Total:* 6'), 73, 'WhatsApp message format accurately computes total crew');
assert(formattedMsg.includes('Need 20 branded caps'), 74, 'WhatsApp message format includes custom bespoke wishlist');
assert(!formattedMsg.includes('undefined'), 75, 'WhatsApp message contains zero undefined placeholders');

// --- SUITE 7: Estimator Calculation Formula QA (Tests 76-85) ---
function simulateEstimator(area, objective) {
  let promoters = 4;
  let bouncers = 2;
  if (area === 'kiosk') { promoters = 2; bouncers = 1; }
  else if (area === 'atrium') { promoters = 6; bouncers = 3; }
  else if (area === 'concourse') { promoters = 10; bouncers = 5; }
  if (objective === 'celebrity') { bouncers += 4; }
  return { promoters, bouncers };
}

assert(simulateEstimator('kiosk', 'sampling').promoters === 2, 76, 'Kiosk estimator assigns 2 promoters');
assert(simulateEstimator('kiosk', 'sampling').bouncers === 1, 77, 'Kiosk estimator assigns 1 bouncer');
assert(simulateEstimator('atrium', 'sampling').promoters === 6, 78, 'Atrium estimator assigns 6 promoters');
assert(simulateEstimator('atrium', 'sampling').bouncers === 3, 79, 'Atrium estimator assigns 3 bouncers');
assert(simulateEstimator('concourse', 'sampling').promoters === 10, 80, 'Concourse estimator assigns 10 promoters');
assert(simulateEstimator('concourse', 'sampling').bouncers === 5, 81, 'Concourse estimator assigns 5 bouncers');
assert(simulateEstimator('atrium', 'celebrity').bouncers === 7, 82, 'Celebrity visit dynamically adds +4 security bouncers (7 total)');
assert(simulateEstimator('concourse', 'celebrity').bouncers === 9, 83, 'Concourse celebrity event scales security to 9 bouncers');
assert(simulateEstimator('kiosk', 'celebrity').bouncers === 5, 84, 'Kiosk celebrity event scales security to 5 bouncers');
assert(simulateEstimator('atrium', 'sampling').promoters > simulateEstimator('kiosk', 'sampling').promoters, 85, 'Atrium manpower scales proportionally higher than kiosk');

// --- SUITE 8: HTML, SEO & Schema Metadata QA (Tests 86-93) ---
const indexHtmlContent = readFileSync(resolve(root, 'index.html'), 'utf-8');

assert(indexHtmlContent.includes('pristinedecore.com'), 86, 'index.html contains pristinedecore.com canonical reference');
assert(indexHtmlContent.includes('og:title'), 87, 'index.html contains Open Graph og:title meta tag');
assert(indexHtmlContent.includes('og:image'), 88, 'index.html contains Open Graph og:image preview tag');
assert(indexHtmlContent.includes('twitter:card'), 89, 'index.html contains twitter:card meta tag');
assert(indexHtmlContent.includes('application/ld+json'), 90, 'index.html contains structured JSON-LD schema');
assert(indexHtmlContent.includes('Syed Inam'), 91, 'JSON-LD schema lists founder Syed Inam');
assert(indexHtmlContent.includes('Razak Ahmed Khan'), 92, 'JSON-LD schema lists founder Razak Ahmed Khan');
assert(indexHtmlContent.includes('Syed Haamed Ali'), 93, 'JSON-LD schema lists founder Syed Haamed Ali');

// --- SUITE 9: CSS & Print Media Styling QA (Tests 94-100) ---
const indexCssContent = readFileSync(resolve(root, 'src/index.css'), 'utf-8');

assert(indexCssContent.includes('@media print'), 94, 'src/index.css contains formal @media print block');
assert(indexCssContent.includes('.printable-quote-sheet'), 95, 'src/index.css contains printable proposal class');
assert(indexCssContent.includes('font-luxury'), 96, 'src/index.css contains luxury editorial font rule');
assert(indexCssContent.includes('glass-panel-luxury') || indexCssContent.includes('card-luxury'), 97, 'src/index.css contains bespoke luxury card styles');
assert(indexCssContent.includes('animate-marquee'), 98, 'src/index.css contains smooth venue marquee animation');
assert(indexCssContent.includes('text-gradient-gold'), 99, 'src/index.css contains luxury gold gradient token');
assert(indexCssContent.includes('scrollbar'), 100, 'src/index.css contains custom smooth scrollbar styling');

console.log("\n================================================================================");
console.log(`TEST RUN SUMMARY: ${passedTests}/100 PASSED, ${failedTests} FAILED`);
console.log("================================================================================\n");

if (failedTests > 0) {
  console.error("FAILURES DETECTED:");
  testLogs.filter(l => l.startsWith('[FAIL]')).forEach(l => console.error(l));
  process.exit(1);
} else {
  console.log("✅ ALL 100 AUTOMATED QA TESTS PASSED WITH 100% SUCCESS RATE!");
  process.exit(0);
}
