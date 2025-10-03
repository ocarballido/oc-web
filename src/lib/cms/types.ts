export type CMSProject = {
	id: string;
	title: string | null;
	shortDescription: string | null;
	link?: string | null;
	code: boolean | null;
	design: boolean | null;
	year: number | null;
	thumbnail: { url?: string | null } | null;
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
