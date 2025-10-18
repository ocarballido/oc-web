import clsx from 'clsx';

type BadgeProps = {
	color?: 'primary' | 'secondary' | 'white';
	label: string;
};

const OcBadge = ({ label, color = 'primary' }: BadgeProps) => {
	const badgeStyles = clsx(
		{
			'bg-primary-300 text-white': color === 'primary',
		},
		{
			'bg-primary-10 text-primary-400 dark:bg-[#293B54] dark:text-[#95add9]':
				color === 'secondary',
		},
		{
			'bg-white text-primary-400': color === 'white',
		}
	);

	return (
		<span
			className={`py-1 px-2 font-bold tracking-widest text-xs rounded-lg uppercase ${badgeStyles}`}
		>
			{label}
		</span>
	);
};

export default OcBadge;
