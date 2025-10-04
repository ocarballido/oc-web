import { CMSWelcome, CMSThinkCardType, CMSBadge, CMSThinkCard } from '../types';
import { Welcome, ThinkCard, ThinkCardType } from '@/types/types';

const isObj = (v: unknown): v is Record<string, unknown> =>
	typeof v === 'object' && v !== null;

// badge con id string no vacío (refina a id: string)
const hasBadgeId = (x: unknown): x is CMSBadge & { id: string } => {
	if (!isObj(x)) return false;
	const id = (x as CMSBadge).id;
	return typeof id === 'string' && id.length > 0;
};

const DEFAULT_TYPE: ThinkCardType = 'develop';
const normalizeType = (
	t: CMSThinkCardType | null | undefined
): ThinkCardType => {
	const v =
		typeof t === 'string'
			? (t.toLowerCase() as ThinkCardType)
			: DEFAULT_TYPE;
	return v === 'design' || v === 'develop' ? v : DEFAULT_TYPE;
};

const mapCard = (tc: CMSThinkCard): ThinkCard => {
	const tools = (Array.isArray(tc.tools) ? tc.tools : [])
		.filter(hasBadgeId)
		.map((b) => ({ id: b.id, badgeTitle: b.badgeTitle ?? '' }));

	return {
		id: tc.id,
		link: tc.link ?? undefined,
		title: tc.title ?? '',
		description: tc.description ?? '',
		type: normalizeType(tc.type),
		tools,
	};
};

export function mapWelcome(cms: CMSWelcome): Welcome {
	const content = Array.isArray(cms.content)
		? cms.content.filter(
				(s): s is string => typeof s === 'string' && s.trim().length > 0
		  )
		: [];

	const tcRaw = cms.thinkCard;
	const tcList: CMSThinkCard[] = Array.isArray(tcRaw)
		? (tcRaw.filter(Boolean) as CMSThinkCard[])
		: [];

	const thinkCards = tcList.map(mapCard);

	return {
		title: cms.title ?? '',
		subtitle: cms.subtitle ?? '',
		content,
		thinkCards,
	};
}

export const mapWelcomes = (
	items: Array<CMSWelcome> | null | undefined
): Welcome[] => (Array.isArray(items) ? items : []).map(mapWelcome);
