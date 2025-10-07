import OcButtonLink from '@/components/molecules/button-link';

type MainMamuProps = {
	className?: string;
	path: string;
};

const OcMainMenu = ({ className = '', path = '/' }: MainMamuProps) => {
	return (
		<nav className={`${className}`}>
			<OcButtonLink
				label="Inicio"
				href="/"
				color="white"
				active={path === '/'}
			/>
			<OcButtonLink
				label="Trayectoría"
				href="/trajectory"
				color="white"
				active={path.includes('trajectory')}
			/>
			<OcButtonLink
				label="Proyectos"
				href="/projects/develop"
				color="white"
				active={path.includes('projects')}
			/>
		</nav>
	);
};

export default OcMainMenu;
