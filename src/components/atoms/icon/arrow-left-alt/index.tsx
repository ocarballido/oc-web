import clsx from 'clsx';

type IconProps = {
	size?: number;
	color?: 'primary' | 'secondary' | 'white';
};

const OcIconArrowLeftAlt = ({ color = 'primary', size = 24 }: IconProps) => {
	const iconStyles = clsx({
		'fill-primary-400 dark:fill-[#A0B8E3]': color === 'primary',
		'fill-primary-10 dark:fill-[#293b54]': color === 'secondary',
		'fill-white': color === 'white',
	});

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={iconStyles}
		>
			<mask
				id="mask0_3_666"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width={size}
				height={size}
			>
				<rect width={size} height={size} fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_3_668)">
				<path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" />
			</g>
		</svg>
	);
};

export default OcIconArrowLeftAlt;
