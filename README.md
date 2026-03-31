# 2men.ai — AI Solutions That Work

Marketing website for 2men.ai. Built with Next.js (App Router), Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Form handling**: Formspree (endpoint: `mvgwprdv`)
- **Deployment**: Netlify (static export) or any static host

## Getting Started

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note**: If your project path contains spaces, Next.js dev server may have issues serving static assets. Copy the `site/` folder to a path without spaces for local development if needed.

## Build & Export

```bash
npm run build
```

Static output is written to `site/out/` — deploy this folder to any static host.

## Project Structure

```
site/
  src/
    app/
      layout.tsx          # Root layout, metadata, font loading
      page.tsx            # Page composition
      globals.css         # Tailwind config, custom theme, animations
    components/
      Navbar.tsx           # Fixed nav with mobile menu
      Hero.tsx             # Hero section
      Problem.tsx          # Problem framing (3 cards)
      Platform.tsx         # "Meet The Build Bot" — feature grid
      HowItWorks.tsx       # 3-step deployment flow
      WhyNotJustAI.tsx     # "Why not just use ChatGPT?" section
      WhyUs.tsx            # Differentiators grid
      SocialProof.tsx      # Credibility — domain areas
      CTA.tsx              # Call to action
      Contact.tsx          # Contact form (Formspree)
      Footer.tsx           # Footer
      ScrollFade.tsx       # Scroll-triggered fade-in animation
```

## Sections

1. **Hero** — "We build AI that solves real problems"
2. **Problem** — Trapped knowledge, cookie-cutter tools, AI slop
3. **Platform** — The Build Bot: NL search, cited sources, Skill Library, 8-layer context, multi-dataset, data sovereignty
4. **How It Works** — Ingest, configure, ask
5. **Why Not Just ChatGPT?** — The concept gap, three walls, managed service angle
6. **Why Us** — Speed, purpose-built, fast team, regulated industries, extensible, no lock-in
7. **Social Proof** — Aerospace & Defense, Government, Enterprise
8. **CTA** — Demo request
9. **Contact** — Form (Formspree) + email info@2men.ai

## Design

- **Palette**: Navy `#0f172a`, electric blue accent `#3b82f6`, white/slate text
- **Typography**: Inter (400–800)
- **Animations**: Scroll-triggered fade-in with stagger
- **Responsive**: Mobile-first, breakpoints at `md` (768px) and `lg` (1024px)

## Contact Form

Connected to Formspree endpoint `mvgwprdv`. Fields: Name, Company, Email, Timeline (dropdown), Project Description. Fallback email: info@2men.ai.

## Domain

Custom domain `2men.ai` configured via `CNAME` file.

## Repository

https://github.com/2men-ai/2Menwebsite
