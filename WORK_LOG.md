# Two Men and AI Website - Work Log

**Project**: 2men.ai Marketing Website
**Repository**: https://github.com/2men-ai/2Menwebsite
**Domain**: 2men.ai

---

## Session 3 (March 31, 2026): Full Website Redesign

### What changed
Complete redesign from static HTML to Next.js + Tailwind CSS. Repositioned from manufacturing consulting to AI venture group building enterprise AI platforms.

### Stack
- **Before**: Single `index.html` with embedded CSS/JS
- **After**: Next.js 15 (App Router), Tailwind CSS v4, TypeScript, static export

### New site structure (9 sections)
1. **Hero** — "We build AI that solves real problems"
2. **Problem** — Three pain points: trapped knowledge, cookie-cutter tools, AI slop
3. **Platform** — "Meet The Build Bot" — 6 feature cards (NL search, cited sources, Skill Library, 8-layer context, any data/any domain, your infrastructure)
4. **How It Works** — 3-step flow: ingest, configure skills, get answers
5. **Why Not Just ChatGPT?** — Founder quote, three walls (don't know what you don't know / no infrastructure / no person behind it), reframe bullets, managed service pitch
6. **Why Us** — 6 differentiators (speed, purpose-built, fast team, regulated industries, extensible, no lock-in)
7. **Social Proof** — Domain credibility: Aerospace & Defense, Government, Enterprise
8. **CTA** — Demo request + email fallback
9. **Contact** — Formspree form (same endpoint mvgwprdv), fields: Name, Company, Email, Timeline, Project Description

### Design
- **Palette**: Dark navy (#0f172a) + electric blue accent (#3b82f6)
- **Font**: Inter (Google Fonts)
- **Animations**: Scroll-triggered fade-in with stagger
- **Responsive**: Mobile-first
- **Background**: Mesh gradient + grid pattern on hero

### Key decisions
- Dropped all manufacturing-specific language — positioned as broad AI solutions
- Removed Huntsville/local team references — don't want to sound small
- Removed NASA/MAPTIS/MMPDS — deal not landed yet
- Removed Granta competitor references
- Renamed product from Jana to Ocho-AI, then to The Build Bot
- Contact email: info@2men.ai (no personal emails)
- Kept Formspree integration (endpoint: mvgwprdv)
- Static export (`output: "export"` in next.config.ts) for easy deployment

### File inventory
```
site/
  src/app/layout.tsx
  src/app/page.tsx
  src/app/globals.css
  src/components/Navbar.tsx
  src/components/Hero.tsx
  src/components/Problem.tsx
  src/components/Platform.tsx
  src/components/HowItWorks.tsx
  src/components/WhyNotJustAI.tsx
  src/components/WhyUs.tsx
  src/components/SocialProof.tsx
  src/components/CTA.tsx
  src/components/Contact.tsx
  src/components/Footer.tsx
  src/components/ScrollFade.tsx
  package.json
  tsconfig.json
  postcss.config.mjs
  next.config.ts
```

### Infrastructure note
Next.js dev server has issues serving static CSS when the project path contains spaces (`2men website`). For local dev, copy `site/` to a space-free path or use `npm run build` + a static file server.

---

## Session 2 (January 21, 2025): Contact Form & Domain Updates

- Removed phone number field from contact form
- Updated email from hello@twomenandai.com to info@2men.ai
- Connected Formspree endpoint (mvgwprdv)
- Updated domain config from twomenandai.com to 2men.ai (CNAME)

## Session 1 (January 21, 2025): Initial Website

- Created static HTML website (index.html) for manufacturing technology consulting
- Netlify deployment config (netlify.toml)
- Documentation (README.md, docs/update-guide.md)
- GitHub repository setup and initial deployment
