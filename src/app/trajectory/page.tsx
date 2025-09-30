import OcCardTrajectory from '@/components/molecules/card-trajectory';

import { TRAJECTORY } from '@/data/trajectory';

export default function Trajectory() {
	return (
		<main className="flex flex-col flex-1">
			<div className="py-6 max-w-7xl md:w-full lg:w-5xl xl:w-full mx-auto mb-3 lg:-mb-12">
				{TRAJECTORY &&
					TRAJECTORY.length > 0 &&
					TRAJECTORY.map((item, index) => {
						const isFirst = index === 0;
						const isLast = index === TRAJECTORY.length - 1;
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
