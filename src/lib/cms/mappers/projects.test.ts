import { describe, expect, it } from 'vitest';

import type { CMSProject } from '../types';
import { toProjectCard } from './projects';

const makeProject = (overrides: Partial<CMSProject> = {}): CMSProject => ({
	id: 'p1',
	title: 'Portfolio',
	shortDescription: 'Personal site',
	description: null,
	client: 'Acme',
	date: '2024-06-15',
	role: null,
	code: true,
	design: false,
	images: null,
	technologies: null,
	link: 'https://example.com',
	thumbnail: { url: 'https://cdn.example.com/thumb.webp' },
	...overrides,
});

describe('toProjectCard', () => {
	it('maps the card fields and keeps only the year of the date', () => {
		expect(toProjectCard(makeProject())).toEqual({
			id: 'p1',
			thumbnail: 'https://cdn.example.com/thumb.webp',
			code: true,
			design: false,
			title: 'Portfolio',
			client: 'Acme',
			link: 'https://example.com',
			date: '2024',
			shortDescription: 'Personal site',
		});
	});

	it('falls back to defaults when the CMS returns nulls', () => {
		const card = toProjectCard(
			makeProject({
				title: null,
				client: null,
				link: null,
				shortDescription: null,
				code: null,
				design: null,
			})
		);

		expect(card).toMatchObject({
			title: '(Sin título)',
			client: '',
			link: '',
			shortDescription: '',
			code: false,
			design: false,
		});
	});

	it('drops a missing or empty thumbnail', () => {
		expect(
			toProjectCard(makeProject({ thumbnail: null })).thumbnail
		).toBeUndefined();
		expect(
			toProjectCard(makeProject({ thumbnail: { url: '' } })).thumbnail
		).toBeUndefined();
	});
});
