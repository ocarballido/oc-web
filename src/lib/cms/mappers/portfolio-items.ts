import type {
	CMSPortfolioItem,
	CMSPortfolioAsset,
	CMSPortfolioDesignDecision,
} from '@/lib/cms/types';

// ─── Domain types ─────────────────────────────────────────────────────────────

export type PortfolioAsset = {
	url: string;
};

export type PortfolioDesignDecision = {
	title: string;
	body: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	image: PortfolioAsset | null;
};

export type PortfolioItem = {
	// META — required
	title: string;
	slug: string;
	portfolioType: string;
	year: number;
	roleAndScope: string;
	coverImage: PortfolioAsset;

	// META — optional
	discipline: 'design' | 'develop' | 'both';
	stackInContext: string | null;
	techStack: string[];
	liveUrl: string | null;
	featured: boolean;

	// Bloque 01 — optional
	contextSummary: string | null;
	contextBody: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	contextTags: string[];
	measurableGoal: string | null;

	// Bloque 02 — optional
	processSummary: string | null;
	processTags: string[];
	realUser: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	criticalFlows: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	explorationAndDiscarded: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	informationArchitecture: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	processImages: PortfolioAsset[];

	// Bloque 03 — optional
	designDecisionsSummary: string | null;
	designDecisionsTags: string[];
	designDecisions: PortfolioDesignDecision[];
	visualSystem: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	edgeCases: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any

	// Bloque 04 — optional
	codeTransitionSummary: string | null;
	codeTransitionTags: string[];
	componentArchitecture: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	whatChangedWhenCoding: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	tokensAndNaming: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	handoffAndDocs: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any

	// Bloque 05
	gallery: PortfolioAsset[];
	beforeAfterImages: PortfolioAsset | null;
	videoUrl: string | null;

	// Bloque 06 — optional
	resultSummary: string | null;
	whatChanged: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	whatIdoDifferently: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	metrics: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
	nextSteps: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type PortfolioCard = {
	title: string;
	slug: string;
	portfolioType: string;
	discipline: 'design' | 'develop' | 'both';
	year: number;
	roleAndScope: string;
	featured: boolean;
	contextSummary: string | null;
	coverImage: PortfolioAsset;
	liveUrl: string | null;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function mapAsset(asset: CMSPortfolioAsset): PortfolioAsset {
	return { url: asset.url };
}

function mapAssets(assets: CMSPortfolioAsset[]): PortfolioAsset[] {
	return assets.map(mapAsset);
}

function mapDecision(d: CMSPortfolioDesignDecision): PortfolioDesignDecision {
	return {
		title: d.decisionTitle,
		body: d.decisionBody.raw,
		image: d.decisionImage ? mapAsset(d.decisionImage) : null,
	};
}

function toYouTubeEmbedUrl(url: string | null): string | null {
	if (!url) return null;
	try {
		const parsed = new URL(url);
		if (parsed.hostname === 'youtu.be') {
			return `https://www.youtube.com/embed${parsed.pathname}`;
		}
		const v = parsed.searchParams.get('v');
		if (v) return `https://www.youtube.com/embed/${v}`;
	} catch {}
	return url;
}

// ─── Mappers ──────────────────────────────────────────────────────────────────

export function mapPortfolioItem(cms: CMSPortfolioItem): PortfolioItem {
	return {
		title: cms.title,
		slug: cms.slug,
		portfolioType: cms.portfolioType,
		year: cms.year,
		roleAndScope: cms.roleAndScope,
		coverImage: mapAsset(cms.coverImage),
		discipline: cms.discipline,
		stackInContext: cms.stackInContext ?? null,
		techStack: cms.techStack ?? [],
		liveUrl: cms.liveUrl ?? null,
		featured: cms.featured ?? false,

		contextSummary: cms.contextSummary ?? null,
		contextBody: cms.contextBody?.raw ?? null,
		contextTags: cms.contextTags,
		measurableGoal: cms.measurableGoal ?? null,

		processSummary: cms.processSummary ?? null,
		processTags: cms.processTags,
		realUser: cms.realUser?.raw ?? null,
		criticalFlows: cms.criticalFlows?.raw ?? null,
		explorationAndDiscarded: cms.explorationAndDiscarded?.raw ?? null,
		informationArchitecture: cms.informationArchitecture?.raw ?? null,
		processImages: mapAssets(cms.processImages),

		designDecisionsSummary: cms.designDecisionsSummary ?? null,
		designDecisionsTags: cms.designDecisionsTags,
		designDecisions: cms.designDecisions.map(mapDecision),
		visualSystem: cms.visualSystem?.raw ?? null,
		edgeCases: cms.edgeCases?.raw ?? null,

		codeTransitionSummary: cms.codeTransitionSummary ?? null,
		codeTransitionTags: cms.codeTransitionTags,
		componentArchitecture: cms.componentArchitecture?.raw ?? null,
		whatChangedWhenCoding: cms.whatChangedWhenCoding?.raw ?? null,
		tokensAndNaming: cms.tokensAndNaming?.raw ?? null,
		handoffAndDocs: cms.handoffAndDocs?.raw ?? null,

		gallery: mapAssets(cms.gallery),
		beforeAfterImages: cms.beforeAfterImages
			? mapAsset(cms.beforeAfterImages)
			: null,
		videoUrl: toYouTubeEmbedUrl(cms.videoUrl),

		resultSummary: cms.resultSummary ?? null,
		whatChanged: cms.whatChanged?.raw ?? null,
		whatIdoDifferently: cms.whatIdoDifferently?.raw ?? null,
		metrics: cms.metrics?.raw ?? null,
		nextSteps: cms.nextSteps?.raw ?? null,
	};
}

export function mapPortfolioCard(
	cms: Pick<
		CMSPortfolioItem,
		| 'title'
		| 'slug'
		| 'portfolioType'
		| 'discipline'
		| 'year'
		| 'roleAndScope'
		| 'coverImage'
		| 'contextSummary'
		| 'featured'
		| 'liveUrl'
	>,
): PortfolioCard {
	return {
		title: cms.title,
		slug: cms.slug,
		portfolioType: cms.portfolioType,
		discipline: cms.discipline,
		year: cms.year,
		roleAndScope: cms.roleAndScope,
		featured: cms.featured ?? false,
		contextSummary: cms.contextSummary ?? null,
		coverImage: mapAsset(cms.coverImage),
		liveUrl: cms.liveUrl ?? null,
	};
}
