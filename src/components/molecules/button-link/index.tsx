import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

type ButtonLinkProps = {
	active?: boolean;
	className?: string;
	color?: 'primary' | 'secondary' | 'white';
	target?: '_blank' | '_self' | '_parent' | '_top';
	disabled?: boolean;
	icon?: string;
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
			target={target}
		>
			{icon && <Image src={icon} alt="Icon" height={16} width={16} />}

			{label}
		</Link>
	);
};

export default OcButtonLink;
