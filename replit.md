# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Inupgro Landing Page (`artifacts/inupgro`)
- Single-page landing website for **Inupgro** -- an EdTech company
- **Stack**: React + Vite, Tailwind CSS, shadcn/ui, Framer Motion, Lucide icons
- **Design**: Deep navy blue primary (#0f172a via CSS custom properties) + gold/amber secondary
- **No backend** -- pure frontend, no API hooks
- **Business Model (3 Offerings)**:
  1. **Website Development** -- ₹50,000 one-time for 10 years (core/mandatory offering)
  2. **Career Pathway Tool** -- FREE for schools/students, requires website contract (website mandatory)
  3. **9 Platform Features** -- Launching Soon, free for 1 year with website contract
- **Contact**: Phone +91 82096 47142, WhatsApp wa.me/918209647142
- **Address**: Jhalana Gram, Malviya Nagar, Jaipur (Raj)
- **Career Pathway URL**: https://dev-frontend-inupgro-career-pathway.vercel.app/
- **Screenshots**: `attached_assets/screenshots/` (career pathway app screenshots); `attached_assets/screenshots/portfolio/` (WebP homepage shots of the 9 real client sites on *.inupgrodigital.com used in the portfolio section)
- **Vite alias**: `@assets/` maps to `attached_assets/`
- **Key file**: `artifacts/inupgro/src/pages/Home.tsx` (entire landing page)

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` -- full typecheck across all packages
- `pnpm run build` -- typecheck + build all packages
- `pnpm --filter @workspace/inupgro run dev` -- run Inupgro landing page locally
- `pnpm --filter @workspace/api-spec run codegen` -- regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` -- push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` -- run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Enquiry submissions (April 2026)

The hero "Get Started Today" button on Inupgro opens an enquiry dialog
(`artifacts/inupgro/src/components/EnquiryDialog.tsx`) that POSTs to
`/api/enquiries` (handled by `artifacts/api-server/src/routes/enquiries.ts`).
Submissions are stored in the `enquiries` table defined in
`lib/db/src/schema/enquiries.ts`.

To inspect submissions: query the `enquiries` table in the Replit Postgres
database. To change the request shape, update `lib/api-spec/openapi.yaml`
(`CreateEnquiryRequest` schema) and re-run
`pnpm --filter @workspace/api-spec run codegen`. Schema changes also require
`pnpm --filter @workspace/db run push`.
