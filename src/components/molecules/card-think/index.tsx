import clsx from 'clsx';

import OcBadgeIndicator from '../badge-indicator';
import OcBadge from '../badge';
import OcButtonLink from '../button-link';

import type { ThinkCard } from '@/types/types';

const OcCardThink = ({ type, title, description, tools, link }: ThinkCard) => {
	const cardStyles = clsx({
		'bg-primary-400': type === 'design',
	});

	const titleStyles = clsx(
		{
			'text-primary-400': type === 'develop',
		},
		{
			'text-white': type === 'design',
		}
	);

	const descriptionStyles = clsx(
		{
			'opacity-70': type === 'develop',
		},
		{
			'text-white': type === 'design',
		}
	);

	return (
		<div
			className={`p-6 md:max-w-[400px] w-full flex flex-col gap-3 flex-1 ${cardStyles}`}
		>
			<OcBadgeIndicator
				code={type === 'develop'}
				design={type === 'design'}
				color={type === 'design' ? 'white' : 'primary'}
			/>
			<h2 className={`text-3xl font-normal ${titleStyles}`}>{title}</h2>
			<p className={`${descriptionStyles} text-sm mb-3`}>{description}</p>
			<div className="flex gap-1 flex-wrap mt-auto mb-2">
				{tools &&
					tools.length > 0 &&
					tools.map((tool) => (
						<OcBadge
							label={tool.badgeTitle}
							key={tool.id}
							color={type === 'develop' ? 'secondary' : 'primary'}
						/>
					))}
			</div>
			<OcButtonLink
				label="Ver proyectos"
				href={link || ''}
				color={type === 'develop' ? 'primary' : 'white'}
			/>
		</div>
	);
};

export default OcCardThink;
