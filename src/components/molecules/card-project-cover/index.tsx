import { ProjectCard } from '@/types/types';
import Image from 'next/image';
import OcCard from '@/components/atoms/card';
import OcBadgeIndicator from '../badge-indicator';
import OcBadge from '../badge';
import OcButtonLink from '../button-link';

type Props = ProjectCard & { from: 'DEVELOP' | 'DESIGN' };

const OcCardProjectCover = ({
	id,
	className,
	code,
	design,
	year,
	title,
	shortDescription,
	from,
}: Props) => {
	const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;
	const grayDataUrl =
		'data:image/svg+xml;base64,' +
		(typeof window !== 'undefined'
			? btoa(unescape(encodeURIComponent(graySvg)))
			: Buffer.from(graySvg).toString('base64'));

	const safeYear = Number.isFinite(year) ? year : new Date().getFullYear();

	const safeTitle = title ?? '(Sin título)';
	const safeShort = shortDescription ?? '';

	return (
		<OcCard
			className={`hover:shadow-2xl transition-all relative !pt-60 !pl-2 !pr-2 !pb-2 overflow-hidden ${
				className ?? ''
			}`}
		>
			<Image
				src={
					from === 'DEVELOP'
						? '/static/splash-bg-grayed.webp'
						: '/static/splash-bg-colored.webp'
				}
				fill
				alt={safeTitle}
				className="w-full object-cover"
				placeholder="blur"
				blurDataURL={grayDataUrl}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
			/>
			<div className="bg-white rounded-2xl px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-1 w-fit text-primary-400 relative">
				Más reciente
			</div>
			<div className="flex flex-col gap-3 p-6 bg-white relative rounded-xl">
				<div className="flex justify-between items-center">
					<OcBadgeIndicator code={code} design={design} />
					<OcBadge label={String(safeYear)} color="secondary" />
				</div>
				<h3 className="text-sm font-bold">{safeTitle}</h3>
				<p className="text-sm opacity-70 mb-3">{safeShort}</p>
				<OcButtonLink
					href={`/projects/${from.toLowerCase()}/${id}`}
					label="Ver proyecto"
					color="secondary"
				/>
			</div>
		</OcCard>
	);
};

export default OcCardProjectCover;
