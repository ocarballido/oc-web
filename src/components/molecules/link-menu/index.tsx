import Link from 'next/link';

import clsx from 'clsx';

type ButtonLinkProps = {
	active?: boolean;
	className?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	disabled?: boolean;
	label: string;
	href: string;
};

const OcLinkMenu = ({
	active = false,
	className = '',
	label,
	target,
	href,
}: ButtonLinkProps) => {
	const buttonStyles = clsx(
		{
			'bg-transparent hover:bg-primary-10 focus:bg-primary-10 text-primary-400 dark:hover:bg-[#293B54] dark:focus:bg-[#293B54] dark:text-[#95add9]':
				!active,
		},
		{
			'bg-primary-10 text-primary-400 dark:bg-[#293B54] dark:text-[#95add9] transition-none':
				active,
		}
	);

	return (
		<Link
			className={`font-medium text-base rounded-full transition-colors flex items-center justify-center gap-1 py-2 px-5 hover:cursor-pointer ${buttonStyles} ${className}`}
			href={href}
			target={target}
		>
			{label}
		</Link>
	);
};

export default OcLinkMenu;
