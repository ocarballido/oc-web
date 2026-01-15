import clsx from 'clsx';

import OcBadgeIndicator from '../badge-indicator';

import type { CMSSkillCard } from '@/lib/cms/types';
import OcIconVerified from '@/components/atoms/icon/verified';

const OcSkillCard = ({ type, categories }: CMSSkillCard) => {
	const cardStyles = clsx({
		'bg-primary-400/80 backdrop-blur-md': type === 'design',
		'bg-white/80 backdrop-blur-md dark:bg-(--background-light)/80':
			type === 'develop',
	});

	const contentStyles = clsx(
		{
			'text-white': type === 'design',
		},
		{ 'dark:text-[#95add9]': type === 'develop' }
	);

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
			<h2 className={`text-3xl font-normal mb-3 ${titleStyles}`}>
				{type === 'design' ? 'Think Creatively' : 'Think Logically'}
			</h2>
			<div className={`flex gap-4 flex-wrap w-full ${contentStyles}`}>
				{categories &&
					categories.length > 0 &&
					categories.map((category) => (
						<div key={category.id} className="w-full">
							<h3 className="font-medium uppercase text-sm mb-2 flex items-center gap-1">
								<OcIconVerified
									changePrimary={false}
									color={
										type === 'design' ? 'white' : 'primary'
									}
								/>
								{category.title}
							</h3>
							<ul className="list-disc pl-5">
								{category.list.map((item) => (
									<li
										key={item}
										className="font-medium opacity-70 text-sm mb-2"
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
