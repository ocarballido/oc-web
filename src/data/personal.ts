import { Personal, ThinkMethod } from '@/types/types';

export const PERSONAL: Personal = {
	title: 'Oscar Carballido: UI Developer',
	description:
		'Perfil híbrido especializado en desarrollo frontend y diseño de interfaces, capaz de transformar propuestas visuales en experiencias digitales reales, funcionales y accesibles. La combinación de creatividad estética y lógica de programación permite abordar proyectos con una visión integral, desde el concepto inicial hasta la implementación en código. La trayectoria incluye experiencia en branding, aplicaciones móviles, web y de escritorio, así como en la creación de sistemas de diseño y la participación en equipos multidisciplinarios. Con formación en Diseño en el Instituto Superior de Diseño de La Habana (2003), el recorrido profesional se ha consolidado en el rol de UI Developer, integrando innovación estética y solidez técnica.',
};

export const THINK_LOGICALLY: ThinkMethod = {
	type: 'develop',
	title: 'Think Logically',
	description:
		'Después de oir tantas veces, “eso no se puede hacer”, “los usuarios no se dan cuenta de eso” decidí que un perfil más completo de lo que me gusta hacer como profesional, sería llevar al código mis diseños de interfaz. He tenido la oportunidad de trabajar en equipos de desarrollo web, con algunas de las tecnologías más demandadas y creando experiencias accesibles y divertidas.',
	tools: [
		'Next JS',
		'React',
		'Javascript',
		'Sass',
		'HTML',
		'CSS',
		'TailwindCSS',
		'Bootstrap',
		'Git',
	],
	link: '/projects/develop',
};

export const THINK_CREATIVELLY: ThinkMethod = {
	type: 'design',
	title: 'Think Creatively',
	description:
		'La importancia de que el usuario lo pase bien usando un producto y que además, lo encuentre fácil de usar y estéticamente atractivo, son mis objetivos en cada proyecto. Dicen que la comida entra por los ojos, yo creo que con el diseño pasa lo mismo.',
	tools: ['Figma', 'Illustrator', 'Photoshop', 'Material design', 'Branding'],
	link: '/projects/design',
};
