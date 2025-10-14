import clsx from 'clsx';

import OcBadgeIndicator from '../badge-indicator';

import type { CMSSkillCard } from '@/lib/cms/types';

const OcSkillCard = ({ type, categories }: CMSSkillCard) => {
	const cardStyles = clsx({
		'bg-primary-400': type === 'design',
	});

	const contentStyles = clsx({
		'text-white': type === 'design',
	});

	const titleStyles = clsx(
		{
			'text-primary-400': type === 'develop',
		},
		{
			'text-white': type === 'design',
		}
	);

	return (
		<div
			className={`p-6 md:max-w-[400px] flex flex-col gap-3 flex-1 ${cardStyles}`}
		>
			<OcBadgeIndicator
				code={type === 'develop'}
				design={type === 'design'}
				color={type === 'design' ? 'white' : 'primary'}
			/>
			<h2 className={`text-3xl font-normal ${titleStyles}`}>
				{type === 'design' ? 'Think Creatively' : 'Think Logically'}
			</h2>
			<div className={`flex gap-3 flex-wrap w-full ${contentStyles}`}>
				{categories &&
					categories.length > 0 &&
					categories.map((category) => (
						<div key={category.id} className="w-full">
							<h3 className="font-bold text-md mb-2">
								{category.title}
							</h3>
							<ul>
								{category.list.map((item) => (
									<li
										key={item}
										className="font-normal text-sm mb-2"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
			</div>
		</div>
	);
};

export default OcSkillCard;
