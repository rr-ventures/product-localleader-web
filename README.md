# Local Leader — Homepage Versions

Single repo housing 9 independent homepage designs for [localleader.au](https://localleader.au).  
Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

## Routes

| Path | Description |
|------|-------------|
| `/` | Control panel — links to all 9 versions |
| `/version-a` | Version A |
| `/version-b` | Version B |
| `/version-c` | Version C |
| `/version-d` | Version D |
| `/version-e` | Version E |
| `/version-f` | Version F |
| `/version-g` | Version G |
| `/version-h` | Version H |
| `/version-i` | Version I |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed to Railway as a single instance. All versions are served from one domain.

## Adding a new version

When a design brief is applied:

1. Add the version's font to `src/lib/fonts.ts`
2. Add the version's colours to `tailwind.config.ts` (prefixed, e.g. `va-accent`)
3. Build the page in `src/app/version-x/page.tsx` (and optional `components/` subfolder)
4. Update the `ready` flag in `src/app/page.tsx`
