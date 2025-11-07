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
	primary: 'primary',
	primaryDark: 'primary-dark',
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
			'text-primary-400 dark:text-[#95add9]': color === 'primary',
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
				src={`/static/icons/brain-${badgeImage}-${color}.svg`}
				alt="Icon"
				height={24}
				width={24}
				className="dark:hidden block"
			/>
			<Image
				src={`/static/icons/brain-${badgeImage}-${
					color === 'primary' ? 'primary-dark' : color
				}.svg`}
				alt="Icon"
				height={24}
				width={24}
				className="dark:block hidden"
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
