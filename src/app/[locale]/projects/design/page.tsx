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
	title: 'Proyectos | Diseño',
};

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

	if (!projects.length) notFound();

	return <OcProjects projects={projects} filter="DESIGN" />;
}
