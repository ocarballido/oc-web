import { useTranslations, useLocale } from 'next-intl';

import OcLinkMenu from '@/components/molecules/link-menu';
import { LocaleSwitcher } from '@/components/molecules/language-swither';

type MainMamuProps = {
	className?: string;
	path: string;
};

const OcMainMenu = ({ className = '', path = '/' }: MainMamuProps) => {
	const t = useTranslations('AppBar');
	const locale = useLocale();

	const cvHref =
		locale === 'en'
			? '/static/docs/CV_Oscar_Carballido_EN-2025.pdf'
			: '/static/docs/CV_Oscar_Carballido_ES-2025.pdf';

	return (
		<nav className={`${className}`}>
			<OcLinkMenu label={t('home')} href="/" active={path === '/'} />
			<OcLinkMenu
				label={t('trajectory')}
				href="/trajectory"
				active={path.includes('trajectory')}
			/>
			<OcLinkMenu
				label={t('projects')}
				href="/projects/develop"
				active={path.includes('projects')}
				className="not-hover:bg-transparent "
			/>
			<OcLinkMenu
				label={t('skills')}
				href="/skills"
				active={path.includes('skills')}
			/>
			<OcLinkMenu label={t('cv')} href={cvHref} target="_blank" />
			<LocaleSwitcher />
		</nav>
	);
};

export default OcMainMenu;
