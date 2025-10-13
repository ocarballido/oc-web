'use client';
import { usePathname } from 'next/navigation';

import OcCard from '@/components/atoms/card';
import OcButtonLink from '@/components/molecules/button-link';
import OcBadge from '@/components/molecules/badge';
import OcBadgeIndicator from '@/components/molecules/badge-indicator';

import type { ProjectDetail } from '@/types/types';

type SideBarProps = Omit<ProjectDetail, 'shortDescription' | 'images' | 'id'>;

const OcProjectSidebar = ({
	title,
	description,
	client,
	role,
	code,
	design,
	date,
	technologies,
	link,
}: SideBarProps) => {
	const pathname = usePathname();

	return (
		<OcCard className="w-full md:max-w-[350px] flex flex-col gap-6 md:sticky md:top-41.5">
			<OcButtonLink
				label={
					pathname.includes('develop')
						? 'Todo desarrollo'
						: 'Todo diseño'
				}
				href={`/projects/${
					pathname.includes('develop') ? 'develop' : 'design'
				}`}
				icon="/static/icons/arrow_back-white.svg"
			/>
			<OcBadgeIndicator code={code} design={design} />
			<h2 className="text-3xl">{title}</h2>
			<div>
				<OcBadge label={date} />
				<h3 className="text-lg font-medium mt-2 mb-1">Descripción:</h3>
				<p className="opacity-70">{description}</p>
			</div>
			<div>
				<h3 className="text-lg font-medium mb-1">Cliente:</h3>
				<p className="opacity-70">{client}</p>
				{link && (
					<OcButtonLink
						label="Ver proyecto"
						href={link}
						icon="/static/icons/arrow-out.svg"
						color="secondary"
						target="_blank"
						className="mt-2"
					/>
				)}
			</div>
			<div>
				<h3 className="text-lg font-medium mb-1">Role:</h3>
				<p className="opacity-70">{role}</p>
			</div>
			<div>
				<h3 className="text-lg font-medium mb-2">Tecnologías:</h3>
				<div className="flex gap-1 flex-wrap  mt-auto mb-2">
					{technologies.map((tech) => (
						<OcBadge
							key={tech.badgeTitle}
							label={tech.badgeTitle}
							color="secondary"
						/>
					))}
				</div>
			</div>
		</OcCard>
	);
};

export default OcProjectSidebar;
