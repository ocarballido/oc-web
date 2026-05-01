import { getTranslations } from 'next-intl/server';

import Image from 'next/image';
import OcCard from '@/components/atoms/card';
import OcButtonLink from '@/components/molecules/button-link';
import OcIconOpenInNew from '@/components/atoms/icon/open-in-new';
import OcBadge from '@/components/molecules/badge';

import { PortfolioItem } from '@/lib/cms/mappers/portfolio-items';

type Props = Pick<
	PortfolioItem,
	| 'title'
	| 'roleAndScope'
	| 'stackInContext'
	| 'year'
	| 'portfolioType'
	| 'liveUrl'
	| 'coverImage'
>;

const OcPortfolioMeta = async ({
	title,
	roleAndScope,
	stackInContext,
	year,
	portfolioType,
	liveUrl,
	coverImage,
}: Props) => {
	const t = await getTranslations('portfolioMeta');

	return (
		<div className="flex flex-col gap-3 mb-4">
			<h1 className="text-3xl font-bold m-0">{title}</h1>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
				<OcCard className="flex flex-col gap-1 dark:text-[#a0b8e3]">
					<span className="text-xs uppercase tracking-widest font-semibold">
						{t('role')}
					</span>
					<p className="m-0 text-sm opacity-70">{roleAndScope}</p>
				</OcCard>

				{stackInContext && (
					<OcCard className="flex flex-col gap-1 dark:text-[#a0b8e3]">
						<span className="text-xs uppercase tracking-widest font-semibold">
							{t('stack')}
						</span>
						<p className="m-0 text-sm opacity-70">
							{stackInContext}
						</p>
					</OcCard>
				)}

				<OcCard className="flex flex-col gap-1 dark:text-[#a0b8e3]">
					<span className="text-xs uppercase tracking-widest font-semibold">
						{t('yearType')}
					</span>
					<p className="m-0 text-sm opacity-70">{year}</p>
					<div>
						<OcBadge label={portfolioType} color="secondary" />
					</div>
					<div className="flex items-center gap-1"></div>
				</OcCard>
			</div>

			{/* liveUrl centrado */}
			{liveUrl && (
				<div className="flex justify-center">
					<OcButtonLink
						href={liveUrl}
						label={t('visit')}
						icon={<OcIconOpenInNew color="primary" />}
						color="secondary"
						target="_blank"
					/>
				</div>
			)}

			{/* Cover image */}
			<div className="overflow-hidden rounded-2xl w-full">
				<Image
					src={coverImage.url}
					width={1000}
					height={1000}
					alt={title}
					className="w-full object-cover"
					priority
					sizes="(max-width: 768px) 100vw, 768px"
				/>
			</div>
		</div>
	);
};

export default OcPortfolioMeta;
