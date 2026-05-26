# Handoff: 2men.ai Website Redesign (v3)

## Overview

Full redesign of the 2men.ai marketing site, repositioned around the LinkedIn
copy ("Tribal knowledge, without the tribal.") and aligned to the parent-company
posture — 2men.ai as a company that **does the parsing/standards work**, with
**The Build Bot** as its flagship product (not a "venture").

Repo: `https://github.com/2menai/2Menwebsite`
Live site: `https://2men.ai` (Netlify, default branch `main`)
Current stack: Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript

## About the Design File

`index.html` in this folder is a **design reference**, not production code.
It is a single self-contained HTML file using CDN Tailwind-equivalent styles
inline. Your job is to **recreate this design in the existing Next.js +
Tailwind v4 codebase** at `site/`, replacing the existing components.

Fidelity: **High-fidelity.** Colors, copy, spacing, typography, and component
structure are final. Match pixel-by-pixel.

---

## Two Implementation Paths

### Path A — Port to React components (recommended)

Keep the Next.js setup. Replace each component file. Steps below.

### Path B — Replace Next.js with static HTML

Drop `index.html` at the **repo root** (overwriting the existing one),
keep `assets/buildbot-logo.webp` at repo root, delete or sideline the `site/`
folder, and update Netlify build config to publish from repo root instead of
running the Next.js build. **Only do this if the user explicitly asks for it.**
Default to Path A.

---

## Path A — File-by-file mapping

### Files to UPDATE

| File | Action |
|---|---|
| `site/src/app/page.tsx` | Replace imports + render order — see "New page.tsx" below |
| `site/src/app/layout.tsx` | Update `<title>` and `<meta name="description">`; load Inter weights 400–800 |
| `site/src/app/globals.css` | Replace theme tokens — see "Design Tokens" below |
| `site/src/components/Navbar.tsx` | New nav links (What we do · Track record · Product · Contact); CTA button label = "Visit The Build Bot →" linking to `https://thebuildbot.ai` |
| `site/src/components/Hero.tsx` | Rewrite — see "Sections / Screens" |
| `site/src/components/Footer.tsx` | Rewrite — dark `#050505` bg, brand on left, "Visit The Build Bot, our first venture →" link center, copyright right |

### Files to DELETE (replaced by new sections below)

- `site/src/components/About.tsx`
- `site/src/components/Approach.tsx`
- `site/src/components/HowWeOperate.tsx`
- `site/src/components/Ventures.tsx`
- `site/src/components/Comparison.tsx`
- `site/src/components/Services.tsx`
- `site/src/components/Team.tsx`
- `site/src/components/CTA.tsx`
- `site/src/components/Contact.tsx` (replaced by new Contact below)

### Files to CREATE

- `site/src/components/WhatWeDo.tsx` (§ 01)
- `site/src/components/TrackRecord.tsx` (§ 02)
- `site/src/components/Product.tsx` (§ 03)
- `site/src/components/WhoWeListenFor.tsx` (§ 04)
- `site/src/components/Contact.tsx` (§ 05, simpler than before)

### Assets to ADD

- `site/public/buildbot-logo.webp` — copy from `assets/buildbot-logo.webp` in this handoff folder

### New `page.tsx` order

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import TrackRecord from "@/components/TrackRecord";
import Product from "@/components/Product";
import WhoWeListenFor from "@/components/WhoWeListenFor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <TrackRecord />
        <Product />
        <WhoWeListenFor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

---

## Design Tokens (drop into `globals.css` under `@theme`)

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;

  /* Surfaces — dark navy */
  --color-bg:         #0a0a0a;   /* page */
  --color-bg-mist:    #0e1422;   /* alt band */
  --color-bg-paper:   #111827;   /* alt band 2 */
  --color-bg-deep:    #050505;   /* footer */

  /* Text */
  --color-ink:        #ffffff;
  --color-ink-soft:   #cbd5e1;   /* slate-300 */
  --color-muted:      #94a3b8;   /* slate-400 */
  --color-subtle:     rgba(255,255,255,.4);

  /* Rules */
  --color-rule:        rgba(255,255,255,.07);
  --color-rule-strong: rgba(255,255,255,.14);

  /* Accent — original 2men.ai electric blue */
  --color-accent:        #3b82f6;
  --color-accent-light:  #60a5fa;
  --color-accent-dark:   #2563eb;
  --color-accent-glyph:  #0086ff;  /* logo glyph fill */
  --color-accent-tint:   rgba(59,130,246,.10);
}
```

**Type weights:** headlines = 800; section h3 = 700; brand wordmark = 700.
Drop the Fraunces/JetBrains Mono attempt — Inter only.
Headline letter-spacing: `-.028em` (display), `-.02em` (smaller).

---

## Sections / Screens

### Navbar
- Fixed top, full width, height 64px.
- Background: transparent at top of page; on scroll past 12px, fade in `rgba(10,10,10,.82)` with `backdrop-filter: blur(10px)` and bottom border `var(--color-rule)`.
- Left: 2men.ai diamond glyph SVG (fill `#0086ff`) + wordmark "2men.ai" (Inter 700, 18px, `-.02em` tracking).
- Center (md+): nav links — "What we do", "Track record", "Product", "Contact". Muted color, 13.5px, weight 500. Hover → white.
- Right: primary button "Visit The Build Bot →" → `https://thebuildbot.ai` (target _blank).
- Mobile: collapse to hamburger menu (already exists in current Navbar.tsx — keep that pattern).

### Hero
- Padding: 160px top / 96px bottom.
- Background: radial blue glows top-right + bottom-left, base `#0a0a0a`.
- Pill at top: `§ 00 · 2men.ai · Huntsville, AL · est. 2025` — JetBrains-style spacing in uppercase Inter (letter-spacing .22em, 11px, weight 700, muted color, accent on `§ 00`).
- **H1:** "Tribal knowledge,<br/><span class='accent'>without the tribal.</span>" — Inter 800, clamp(40px, 6.4vw, 80px), line-height 1.02, tracking `-.035em`, max-width 14ch. `.accent` = `var(--color-accent)`.
- Deck (subhead): 19px, line-height 1.55, color `--color-muted`, max-width 56ch:
  > "We turn the data nobody can reach — scanned specs, handwritten notes, the binders Jim used to keep on his desk — into knowledge your organization can actually query. Then we build the AI on top of it."
- Two buttons:
  - Primary "What we do →" (anchors to `#what`).
  - Ghost "Try our product · The Build Bot" (anchors to `https://thebuildbot.ai`, target _blank).
- Meta grid (3 cols on md+, 1 col mobile), top border `rgba(255,255,255,.07)`, padding-top 24px, mt 56px:
  - **What we do** — Parse. Standardize. Build & operate.
  - **Our product** — `thebuildbot.ai` (link, accent color, dotted underline)
  - **Where** — Huntsville, AL · founded 2025

### § 01 — What We Do (`#what`)
- Section background: linear-gradient(180deg, `#0e1422`, `#0a0a0a`). Padding 96px y.
- Section head: broadsheet marker `§ 01 · What we do` (accent on section number) + H2:
  > "The work most AI projects skip.<br/><span class='accent'>We start there.</span>"
- Lede (right column of section head): max-width 60ch, color muted, 17px:
  > "Most companies have everything they need to make AI useful — it's just stuck in PDFs, drawings, spreadsheets, and the heads of their longest-tenured people. We do the unglamorous work to get it out, organize it, and put it where every team in your company can build on it."
- **Three pillars** (CSS grid, 3 cols on lg, 1 col on mobile). Each pillar:
  - Top border `rgba(255,255,255,.14)`, padding-top 28px.
  - Eyebrow: "01 · Parse" (mono-styled, uppercase, .22em tracking, 11px, weight 700, accent color).
  - H3 (Inter 700, 22px, `-.015em`): "Reach what others can't." / "One foundation. Many apps." / "Ship the proof."
  - Body (14.5px, line-height 1.6, muted):
    - **01 · Parse:** "Scanned specs. Handwritten notes. Complex tables. Technical drawings. The documents generic OCR gives up on — we extract in context, with citations back to the source."
    - **02 · Standardize:** "Schemas, vocabularies, governance, access — defined once with your SMEs. Search, RAG, agents, analytics, internal tools — all build on the same substrate."
    - **03 · Build & operate:** "We don't sell the foundation as theory. We build the products on top of it — internal tools, agents, vertical workflows — and run them in production with SLAs."

### § 02 — Track Record (`#track`)
- Background: `#0a0a0a`. Padding 96px y.
- Section head: broadsheet `§ 02 · Track record` + H2:
  > "We've been here before.<br/><span class='accent'>We know what ships.</span>"
- Lede:
  > "The people building these companies have shipped AI and infrastructure in the places where mistakes are expensive — government, defense, healthcare, aerospace, enterprise IT. That's the bar every venture starts at."
- **4-stat grid** (grid-cols-4 lg / grid-cols-2 md / grid-cols-1 sm). Each stat:
  - Top border `rgba(255,255,255,.14)`, padding-top 28px.
  - Eyebrow: "01", "02", "03", "04" (mono style, accent).
  - Big number (Inter 700, 44px, line-height 1, accent color): `10+`, `4`, `AWS`, `HSV`
  - Body (14.5px, muted):
    - **10+** — "Years shipping enterprise infrastructure on AWS, Terraform, and the boring-but-critical stack underneath."
    - **4** — "Sectors we've delivered into: government, defense & aerospace, healthcare, enterprise IT."
    - **AWS** — "Native on AWS — Terraform, CI/CD, monitoring, compliance baked in. Deploy to your environment or ours."
    - **HSV** — "Headquartered in Huntsville — the aerospace and defense capital. Senior operators, not generalists."
- **Credentials block** (below stats, mt 56px, border-top, pt 28px):
  - Eyebrow "What we've shipped" (accent color, .22em tracking).
  - Italic statement (Inter 500 italic, clamp(22px, 2.4vw, 30px), line-height 1.3, white, max-width 56ch):
    > "AWS architectures handling regulated workloads. AI systems in production where the answer has to be right. Knowledge platforms for organizations whose oldest documents predate the cloud."

### § 03 — Product (`#product`)
- Background: linear-gradient mist. Padding 96px y.
- Section head: `§ 03 · Our product` + H2:
  > "The Build Bot.<br/><span class='accent'>Built on everything above.</span>"
- Lede:
  > "Our flagship product. The Build Bot turns scattered AI experiments into governed workflows, reusable agents, and real production use — with the parsing, standards, and infrastructure already wired up."
- **Featured card** (CSS grid 2-col on lg, stacked on mobile). Border `rgba(255,255,255,.14)`, rounded-22px, overflow hidden, drop shadow `0 40px 80px -40px rgba(0,0,0,.6)`.
  - **Left (copy):** padding 44px/40px.
    - Header row: BuildBot logo (36×36, rounded-lg, glow-blue drop shadow) + "The Build Bot" wordmark (Inter 700, 22px).
    - Tag chips (mono uppercase, .22em tracking, 10px, accent bg + accent text, rounded-full, 5px×10px):
      - "● Live" (green dot prefix)
      - "Our product"
      - "AI substrate · agents · vertical workflows"
    - H3 (Inter 700, clamp(26px, 3vw, 34px), `-.025em`): "Stop letting every team invent AI from scratch."
    - Body: "The Build Bot turns scattered AI experiments into governed workflows, reusable agents, and real production use. Knowledge graph, guided ingestion, traceable agent runs, 1,000+ integrations — wired up before you start."
    - Quote (Inter italic 500, 16px, left border accent 2px, padding-left 16px, ink-soft): "Most AI pilots fail because nobody mapped the knowledge. The Build Bot maps it first."
    - Actions: primary "Visit thebuildbot.ai →" (external) + ghost "Open the free playground" (`https://thebuildbot.ai#playground`).
  - **Right (visual):** padding 44px/40px, gradient background blue→navy, border-left rule. Contains a "browser mockup":
    - Browser chrome: 3 colored dots (red/yellow/green), URL pill "thebuildbot.ai".
    - Body shows BuildBot logo + name, then a `> Spin up a vertical workflow [Run ↵]` styled prompt box, then 3 feature chips: "K · 01 Knowledge graph", "K · 02 Guided ingestion", "A · 01 Agent workflows".
    - See `index.html` `.browser-mock` styles for exact rendering.

### § 04 — Who We Listen For (`#about`)
- Background `#111827`. Padding 96px y.
- Section head: `§ 04 · Who we listen for` + H2:
  > "If this sounds like you,<br/><span class='accent'>we should talk.</span>"
- Lede:
  > "2men.ai works with teams who have something deep — and something at risk of being lost. We parse it, standardize it, build on it. Sometimes we hand the result back to your team. Sometimes it becomes a product like The Build Bot."
- **Two quote cards** (2-col grid, stacked mobile). Each:
  - Top border `rgba(255,255,255,.14)`, padding-top 24px.
  - Eyebrow (accent, mono): "Decades of documents" / "Experts about to retire"
  - Blockquote (Inter italic 600, 20px, line-height 1.4, white, `-.015em`):
    - "We have everything. Nobody can find anything."
    - "When Jim leaves, half our institutional memory leaves with him."
  - Body (14.5px, muted):
    - "The spec library. The SharePoint sprawl. The binders nobody opens. We pull what matters out and make it queryable — and standards-aligned, so every future tool can use it."
    - "Thirty-year veterans walk out the door with everything in their head. We capture what's on paper — and what they marked up — before it leaves the building."

### § 05 — Contact (`#contact`)
- Background: linear-gradient(180deg, `#0a0a0a`, `#111827`). Border-top rule-strong. Padding 88px y.
- Two-column grid (1.2fr / 1fr, stacked mobile). Bottom-aligned.
- **Left:**
  - Broadsheet `§ 05 · Get in touch`.
  - H2: "Looking for the product?<br/><span class='accent'>It's The Build Bot.</span>"
  - Body: "If you want to use what we've built, head to thebuildbot.ai — free playground, no signup. If you want to talk about a partnership, a new venture, or the work behind the work, write us directly."
  - Buttons: primary "Visit The Build Bot →" (ext) + ghost "Email the parent company" (`mailto:info@2men.ai`).
- **Right:** key/value list, each row separated by bottom border:
  - Email — `info@2men.ai`
  - Product — `thebuildbot.ai`
  - LinkedIn — `/company/2menai` → `https://www.linkedin.com/company/2menai/`
  - Headquarters — Huntsville, Alabama
  - Reply time — Within 24 hours, usually same day
- Each `k` label is mono uppercase .22em-spaced 10.5px subtle gray (min-width 80px); each `v` is 16px white with accent-colored links + dotted underline.

### Footer
- Background `#050505`, padding 28px y, top border rule.
- Row: brand (glyph + wordmark "2men.ai", white) | link "Visit The Build Bot, our first venture →" | mono-uppercase "© 2026 · Two Men and AI · Huntsville, AL"

---

## Buttons (global)

```css
.btn        { display: inline-flex; gap: 8px; padding: 13px 22px; border-radius: 11px; font: 600 14px/1 Inter; transition: all .15s ease; }
.btn-primary{ background: var(--color-accent); color: #fff; box-shadow: 0 6px 18px -8px rgba(59,130,246,.55); }
.btn-primary:hover { background: var(--color-accent-dark); transform: translateY(-1px); box-shadow: 0 12px 28px -10px rgba(59,130,246,.6); }
.btn-ghost  { border: 1px solid var(--color-rule-strong); color: var(--color-ink); }
.btn-ghost:hover { background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.28); }
```

## Background texture (optional, subtle)

Fixed-position pseudo-element on `<body>`:
```css
body::before {
  content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 1;
  opacity: .5;
  background-image: radial-gradient(circle at 50% 50%, rgba(59,130,246,.05) 1px, transparent 1.5px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%);
}
body > * { position: relative; z-index: 2; }
```

## Animations

- Fade-in observer: any element with class `fade` starts at `opacity: 0; transform: translateY(20px)` and animates to `opacity: 1; transform: translateY(0)` over 0.7s ease when 12% intersects the viewport. Apply to every section's `.section-head` and content groups.
- Buttons: 0.15s transform + box-shadow.
- Nav: 0.22s background + backdrop-filter when scrolled state toggles.

## Existing Contact Form

The old `Contact.tsx` had a Formspree-wired form (`https://formspree.io/f/mvgwprdv`). The new design **does not include a form** — just the channels list + buttons. If the user wants the form back, restore it from `reference_old/2men v2 (parsing-pitch).html` (search for `contactForm`).

---

## Files in this handoff

- `index.html` — full design reference (single self-contained HTML file)
- `assets/buildbot-logo.webp` — BuildBot product logo (copy to `site/public/buildbot-logo.webp`)
- `reference_old/2men v1 (venture-builder).html` — earlier holdco-framing version (for reference)
- `reference_old/2men v2 (parsing-pitch).html` — earlier parsing-service version (has the Formspree contact form)
- `README.md` — this file

---

## Deploy

Default branch is `main`. Push to `main` → Netlify auto-deploys. CNAME at repo root maps `2men.ai` → Netlify.

If the Next.js build is configured in `site/`, no Netlify config changes are needed for Path A. For Path B (static HTML), update `netlify.toml` (if it exists) or Netlify dashboard settings to publish from repo root and skip the build command.
