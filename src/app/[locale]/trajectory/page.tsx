import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import OcCardTrajectory from '@/components/molecules/card-trajectory';

import { CMSTrajectory } from '@/lib/cms/types';

import { GET_TRAJECTORIES } from '@/lib/cms/queries';
import { DEFAULT_LOCALE } from '@/config/config-constants';
import hygraph from '@/lib/cms/client';

type Props = {
	params: Promise<{ locale: 'es' | 'en' }>;
};

export async function generateMetadata() {
	const t = await getTranslations('MetadataTrajectory');

	return {
		title: t('title'),
	};
}

export const revalidate = 300;

export default async function Trajectory({ params }: Props) {
	const { locale } = await params;

	const data = await hygraph.request<{ trajectories: CMSTrajectory[] }>(
		GET_TRAJECTORIES,
		{
			locales: [locale, DEFAULT_LOCALE], // si tu enum en Hygraph es ES/EN
		}
	);

	const cmsTrajectories = data.trajectories ?? [];

	if (!cmsTrajectories.length) notFound();

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<main className="flex flex-col flex-1 px-3">
			<div className="py-6 max-w-7xl md:w-full lg:w-5xl xl:w-full mx-auto">
				{cmsTrajectories.map((item, index) => {
					const isFirst = index === 0;
					const isLast = index === cmsTrajectories.length - 1;
					const rowReverse = index !== 0 && index % 2 !== 0;

					return (
						<OcCardTrajectory
							key={item.id}
							isFirst={isFirst}
							isLast={isLast}
							rowReverse={rowReverse}
							begin={item.begin}
							end={item.end}
							company={item.company}
							location={item.location}
							role={item.role}
							responsabilities={item.responsabilities}
							tools={item.tools}
						/>
					);
				})}
			</div>
		</main>
	);
}
