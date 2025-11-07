'use client';

import Image from 'next/image';

import { useMemo } from 'react';

import clsx from 'clsx';

type BadgeProps = {
	className?: string;
	code?: boolean;
	design?: boolean;
	color?: 'primary' | 'white';
};

const imageMap = {
	both: 'both',
	develop: 'left',
	design: 'right',
	primary: 'primary',
	white: 'white',
};

const OcBadgeIndicator = ({
	color = 'primary',
	code,
	design,
	className = '',
}: BadgeProps) => {
	const badgeStyles = clsx(
		{
			'text-primary-400': color === 'primary',
		},
		{
			'text-white': color === 'white',
		}
	);

	const badgeImage = useMemo(() => {
		switch (true) {
			case code && !design:
				return 'left';
			case !code && design:
				return 'right';
			case !code && !design:
				return '';
			default:
				return 'both';
		}
	}, [code, design]);

	const badgeLabel = useMemo(() => {
		switch (true) {
			case code && !design:
				return 'DESARROLLO';
			case !code && design:
				return 'DISEÑO';
			case !code && !design:
				return '';
			default:
				return 'DESARROLLO Y DISEÑO';
		}
	}, [code, design]);

	return (
		<div className={`flex gap-1 items-center ${className}`}>
			<Image
				src={`/static/icons/brain-${badgeImage}-${imageMap[color]}.svg`}
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
