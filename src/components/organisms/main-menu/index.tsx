import OcButtonLink from '@/components/molecules/button-link';

type MainMamuProps = {
	className?: string;
	path: string;
};

const OcMainMenu = ({ className = '', path = '/' }: MainMamuProps) => {
	return (
		<nav className={`${className}`}>
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
			<OcButtonLink
				label="CV PDF"
				href="/static/cv/CV_Oscar_Carballido_ES.pdf"
			/>
		</nav>
	);
};

export default OcMainMenu;
