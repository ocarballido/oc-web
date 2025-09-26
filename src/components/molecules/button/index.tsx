'use client';

import Image from 'next/image';

import clsx from 'clsx';

type ButtonProps = {
	active?: boolean;
	className?: string;
	color?: 'primary' | 'secondary' | 'white';
	disabled?: boolean;
	icon?: string;
	label: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const OcButton = ({
	active = false,
	className = '',
	color = 'primary',
	disabled = false,
	icon,
	label,
	onClick,
}: ButtonProps) => {
	const buttonStyles = clsx(
		{ 'pl-4': icon },
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
				color === 'white',
		},
		{
			'bg-primary-500 text-white': color === 'primary' && active,
		},
		{
			'bg-primary-10 text-primary-400': color === 'secondary' && active,
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
		</button>
	);
};

export default OcButton;
