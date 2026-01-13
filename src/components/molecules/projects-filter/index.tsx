import { useTranslations } from 'next-intl';

import OcButtonTab from '../button-tab';

type FilterProps = {
	active: 'DEVELOP' | 'DESIGN' | 'BOTH';
};

const OcProjectsFilter = ({ active }: FilterProps) => {
	const t = useTranslations('projectFilter');

	return (
		<nav className="flex items-center justify-center sticky top-29.5 z-5">
			<ul className="flex gap-1 p-1 bg-white dark:bg-(--background-light) rounded-4xl shadow-xs items-center justify-center w-full max-w-xs backdrop-blur-md">
				<li className="flex-1">
					<OcButtonTab
						label={t('develop')}
						href="/projects/develop"
						color="white"
						iconBefore="/static/icons/brain-left-primary.svg"
						className="w-full"
						active={active === 'DEVELOP'}
					/>
				</li>
				<li className="flex-1">
					<OcButtonTab
						label={t('design')}
						href="/projects/design"
						color="white"
						iconBefore="/static/icons/brain-right-primary.svg"
						className="w-full"
						active={active === 'DESIGN'}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default OcProjectsFilter;
