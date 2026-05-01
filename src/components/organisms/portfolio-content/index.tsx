// /src/components/organisms/portfolio-content.tsx

import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import OcPortfolioBlock, {
	DesignDecisionItem,
} from '@/components/organisms/portfolio-block';
import OcPortfolioRichText from '@/components/atoms/portfolio-rich-text';
import OcImageGallery from '@/components/templates/image-gallery';

import { PortfolioItem } from '@/lib/cms/mappers/portfolio-items';

const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;
const grayDataUrl =
	'data:image/svg+xml;base64,' + Buffer.from(graySvg).toString('base64');

type Props = {
	item: PortfolioItem;
};

const OcPortfolioContent = async ({ item }: Props) => {
	const t = await getTranslations('portfolioBlocks');

	const toGalleryImages = (assets: { url: string }[]) =>
		assets.map((a, i: number) => ({ url: a.url, id: String(i) }));

	const blocks = [
		{ key: 'context', active: !!(item.contextSummary && item.contextBody) },
		{
			key: 'process',
			active: !!(
				item.processSummary &&
				item.realUser &&
				item.criticalFlows &&
				item.explorationAndDiscarded
			),
		},
		{
			key: 'design',
			active: !!(
				item.designDecisionsSummary && item.designDecisions.length > 0
			),
		},
		{
			key: 'code',
			active: !!(
				item.codeTransitionSummary &&
				item.componentArchitecture &&
				item.whatChangedWhenCoding
			),
		},
		{
			key: 'result',
			active: !!(
				item.resultSummary &&
				item.whatChanged &&
				item.whatIdoDifferently
			),
		},
	];

	let counter = 0;
	const getNum = () => String(++counter).padStart(2, '0');

	return (
		<div className="flex-1 w-full flex flex-col gap-2">
			{/* Cover image */}
			<div className="overflow-hidden rounded-2xl w-full">
				<Image
					src={item.coverImage.url}
					width={1000}
					height={1000}
					alt={item.title}
					className="w-full object-cover"
					placeholder="blur"
					blurDataURL={grayDataUrl}
					priority
					sizes="(max-width: 768px) 100vw, 768px"
				/>
			</div>

			{blocks[0].active && (
				<OcPortfolioBlock
					num={getNum()}
					title={t('context')}
					summary={item.contextSummary!}
					tags={item.contextTags}
				>
					<OcPortfolioRichText content={item.contextBody} />
					{item.measurableGoal && (
						<p className="m-0 italic opacity-70 border-l-2 border-current pl-4">
							{item.measurableGoal}
						</p>
					)}
				</OcPortfolioBlock>
			)}

			{blocks[1].active && (
				<OcPortfolioBlock
					num={getNum()}
					title={t('process')}
					summary={item.processSummary!}
					tags={item.processTags}
				>
					<OcPortfolioRichText content={item.realUser} />
					<OcPortfolioRichText content={item.criticalFlows} />
					<OcPortfolioRichText
						content={item.explorationAndDiscarded}
					/>
					{item.informationArchitecture && (
						<OcPortfolioRichText
							content={item.informationArchitecture}
						/>
					)}
					{item.processImages.length > 0 && (
						<OcImageGallery
							images={toGalleryImages(item.processImages)}
							title={item.title}
						/>
					)}
				</OcPortfolioBlock>
			)}

			{blocks[2].active && (
				<OcPortfolioBlock
					num={getNum()}
					title={t('design')}
					summary={item.designDecisionsSummary!}
					tags={item.designDecisionsTags}
				>
					<div className="flex flex-col gap-6">
						{item.designDecisions.map((d) => (
							<DesignDecisionItem key={d.title} decision={d} />
						))}
					</div>
					{item.visualSystem && (
						<OcPortfolioRichText content={item.visualSystem} />
					)}
					{item.edgeCases && (
						<OcPortfolioRichText content={item.edgeCases} />
					)}
				</OcPortfolioBlock>
			)}

			{blocks[3].active && (
				<OcPortfolioBlock
					num={getNum()}
					title={t('code')}
					summary={item.codeTransitionSummary!}
					tags={item.codeTransitionTags}
				>
					<OcPortfolioRichText content={item.componentArchitecture} />
					<OcPortfolioRichText content={item.whatChangedWhenCoding} />
					{item.tokensAndNaming && (
						<OcPortfolioRichText content={item.tokensAndNaming} />
					)}
					{item.handoffAndDocs && (
						<OcPortfolioRichText content={item.handoffAndDocs} />
					)}
				</OcPortfolioBlock>
			)}

			{/* GALERÍA — sin OcPortfolioBlock */}
			{item.gallery.length > 0 && (
				<div className="flex flex-col gap-3">
					<OcImageGallery
						images={toGalleryImages(item.gallery)}
						title={item.title}
					/>
					{item.beforeAfterImages != null && (
						<OcImageGallery
							images={[
								{
									url: item.beforeAfterImages.url,
									id: 'before-after',
								},
							]}
							title={item.title}
						/>
					)}
					{item.videoUrl && (
						<div
							className="relative w-full rounded-2xl overflow-hidden"
							style={{ aspectRatio: '16/9' }}
						>
							<iframe
								src={item.videoUrl}
								title={`Vídeo — ${item.title}`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="absolute inset-0 w-full h-full border-none"
							/>
						</div>
					)}
				</div>
			)}

			{blocks[4].active && (
				<OcPortfolioBlock
					num={getNum()}
					title={t('result')}
					summary={item.resultSummary!}
					tags={[]}
				>
					<OcPortfolioRichText content={item.whatChanged} />
					<OcPortfolioRichText content={item.whatIdoDifferently} />
					{item.metrics && (
						<OcPortfolioRichText content={item.metrics} />
					)}
					{item.nextSteps && (
						<OcPortfolioRichText content={item.nextSteps} />
					)}
				</OcPortfolioBlock>
			)}
		</div>
	);
};

export default OcPortfolioContent;
