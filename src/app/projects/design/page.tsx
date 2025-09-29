import { useMemo } from 'react';

import OcProjectsFilter from '@/components/molecules/projects-filter';
import OcCardProject from '@/components/molecules/card-project';

import { PROJECTS } from '@/data/proyects';

export default function ProjectsDesign() {
	const filteredProjects = useMemo(() => {
		return PROJECTS.filter((project) => project.design);
	}, [PROJECTS]);

	return (
		<main className="flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col gap-6">
				<OcProjectsFilter active="DESIGN" />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
					{filteredProjects.map((project) => (
						<OcCardProject
							key={project.id}
							year={project.year}
							title={project.title}
							shortDescription={project.shortDescription}
							id={project.id}
							thumbnail={project.thumbnail}
							code={project.code}
							design={project.design}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
