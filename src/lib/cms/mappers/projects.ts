import type { CMSProject } from '../types';
import { ProjectCard } from '@/types/types';

const toYear = (raw: unknown): number => {
	if (typeof raw === 'number' && Number.isFinite(raw)) return raw;
	const n = Number.parseInt(String(raw ?? ''), 10);
	return Number.isFinite(n) ? n : new Date().getFullYear();
};

const toThumb = (t: CMSProject['thumbnail']): string | undefined => {
	const url = t?.url;
	return typeof url === 'string' && url.length > 0 ? url : undefined;
};

export function toProjectCard(cms: CMSProject): ProjectCard {
	return {
		id: cms.id,
		year: toYear(cms.year),
		thumbnail: toThumb(cms.thumbnail),
		code: Boolean(cms.code),
		design: Boolean(cms.design),
		title: cms.title ?? '(Sin título)',
		shortDescription: cms.shortDescription ?? '',
	};
}
