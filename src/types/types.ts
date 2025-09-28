export const PROJECT_TYPES = ['both', 'develop', 'design'] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export type ProjectCard = {
	id: string;
	type: ProjectType;
	year: string;
	image: string;
	title: string;
	shortDescription: string;
};

export type Project = {
	id: string;
	type: ProjectType;
	year: string;
	description: string;
	image: string;
	client: string;
	role: string;
	title: string;
	technologies: string[];
	shortDescription: string;
};
