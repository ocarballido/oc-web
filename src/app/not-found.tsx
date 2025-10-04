import OcCard400 from '@/components/molecules/card-404';

import type { Card400 } from '@/types/types';

export default function NotFound({ type, description, image, link }: Card400) {
	return (
		<main className="flex flex-col h-full flex-1">
			<div className="flex justify-center items-stretch rounded-2xl overflow-hidden md:flex-1 relative px-6 py-20 md:py-36 lg:py-48 bg-[url('/static/code-design-vertical-bg.webp')] md:bg-[url('/static/code-design-bg.webp')] bg-no-repeat bg-center bg-cover md:bg-auto before:content-[''] md:before:w-[50%] before:w-[100%] before:bg-(--background-light) before:absolute before:h-[50%] md:before:h-[100%] h-[100%] before:top-0 before:left-0 before:-z-10 mt-3">
				<div className="bg-white shadow-2xl rounded-2xl grid auto-rows-fr md:flex md:flex-row overflow-hidden max-w-[600px] w-full md:my-auto">
					<OcCard400
						type="develop"
						code="404"
						link="/projects/develop"
					/>
					<OcCard400
						type="design"
						description="Entre el código y el diseño... algo se rompió. Parece que has caído en el lado vacío del diseño/desarrollo. Regresa a la zona donde ambas mitades tienen sentido."
						image={image}
						link="/projects/design"
					/>
				</div>
			</div>
		</main>
	);
}
