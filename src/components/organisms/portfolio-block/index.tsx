// /src/components/organisms/portfolio-block.tsx

import { PortfolioDesignDecision } from '@/lib/cms/mappers/portfolio-items';
import OcPortfolioRichText from '@/components/atoms/portfolio-rich-text';
import Image from 'next/image';
import OcCard from '@/components/atoms/card';
import OcIconVerified from '@/components/atoms/icon/verified';

// ─── Tags ─────────────────────────────────────────────────────────────────────

function Tags({ tags }: { tags: string[] }) {
	if (!tags.length) return null;
	return (
		<ul className="flex flex-wrap gap-4 list-none m-0 p-0">
			{tags.map((tag) => (
				<li
					key={tag}
					className="flex items-center gap-2 text-xs uppercase font-medium text-primary-400 dark:text-[#95add9]"
				>
					<span className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-[#95add9] ring-3 ring-primary-10 dark:ring-[#293b54] shrink-0" />
					{tag}
				</li>
			))}
		</ul>
	);
}

// ─── DesignDecisionItem ───────────────────────────────────────────────────────

const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;
const grayDataUrl =
	'data:image/svg+xml;base64,' + Buffer.from(graySvg).toString('base64');

function DesignDecisionItem({
	decision,
}: {
	decision: PortfolioDesignDecision;
}) {
	return (
		<article className="flex gap-4 items-start">
			<div className="shrink-0 w-10 h-10 rounded-full bg-primary-10 dark:bg-[#293b54] flex items-center justify-center">
				<OcIconVerified size={20} />
			</div>
			<div className="flex flex-col gap-2 flex-1">
				<h3 className="m-0 text-base font-medium">{decision.title}</h3>
				<div className="text-sm leading-relaxed">
					<OcPortfolioRichText content={decision.body} />
				</div>
				{decision.image && (
					<div className="overflow-hidden rounded-2xl relative mt-1">
						<Image
							src={decision.image.url}
							width={1000}
							height={1000}
							alt={decision.title}
							className="w-full object-cover"
							placeholder="blur"
							blurDataURL={grayDataUrl}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
						/>
					</div>
				)}
			</div>
		</article>
	);
}

// ─── OcPortfolioBlock ─────────────────────────────────────────────────────────

type OcPortfolioBlockProps = {
	num: string;
	title: string;
	summary: string;
	tags: string[];
	children: React.ReactNode;
};

export default function OcPortfolioBlock({
	num,
	title,
	summary,
	tags,
	children,
}: OcPortfolioBlockProps) {
	return (
		<section aria-labelledby={`block-title-${num}`}>
			<OcCard className="flex flex-col gap-0 p-0! overflow-hidden">
				{/* Capa escáner */}
				<div className="flex flex-col gap-2 p-4 bg-[#f2f6fc] dark:bg-[#26364c]">
					<div className="flex items-baseline gap-2">
						<h2
							id={`block-title-${num}`}
							className="m-0 text-2xl font-medium"
						>
							{title}
						</h2>
					</div>
					<p className="m-0 text-sm opacity-70 mb-2">{summary}</p>
					<Tags tags={tags} />
				</div>

				{/* Capa lector */}
				<div className="flex flex-col gap-3 p-4">{children}</div>
			</OcCard>
		</section>
	);
}

export { DesignDecisionItem };
