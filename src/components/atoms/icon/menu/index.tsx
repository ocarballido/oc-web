import clsx from 'clsx';

type IconProps = {
	size?: number;
	color?: 'primary' | 'secondary' | 'white';
};

const OcIconMenu = ({ color = 'primary', size = 24 }: IconProps) => {
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
			<g mask="url(#mask0_3_674)">
				<path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
			</g>
		</svg>
	);
};

export default OcIconMenu;
