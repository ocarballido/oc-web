import clsx from 'clsx';

import styles from '../styles.module.css';

type IconProps = {
	size?: number;
	color?: 'primary' | 'secondary' | 'white';
};

const OcIconClose = ({ color = 'primary', size = 24 }: IconProps) => {
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
			<g mask="url(#mask0_3_661)">
				<path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
			</g>
		</svg>
	);
};

export default OcIconClose;
