import { Project } from '@/types/types';

import { v4 as uuidv4 } from 'uuid';

export const PROJECTS: readonly Project[] = [
	{
		id: 'app-bnbexplorer',
		year: '2025',
		title: 'App: BNBexplorer',
		shortDescription:
			'BNBExplorer: la herramienta para anfitriones de Airbnb que permite crear guías digitales personalizadas para tus alojamientos, con IA, mapas interactivos y enlaces únicos para tus huéspedes.',
		description:
			'BnbExplorer es una aplicación web creada para propietarios de Airbnb que centraliza toda la información de sus alojamientos y la comparte fácilmente con los huéspedes mediante un enlace único o código QR. Permite añadir datos básicos del alojamiento, así como categorías personalizables que van desde manuales, normas y horarios hasta recomendaciones de salud, gastronomía, cultura, compras o entretenimiento, con integración a Google Maps para la orientación. Además, incorpora inteligencia artificial para generar descripciones automáticas.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: true,
		design: true,
		thumbnail: '/static/projects/bnbexplorer/thumbnail-bnbexplorer.webp',
		link: 'https://www.bnbexplorer.com/',
		client: 'Proyecto personal',
		role: 'Diseño UX/UI, Desarrollo front.',
		technologies: ['Illustrator', 'Figma', 'Next JS', 'CSS', 'Supabase'],
	},
	{
		id: 'party-budget',
		year: '2019',
		title: 'Party budget',
		shortDescription:
			'Proyecto personal. App para calcular budget entre amigos.',
		description:
			'Aplicación pensada para simplificar la organización de gastos en actividades, comidas o quedadas entre amigos. Permite añadir asistentes, registrar los gastos de cada uno y genera automáticamente un resumen final que muestra quién debe a quién y cuánto, evitando cálculos manuales y facilitando una experiencia justa y transparente para todos.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: true,
		design: true,
		thumbnail: '/static/projects/budget/thumbnail-budget.webp',
		link: '',
		client: 'Proyecto personal',
		role: 'Diseño UX/UI, Desarrollo front.',
		technologies: ['Figma', 'Javascript', 'HTML', 'CSS', 'Bootstrap'],
	},
	{
		id: 'bkool-design-system',
		year: '2019',
		title: 'BKOOL Design System',
		shortDescription:
			'Design System creado para BKOOL, unificando criterios visuales y funcionales en un sistema escalable que garantiza coherencia, eficiencia y consistencia en todos sus productos digitales.',
		description:
			'El proyecto consistió en el diseño y desarrollo de un Sistema de Diseño integral para la empresa, concebido como una herramienta estratégica para optimizar sus flujos de trabajo digitales. El sistema recopila y estandariza tipografías, colores, iconografía, componentes y patrones de interacción, ofreciendo una biblioteca reutilizable que asegura la coherencia visual y la consistencia en la experiencia de usuario a lo largo de todas las plataformas.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: true,
		design: false,
		thumbnail: '/static/projects/bkool-design-system/thumbnail-bkool.webp',
		link: '',
		client: 'BKOOL',
		role: 'Diseño UX/UI, Desarrollo front.',
		technologies: ['Figma', 'Next JS', 'CSS'],
	},
	{
		id: 'bkool-design-system-private',
		year: '2019',
		title: 'BKOOL Design System. Área privada',
		shortDescription:
			'Design System - Área Privada diseñado para el dashboard de usuarios, con una estética diferenciada que potencia la usabilidad y la visualización de datos de forma clara e intuitiva.',
		description:
			'Este proyecto se centró en la creación de un Sistema de Diseño específico para el área privada de usuarios, un entorno donde la experiencia debía priorizar la claridad, la legibilidad y la eficiencia en la gestión de datos. A diferencia del diseño general de la empresa, aquí se desarrolló una estética propia, adaptada a un dashboard con información sensible y personalizada, lo que implicó trabajar con jerarquías visuales claras, componentes interactivos optimizados y un lenguaje visual que transmite confianza y modernidad. El sistema incluye tipografías, paletas cromáticas, patrones de interacción y una biblioteca de componentes reutilizables diseñados para dashboards y herramientas de gestión. También se integró técnicamente al entorno de desarrollo para garantizar consistencia, escalabilidad y agilidad en la construcción de nuevas vistas o módulos. Gracias a este enfoque, el producto final ofrece una experiencia fluida, coherente y visualmente diferenciada que responde a las necesidades del usuario en su espacio privado.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: true,
		design: false,
		thumbnail: '/static/projects/bkool-design-system/thumbnail-bkool.webp',
		link: '',
		client: 'BKOOL',
		role: 'Diseño UX/UI, Desarrollo front.',
		technologies: ['Figma', 'React', 'CSS', 'Storybook'],
	},
	{
		id: 'bkool-fitness-class-creator',
		year: '2014',
		title: 'BKOOL. Creador de Clases Fitness.',
		shortDescription:
			'Aplicación que permite a instructores diseñar clases virtuales uniendo vídeo, música y zonas de entrenamiento en una experiencia dinámica e interactiva.',
		description:
			'El Creador de Clases Fitness es una aplicación pensada para que instructores puedan diseñar y personalizar clases virtuales de manera sencilla. La herramienta permite subir el vídeo de la sesión, añadir la música y estructurar la clase en diferentes sectores o zonas de entrenamiento. El sistema combina todos estos elementos en un resultado final coherente y atractivo, listo para ser compartido con los alumnos.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: true,
		design: true,
		thumbnail:
			'/static/projects/fitness-creator/thumbnail-fitness-creator.webp',
		link: '',
		client: 'BKOOL',
		role: 'Diseño UX/UI, Desarrollo front.',
		technologies: [
			'Sketch',
			'Javascript',
			'Bootstrap',
			'HTML',
			'CSS',
			'SASS',
		],
	},
	{
		id: 'timer',
		year: '2014',
		title: 'Timer',
		shortDescription:
			'Aplicación web sencilla para crear múltiples cuentas atrás con aviso al finalizar, pensada como experimento personal.',
		description:
			'Timer es una aplicación web minimalista desarrollada como experimento personal, cuyo objetivo es ofrecer una forma rápida y simple de gestionar varias cuentas atrás directamente desde el navegador. Cada temporizador puede configurarse de manera independiente y emite un aviso cuando finaliza, lo que la convierte en una herramienta práctica para organizar tareas, descansos o rutinas cotidianas. El proyecto se centró en la simplicidad y la funcionalidad esencial, priorizando una interfaz clara y sin distracciones. Aunque se trata de un desarrollo experimental, Timer refleja la búsqueda de soluciones útiles a través de implementaciones ligeras y accesibles desde cualquier dispositivo.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: true,
		design: true,
		thumbnail: '/static/projects/timer/thumbnail-timer.webp',
		link: '',
		client: 'Proyecto personal',
		role: 'Diseño UX/UI, Desarrollo front.',
		technologies: [
			'Sketch',
			'Javascript',
			'Bootstrap',
			'HTML',
			'CSS',
			'SASS',
		],
	},
	{
		id: 'ludita',
		year: '2013',
		title: 'Ludita',
		shortDescription:
			'Diseño de marca para una tienda online de bolsos, carteras, abalorios y tejidos.',
		description:
			'Ludita es un proyecto de diseño de marca creado para una web de venta de bolsos, carteras, abalorios y tejidos. La identidad busca transmitir creatividad y cercanía, reflejando el carácter artesanal y femenino de los productos, pero con un aire moderno que conecta con el entorno digital. El logotipo combina sencillez y personalidad, ofreciendo una imagen fresca y versátil que acompaña la experiencia de compra online y refuerza el valor único de la marca.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: false,
		design: true,
		thumbnail: '/static/projects/ludita/thumbnail-ludita.webp',
		link: '',
		client: 'Ludita.',
		role: 'Diseño gráfico',
		technologies: ['Illustrator'],
	},
	{
		id: 'smartwatch-concept-design',
		year: '2013',
		title: 'Smartwatch, concept design',
		shortDescription:
			'Propuesta de diseño de producto y UI que replantea la experiencia del reloj inteligente, con una estética más coherente, modular y centrada en el usuario.',
		description:
			'Smartwatch, concept design es un proyecto personal de diseño de producto y UI que replantea la experiencia del reloj inteligente. La propuesta parte de la forma circular tradicional para generar familiaridad, incorpora un sistema modular que integra pulsera y hardware de manera limpia y personalizable, y ofrece una interfaz minimalista e intuitiva pensada para notificaciones y funciones esenciales, evitando convertir el dispositivo en un “smartphone en miniatura”.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: false,
		design: true,
		thumbnail: '/static/projects/smartwatch/thumbnail-smartwatch.webp',
		link: '',
		client: 'Proyecto personal',
		role: 'Diseño de producto y UX/UI.',
		technologies: ['Illustrator', 'Photoshop'],
	},
	{
		id: 'google-music-player',
		year: '2013',
		title: 'Google Music Player',
		shortDescription:
			'Experimento de diseño personal centrado en la creación de un reproductor de escritorio para Google Music, explorando producto y UI.',
		description:
			'Google Music Player es un proyecto personal de exploración en diseño de producto y experiencia de usuario, concebido como un experimento para imaginar cómo sería un reproductor de escritorio para Google Music. El diseño busca equilibrar simplicidad y funcionalidad, ofreciendo una interfaz clara, centrada en la música y en la interacción intuitiva, al mismo tiempo que explora posibilidades estéticas y de organización para enriquecer la experiencia de uso.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: false,
		design: true,
		thumbnail: '/static/projects/google-music/thumbnail-google-music.webp',
		link: '',
		client: 'Proyecto personal',
		role: 'Diseño de producto y UX/UI.',
		technologies: ['Illustrator', 'Photoshop'],
	},
	{
		id: 'ebeenet',
		year: '2011',
		title: 'ebeenet',
		shortDescription:
			'Diseño de marca para una app de mensajería instantánea, con identidad moderna y cercana al estilo de plataformas como WhatsApp.',
		description:
			'Ebeenet es un proyecto de diseño de marca para una aplicación de mensajería instantánea. Su identidad se inspira en las abejas y su capacidad de vivir en comunidad, reflejando valores de colaboración, dinamismo y conexión constante. El logotipo evoca tanto el zumbido característico (buzz) como la idea de red, transmitiendo cercanía y agilidad. El resultado es una marca fresca y memorable, que combina la simplicidad propia de las apps de mensajería con un concepto visual fuerte y diferenciador.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: false,
		design: true,
		thumbnail: '/static/projects/ebeenet/thumbnail-ebeenet.webp',
		link: '',
		client: 'Proyecto personal',
		role: 'Diseño gráfico',
		technologies: ['Illustrator', 'Photoshop'],
	},
	{
		id: 'caca-ninno',
		year: '2010',
		title: 'Caca Niño',
		shortDescription:
			'Diseño de cartel para evento dirigido a padres e hijos, centrado en la educación infantil.',
		description:
			'Caca Niño es un proyecto de diseño gráfico creado para un evento orientado a padres e hijos, con foco en la educación infantil. El cartel busca transmitir cercanía y simpatía mediante un lenguaje visual accesible y atractivo, capaz de conectar tanto con los adultos como con los más pequeños. La propuesta gráfica combina sencillez, humor y colorido para comunicar de manera clara la esencia lúdica y formativa del evento.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: false,
		design: true,
		thumbnail: '/static/projects/cacaninno/thumbnail-cacaninno.webp',
		link: '',
		client: 'Génesis, galerías de arte',
		role: 'Diseño gráfico',
		technologies: ['Illustrator'],
	},
	{
		id: 'casa-real',
		year: '2009',
		title: 'Casa Real',
		shortDescription:
			'Proyecto de branding para una empresa textil en La Habana Vieja, inspirado en la herrería tradicional y los ornamentos coloniales.',
		description:
			'Casa Real es un proyecto de branding desarrollado para una empresa textil ubicada en La Habana Vieja, Cuba. La identidad visual se inspira en la herrería típica de las ventanas y los ornamentos coloniales, elementos que forman parte del carácter arquitectónico y cultural de la ciudad. El logotipo combina tradición y elegancia, transmitiendo autenticidad y reforzando el vínculo de la marca con su contexto histórico y artesanal.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: false,
		design: true,
		thumbnail: '/static/projects/casareal/thumbnail-casareal.webp',
		link: '',
		client: 'Génesis, galerías de arte',
		role: 'Diseño gráfico',
		technologies: ['Illustrator'],
	},
	{
		id: 'film-festival',
		year: '2008',
		title: '28 Festival de Cine Latinoamericano',
		shortDescription:
			'Diseño de cartel para el 28 Festival de cine Latinoamericano. La Habana, Cuba.',
		description:
			'El cartel para el 28 Festival de Cine Latinoamericano de La Habana se desarrolló como un ejercicio de diseño gráfico que vincula el cine con la identidad cultural latinoamericana. La propuesta toma como punto de partida las tramas y patrones de los tejidos colombinos, reinterpretados en una composición contemporánea que simboliza la diversidad y la riqueza de la región. El resultado es una pieza vibrante y evocadora, que celebra la tradición artesanal mientras refuerza el espíritu colectivo y multicultural del festival.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: false,
		design: true,
		thumbnail:
			'/static/projects/festival-cine/thumbnail-festival-cine.webp',
		link: '',
		client: 'Casa de las américas',
		role: 'Diseño gráfico',
		technologies: ['Illustrator'],
	},
	{
		id: 'kihoku',
		year: '2008',
		title: 'Kihoku',
		shortDescription:
			'Diseño de marca para un restaurante de comida japonesa, creado para un concurso.',
		description:
			'Kihoku es un proyecto de diseño de marca desarrollado para un concurso, cuyo objetivo era crear la identidad visual de un restaurante de comida japonesa. La propuesta busca transmitir autenticidad y elegancia, evocando la tradición nipona a través de una estética limpia y equilibrada. El logotipo combina simplicidad gráfica con un aire contemporáneo, dando como resultado una marca versátil y reconocible que refleja tanto la cultura japonesa como la experiencia gastronómica que representa.',
		images: ['/static/projects/thumbnail-placeholder.png'],
		code: false,
		design: true,
		thumbnail: '/static/projects/kihoku/thumbnail-kihoku.webp',
		link: '',
		client: 'Concurso.',
		role: 'Diseño gráfico',
		technologies: ['Illustrator'],
	},
];
