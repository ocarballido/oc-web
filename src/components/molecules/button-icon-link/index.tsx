import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps = {
	className?: string;
	color?: 'primary' | 'secondary' | 'white';
	target?: '_blank' | '_self' | '_parent' | '_top';
	icon: string;
	href: string;
};

const OcButtonIconLink = ({
	className = '',
	color = 'primary',
	href,
	icon,
	target,
}: ButtonProps) => {
	const buttonStyles = clsx(
		{
			'bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 text-white':
				color === 'primary',
		},
		{
			'bg-primary-10 hover:bg-primary-50 focus:bg-primary-50 text-primary-400 dark:bg-[#293b54] dark:hover:bg-primary-50/50 focus:bg-primary-50':
				color === 'secondary',
		},
		{
			'bg-white hover:bg-primary-10 focus:bg-primary-10 text-primary-400 dark:bg-(--background-light) dark:hover:bg-[#293B54] dark:focus:bg-[#293B54]':
				color === 'white',
		}
	);

	return (
		<Link
			className={`rounded-full transition-all items-center justify-center p-2 hover:cursor-pointer ${buttonStyles} ${className}`}
			href={href}
			target={target}
		>
			<Image src={icon} alt="Icon" height={24} width={24} />
		</Link>
	);
};

export default OcButtonIconLink;
