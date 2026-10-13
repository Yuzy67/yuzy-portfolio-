# Yuzy — AI Product Builder & Content Creator

A dark, cinematic, editorial personal portfolio for **Yuzy** — AI product builder, content creator, and founder. Built to feel intentional and premium: large display typography, a restrained near-black palette with a single violet accent, fine grain texture, soft radial glows, and smooth scroll-choreographed motion that respects `prefers-reduced-motion`.

> **Live:** https://yuzy-portfolio.vercel.app *(placeholder — update after deploying)*

## Tech Stack

- **[Next.js 14+](https://nextjs.org/)** (App Router, static export-ready)
- **[TypeScript](https://www.typescriptlang.org/)** — strict mode
- **[Tailwind CSS](https://tailwindcss.com/)** — design tokens via CSS variables
- **[Framer Motion](https://www.framer.com/motion/)** — hero reveals, scroll reveals, magnetic buttons, mobile menu
- **[Lucide React](https://lucide.dev/)** — icons
- **Google Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (labels)

## Features

- Cinematic hero with word-by-word blur/fade headline reveal
- Continuous marquee (pauses on hover) with edge-fade masking
- Original abstract CSS/SVG visuals per project — no stock imagery
- Count-up stat cards, staggered card reveals, magnetic CTA buttons
- Fully responsive, mobile-first; accessible nav with keyboard + Escape support
- SEO metadata, Open Graph/Twitter cards, JSON-LD person schema, `robots.ts`
- No backend, no database, no API keys — Vercel-ready out of the box

## Local Setup

```bash
git clone https://github.com/Yuzy67/yuzy-portfolio-.git
cd yuzy-portfolio-
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run lint
npm run build
npm start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the `yuzy-portfolio-` repo.
3. Vercel auto-detects Next.js — keep the defaults and click **Deploy**.
4. After the first deploy, set `siteConfig.url` in `lib/data.ts` to your production domain so metadata resolves correctly.

## Project Structure

```
├── app/
│   ├── layout.tsx        # Fonts, metadata, JSON-LD, grain overlay
│   ├── page.tsx          # Section composition
│   ├── globals.css       # Design tokens, keyframes, utilities
│   ├── icon.svg          # Favicon
│   └── robots.ts         # SEO robots rules
├── components/
│   ├── Navbar.tsx        # Sticky nav, scroll blur, mobile menu
│   ├── Hero.tsx          # Headline reveal, CTAs, status badge
│   ├── Marquee.tsx       # Infinite scroll strip (CSS-driven)
│   ├── About.tsx         # Copy + count-up stat cards
│   ├── Projects.tsx      # Project cards + original abstract visuals
│   ├── Content.tsx       # Building-in-public themes + Instagram CTA
│   ├── Stack.tsx         # Tool grid
│   ├── Now.tsx           # Current focus card
│   ├── Contact.tsx       # CTA + social buttons
│   ├── Footer.tsx        # Copyright + back-to-top
│   └── ui/
│       ├── Reveal.tsx           # Scroll reveal wrapper
│       ├── MagneticButton.tsx   # Magnetic hover button
│       └── SectionHeading.tsx   # Numbered eyebrow + heading
└── lib/
    └── data.ts           # All content, links, and project data
```

All copy, links, projects, and stack items live in `lib/data.ts` — update content there.

## License

© 2026 Yuzy. All rights reserved.

This portfolio's design, copy, and code were built for Yuzy's personal use. Please don't copy it wholesale — build your own thing.
