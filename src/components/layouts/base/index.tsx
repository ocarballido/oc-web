import { ROBOTO } from '@/config/font';
import '@/app/globals.css';

import OcAppBar from '@/components/organisms/app-bar';

export default function BaseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body
			className={`${ROBOTO.className} p-3 min-h-screen antialiased flex flex-col before:content-[''] before:w-[100%] before:h-[40px] before:bg-(--background) before:fixed before:top-0 before:left-0 before:z-20`}
		>
			<OcAppBar />
			{children}
		</body>
	);
}
