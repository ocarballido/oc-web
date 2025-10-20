'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<div className="rounded-full p-2 bg-primary-10 dark:bg-[#293B54] ml-2 w-[41px] h-[40px] animate-pulse">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_498_882"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="24"
						height="24"
					>
						<rect width="24" height="24" fill="#D9D9D9" />
					</mask>
					<g mask="url(#mask0_498_882)">
						<path
							d="M11.325 12.7C12.175 13.55 13.125 14.2792 14.175 14.8875C15.225 15.4958 16.35 15.9667 17.55 16.3C16.8833 17.15 16.0667 17.8125 15.1 18.2875C14.1333 18.7625 13.1083 19 12.025 19C10.075 19 8.42083 18.3208 7.0625 16.9625C5.70417 15.6042 5.025 13.95 5.025 12C5.025 10.9167 5.2625 9.89167 5.7375 8.925C6.2125 7.95833 6.875 7.14167 7.725 6.475C8.05833 7.675 8.52917 8.8 9.1375 9.85C9.74583 10.9 10.475 11.85 11.325 12.7ZM18.575 14.5C18.2417 14.4167 17.9125 14.325 17.5875 14.225C17.2625 14.125 16.9417 14.0083 16.625 13.875C16.7583 13.575 16.8542 13.2708 16.9125 12.9625C16.9708 12.6542 17 12.3333 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7C11.6667 7 11.3458 7.02917 11.0375 7.0875C10.7292 7.14583 10.425 7.24167 10.125 7.375C9.99167 7.05833 9.87917 6.74167 9.7875 6.425C9.69583 6.10833 9.60833 5.78333 9.525 5.45C9.925 5.3 10.3333 5.1875 10.75 5.1125C11.1667 5.0375 11.5917 5 12.025 5C13.975 5 15.6292 5.67917 16.9875 7.0375C18.3458 8.39583 19.025 10.05 19.025 12C19.025 12.4333 18.9875 12.8583 18.9125 13.275C18.8375 13.6917 18.725 14.1 18.575 14.5ZM11 3V0H13V3H11ZM11 24V21H13V24H11ZM19.075 6.35L17.65 4.925L19.775 2.825L21.2 4.225L19.075 6.35ZM4.225 21.175L2.8 19.775L4.925 17.65L6.35 19.075L4.225 21.175ZM21 13V11H24V13H21ZM0 13V11H3V13H0ZM19.775 21.2L17.65 19.075L19.075 17.65L21.175 19.775L19.775 21.2ZM4.925 6.35L2.825 4.225L4.225 2.8L6.35 4.925L4.925 6.35Z"
							fill="#0063EA"
						/>
					</g>
				</svg>
			</div>
		);

	return (
		<div
			className="rounded-full p-2 bg-primary-10 dark:bg-[#293B54] ml-2 w-[41px] h-[40px] hover:cursor-pointer"
			onClick={() =>
				setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
			}
		>
			{resolvedTheme === 'light' ? (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_495_164"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="24"
						height="24"
					>
						<rect width="24" height="24" fill="#D9D9D9" />
					</mask>
					<g mask="url(#mask0_495_164)">
						<path
							d="M12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM5 13H1V11H5V13ZM23 13H19V11H23V13ZM11 5V1H13V5H11ZM11 23V19H13V23H11ZM6.4 7.75L3.875 5.325L5.3 3.85L7.7 6.35L6.4 7.75ZM18.7 20.15L16.275 17.625L17.6 16.25L20.125 18.675L18.7 20.15ZM16.25 6.4L18.675 3.875L20.15 5.3L17.65 7.7L16.25 6.4ZM3.85 18.7L6.375 16.275L7.75 17.6L5.325 20.125L3.85 18.7Z"
							fill="#0063EA"
						/>
					</g>
				</svg>
			) : (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_495_155"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="24"
						height="24"
					>
						<rect width="24" height="24" fill="#D9D9D9" />
					</mask>
					<g mask="url(#mask0_495_155)">
						<path
							d="M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4625 3.00833 12.6875 3.025C12.9125 3.04167 13.1333 3.06667 13.35 3.1C12.6667 3.58333 12.1208 4.2125 11.7125 4.9875C11.3042 5.7625 11.1 6.6 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6958 19.025 12.2875C19.7917 11.8792 20.4167 11.3333 20.9 10.65C20.9333 10.8667 20.9583 11.0875 20.975 11.3125C20.9917 11.5375 21 11.7667 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21Z"
							fill="#0063EA"
						/>
					</g>
				</svg>
			)}
		</div>
	);
	// return (
	// 	<div
	// 		onClick={() =>
	// 			setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	// 		}
	// 		className={`rounded-full flex gap-3 overflow-hidden p-2 bg-primary-10 dark:bg-[#293B54] w-[41px] h-[40px] hover:cursor-pointer ml-2 ${
	// 			resolvedTheme === 'light' ? '-translate-x-8' : 'translate-x-0'
	// 		}`}
	// 	>
	// 		<Image
	// 			src={`/static/icons/dark_mode-primary.svg`}
	// 			alt="Dark mode icon"
	// 			width={24}
	// 			height={24}
	// 			className="transition-all"
	// 			style={{
	// 				width: '24px',
	// 				height: '24px',
	// 			}}
	// 		/>
	// 		<Image
	// 			src={`/static/icons/light_mode-primary.svg`}
	// 			alt="Dark mode icon"
	// 			width={24}
	// 			height={24}
	// 			className="transition-all"
	// 			style={{
	// 				width: '24px',
	// 				height: '24px',
	// 			}}
	// 		/>
	// 	</div>
	// );
}
