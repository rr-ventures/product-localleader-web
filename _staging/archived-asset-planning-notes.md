# Archived Asset Planning Notes
> This is an archive of previous planning work. The build agent should **not** follow these specific asset-to-version assignments by default.
> Graphics and logos now live in shared buckets under `_staging/graphics/` and `_staging/logos/`, and the planning/build agents should choose the most appropriate assets after reviewing the reference screenshots.

These notes are preserved only as fallback context in case you want to revisit the earlier prescriptive approach.

---

## Previous Build Brief

_Archived from `_temp/v3-v4-v5-build-brief.md`_

# Local Leader — V3, V4, V5 Build Brief

> **Purpose:** This document is the comprehensive planning input for the build agent(s) creating versions 3, 4, and 5 of the Local Leader website. It maps each reference site to a Local Leader adaptation, defines the section structure, assigns existing graphics, identifies graphic gaps, and provides Gemini image generation prompts for every missing asset.
>
> **Owner decisions captured:**
> - V3 reference is dark-mode but Local Leader's version will be **light-themed** — keep the layout, switch the palette.
> - Product UI screenshots (V4, V5 references) will be replaced with **existing proof graphics where possible** or **newly generated Local Leader data/proof visuals** where gaps exist.
> - Pricing: **$500/month early bird** (crossed out $2,000). No $999 reference.
> - Section structure: **Follow the build guide** as the structural backbone but keep it **minimal and conversion-focused** — hero, proof, pillars, pricing, testimonials, FAQ, final CTA. Skip the founder and problem sections unless the owner specifically requests them for a version. Confirm section list with owner before building.
> - Image generation tool: **Google Gemini / Imagen**.
> - Testimonial avatars: Use **initials/icons** (no AI headshots needed).

---

## CONFIRMED SECTION ORDER (all 3 versions)

This minimal conversion-focused structure applies to all three versions unless otherwise noted:

1. **Hero** — Headline + subheadline + primary CTA + proof visual
2. **Social Proof Strip** — Star rating, review count, lightweight trust signal
3. **Three Pillars** — Maps, Search, Reviews (outcome-led, one graphic per pillar)
4. **Pricing** — Single tier ($500/month early bird), optional Tier 2 mention
5. **Testimonials** — Placeholder quotes with initials-based avatars
6. **FAQ** — Accordion format, objection handling
7. **Final CTA** — Urgency framing, repeat primary CTA

**Sections deliberately omitted** (can be added later if owner requests):
- Problem section (the hero subheadline handles the pain framing)
- How It Works (the pillars section covers this implicitly)
- About the Founder
- Case Studies (testimonials section serves this role for now)

---

## VERSION 3 — Light Premium with Structured Cards

### Reference
Obima (AI agency) — dark-mode site with glossy 3D icons, structured card grid for services, testimonial carousel, 3-tier pricing, FAQ accordion.

### Adaptation for Local Leader
- **Palette:** Light background (#f8f9fa or warm off-white), dark text, blue/teal accent (from logo family-05 map pin). Cards with subtle borders and soft shadows.
- **Layout direction:** Keep the Obima card-grid layout for the pillars section. Keep the structured pricing cards. Keep the FAQ accordion layout.
- **Hero:** Left-aligned headline with a floating proof graphic on the right (existing asset or generated).
- **Font pairing:** DM Sans + Lora (already configured in LayoutV3).
- **Logo:** `family-05-map-pin-wordmark` (teal map pin icon — matches the blue accent).

### Existing Graphics to Use
| Section | Asset | File |
|---------|-------|------|
| Hero (proof visual) | Proof cards stack | `hero-and-cards/proof-cards-stack-minimal-01.jpg` |
| Pillar 1 (Maps) | Map pack #1 result | `hero-and-cards/map-pack-number-one-result-proof-card-01.jpg` |
| Pillar 2 (Search) | Page one ranking | `hero-and-cards/page-one-search-ranking-proof-card-01.jpg` |
| Pillar 3 (Reviews) | Review growth timeline | `review-and-proof/verified-review-growth-timeline-01.jpg` |
| Proof strip | Could use stats from any before/after | N/A — build as CSS/text stats |

### Graphics Gaps (need to generate)
| ID | Description | Where Used | Why Needed |
|----|-------------|-----------|------------|
| v3-hero-accent | Abstract light-themed accent shape for the hero background — soft gradient blob or geometric pattern, light blue/teal tones on white | Hero background | The Obima reference has a large 3D metallic ring; we need a light-themed equivalent that feels premium without being dark |
| v3-pillar-icons | Three flat-illustrated premium icons: (1) a Google Maps pin with a #1 badge, (2) a search results page with an arrow pointing to position 1, (3) a cluster of 5-star reviews with a growth arrow | Pillars card grid | The reference uses 3D glossy icons per card; these replace them with on-brand flat illustrations |
| v3-stats-bar | A horizontal strip graphic showing 3 floating stat cards: "+47 calls this month", "4.9 stars (215 reviews)", "#1 in Maps — your suburb" — light background, clean sans-serif, subtle shadows | Social proof strip | Gives the proof strip a visual anchor instead of just text |

---

## VERSION 4 — Warm Minimal with Floating UI Cards

### Reference
Grovia (warm SaaS) — cream/beige background, rounded pill nav, serif+sans typography, floating product UI cards in hero, tabbed features, gradient pricing header, case study cards, FAQ, contact form.

### Adaptation for Local Leader
- **Palette:** Warm cream/beige background (#f5f0e8 or similar), dark charcoal text, black primary buttons, warm yellow/gold accent for highlights.
- **Layout direction:** Keep the split hero (headline left, floating cards right). Keep the 3-step process section from the reference. Simplify the tabbed features into the pillars section. Keep the gradient-header pricing. Skip the contact form (CTA links to external booking).
- **Hero:** Left-aligned headline with floating Google Maps / review data cards on the right.
- **Font pairing:** Plus Jakarta Sans + Crimson Pro (already configured in LayoutV4).
- **Logo:** `family-04-wordmark-rounded-medium-domain` (softer rounded mark fits the warm aesthetic).

### Existing Graphics to Use
| Section | Asset | File |
|---------|-------|------|
| Hero (floating card 1) | Google Maps before/after | `before-after-google-maps/gold-coast-plumbing-google-maps-before-after-01.jpg` |
| Pillar 1 detail | Three core outcomes | `explainers-and-pillars/local-seo-three-core-outcomes-pillars-01.jpg` |
| Proof section | Before/after split | `before-after-google-maps/brisbane-drain-masters-gbp-before-after-01.jpg` |

### Graphics Gaps (need to generate)
| ID | Description | Where Used | Why Needed |
|----|-------------|-----------|------------|
| v4-hero-card-rankings | A clean floating card (rounded corners, soft shadow, cream background) showing a mini ranking dashboard: "Your Business — #1 in Maps, 4.9 stars, 215 reviews, +47 calls this month". Chart showing upward trend. Light, warm, data-forward. | Hero right side (top card) | Replaces the Grovia "Customers" list card — needs to feel like looking at actual client data |
| v4-hero-card-calls | A second floating card showing "Weekly Calls" with a small bar chart trending upward. Warm colour scheme, Monday-Sunday labels. Accent colour gold/yellow. | Hero right side (bottom card) | Replaces the Grovia "Daily Average 2h 20m" analytics card |
| v4-process-icons | Three simple illustrated icons for the 3-step process: (1) phone/calendar for "Book a call", (2) clipboard/checklist for "We build your plan", (3) phone ringing with upward arrow for "Your phone starts ringing". Flat line-art style, warm charcoal on cream. | How It Works / 3-step | The reference has inline graphics per step; we need clean icons |
| v4-pricing-header-bg | A subtle warm gradient or abstract pattern for the pricing section header — blending from warm cream to a soft rose/coral tint, similar to the Grovia pricing gradient. No text. | Pricing section background | Gives the pricing section the same premium gradient treatment as the reference |

---

## VERSION 5 — Clean Editorial with Dashboard Proof

### Reference
Dreelio (freelancer SaaS) — light blue gradient hero, large centered headline, full dashboard screenshot below, logo cloud, alternating left-right feature sections with UI screenshots, testimonials with hero quote + cards, 3-tier pricing, clean footer.

### Adaptation for Local Leader
- **Palette:** Light blue-to-white gradient hero, transitioning to warm off-white for the body. Clean black text, blue accent for CTAs.
- **Layout direction:** Keep the centered headline hero with a large proof visual below. Keep the alternating left-right sections for the pillars. Keep the hero testimonial quote + cards layout. Simplify pricing to match the single-tier model.
- **Hero:** Centered headline above a large proof graphic (dashboard-style or before/after composite).
- **Font pairing:** Outfit + Source Serif 4 (already configured in LayoutV5).
- **Logo:** `family-01-wordmark-rounded-bold-domain` (bold, confident, fits the editorial weight).

### Existing Graphics to Use
| Section | Asset | File |
|---------|-------|------|
| Hero (large proof visual) | Performance dashboard cards | `hero-and-cards/performance-dashboard-proof-cards-01.jpg` |
| Pillar 1 (left-right) | Map pack result card | `hero-and-cards/map-pack-number-one-result-proof-card-01.jpg` |
| Pillar 2 (left-right) | Page one ranking card | `hero-and-cards/page-one-search-ranking-proof-card-01.jpg` |
| Pillar 3 (left-right) | Review growth to leadership | `review-and-proof/review-growth-to-market-leadership-01.jpg` |
| Proof section | Before/after split | `before-after-google-maps/aussie-tradie-services-gbp-before-after-split-01.jpg` |

### Graphics Gaps (need to generate)
| ID | Description | Where Used | Why Needed |
|----|-------------|-----------|------------|
| v5-hero-dashboard | A full-width "Local Leader client dashboard" mockup. Light background. Shows: a Google Maps ranking grid (green = top 3, grey = not ranking), a review count card (4.9 stars, 215 reviews), a calls/leads chart trending upward, and a sidebar with the tradie business name "Apex Plumbing — Sydney". Clean, data-forward, no heavy styling. Should feel like a real analytics platform the client logs into. | Hero — large visual below the headline | The Dreelio reference uses a full product dashboard screenshot as its centerpiece; this is the Local Leader equivalent |
| v5-pillar-google-search | An illustration of a Google Search results page showing "Apex Plumbing Sydney" at position 1 in organic results, with a green highlight and an upward arrow badge. Clean, editorial, light background. Not a real screenshot — a stylised, designed version. | Pillar 2 — right side of the alternating layout | Each Dreelio feature section has a large UI panel; this replaces the project management screenshot |
| v5-pillar-review-engine | An illustration showing the review collection flow: job completed → automated SMS sent → customer taps 5 stars → review appears on Google. Clean flowchart/diagram style, light blue accents, minimal icons. | Pillar 3 — right side of the alternating layout | Replaces the Dreelio financial management screenshot with a Local Leader-specific process visual |
| v5-logo-cloud | A set of 5-6 fictional Australian tradie business logos in greyscale. Names like "Apex Plumbing", "Summit Electrical", "Coastal Roofing", "Pro Landscaping", "Metro Builders". Simple wordmark-style, different font weights. | Logo cloud strip below hero | The reference has a logo cloud; we need one that feels like real tradie clients |

---

## GEMINI IMAGE GENERATION PROMPTS

### Prompt Style Notes
- All prompts target **Google Gemini / Imagen**.
- Specify **light backgrounds** (white, off-white, light blue, or warm cream depending on the version).
- Specify **no text in the image** unless the text is integral to the graphic (like stat cards or search results). Gemini struggles with text accuracy, so the build agent should overlay text via HTML/CSS where possible.
- Request **clean, professional, corporate/SaaS quality** — not cartoonish, not overly decorated.
- Request **landscape orientation (16:9 or 3:2)** for hero graphics and **square (1:1)** for card graphics.

---

### V3 Prompts

**v3-hero-accent**
```
Create a subtle abstract decorative background element for a premium light-themed website hero section. Soft gradient mesh blending light blue (#e8f4f8), teal (#14b8a6), and white. Organic flowing shapes like a soft wave or gentle aurora. No text, no icons, no objects. Clean, airy, sophisticated. The element should work as a background accent behind a headline on a white page. Landscape orientation, 16:9 aspect ratio. High resolution, clean edges.
```

**v3-pillar-icons (generate 3 separately)**

Prompt 1 — Maps icon:
```
A clean flat-illustrated icon on a white background. A stylised Google Maps location pin in teal/blue (#0d9488) with a gold "#1" badge overlaid on the pin. Simple, geometric, minimal detail. No text other than the #1. Square format, 1:1 aspect ratio. Professional, corporate quality. Suitable for a website card graphic.
```

Prompt 2 — Search icon:
```
A clean flat-illustrated icon on a white background. A stylised Google Search results page shown at an angle, with the top result highlighted in teal/blue (#0d9488) and a small upward arrow indicating first position. Simplified, no readable text — just coloured blocks representing search result entries. Square format, 1:1 aspect ratio. Professional, minimal.
```

Prompt 3 — Reviews icon:
```
A clean flat-illustrated icon on a white background. Five gold stars (4.9 rating) with a small upward growth arrow in teal (#0d9488) indicating review count increasing. Below the stars, a subtle cluster of small review card shapes. Square format, 1:1 aspect ratio. Professional, corporate quality. No text.
```

**v3-stats-bar**
```
A horizontal strip graphic showing three floating stat cards side by side on a light grey (#f8f9fa) background. Each card has rounded corners, a white background, and a subtle shadow. Card 1: a phone icon with "+47" in large bold text. Card 2: five gold stars with "4.9" in bold. Card 3: a map pin icon with "#1" in bold. No other text — the build agent will add labels via HTML. Clean, minimal, professional. Landscape orientation, 4:1 aspect ratio (very wide). High resolution.
```

---

### V4 Prompts

**v4-hero-card-rankings**
```
A floating UI card mockup on a transparent or very light cream (#faf5eb) background. The card has rounded corners (16px radius), a white background, and a soft shadow. Inside the card: at the top, a bold heading area (use a dark grey block, no readable text). Below, a small grid/heatmap showing green cells (representing top 3 rankings) and grey cells (not ranking). To the right, a small line chart trending upward in teal/blue. At the bottom, three small metric blocks with coloured dots (green, gold, blue). Professional SaaS dashboard aesthetic. Clean, warm, data-forward. Portrait orientation, 3:4 aspect ratio. High resolution.
```

**v4-hero-card-calls**
```
A floating UI card mockup on a transparent or very light cream (#faf5eb) background. The card has rounded corners, white background, soft shadow. Inside: a small bar chart showing 7 bars (Monday to Sunday) in warm gold/yellow (#f59e0b) and teal (#14b8a6), trending upward across the week. A large bold number area at the top (use a dark block, no readable text). Clean, warm, minimal. Square format, 1:1 aspect ratio. Professional quality.
```

**v4-process-icons (generate 3 separately)**

Prompt 1 — Book a call:
```
A minimal line-art icon on a warm cream (#faf5eb) background. A smartphone with a calendar/clock symbol, suggesting booking a call. Drawn in dark charcoal (#1e293b) with thin lines (2px stroke). No fills, no gradients. Simple and elegant. Square, 1:1. High resolution.
```

Prompt 2 — We build your plan:
```
A minimal line-art icon on a warm cream (#faf5eb) background. A clipboard with three checkmark items and a small magnifying glass, suggesting analysis and strategy planning. Dark charcoal (#1e293b), thin lines (2px stroke). No fills. Square, 1:1. High resolution.
```

Prompt 3 — Phone starts ringing:
```
A minimal line-art icon on a warm cream (#faf5eb) background. A ringing smartphone with sound waves emanating from it and a small upward arrow beside it, suggesting incoming calls and growth. Dark charcoal (#1e293b), thin lines (2px stroke). No fills. Square, 1:1. High resolution.
```

**v4-pricing-header-bg**
```
A subtle abstract gradient background for a website pricing section. Blending from warm cream (#f5f0e8) on the left to a soft rose/coral tint (#fce4e0) on the right, with a gentle purple (#ede5f5) accent in the center. Smooth, no hard edges, no patterns, no objects, no text. Should feel warm, premium, and inviting. Landscape, 16:9 aspect ratio. High resolution.
```

---

### V5 Prompts

**v5-hero-dashboard**
```
A full-width mockup of a professional analytics dashboard for a local SEO business. Light background (#f0f4ff fading to white). The dashboard shows: (1) a sidebar with navigation items represented as grey blocks, (2) a main content area with a ranking heatmap grid (green cells for top rankings, light grey for others), (3) a card showing a star rating (use 5 star shapes, 4 filled gold, 1 partially filled), (4) a line chart trending upward over 6 months in blue, (5) metric cards at the top showing large numbers with small trend arrows. Clean, professional, SaaS quality. No readable text — use grey blocks where text would go. The build agent will overlay real text via HTML. Landscape, 16:9 aspect ratio. High resolution. Light, airy, editorial feel.
```

**v5-pillar-google-search**
```
A stylised illustration of a Google Search results page. Light background. A search bar at the top with a coloured Google logo placeholder. Below, 3-4 search result entries shown as card blocks. The top result is highlighted with a green/teal (#0d9488) left border and a small gold badge. Other results are grey/muted. A small upward arrow next to the top result. Clean, editorial, not a real screenshot — a designed representation. No readable text (use grey lines for text placeholders). Landscape, 4:3 aspect ratio. Professional quality.
```

**v5-pillar-review-engine**
```
A clean flowchart-style illustration showing a review collection process. Light background (#f0f4ff). Four steps flowing left to right connected by arrows: (1) a wrench/tool icon representing "job complete", (2) a smartphone with a message bubble representing "automated SMS sent", (3) a hand tapping 5 gold stars representing "customer leaves review", (4) a Google 'G' logo with a star representing "review appears on Google". Flat illustration style, light blue and teal accents, minimal detail. Landscape, 16:9 aspect ratio. Professional, clean.
```

**v5-logo-cloud**
```
A set of 6 fictional business wordmark logos arranged in a horizontal row on a white background. The logos should look like real Australian trade businesses: vary the font weights (bold, light, serif, sans-serif), include subtle icon hints (a small wrench, a lightning bolt, a roof shape, a leaf) integrated into some of the wordmarks. All logos in medium grey (#9ca3af) — greyscale only. Names are not important (use abstract letter shapes or very short placeholder text). The overall strip should feel like a "trusted by" client logo cloud. Landscape, 6:1 aspect ratio (very wide). Clean, professional.
```

---

## SUMMARY — TOTAL NEW GRAPHICS NEEDED

| Version | Count | IDs |
|---------|-------|-----|
| V3 | 5 | v3-hero-accent, v3-pillar-icon-maps, v3-pillar-icon-search, v3-pillar-icon-reviews, v3-stats-bar |
| V4 | 6 | v4-hero-card-rankings, v4-hero-card-calls, v4-process-icon-call, v4-process-icon-plan, v4-process-icon-ringing, v4-pricing-header-bg |
| V5 | 4 | v5-hero-dashboard, v5-pillar-google-search, v5-pillar-review-engine, v5-logo-cloud |
| **Total** | **15** | |

Plus **29 existing graphics** and **12 existing logos** already in the brand library.

---

## NEXT STEPS

1. **Owner reviews this brief** and confirms section list, graphic selections, and prompts.
2. **Owner generates the 15 graphics** using the Gemini prompts above.
3. **Approved graphics are curated** into `_temp/brand/graphics/planning-ready/` with a single source-of-truth manifest at `_temp/brand/graphics/planning-ready/PLANNING_READY_ASSET_MAP.md`.
4. **Raw generated files remain** in `_temp/brand/graphics/generated/` for reference only.
5. **Planning agent** uses this brief plus the planning-ready asset map to write the per-version implementation plans.
6. **Build agent** implements one version at a time, starting with v3.


---

## Previous Planning-Ready Asset Map

_Archived from `_temp/brand/graphics/planning-ready/PLANNING_READY_ASSET_MAP.md`_

# Planning-Ready Asset Map

This file is the single source of truth for approved graphics and logos for `v3`, `v4`, and `v5`.

Use these files when planning or building. Do not browse the wider asset library unless this file calls out a missing gap.

## Version 3

### Approved logo
- `v3/logo/logo-primary-map-pin-wordmark.jpg`

### Approved existing graphics
- Hero proof visual:
  - `v3/existing/hero-proof-cards-stack-minimal.jpg`
- Pillar 1:
  - `v3/existing/pillar-maps-number-one-result-card.jpg`
- Pillar 2:
  - `v3/existing/pillar-search-page-one-ranking-card.jpg`
- Pillar 3:
  - `v3/existing/pillar-reviews-growth-timeline.jpg`

### Approved generated graphics
- `v3/generated/v3-hero-accent-teal-wave.png`
- `v3/generated/v3-pillar-icon-maps-pin-number1.jpg`
- `v3/generated/v3-pillar-icon-search-results-page.jpg`
- `v3/generated/v3-pillar-icon-reviews-stars-growth.png`
- `v3/generated/v3-stats-bar-calls-rating-ranking.png`

### Notes
- Use the generated pillar icons if the build leans more illustrative.
- Use the existing proof cards if the build leans more data-forward.
- Avoid the alternate maps icon unless the primary JPG renders poorly.

## Version 4

### Approved logo
- `v4/logo/logo-primary-rounded-medium-wordmark.jpg`

### Approved existing graphics
- Hero supporting proof:
  - `v4/existing/hero-floating-proof-gold-coast-plumbing-before-after.jpg`
- Pillars support:
  - `v4/existing/pillars-three-core-outcomes.jpg`
- Proof section:
  - `v4/existing/proof-brisbane-drain-masters-before-after.jpg`

### Approved generated graphics
- `v4/generated/v4-hero-card-rankings-heatmap.jpg`
- `v4/generated/v4-process-icon-plan-clipboard.jpg`
- `v4/generated/v4-pricing-header-bg-warm-gradient.jpg`

### Open gaps to solve in build
- `v4-hero-card-calls`
  - Recommendation: build as HTML/CSS instead of generating another image.
- `v4-process-icon-call`
  - Recommendation: use inline SVG/icon component.
- `v4-process-icon-ringing`
  - Recommendation: use inline SVG/icon component.

### Notes
- The warm gradient JPG is the primary pricing background.
- Keep the version warm, light, and minimal; do not drift into app-dashboard overload.

## Version 5

### Approved logo
- `v5/logo/logo-primary-rounded-bold-wordmark.jpg`

### Approved existing graphics
- Hero fallback proof visual:
  - `v5/existing/hero-performance-dashboard-proof-cards.jpg`
- Pillar 1:
  - `v5/existing/pillar-maps-number-one-result-card.jpg`
- Pillar 2 fallback:
  - `v5/existing/pillar-search-page-one-ranking-card.jpg`
- Pillar 3 fallback:
  - `v5/existing/pillar-reviews-market-leadership-growth.jpg`
- Proof section:
  - `v5/existing/proof-aussie-tradie-services-before-after.jpg`

### Approved generated graphics
- `v5/generated/v5-hero-dashboard-seo-analytics.jpg`
- `v5/generated/v5-pillar-review-engine-flowchart.jpg`

### Reuse from another version
- `v5-pillar-google-search`
  - Reuse `../v3/generated/v3-pillar-icon-search-results-page.jpg`

### Open gaps to solve in build
- `v5-logo-cloud`
  - Recommendation: build as HTML/CSS text-based logo cloud, not a static image.

### Notes
- Prefer the generated hero dashboard over the existing hero fallback.
- Use the existing search proof card only if the reused v3 generated search asset does not suit the layout.

## Alternates And Archive

These are intentionally excluded from the main planning-ready version folders:

- `../archive/alternates/v3-pillar-icon-maps-pin-number1-alt.png`
- `../archive/alternates/v4-pricing-header-bg-warm-gradient-alt.png`

Use them only if the approved primary file has rendering or compression issues.


---

## Previous Generated Asset Map

_Archived from `_temp/brand/graphics/generated/GENERATED_ASSET_MAP.md`_

# Generated Graphics — Asset Map

> This file documents the raw generated output pool.
> For planning and build work, prefer `_temp/brand/graphics/planning-ready/PLANNING_READY_ASSET_MAP.md`.

Maps each generated Gemini image to its brief ID, version, and intended section placement.

## V3 — Light Premium with Structured Cards

| Brief ID | File | Section | Notes |
|----------|------|---------|-------|
| v3-hero-accent | `v3/v3-hero-accent-teal-wave.png` | Hero background accent | Soft teal/blue gradient wave on white. Use as a CSS background-image behind the hero headline. |
| v3-pillar-icon-maps | `v3/v3-pillar-icon-maps-pin-number1.jpg` | Pillar 1 card (Google Maps) | Teal map pin with gold #1 badge. Primary version. |
| v3-pillar-icon-maps (alt) | `v3/v3-pillar-icon-maps-pin-number1-alt.png` | Pillar 1 card (Google Maps) | PNG variant of the same icon. Use whichever renders better at the target size. |
| v3-pillar-icon-search | `v3/v3-pillar-icon-search-results-page.jpg` | Pillar 2 card (Google Search) | Stylised Google Search results page with teal #1 highlight and gold badge. |
| v3-pillar-icon-reviews | `v3/v3-pillar-icon-reviews-stars-growth.png` | Pillar 3 card (Reviews) | Gold stars with teal growth arrow and review card cluster. |
| v3-stats-bar | `v3/v3-stats-bar-calls-rating-ranking.png` | Social proof strip | Three floating stat cards: +47 calls, 4.9 stars, #1 ranking. Use as-is or overlay refined text via HTML. |

## V4 — Warm Minimal with Floating UI Cards

| Brief ID | File | Section | Notes |
|----------|------|---------|-------|
| v4-hero-card-rankings | `v4/v4-hero-card-rankings-heatmap.jpg` | Hero right side (floating card) | Ranking heatmap card with trend line and metric dots on warm cream background. |
| v4-process-icon-plan | `v4/v4-process-icon-plan-clipboard.jpg` | How It Works step 2 | Line-art clipboard with checkmarks and magnifying glass on cream. |
| v4-pricing-header-bg | `v4/v4-pricing-header-bg-warm-gradient.jpg` | Pricing section background | Warm cream-to-rose-to-purple gradient. Primary version. |
| v4-pricing-header-bg (alt) | `v4/v4-pricing-header-bg-warm-gradient-alt.png` | Pricing section background | PNG variant — identical visual. Use whichever compresses smaller. |

## V5 — Clean Editorial with Dashboard Proof

| Brief ID | File | Section | Notes |
|----------|------|---------|-------|
| v5-hero-dashboard | `v5/v5-hero-dashboard-seo-analytics.jpg` | Hero — large visual below headline | Full analytics dashboard mockup: ranking heatmap, star rating, line chart, sidebar nav, metric cards. This is the centerpiece visual for v5's hero section. |
| v5-pillar-review-engine | `v5/v5-pillar-review-engine-flowchart.jpg` | Pillar 3 — right side alternating layout | Four-step review collection flowchart: job complete → SMS → customer reviews → Google. Clean teal/dark-blue illustration. |

## Gaps Still Open (not generated or cut for quality)

| Brief ID | Version | Description | Recommendation |
|----------|---------|-------------|----------------|
| v4-hero-card-calls | V4 | Weekly calls bar chart card | Build agent can create this as a CSS/HTML component with a simple bar chart — no image needed |
| v4-process-icon-call | V4 | Phone/calendar icon for "Book a call" step | Build agent can use an inline SVG icon (e.g. Lucide `phone` or `calendar`) |
| v4-process-icon-ringing | V4 | Ringing phone icon for "Phone starts ringing" step | Build agent can use an inline SVG icon (e.g. Lucide `phone-incoming`) |
| v5-pillar-google-search | V5 | Stylised Google Search results illustration | Reuse the v3 asset `v3-pillar-icon-search-results-page.jpg` which serves the same purpose |
| v5-logo-cloud | V5 | Fictional tradie business logos in greyscale | Build agent should create these as styled text in HTML/CSS (e.g. "Apex Plumbing", "Summit Electrical") — more flexible than a static image |


---

## Previous Rollout Plan

_Archived from `_temp/site-version-rollout-plan.md`_

# Local Leader Multi-Version Rollout Plan

This file is the starting point for the next planning agent.

## Goal

Prepare and deliver five Local Leader landing page tracks:

- `v1` - existing page, aesthetic updates only
- `v2` - existing page, aesthetic updates only
- `v3` - new design inspired by uploaded reference screenshots
- `v4` - new design inspired by uploaded reference screenshots
- `v5` - new design inspired by uploaded reference screenshots

## Build Rules

- Use Local Leader branding, offer, and voice.
- Pair the March 2026 build guide with the March 2026 brand context doc.
- Keep each version isolated:
  - own route
  - own layout
  - own components
- Use uploaded version-specific screenshots as design inspiration, not as direct site content.
- Keep the site light, mobile-first, and easy to edit.

## Inputs For The Planning Agent

- Primary implementation guide:
  - `_temp/brand/artifacts/local-leader-website-build-guide-mar2026.md`
- Primary brand/copy reference:
  - `_temp/brand/artifacts/local-leader-brand-context-mar2026.md`
- Asset map:
  - `_temp/brand/ASSET_INVENTORY.md`
- Planning-ready versioned asset map:
  - `_temp/brand/graphics/planning-ready/PLANNING_READY_ASSET_MAP.md`
- Version-specific references:
  - `_temp/v1/`
  - `_temp/v2/`
  - `_temp/v3/`
  - `_temp/v4/`
  - `_temp/v5/`

## Planning Deliverables

### `v1`
- Review uploaded screenshots and text notes.
- Define only the aesthetic changes to make.
- Preserve the existing information architecture unless the references clearly require a structural change.

### `v2`
- Review uploaded screenshots and text notes.
- Define only the aesthetic changes to make.
- Preserve the existing premium minimal positioning unless the references suggest a stronger direction.

### `v3`
- Build a new concept from the uploaded references.
- Recommend a section order based on the build guide.
- Select a logo family and 2 to 4 supporting graphics from the organised asset library.

### `v4`
- Build a second distinct concept from the uploaded references.
- Use a different visual rhythm and font pairing from `v3`.
- Select a separate asset mix where possible.

### `v5`
- Build a third distinct concept from the uploaded references.
- Make sure it does not collapse into the same structure or styling as `v3` or `v4`.
- Select a separate asset mix where possible.

## Recommended Build Order

1. Review all uploaded version folders and summarise the visual intent for each version.
2. Lock the copy hierarchy shared across all versions:
   - hero promise
   - three pillars
   - process
   - pricing
   - proof
   - FAQ
   - final CTA
3. Plan `v1` and `v2` aesthetic revisions.
4. Plan `v3`, `v4`, and `v5` as three clearly distinct design systems.
5. Build one version at a time and update `VERSIONS.md` after each substantive change.

## Constraints

- Avoid dark/moody "startup" aesthetics unless the user explicitly asks for one in a version folder.
- Default CTA language should follow the build guide:
  - Primary: `Book a Free Strategy Session`
  - Secondary: `Request a Local Ranking Audit`
- Treat testimonials and case studies as placeholders unless the user provides real proof.

## V3/V4/V5 Build Brief

A comprehensive build brief with section structures, asset assignments, graphic gap analysis, and Gemini image generation prompts has been prepared:

- **Full brief:** `_temp/v3-v4-v5-build-brief.md`
- **Planning-ready graphics folder:** `_temp/brand/graphics/planning-ready/`
- **Generated source pool:** `_temp/brand/graphics/generated/`

The brief captures all owner decisions including:
- V3 uses the Obima layout but with a light colour scheme (owner override).
- Product UI screenshots are replaced with existing proof graphics or newly generated Local Leader data visuals.
- Pricing: $500/month early bird (crossed out $2,000).
- Minimal section structure: Hero, Proof Strip, Three Pillars, Pricing, Testimonials, FAQ, Final CTA.
- Testimonial avatars: initials/icons only (no AI headshots).
- 15 new graphics need to be generated via Google Gemini before the build begins.
- The next agent should use the curated `planning-ready/` folder, not the raw `generated/` or `prompted/` folders, unless a file is explicitly missing.


