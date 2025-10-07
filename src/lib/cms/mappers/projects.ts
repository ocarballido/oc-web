import type { CMSProject } from '../types';
import { ProjectCard } from '@/types/types';

const toThumb = (t: CMSProject['thumbnail']): string | undefined => {
	const url = t?.url;
	return typeof url === 'string' && url.length > 0 ? url : undefined;
};

export function toProjectCard(cms: CMSProject): ProjectCard {
	return {
		id: cms.id,
		thumbnail: toThumb(cms.thumbnail),
		code: Boolean(cms.code),
		design: Boolean(cms.design),
		title: cms.title ?? '(Sin título)',
		date: new Date(cms.date).getFullYear().toString(),
		shortDescription: cms.shortDescription ?? '',
	};
}
