import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import OcCardTrajectory from '@/components/molecules/card-trajectory';

import { CMSTrajectory } from '@/lib/cms/types';

import { GET_TRAJECTORIES } from '@/lib/cms/queries';
import hygraph from '@/lib/cms/client';

export const metadata: Metadata = {
	title: 'Oscarballido | Trayectoria',
};

export default async function Trajectory() {
	const data = await hygraph.request<{ trajectories: CMSTrajectory[] }>(
		GET_TRAJECTORIES
	);
	const cmsTrajectories = data.trajectories ?? [];

	if (!cmsTrajectories.length) notFound();

	return (
		<main className="flex flex-col flex-1">
			<div className="py-6 max-w-7xl md:w-full lg:w-5xl xl:w-full mx-auto mb-3 lg:-mb-12">
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
