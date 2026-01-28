import Image from 'next/image';

import { ProjectDetail } from '@/types/types';
import { OcInView } from '@/components/atoms/in-view';

type ContentProps = Pick<ProjectDetail, 'title' | 'images'>;

const OcImageGallery = ({ images, title }: ContentProps) => {
	const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;

	const grayDataUrl =
		'data:image/svg+xml;base64,' +
		(typeof window !== 'undefined'
			? btoa(String.fromCharCode(...new TextEncoder().encode(graySvg)))
			: Buffer.from(graySvg).toString('base64'));

	return (
		<div className="grid grid-cols-1 gap-3">
			{images?.length > 0 &&
				images?.map((image, index) => {
					return (
						<OcInView
							key={image.id}
							delay={(index % 4) * 90}
							durationMs={650}
							once={false}
						>
							<div
								className={`overflow-hidden bg-(--background-light) rounded-2xl relative`}
							>
								<Image
									src={image.url}
									// fill
									width={1000}
									height={1000}
									alt={title || 'Proyecto'}
									className="w-full object-cover"
									placeholder="blur"
									blurDataURL={grayDataUrl}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
								/>
							</div>
							{/* <div
								className={`aspect-square overflow-hidden bg-(--background-light) rounded-2xl relative`}
							>
								<Image
									src={image.url}
									fill
									alt={title || 'Proyecto'}
									className="w-full object-cover"
									placeholder="blur"
									blurDataURL={grayDataUrl}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
								/>
							</div> */}
						</OcInView>
					);
				})}
		</div>
	);
};

export default OcImageGallery;
