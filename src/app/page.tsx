import OcCard from '@/components/atoms/card';
import OcCardThink from '@/components/molecules/card-think';

import { PERSONAL, THINK_LOGICALLY, THINK_CREATIVELLY } from '@/data/personal';

export default function Home() {
	return (
		<main className="flex flex-col h-full flex-1">
			<OcCard className="mt-6 max-w-7xl md:w-full lg:w-5xl xl:w-full mx-auto mb-3 lg:-mb-18 relative z-10">
				<h1 className="text-primary-400 text-5xl font-light mb-5">
					{PERSONAL.title}
				</h1>
				<p className="mb-3 opacity-80 font-normal text-base">
					{PERSONAL.description}
				</p>
			</OcCard>
			<div className="flex justify-center items-stretch rounded-2xl overflow-hidden flex-1 relative px-6 py-20 md:py-36 lg:py-48 bg-[url('/static/code-design-vertical-bg.webp')] md:bg-[url('/static/code-design-bg.webp')] bg-no-repeat bg-center bg-cover md:bg-auto before:content-[''] md:before:w-[50%] before:w-[100%] before:bg-(--background-light) before:absolute before:h-[50%] md:before:h-[100%] h-[100%] before:top-0 before:left-0 before:-z-10">
				<div className="bg-white shadow-2xl rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[800px] w-full md:my-auto">
					<OcCardThink
						type={THINK_LOGICALLY?.type}
						title={THINK_LOGICALLY?.title}
						description={THINK_LOGICALLY?.description}
						tools={THINK_LOGICALLY?.tools}
						link={THINK_LOGICALLY?.link}
					/>
					<OcCardThink
						type={THINK_CREATIVELLY?.type}
						title={THINK_CREATIVELLY?.title}
						description={THINK_CREATIVELLY?.description}
						tools={THINK_CREATIVELLY?.tools}
						link={THINK_CREATIVELLY?.link}
					/>
					{/* <div className="p-6 bg-primary-400 md:max-w-[400px] w-full flex flex-col gap-3 flex-1">
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
					</div> */}
				</div>
			</div>
		</main>
	);
}
