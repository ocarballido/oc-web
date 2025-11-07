import { notFound } from 'next/navigation';

import OcCard from '@/components/atoms/card';
import OcCardThink from '@/components/molecules/card-think';
import OcBadge from '@/components/molecules/badge';

import { GET_WELCOME } from '@/lib/cms/queries';
import { mapWelcomes } from '@/lib/cms/mappers/welcome';
import hygraph from '@/lib/cms/client';
import { GetWelcomesResponse } from '@/lib/cms/types';

export const revalidate = 300;

export default async function Home() {
	const data = await hygraph.request<GetWelcomesResponse>(GET_WELCOME);
	const welcomes = mapWelcomes(data?.welcomes);

	if (!welcomes.length) notFound();

	const welcomeContent = welcomes[0];

	return (
		<main className="flex flex-col h-full flex-1 overflow-hidden gap-1 justify-center w-full max-w-[1440px] mx-auto">
			<OcCard className="mt-6 max-w-[500px] md:max-w-[700px] self-center mx-6 sm:mx-auto relative z-10 dark:text-[#a0b8e3]">
				<OcBadge label={welcomeContent.title} color="secondary" />
				<p className="mb-3 font-medium text-bas mt-4">
					{welcomeContent.subtitle}
				</p>
				<p className="mb-3 opacity-70 font-normal text-bas">
					{welcomeContent.content[0]}
				</p>
				<p className="opacity-70 font-normal text-bas">
					{welcomeContent.content[1]}
				</p>
			</OcCard>
			<div className="flex justify-center rounded-2xl overflow-visible relative px-6 pb-4 before:bg-no-repeat before:bg-center before:bg-cover before:xl:bg-size-[100%] before:content-[''] before:w-[100%] before:bg-transparent before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-10 before:bg-[url('/static/splash-light-colored-vertical.webp')] dark:before:bg-[url('/static/splash-dark-colored-vertical.webp')] before:md:bg-[url('/static/splash-light-colored-horizontal.webp')] dark:before:md:bg-[url('/static/splash-dark-colored-horizontal.webp')] before:aspect-auto before:md:h-auto before:md:aspect-square before:h-full">
				<div className="bg-white dark:bg-(--background-light) shadow-2xl rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[500px] md:max-w-[700px] w-full">
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
