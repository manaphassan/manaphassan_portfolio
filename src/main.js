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
  Palette 
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
  Globe, Linkedin, Palette
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
      [Verified Impact]: ${p.impact}
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
   5. AI & SYSTEMS LAB (APPCABLE AGENTS INSPECTOR)
   ========================================================================== */
const agentsData = [
  {
    id: 'nova',
    name: 'NOVA',
    role: 'Operations & Orchestration',
    mission: 'Asynchronous job dispatching, server health telemetry, and automated task scheduling across Appcable enterprise infrastructure.',
    tech: 'Automated Webhooks · Docker · DietPi · Telegram',
    trigger: 'Event Bus & Telemetry'
  },
  {
    id: 'aria',
    name: 'ARIA',
    role: 'Communications & Multi-Channel Dispatch',
    mission: 'Customer engagement dispatch, Evolution API WhatsApp webhooks, Telegram alerts, and executive briefing memos.',
    tech: 'Evolution API · Telegram · Claude 3.5 Sonnet',
    trigger: 'Incoming Inquiries & Alerts'
  },
  {
    id: 'fina',
    name: 'FINA',
    role: 'Financial Intelligence & Auditing',
    mission: 'Reconciles multi-company recurring billing commitments, audits runway horizons, and tracks operating margins.',
    tech: 'NocoBase · BigQuery · Master Ledgers',
    trigger: 'Fiscal Close Routines'
  },
  {
    id: 'mira',
    name: 'MIRA',
    role: 'Marketing Intelligence & Ad Matrix',
    mission: 'Monitors TikTok/Meta campaign conversion rates, parses ad hooks, and compiles shot lists for video production.',
    tech: 'Meta API · TikTok Ads · Claude API',
    trigger: 'Hourly Campaign Sync'
  },
  {
    id: 'axel',
    name: 'AXEL',
    role: 'Autonomous Execution & Releases',
    mission: 'Automated data transformation, code deployments, GitHub releases, and synchronized backup snapshots.',
    tech: 'Bash · Python CLI · GitHub API · Rsync',
    trigger: 'Task Queue Work Orders'
  }
];

function initAgentTopology() {
  const container = document.getElementById('agent-nodes-grid');
  const inspector = document.getElementById('agent-node-inspector');
  if (!container || !inspector) return;

  function renderInspector(agent) {
    inspector.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-paper-200 gap-1 mb-3">
        <div>
          <span class="font-mono text-xs text-accent-blue font-bold uppercase tracking-wider">[ACTIVE AGENT NODE]</span>
          <h5 class="font-bold text-base text-paper-950">
            ${agent.name} &mdash; <span class="font-sans text-sm font-semibold text-paper-700">${agent.role}</span>
          </h5>
        </div>
        <span class="font-mono text-xs text-accent-emerald font-bold">● ONLINE</span>
      </div>
      <p class="text-sm text-paper-800 leading-relaxed mb-4 font-sans">${agent.mission}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
        <div class="p-3.5 rounded-lg bg-paper-50 border border-paper-200">
          <span class="text-paper-500 block text-xs uppercase font-bold">Tech Stack</span>
          <strong class="text-paper-950 text-sm">${agent.tech}</strong>
        </div>
        <div class="p-3.5 rounded-lg bg-paper-50 border border-paper-200">
          <span class="text-paper-500 block text-xs uppercase font-bold">Trigger Protocol</span>
          <strong class="text-paper-950 text-sm">${agent.trigger}</strong>
        </div>
      </div>
    `;
  }

  container.innerHTML = agentsData.map((a, idx) => `
    <button 
      data-agent="${a.id}"
      class="agent-btn p-3 rounded-xl border text-left transition-all ${
        idx === 0 ? 'bg-paper-950 text-white font-bold' : 'bg-white border-paper-200 text-paper-800 hover:border-paper-400 font-medium'
      }">
      <span class="font-mono font-bold text-xs block">${a.name}</span>
      <span class="text-xs opacity-80 truncate block">${a.role.split('&')[0]}</span>
    </button>
  `).join('');

  renderInspector(agentsData[0]);

  container.querySelectorAll('.agent-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.agent-btn').forEach(b => {
        b.className = 'agent-btn p-3 rounded-xl border text-left transition-all bg-white border-paper-200 text-paper-800 hover:border-paper-400 font-medium';
      });
      btn.className = 'agent-btn p-3 rounded-xl border text-left transition-all bg-paper-950 text-white font-bold';
      const agent = agentsData.find(a => a.id === btn.getAttribute('data-agent'));
      if (agent) renderInspector(agent);
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

  // Copy contact dossier
  const copyBtn = document.getElementById('btn-copy-dossier');
  const copyLabel = document.getElementById('copy-dossier-label');

  copyBtn?.addEventListener('click', async () => {
    const dossierText = `MUHAMMAD HARUSSANI BIN ABDUL MANAP
Head of Creatives · Chief Brand Officer · Systems Architect
Location: Banting & Shah Alam, Selangor, Malaysia
Portfolio: https://manaphassan.github.io/manaphassan_portfolio/
LinkedIn: https://www.linkedin.com/in/manaphassan
Behance: https://www.behance.net/manaphassan
GitHub: https://github.com/manaphassan
YouTube: https://www.youtube.com/@harussani.manaphassan
Borneo Showreel: https://www.youtube.com/watch?v=xmuCcunYNGU&list=PL1BCB093F66106553`;

    try {
      await navigator.clipboard.writeText(dossierText);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#09090B', '#1D4ED8', '#047857']
      });

      if (copyLabel) {
        copyLabel.textContent = "Dossier Copied!";
        setTimeout(() => copyLabel.textContent = "Copy Contact Dossier", 2500);
      }
    } catch (e) {
      alert(dossierText);
    }
  });
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderHeroMetrics();
  renderActProjects();
  initAgentTopology();
  renderCredentialsAndSkills();
  fetchGitHubRepos();
  initScrollObserver();
  initCommandPalette();
  initResumeAndContact();
  refreshIcons();
});
