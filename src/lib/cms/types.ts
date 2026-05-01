export type CMSProject = {
	id: string;
	title: string | null;
	shortDescription: string | null;
	description: string | null;
	client: string | null;
	date: string;
	role: string | null;
	code: boolean | null;
	design: boolean | null;
	images: Array<CMSImage | null> | null;
	technologies: Array<CMSBadge | null> | null;
	problem?: CMSTitleSubtitleDescription | null;
	users?: CMSTitleSubtitleDescription | null;
	solution?: CMSTitleSubtitleDescription | null;
	principles?: CMSTitleSubtitleDescription | null;
	uxDecisions?: CMSTitleSubtitleDescription | null;
	outcome?: CMSTitleSubtitleDescription | null;
	needsTable?: NeedsTableRow[] | null;
	link?: string | null;
	thumbnail?: { url?: string | null } | null;
};

export type CMSBadge = { id?: string; badgeTitle: string };

export type CMSTitleSubtitleDescription = {
	id?: string;
	title?: string;
	subtitle?: string;
	description?: string;
	list?: string[];
};

type NeedsTableRow = {
	id?: string;
	user?: string;
	need?: string;
	solution?: string;
};

export type CMSTrajectory = {
	id?: string;
	begin: number;
	end: number;
	company: string | null;
	location: string | null;
	role: string | null;
	responsabilities: string[];
	tools?: CMSBadge[] | [];
};

export type CMSImage = {
	url: string | null;
	id: string | null;
};

export type CMSSingleProject = CMSProject;

export type GetProjectByIdResponse = { project: CMSSingleProject | null };
export type GetProjectByIdVariables = {
	id: string;
	locales: ('es' | 'en')[];
};

export type CMSThinkCardType = 'develop' | 'design';

export interface CMSThinkCard {
	__typename?: 'ThinkCard';
	id: string;
	link: string | null;
	description: string | null;
	title: string | null;
	type: CMSThinkCardType | null;
	tools: Array<CMSBadge | null> | null;
}

export interface CMSWelcome {
	id: string;
	title: string | null;
	subtitle: string | null;
	content: string[] | null;
	thinkCard: Array<CMSThinkCard | null> | null;
}
export interface GetWelcomesResponse {
	welcomes: Array<CMSWelcome> | null;
}
export type GetWelcomesVariables = Record<string, never>;

export type CMSSkillCategoryList = {
	__typename?: 'SkillCategoryList';
	id: string;
	title: string;
	list: string[];
};

export type CMSSkillCard = {
	__typename?: 'SkillCard';
	id?: string;
	type: CMSThinkCardType;
	categories: CMSSkillCategoryList[];
};

export type CMSSkill = {
	__typename?: 'Skill';
	id: string;
	skill: Array<CMSSkillCard> | null;
};

export interface GetSkillsResponse {
	skills: Array<CMSSkill>;
}

// ─── PORTFOLIO ITEM ───────────────────────────────────────────────────────────

export type CMSPortfolioAsset = {
	url: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CMSRichText = { raw: any };

export type CMSPortfolioProjectType = 'personal' | 'cliente' | 'empresa';

export type CMSPortfolioDiscipline = 'design' | 'develop' | 'both';

export type CMSPortfolioDesignDecision = {
	decisionTitle: string;
	decisionBody: CMSRichText;
	decisionImage: CMSPortfolioAsset | null;
};

export type CMSPortfolioItem = {
	// META — NON_NULL
	title: string;
	slug: string;
	portfolioType: CMSPortfolioProjectType;
	year: number;
	roleAndScope: string;
	coverImage: CMSPortfolioAsset;

	// META — nullable
	discipline: CMSPortfolioDiscipline;
	stackInContext: string | null;
	techStack: string[];
	liveUrl: string | null;
	featured: boolean | null;

	// Bloque 01 — nullable
	contextSummary: string | null;
	contextBody: CMSRichText | null;
	contextTags: string[];
	measurableGoal: string | null;

	// Bloque 02 — nullable
	processSummary: string | null;
	processTags: string[];
	realUser: CMSRichText | null;
	criticalFlows: CMSRichText | null;
	explorationAndDiscarded: CMSRichText | null;
	informationArchitecture: CMSRichText | null;
	processImages: CMSPortfolioAsset[];

	// Bloque 03 — nullable
	designDecisionsSummary: string | null;
	designDecisionsTags: string[];
	designDecisions: CMSPortfolioDesignDecision[];
	visualSystem: CMSRichText | null;
	edgeCases: CMSRichText | null;

	// Bloque 04 — nullable
	codeTransitionSummary: string | null;
	codeTransitionTags: string[];
	componentArchitecture: CMSRichText | null;
	whatChangedWhenCoding: CMSRichText | null;
	tokensAndNaming: CMSRichText | null;
	handoffAndDocs: CMSRichText | null;

	// Bloque 05
	gallery: CMSPortfolioAsset[];
	beforeAfterImages: CMSPortfolioAsset | null;
	videoUrl: string | null;

	// Bloque 06 — nullable
	resultSummary: string | null;
	whatChanged: CMSRichText | null;
	whatIdoDifferently: CMSRichText | null;
	metrics: CMSRichText | null;
	nextSteps: CMSRichText | null;
};

export type GetPortfolioItemsResponse = {
	portfolioItems: Pick<
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
	>[];
};

export type GetPortfolioItemResponse = {
	portfolioItem: CMSPortfolioItem | null;
};

export type GetPortfolioItemVariables = {
	slug: string;
	locales: ('es' | 'en')[];
};

export type GetPortfolioItemsVariables = {
	locales: ('es' | 'en')[];
};
