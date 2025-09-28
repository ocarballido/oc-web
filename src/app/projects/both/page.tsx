import OcProjectsFilter from '@/components/molecules/projects-filter';
import OcCardProject from '@/components/molecules/card-project';

import { PROJECTS } from '@/data/proyects';

export default function Projects() {
	return (
		<main className="flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col gap-6">
				<OcProjectsFilter active="BOTH" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
					{PROJECTS.map((project) => (
						<OcCardProject
							key={project.id}
							year={project.year}
							title={project.title}
							shortDescription={project.shortDescription}
							id={project.id}
							image={project.image}
							type={project.type}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
