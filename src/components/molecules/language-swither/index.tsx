'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { LOCALES } from '@/config/config-constants';
import clsx from 'clsx';
import { useState, useTransition } from 'react';

export function LocaleSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const [isPending, startTransition] = useTransition();
	const [targetLocale, setTargetLocale] = useState<'es' | 'en' | null>(null);

	function switchLocale(nextLocale: 'es' | 'en') {
		if (nextLocale === locale) return;

		setTargetLocale(nextLocale);

		startTransition(() => {
			router.replace(pathname, { locale: nextLocale });
		});
	}

	const showSpinnerEs = isPending && targetLocale === 'es';
	const showSpinnerEn = isPending && targetLocale === 'en';

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
				disabled={isPending}
				className={clsx(
					'px-2 py-1 text-sm font-medium rounded-full transition-colors w-full inline-flex items-center justify-center gap-2',
					isPending && 'opacity-70 cursor-not-allowed',
					locale === 'es'
						? 'bg-primary-400 text-white'
						: 'text-primary-400 dark:text-[#95add9] hover:bg-white dark:hover:bg-[#1e293b]'
				)}
			>
				{showSpinnerEs ? (
					<span
						className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
						aria-label="Loading"
					/>
				) : (
					LOCALES[0].toUpperCase()
				)}
			</button>

			<button
				type="button"
				onClick={() => switchLocale('en')}
				aria-pressed={locale === 'en'}
				disabled={isPending}
				className={clsx(
					'px-2 py-1 text-sm font-medium rounded-full transition-colors w-full inline-flex items-center justify-center gap-2',
					isPending && 'opacity-70 cursor-not-allowed',
					locale === 'en'
						? 'bg-primary-400 text-white'
						: 'text-primary-400 dark:text-[#95add9] hover:bg-white dark:hover:bg-[#1e293b]'
				)}
			>
				{showSpinnerEn ? (
					<span
						className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
						aria-label="Loading"
					/>
				) : (
					LOCALES[1].toUpperCase()
				)}
			</button>
		</div>
	);
}
