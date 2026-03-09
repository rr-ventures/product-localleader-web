# Design Brief — Version A

You are redesigning the Local Leader website (a local SEO agency for Australian trades businesses).

## Your scope

You must ONLY edit files inside these two locations:
- `src/app/version-a/page.tsx` — the page that assembles all sections
- `src/components-a/` — the folder containing all components (Header, Hero, Pillars, Results, HowItWorks, FAQ, Contact, Footer)

DO NOT touch any files outside of these two locations. The original site lives in `src/components/` and `src/app/page.tsx` — leave those alone.

You may add new components inside `src/components-a/` if needed. You may update `src/app/version-a/page.tsx` to import them.

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- No external UI libraries — use only Tailwind utility classes and inline SVGs for icons

## The site content

Local Leader helps trades and home service businesses (plumbers, electricians, painters, roofers, tilers, builders, landscapers, HVAC techs) dominate local search. Three pillars: Google Rankings, Google Maps, Reputation Management. The CTA is "Book a Call" linking to mailto:hello@localleader.com.au.

Keep all the existing business content, messaging, and copy. You are redesigning the visual presentation, not rewriting the business.

## Design direction: Bold & High-Energy

Redesign every component with this direction:

- **Dark theme** — dark backgrounds (near-black, deep navy, charcoal), light text
- **Bold, oversized typography** — large headings, heavy font weights, tight tracking
- **High contrast accents** — use a single electric accent color (bright green, electric blue, or vivid orange — pick one) for CTAs, highlights, and key numbers
- **Sharp edges** — no rounded corners on cards, use sharp rectangles and hard lines
- **Geometric patterns** — subtle grid lines, dots, or angular shapes as background texture
- **Strong visual hierarchy** — big section numbers, dramatic spacing between sections
- **CTAs that pop** — accent-colored buttons with hover effects, high contrast against dark backgrounds
- **Mobile-first** — must look great on mobile, with proper touch targets and readable text

Start by reading every file in `src/components-a/` to understand the current code, then redesign each component according to this brief. Make sure the final result is a cohesive, polished website — not just individual components in isolation.

After you're done, verify there are no TypeScript or import errors by reviewing the files.

The site should be viewable at `/version-a` when running locally.
