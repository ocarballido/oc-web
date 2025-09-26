import BaseLayout from '@/components/layouts/base';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <BaseLayout>{children}</BaseLayout>;
}
