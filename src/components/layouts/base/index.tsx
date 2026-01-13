import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';

import { ROBOTO } from '@/config/font';
import '@/app/globals.css';

import OcAppBar from '@/components/organisms/app-bar';
import OcFooter from '@/components/molecules/footer';
import { OcThemeProvider } from '@/components/providers/theme';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function BaseLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	const messages = await getMessages();

	return (
		<body
			className={`${ROBOTO.className} py-2 md:py-3 min-h-screen antialiased flex flex-col before:content-[''] before:w-[100%] before:h-[40px] before:bg-(--background) before:fixed before:top-0 before:left-0 before:z-20`}
		>
			<NextIntlClientProvider messages={messages} locale={locale}>
				<OcThemeProvider>
					<OcAppBar />
					{children}
					<OcFooter />
				</OcThemeProvider>
			</NextIntlClientProvider>
		</body>
	);
}
