'use client';

// /src/components/molecules/portfolio-card.tsx

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import OcCard from '@/components/atoms/card';
import OcBadge from '@/components/molecules/badge';
import OcButtonLink from '@/components/molecules/button-link';
import OcButtonIconLink from '@/components/molecules/button-icon-link';
import OcIconOpenInNew from '@/components/atoms/icon/open-in-new';
import OcBadgeIndicator from '../badge-indicator';

import { PortfolioCard } from '@/lib/cms/mappers/portfolio-items';

const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;
const grayDataUrl =
	'data:image/svg+xml;base64,' +
	(typeof window !== 'undefined'
		? btoa(unescape(encodeURIComponent(graySvg)))
		: Buffer.from(graySvg).toString('base64'));

type Props = PortfolioCard & {
	locale: string;
	className?: string;
};

const OcPortfolioCard = ({
	slug,
	className,
	year,
	discipline,
	coverImage,
	liveUrl,
	title,
	contextSummary,
}: Props) => {
	const t = useTranslations('CardCover');

	return (
		<OcCard
			className={`!p-0 hover:shadow-2xl hover:-translate-y-2 transition-all dark:text-[#95add9] ${
				className ?? ''
			}`}
		>
			<div className="flex justify-between items-center px-4 py-4">
				<OcBadgeIndicator
					code={discipline === 'develop' || discipline === 'both'}
					design={discipline === 'design' || discipline === 'both'}
				/>
				<OcBadge label={String(year)} color="secondary" />
			</div>

			<div className="px-1 w-full h-[200px]">
				<div className="w-full h-full relative rounded-lg overflow-hidden bg-primary-10 flex items-center justify-center">
					<Image
						src={coverImage.url}
						fill
						alt={title}
						className="w-full object-cover"
						placeholder="blur"
						blurDataURL={grayDataUrl}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-2 p-6">
				<h3 className="text-md">{title}</h3>
				<p className="text-sm opacity-70 mb-2">{contextSummary}</p>
				<div className="flex gap-1 items-center">
					<OcButtonLink
						href={`/projects/${slug}`}
						label={t('seeProject')}
						color="secondary"
						className="flex-1"
					/>
					{liveUrl && (
						<OcButtonIconLink
							href={liveUrl}
							color="secondary"
							icon={<OcIconOpenInNew />}
							target="_blank"
						/>
					)}
				</div>
			</div>
		</OcCard>
	);
};

export default OcPortfolioCard;
