import OcButtonLink from '@/components/molecules/button-link';

type MainMamuProps = {
	className?: string;
	path: string;
};

const OcMainMenu = ({ className = '', path = '/' }: MainMamuProps) => {
	return (
		<div className={`${className}`}>
			<OcButtonLink
				label="Trayectoría"
				href="/trajectory"
				color="white"
				active={path === '/trajectory'}
			/>
			<OcButtonLink
				label="Proyectos"
				href="/projects"
				color="white"
				active={path === '/projects'}
			/>
			<OcButtonLink
				label="CV PDF"
				href="/static/cv/CV_Oscar_Carballido_ES.pdf"
			/>
		</div>
	);
};

export default OcMainMenu;
