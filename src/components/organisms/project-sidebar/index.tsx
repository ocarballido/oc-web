'use client';
import { usePathname } from 'next/navigation';

import OcCard from '@/components/atoms/card';
import OcButtonLink from '@/components/molecules/button-link';
import OcBadge from '@/components/molecules/badge';
import OcBadgeIndicator from '@/components/molecules/badge-indicator';
import OcIconArrowLeftAlt from '@/components/atoms/icon/arrow-left-alt';
import OcIconOpenInNew from '@/components/atoms/icon/open-in-new';
import OcIconVerified from '@/components/atoms/icon/verified';

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
		<OcCard className="w-full md:max-w-[350px] flex flex-col gap-6 md:sticky md:top-35 dark:text-[#a0b8e3]">
			<div className="flex gap-1 items-center">
				<OcButtonLink
					label={
						pathname.includes('develop') ? 'Desarrollo' : 'Diseño'
					}
					href={`/projects/${
						pathname.includes('develop') ? 'develop' : 'design'
					}`}
					icon={<OcIconArrowLeftAlt color="white" />}
					className="flex-1"
				/>
				{link && (
					<OcButtonLink
						label="Visitar"
						href={link}
						icon={<OcIconOpenInNew color="primary" />}
						color="secondary"
						target="_blank"
						className="flex-1"
					/>
				)}
			</div>
			<div className="flex justify-between items-center">
				<OcBadgeIndicator code={code} design={design} />
				<OcBadge label={date} color="secondary" />
			</div>
			<div>
				<h2 className="text-3xl mb-2">{title}</h2>
				<h4 className="text-xs uppercase text-primary-400 dark:text-[#95add9] font-medium tracking-wider inline-flex gap-1 items-center">
					<OcIconVerified size={20} />
					{client}
				</h4>
			</div>
			<div>
				<h3 className="text-lg font-medium mt-2 mb-1">Descripción:</h3>
				<p className="opacity-70 dark:opacity-80">{description}</p>
			</div>
			<div>
				<h3 className="text-lg font-medium mb-1">Role:</h3>
				<p className="opacity-70 dark:opacity-80">{role}</p>
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
