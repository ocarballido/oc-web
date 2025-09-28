import OcCardTrajectory from '@/components/molecules/card-trajectory';

export default function Trajectory() {
	return (
		<main className="flex flex-col flex-1">
			<div className="py-6 max-w-7xl md:w-full lg:w-5xl xl:w-full mx-auto mb-3 lg:-mb-12">
				<OcCardTrajectory
					isFirst
					begin="2026"
					end="2014"
					company="BKOOL."
					location="Madrid."
					role="UI Developer."
					responsabilities={[
						'Desarrollo front de interfaces de usuario.',
						'Creación de Sistema de diseño Bkool DLS.',
						'Diseñar interfaces de usuario siguiendo guías de estilo en DLS.',
					]}
					tools={[
						'Next JS',
						'React',
						'Javascript',
						'HTML',
						'CSS',
						'SASS',
					]}
				/>
				<OcCardTrajectory
					rowReverse={true}
					begin="2026"
					end="2014"
					company="BKOOL."
					location="Madrid."
					role="UI Developer."
					responsabilities={[
						'Desarrollo front de interfaces de usuario.',
						'Creación de Sistema de diseño Bkool DLS.',
						'Diseñar interfaces de usuario siguiendo guías de estilo en DLS.',
					]}
					tools={[
						'Next JS',
						'React',
						'Javascript',
						'HTML',
						'CSS',
						'SASS',
					]}
				/>
				<OcCardTrajectory
					begin="2026"
					end="2014"
					company="BKOOL."
					location="Madrid."
					role="UI Developer."
					responsabilities={[
						'Desarrollo front de interfaces de usuario.',
						'Creación de Sistema de diseño Bkool DLS.',
						'Diseñar interfaces de usuario siguiendo guías de estilo en DLS.',
					]}
					tools={[
						'Next JS',
						'React',
						'Javascript',
						'HTML',
						'CSS',
						'SASS',
					]}
				/>
				<OcCardTrajectory
					rowReverse={true}
					begin="2026"
					end="2014"
					company="BKOOL."
					location="Madrid."
					role="UI Developer."
					responsabilities={[
						'Desarrollo front de interfaces de usuario.',
						'Creación de Sistema de diseño Bkool DLS.',
						'Diseñar interfaces de usuario siguiendo guías de estilo en DLS.',
					]}
					tools={[
						'Next JS',
						'React',
						'Javascript',
						'HTML',
						'CSS',
						'SASS',
					]}
					isLast
				/>
			</div>
		</main>
	);
}
