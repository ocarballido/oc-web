import { notFound } from 'next/navigation';

import OcProjectsFilter from '@/components/molecules/projects-filter';
import OcCardProject from '@/components/molecules/card-project';

import type { CMSProject } from '@/lib/cms/types';
import type { ProjectCard } from '@/types/types';
import { toProjectCard } from '@/lib/cms/mappers/projects';

import { GET_PROJECTS } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';

export default async function Projects() {
	const data = await hygraph.request<{ projects: CMSProject[] }>(
		GET_PROJECTS
	);
	const cmsProjects = data.projects ?? [];
	const projects: ProjectCard[] = cmsProjects.map(toProjectCard);

	if (!projects.length) notFound();

	return (
		<main className="flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col gap-6">
				<OcProjectsFilter active="BOTH" />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
					{projects.map((project, index) => (
						<OcCardProject
							key={project.id}
							id={project.id}
							year={project.year}
							title={project.title}
							shortDescription={project.shortDescription}
							thumbnail={project.thumbnail}
							code={project.code}
							design={project.design}
							className={
								index === 0 ? 'md:col-span-2' : undefined
							}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
