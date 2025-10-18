import { ROBOTO } from '@/config/font';
import '@/app/globals.css';

import OcAppBar from '@/components/organisms/app-bar';
import OcFooter from '@/components/molecules/footer';
import { OcThemeProvider } from '@/components/providers/theme';

export default function BaseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body
			className={`${ROBOTO.className} py-2 md:py-3 min-h-screen antialiased flex flex-col before:content-[''] before:w-[100%] before:h-[40px] before:bg-(--background) before:fixed before:top-0 before:left-0 before:z-20`}
		>
			<OcThemeProvider>
				<OcAppBar />
				{children}
				<OcFooter />
			</OcThemeProvider>
		</body>
	);
}
