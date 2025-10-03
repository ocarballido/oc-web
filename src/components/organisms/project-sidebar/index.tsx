import Link from 'next/link';
import Image from 'next/image';
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
	year,
	technologies,
	link,
}: SideBarProps) => {
	return (
		<OcCard className="w-full md:max-w-[350px] flex flex-col gap-6 md:sticky md:top-41.5">
			<OcButtonLink label="Todos los proyectos" href="/projects/both" />
			<OcBadgeIndicator code={code} design={design} />
			<h2 className="text-3xl">{title}</h2>
			<div>
				<h3 className="text-lg font-medium mb-2">Descripción:</h3>
				<p className="opacity-70">{description}</p>
			</div>
			<div>
				<h3 className="text-lg font-medium mb-2">Cliente:</h3>
				{link ? (
					<Link
						className="text-primary-400 text-sm font-medium underline flex items-center gap-1 mb-1"
						href={link}
						target="_blank"
					>
						{client}
						<Image
							alt="Icon arrow"
							src="/static/icons/arrow-out.svg"
							width={20}
							height={20}
						/>
					</Link>
				) : (
					<p className="opacity-70">{client}</p>
				)}
				{year && <OcBadge label={year.toString()} />}
			</div>
			<div>
				<h3 className="text-lg font-medium mb-2">Role:</h3>
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
