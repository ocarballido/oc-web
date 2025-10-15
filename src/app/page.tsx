import { notFound } from 'next/navigation';

import OcCard from '@/components/atoms/card';
import OcCardThink from '@/components/molecules/card-think';

import { GET_WELCOME } from '@/lib/cms/queries';
import { mapWelcomes } from '@/lib/cms/mappers/welcome';
import hygraph from '@/lib/cms/client';
import { GetWelcomesResponse } from '@/lib/cms/types';

export default async function Home() {
	const data = await hygraph.request<GetWelcomesResponse>(GET_WELCOME);
	const welcomes = mapWelcomes(data?.welcomes);

	if (!welcomes.length) notFound();

	const welcomeContent = welcomes[0];

	return (
		<main className="flex flex-col h-full flex-1 overflow-hidden">
			<OcCard className="mt-6 max-w-5xl lg:w-4xl xl:w-full mx-3 lg:mx-auto mb-3 lg:-mb-8 relative z-10">
				<h1 className="text-primary-400 text-5xl font-light mb-5">
					{welcomeContent.title}
				</h1>
				<p className="mb-3 font-normal text-xl">
					{welcomeContent.subtitle}
				</p>
				<p className="mb-3 opacity-80 font-normal text-base">
					{welcomeContent.content[0]}
				</p>
				<p className="mb-3 opacity-80 font-normal text-base">
					{welcomeContent.content[1]}
				</p>
			</OcCard>
			<div className="flex justify-center items-stretch rounded-2xl overflow-visible flex-1 relative px-6 py-4 md:py-20 before:bg-no-repeat before:bg-center before:bg-cover before:lg:bg-size-[100%] before:content-[''] before:w-[100%] before:bg-transparent before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-10 before:bg-[url('/static/splash-01-vertical.webp')] before:md:bg-[url('/static/splash-01-horizontal.webp')] before:aspect-auto before:md:h-auto before:md:aspect-square before:h-full">
				<div className="bg-white shadow-2xl rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[500px] md:max-w-[700px] w-full md:my-auto">
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
