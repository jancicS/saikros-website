# Saikros website

Marketing site for **Saikros** — Next.js (App Router), static export, hosted on Firebase.

- **Repository:** [github.com/jancicS/saikros-website](https://github.com/jancicS/saikros-website)
- **Branching & how to ship changes:** see [docs/GIT_WORKFLOW.md](./docs/GIT_WORKFLOW.md)

## Scripts

| Command        | Description |
|----------------|-------------|
| `npm run dev`  | Local development server |
| `npm run build`| Production build + static export to `out/` |
| `npm run deploy` | `next build` then `firebase deploy` (Hosting) |

## Requirements

- Node.js (LTS recommended)
- Firebase CLI (`firebase login`) with access to the Hosting project

## Project layout

- `app/` — routes, layout, global styles
- `components/landing/` — page sections
- `firebase.json` — Hosting `public` → `out`
