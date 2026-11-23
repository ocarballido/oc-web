import { describe, expect, it } from 'vitest';

import type { CMSProject, CMSTitleSubtitleDescription } from '../types';
import { mapProject } from './single-project';

const makeProject = (overrides: Partial<CMSProject> = {}): CMSProject => ({
	id: 'p1',
	title: 'Portfolio',
	shortDescription: null,
	description: null,
	client: null,
	date: '2023-06-15',
	role: null,
	code: null,
	design: true,
	images: null,
	technologies: null,
	...overrides,
});

// Hygraph returns multiline fields as a single string, while the type says string[].
const withList = (list: unknown): CMSTitleSubtitleDescription =>
	({ title: 'Problem', list }) as CMSTitleSubtitleDescription;

describe('mapProject', () => {
	it('keeps only images with a url and technologies with an id', () => {
		const project = mapProject(
			makeProject({
				images: [
					{ url: 'https://cdn.example.com/a.webp', id: 'i1' },
					{ url: '', id: 'i2' },
					{ url: null, id: 'i3' },
					null,
				],
				technologies: [
					{ id: 't1', badgeTitle: 'Figma' },
					{ badgeTitle: 'No id' },
					null,
				],
			})
		);

		expect(project.images).toEqual([
			{ url: 'https://cdn.example.com/a.webp', id: 'i1' },
		]);
		expect(project.technologies).toEqual([
			{ id: 't1', badgeTitle: 'Figma' },
		]);
	});

	it('maps nulls and the date year', () => {
		const project = mapProject(makeProject());

		expect(project).toMatchObject({
			date: '2023',
			code: false,
			design: true,
			client: null,
			role: null,
			link: null,
			needsTable: null,
			thumbnail: null,
		});
	});

	it('splits a multiline list on blank lines', () => {
		const project = mapProject(
			makeProject({
				problem: withList('First point\n\n  Second point  \n\n\n'),
			})
		);

		expect(project.problem?.list).toEqual(['First point', 'Second point']);
	});

	it('trims list arrays and drops empty lists', () => {
		const project = mapProject(
			makeProject({
				problem: withList([' One ', '', 'Two']),
				solution: withList('   '),
			})
		);

		expect(project.problem?.list).toEqual(['One', 'Two']);
		expect(project.solution?.list).toBeUndefined();
	});

	it('leaves missing text blocks undefined and fills empty fields', () => {
		const project = mapProject(
			makeProject({ problem: { id: 'b1' }, users: null })
		);

		expect(project.problem).toEqual({
			id: 'b1',
			title: '',
			subtitle: '',
			description: '',
			list: undefined,
		});
		expect(project.users).toBeUndefined();
		expect(project.outcome).toBeUndefined();
	});
});
