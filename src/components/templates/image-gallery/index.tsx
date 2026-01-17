import Image from 'next/image';

import { ProjectDetail } from '@/types/types';

type ContentProps = Pick<ProjectDetail, 'title' | 'images'>;

const OcImageGallery = ({ images, title }: ContentProps) => {
	const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;

	const grayDataUrl =
		'data:image/svg+xml;base64,' +
		(typeof window !== 'undefined'
			? btoa(String.fromCharCode(...new TextEncoder().encode(graySvg)))
			: Buffer.from(graySvg).toString('base64'));

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-1">
			{images?.length > 0 &&
				images?.map((image, index) => {
					const isFirst = index === 0;
					const isLast = index === images?.length - 1;

					return (
						<div
							className={`aspect-square overflow-hidden rounded-2xl bg-(--background-light) relative ${
								isFirst || isLast || index % 3 === 0
									? 'md:col-span-2'
									: ''
							}`}
							key={index}
						>
							<Image
								src={image}
								fill
								alt={title || 'Proyecto'}
								className="w-full object-cover"
								placeholder="blur"
								blurDataURL={grayDataUrl}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
							/>
						</div>
					);
				})}
		</div>
	);
};

export default OcImageGallery;
