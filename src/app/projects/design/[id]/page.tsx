import { notFound } from 'next/navigation';

import OcProjectSidebar from '@/components/organisms/project-sidebar';
import OcProjectContent from '@/components/organisms/project-content';

import { PROJECTS } from '@/data/proyects';

type PageProps = {
	params: Promise<{ id: string }>;
};

const SingleProject = async ({ params }: PageProps) => {
	const { id } = await params;

	if (!id) notFound();

	const project = await PROJECTS.find((project) => project.id === id);

	const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;
	const grayDataUrl = `data:image/svg+xml;base64,${Buffer.from(
		graySvg
	).toString('base64')}`;

	return (
		<main className="flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-3 md:gap-6 items-start">
				{project && <OcProjectSidebar project={project} />}
				{project && <OcProjectContent project={project} />}
			</div>
		</main>
	);
};

export default SingleProject;
