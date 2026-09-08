import { 
  createIcons, 
  Search, 
  FileText, 
  ArrowDownRight, 
  Play, 
  Github, 
  Youtube, 
  ExternalLink, 
  Printer, 
  X, 
  Check, 
  Copy, 
  Award, 
  Layers, 
  Briefcase, 
  Cpu, 
  Code, 
  Clock, 
  ShieldCheck, 
  Handshake, 
  Terminal, 
  Globe, 
  Linkedin, 
  Palette,
  Contact,
  Download
} from 'lucide';
import confetti from 'canvas-confetti';
import { careerEras, executiveMetrics } from './data/career.js';
import { projects, externalProfiles } from './data/projects.js';
import { skillDomains, verifiedCredentials } from './data/skills.js';

// Icons setup
const icons = {
  Search, FileText, ArrowDownRight, Play, Github, Youtube,
  ExternalLink, Printer, X, Check, Copy, Award, Layers,
  Briefcase, Cpu, Code, Clock, ShieldCheck, Handshake, Terminal,
  Globe, Linkedin, Palette, Contact, Download
};

function refreshIcons() {
  createIcons({ icons });
}

/* ==========================================================================
   1. HERO METRICS (READABLE SWISS TYPOGRAPHY)
   ========================================================================== */
function renderHeroMetrics() {
  const container = document.getElementById('hero-metrics-grid');
  if (!container) return;

  container.innerHTML = executiveMetrics.map((m, idx) => `
    <div class="p-4 rounded-xl border border-paper-200 bg-paper-50 flex flex-col justify-between">
      <span class="font-mono text-xs text-paper-500 uppercase tracking-wider block mb-1 font-bold">
        [0${idx + 1}]
      </span>
      <div>
        <div class="font-display font-extrabold text-2xl sm:text-3xl text-paper-950 tracking-tight leading-none mb-1">
          ${m.value}
        </div>
        <p class="font-mono text-xs font-bold text-paper-900 leading-tight">${m.label}</p>
        <p class="font-mono text-xs text-paper-600 mt-0.5">${m.sub}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. EMBEDDED ACT PROJECTS (STORY-DRIVEN GALLERY)
   ========================================================================== */
function renderProjectCard(p) {
  const hasLinks = p.links && p.links.length > 0;
  
  return `
    <article 
      data-id="${p.id}"
      data-category="${p.category}"
      class="story-card group cursor-pointer border border-paper-200 rounded-2xl overflow-hidden bg-white hover:border-paper-400 transition-all flex flex-col justify-between">
      
      <div>
        <!-- Image Frame -->
        <div class="relative aspect-video w-full overflow-hidden bg-paper-150 border-b border-paper-200">
          <img 
            src="${encodeURI(p.image)}" 
            alt="${p.title}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg';"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div class="absolute top-3 left-3 bg-paper-950/90 text-white font-mono text-xs uppercase font-bold tracking-wider px-3 py-1 rounded">
            ${p.badge}
          </div>
          <div class="absolute bottom-3 right-3 bg-white/95 text-paper-900 font-mono text-xs font-bold px-2.5 py-1 rounded border border-paper-200">
            ${p.year}
          </div>
        </div>

        <!-- Content -->
        <div class="p-5 sm:p-6">
          <span class="font-mono text-xs text-paper-700 uppercase tracking-wider block mb-1 font-bold">
            ${p.client}
          </span>
          <h3 class="font-display font-bold text-lg sm:text-xl text-paper-950 group-hover:text-accent-blue transition-colors mb-2 leading-snug">
            ${p.title}
          </h3>
          <p class="text-sm sm:text-base text-paper-800 leading-relaxed font-sans line-clamp-2 mb-4">
            ${p.summary}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-2">
            ${p.deliverables.slice(0, 3).map(d => `
              <span class="font-mono text-xs px-2.5 py-1 rounded bg-paper-100 border border-paper-200 text-paper-900 font-semibold">
                ${d}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-5 sm:px-6 py-3.5 bg-paper-50 border-t border-paper-200 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <span class="text-paper-700 truncate max-w-[200px] font-semibold">
          &ldquo;${p.impact.substring(0, 36)}...&rdquo;
        </span>
        <div class="flex items-center gap-2">
          ${hasLinks ? `
            <a href="${p.links[0].url}" target="_blank" rel="noreferrer" class="px-2.5 py-1 rounded-md bg-white border border-paper-300 text-accent-blue font-bold hover:border-accent-blue transition-all flex items-center gap-1 shadow-2xs" onclick="event.stopPropagation();" title="${p.links[0].label}">
              <span>${p.links[0].label.length > 15 ? p.links[0].label.substring(0, 13) + '…' : p.links[0].label}</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          ` : ''}
          <span class="text-paper-950 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Details</span>
            <i data-lucide="arrow-down-right" class="w-4 h-4 text-accent-blue"></i>
          </span>
        </div>
      </div>

    </article>
  `;
}

function renderActProjects() {
  const acts = [1, 3, 4, 5];
  acts.forEach(actNum => {
    const container = document.getElementById(`act-0${actNum}-projects`);
    if (!container) return;

    const actProjects = projects.filter(p => p.act === actNum);
    container.innerHTML = actProjects.map(p => renderProjectCard(p)).join('');

    container.querySelectorAll('.story-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // If they clicked on a link, don't open modal
        if (e.target.closest('a')) return;
        openLightbox(card.getAttribute('data-id'));
      });
    });
  });

  refreshIcons();
}

/* ==========================================================================
   3. ANIMATED SCROLL INTERSECTION OBSERVER
   ========================================================================== */
function initScrollObserver() {
  const chapters = document.querySelectorAll('.story-chapter');
  const navPills = document.querySelectorAll('.act-nav-pill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        
        const id = entry.target.getAttribute('id');
        navPills.forEach(pill => {
          if (pill.getAttribute('href') === `#${id}`) {
            pill.className = 'act-nav-pill px-3.5 py-1.5 rounded-lg border border-paper-950 bg-paper-950 text-white font-bold transition-all shadow-sm';
          } else {
            pill.className = 'act-nav-pill px-3.5 py-1.5 rounded-lg border border-paper-200 text-paper-700 hover:text-paper-950 hover:border-paper-400 transition-all font-medium';
          }
        });
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -80px 0px"
  });

  chapters.forEach(ch => observer.observe(ch));
}

/* ==========================================================================
   4. LIGHTBOX DIALOG
   ========================================================================== */
function openLightbox(projectId) {
  const p = projects.find(item => item.id === projectId);
  if (!p) return;

  const dialog = document.getElementById('lightbox-dialog');
  const lbBadge = document.getElementById('lb-badge');
  const lbTitle = document.getElementById('lb-title');
  const lbClient = document.getElementById('lb-client');
  const lbMainImage = document.getElementById('lb-main-image');
  const lbThumbnails = document.getElementById('lb-thumbnails');
  const lbSummary = document.getElementById('lb-summary');
  const lbDeliverables = document.getElementById('lb-deliverables');
  const lbLinksContainer = document.getElementById('lb-links-container');

  lbBadge.textContent = p.badge;
  lbTitle.textContent = p.title;
  lbClient.textContent = `${p.client} · ${p.year}`;

  lbMainImage.src = encodeURI(p.image);
  lbMainImage.alt = p.title;
  lbSummary.textContent = p.summary;

  lbDeliverables.innerHTML = `
    ${p.deliverables.map(d => `
      <li class="flex items-start gap-2">
        <span class="text-paper-400 font-mono text-sm mt-0.5 font-bold">&mdash;</span>
        <span class="text-paper-800">${d}</span>
      </li>
    `).join('')}
    <li class="pt-3 font-mono text-xs text-accent-blue font-bold">
      [Design & Commercial Impact]: ${p.impact}
    </li>
  `;

  // External Links inside modal
  if (lbLinksContainer) {
    if (p.links && p.links.length > 0) {
      lbLinksContainer.innerHTML = p.links.map(l => `
        <a href="${l.url}" target="_blank" rel="noreferrer" class="px-3 py-1.5 rounded-lg border border-paper-300 bg-paper-50 hover:bg-white text-paper-900 font-mono text-xs font-bold hover:border-paper-500 transition-all flex items-center gap-1.5">
          <span>${l.label}</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5 text-accent-blue"></i>
        </a>
      `).join('');
    } else {
      lbLinksContainer.innerHTML = '';
    }
  }

  const images = p.gallery && p.gallery.length > 0 ? p.gallery : [p.image];
  lbThumbnails.innerHTML = images.map((img, idx) => `
    <button 
      class="lb-thumb-btn w-16 h-16 rounded-lg overflow-hidden border-2 ${idx === 0 ? 'border-paper-950' : 'border-paper-200'} shrink-0 hover:border-paper-950 transition-all"
      data-img="${img}">
      <img src="${encodeURI(img)}" class="w-full h-full object-cover" alt="" onerror="this.src='mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg';" />
    </button>
  `).join('');

  lbThumbnails.querySelectorAll('.lb-thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      lbThumbnails.querySelectorAll('.lb-thumb-btn').forEach(b => b.className = 'lb-thumb-btn w-16 h-16 rounded-lg overflow-hidden border-2 border-paper-200 shrink-0 hover:border-paper-950 transition-all');
      btn.className = 'lb-thumb-btn w-16 h-16 rounded-lg overflow-hidden border-2 border-paper-950 shrink-0';
      lbMainImage.src = encodeURI(btn.getAttribute('data-img'));
    });
  });

  dialog.showModal();
  refreshIcons();
}

/* ==========================================================================
   5. FEATURED BRAND ARCHITECTURE (APPCABLE BRAND COLLATERAL SUITE)
   ========================================================================== */
const appcableAssets = [
  {
    id: 'logo',
    name: '01. Logo Mark',
    title: 'Geometric Brand Mark & Identity Symbolism',
    tag: 'Visual Identity',
    image: 'mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg',
    description: 'Designed a precise geometric mark conveying modern connectivity, modularity, and enterprise reliability for an emerging automation and systems brand.',
    specs: 'Golden-ratio geometry, negative-space cable integration, vector master assets scalable from 16px favicon to large architectural signage.'
  },
  {
    id: 'stationery',
    name: '02. Letterhead',
    title: 'Corporate Stationery & Formal Documentation',
    tag: 'Print & Corporate',
    image: 'mywork/03-digital-product-ui/appcable/appcable-letterhead.jpg',
    description: 'Structured an authoritative, minimalist Swiss-grid letterhead for official client proposals, enterprise contracts, and corporate communications.',
    specs: 'A4 format, strict baseline typographic grid, calibrated margins, and production-ready pre-flight CMYK values.'
  },
  {
    id: 'card',
    name: '03. Business Cards',
    title: 'Executive Dual-Tone Business Card Suite',
    tag: 'Tactile Collateral',
    image: 'mywork/03-digital-product-ui/appcable/appcable-business-card.jpg',
    description: 'Engineered high-contrast executive cards featuring blind deboss accents, tactile matte cardstock, and a dual-face color palette (clean white obverse with deep midnight reverse).',
    specs: '350gsm premium cotton cardstock, spot UV coating, and precise bleed registration.'
  },
  {
    id: 'merch',
    name: '04. Apparel & Merch',
    title: 'Brand Apparel & Team Merchandise',
    tag: 'Physical Culture',
    image: 'mywork/03-digital-product-ui/appcable/appcable-tshirt-mockup.jpg',
    description: 'Designed understated, high-taste company apparel featuring subtle monochrome chest branding and typographic details on hem tags.',
    specs: 'Vector screenprint separations, Pantone color specifications, and production garment templates.'
  }
];

function initAppcableBrandShowcase() {
  const tabsContainer = document.getElementById('appcable-tabs-grid');
  const canvas = document.getElementById('appcable-canvas');
  if (!tabsContainer || !canvas) return;

  function renderAsset(asset) {
    canvas.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div class="lg:col-span-7 rounded-xl overflow-hidden border border-paper-200 bg-paper-150 aspect-video sm:aspect-4/3 flex items-center justify-center group">
          <img 
            src="${encodeURI(asset.image)}" 
            alt="${asset.title}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onerror="this.src='mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg';"
          />
        </div>
        <div class="lg:col-span-5 space-y-4">
          <div>
            <span class="font-mono text-xs px-2.5 py-1 rounded bg-accent-blue/10 text-accent-blue font-bold uppercase tracking-wider">
              ${asset.tag}
            </span>
            <h4 class="font-display font-bold text-xl sm:text-2xl text-paper-950 mt-2 leading-snug">
              ${asset.title}
            </h4>
          </div>
          <p class="text-sm text-paper-700 leading-relaxed font-sans">
            ${asset.description}
          </p>
          <div class="p-3.5 rounded-lg bg-paper-50 border border-paper-200 font-mono text-xs">
            <span class="text-paper-500 block text-xs uppercase font-bold mb-1">Production & Design Specs</span>
            <p class="text-paper-900 font-medium">${asset.specs}</p>
          </div>
          <div class="pt-2">
            <a href="https://appcable.com/" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 font-mono text-xs font-bold text-paper-950 hover:text-accent-blue transition-colors">
              <span>View Live Appcable Platform</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    refreshIcons();
  }

  tabsContainer.innerHTML = appcableAssets.map((a, idx) => `
    <button 
      data-asset="${a.id}"
      class="appcable-tab-btn p-3 rounded-xl border text-left transition-all ${
        idx === 0 ? 'bg-paper-950 text-white font-bold' : 'bg-white border-paper-200 text-paper-800 hover:border-paper-400 font-medium'
      }">
      <span class="font-mono font-bold text-xs block">${a.name}</span>
      <span class="text-xs opacity-80 truncate block">${a.tag}</span>
    </button>
  `).join('');

  renderAsset(appcableAssets[0]);

  tabsContainer.querySelectorAll('.appcable-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.appcable-tab-btn').forEach(b => {
        b.className = 'appcable-tab-btn p-3 rounded-xl border text-left transition-all bg-white border-paper-200 text-paper-800 hover:border-paper-400 font-medium';
      });
      btn.className = 'appcable-tab-btn p-3 rounded-xl border text-left transition-all bg-paper-950 text-white font-bold';
      const asset = appcableAssets.find(a => a.id === btn.getAttribute('data-asset'));
      if (asset) renderAsset(asset);
    });
  });
}

/* ==========================================================================
   DISCIPLINE FILTER SYSTEM
   ========================================================================== */
function initDisciplineFilter() {
  const filterBtns = document.querySelectorAll('.filter-discipline-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const discipline = btn.getAttribute('data-discipline');

      filterBtns.forEach(b => {
        b.className = 'filter-discipline-btn px-3 py-1 rounded-md border border-paper-200 bg-white text-paper-700 hover:text-paper-950 hover:border-paper-400 transition-all font-semibold shrink-0';
      });
      btn.className = 'filter-discipline-btn px-3 py-1 rounded-md border border-paper-950 bg-paper-950 text-white font-bold transition-all shrink-0 shadow-2xs';

      const cards = document.querySelectorAll('.story-card');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (discipline === 'all') {
          card.classList.remove('hidden');
          card.style.opacity = '1';
        } else if (
          (discipline === 'product-ux' && cat === 'product-ux') ||
          (discipline === 'brand-corp' && (cat === 'brand-corp' || cat === 'branding')) ||
          (discipline === 'commercial-posm' && (cat === 'commercial-posm' || cat === 'print-posm')) ||
          (discipline === 'creative-tech' && (cat === 'ai-systems' || cat === 'broadcast-video' || cat === 'media-motion'))
        ) {
          card.classList.remove('hidden');
          card.style.opacity = '1';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   6. VERIFIED CREDENTIALS & SKILLS
   ========================================================================== */
function renderCredentialsAndSkills() {
  const credsContainer = document.getElementById('credentials-list-container');
  const skillsContainer = document.getElementById('skills-matrix-container');

  if (credsContainer) {
    credsContainer.innerHTML = `
      <span class="font-mono text-xs uppercase tracking-wider text-paper-500 font-bold block mb-2">[VERIFIED CREDENTIALS & INSTITUTIONAL EVIDENCE]</span>
      <div class="space-y-3">
        ${verifiedCredentials.map(c => `
          <div class="p-4 rounded-xl border border-paper-200 bg-paper-50 flex items-start justify-between gap-3">
            <div>
              <h5 class="font-bold text-base text-paper-950">${c.title}</h5>
              <p class="font-mono text-xs text-paper-700 font-bold mt-0.5">${c.issuer} &middot; <strong class="text-paper-950">${c.value}</strong></p>
              <p class="text-xs text-paper-600 mt-1">${c.detail}</p>
            </div>
            <span class="font-mono text-xs font-bold text-paper-500 shrink-0">${c.year}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (skillsContainer) {
    skillsContainer.innerHTML = `
      <span class="font-mono text-xs uppercase tracking-wider text-paper-500 font-bold block mb-2">[FOUR CORE COMPETENCY DOMAINS]</span>
      <div class="space-y-4">
        ${skillDomains.map(d => `
          <div class="p-5 rounded-xl border border-paper-200 bg-white">
            <h4 class="font-bold text-base text-paper-950 mb-1">${d.title}</h4>
            <p class="text-xs text-paper-600 mb-4">${d.description}</p>
            <div class="space-y-2.5">
              ${d.skills.map(s => `
                <div>
                  <div class="flex justify-between font-mono text-xs mb-1">
                    <span class="text-paper-800 font-medium">${s.name}</span>
                    <span class="text-paper-950 font-bold">${s.level}%</span>
                  </div>
                  <div class="w-full h-1.5 bg-paper-150 rounded-full overflow-hidden">
                    <div class="h-full bg-paper-950 rounded-full" style="width: ${s.level}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

/* ==========================================================================
   7. LIVE GITHUB RADAR
   ========================================================================== */
async function fetchGitHubRepos() {
  const container = document.getElementById('github-repos-container');
  if (!container) return;

  const fallbackRepos = [
    {
      name: "ss_cam",
      description: "Windows deployment utility for SuamiSihat creative workstations — installs brand typography, palettes, asset libraries, and project folder generator.",
      language: "PowerShell / Shell",
      stargazers_count: 8,
      html_url: "https://github.com/SuamiSihat/ss_cam"
    },
    {
      name: "manaphassan_portfolio",
      description: "Interactive 19-year narrative career growth chronicle and systems monograph hosted on GitHub Pages.",
      language: "JavaScript",
      stargazers_count: 4,
      html_url: "https://github.com/manaphassan/manaphassan_portfolio"
    },
    {
      name: "ssDesignSystem",
      description: "Enterprise design system, tokenized components, and brand guidelines for SuamiSihat.",
      language: "Svelte",
      stargazers_count: 5,
      html_url: "https://github.com/manaphassan/ssDesignSystem"
    },
    {
      name: "bmb20",
      description: "MEENA Home AI 8-deck LCARS system deployed on DietPi Raspberry Pi 3B edge hardware.",
      language: "Python",
      stargazers_count: 7,
      html_url: "https://github.com/manaphassan/bmb20"
    }
  ];

  try {
    const res = await fetch('https://api.github.com/users/manaphassan/repos?sort=updated&per_page=4');
    if (!res.ok) throw new Error('Offline or rate limited');
    const data = await res.json();
    const repos = Array.isArray(data) && data.length > 0 ? data : fallbackRepos;
    renderRepos(repos);
  } catch (e) {
    renderRepos(fallbackRepos);
  }

  function renderRepos(list) {
    container.innerHTML = list.slice(0, 4).map(repo => `
      <a 
        href="${repo.html_url}" 
        target="_blank" 
        rel="noreferrer" 
        class="p-5 rounded-xl border border-paper-200 bg-paper-50 hover:bg-white hover:border-paper-400 transition-all flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-mono font-bold text-sm text-paper-950 group-hover:text-accent-blue transition-colors">
              ${repo.name}
            </span>
            <i data-lucide="external-link" class="w-4 h-4 text-paper-400 group-hover:text-paper-950 transition-colors"></i>
          </div>
          <p class="text-xs text-paper-700 line-clamp-2 leading-relaxed mb-4">
            ${repo.description || 'Public software and creative automation repository.'}
          </p>
        </div>
        <div class="pt-3 border-t border-paper-200 font-mono text-xs text-paper-600 flex justify-between font-medium">
          <span>${repo.language || 'Code'}</span>
          <span>★ ${repo.stargazers_count || 0}</span>
        </div>
      </a>
    `).join('');
    refreshIcons();
  }
}

/* ==========================================================================
   8. COMMAND PALETTE (Ctrl+K)
   ========================================================================== */
function initCommandPalette() {
  const dialog = document.getElementById('cmd-dialog');
  const btn = document.getElementById('btn-cmd-palette');
  const input = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');

  if (!dialog || !btn || !input || !results) return;

  const commands = [
    { title: "Download Executive CV (PDF)", cat: "Dossier", action: () => openResume() },
    { title: "JomParking® Platform (web.jomparking.com)", cat: "Live Platform", action: () => window.open('https://web.jomparking.com/', '_blank') },
    { title: "GoPayy+ Digital Payment (govicle.com/gopayy)", cat: "Live Platform", action: () => window.open('https://govicle.com/gopayy/', '_blank') },
    { title: "SuamiSihat™ Design System (Single Source of Truth)", cat: "Live System", action: () => window.open('https://assets.suamisihat.myds.me/', '_blank') },
    { title: "SuamiSihat ss_cam Workstation Tool (GitHub)", cat: "Code", action: () => window.open('https://github.com/SuamiSihat/ss_cam', '_blank') },
    { title: "LinkedIn Profile (linkedin.com/in/manaphassan)", cat: "Profile", action: () => window.open(externalProfiles.linkedin, '_blank') },
    { title: "Behance Portfolio (behance.net/manaphassan)", cat: "Profile", action: () => window.open(externalProfiles.behance, '_blank') },
    { title: "Borneo Showreel on YouTube", cat: "Media", action: () => window.open(externalProfiles.borneoShowreel, '_blank') },
    { title: "Jump to Act 01: Craft & Industrial Press Rigor", cat: "Story", action: () => { window.location.hash = '#act-01'; } },
    { title: "Jump to Act 02: Broadcast Media & KKM Award", cat: "Story", action: () => { window.location.hash = '#act-02'; } },
    { title: "Jump to Act 03: The 6-Entity Solo Operator (PICC/MIDF)", cat: "Story", action: () => { window.location.hash = '#act-03'; } },
    { title: "Jump to Act 04: National Smart City (JomParking)", cat: "Story", action: () => { window.location.hash = '#act-04'; } },
    { title: "Jump to Act 05: Creative Leadership & AI (SuamiSihat)", cat: "Story", action: () => { window.location.hash = '#act-05'; } }
  ];

  function renderMatches(q = '') {
    const query = q.toLowerCase().trim();
    const list = query === '' ? commands.slice(0, 8) : commands.filter(c => c.title.toLowerCase().includes(query) || c.cat.toLowerCase().includes(query));

    if (list.length === 0) {
      results.innerHTML = `<div class="p-4 text-center font-mono text-xs text-paper-500">[NO MATCHING RESULTS]</div>`;
      return;
    }

    results.innerHTML = list.map((item, idx) => `
      <div 
        data-idx="${idx}"
        class="cmd-row p-3 rounded-lg hover:bg-paper-100 cursor-pointer flex items-center justify-between transition-colors">
        <span class="font-sans text-sm font-semibold text-paper-950">${item.title}</span>
        <span class="font-mono text-xs px-2 py-0.5 rounded bg-paper-200 text-paper-800 font-bold">${item.cat}</span>
      </div>
    `).join('');

    results.querySelectorAll('.cmd-row').forEach(row => {
      row.addEventListener('click', () => {
        const idx = parseInt(row.getAttribute('data-idx'), 10);
        dialog.close();
        list[idx].action();
      });
    });
  }

  btn.addEventListener('click', () => {
    dialog.showModal();
    input.value = '';
    renderMatches('');
    setTimeout(() => input.focus(), 80);
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (dialog.open) {
        dialog.close();
      } else {
        dialog.showModal();
        input.value = '';
        renderMatches('');
        setTimeout(() => input.focus(), 80);
      }
    }
  });

  input.addEventListener('input', (e) => renderMatches(e.target.value));
}

/* ==========================================================================
   9. EXECUTIVE CV & CONTACT HANDLERS
   ========================================================================== */
function openResume() {
  const dialog = document.getElementById('resume-dialog');
  if (dialog) dialog.showModal();
}

function initResumeAndContact() {
  const openResumeBtns = [
    document.getElementById('btn-open-resume'),
    document.getElementById('btn-cta-resume')
  ];
  const closeResumeBtn = document.getElementById('btn-close-resume');
  const printResumeBtn = document.getElementById('btn-print-resume');
  const resumeDialog = document.getElementById('resume-dialog');

  openResumeBtns.forEach(btn => btn?.addEventListener('click', openResume));
  closeResumeBtn?.addEventListener('click', () => resumeDialog?.close());
  printResumeBtn?.addEventListener('click', () => window.print());

  // Close lightbox
  const lbClose = document.getElementById('lb-close');
  const lbDialog = document.getElementById('lightbox-dialog');
  lbClose?.addEventListener('click', () => lbDialog?.close());

  // Save vCard (.vcf)
  const saveVCardBtn = document.getElementById('btn-save-vcard');
  const saveVCardLabel = document.getElementById('save-vcard-label');

  saveVCardBtn?.addEventListener('click', () => {
    const vcardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Harussani Manaphassan',
      'N:Manaphassan;Harussani;;;',
      'TITLE:Head of Creatives · Product Design Lead · Brand Systems Architect',
      'ORG:SuamiSihat · Appcable',
      'EMAIL;TYPE=INTERNET;TYPE=WORK:harussani.manaphassan@gmail.com',
      'URL:https://manaphassan.github.io/manaphassan_portfolio/',
      'URL;TYPE=LinkedIn:https://www.linkedin.com/in/manaphassan',
      'URL;TYPE=Behance:https://www.behance.net/manaphassan',
      'URL;TYPE=GitHub:https://github.com/manaphassan',
      'ADR;TYPE=WORK:;;Banting • Cyberjaya • Shah Alam;Selangor;;;Malaysia',
      'NOTE:19-Year Career Growth Portfolio. Brand Architecture, Product UI/UX, Pre-Press Print, and Creative Leadership.',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Harussani_Manaphassan.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#0F172A', '#2563EB', '#10B981']
    });

    if (saveVCardLabel) {
      saveVCardLabel.textContent = "vCard Saved!";
      setTimeout(() => {
        saveVCardLabel.textContent = "Save vCard (.vcf)";
      }, 2500);
    }
  });
}

/* ==========================================================================
   10. ANIMATED SCROLL PROGRESS & TIMELINE SPINE SYSTEM
   ========================================================================== */
function initScrollProgressAndTimelineSpine() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const spineTrack = document.getElementById('timeline-spine-track');
  const spineProgress = document.getElementById('timeline-spine-progress');
  const chronicleContainer = document.getElementById('story-chronicle-container');
  const nodes = document.querySelectorAll('.timeline-node');

  function updateProgress() {
    // 1. Global top reading bar
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && maxScroll > 0) {
      const globalPercent = Math.min(100, Math.max(0, (scrollY / maxScroll) * 100));
      progressBar.style.width = `${globalPercent}%`;
    }

    // 2. Continuous timeline spine in chronicle
    if (chronicleContainer && spineProgress && spineTrack) {
      const containerRect = chronicleContainer.getBoundingClientRect();
      const trackHeight = spineTrack.offsetHeight;
      const windowCenter = window.innerHeight * 0.4;

      const scrolledIntoContainer = windowCenter - containerRect.top;
      let spinePercent = (scrolledIntoContainer / containerRect.height) * 100;
      spinePercent = Math.min(100, Math.max(0, spinePercent));
      spineProgress.style.height = `${(spinePercent / 100) * trackHeight}px`;

      // 3. Highlight timeline nodes as reader passes each act
      nodes.forEach(node => {
        const nodeRect = node.getBoundingClientRect();
        if (nodeRect.top <= window.innerHeight * 0.45) {
          node.classList.add('is-active');
        } else {
          node.classList.remove('is-active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderHeroMetrics();
  renderActProjects();
  initDisciplineFilter();
  initAppcableBrandShowcase();
  renderCredentialsAndSkills();
  fetchGitHubRepos();
  initScrollObserver();
  initScrollProgressAndTimelineSpine();
  initCommandPalette();
  initResumeAndContact();
  refreshIcons();
});
