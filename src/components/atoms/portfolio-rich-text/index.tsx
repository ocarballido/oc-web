'use client';

// /src/components/atoms/portfolio-rich-text.tsx
// Client wrapper mínimo — solo existe para aislar 'use client' del RichText de Hygraph

import { RichText } from '@graphcms/rich-text-react-renderer';

type Props = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
};

export default function OcPortfolioRichText({ content }: Props) {
	return <RichText content={content} />;
}
