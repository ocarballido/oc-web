'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import OcIconDarkMode from '@/components/atoms/icon/dark-mode';
import OcIconLightMode from '@/components/atoms/icon/light-mode';
import OcIconDarkLightMode from '@/components/atoms/icon/dark-light-mode';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const [rotation, setRotation] = useState(
		resolvedTheme === 'light' ? 0 : 90
	);

	useEffect(() => setMounted(true), []);

	const handleToggle = () => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		setRotation((precState) => precState + 90);
	}, [resolvedTheme]);

	if (!mounted)
		return (
			<div className="rounded-full p-2 bg-primary-10 dark:bg-[#293B54] ml-2 w-[40px] h-[40px] animate-pulse">
				<OcIconDarkLightMode />
			</div>
		);

	return (
		<div
			className="relative overflow-hidden rounded-full p-2 bg-primary-10 hover:bg-primary-50/60 focus:bg-primary-50 dark:bg-[#293B54] dark:hover:bg-[#354a68] dark:focus:bg-[#354a68] ml-2 w-[40px] h-[40px] hover:cursor-pointer transition-colors"
			onClick={handleToggle}
		>
			<div
				className="absolute top-[7px] left-[-16px] w-[72px] h-[72px] transform transition-transform duration-500 ease-in-out"
				style={{
					rotate: `-${rotation}deg`,
				}}
			>
				<div className="absolute inset-0 flex flex-col gap-[22px] justify-center items-center">
					<OcIconDarkMode />
					<span className="rotate-180">
						<OcIconDarkMode />
					</span>
				</div>

				<div className="absolute inset-0 rotate-90 flex flex-col gap-[22px] justify-center items-center">
					<OcIconLightMode />
					<OcIconLightMode />
				</div>
			</div>
		</div>
	);
}
