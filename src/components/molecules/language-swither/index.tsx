'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { LOCALES } from '@/config/config-constants';
import clsx from 'clsx';

export function LocaleSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	function switchLocale(nextLocale: 'es' | 'en') {
		if (nextLocale === locale) return;
		router.replace(pathname, { locale: nextLocale });
	}

	return (
		<div
			className="inline-flex rounded-full bg-primary-10 dark:bg-[#293B54] p-1 gap-0.5"
			role="group"
			aria-label="Language switcher"
		>
			<button
				type="button"
				onClick={() => switchLocale('es')}
				aria-pressed={locale === 'es'}
				className={clsx(
					'px-2 py-1 text-sm font-medium rounded-full transition-colors w-full',
					locale === 'es'
						? 'bg-primary-400 text-white'
						: 'text-primary-400 dark:text-[#95add9] hover:bg-white dark:hover:bg-[#1e293b]'
				)}
			>
				{LOCALES[0].toUpperCase()}
			</button>

			<button
				type="button"
				onClick={() => switchLocale('en')}
				aria-pressed={locale === 'en'}
				className={clsx(
					'px-2 py-1 text-sm font-medium rounded-full transition-colors w-full',
					locale === 'en'
						? 'bg-primary-400 text-white'
						: 'text-primary-400 dark:text-[#95add9] hover:bg-white dark:hover:bg-[#1e293b]'
				)}
			>
				{LOCALES[1].toUpperCase()}
			</button>
		</div>
	);
}
