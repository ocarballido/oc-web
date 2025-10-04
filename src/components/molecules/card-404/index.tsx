import clsx from 'clsx';

import Image from 'next/image';
import OcBadgeIndicator from '../badge-indicator';
import OcButtonLink from '../button-link';

import type { Card400 } from '@/types/types';

const OcCard400 = ({ type, image, description, link, code }: Card400) => {
	const cardStyles = clsx({
		'bg-primary-400': type === 'design',
	});

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
			className={`p-6 md:max-w-[300px] w-full flex flex-col gap-8 items-center justify-between ${cardStyles}`}
		>
			<OcBadgeIndicator
				code={type === 'develop'}
				design={type === 'design'}
				color={type === 'design' ? 'white' : 'primary'}
			/>
			{description && (
				<p className={`font-medium ${descriptionStyles}`}>
					{description}
				</p>
			)}
			{code && (
				<p className="font-black text-8xl text-primary-400">{code}</p>
			)}
			{image && (
				<Image
					src={image}
					alt="400 Not found"
					width={236}
					height={94}
				/>
			)}
			<OcButtonLink
				label="Ver proyectos"
				href={link || ''}
				color={type === 'develop' ? 'primary' : 'white'}
			/>
		</div>
	);
};

export default OcCard400;
