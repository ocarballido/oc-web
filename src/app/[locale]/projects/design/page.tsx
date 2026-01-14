import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import OcProjects from '@/components/organisms/projects';

import type { CMSProject } from '@/lib/cms/types';
import type { ProjectCard } from '@/types/types';
import { toProjectCard } from '@/lib/cms/mappers/projects';

import { GET_PROJECTS_BY_TYPE } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';

import { DEFAULT_LOCALE } from '@/config/config-constants';

export async function generateMetadata() {
	const t = await getTranslations('MetadataDesign');

	return {
		title: t('title'),
	};
}

export const revalidate = 300;

type Locale = 'es' | 'en';

type PageProps = {
	params: Promise<{ locale: Locale }>;
};

export default async function ProjectsDesign({ params }: PageProps) {
	const { locale } = await params;

	const data = await hygraph.request<{ projects: CMSProject[] }>(
		GET_PROJECTS_BY_TYPE,
		{
			design: true,
			code: false,
			locales: [locale, DEFAULT_LOCALE], // ✅ locale + fallback
		}
	);

	const cmsProjects = data.projects ?? [];
	const projects: ProjectCard[] = cmsProjects.map(toProjectCard);

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	if (!projects.length) notFound();

	return <OcProjects projects={projects} filter="DESIGN" />;
}
