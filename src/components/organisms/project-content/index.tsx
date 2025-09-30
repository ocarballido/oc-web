import OcImageResponsive from '@/components/atoms/image-responsive';

import { Project } from '@/types/types';

type ProjectProps = { project: Project };

const OcProjectContent = ({ project }: ProjectProps) => {
	return (
		<div className="flex-1 w-full">
			<div className="relative rounded-2xl overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-1">
					{project &&
						project.images.length > 0 &&
						project.images.map((image, index) => {
							const isFirst = index === 0;
							const isLast = index === project.images.length - 1;
							const isOdd = project.images.length % 2 === 0;

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
										alt={project.title}
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
