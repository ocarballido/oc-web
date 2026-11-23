import { describe, expect, it } from 'vitest';

import type { CMSThinkCard, CMSThinkCardType, CMSWelcome } from '../types';
import { mapWelcome, mapWelcomes } from './welcome';

const makeCard = (overrides: Partial<CMSThinkCard> = {}): CMSThinkCard => ({
	id: 'c1',
	link: null,
	description: 'Description',
	title: 'Title',
	type: 'design',
	tools: [],
	...overrides,
});

const makeWelcome = (overrides: Partial<CMSWelcome> = {}): CMSWelcome => ({
	id: 'w1',
	title: 'Hi',
	subtitle: 'Subtitle',
	content: [],
	thinkCard: [],
	...overrides,
});

describe('mapWelcome', () => {
	it('drops blank content paragraphs', () => {
		const welcome = mapWelcome(
			makeWelcome({ content: ['First', '   ', '', 'Second'] })
		);

		expect(welcome.content).toEqual(['First', 'Second']);
	});

	it('falls back to empty strings and lists when the CMS returns nulls', () => {
		expect(
			mapWelcome(
				makeWelcome({
					title: null,
					subtitle: null,
					content: null,
					thinkCard: null,
				})
			)
		).toEqual({ title: '', subtitle: '', content: [], thinkCards: [] });
	});

	it('skips null think cards and tools without an id', () => {
		const welcome = mapWelcome(
			makeWelcome({
				thinkCard: [
					null,
					makeCard({
						tools: [
							{ id: 't1', badgeTitle: 'React' },
							{ badgeTitle: 'No id' },
							null,
						],
					}),
				],
			})
		);

		expect(welcome.thinkCards).toHaveLength(1);
		expect(welcome.thinkCards[0].tools).toEqual([
			{ id: 't1', badgeTitle: 'React' },
		]);
	});

	it('normalizes the think card type and defaults to develop', () => {
		const types = [
			'DESIGN' as CMSThinkCardType,
			'other' as CMSThinkCardType,
			null,
		];
		const welcome = mapWelcome(
			makeWelcome({ thinkCard: types.map((type) => makeCard({ type })) })
		);

		expect(welcome.thinkCards.map((card) => card.type)).toEqual([
			'design',
			'develop',
			'develop',
		]);
	});

	it('maps a null link to undefined', () => {
		const welcome = mapWelcome(
			makeWelcome({ thinkCard: [makeCard({ link: null })] })
		);

		expect(welcome.thinkCards[0].link).toBeUndefined();
	});
});

describe('mapWelcomes', () => {
	it('returns an empty list when the CMS returns null', () => {
		expect(mapWelcomes(null)).toEqual([]);
	});
});
