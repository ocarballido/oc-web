import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import OcProjects from '@/components/organisms/projects';

import type { CMSProject } from '@/lib/cms/types';
import type { ProjectCard } from '@/types/types';
import { toProjectCard } from '@/lib/cms/mappers/projects';

import { GET_DEVELOP_PROJECTS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';

export const metadata: Metadata = {
	title: 'Proyectos | Desarrollo',
};

export const revalidate = 60;

export default async function ProjectsDevelop() {
	const data = await hygraph.request<{ projects: CMSProject[] }>(
		GET_DEVELOP_PROJECTS
	);
	const cmsProjects = data.projects ?? [];
	const projects: ProjectCard[] = cmsProjects.map(toProjectCard);

	if (!projects.length) notFound();

	return <OcProjects projects={projects} filter="DEVELOP" />;
}
