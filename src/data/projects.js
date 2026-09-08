export const projectCategories = [
  { id: "all", label: "All Works" },
  { id: "brand-corp", label: "Enterprise & Identity" },
  { id: "product-ux", label: "Product & UI/UX" },
  { id: "print-posm", label: "Print & Merchandising" },
  { id: "ai-systems", label: "AI & Systems Lab" },
  { id: "media-motion", label: "Motion & Media" }
];

export const externalProfiles = {
  linkedin: "https://www.linkedin.com/in/manaphassan",
  behance: "https://www.behance.net/manaphassan",
  github: "https://github.com/manaphassan",
  youtube: "https://www.youtube.com/@harussani.manaphassan",
  borneoShowreel: "https://www.youtube.com/watch?v=xmuCcunYNGU&list=PL1BCB093F66106553",
  appcable: "https://appcable.com/"
};

export const projects = [
  /* ==========================================================================
     ACT 05: CREATIVE LEADERSHIP & AUTONOMOUS AI (2024–PRESENT)
     ========================================================================== */
  {
    id: "suamisihat-design-system",
    act: 5,
    actTitle: "Act 05: Creative Leadership & AI Scale",
    title: "SuamiSihat™ Design System — Single Source of Truth",
    client: "Suamisihat Holding Sdn. Bhd.",
    category: "product-ux",
    lens: ["executive", "creative", "tech"],
    year: "2024 – Present",
    badge: "Enterprise Design System",
    summary: "Single Source of Truth design system governing brand guidelines, tokenized design components, color palettes, and digital asset repositories across 9 holding group entities.",
    deliverables: ["Single Source of Truth Architecture", "Design Token Libraries", "9-Entity Brand Guidelines", "Interactive Component Specs"],
    impact: "Unifies brand consistency across all marketing, clinic interiors, e-commerce stores, and telehealth digital products.",
    image: "mywork/03-digital-product-ui/suamisihat-app/suamisihat-app-preview.jpg",
    gallery: [
      "mywork/03-digital-product-ui/suamisihat-app/suamisihat-app-preview.jpg",
      "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg"
    ],
    links: [
      { label: "Live Design System", url: "https://assets.suamisihat.myds.me/" },
      { label: "Behance Portfolio", url: "https://www.behance.net/manaphassan" }
    ]
  },
  {
    id: "ss-cam-tool",
    act: 5,
    actTitle: "Act 05: Creative Leadership & AI Scale",
    title: "SuamiSihat / ss_cam — Creative Workstation Automation",
    client: "SuamiSihat Creative Operations",
    category: "ai-systems",
    lens: ["tech", "executive"],
    year: "2025 – 2026",
    badge: "Windows Creative Deployment Utility",
    summary: "Windows deployment utility for creative workstations. Automatically installs brand typography, color palettes, and asset libraries, while generating standardized project folders with built-in Job ID tracking.",
    deliverables: ["Windows Deployment Script", "Brand Font Auto-Installer", "Job ID Directory Generator", "Creative Workflow Automation"],
    impact: "Eliminates workstation setup drift and enforces structural folder hierarchy and file governance across all in-house designers.",
    image: "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/SuamiSihat/ss_cam" }
    ]
  },
  {
    id: "suamisihat-app",
    act: 5,
    actTitle: "Act 05: Creative Leadership & AI Scale",
    title: "SuamiSihat Mobile App & Tech Subsidiary",
    client: "Suamisihat Technology Sdn. Bhd.",
    category: "product-ux",
    lens: ["executive", "tech", "creative"],
    year: "2024 – Present",
    badge: "RM100K MDEC Grant & Product Lead",
    summary: "Originated the mobile application concept internally. Authored full UI/UX, user flows, subscription tiers, and the successful MDEC CIP SPARK grant application that founded SST as a dedicated tech subsidiary.",
    deliverables: ["Mobile UI/UX Architecture", "Subscription Tier Design", "MDEC CIP SPARK Pitch", "Product Origination Specs"],
    impact: "Originated internal app concept securing RM100,000 MDEC CIP SPARK grant and founding SST tech subsidiary.",
    image: "mywork/03-digital-product-ui/suamisihat-app/suamisihat-app-preview.jpg",
    gallery: [
      "mywork/03-digital-product-ui/suamisihat-app/suamisihat-app-preview.jpg",
      "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg"
    ],
    links: [
      { label: "Ecosystem Hub", url: "https://suamisihat.com.my" },
      { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/manaphassan" }
    ]
  },
  {
    id: "ai-video-veo",
    act: 5,
    actTitle: "Act 05: Creative Leadership & AI Scale",
    title: "Google Veo AI Commercial Video Pipeline",
    client: "Suamisihat Ecommerce Sdn. Bhd.",
    category: "ai-systems",
    lens: ["tech", "creative"],
    year: "2025 – Present",
    badge: "High-Velocity AI Pipeline",
    summary: "Pioneered a scalable commercial AI video production pipeline using Google Veo and generative imagery for Dr. MIT Ring Season 1 (13 episodes + 1 feature film) at a sustained daily velocity of ≥10 video variations.",
    deliverables: ["13 AI Video Episodes", "Feature Film (S1E14)", "Prompt-to-Render Pipeline SOP", "Ad Hook Matrix"],
    impact: "Reduced video creative production cycle time by over 80% while establishing an automated commercial creative engine.",
    image: "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-rollup-banner.jpg"
    ]
  },
  {
    id: "appcable-ai-agents",
    act: 5,
    actTitle: "Act 05: Creative Leadership & AI Scale",
    title: "Appcable Autonomous Multi-Agent OS",
    client: "Appcable Sdn. Bhd.",
    category: "ai-systems",
    lens: ["tech", "executive"],
    year: "2026",
    badge: "5-Agent AI Architecture",
    summary: "Architected a cohesive 5-agent AI operating system (NOVA, ARIA, FINA, MIRA, AXEL) orchestrated via automated webhook pipelines, NocoBase relational ledgers, Claude API, and Telegram for automated business operations and executive telemetry.",
    deliverables: ["Agent OS Architecture Specs", "Autonomous Workflow Pipelines", "NocoBase Relational Ledgers", "Agent Dispatch Protocols"],
    impact: "Automated business telemetry, financial auditing, and multi-channel customer communications on private server infrastructure.",
    image: "mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg",
    gallery: [
      "mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg",
      "mywork/03-digital-product-ui/appcable/appcable-letterhead.jpg",
      "mywork/03-digital-product-ui/appcable/appcable-business-card.jpg"
    ],
    links: [
      { label: "Appcable.com", url: "https://appcable.com/" }
    ]
  },

  /* ==========================================================================
     ACT 04: NATIONAL SMART CITY PLATFORM & REBRAND (2018–2024)
     ========================================================================== */
  {
    id: "jomparking-govicle",
    act: 4,
    actTitle: "Act 04: Smart Mobility & Scale",
    title: "JomParking® — National Smart Parking Platform",
    client: "JomParkir Sdn. Bhd. → Govicle Sdn. Bhd.",
    category: "product-ux",
    lens: ["executive", "tech", "creative"],
    year: "2018 – 2024",
    badge: "Best IoT Startup Malaysia (Rice Bowl)",
    summary: "Complete brand ownership for a nationally deployed parking platform serving millions of motorists and municipal local authorities across Malaysia. Directed brand identity, marketing campaigns, and investor decks.",
    deliverables: ["JomParking® Identity System", "Mobile & Web UI Assets", "Municipal Tender Proposals", "Govicle Enterprise Rebrand"],
    impact: "Won Best IoT Startup Malaysia at the Rice Bowl Startup Awards (ASEAN Finalist) and expanded brand from single app to regional mobility ecosystem.",
    image: "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-01.png",
    gallery: [
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-01.png",
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-mobile-ui-01.png"
    ],
    links: [
      { label: "Live Platform", url: "https://web.jomparking.com/" },
      { label: "Behance Case Study", url: "https://www.behance.net/manaphassan" }
    ]
  },
  {
    id: "gopayy-plus",
    act: 4,
    actTitle: "Act 04: Smart Mobility & Scale",
    title: "GoPayy+ — Ultimate Digital Payment Solution",
    client: "Govicle Sdn. Bhd.",
    category: "product-ux",
    lens: ["tech", "executive", "creative"],
    year: "2021 – 2024",
    badge: "Digital Payment & Municipal POS",
    summary: "Digital payment solution and flexible point-of-sale platform with multi-channel payment support, reporting tools, and municipal enforcement integration.",
    deliverables: ["Product Identity Guidelines", "Payment Interface Design", "Municipal Council Collateral", "Marketing Pitch Visuals"],
    impact: "Streamlined fine payment and digital fee processing across municipal councils in Melaka and Johor.",
    image: "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-02.png",
    gallery: [
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-02.png"
    ],
    links: [
      { label: "GoPayy+ Solution", url: "https://govicle.com/gopayy/" }
    ]
  },
  {
    id: "bollymuzik-fm",
    act: 4,
    actTitle: "Act 04: Smart Mobility & Scale",
    title: "Bollymuzik.fm™ — Digital Radio & Mobile UI",
    client: "Bollymuzik.fm Network",
    category: "product-ux",
    lens: ["creative", "tech"],
    year: "2014 – 2016",
    badge: "Digital Streaming & Radio UI",
    summary: "Visual identity, web streaming audio player interface, and cross-platform mobile app UI for an online digital radio broadcasting network.",
    deliverables: ["Radio Identity & Logo System", "Web Player UX/UI", "Mobile Radio App Interfaces", "Streaming Promotion Collateral"],
    impact: "Delivered responsive web & mobile streaming player interfaces and integrated brand identity for digital broadcast listeners.",
    image: "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-02.png",
    gallery: [
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-01.png",
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-02.png",
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-mobile-ui-01.png",
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-brand-assets.png"
    ]
  },

  /* ==========================================================================
     ACT 03: THE 6-ENTITY SOLO OPERATOR (2012–2018)
     ========================================================================== */
  {
    id: "picc-identity",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Putrajaya International Convention Centre (PICC)",
    client: "Putrajaya International Convention Centre™",
    category: "brand-corp",
    lens: ["creative"],
    year: "2012 – 2018",
    badge: "National Landmark Identity & Fleet",
    summary: "Comprehensive corporate brand system, vehicle fleet livery (Proton Exora), corporate desk calendars, stationery, umbrellas, uniforms, and exhibition popups for Malaysia's premier convention landmark.",
    deliverables: ["Corporate Identity Guidelines", "Vehicle Fleet Livery (Proton Exora)", "Executive Desk Calendars & Diaries", "VIP Merchandise & Apparel"],
    impact: "Executed premier national convention branding across physical vehicle fleets, executive VIP stationery, and large-scale exhibition venues.",
    image: "mywork/01-corporate-identity/picc/picc-corporate-identity.jpg",
    gallery: [
      "mywork/01-corporate-identity/picc/picc-corporate-identity.jpg",
      "mywork/01-corporate-identity/picc/picc-fleet-proton-exora.jpg",
      "mywork/01-corporate-identity/picc/picc-desk-calendar.jpg",
      "mywork/01-corporate-identity/picc/picc-desk-calendar-02.jpg",
      "mywork/01-corporate-identity/picc/picc-backpack-merchandise.jpg",
      "mywork/01-corporate-identity/picc/picc-apparel-shirt.jpg",
      "mywork/01-corporate-identity/picc/picc-umbrella.jpg",
      "mywork/01-corporate-identity/picc/picc-writing-pad.jpg"
    ]
  },
  {
    id: "midf-property",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "MIDF Property Berhad — Corporate Identity & Iconography",
    client: "MIDF Property Berhad™",
    category: "brand-corp",
    lens: ["creative"],
    year: "2014 – 2018",
    badge: "Islamic Property & Financial Group",
    summary: "Islamic corporate identity, property development marketing presentation assets, custom icon systems, and corporate signage for a leading Malaysian financial and property institution.",
    deliverables: ["Corporate Property Collateral", "Custom Iconography System", "Development Proposal Presentations", "Marketing Signage Guidelines"],
    impact: "Unified visual language for premier commercial and industrial developments under MIDF Property Berhad.",
    image: "mywork/01-corporate-identity/midf-property/midf-property-branding-01.jpg",
    gallery: [
      "mywork/01-corporate-identity/midf-property/midf-property-branding-01.jpg",
      "mywork/01-corporate-identity/midf-property/midf-property-branding-02.jpg",
      "mywork/01-corporate-identity/midf-property/midf-property-branding-03.jpg",
      "mywork/01-corporate-identity/midf-property/midf-iconography-01.jpg",
      "mywork/01-corporate-identity/midf-property/midf-iconography-02.jpg"
    ]
  },
  {
    id: "dhc-halal",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Desatera Halal Committee™ — Identity & Governance",
    client: "Desatera Halal Committee",
    category: "brand-corp",
    lens: ["creative"],
    year: "2013 – 2016",
    badge: "Institutional Halal Compliance",
    summary: "Visual identity guidelines, executive notebooks, tote bags, stationery, and event accreditation collateral for national institutional halal compliance bodies.",
    deliverables: ["Halal Identity Guidelines", "Executive Notebooks & Stationery", "VIP Merchandise & Tote Bags", "Event Badges & Lanyards"],
    impact: "Standardized professional compliance identity across national food service catering contracts.",
    image: "mywork/01-corporate-identity/dhc-halal/dhc-notebook.jpg",
    gallery: [
      "mywork/01-corporate-identity/dhc-halal/dhc-notebook.jpg",
      "mywork/01-corporate-identity/dhc-halal/dhc-tote-bag.jpg",
      "mywork/01-corporate-identity/dhc-halal/dhc-stationery-pen.jpg"
    ]
  },
  {
    id: "restoran-chamca",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Restoran Chamcha — F&B Brand Collateral",
    client: "Restoran Chamcha (SMSfocal Group)",
    category: "print-posm",
    lens: ["creative"],
    year: "2012 – 2016",
    badge: "Hospitality & Retail POSM",
    summary: "Complete menu design, trifold promotional brochures, student marketing campaigns, and walk-in store signage for an F&B entity within the SMSfocal group.",
    deliverables: ["Trifold Menu Brochure", "Marketing Flyers", "In-store POSM", "Promotional Campaigns"],
    impact: "Supported daily retail foot-traffic and customer ordering flows as part of the 6-entity solo creative mandate.",
    image: "mywork/02-commercial-print-posm/restoran-chamca/chamca-trifold-brochure.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/restoran-chamca/chamca-trifold-brochure.jpg",
      "mywork/02-commercial-print-posm/restoran-chamca/chamca-student-flyer.jpg"
    ]
  },

  /* ==========================================================================
     ACT 02: HIGH-STAKES BROADCAST & GOVERNMENT MEDIA (2009–2012)
     ========================================================================== */
  {
    id: "borneo-showreel",
    act: 2,
    actTitle: "Act 02: High-Stakes Broadcast",
    title: "Borneo Showreel & Broadcast TV Documentaries",
    client: "RTM · FINAS · Galaxy Features Network",
    category: "media-motion",
    lens: ["creative"],
    year: "2010 – 2012",
    badge: "Borneo Showreel & KKM TV Award",
    summary: "Broadcast documentaries (1001 Malaysia for RTM), motion graphics, camera operations, and award-winning scriptwriting for FINAS and Ministry of Health (KKM).",
    deliverables: ["Borneo Motion Graphics Showreel", "RTM 1001 Malaysia Documentary Series", "National Organ Donation PSA Script", "FINAS Production Management"],
    impact: "Won 2nd Place in the National TV PSA Scriptwriting Competition (KKM/RTM/FINAS) and delivered national broadcast standard motion media.",
    image: "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg"
    ],
    links: [
      { label: "Borneo Showreel on YouTube", url: "https://www.youtube.com/watch?v=xmuCcunYNGU&list=PL1BCB093F66106553" },
      { label: "YouTube Channel", url: "https://www.youtube.com/@harussani.manaphassan" }
    ]
  },

  /* ==========================================================================
     ACT 01: CRAFT & INDUSTRIAL PRINT RIGOR (2007–2009)
     ========================================================================== */
  {
    id: "th-hotel-branding",
    act: 1,
    actTitle: "Act 01: Industrial Press Rigor",
    title: "TH Hotel™ (Tabung Haji) Signage & Large Format",
    client: "TH Hotel & Convention Centre",
    category: "print-posm",
    lens: ["creative"],
    year: "2015 – 2017",
    badge: "Industrial Large-Format Print",
    summary: "Large format roll-up banner systems, outdoor signage, and commercial hospitality print production with exacting color pre-flight standards.",
    deliverables: ["Roll-up Banner Systems", "Large-Format Signage", "Pre-Flight Color Separation", "Event Exhibition Collateral"],
    impact: "Commercial print precision delivered under strict architectural and convention deadlines.",
    image: "mywork/02-commercial-print-posm/th-hotel/th-hotel-rollup-banner.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-rollup-banner.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-event-banner.jpg"
    ]
  },
  {
    id: "industrial-print-catalog",
    act: 1,
    actTitle: "Act 01: Industrial Press Rigor",
    title: "Commercial Print & Billboard Advertising Systems",
    client: "Commercial Print & Outdoor Media",
    category: "print-posm",
    lens: ["creative"],
    year: "2007 – 2014",
    badge: "Machining & Pre-Press Discipline",
    summary: "Production design, large-format billboard advertisements, acrylic framing displays, and walk-in commercial print operations.",
    deliverables: ["Highway Billboard Templates", "Acrylic Frame Displays", "Pre-Press CMYK Workflows", "Direct-to-Plate Pre-Flight"],
    impact: "Established the foundational production discipline and machine knowledge that anchors 19 years of subsequent leadership.",
    image: "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg"
    ]
  }
];
