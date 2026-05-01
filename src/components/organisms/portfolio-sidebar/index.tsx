'use client';

// /src/components/organisms/portfolio-sidebar.tsx

import { useTranslations } from 'next-intl';

import OcCard from '@/components/atoms/card';
import OcBadge from '@/components/molecules/badge';
import OcButtonLink from '@/components/molecules/button-link';
import OcIconArrowLeftAlt from '@/components/atoms/icon/arrow-left-alt';
import OcIconArrowRightAlt from '@/components/atoms/icon/arrow-right-alt';
import OcIconOpenInNew from '@/components/atoms/icon/open-in-new';
import OcBadgeIndicator from '@/components/molecules/badge-indicator';

import type { PortfolioItem } from '@/lib/cms/mappers/portfolio-items';

type Props = {
	title: PortfolioItem['title'];
	roleAndScope: PortfolioItem['roleAndScope'];
	stackInContext: PortfolioItem['stackInContext'];
	year: PortfolioItem['year'];
	portfolioType: PortfolioItem['portfolioType'];
	discipline: 'design' | 'develop' | 'both';
	techStack: string[];
	liveUrl: PortfolioItem['liveUrl'];
	prevSlug: string | null;
	prevTitle: string | null;
	nextSlug: string | null;
	nextTitle: string | null;
};

const OcPortfolioSidebar = ({
	title,
	roleAndScope,
	stackInContext,
	year,
	discipline,
	techStack,
	liveUrl,
	prevSlug,
	nextSlug,
}: Props) => {
	const t = useTranslations('portfolioMeta');
	const tNav = useTranslations('portfolioNav');

	return (
		<OcCard className="w-full md:max-w-[350px] flex flex-col gap-6 md:sticky md:top-35 dark:text-[#a0b8e3]">
			<div className="flex flex-col gap-1">
				{/* Nav anterior / siguiente */}
				<div className="flex  gap-1">
					{prevSlug && (
						<OcButtonLink
							href={`/projects/${prevSlug}`}
							label={t('previous')}
							icon={<OcIconArrowLeftAlt color="primary" />}
							color="secondary"
							className="w-full truncate"
						/>
					)}
					{nextSlug && (
						<OcButtonLink
							href={`/projects/${nextSlug}`}
							label={t('next')}
							iconRight={<OcIconArrowRightAlt color="primary" />}
							color="secondary"
							className="w-full"
						/>
					)}
				</div>

				<OcButtonLink
					href="/projects"
					label={tNav('all')}
					color="primary"
					className="w-full"
				/>
			</div>

			{/* Tipo + año + disciplina */}
			<div className="flex justify-between items-center">
				<OcBadgeIndicator
					code={discipline === 'develop' || discipline === 'both'}
					design={discipline === 'design' || discipline === 'both'}
				/>
				<OcBadge label={String(year)} color="secondary" />
			</div>

			{/* Título */}
			<h2 className="text-3xl m-0">{title}</h2>

			{/* Rol y alcance */}
			<div>
				<h3 className="text-sm uppercase tracking-widest font-medium mb-1">
					{t('role')}
				</h3>
				<p className="opacity-70 dark:opacity-80 text-sm">
					{roleAndScope}
				</p>
			</div>

			{/* Stack */}
			{stackInContext && (
				<div>
					<h3 className="text-sm uppercase tracking-widest font-medium mb-1">
						{t('stack')}
					</h3>
					<p className="opacity-70 dark:opacity-80 text-sm">
						{stackInContext}
					</p>
				</div>
			)}

			{/* Tech stack */}
			{techStack.length > 0 && (
				<div>
					<h3 className="text-sm uppercase tracking-widest font-medium mb-2">
						{t('tech')}
					</h3>
					<div className="flex gap-1 flex-wrap">
						{techStack.map((tech) => (
							<OcBadge
								key={tech}
								label={tech}
								color="secondary"
							/>
						))}
					</div>
				</div>
			)}

			{/* Visitar proyecto */}
			{liveUrl && (
				<OcButtonLink
					href={liveUrl}
					label={tNav('visit')}
					icon={<OcIconOpenInNew color="primary" />}
					color="secondary"
					target="_blank"
					className="w-full"
				/>
			)}
		</OcCard>
	);
};

export default OcPortfolioSidebar;
