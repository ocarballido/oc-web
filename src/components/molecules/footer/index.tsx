import Link from 'next/link';
import Image from 'next/image';

const OcFooter = () => {
	return (
		<footer className="py-6 sm:py-4 px-4 mx-2 md:mx-3 bg-(--background-light) rounded-2xl mt-0">
			<div className="max-w-7xl md:w-full lg:w-4xl xl:w-full mx-auto text-sm font-medium flex flex-col sm:flex-row items-center gap-4 justify-between">
				<div className="flex flex-col sm:flex-row items-center gap-3">
					<Link
						href="/"
						className="flex flex-col sm:flex-row items-center gap-2"
					>
						<Image
							src="/static/icons/oc-symbol.svg"
							width={24}
							height={24}
							alt="Oscarballido Logo"
							style={{ width: '24', height: 'auto' }}
						/>
						<p className="text-left opacity-50 grow-0 w-auto">
							Oscar Carballido | UI Developer
						</p>
					</Link>
					<div className="flex gap-3 items-center py-2 px-3 bg-neutral-950/10 opacity-60 rounded-full">
						<Image
							src="/static/footer/nextjs.svg"
							alt="NextJS logo"
							className=""
							width={50}
							height={50}
							style={{ width: '50', height: 'auto' }}
						/>
						<span className="font-bold">+</span>
						<Image
							src="/static/footer/hygraph.svg"
							alt="NextJS logo"
							width={60}
							height={50}
							style={{ width: '60', height: 'auto' }}
						/>
					</div>
				</div>
				<nav>
					<ul className="inline-flex gap-3 opacity-50">
						<li>
							<Link
								href="https://github.com/ocarballido"
								className="flex gap-1 items-center"
								target="_blank"
								scroll={false}
							>
								<Image
									src="/static/icons/github-black.svg"
									height={16}
									width={16}
									alt="Github icon"
									style={{ width: '16', height: 'auto' }}
									// className="opacity-50"
								/>
								GitHub
							</Link>
						</li>
						<li>
							<Link
								href="https://es.linkedin.com/in/oscar-armando-carballido-perdomo-56b47b39"
								className="flex gap-1 items-center"
								target="_blank"
								scroll={false}
							>
								<Image
									src="/static/icons/linkedin-black.svg"
									height={16}
									width={16}
									alt="Github icon"
									style={{ width: '16', height: 'auto' }}
									// className="opacity-50"
								/>
								LinkedIn
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default OcFooter;
