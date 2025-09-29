import Image from 'next/image';
import Link from 'next/link';
import OcCard from '@/components/atoms/card';
import OcButtonLink from '@/components/molecules/button-link';
import OcBadgeIndicator from '@/components/molecules/badge-indicator';
import OcBadge from '@/components/molecules/badge';

import { PROJECTS } from '@/data/proyects';

type PageProps = {
	params: Promise<{ id: string }>;
};

const SingleProject = async ({ params }: PageProps) => {
	const { id } = await params;

	const project = await PROJECTS.find((project) => project.id === id);

	return (
		<main className="flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-3">
				<OcCard className="w-full md:max-w-[380px] flex flex-col gap-6">
					<OcButtonLink
						label="Todos los proyectos"
						href="/projects/both"
					/>
					<OcBadgeIndicator
						code={project?.code}
						design={project?.design}
					/>
					<h2 className="text-3xl">{project?.title}</h2>
					<div>
						<h3 className="text-lg font-medium mb-2">
							Descripción:
						</h3>
						<p className="opacity-70">{project?.description}</p>
					</div>
					<div>
						<h3 className="text-lg font-medium mb-2">Cliente:</h3>
						{project?.link ? (
							<Link
								className="text-primary-400 underline flex items-center gap-1"
								href={project?.link}
								target="_blank"
							>
								{project?.client}
								<Image
									alt="Icon arrow"
									src="/static/icons/arrow-out.svg"
									width={20}
									height={20}
								/>
							</Link>
						) : (
							<p className="opacity-70">{project?.client}</p>
						)}
						{project?.year && <OcBadge label={project?.year} />}
					</div>
					<div>
						<h3 className="text-lg font-medium mb-2">Role:</h3>
						<p className="opacity-70">{project?.role}</p>
					</div>
					<div>
						<h3 className="text-lg font-medium mb-2">
							Tecnologías:
						</h3>
						<div className="flex gap-1 flex-wrap  mt-auto mb-2">
							{project?.technologies.map((tech) => (
								<OcBadge
									key={tech}
									label={tech}
									color="secondary"
								/>
							))}
						</div>
					</div>
				</OcCard>
				<div className="flex-1">
					<p>{id}</p>
				</div>
			</div>
		</main>
	);
};

export default SingleProject;
