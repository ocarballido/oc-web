// /src/app/[locale]/projects/[slug]/page.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import type {
	GetPortfolioItemResponse,
	GetPortfolioItemVariables,
	GetPortfolioItemsResponse,
	GetPortfolioItemsVariables,
} from '@/lib/cms/types';

import OcProjectSingle from '@/components/organisms/project-single';
import OcPortfolioSidebar from '@/components/organisms/portfolio-sidebar';
import OcPortfolioContent from '@/components/organisms/portfolio-content';

import { GET_PORTFOLIO_ITEM, GET_PORTFOLIO_ITEMS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';
import { mapPortfolioItem } from '@/lib/cms/mappers/portfolio-items';

import { DEFAULT_LOCALE } from '@/config/config-constants';

export const revalidate = 300;

type Locale = 'es' | 'en';

async function getPortfolioItem(slug: string, locale: Locale) {
	const data = await hygraph.request<
		GetPortfolioItemResponse,
		GetPortfolioItemVariables
	>(GET_PORTFOLIO_ITEM, {
		slug,
		locales: [locale, DEFAULT_LOCALE],
	});

	const cmsItem = data?.portfolioItem;
	if (!cmsItem) notFound();

	return mapPortfolioItem(cmsItem);
}

async function getPortfolioSlugs(locale: Locale) {
	const data = await hygraph.request<
		GetPortfolioItemsResponse,
		GetPortfolioItemsVariables
	>(GET_PORTFOLIO_ITEMS, {
		locales: [locale, DEFAULT_LOCALE],
	});

	return data.portfolioItems ?? [];
}

type MetaProps = { params: Promise<{ locale: Locale; slug: string }> };

export async function generateMetadata({
	params,
}: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params;
	if (!slug) notFound();

	const item = await getPortfolioItem(slug, locale);

	return {
		title: item.title,
		description: item.contextSummary,
	};
}

type PageProps = { params: Promise<{ locale: Locale; slug: string }> };

export default async function PortfolioItemPage({ params }: PageProps) {
	const { locale, slug } = await params;
	if (!slug) notFound();

	const [item, allItems] = await Promise.all([
		getPortfolioItem(slug, locale),
		getPortfolioSlugs(locale),
	]);

	const currentIndex = allItems.findIndex(
		(i: { slug: string }) => i.slug === slug,
	);
	const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
	const nextItem =
		currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

	return (
		<OcProjectSingle>
			<OcPortfolioSidebar
				discipline={item.discipline}
				techStack={item.techStack}
				title={item.title}
				roleAndScope={item.roleAndScope}
				stackInContext={item.stackInContext}
				year={item.year}
				portfolioType={item.portfolioType}
				liveUrl={item.liveUrl}
				prevSlug={prevItem?.slug ?? null}
				prevTitle={prevItem?.title ?? null}
				nextSlug={nextItem?.slug ?? null}
				nextTitle={nextItem?.title ?? null}
			/>
			<OcPortfolioContent item={item} />
		</OcProjectSingle>
	);
}
