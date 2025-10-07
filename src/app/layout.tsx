import type { Metadata } from 'next';
import type { Viewport } from 'next';

import BaseLayout from '@/components/layouts/base';

export const viewport: Viewport = {
	themeColor: 'black',
};

export const metadata: Metadata = {
	title: {
		template: '%s',
		default: 'Oscar Carballido | UI Developer',
	},
	keywords:
		'ui developer, frontend developer, diseñador ui, desarrollo frontend, diseño de interfaces, desarrollo de interfaces, ui design, ux design, ui development, diseño y desarrollo web, design systems, figma, react, next.js, tailwind, html css javascript',
	description:
		'UI Developer especializado en diseño de interfaces y desarrollo frontend. Creatividad y lógica unidas para crear experiencias digitales funcionales, accesibles y visualmente coherentes.',
	metadataBase: new URL('https://www.oscarballido.com'),
	openGraph: {
		title: 'Oscar Carballido | UI Developer',
		description:
			'UI Developer especializado en diseño de interfaces y desarrollo frontend. Creatividad y lógica unidas para crear experiencias digitales funcionales, accesibles y visualmente coherentes.',
		url: 'https://www.oscarballido.com/',
		siteName: 'Oscarballido',
		images: [
			{
				url: '/static/opengraph.webp',
				width: 1200,
				height: 1200,
				alt: 'Oscarballido',
			},
		],
		locale: 'es',
		type: 'article',
	},
	themeColor: '#ffffff',
	other: {
		'color-scheme': 'light',
		'supported-color-schemes': 'light',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <BaseLayout>{children}</BaseLayout>;
}
