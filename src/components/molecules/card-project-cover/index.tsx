import { ProjectCard } from '@/types/types';
import Image from 'next/image';
import OcCard from '@/components/atoms/card';
import OcBadgeIndicator from '../badge-indicator';
import OcBadge from '../badge';
import OcButtonLink from '../button-link';
import OcButtonIconLink from '../button-icon-link';
import OcIconOpenInNew from '@/components/atoms/icon/open-in-new';

type Props = ProjectCard & { from: 'DEVELOP' | 'DESIGN' };

const OcCardProjectCover = ({
	id,
	className,
	code,
	design,
	date,
	client,
	link,
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
			className={`hover:shadow-2xl hover:-translate-y-2 transition-all relative !pt-60 !pl-3 !pr-3 !pb-3 overflow-hidden flex items-end dark:text-[#95add9] ${
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
				<>
					<Image
						src="/static/splash-dark-colored-horizontal.webp"
						fill
						alt={safeTitle}
						className="w-full object-cover hidden dark:block"
						placeholder="blur"
						blurDataURL={grayDataUrl}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
					/>
					<Image
						src="/static/splash-light-colored-horizontal.webp"
						fill
						alt={safeTitle}
						className="w-full object-cover block dark:hidden"
						placeholder="blur"
						blurDataURL={grayDataUrl}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
					/>
				</>
			)}

			<div className="bg-white dark:bg-(--background) bg rounded-2xl px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-1 w-fit text-primary-400 absolute top-3 left-3">
				Más reciente
			</div>
			<div className="flex flex-col gap-3 p-5 bg-white dark:bg-(--background-light) relative rounded-xl">
				<div className="flex justify-between items-center">
					<OcBadgeIndicator code={code} design={design} />
					<OcBadge label={date} color="secondary" />
				</div>
				<div>
					<h3 className="text-md">{safeTitle}</h3>
					<h4 className="text-xs uppercase text-primary-400 font-semibold tracking-wider flex gap-1 items-center">
						<Image
							src="/static/icons/verified-primary.svg"
							width={16}
							height={16}
							alt="Client icon"
						/>
						{safeClient}
					</h4>
				</div>
				<p className="text-sm opacity-70 mb-3">{safeShort}</p>
				<div className="flex gap-1 items-center">
					<OcButtonLink
						href={`/projects/${from.toLowerCase()}/${id}`}
						label="Ver proyecto"
						color="secondary"
						className="flex-1"
					/>
					{link && (
						<OcButtonIconLink
							href={link}
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

export default OcCardProjectCover;
