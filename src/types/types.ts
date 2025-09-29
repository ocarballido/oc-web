export const PROJECT_TYPES = ['both', 'develop', 'design'] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export type ProjectCard = {
	id: string;
	year: string;
	thumbnail: string;
	code: boolean;
	design: boolean;
	title: string;
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
