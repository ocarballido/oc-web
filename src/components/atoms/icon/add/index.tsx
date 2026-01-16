import clsx from 'clsx';

type IconProps = {
	size?: number;
	changePrimary?: boolean;
	color?: 'primary' | 'secondary' | 'white';
};

const OcIconAdd = ({
	color = 'primary',
	changePrimary = true,
	size = 24,
}: IconProps) => {
	const iconStyles = clsx({
		'fill-primary-400': color === 'primary',
		'fill-primary-400 dark:fill-[#A0B8E3]':
			color === 'primary' && changePrimary,
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
			<g mask="url(#mask0_642_947)">
				<path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" />
			</g>
		</svg>
	);
};

export default OcIconAdd;
