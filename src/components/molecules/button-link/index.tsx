import { Link } from '@/i18n/navigation';

import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonLinkProps = {
	active?: boolean;
	className?: string;
	color?: 'primary' | 'secondary' | 'white';
	target?: '_blank' | '_self' | '_parent' | '_top';
	disabled?: boolean;
	icon?: ReactNode;
	label: string;
	href: string;
};

const OcButtonLink = ({
	active = false,
	className = '',
	color = 'primary',
	icon,
	label,
	target,
	href,
}: ButtonLinkProps) => {
	const buttonStyles = clsx(
		{ 'pl-4': icon },
		{
			'bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 text-white':
				color === 'primary' && !active,
		},
		{
			'bg-primary-10 hover:bg-primary-50/60 focus:bg-primary-50 text-primary-400 dark:bg-[#293b54] dark:hover:bg-[#354a68] dark:focus:bg-[#354a68] dark:text-[#95add9]':
				color === 'secondary' && !active,
		},
		{
			'bg-white hover:bg-primary-10 focus:bg-primary-10 text-primary-400':
				color === 'white' && !active,
		},
		{
			'bg-primary-500 text-white': color === 'primary' && active,
		},
		{
			'bg-primary-10 text-primary-400': color === 'secondary' && active,
		},
		{
			'bg-primary-10 text-primary-400': color === 'white' && active,
		}
	);

	return (
		<Link
			className={`font-medium text-base rounded-full transition-all flex items-center justify-center gap-1 py-2 px-5 hover:cursor-pointer disabled:opacity-30 disabled:pointer-events-none ${buttonStyles} ${className}`}
			href={href}
			target={target}
		>
			{icon || null}

			{label}
		</Link>
	);
};

export default OcButtonLink;
