import { notFound } from 'next/navigation';

import OcProjects from '@/components/organisms/projects';

import type { CMSProject } from '@/lib/cms/types';
import type { ProjectCard } from '@/types/types';
import { toProjectCard } from '@/lib/cms/mappers/projects';

import { GET_DESIGN_PROJECTS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';

export default async function ProjectsDesign() {
	const data = await hygraph.request<{ projects: CMSProject[] }>(
		GET_DESIGN_PROJECTS
	);
	const cmsProjects = data.projects ?? [];
	const projects: ProjectCard[] = cmsProjects.map(toProjectCard);

	if (!projects.length) notFound();

	return <OcProjects projects={projects} filter="DESIGN" />;
}
