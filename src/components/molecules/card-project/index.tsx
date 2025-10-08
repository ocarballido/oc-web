import { ProjectCard } from '@/types/types';
import Image from 'next/image';
import OcCard from '@/components/atoms/card';
import OcBadgeIndicator from '../badge-indicator';
import OcBadge from '../badge';
import OcButtonLink from '../button-link';

type Props = ProjectCard & { from: 'DEVELOP' | 'DESIGN' };

const OcCardProject = ({
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

	const img = thumbnail && thumbnail.length > 0 ? thumbnail : undefined;
	const safeTitle = title ?? '(Sin título)';
	const safeClient = client ?? null;
	const safeShort = shortDescription ?? '';

	return (
		<OcCard
			className={`!p-0 hover:shadow-2xl transition-all ${
				className ?? ''
			}`}
		>
			<div className="flex justify-between items-center px-4 py-4">
				<OcBadgeIndicator code={code} design={design} />
				<OcBadge label={date} color="secondary" />
			</div>

			<div className="px-1 w-full h-[200px]">
				<div className="w-full h-full relative rounded-lg overflow-hidden bg-primary-10 flex items-center justify-center">
					{img ? (
						<Image
							src={img}
							fill
							alt={safeTitle}
							className="w-full object-cover"
							placeholder="blur"
							blurDataURL={grayDataUrl}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					) : (
						<Image
							src="/static/icons/oscarballido-symbol.svg"
							width={100}
							height={62}
							alt={safeTitle}
							style={{ opacity: 0.75 }}
						/>
					)}
				</div>
			</div>

			<div className="flex flex-col gap-4 p-6">
				<div>
					<h3 className="text-md font-medium">{safeTitle}</h3>
					<h4 className="text-xs uppercase opacity-60 font-medium tracking-wide">
						{safeClient}
					</h4>
				</div>
				<p className="text-sm opacity-70">{safeShort}</p>
				<OcButtonLink
					href={`/projects/${from.toLowerCase()}/${id}`}
					label="Ver proyecto"
					color="secondary"
				/>
			</div>
		</OcCard>
	);
};

export default OcCardProject;
