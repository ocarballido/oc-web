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
