import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import type {
	GetPortfolioItemsResponse,
	GetPortfolioItemsVariables,
} from '@/lib/cms/types';
import { GET_PORTFOLIO_ITEMS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';
import { mapPortfolioCard } from '@/lib/cms/mappers/portfolio-items';
import { DEFAULT_LOCALE } from '@/config/config-constants';

import OcPortfolioCardCover from '@/components/molecules/portfolio-card-cover';
import OcPortfolioCard from '@/components/molecules/portfolio-card';
import { OcInView } from '@/components/atoms/in-view';

export const revalidate = 300;

type Locale = 'es' | 'en';
type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps) {
	const { locale } = await params;
	return {
		title: locale === 'en' ? 'Projects' : 'Proyectos',
	};
}

export default async function ProjectsPage({ params }: PageProps) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) notFound();

	const data = await hygraph.request<
		GetPortfolioItemsResponse,
		GetPortfolioItemsVariables
	>(GET_PORTFOLIO_ITEMS, {
		locales: [locale, DEFAULT_LOCALE],
	});

	const mapped = (data.portfolioItems ?? []).map(mapPortfolioCard);

	// El featured más reciente va primero (cover card), el resto mantiene order por year_DESC
	const featuredIndex = mapped.findIndex((i) => i.featured);
	const items =
		featuredIndex > 0
			? [
					mapped[featuredIndex],
					...mapped.filter((_, i) => i !== featuredIndex),
				]
			: mapped;

	if (!items.length) notFound();

	return (
		<main className="px-6 flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col gap-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
					{items.map((item, index) =>
						index === 0 ? (
							<OcPortfolioCardCover
								key={item.slug}
								{...item}
								locale={locale}
								className="md:col-span-2 h-full"
							/>
						) : (
							<OcInView
								key={item.slug}
								delay={(index % 4) * 90}
								durationMs={650}
								once={false}
							>
								<OcPortfolioCard {...item} locale={locale} />
							</OcInView>
						),
					)}
				</div>
			</div>
		</main>
	);
}
