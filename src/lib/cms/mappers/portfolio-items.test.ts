import { describe, expect, it } from 'vitest';

import type { CMSPortfolioItem } from '../types';
import { mapPortfolioCard, mapPortfolioItem } from './portfolio-items';

const makeItem = (
	overrides: Partial<CMSPortfolioItem> = {}
): CMSPortfolioItem => ({
	title: 'Design system',
	slug: 'design-system',
	portfolioType: 'empresa',
	year: 2025,
	roleAndScope: 'Lead designer',
	coverImage: { url: 'https://cdn.example.com/cover.webp' },
	discipline: 'both',
	stackInContext: null,
	techStack: [],
	liveUrl: null,
	featured: null,
	contextSummary: null,
	contextBody: null,
	contextTags: [],
	measurableGoal: null,
	processSummary: null,
	processTags: [],
	realUser: null,
	criticalFlows: null,
	explorationAndDiscarded: null,
	informationArchitecture: null,
	processImages: [],
	designDecisionsSummary: null,
	designDecisionsTags: [],
	designDecisions: [],
	visualSystem: null,
	edgeCases: null,
	codeTransitionSummary: null,
	codeTransitionTags: [],
	componentArchitecture: null,
	whatChangedWhenCoding: null,
	tokensAndNaming: null,
	handoffAndDocs: null,
	gallery: [],
	beforeAfterImages: null,
	videoUrl: null,
	resultSummary: null,
	whatChanged: null,
	whatIdoDifferently: null,
	metrics: null,
	nextSteps: null,
	...overrides,
});

describe('mapPortfolioItem', () => {
	it.each([
		['https://youtu.be/abc123', 'https://www.youtube.com/embed/abc123'],
		[
			'https://www.youtube.com/watch?v=abc123&t=10',
			'https://www.youtube.com/embed/abc123',
		],
		['https://vimeo.com/42', 'https://vimeo.com/42'],
		['not a url', 'not a url'],
		[null, null],
	])('turns video url %s into %s', (videoUrl, expected) => {
		expect(mapPortfolioItem(makeItem({ videoUrl })).videoUrl).toBe(
			expected
		);
	});

	it('extracts the raw rich text and keeps nulls', () => {
		const raw = { children: [{ type: 'paragraph' }] };
		const item = mapPortfolioItem(
			makeItem({ contextBody: { raw }, metrics: null })
		);

		expect(item.contextBody).toEqual(raw);
		expect(item.metrics).toBeNull();
	});

	it('maps design decisions with and without an image', () => {
		const item = mapPortfolioItem(
			makeItem({
				designDecisions: [
					{
						decisionTitle: 'Tokens',
						decisionBody: { raw: 'body' },
						decisionImage: {
							url: 'https://cdn.example.com/d.webp',
						},
					},
					{
						decisionTitle: 'Naming',
						decisionBody: { raw: 'body' },
						decisionImage: null,
					},
				],
			})
		);

		expect(item.designDecisions).toEqual([
			{
				title: 'Tokens',
				body: 'body',
				image: { url: 'https://cdn.example.com/d.webp' },
			},
			{ title: 'Naming', body: 'body', image: null },
		]);
	});

	it('defaults featured to false', () => {
		expect(mapPortfolioItem(makeItem()).featured).toBe(false);
	});
});

describe('mapPortfolioCard', () => {
	it('maps the card fields with defaults', () => {
		expect(mapPortfolioCard(makeItem())).toEqual({
			title: 'Design system',
			slug: 'design-system',
			portfolioType: 'empresa',
			discipline: 'both',
			year: 2025,
			roleAndScope: 'Lead designer',
			featured: false,
			contextSummary: null,
			coverImage: { url: 'https://cdn.example.com/cover.webp' },
			liveUrl: null,
		});
	});
});
