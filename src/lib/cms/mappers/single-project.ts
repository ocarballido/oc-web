// src/lib/cms/mappers/project.ts
import type {
	CMSProject,
	CMSBadge,
	CMSImage,
	CMSTitleSubtitleDescription,
} from '@/lib/cms/types';
import type { ProjectDetail } from '@/types/types';

export type ProjectTextBlock = {
	id?: string;
	title?: string;
	subtitle?: string;
	description?: string;
	list?: string[];
};

const mapMultilineList = (value: unknown): string[] | undefined => {
	// Si ya es array de strings (por ejemplo si ya venía transformado)
	if (Array.isArray(value)) {
		const arr = value.filter((v): v is string => typeof v === 'string');
		const cleaned = arr.map((v) => v.trim()).filter(Boolean);
		return cleaned.length ? cleaned : undefined;
	}

	// Si es string (Hygraph multiline típico)
	if (typeof value === 'string') {
		const cleaned = value
			.split(/\n\s*\n/)
			.map((v) => v.trim())
			.filter(Boolean);
		return cleaned.length ? cleaned : undefined;
	}

	return undefined;
};

const isObject = (v: unknown): v is Record<string, unknown> =>
	typeof v === 'object' && v !== null;

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

const mapTextBlock = (
	block?: CMSTitleSubtitleDescription | null,
): ProjectTextBlock | undefined =>
	block
		? {
				id: block.id,
				title: block.title ?? '',
				subtitle: block.subtitle ?? '',
				description: block.description ?? '',
				list: mapMultilineList(block.list),
			}
		: undefined;

export function mapProject(cms: CMSProject): ProjectDetail {
	const rawImages = Array.isArray(cms.images) ? cms.images : [];
	const images = rawImages
		.filter(isImage)
		.map((img) => ({ url: img.url!, id: img.id! }));

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
		date: new Date(cms.date).getFullYear().toString(),
		images,
		technologies,
		problem: mapTextBlock(cms.problem),
		users: mapTextBlock(cms.users),
		solution: mapTextBlock(cms.solution),
		principles: mapTextBlock(cms.principles),
		uxDecisions: mapTextBlock(cms.uxDecisions),
		outcome: mapTextBlock(cms.outcome),
		needsTable: cms.needsTable ?? null,
		link: cms.link ?? null,
		thumbnail,
	};
}
