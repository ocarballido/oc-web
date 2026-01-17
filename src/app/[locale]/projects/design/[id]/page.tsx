import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import type {
	GetProjectByIdResponse,
	GetProjectByIdVariables,
} from '@/lib/cms/types';

import OcProjectSidebar from '@/components/organisms/project-sidebar';
import OcProjectContent from '@/components/organisms/project-content';
import OcProjectSingle from '@/components/organisms/project-single';

import { GET_PROJECT_BY_ID } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';
import { mapProject } from '@/lib/cms/mappers/single-project';

import { DEFAULT_LOCALE } from '@/config/config-constants';

export const revalidate = 300;

type Locale = 'es' | 'en';

async function getProjectById(id: string, locale: Locale) {
	const data = await hygraph.request<
		GetProjectByIdResponse,
		GetProjectByIdVariables
	>(GET_PROJECT_BY_ID, {
		id,
		locales: [locale, DEFAULT_LOCALE], // fallback
	});

	const cmsProject = data?.project;
	if (!cmsProject) notFound();

	return mapProject(cmsProject);
}

type MetaProps = { params: Promise<{ locale: Locale; id: string }> };

export async function generateMetadata({
	params,
}: MetaProps): Promise<Metadata> {
	const { locale, id } = await params;
	if (!id) notFound();

	const project = await getProjectById(id, locale);

	return {
		title: project.title ?? 'Proyecto',
	};
}

type PageProps = { params: Promise<{ locale: Locale; id: string }> };

export default async function SingleProject({ params }: PageProps) {
	const { locale, id } = await params;
	if (!id) notFound();

	const project = await getProjectById(id, locale);

	return (
		<OcProjectSingle>
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
				problem={project.problem}
				users={project.users}
				solution={project.solution}
				principles={project.principles}
				uxDecisions={project.uxDecisions}
				outcome={project.outcome}
				needsTable={project.needsTable}
			/>
		</OcProjectSingle>
	);
}
