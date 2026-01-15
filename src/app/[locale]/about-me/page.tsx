import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import OcSkillCard from '@/components/molecules/skill-card';
import OcCard from '@/components/atoms/card';

import { GET_SKILLS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';
import { GetSkillsResponse } from '@/lib/cms/types';

import { DEFAULT_LOCALE } from '@/config/config-constants';

export async function generateMetadata() {
	const t = await getTranslations('MetadataAbout');

	return {
		title: t('title'),
	};
}

type Props = {
	params: Promise<{ locale: 'es' | 'en' }>;
};

export const revalidate = 300;

export default async function AboutMe({ params }: Props) {
	const t = await getTranslations();

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
		<main className="flex flex-col h-full flex-1 overflow-hidden gap-1 justify-center w-full max-w-[1440px] mx-auto">
			<OcCard className="mt-6 max-w-[500px] md:max-w-[700px] self-center mx-6 sm:mx-auto relative z-10 dark:text-[#a0b8e3]">
				<h2 className="mb-3 text-2xl text-primary-400">
					{t('About.title')}
				</h2>
				<p className="mb-3 font-medium">{t('About.subtitle')}</p>
				<p className="opacity-70 font-normal text-bas mb-4">
					{t('About.description')}
				</p>
			</OcCard>
			<div className="flex justify-center rounded-2xl overflow-visible relative px-6 before:bg-no-repeat before:bg-center before:bg-cover before:xl:bg-size-[100%] before:content-[''] before:w-[100%] before:bg-transparent before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-10 before:bg-[url('/static/splash-light-colored-vertical.webp')] dark:before:bg-[url('/static/splash-dark-colored-vertical.webp')] before:md:bg-[url('/static/splash-light-colored-horizontal.webp')] dark:before:md:bg-[url('/static/splash-dark-colored-horizontal.webp')] before:aspect-auto before:md:h-auto before:md:aspect-square before:h-full">
				<div className="rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[500px] md:max-w-[700px] w-full">
					{skills.map((skill, index) => (
						<OcSkillCard
							key={index}
							type={skill?.type}
							categories={skill?.categories}
						/>
					))}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-1 rounded-xl max-w-[500px] md:max-w-[700px] self-center mx-6 sm:mx-auto relative z-10 dark:text-[#a0b8e3] mb-6">
				<div className="p-5  rounded-xl text-center bg-white dark:bg-(--background-light)">
					<h3 className="mb-1 font-bold text-primary-400">
						{t('MyWork.title')}
					</h3>
					<p className="opacity-70 font-normal text-sm">
						{t('MyWork.description')}
					</p>
				</div>
				<div className="p-5  rounded-xl text-center bg-white dark:bg-(--background-light)">
					<h3 className="mb-1 font-bold text-primary-400">
						{t('MyValues.title')}
					</h3>
					<p className="opacity-70 font-normal text-sm">
						{t('MyValues.description')}
					</p>
				</div>
				<div className="p-5  rounded-xl text-center bg-white dark:bg-(--background-light)">
					<h3 className="mb-1 font-bold text-primary-400">
						{t('MyFit.title')}
					</h3>
					<p className="opacity-70 font-normal text-sm">
						{t('MyFit.description')}
					</p>
				</div>
			</div>
		</main>
	);
}
