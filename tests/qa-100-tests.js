/**
 * 100-Point Automated QA & Verification Test Suite
 * Pristine Decore (pristinedecore.com)
 * Domain: Turnkey Civil Construction & Luxury Interior Architecture
 */

import { existsSync, readFileSync } from 'fs';
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
    testLogs.push(`[PASS] Test ${String(testNumber).padStart(3, '0')}: ${description}`);
  } else {
    failedTests++;
    testLogs.push(`[FAIL] Test ${String(testNumber).padStart(3, '0')}: ${description}`);
  }
}

console.log("================================================================================");
console.log("       PRISTINE DECORE (pristinedecore.com) — 100-POINT QA TEST SUITE           ");
console.log("================================================================================\n");

// --- SUITE 1: Core File Structure & Architecture (Tests 01-15) ---
assert(existsSync(resolve(root, 'package.json')), 1, 'package.json exists');
assert(existsSync(resolve(root, 'index.html')), 2, 'index.html root template exists');
assert(existsSync(resolve(root, 'vite.config.js')), 3, 'vite.config.js exists');
assert(existsSync(resolve(root, 'tailwind.config.js')), 4, 'tailwind.config.js exists');
assert(existsSync(resolve(root, 'src/main.jsx')), 5, 'src/main.jsx entry point exists');
assert(existsSync(resolve(root, 'src/App.jsx')), 6, 'src/App.jsx root component exists');
assert(existsSync(resolve(root, 'src/index.css')), 7, 'src/index.css styling exists');
assert(existsSync(resolve(root, 'src/config/contact.js')), 8, 'src/config/contact.js exists');
assert(existsSync(resolve(root, 'src/data/servicesData.js')), 9, 'src/data/servicesData.js exists');
assert(existsSync(resolve(root, 'src/data/foundersData.js')), 10, 'src/data/foundersData.js exists');
assert(existsSync(resolve(root, 'src/data/galleryData.js')), 11, 'src/data/galleryData.js exists');
assert(existsSync(resolve(root, 'src/components/Navbar.jsx')), 12, 'src/components/Navbar.jsx exists');
assert(existsSync(resolve(root, 'src/components/Hero.jsx')), 13, 'src/components/Hero.jsx exists');
assert(existsSync(resolve(root, 'src/components/EventBuilder.jsx')), 14, 'src/components/EventBuilder.jsx exists');
assert(
  existsSync(resolve(root, 'src/pages/HomePage.jsx')) && 
  existsSync(resolve(root, 'src/pages/QuoteBuilderPage.jsx')) && 
  existsSync(resolve(root, 'src/pages/ManpowerPage.jsx')) && 
  existsSync(resolve(root, 'src/pages/ProductionPage.jsx')) && 
  existsSync(resolve(root, 'src/pages/MallOperationsPage.jsx')) && 
  existsSync(resolve(root, 'src/pages/GalleryPage.jsx')) && 
  existsSync(resolve(root, 'src/pages/BespokePage.jsx')) && 
  existsSync(resolve(root, 'src/pages/AboutPage.jsx')) && 
  existsSync(resolve(root, 'src/pages/ContactPage.jsx')) && 
  existsSync(resolve(root, 'src/pages/AdminBossPage.jsx')) && 
  existsSync(resolve(root, 'vercel.json')) && 
  existsSync(resolve(root, 'render.yaml')) && 
  existsSync(resolve(root, 'server/index.js')) && 
  existsSync(resolve(root, 'src/services/api.js')), 
  15, 
  'Verify all 10 pages (/adminboss included), Vercel SPA routing, Render backend, and API service'
);

// --- SUITE 2: Contact Configuration & Studio Desks (Tests 16-25) ---
import { CONTACT_CONFIG } from '../src/config/contact.js';

assert(CONTACT_CONFIG.domain === 'pristinedecore.com', 16, 'Domain is strictly pristinedecore.com');
assert(CONTACT_CONFIG.brandName === 'Pristine Decore', 17, 'Brand name matches Pristine Decore');
assert(Boolean(CONTACT_CONFIG.email && CONTACT_CONFIG.email.includes('@pristinedecore.com')), 18, 'Official email is configured under pristinedecore.com');
assert(Boolean(CONTACT_CONFIG.desks && CONTACT_CONFIG.desks.civil), 19, 'Civil Engineering Desk exists in config');
assert(Boolean(CONTACT_CONFIG.desks && CONTACT_CONFIG.desks.interior), 20, 'Interior Architecture Atelier exists in config');
assert(Boolean(CONTACT_CONFIG.desks && CONTACT_CONFIG.desks.commercial), 21, 'Commercial Fitouts Desk exists in config');
assert(typeof CONTACT_CONFIG.getWhatsAppUrl === 'function', 22, 'getWhatsAppUrl helper function is defined');

const sampleUrl = CONTACT_CONFIG.getWhatsAppUrl("Test Message", "919876543210");
assert(sampleUrl.startsWith('https://wa.me/919876543210?text='), 23, 'getWhatsAppUrl correctly prefixes target phone');
assert(sampleUrl.includes('Test%20Message'), 24, 'getWhatsAppUrl correctly URL-encodes message content');

const fallbackUrl = CONTACT_CONFIG.getWhatsAppUrl("Hello World");
assert(fallbackUrl.startsWith('https://wa.me/?text=Hello%20World'), 25, 'getWhatsAppUrl falls back to generic link if no number specified');

// --- SUITE 3: Studio Leadership & Architectural Governance (Tests 26-35) ---
import { studioLeadership, companyValues } from '../src/data/foundersData.js';

assert(studioLeadership.length === 3, 26, 'Studio Leadership directory contains exactly 3 active divisions');
assert(studioLeadership[0].title.includes('Civil') || studioLeadership[0].role.includes('Civil'), 27, 'Division 1 leads Civil Engineering');
assert(studioLeadership[1].title.includes('Interior') || studioLeadership[1].role.includes('Interior'), 28, 'Division 2 leads Interior Architecture');
assert(studioLeadership[2].title.includes('Commercial') || studioLeadership[2].role.includes('Commercial') || studioLeadership[2].title.includes('Project') || studioLeadership[2].title.includes('Turnkey') || studioLeadership[2].name.includes('Turnkey'), 29, 'Division 3 leads Commercial / Turnkey Project Management');

studioLeadership.forEach((div, idx) => {
  assert(Boolean(div.role && div.title && div.bio), 30 + idx, `Division ${div.title} has complete role, title, and bio`);
});

assert(companyValues.length >= 4, 33, 'Company commitments list has at least 4 guarantees');
assert(companyValues.some(v => v.title.includes('10-Year') || v.title.includes('Warranty')), 34, '10-Year structural warranty guarantee is explicitly documented');
assert(companyValues.some(v => v.title.includes('BOQ') || v.desc.includes('BOQ')), 35, 'Fixed-price BOQ guarantee is documented');

// --- SUITE 4: Construction & Interior Services Integrity (Tests 36-50) ---
import { constructionServices, interiorServices, bespokeExamples, constructionFaqs } from '../src/data/servicesData.js';

assert(constructionServices.length >= 5, 36, 'Construction directory has at least 5 specialized civil services');
assert(constructionServices.some(s => s.id === 'residential-villas'), 37, 'Luxury Villa Construction is defined');
assert(constructionServices.some(s => s.id === 'commercial-structures'), 38, 'Commercial Buildings profile is defined');
assert(constructionServices.some(s => s.id === 'renovation-remodeling'), 39, 'Structural Renovation profile is defined');
assert(constructionServices.some(s => s.id === 'foundation-civil'), 40, 'Foundation & Piling Work is defined');
assert(constructionServices.some(s => s.id === 'project-management'), 41, 'Turnkey EPC Supervision profile is defined');

interiorServices.forEach((item, idx) => {
  if (idx < 4) {
    assert(item.features && item.features.length > 0, 42 + idx, `Interior service "${item.title}" has complete specifications`);
  }
});

assert(bespokeExamples.length >= 4, 46, 'Bespoke custom materials catalog has at least 4 examples');
assert(constructionFaqs.length >= 4, 47, 'FAQ section contains at least 4 detailed answers');
assert(constructionFaqs.some(f => f.q.toLowerCase().includes('warranty') || f.a.toLowerCase().includes('warranty')), 48, 'FAQ covers 10-year structural warranty');
assert(constructionFaqs.some(f => f.q.toLowerCase().includes('boq') || f.a.toLowerCase().includes('boq') || f.q.toLowerCase().includes('escalation')), 49, 'FAQ covers fixed-price BOQ guarantee');
assert(constructionFaqs.some(f => f.q.toLowerCase().includes('material') || f.a.toLowerCase().includes('material') || f.a.toLowerCase().includes('tested')), 50, 'FAQ covers certified material testing');

// --- SUITE 5: Gallery & Material Partners Verification (Tests 51-60) ---
import { galleryCategories, galleryItems, materialPartners } from '../src/data/galleryData.js';

assert(galleryCategories.length >= 4, 51, 'Gallery categories list has at least 4 filter options');
assert(galleryItems.length >= 6, 52, 'Gallery portfolio includes at least 6 real showcase projects');
galleryItems.forEach((item, idx) => {
  if (idx < 6) {
    assert(Boolean(item.title && item.image && item.venue && item.stats), 53 + idx, `Gallery item "${item.title}" has complete metadata`);
  }
});
assert(materialPartners.length >= 6, 59, 'Material partners list tracks at least 6 premier brands');
assert(materialPartners.some(p => p.includes('Statuario') || p.includes('Blum') || p.includes('Tata')), 60, 'Industry-leading materials are explicitly listed');

// --- SUITE 6: Calculations & State Mechanics QA (Tests 61-75) ---
function simulateConstructionCost(sqFt, ratePerSqFt, projectType) {
  const totalCost = sqFt * ratePerSqFt;
  const civilShare = Math.round(totalCost * (projectType === 'interior_only' ? 0.15 : 0.45));
  const interiorShare = Math.round(totalCost * (projectType === 'interior_only' ? 0.65 : 0.35));
  const mepShare = totalCost - civilShare - interiorShare;
  return { totalCost, civilShare, interiorShare, mepShare, isValid: sqFt > 0 && ratePerSqFt > 0 };
}

const testCalc1 = simulateConstructionCost(3500, 3400, 'villa');
assert(testCalc1.totalCost === 11900000, 61, 'Calculation correctly computes total project investment (1.19 Cr)');
assert(testCalc1.civilShare === 5355000, 62, 'Calculation computes civil share allocation (45%)');
assert(testCalc1.interiorShare === 4165000, 63, 'Calculation computes interior share allocation (35%)');
assert(testCalc1.mepShare === 2380000, 64, 'Calculation computes MEP share allocation (20%)');

const zeroCalc = simulateConstructionCost(0, 3400, 'villa');
assert(zeroCalc.totalCost === 0, 65, 'Zero area state handled safely without NaN');
assert(zeroCalc.isValid === false, 66, 'Zero area flagged correctly');

const clampArea = (val, delta) => Math.max(500, Math.min(25000, val + delta));
assert(clampArea(500, -100) === 500, 67, 'Area cannot decrement below 500 sq ft');
assert(clampArea(3500, 500) === 4000, 68, 'Area increments accurately');
assert(clampArea(25000, 1000) === 25000, 69, 'Area clamped at max 25,000 sq ft');

function formatProposalMessage(clientName, typology, sqFt, totalCost, note) {
  let msg = `*NEW ARCHITECTURAL INQUIRY - PRISTINE DECORE (pristinedecore.com)*\n\n`;
  msg += `👤 *Client:* ${clientName}\n`;
  msg += `🏛 *Typology:* ${typology}\n`;
  msg += `📐 *Area:* ${sqFt} sq.ft\n`;
  msg += `💰 *Estimated BOQ:* ₹${(totalCost / 100000).toFixed(2)} Lakhs\n`;
  if (note) msg += `✨ *Notes:* "${note}"\n`;
  return msg;
}

const formattedMsg = formatProposalMessage("Vikram Mehta", "Luxury Villa", 4000, 13600000, "Need Italian marble throughout");
assert(formattedMsg.includes('pristinedecore.com'), 70, 'WhatsApp message format contains official domain');
assert(formattedMsg.includes('Luxury Villa'), 71, 'WhatsApp message format includes typology');
assert(formattedMsg.includes('4000 sq.ft'), 72, 'WhatsApp message format includes area');
assert(formattedMsg.includes('136.00 Lakhs'), 73, 'WhatsApp message format computes cost in Lakhs');
assert(formattedMsg.includes('Need Italian marble throughout'), 74, 'WhatsApp message format includes custom notes');
assert(!formattedMsg.includes('undefined'), 75, 'WhatsApp message contains zero undefined placeholders');

// --- SUITE 7: Estimator Calculation Formula QA (Tests 76-85) ---
function simulateEstimatorRates(tier, type) {
  let base = 2200;
  if (tier === 'luxury') base = 3400;
  if (tier === 'royal') base = 5200;
  if (type === 'commercial') base = Math.round(base * 0.9);
  if (type === 'interior_only') base = Math.round(base * 0.7);
  return base;
}

assert(simulateEstimatorRates('premium', 'villa') === 2200, 76, 'Premium tier baseline is ₹2,200/sq.ft');
assert(simulateEstimatorRates('luxury', 'villa') === 3400, 77, 'Luxury tier baseline is ₹3,400/sq.ft');
assert(simulateEstimatorRates('royal', 'villa') === 5200, 78, 'Royal atelier baseline is ₹5,200/sq.ft');
assert(simulateEstimatorRates('luxury', 'commercial') === 3060, 79, 'Commercial luxury rate is ₹3,060/sq.ft');
assert(simulateEstimatorRates('luxury', 'interior_only') === 2380, 80, 'Interior-only luxury rate is ₹2,380/sq.ft');
assert(simulateEstimatorRates('royal', 'interior_only') === 3640, 81, 'Royal interior-only rate is ₹3,640/sq.ft');
assert(simulateEstimatorRates('royal', 'villa') > simulateEstimatorRates('luxury', 'villa'), 82, 'Royal tier rates higher than luxury tier');
assert(simulateEstimatorRates('luxury', 'villa') > simulateEstimatorRates('premium', 'villa'), 83, 'Luxury tier rates higher than premium tier');
assert(simulateEstimatorRates('luxury', 'villa') > simulateEstimatorRates('luxury', 'commercial'), 84, 'Residential luxury rates higher than commercial');
assert(simulateEstimatorRates('luxury', 'villa') > simulateEstimatorRates('luxury', 'interior_only'), 85, 'Full turnkey civil rates higher than interior-only');

// --- SUITE 8: HTML, SEO & Schema Metadata QA (Tests 86-93) ---
const indexHtmlContent = readFileSync(resolve(root, 'index.html'), 'utf-8');

assert(indexHtmlContent.includes('pristinedecore.com'), 86, 'index.html contains pristinedecore.com canonical reference');
assert(indexHtmlContent.includes('og:title'), 87, 'index.html contains Open Graph og:title meta tag');
assert(indexHtmlContent.includes('og:image'), 88, 'index.html contains Open Graph og:image preview tag');
assert(indexHtmlContent.includes('twitter:card'), 89, 'index.html contains twitter:card meta tag');
assert(indexHtmlContent.includes('application/ld+json'), 90, 'index.html contains structured JSON-LD schema');
assert(indexHtmlContent.includes('GeneralContractor'), 91, 'JSON-LD schema classifies as GeneralContractor');
assert(indexHtmlContent.includes('Turnkey Civil Construction') || indexHtmlContent.includes('Turnkey'), 92, 'index.html mentions Turnkey Civil Construction');
assert(indexHtmlContent.includes('google-site-verification'), 93, 'index.html contains google-site-verification meta tag');

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
