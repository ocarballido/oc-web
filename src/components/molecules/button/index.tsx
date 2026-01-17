'use client';

import Image from 'next/image';

import clsx from 'clsx';

type ButtonProps = {
	active?: boolean;
	className?: string;
	color?: 'primary' | 'secondary' | 'white';
	disabled?: boolean;
	icon?: string;
	iconRight?: string;
	label: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const OcButton = ({
	active = false,
	className = '',
	color = 'primary',
	disabled = false,
	icon,
	iconRight,
	label,
	onClick,
}: ButtonProps) => {
	const buttonStyles = clsx(
		{ 'pl-4': icon },
		{ 'pr-4': iconRight },
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
		<button
			className={`font-medium text-base rounded-full transition-all flex items-center justify-center gap-1 py-2 px-5 hover:cursor-pointer disabled:opacity-30 disabled:pointer-events-none ${buttonStyles} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{icon && <Image src={icon} alt="Icon" height={16} width={16} />}

			{label}

			{iconRight && (
				<Image src={iconRight} alt="Icon" height={16} width={16} />
			)}
		</button>
	);
};

export default OcButton;
