import { notFound } from 'next/navigation';

import { Metadata } from 'next';

import OcSkillCard from '@/components/molecules/skill-card';

import { GET_SKILLS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';
import { GetSkillsResponse } from '@/lib/cms/types';

export const metadata: Metadata = {
	title: 'Oscarballido | Habilidades',
};

export const revalidate = 300;

export default async function Skills() {
	const data = await hygraph.request<GetSkillsResponse>(GET_SKILLS);

	const skills = data.skills[0].skill;

	if (!skills || skills.length === 0) notFound();

	return (
		<main className="py-6 flex flex-col h-full flex-1 overflow-hidden w-full max-w-[1440px] mx-auto">
			<div className="flex justify-center items-stretch rounded-2xl overflow-visible flex-1 relative px-6 py-0 md:py-20 before:bg-no-repeat before:bg-center before:bg-cover before:xl:bg-size-[100%] before:content-[''] before:w-[100%] before:bg-transparent before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-10 before:bg-[url('/static/splash-01-vertical.webp')] before:sm:bg-[url('/static/splash-01-horizontal.webp')] before:aspect-auto before:md:h-auto before:md:aspect-square before:h-full">
				<div className="bg-white shadow-2xl rounded-2xl grid auto-rows-fr sm:flex sm:flex-row overflow-hidden max-w-[700px] w-full sm:my-auto">
					{skills.map((skill, index) => (
						<OcSkillCard
							key={index}
							type={skill?.type}
							categories={skill?.categories}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
