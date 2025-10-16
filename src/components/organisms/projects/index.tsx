import OcProjectsFilter from '@/components/molecules/projects-filter';
import OcCardProject from '@/components/molecules/card-project';
import OcCardProjectCover from '@/components/molecules/card-project-cover';
import { OcInView } from '@/components/atoms/in-view';

import { ProjectCard } from '@/types/types';

type ProyectsProps = {
	projects: ProjectCard[];
	filter: 'DEVELOP' | 'DESIGN';
};

const OcProjects = ({ projects, filter }: ProyectsProps) => {
	return (
		<main className="px-3 flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col gap-6">
				<OcProjectsFilter active={filter} />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
					{projects.map((project, index) =>
						index === 0 ? (
							<OcCardProjectCover
								key={project.id}
								id={project.id}
								date={project.date}
								title={project.title}
								client={project.client}
								shortDescription={project.shortDescription}
								code={project.code}
								thumbnail={project.thumbnail}
								design={project.design}
								from={filter}
								className="md:col-span-2 h-full"
							/>
						) : (
							<OcInView
								key={project.id}
								delay={(index % 4) * 90}
								durationMs={650}
								once={false}
							>
								<OcCardProject
									id={project.id}
									date={project.date}
									title={project.title}
									client={project.client}
									shortDescription={project.shortDescription}
									thumbnail={project.thumbnail}
									code={project.code}
									design={project.design}
									from={filter}
									className={
										index === 0
											? 'md:col-span-2'
											: undefined
									}
								/>
							</OcInView>
						)
					)}
				</div>
			</div>
		</main>
	);
};

export default OcProjects;
