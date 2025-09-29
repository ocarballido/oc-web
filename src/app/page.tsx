import OcBadge from '@/components/molecules/badge';
import OcBadgeIndicator from '@/components/molecules/badge-indicator';
import OcButton from '@/components/molecules/button';
import OcButtonLink from '@/components/molecules/button-link';
import OcCard from '@/components/atoms/card';

export default function Home() {
	return (
		<main className="flex flex-col h-full flex-1">
			<OcCard className="mt-6 max-w-7xl md:w-full lg:w-5xl xl:w-full mx-auto mb-3 lg:-mb-12 relative z-10">
				<p className="mb-3 opacity-80 font-normal text-base">
					Perfil híbrido especializado en desarrollo frontend y diseño
					de interfaces, capaz de transformar propuestas visuales en
					experiencias digitales reales, funcionales y accesibles. La
					combinación de creatividad estética y lógica de programación
					permite abordar proyectos con una visión integral, desde el
					concepto inicial hasta la implementación en código.
				</p>
				<p className="opacity-80 font-normal text-base">
					La trayectoria incluye experiencia en branding, aplicaciones
					móviles, web y de escritorio, así como en la creación de
					sistemas de diseño y la participación en equipos
					multidisciplinarios. Con formación en Diseño en el Instituto
					Superior de Diseño de La Habana (2003), el recorrido
					profesional se ha consolidado en el rol de UI Developer,
					integrando innovación estética y solidez técnica.
				</p>
			</OcCard>
			<div className="flex justify-center items-stretch rounded-2xl overflow-hidden flex-1 relative px-6 py-20 md:py-36 lg:py-48 bg-[url('/static/code-design-vertical-bg.webp')] md:bg-[url('/static/code-design-bg.webp')] bg-no-repeat bg-center bg-cover md:bg-auto before:content-[''] md:before:w-[50%] before:w-[100%] before:bg-(--background-light) before:absolute before:h-[50%] md:before:h-[100%] h-[100%] before:top-0 before:left-0 before:-z-10">
				<div className="bg-white shadow-2xl rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[800px] w-full md:my-auto">
					<div className="p-6 md:max-w-[400px] w-full flex flex-col gap-3 flex-1">
						<OcBadgeIndicator code />
						<h2 className="text-3xl font-normal text-primary-400">
							Think Logically
						</h2>
						<p className="opacity-70">
							Después de oir tantas veces, “eso no se puede
							hacer”, “los usuarios no se dan cuenta de eso”
							decidí que un perfil más completo de lo que me gusta
							hacer como profesional, sería llevar al código mis
							diseños de interfaz. He tenido la oportunidad de
							trabajar en equipos de desarrollo web, con algunas
							de las tecnologías más demandadas y creando
							experiencias accesibles y divertidas
						</p>
						<div className="flex gap-1 flex-wrap  mt-auto mb-2">
							<OcBadge label="Next JS" color="secondary" />
							<OcBadge label="React" color="secondary" />
							<OcBadge label="Javascript" color="secondary" />
							<OcBadge label="Sass" color="secondary" />
							<OcBadge label="HTML" color="secondary" />
							<OcBadge label="CSS" color="secondary" />
							<OcBadge label="Tailwindcss" color="secondary" />
							<OcBadge label="Bootstrap" color="secondary" />
							<OcBadge label="Git" color="secondary" />
						</div>
						<OcButtonLink
							label="Ver proyectos"
							href="/projects/develop"
						/>
					</div>
					<div className="p-6 bg-primary-400 md:max-w-[400px] w-full flex flex-col gap-3 flex-1">
						<OcBadgeIndicator design color="white" />
						<h2 className="text-3xl font-normal text-white">
							Think Creatively
						</h2>
						<p className="text-white">
							La importancia de que el usuario lo pase bien usando
							un producto y que además, lo encuentre fácil de usar
							y estéticamente atractivo, son mis objetivos en cada
							proyecto. Dicen que la comida entra por los ojos, yo
							creo que con el diseño pasa lo mismo.
						</p>
						<div className="flex gap-1 flex-wrap mt-auto mb-2">
							<OcBadge label="Figma" />
							<OcBadge label="Illustrator" />
							<OcBadge label="Photoshop" />
							<OcBadge label="Material Design" />
							<OcBadge label="Branding" />
						</div>
						<OcButtonLink
							label="Ver proyectos"
							href="/projects/design"
							color="white"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
