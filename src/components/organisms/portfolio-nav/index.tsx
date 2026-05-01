'use client';

import { useTranslations } from 'next-intl';

import OcButtonLink from '@/components/molecules/button-link';
import OcIconArrowLeftAlt from '@/components/atoms/icon/arrow-left-alt';
import OcIconArrowRightAlt from '@/components/atoms/icon/arrow-right-alt';

type Props = {
	prevSlug: string | null;
	prevTitle: string | null;
	nextSlug: string | null;
	nextTitle: string | null;
};

const OcPortfolioNav = ({
	prevSlug,
	prevTitle,
	nextSlug,
	nextTitle,
}: Props) => {
	const t = useTranslations('portfolioNav');

	return (
		<nav className="flex justify-center mb-4">
			<div className="flex flex-col sm:flex-row gap-1 items-stretch sm:items-center p-1 bg-white dark:bg-(--background-light) rounded-4xl shadow-xs backdrop-blur-md">
				{prevSlug && (
					<OcButtonLink
						href={`/projects/${prevSlug}`}
						label={prevTitle ?? ''}
						icon={<OcIconArrowLeftAlt color="primary" />}
						color="secondary"
					/>
				)}

				<OcButtonLink
					href="/projects"
					label={t('all')}
					color="primary"
				/>

				{nextSlug && (
					<OcButtonLink
						href={`/projects/${nextSlug}`}
						label={nextTitle ?? ''}
						iconRight={<OcIconArrowRightAlt color="primary" />}
						color="secondary"
					/>
				)}
			</div>
		</nav>
	);
};

export default OcPortfolioNav;
