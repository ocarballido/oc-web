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
		<main className="flex flex-col h-full flex-1">
			<OcCard className="mt-6 max-w-5xl md:w-full lg:w-4xl xl:w-full mx-auto mb-3 lg:-mb-18 relative z-10">
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
			<div className="flex justify-center items-stretch rounded-2xl overflow-visible flex-1 relative px-6 py-20 before:content-[''] md:before:w-[50%] before:w-[100%] before:bg-transparent before:absolute before:top-0 before:left-0 before:-z-10 bg-[#D5E2F3] bg-[url('/static/splash-01-vertical.webp')] md:bg-[url('/static/splash-01-horizontal.webp')] bg-no-repeat bg-center bg-cover md:bg-[auto 100%]">
				<div className="bg-white shadow-2xl rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[700px] w-full md:my-auto">
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
