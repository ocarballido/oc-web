import OcCard400 from '@/components/molecules/card-404';

export default function NotFound({ image }: { image: string }) {
	return (
		<main className="flex flex-col h-full flex-1">
			<div className="flex justify-center items-stretch rounded-2xl overflow-visible flex-1 relative px-6 py-20 before:content-[''] md:before:w-[50%] before:w-[100%] before:bg-transparent before:absolute before:top-0 before:left-0 before:-z-10 bg-[#D5E2F3] bg-[url('/static/splash-01-vertical.webp')] md:bg-[url('/static/splash-01-horizontal.webp')] bg-no-repeat bg-center bg-cover md:bg-[auto 100%] mt-3">
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
