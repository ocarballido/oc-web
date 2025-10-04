export type CMSProject = {
	id: string;
	title: string | null;
	shortDescription: string | null;
	description: string | null;
	client: string | null;
	role: string | null;
	code: boolean | null;
	design: boolean | null;
	year: number | string | null; // ← acepta string o number
	images: Array<CMSImage | null> | null; // ← array con nulls
	technologies: Array<CMSBadge | null> | null;
	link?: string | null;
	thumbnail?: { url?: string | null } | null;
};

export type CMSBadge = { id?: string; badgeTitle: string };

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
};

export type CMSSingleProject = CMSProject;

export type GetProjectByIdResponse = { project: CMSSingleProject | null };
export type GetProjectByIdVariables = { id: string };

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
