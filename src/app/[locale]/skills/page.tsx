import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import OcSkillCard from '@/components/molecules/skill-card';

import { GET_SKILLS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';
import { GetSkillsResponse } from '@/lib/cms/types';

import { DEFAULT_LOCALE } from '@/config/config-constants';

export async function generateMetadata() {
	const t = await getTranslations('MetadataSkills');

	return {
		title: t('title'),
	};
}

type Props = {
	params: Promise<{ locale: 'es' | 'en' }>;
};

export const revalidate = 300;

export default async function Skills({ params }: Props) {
	const { locale } = await params;

	const data = await hygraph.request<GetSkillsResponse>(GET_SKILLS, {
		locales: [locale, DEFAULT_LOCALE], // si tu enum en Hygraph es ES/EN
	});

	const skills = data.skills[0].skill;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	if (!skills || skills.length === 0) notFound();

	return (
		<main className="py-6 flex flex-col h-full flex-1 overflow-hidden w-full max-w-[1440px] mx-auto">
			<div className="flex justify-center items-stretch rounded-2xl overflow-visible flex-1 relative px-6 py-0 md:py-20 before:bg-no-repeat before:bg-center before:bg-cover before:xl:bg-size-[100%] before:content-[''] before:w-[100%] before:bg-transparent before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-10 before:aspect-auto before:md:h-auto before:md:aspect-square before:h-full before:bg-[url('/static/splash-light-colored-vertical.webp')] dark:before:bg-[url('/static/splash-dark-colored-vertical.webp')] before:md:bg-[url('/static/splash-light-colored-horizontal.webp')] dark:before:md:bg-[url('/static/splash-dark-colored-horizontal.webp')]">
				<div className="bg-white dark:bg-(--background-light) shadow-2xl rounded-2xl grid auto-rows-fr sm:flex sm:flex-row overflow-hidden max-w-[700px] w-full sm:my-auto">
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
