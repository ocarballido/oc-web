export const PROJECT_TYPES = ['both', 'develop', 'design'] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export type ProjectCard = {
	id: string;
	className?: string;
	thumbnail?: string;
	code: boolean;
	design: boolean;
	title: string;
	client: string;
	date: string;
	shortDescription: string;
};

export type Project = {
	id: string;
	code: boolean;
	design: boolean;
	year: string;
	description: string;
	images: string[];
	thumbnail: string;
	link: string;
	client: string;
	role: string;
	title: string;
	technologies: string[];
	shortDescription: string;
};

export type Trajectory = {
	id: string;
	begin: number;
	end: number;
	company: string;
	location: string;
	role: string;
	responsabilities: string[];
	tools: string[];
};

export type Personal = {
	title: string;
	description: string;
};

export type ThinkMethod = {
	type: ProjectType;
	title: string;
	description: string;
	tools: string[] | [];
	link: string | null;
};

export type ProjectDetail = {
	id: string;
	title: string | null;
	shortDescription: string | null;
	description: string | null;
	client?: string | null;
	role?: string | null;
	code: boolean;
	design: boolean;
	date: string;
	images: string[];
	technologies: { id: string; badgeTitle: string }[];
	link?: string | null;
	thumbnail?: string | null;
};

// Welcome types
export type ThinkCardType = 'develop' | 'design';

export type ThinkCard = {
	id?: string;
	link?: string;
	title: string;
	type: ThinkCardType;
	description: string;
	tools: Array<{ id: string; badgeTitle: string }>;
};

export type Welcome = {
	title: string;
	subtitle: string;
	content: string[];
	thinkCards: ThinkCard[];
};

export type Card400 = {
	link?: string;
	image?: string | null;
	code?: string | null;
	type?: ThinkCardType;
	description?: string | null;
};
