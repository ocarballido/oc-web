---
name: cms-page
description: Add a new page, or new Hygraph-backed data to an existing page, in this Next.js + next-intl site. Covers the GraphQL query, CMS types, mapper, route file, metadata and translations in both locales. Use when a task needs new content from Hygraph or a new route under src/app/[locale]/.
---

# New CMS-backed page or section

Reference implementations: `src/app/[locale]/about-me/page.tsx` and `src/app/[locale]/projects/develop/page.tsx`.

1. **Query** in `src/lib/cms/queries.ts`: export a `GET_<THING>` template string. Declare `$locales: [Locale!]!` and pass `locales: $locales` to the root field so Hygraph returns localized content. The Hygraph schema isn't in the repo; if a field name is unknown, ask instead of guessing.

2. **CMS types** in `src/lib/cms/types.ts`: a `CMS<Thing>` type mirroring the query (fields nullable, as Hygraph returns them) plus a `Get<Thing>Response` wrapper.

3. **Mapper** in `src/lib/cms/mappers/<thing>.ts`: `to<Thing>(cms: CMS<Thing>): <Thing>` converting to the app type in `src/types/types.ts`, with `?? ''`/`?? undefined` fallbacks so components never receive `null`. Skip the mapper only if the CMS shape is already what the component needs.

4. **Route** `src/app/[locale]/<route>/page.tsx` (async server component):
   ```tsx
   export async function generateMetadata() {
   	const t = await getTranslations('Metadata<Name>');
   	return { title: t('title') };
   }

   export const revalidate = 300;

   type Props = { params: Promise<{ locale: 'es' | 'en' }> };

   export default async function <Name>({ params }: Props) {
   	const { locale } = await params;
   	if (!hasLocale(routing.locales, locale)) notFound();

   	const data = await hygraph.request<Get<Thing>Response>(GET_<THING>, {
   		locales: [locale, DEFAULT_LOCALE],
   	});
   	// map, then notFound() if the data is empty
   }
   ```
   Imports: `hygraph` from `@/lib/cms/client`, `routing` from `@/i18n/routing`, `DEFAULT_LOCALE` from `@/config/config-constants`.

5. **Images:** Hygraph asset URLs must match `images.remotePatterns` in `next.config.ts`. If a new asset host shows up, add it there.

6. **Translations:** add a `Metadata<Name>` namespace (with `title`) and any UI strings to both `messages/es.json` and `messages/en.json`, with the same keys in each.

7. **Navigation:** for a top-level page, add an `<OcLinkMenu label={t('<key>')} href="/<route>" active={path === '/<route>'} />` entry in `src/components/organisms/main-menu/index.tsx`, with the label key in both messages files.

8. **Verify:** `npm run lint` and `npx tsc --noEmit`. To check the data, run `npm run dev` (needs `HYGRAPH_API_ENDPOIN` in `.env`) and open both `/es/<route>` and `/en/<route>`.
