// app/projects/[id]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import type {
	GetProjectByIdResponse,
	GetProjectByIdVariables,
} from '@/lib/cms/types';

import OcProjectSidebar from '@/components/organisms/project-sidebar';
import OcProjectContent from '@/components/organisms/project-content';

import { GET_PROJECT_BY_ID } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';
import { mapProject } from '@/lib/cms/mappers/single-project';

export const revalidate = 300;

async function getProjectById(id: string) {
	const data = await hygraph.request<
		GetProjectByIdResponse,
		GetProjectByIdVariables
	>(GET_PROJECT_BY_ID, { id });

	const cmsProject = data?.project;
	if (!cmsProject) notFound();

	return mapProject(cmsProject);
}

type MetaProps = { params: Promise<{ id: string }> };

export async function generateMetadata({
	params,
}: MetaProps): Promise<Metadata> {
	const { id } = await params;
	if (!id) notFound();

	const project = await getProjectById(id);

	return {
		title: project.title ?? 'Proyecto',
	};
}

type PageProps = { params: Promise<{ id: string }> };

export default async function SingleProject({ params }: PageProps) {
	const { id } = await params;
	if (!id) notFound();

	const project = await getProjectById(id);

	return (
		<main className="px-3 flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-3 md:gap-6 items-start">
				<OcProjectSidebar
					title={project.title}
					description={project.description}
					client={project.client}
					role={project.role}
					code={project.code}
					design={project.design}
					date={project.date}
					technologies={project.technologies}
					link={project.link ?? undefined}
				/>
				<OcProjectContent
					title={project.title ?? 'Proyecto'}
					images={project.images}
				/>
			</div>
		</main>
	);
}
