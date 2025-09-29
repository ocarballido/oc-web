import OcProjectSidebar from '@/components/organisms/project-sidebar';

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
				{project && <OcProjectSidebar project={project} />}
				<div className="flex-1">
					<p>{id}</p>
				</div>
			</div>
		</main>
	);
};

export default SingleProject;
