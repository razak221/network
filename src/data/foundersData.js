/**
 * Pristine Decore Studio Leadership & Architectural Commitments
 * Construction & Luxury Interior Design
 */

export const studioLeadership = [
  {
    name: "Architectural & Civil Division",
    role: "Structural & Civil Engineering",
    title: "Head of Civil Engineering & Structural Design",
    bio: "Spearheads ground-up villa construction, structural load analysis, seismic compliance, and foundation engineering. Ensures rigorous concrete quality testing and zero-defect civil execution.",
    stats: "250+ Turnkey Structures Delivered",
    focus: ["Structural RCC Blueprinting", "Seismic & Municipal Clearances", "Laboratory Material Testing"],
    avatar: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=600&auto=format&fit=crop&q=80",
    badge: "Structural Engineering"
  },
  {
    name: "Interior Architecture Division",
    role: "Luxury Interior Design & Styling",
    title: "Head of Interior Architecture & Spatial Curation",
    bio: "Directs luxury residential living, penthouse layouts, and corporate workspaces. Expert in curating rare Italian stone, bespoke modular joinery, acoustic balance, and customized lighting scenes.",
    stats: "400+ Luxury Spaces Curated",
    focus: ["Italian Marble & Stone Selection", "Bespoke Millwork & Modular Systems", "Architectural Lighting Schemes"],
    avatar: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80",
    badge: "Interior Architecture"
  },
  {
    name: "Turnkey Project Management Division",
    role: "On-Site Execution & Quality Audits",
    title: "Head of Turnkey Execution & Site QA",
    bio: "Supervises multi-disciplinary trade coordination on site, daily progress logs, vendor SLAs, and milestone scheduling. Guarantees on-time handover with meticulous 120-point pre-delivery snag audits.",
    stats: "100% On-Time Handover Rate",
    focus: ["Daily Digital Progress Reports", "Fixed-Price BOQ Compliance", "120-Point Snag-List Auditing"],
    avatar: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80",
    badge: "Turnkey Execution"
  }
];

export const companyValues = [
  {
    title: "10-Year Structural Integrity Warranty",
    desc: "Every civil structure engineered by Pristine Decore carries a formal 10-year warranty covering foundations, RCC framing, slabs, and waterproofing."
  },
  {
    title: "Transparent Fixed-Price BOQ Guarantee",
    desc: "No hidden surprise costs or arbitrary contractor markups. What you approve in your itemized Bill of Quantities is exactly what you pay."
  },
  {
    title: "Photorealistic 3D Pre-Visualization",
    desc: "Experience your complete villa elevation or interior layout in photorealistic 3D before a single foundation is dug or wood panel cut."
  },
  {
    title: "Dedicated On-Site Engineering Oversight",
    desc: "A licensed resident civil engineer monitors your project daily, ensuring millimeter precision, material testing, and zero timeline delays."
  }
];

// Ensure backward-compatible properties
studioLeadership.forEach(item => {
  if (!item.responsibilities) item.responsibilities = item.focus;
  if (!item.specialization) item.specialization = item.stats;
});

// Alias for existing imports
export const founders = studioLeadership;
