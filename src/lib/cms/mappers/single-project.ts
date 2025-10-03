// src/lib/cms/mappers/project.ts
import type { CMSProject, CMSBadge, CMSImage } from '@/lib/cms/types';
import type { ProjectDetail } from '@/types/types';

const isObject = (v: unknown): v is Record<string, unknown> =>
	typeof v === 'object' && v !== null;

const toYear = (raw: unknown): number => {
	if (typeof raw === 'number' && Number.isFinite(raw)) return raw;
	const n = Number.parseInt(String(raw ?? ''), 10);
	return Number.isFinite(n) ? n : new Date().getFullYear();
};

// image guard: que sea objeto y tenga url string no vacía
const isImage = (x: unknown): x is CMSImage =>
	isObject(x) &&
	typeof (x as CMSImage).url === 'string' &&
	!!(x as CMSImage).url;

// badge guard: que sea objeto y tenga id string no vacía
const isBadge = (x: unknown): x is CMSBadge =>
	isObject(x) &&
	typeof (x as CMSBadge).id === 'string' &&
	!!(x as CMSBadge).id;

export function mapProject(cms: CMSProject): ProjectDetail {
	const rawImages = Array.isArray(cms.images) ? cms.images : [];
	const images = rawImages.filter(isImage).map((img) => img.url!);

	const rawTechs = Array.isArray(cms.technologies) ? cms.technologies : [];
	const technologies = rawTechs
		.filter(isBadge)
		.map((b) => ({ id: b.id!, badgeTitle: b.badgeTitle ?? '' }));

	const thumbnail =
		isObject(cms.thumbnail) &&
		typeof cms.thumbnail?.url === 'string' &&
		cms.thumbnail.url
			? cms.thumbnail.url
			: null;

	return {
		id: cms.id,
		title: cms.title ?? null,
		shortDescription: cms.shortDescription ?? null,
		description: cms.description ?? null,
		client: cms.client ?? null,
		role: cms.role ?? null,
		code: Boolean(cms.code),
		design: Boolean(cms.design),
		year: toYear(cms.year),
		images,
		technologies,
		link: cms.link ?? null,
		thumbnail,
	};
}
