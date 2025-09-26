import Image from 'next/image';

import { useMemo } from 'react';

import clsx from 'clsx';

type BadgeProps = {
	className?: string;
	type?: 'both' | 'code' | 'design';
	color?: 'primary' | 'white';
};

const imageMap = {
	both: 'both',
	code: 'left',
	design: 'right',
	primary: 'primary',
	white: 'white',
};

const OcBadgeIndicator = ({ type = 'both', color = 'primary' }: BadgeProps) => {
	const badgeStyles = clsx(
		{
			'text-primary-400': color === 'primary',
		},
		{
			'text-white': color === 'white',
		}
	);

	const badgeLabel = useMemo(() => {
		switch (true) {
			case type === 'code':
				return 'DESARROLLO';
			case type === 'design':
				return 'DISEÑO';
			default:
				return 'DESARROLLO Y DISEÑO';
		}
	}, [type]);

	return (
		<div className="flex gap-1 items-center">
			<Image
				src={`/static/icons/brain-${imageMap[type]}-${imageMap[color]}.svg`}
				alt="Icon"
				height={24}
				width={24}
			/>
			<p
				className={`text-primary-400 font-bold text-xs tracking-wider ${badgeStyles}`}
			>
				{badgeLabel}
			</p>
		</div>
	);
};

export default OcBadgeIndicator;
