import clsx from 'clsx';

import { CMSTrajectory } from '@/lib/cms/types';

import OcCard from '@/components/atoms/card';
import OcBadgeTimeLine from '../badge-time-line';
import OcBadge from '../badge';

type OcCardTrajectoryProps = CMSTrajectory & {
	isFirst?: boolean;
	isLast?: boolean;
	rowReverse?: boolean;
};

const OcCardTrajectory = ({
	isFirst = false,
	isLast = false,
	rowReverse = false,
	begin,
	end,
	company,
	location,
	role,
	responsabilities,
	tools,
}: OcCardTrajectoryProps) => {
	const componentStyles = clsx({
		'md:flex-row-reverse': rowReverse,
		'my-0 md:-my-[80px]': !isFirst && !isLast,
		'md:flex-row': !rowReverse,
	});
	const lineStyles = clsx(
		{
			'h-full top-0': !isFirst && !isLast,
		},
		{
			'h-[calc(100%-3rem)] md:h-[50%] top-12 md:top-[50%]': isFirst,
		},
		{
			'h-12 md:h-[50%] top-0': isLast,
		}
	);
	const beginStyles = clsx({
		'text-left md:text-right md:flex-row-reverse': rowReverse,
	});
	const cardStyles = clsx({
		'md:-ml-7 md:-mr-7 ml-8': rowReverse,
		'md:-mr-7 md:-ml-7 ml-8': !rowReverse,
	});

	return (
		<div
			className={`flex flex-col md:items-center justify-center gap-1 md:gap-10 relative ${componentStyles}`}
		>
			<OcCard
				className={`flex flex-col gap-5 flex-1 max-w-[300px] ${cardStyles}`}
			>
				<OcBadgeTimeLine
					begin={begin.toString()}
					end={end.toString()}
				/>
				<div>
					<h3 className="text-sm font-bold">Empresa:</h3>
					<p className="text-sm opacity-70">
						{company} {location}
					</p>
				</div>
				<div>
					<h3 className="text-sm font-bold">Role:</h3>
					<p className="text-sm opacity-70">{role}</p>
				</div>
				<div>
					<h3 className="text-sm font-bold">Responsabilidades:</h3>
					<ul className="list-disc pl-4">
						{responsabilities.map((item, index) => (
							<li key={index} className="text-sm opacity-70">
								{item}
							</li>
						))}
					</ul>
				</div>
				{tools && (
					<div className="flex gap-1 flex-wrap  mt-auto mb-2">
						{tools.map((item, index) => (
							<OcBadge
								key={index}
								label={item.badgeTitle}
								color="secondary"
							/>
						))}
					</div>
				)}
			</OcCard>
			<span
				className={`flex w-1 bg-(--background-light) absolute left-1.5 md:left-auto z-0 ${lineStyles}`}
			></span>
			<div
				className={`order-first md:order-last flex flex-1 items-center gap-5 text-6xl font-black text-(--background-light) max-w-[300px] mt-5 md:mt-0 ${beginStyles}`}
			>
				<span className="flex w-4 h-4 bg-primary-400 border-5 border-(--background-light) rounded-full z-1"></span>
				{end}
			</div>
		</div>
	);
};

export default OcCardTrajectory;
