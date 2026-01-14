import type { Metadata, Viewport } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

import BaseLayout from '@/components/layouts/base';

export async function generateMetadata({
	params,
}: {
	params: { locale: 'es' | 'en' };
}): Promise<Metadata> {
	const t = await getTranslations('MetadataCommon');

	const { locale } = await params;

	const localeMap: Record<string, string> = {
		es: 'es_ES',
		en: 'en_US',
	};

	const ogLocale = localeMap[locale] || `${locale}_${locale.toUpperCase()}`;

	return {
		title: t('title'),
		description: t('description'),
		keywords: t('keywords'),
		metadataBase: new URL('https://www.oscarballido.com'),
		openGraph: {
			title: t('title'),
			description: t('description'),
			url: `/${locale}`,
			siteName: 'Oscarballido',
			images: [
				{
					url: '/static/opengraph.webp',
					width: 1200,
					height: 1200,
					alt: 'Oscarballido',
				},
			],
			locale: ogLocale,
			type: 'article',
		},
		twitter: {
			card: 'summary_large_image',
			title: t('title'),
			description: t('description'),
			images: ['/static/opengraph.webp'],
		},
		other: {
			'color-scheme': 'light',
			'supported-color-schemes': 'light',
		},
	};
}

export const viewport: Viewport = {
	colorScheme: 'light',
	themeColor: '#ffffff',
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html
			lang={locale}
			suppressHydrationWarning
			style={{ colorScheme: 'light' }}
		>
			<BaseLayout params={params}>{children}</BaseLayout>
		</html>
	);
}
