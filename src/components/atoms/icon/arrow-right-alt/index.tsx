import clsx from 'clsx';

type IconProps = {
	size?: number;
	color?: 'primary' | 'secondary' | 'white';
};

const OcIconArrowRightAlt = ({ color = 'primary', size = 24 }: IconProps) => {
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
			<g mask="url(#mask0_3_673)">
				<path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" />
			</g>
		</svg>
	);
};

export default OcIconArrowRightAlt;
