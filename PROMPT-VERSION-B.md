# Design Brief — Version B

You are redesigning the Local Leader website (a local SEO agency for Australian trades businesses).

## Your scope

You must ONLY edit files inside these two locations:
- `src/app/version-b/page.tsx` — the page that assembles all sections
- `src/components-b/` — the folder containing all components (Header, Hero, Pillars, Results, HowItWorks, FAQ, Contact, Footer)

DO NOT touch any files outside of these two locations. The original site lives in `src/components/` and `src/app/page.tsx` — leave those alone.

You may add new components inside `src/components-b/` if needed. You may update `src/app/version-b/page.tsx` to import them.

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- No external UI libraries — use only Tailwind utility classes and inline SVGs for icons

## The site content

Local Leader helps trades and home service businesses (plumbers, electricians, painters, roofers, tilers, builders, landscapers, HVAC techs) dominate local search. Three pillars: Google Rankings, Google Maps, Reputation Management. The CTA is "Book a Call" linking to mailto:hello@localleader.com.au.

Keep all the existing business content, messaging, and copy. You are redesigning the visual presentation, not rewriting the business.

## Design direction: Clean & Premium

Redesign every component with this direction:

- **Light, airy palette** — white and off-white backgrounds, generous whitespace, soft grays for secondary text
- **Refined typography** — elegant, well-spaced headings with lighter font weights (medium/semibold, not bold), generous line height
- **Subtle color accents** — muted sage green or warm stone/sand as the accent color, used sparingly for CTAs and highlights
- **Rounded, soft shapes** — large border radius on cards (rounded-2xl or rounded-3xl), soft shadows (shadow-sm), pill-shaped buttons
- **Card-based layout** — content organized in clean cards with subtle borders or soft shadows, not harsh grid lines
- **Plenty of breathing room** — large padding, generous gaps between sections, content that doesn't feel cramped
- **Trust signals** — the design should feel professional, premium, trustworthy — like a high-end consultancy, not a cheap service
- **Smooth interactions** — subtle hover transitions, gentle color shifts, nothing jarring
- **Mobile-first** — must look great on mobile, with proper touch targets and readable text

Start by reading every file in `src/components-b/` to understand the current code, then redesign each component according to this brief. Make sure the final result is a cohesive, polished website — not just individual components in isolation.

After you're done, verify there are no TypeScript or import errors by reviewing the files.

The site should be viewable at `/version-b` when running locally.
