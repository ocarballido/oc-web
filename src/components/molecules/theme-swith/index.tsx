'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<Image
				src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
				width={36}
				height={36}
				sizes="36x36"
				alt="Loading Light/Dark Toggle"
				priority={false}
				title="Loading Light/Dark Toggle"
			/>
		);

	if (resolvedTheme === 'dark') {
		return (
			<button
				onClick={() => setTheme('light')}
				type="button"
				className="rounded-full p-2 bg-primary-10 grow-0 w-fit"
			>
				<Image
					src="/static/icons/dark_mode-primary.svg"
					alt="Dark mode icon"
					width={24}
					height={24}
					style={{ width: 'auto', height: 'auto' }}
				/>
			</button>
		);
	}
	// if (resolvedTheme === 'dark') {
	// 	return <FiSun onClick={() => setTheme('light')} />;
	// }

	if (resolvedTheme === 'light') {
		return (
			<button
				onClick={() => setTheme('dark')}
				type="button"
				className="rounded-full p-2 bg-primary-10 grow-0 w-fit"
			>
				<Image
					src="/static/icons/dark_mode-primary.svg"
					alt="Dark mode icon"
					width={24}
					height={24}
					style={{ width: 'auto', height: 'auto' }}
				/>
			</button>
		);
	}
	// if (resolvedTheme === 'light') {
	// 	return <FiMoon onClick={() => setTheme('dark')} />;
	// }
}
