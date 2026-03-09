# Design Brief — Version C

You are redesigning the Local Leader website (a local SEO agency for Australian trades businesses).

## Your scope

You must ONLY edit files inside these two locations:
- `src/app/version-c/page.tsx` — the page that assembles all sections
- `src/components-c/` — the folder containing all components (Header, Hero, Pillars, Results, HowItWorks, FAQ, Contact, Footer)

DO NOT touch any files outside of these two locations. The original site lives in `src/components/` and `src/app/page.tsx` — leave those alone.

You may add new components inside `src/components-c/` if needed. You may update `src/app/version-c/page.tsx` to import them.

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- No external UI libraries — use only Tailwind utility classes and inline SVGs for icons

## The site content

Local Leader helps trades and home service businesses (plumbers, electricians, painters, roofers, tilers, builders, landscapers, HVAC techs) dominate local search. Three pillars: Google Rankings, Google Maps, Reputation Management. The CTA is "Book a Call" linking to mailto:hello@localleader.com.au.

Keep all the existing business content, messaging, and copy. You are redesigning the visual presentation, not rewriting the business.

## Design direction: Warm & Approachable

Redesign every component with this direction:

- **Warm color palette** — creamy off-whites, warm grays, with a rich warm accent (burnt orange, terracotta, or deep amber) for CTAs and highlights
- **Friendly, human typography** — slightly rounded font feel, comfortable sizing, warm and inviting headings (not corporate or cold)
- **Illustrated/icon-heavy** — use inline SVG icons generously for each feature, step, and pillar. Make them part of the visual language, not an afterthought
- **Layered backgrounds** — use subtle background color shifts between sections (alternating warm white, light cream, pale warm gray) to create visual rhythm without hard borders
- **Conversational tone in layout** — asymmetric layouts where appropriate, left-aligned headings with offset content blocks, not everything rigidly centered
- **Testimonial-ready** — add a placeholder testimonials section between Results and HowItWorks with 2-3 example quotes (use realistic placeholder text for Australian tradies)
- **Chunky, friendly buttons** — large CTAs with rounded corners, warm accent colors, playful hover states (slight scale or color shift)
- **Visible personality** — the site should feel like talking to a real person, not a corporation. Approachable, down-to-earth, Aussie
- **Mobile-first** — must look great on mobile, with proper touch targets and readable text

Start by reading every file in `src/components-c/` to understand the current code, then redesign each component according to this brief. Make sure the final result is a cohesive, polished website — not just individual components in isolation.

After you're done, verify there are no TypeScript or import errors by reviewing the files.

The site should be viewable at `/version-c` when running locally.
