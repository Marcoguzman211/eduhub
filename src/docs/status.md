# EduHub Platform Status

## Overview

- Next.js App Router project targeting educators in France; marketing landing in `src/app/(marketing)` plus authenticated workspaces under `src/app/(app)`.
- React 19 with TypeScript, TRPC, and TanStack Query provide client/server communication.
- UI powered by Tailwind CSS v4 with HeroUI components wrapped under `src/lib/components/ui`.

## Technology Stack

- **Framework**: Next.js 15 (App Router, Server Actions, RSC).
- **Language & Tooling**: TypeScript, ESLint 9, Prettier 3, Husky + lint-staged, Turbo dev server.
- **UI & Styling**: Tailwind 4 (`src/styles/globals.css`), HeroUI (`src/hero.ts` plugin), custom components in `src/lib/components`.
- **Data Layer**: Drizzle ORM Postgres client (`src/server/db`), `drizzle-kit` migrations in `/drizzle`.
- **API Layer**: tRPC v11 with superjson serialization (`src/server/api` and `src/trpc`).
- **Auth**: NextAuth v5 with Drizzle adapter and providers for Resend magic links, Google, and Discord.

## Authentication Workflow

- Route handlers live in `src/app/api/auth/[...nextauth]/route.ts`, delegating to NextAuth `handlers`.
- Core config (`src/server/auth/config.ts`) wires Drizzle adapter tables (`users`, `accounts`, `sessions`, `verificationTokens`) and registers providers:
  1. Email via Resend (magic link, requires `AUTH_RESEND_KEY` and `authConfig.pages.verifyRequest`).
  2. Google OAuth (`AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`).
  3. Discord OAuth (`AUTH_DISCORD_ID`, `AUTH_DISCORD_SECRET`).
- `auth()` (`src/server/auth/index.ts`) is cached and consumed server-side to guard layouts/routes.
- Authenticated layouts (`src/app/(app)/layout.tsx`) redirect unauthenticated users to `/signin`.
- Sign-in UI (`src/app/(auth)/signin`) uses Server Actions to invoke `signIn` for each provider; verify request and sign-out flows are implemented as dedicated routes.
- Navigation (`src/app/_components/navbar/nav-bar.tsx`) fetches the active session via tRPC and renders either a HeroUI avatar menu or a sign-in CTA.

## API & Data Layer

- Database connection lazily caches a Postgres client in dev (`src/server/db/index.ts`).
- Schema (`src/server/db/schema.ts`) includes NextAuth tables plus a `posts` table (name, createdById, timestamps).
- tRPC router (`src/server/api/root.ts`) exposes:
  - `session.getSession`: public query returning the current session (used by navbar).
  - `post` router: placeholder endpoints (hello echo, authenticated `create`, `getLatest`, `getSecretMessage`). No UI currently consumes these.
- tRPC context attaches `db` and `session`; protected procedures enforce session presence.
- Client utilities (`src/trpc/react.tsx`, `src/trpc/server.ts`) configure TanStack Query providers and hydration helpers.

## UI Surface & Current State

- **Marketing site** (`src/app/(marketing)`): Hero, popular resources list (mock data), community activity, testimonials, and CTA sections are static, styled with HeroUI components.
- **Authentication screens** (`src/app/(auth)`): Sign-in tabs for email magic link or OAuth, verify request instructions, and sign-out confirmation. French copy throughout.
- **Authenticated area** (`src/app/(app)`):
  - Shared layout enforces authentication.
  - `dashboard` page is a placeholder text-only view.
  - `upload` flow renders structured forms (base info, description, licence components) with HeroUI inputs but lacks submission logic or API integration.
- **Global chrome**: Root layout wraps pages with `TRPCReactProvider`, shared navbar, and footer; viewport constrained to 1440px max width.
- **Missing sections**: Routes linked from the navbar (`/ressources`, `/dashboard/my-resources`, `/dashboard/profile`) are not yet implemented.

## Environment & Operations

- Required server env vars defined in `src/env.js`: `DATABASE_URL`, provider secrets, optional `AUTH_SECRET` in dev, optional `AUTH_RESEND_KEY`.
- npm scripts: `dev`, `build`, `start`, `lint`, `typecheck`, Drizzle migration commands, Prettier format helpers.
- Local database setup relies on Postgres; `start-database.sh` present for convenience.

## Gaps & Next Steps

- Hook upload form and dashboard pages to tRPC mutations/queries (currently UI-only).
- Build resource browsing routes referenced in navigation.
- Expand tRPC routers for domain entities beyond demo `post` endpoints.
- Add automated tests (none in repo) and adjust README to reflect EduHub-specific setup.
