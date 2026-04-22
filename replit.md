# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

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

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Kute Hospital & Laparoscopy Centre (`/`)
- **Type**: React + Vite web app
- **Slug**: `kute-hospital`
- **Pages**: Home, About, Services, Doctors, Contact (5-page hospital website)
- **Brand colors**: Red (#FF3F25), Navy (#0B1F3A), Teal (#00B5A4)
- **Fonts**: Rethink Sans + DM Serif Display Italic
- **Icons**: Font Awesome 6.5.0
- **Features**: Animated stat counters, YouTube embed with custom thumbnail, appointment booking form, FAQ accordion, insurance & TPA partners section, responsive navbar with hamburger, scroll-to-top button, Google Maps embed
- **No backend needed**: Pure frontend/static site
