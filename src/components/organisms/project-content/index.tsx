import OcImageResponsive from '@/components/atoms/image-responsive';

import { ProjectDetail } from '@/types/types';

type ContentProps = Pick<ProjectDetail, 'title' | 'images'>;

const OcProjectContent = ({ title, images }: ContentProps) => {
	return (
		<div className="flex-1 w-full">
			<div className="relative rounded-2xl overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-1">
					{images.length > 0 &&
						images.map((image, index) => {
							const isFirst = index === 0;
							const isLast = index === images.length - 1;
							const isOdd = images.length % 2 === 0;

							return (
								<div
									className={`aspect-square overflow-hidden rounded-lg bg-(--background-light) ${
										isFirst || (isLast && isOdd)
											? 'md:col-span-2'
											: ''
									}`}
									key={index}
								>
									<OcImageResponsive
										imageUrl={image}
										alt={title || 'Proyecto'}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default OcProjectContent;
