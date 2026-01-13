import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import OcProjects from '@/components/organisms/projects';

import type { CMSProject } from '@/lib/cms/types';
import type { ProjectCard } from '@/types/types';
import { toProjectCard } from '@/lib/cms/mappers/projects';

import { GET_PROJECTS_BY_TYPE } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';

import { DEFAULT_LOCALE } from '@/config/config-constants';

export const metadata: Metadata = {
	title: 'Proyectos | Desarrollo',
};

export const revalidate = 300;

type Locale = 'es' | 'en';

type PageProps = {
	params: Promise<{ locale: Locale }>;
};

export default async function ProjectsDevelop({ params }: PageProps) {
	const { locale } = await params;

	const data = await hygraph.request<{ projects: CMSProject[] }>(
		GET_PROJECTS_BY_TYPE,
		{
			design: false,
			code: true,
			locales: [locale, DEFAULT_LOCALE], // ✅ obligatorio ahora
		}
	);

	const cmsProjects = data.projects ?? [];
	const projects: ProjectCard[] = cmsProjects.map(toProjectCard);

	if (!projects.length) notFound();

	return <OcProjects projects={projects} filter="DEVELOP" />;
}
