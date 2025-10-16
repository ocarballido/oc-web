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
	date,
	client,
	thumbnail,
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

	const safeTitle = title ?? '(Sin título)';
	const safeClient = client ?? null;
	const safeShort = shortDescription ?? '';

	return (
		<OcCard
			className={`hover:shadow-2xl hover:-translate-y-2 transition-all relative !pt-60 !pl-3 !pr-3 !pb-3 overflow-hidden flex items-end ${
				className ?? ''
			}`}
		>
			{thumbnail ? (
				<Image
					src={thumbnail}
					fill
					alt={safeTitle}
					className="w-full object-cover"
					placeholder="blur"
					blurDataURL={grayDataUrl}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			) : (
				<Image
					src={
						from === 'DEVELOP'
							? '/static/projects/splash-thumbnail-code.webp'
							: '/static/projects/splash-thumbnail-design.webp'
					}
					fill
					alt={safeTitle}
					className="w-full object-cover"
					placeholder="blur"
					blurDataURL={grayDataUrl}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
				/>
			)}

			<div className="bg-white rounded-2xl px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-1 w-fit text-primary-400 absolute top-3 left-3">
				Más reciente
			</div>
			<div className="flex flex-col gap-3 p-5 bg-white relative rounded-xl">
				<div className="flex justify-between items-center">
					<OcBadgeIndicator code={code} design={design} />
					<OcBadge label={date} color="secondary" />
				</div>
				<div>
					<h3 className="text-md font-medium">{safeTitle}</h3>
					<h4 className="text-xs uppercase opacity-60 font-medium tracking-wide">
						{safeClient}
					</h4>
				</div>
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
