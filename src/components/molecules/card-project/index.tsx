import { ProjectCard } from '@/types/types';

import Image from 'next/image';
import OcCard from '@/components/atoms/card';
import OcBadgeIndicator from '../badge-indicator';
import OcBadge from '../badge';
import OcButtonLink from '../button-link';

const OcCardProject = ({
	id,
	code,
	design,
	year,
	thumbnail,
	title,
	shortDescription,
}: ProjectCard) => {
	const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;
	const grayDataUrl = `data:image/svg+xml;base64,${Buffer.from(
		graySvg
	).toString('base64')}`;

	return (
		<OcCard className="!p-0 hover:shadow-2xl transition-all">
			<div className="flex justify-between items-center px-2 py-4">
				<OcBadgeIndicator code={code} design={design} />
				<OcBadge label={year} color="secondary" />
			</div>
			<div className="px-2 w-full h-[200px]">
				<div className="w-full h-full relative rounded-lg overflow-hidden bg-primary-10 flex items-center justify-center">
					{thumbnail ? (
						<Image
							src={thumbnail}
							fill
							alt={title}
							className="w-full"
							placeholder="blur"
							blurDataURL={grayDataUrl}
							style={{
								objectFit: 'cover',
							}}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					) : (
						<Image
							src="/static/icons/oscarballido-symbol.svg"
							width={100}
							height={62}
							alt={title}
							style={{ opacity: 0.75 }}
						/>
					)}
				</div>
			</div>
			<div className="flex flex-col gap-3 p-6">
				<h3 className="text-sm font-bold">{title}</h3>
				<p className="text-sm opacity-70">{shortDescription}</p>
			</div>
			<div className="p-2">
				<OcButtonLink
					href={`/projects/${
						code && design
							? 'both'
							: !code && design
							? 'design'
							: 'develop'
					}/${id}`}
					label="Ver proyecto"
					color="secondary"
				/>
			</div>
		</OcCard>
	);
};

export default OcCardProject;
