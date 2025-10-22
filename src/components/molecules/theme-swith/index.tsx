'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import OcIconDarkMode from '@/components/atoms/icon/dark-mode';
import OcIconLightMode from '@/components/atoms/icon/light-mode';
import OcIconDarkLightMode from '@/components/atoms/icon/dark-light-mode';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<div className="rounded-full p-2 bg-primary-10 dark:bg-[#293B54] ml-2 w-[40px] h-[40px] animate-pulse">
				<OcIconDarkLightMode />
			</div>
		);

	return (
		<div
			className="rounded-full p-2 bg-primary-10 hover:bg-primary-50/60 focus:bg-primary-50 dark:bg-[#293B54] dark:hover:bg-[#354a68] dark:focus:bg-[#354a68] ml-2 w-[40px] h-[40px] hover:cursor-pointer overflow-hidden transition-colors"
			onClick={() =>
				setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
			}
		>
			<div
				className={`w-[56px] h-[24px] flex gap-[8px] transition-all ${
					resolvedTheme === 'light'
						? 'translate-x-0'
						: '-translate-x-8'
				}`}
			>
				<OcIconLightMode />
				<OcIconDarkMode />
			</div>
		</div>
	);
}
