import OcButtonLink from '@/components/molecules/button-link';
import OcLinkMenu from '@/components/molecules/link-menu';

type MainMamuProps = {
	className?: string;
	path: string;
};

const OcMainMenu = ({ className = '', path = '/' }: MainMamuProps) => {
	return (
		<nav className={`${className}`}>
			<OcLinkMenu label="Inicio" href="/" active={path === '/'} />
			<OcLinkMenu
				label="Trayectoría"
				href="/trajectory"
				active={path.includes('trajectory')}
			/>
			<OcLinkMenu
				label="Proyectos"
				href="/projects/develop"
				active={path.includes('projects')}
				className="not-hover:bg-transparent "
			/>
			<OcLinkMenu
				label="Habilidades"
				href="/skills"
				active={path.includes('skills')}
			/>
		</nav>
	);
};

export default OcMainMenu;
