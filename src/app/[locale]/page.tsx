import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import OcCardThink from '@/components/molecules/card-think';
import OcButtonLink from '@/components/molecules/button-link';

import { GET_WELCOME } from '@/lib/cms/queries';
import { mapWelcomes } from '@/lib/cms/mappers/welcome';
import hygraph from '@/lib/cms/client';
import { GetWelcomesResponse } from '@/lib/cms/types';

import { DEFAULT_LOCALE } from '@/config/config-constants';
import OcIconArrowRightAlt from '@/components/atoms/icon/arrow-right-alt';

export const revalidate = 300;

type Props = {
	params: Promise<{ locale: 'es' | 'en' }>;
};

export default async function Home({ params }: Props) {
	const t = await getTranslations('MoreAboutMe');
	const { locale } = await params;

	const data = await hygraph.request<GetWelcomesResponse>(GET_WELCOME, {
		locales: [locale, DEFAULT_LOCALE], // si tu enum en Hygraph es ES/EN
	});
	const welcomes = mapWelcomes(data?.welcomes);

	if (!welcomes.length) notFound();

	const welcomeContent = welcomes[0];

	return (
		<main className="flex flex-col h-full flex-1 overflow-hidden gap-1 justify-center w-full max-w-[1440px] mx-auto">
			<div className="py-1 pr-1 pl-4 rounded-full bg-white dark:bg-[#293b54] w-fit mx-auto flex items-center gap-6">
				<p className="text-primary-400 font-semibold text-sm tracking-wider uppercase">
					UI Developer
				</p>
				<OcButtonLink
					href="/about-me"
					label={t('buttonLabel')}
					color="secondary"
					iconRight={<OcIconArrowRightAlt />}
				/>
			</div>
			<div className="flex justify-center rounded-2xl overflow-visible relative px-6 pb-4 before:bg-no-repeat before:bg-center before:bg-cover before:xl:bg-size-[100%] before:content-[''] before:w-[100%] before:bg-transparent before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-10 before:bg-[url('/static/splash-light-colored-vertical.webp')] dark:before:bg-[url('/static/splash-dark-colored-vertical.webp')] before:md:bg-[url('/static/splash-light-colored-horizontal.webp')] dark:before:md:bg-[url('/static/splash-dark-colored-horizontal.webp')] before:aspect-auto before:md:h-auto before:md:aspect-square before:h-full">
				<div className="shadow-2xl rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[500px] md:max-w-[700px] w-full">
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
		</main>
	);
}
