# How to create a new version from the base

1. Copy `src/app/base/page.tsx` to `src/app/version-x/page.tsx`
2. The new version's page.tsx imports all content from `@/lib/content` (shared — do NOT duplicate)
3. The new version's page.tsx imports shared components from `@/components/shared/`
4. To restyle: modify the Tailwind classes in the copied page.tsx
5. To change layout: restructure the JSX in the copied page.tsx
6. To add version-specific colours: add them to `tailwind.config.ts` with the `vx-` prefix
7. To add a version-specific font: add it to `src/lib/fonts.ts`

## What each design brief will specify

- Which font to use (add to fonts.ts)
- Which colours to use (add to tailwind.config.ts with prefix)
- Which Tailwind classes to change on each element
- Which layout changes to make (e.g., "change 3-col grid to horizontal rows")
- Which components to swap (e.g., "replace GoogleMapsMockup with PhoneMockup")
- Any new components to create in the version's folder

## Deployment

All 4 versions (A–D) plus the base are deployed simultaneously as different routes on the same Next.js app:

- `/` — Index page linking to all versions
- `/base` — Neutral reference implementation
- `/version-a` — Design version A
- `/version-b` — Design version B
- `/version-c` — Design version C
- `/version-d` — Design version D

Railway deploys the entire app. All routes are live at the same time.
