import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import Image from 'next/image';

import OcCardThink from '@/components/molecules/card-think';
import OcButtonLink from '@/components/molecules/button-link';

import { GET_WELCOME } from '@/lib/cms/queries';
import { mapWelcomes } from '@/lib/cms/mappers/welcome';
import hygraph from '@/lib/cms/client';
import { GetWelcomesResponse } from '@/lib/cms/types';

import { DEFAULT_LOCALE } from '@/config/config-constants';
import OcIconArrowRightAlt from '@/components/atoms/icon/arrow-right-alt';
import Link from 'next/link';

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
		<main className="flex flex-col h-full flex-1 overflow-hidden gap-6 justify-center w-full max-w-[1440px] mx-auto py-4">
			<div className="py-1 pr-1 pl-4 rounded-full bg-white dark:bg-[#293b54] w-fit mx-6 flex items-center gap-3 self-center">
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
		</main>
	);
}
