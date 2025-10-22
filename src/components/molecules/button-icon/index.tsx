import Image from 'next/image';
import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonProps = {
	active?: boolean;
	className?: string;
	color?: 'primary' | 'secondary' | 'white';
	disabled?: boolean;
	icon: ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const OcButtonIcon = ({
	active = false,
	className = '',
	color = 'primary',
	disabled = false,
	icon,
	onClick,
}: ButtonProps) => {
	const buttonStyles = clsx(
		{
			'bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 text-white':
				color === 'primary' && !active,
		},
		{
			'bg-primary-10 hover:bg-primary-50 focus:bg-primary-50 dark:bg-[#293b54] dark:hover:bg-[#354a68] focus:bg-[#354a68]':
				color === 'secondary' && !active,
		},
		{
			'bg-white hover:bg-primary-10 focus:bg-primary-10 dark:bg-(--background-light) dark:hover:bg-[#293B54] dark:focus:bg-[#293B54]':
				color === 'white' && !active,
		},
		{
			'bg-primary-500 text-white': color === 'primary' && active,
		},
		{
			'bg-primary-10': color === 'secondary' && active,
		}
	);

	return (
		<button
			className={`rounded-full transition-all items-center justify-center p-2 hover:cursor-pointer disabled:opacity-30 disabled:pointer-events-none ${buttonStyles} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{icon}
		</button>
	);
};

export default OcButtonIcon;
