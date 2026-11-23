# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio (https://www.oscarballido.com): Next.js 15 App Router, React 19, TypeScript strict, Tailwind v4, next-intl, content from Hygraph.

## Commands

- `npm run dev` and `npm run build` both run with `--turbopack`.
- There are no tests. Verify changes with `npm run lint` and `npx tsc --noEmit`. `npm run build` needs `HYGRAPH_API_ENDPOIN` in `.env` and queries the live CMS.
- No formatter is configured. Don't run Prettier (its defaults would rewrite whole files); match the existing style by hand: tabs, single quotes, semicolons.

## Architecture

- All routes live under `src/app/[locale]/`; there is no root `src/app/layout.tsx`. Locales are `es` (default) and `en`, defined in `src/config/config-constants.ts`.
- Pages are async server components that fetch from Hygraph through `src/lib/cms/` (`client.ts`, `queries.ts`, `types.ts`, `mappers/`). Always pass `locales: [locale, DEFAULT_LOCALE]` to queries and keep `export const revalidate = 300`.
- Remote images must match `images.remotePatterns` in `next.config.ts` (currently only the Hygraph asset host).
- Static assets (`.webp` images, CV PDFs) live in `public/static/`.
- `src/data/*`, `src/lib/hygraph.ts` and `src/lib/queries.ts` are legacy, kept only as reference. Never import or edit them; the site doesn't use them.

## i18n

- UI strings live in `messages/es.json` and `messages/en.json`; every key must exist in both files. Don't hardcode user-facing text: use `getTranslations` (server) or `useTranslations` (client).
- Import `Link`, `useRouter` and `usePathname` from `@/i18n/navigation`, not from `next/link` or `next/navigation`. Import `routing` from `@/i18n/routing`.

## Components and styling

- Atomic design: `src/components/{atoms,molecules,organisms,templates,layouts,providers}/<kebab-name>/index.tsx`, default export prefixed with `Oc` (e.g. `OcButton`).
- Tailwind utilities only, with conditional classes built using `clsx`. Theme tokens (`primary-*`), the `dark` custom variant and custom utilities are defined in `src/app/globals.css` (Tailwind v4, no `tailwind.config`). Every visual change needs its `dark:` variant.
- Some names are misspelled and must stay as is: `theme-swith`, `language-swither`, `mnu-drawer`, `src/data/proyects.ts`.

## Gotchas

- The Hygraph env var is `HYGRAPH_API_ENDPOIN` (no final T). Don't rename it; it must match the Vercel config. `NEXT_PUBLIC_GOOGLE_TAG` optionally enables Google Analytics.
- `generateStaticParams` exported from `src/components/layouts/base/index.tsx` has no effect (it isn't a route file).

## Git and deploy

- One kebab-case branch per feature (e.g. `new-portfolio`), merged into `main` through a PR. Don't commit directly to `main`.
- Commit messages are short, lowercase English with no prefix (e.g. `new cv added`). Write code comments in English.
- Vercel deploys `main` to production automatically; production env vars live in the Vercel dashboard.
