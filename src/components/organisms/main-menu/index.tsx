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
				label={t('about')}
				href="/about-me"
				active={path.includes('about-me')}
			/>
			{/* <OcLinkMenu
				label={t('skills')}
				href="/skills"
				active={path.includes('skills')}
			/> */}
			<a
				className={`font-medium text-base rounded-full transition-colors flex items-center justify-center gap-1 py-2 px-4 hover:cursor-pointer bg-transparent hover:bg-primary-10 focus:bg-primary-10 text-primary-400 dark:hover:bg-[#293B54] dark:focus:bg-[#293B54] dark:text-[#95add9]`}
				href={cvHref}
				target="_blank"
			>
				{t('cv')}
			</a>
			<LocaleSwitcher />
		</nav>
	);
};

export default OcMainMenu;
