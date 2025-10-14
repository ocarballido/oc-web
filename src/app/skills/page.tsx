import { notFound } from 'next/navigation';

import OcSkillCard from '@/components/molecules/skill-card';

import { GET_SKILLS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';
import { GetSkillsResponse } from '@/lib/cms/types';

export default async function Skills() {
	const data = await hygraph.request<GetSkillsResponse>(GET_SKILLS);

	const skills = data.skills[0].skill;

	if (!skills || skills.length === 0) notFound();

	return (
		<main className="flex flex-col h-full flex-1">
			<div className="flex justify-center items-stretch rounded-2xl overflow-visible flex-1 relative px-6 py-20 before:content-[''] sm:before:w-[50%] before:w-[100%] before:bg-transparent before:absolute before:top-0 before:left-0 before:-z-10 bg-[#D5E2F3] bg-[url('/static/splash-01-vertical.webp')] sm:bg-[url('/static/splash-01-horizontal.webp')] bg-no-repeat bg-center bg-cover sm:bg-[auto 100%] mt-6">
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
