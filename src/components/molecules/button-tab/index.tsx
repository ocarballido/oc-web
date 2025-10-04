import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

type ButtonTabProps = {
	active?: boolean;
	className?: string;
	color?: 'primary' | 'secondary' | 'white';
	disabled?: boolean;
	iconBefore?: string;
	iconAfter?: string;
	label: string;
	href: string;
};

const OcButtonTab = ({
	active = false,
	className = '',
	color = 'primary',
	iconBefore,
	iconAfter,
	label,
	href,
}: ButtonTabProps) => {
	const buttonStyles = clsx(
		{ 'pl-4': iconBefore },
		{ 'pr-4': iconAfter },
		{
			'bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 text-white':
				color === 'primary' && !active,
		},
		{
			'bg-primary-10 hover:bg-primary-50 focus:bg-primary-50 text-primary-400':
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
		>
			{iconBefore && (
				<Image src={iconBefore} alt="Icon" height={24} width={24} />
			)}
			{label}
			{iconAfter && (
				<Image src={iconAfter} alt="Icon" height={24} width={24} />
			)}
		</Link>
	);
};

export default OcButtonTab;
