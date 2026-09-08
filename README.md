# Harussani Manaphassan — Career Portfolio & Architecture Hub

> **Live Deployment:** [https://manaphassan.github.io/manaphassan_portfolio/](https://manaphassan.github.io/manaphassan_portfolio/)  
> **Repository:** [manaphassan/manaphassan_portfolio](https://github.com/manaphassan/manaphassan_portfolio)  
> **Identity:** Head of Creatives &middot; Chief Brand Officer &middot; Brand Systems Architect &middot; AI Systems Architect

---

## 🧭 Overview

An interactive, high-performance narrative portfolio showcasing 19 years of compounding executive leadership, product strategy, brand governance, and autonomous AI systems engineering.

### Key Interactive Features
- **3-Lens Mode Switcher**: View the journey from an Executive & Product Strategy angle, Brand & Creative Direction angle, or AI & Systems Lab angle.
- **19-Year Career Arc (2007–2026)**: Chronological timeline with proof badges (RM100K MDEC grant, Rice Bowl Startup Award, KKM/FINAS PSA Award).
- **Curated Work Gallery with Lightbox**: Client mockups spanning PICC, MIDF Property, TH Hotel, Bollymuzik.fm, SuamiSihat packaging, and outdoor billboards.
- **AI & Systems Lab**: Interactive 5-agent cognitive architecture diagram (`NOVA`, `ARIA`, `FINA`, `MIRA`, `AXEL`), Google Veo AI video production pipeline, and MEENA Home AI (Raspberry Pi LCARS).
- **Cinematic Borneo Media Hub**: Embedded video theater streaming the Borneo showreel and broadcast documentary portfolio.
- **Live GitHub Radar**: Real-time repository telemetry via GitHub API.
- **Interactive Command Palette (`Ctrl+K`)**: Rapid keyboard search across all projects, eras, and contact actions.
- **Executive CV Modal with Print Styles**: Clean 1-page executive resume ready to print or save to PDF.

---

## 🛠️ Tech Stack

- **Framework / Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Visuals:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Audio:** Web Audio API (native browser synthesized ambient soundscape)
- **Hosting:** GitHub Pages with automated GitHub Actions CI/CD (`.github/workflows/deploy.yml`)

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build static production bundle:**
   ```bash
   npm run build
   ```

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📦 GitHub Pages Deployment

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.

### First-Time Setup on GitHub:
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: initial interactive portfolio release"
   git branch -M main
   git remote add origin https://github.com/manaphassan/manaphassan_portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings &rarr; Pages**.
   - Under **Build and deployment &rarr; Source**, select **GitHub Actions**.
3. Every push to `main` will now automatically build and deploy to:
   `https://manaphassan.github.io/manaphassan_portfolio/`
>>>>>>> a739537 (feat: story-driven 19-year portfolio with enhanced readable typography, reorganized mywork assets, and live project links)
