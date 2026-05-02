import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import Image from 'next/image';

import OcCardThink from '@/components/molecules/card-think';
import OcButtonLink from '@/components/molecules/button-link';
import OcPortfolioCardCover from '@/components/molecules/portfolio-card-cover';
import OcPortfolioCard from '@/components/molecules/portfolio-card';
import OcIconArrowRightAlt from '@/components/atoms/icon/arrow-right-alt';

import { GET_WELCOME, GET_PORTFOLIO_ITEMS } from '@/lib/cms/queries';
import { mapWelcomes } from '@/lib/cms/mappers/welcome';
import { mapPortfolioCard } from '@/lib/cms/mappers/portfolio-items';
import hygraph from '@/lib/cms/client';
import type {
	GetWelcomesResponse,
	GetPortfolioItemsResponse,
	GetPortfolioItemsVariables,
} from '@/lib/cms/types';

import { DEFAULT_LOCALE } from '@/config/config-constants';
import Link from 'next/link';

export const revalidate = 300;

type Props = {
	params: Promise<{ locale: 'es' | 'en' }>;
};

export default async function Home({ params }: Props) {
	const t = await getTranslations('MoreAboutMe');
	const tp = await getTranslations();
	const { locale } = await params;

	const [welcomeData, portfolioData] = await Promise.all([
		hygraph.request<GetWelcomesResponse>(GET_WELCOME, {
			locales: [locale, DEFAULT_LOCALE],
		}),
		hygraph.request<GetPortfolioItemsResponse, GetPortfolioItemsVariables>(
			GET_PORTFOLIO_ITEMS,
			{ locales: [locale, DEFAULT_LOCALE] },
		),
	]);

	const welcomes = mapWelcomes(welcomeData?.welcomes);
	if (!welcomes.length) notFound();
	const welcomeContent = welcomes[0];

	const mapped = (portfolioData.portfolioItems ?? []).map(mapPortfolioCard);

	// Featured primero + los 2 más recientes no featured
	const featured = mapped.find((i) => i.featured);
	const rest = mapped.filter((i) => !i.featured).slice(0, 2);
	const homeProjects = featured ? [featured, ...rest] : mapped.slice(0, 3);

	return (
		<main className="flex flex-col h-full flex-1 overflow-hidden gap-6 justify-center w-full max-w-[1440px] mx-auto py-4">
			<div className="py-1 pr-1 pl-4 rounded-full bg-white dark:bg-[#293b54] w-fit mx-6 flex items-center gap-3 self-center mt-0 md:mt-12">
				<p className="text-primary-400 font-semibold text-xs tracking-wider uppercase">
					UI Developer
				</p>
				<OcButtonLink
					href="/about-me"
					label={t('buttonLabel')}
					color="secondary"
					iconRight={<OcIconArrowRightAlt />}
				/>
			</div>
			<div className="flex justify-center rounded-2xl overflow-visible relative px-6 before:bg-no-repeat before:bg-center before:bg-cover before:xl:bg-size-[100%] before:content-[''] before:w-[100%] before:bg-transparent before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-10 before:bg-[url('/static/splash-light-colored-vertical.webp')] dark:before:bg-[url('/static/splash-dark-colored-vertical.webp')] before:md:bg-[url('/static/splash-light-colored-horizontal.webp')] dark:before:md:bg-[url('/static/splash-dark-colored-horizontal.webp')] before:aspect-auto before:md:h-auto before:md:aspect-square before:h-full before:scale-y-[-1] before:md:scale-y-[1] before:md:scale-x-[-1]">
				<div className="shadow-2xl rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[500px] md:max-w-[700px] w-full mb-12">
					{welcomeContent.thinkCards.map((card) => (
						<OcCardThink
							key={card.id}
							type={card?.type}
							title={card?.title}
							description={card?.description}
							tools={card?.tools}
							link={card?.link}
						/>
					))}
				</div>
			</div>

			{/* Proyectos destacados */}
			{homeProjects.length > 0 && (
				<div className="px-6 flex flex-col gap-6 py-4 max-w-6xl mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start w-full">
						{homeProjects.map((item, index) =>
							index === 0 ? (
								<OcPortfolioCardCover
									key={item.slug}
									{...item}
									locale={locale}
									className="sm:col-span-2 md:col-span-1 h-full"
								/>
							) : (
								<OcPortfolioCard
									key={item.slug}
									{...item}
									locale={locale}
								/>
							),
						)}
					</div>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<OcButtonLink
							href="/projects"
							label={tp('portfolioNav.all')}
							color="primary"
							iconRight={<OcIconArrowRightAlt color="white" />}
						/>
					</div>
				</div>
			)}

			<div className="flex justify-center py-6">
				<Link
					className="p-1 rounded-full bg-white dark:bg-[#293b54] w-fit mx-6 flex flex-col items-center gap-0 self-center shadow-xs hover:transition-transform duration-300 ease-out hover:scale-105 relative mt-[90px] mb-3"
					href="https://www.credly.com/badges/214578bc-46be-4e53-afcf-98426be99261/public_url"
					target="_blank"
				>
					<Image
						alt="Oscarballido logo"
						width={144}
						height={144}
						src="/static/google-ux-certificate.png"
						className="absolute top-[-108px]"
					/>
					<p className="w-full text-sm text-center text-primary-500 dark:text-[#95add9] font-medium py-2 px-4 bg-primary-10 dark:bg-[#293B54] rounded-full">
						Google UX Design Certificate
					</p>
				</Link>
			</div>
		</main>
	);
}
