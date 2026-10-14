# Yuzy — AI Product Builder & Content Creator

A dark, cinematic, editorial personal portfolio for **Yuzy** — AI product builder, content creator, and founder. Built to feel intentional and premium: apple-style liquid glass, a restrained black/white/zinc palette, large display typography, fine grain texture, a living ambient background, a custom desktop cursor, and smooth scroll-choreographed motion that respects `prefers-reduced-motion`.

> **Live:** https://yuzy-portfolio.vercel.app *(placeholder — update after deploying)*

## Tech Stack

- **[Next.js 14+](https://nextjs.org/)** (App Router, static export-ready)
- **[TypeScript](https://www.typescriptlang.org/)** — strict mode
- **[Tailwind CSS](https://tailwindcss.com/)** — design tokens via CSS variables
- **[Framer Motion](https://www.framer.com/motion/)** — hero reveals, scroll reveals, magnetic buttons, mobile menu
- **[Lucide React](https://lucide.dev/)** — icons
- **Google Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (labels)

## Features

- Floating apple-glass nav pill + custom desktop cursor (dot + lerped ring, `mix-blend-difference`)
- 3D mouse-tilt hero cutout — painterly GTA-leaning portrait grade, giant YUZY wordmark behind, tracking glint, counter-parallax, idle float (tgsidd-style)
- Living ambient background — drifting white dust canvas + soft glow orbs
- Cinematic hero with word-by-word blur/fade headline reveal and pointer-tracked glow
- Continuous marquee of glass phrase pills (pauses on hover)
- Venture-style project timeline with sticky titles and a glowing scroll progress rail
- Original abstract CSS visuals per project (incl. Handful VR) — no stock imagery
- Floating contact pods with staggered float animations (pause + lift on hover)
- Count-up stat cards, staggered reveals, magnetic CTA buttons with shine sweep
- Liquid-glass CTA/footer panels (gradient border recipe)
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
│   ├── Navbar.tsx             # Floating glass pill nav, scroll elevate, mobile menu
│   ├── Hero.tsx               # Headline reveal, pointer glow, CTAs, status badge
│   ├── Marquee.tsx            # Infinite glass-pill marquee (CSS-driven)
│   ├── About.tsx              # Copy + corner-bracket stat cards
│   ├── Projects.tsx           # Venture timeline + abstract visuals + scroll rail
│   ├── Content.tsx            # Building-in-public themes + Instagram liquid-glass CTA
│   ├── Stack.tsx              # Tool grid
│   ├── Now.tsx                # Current focus card (corner brackets)
│   ├── Contact.tsx            # Floating contact pods
│   ├── Footer.tsx             # Liquid-glass sitemap + back-to-top
│   ├── AmbientBackground.tsx  # Dust canvas + drifting glow orbs
│   ├── Cursor.tsx             # Custom dot + lerped ring cursor
│   └── ui/
│       ├── Reveal.tsx           # Scroll reveal wrapper (blur + x/y)
│       ├── MagneticButton.tsx   # Magnetic hover button + shine sweep
│       └── SectionHeading.tsx   # Glass-pill eyebrow + accent heading + rail
└── lib/
    └── data.ts           # All content, links, and project data
```

All copy, links, projects, and stack items live in `lib/data.ts` — update content there.

## License

© 2026 Yuzy. All rights reserved.

This portfolio's design, copy, and code were built for Yuzy's personal use. Please don't copy it wholesale — build your own thing.
