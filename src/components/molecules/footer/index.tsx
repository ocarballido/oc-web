import Link from 'next/link';
import Image from 'next/image';

const OcFooter = () => {
	return (
		<footer className="pt-4 mx-3 pb-4 bg-(--background-light) rounded-2xl mt-0">
			<div className="max-w-5xl md:w-full lg:w-4xl xl:w-full mx-auto text-slate-500 text-center text-sm font-medium flex justify-center items-center gap-2 flex-col">
				<p className="flex-1 text-left">
					Oscar Carballido | UI Developer
				</p>
				<nav className="">
					<ul className="inline-flex gap-3">
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
									className="opacity-50"
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
									className="opacity-50"
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
