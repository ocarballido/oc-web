import Link from 'next/link';
import Image from 'next/image';

const OcFooter = () => {
	return (
		<footer className="py-6 sm:py-4 px-4 mx-2 md:mx-3 bg-(--background-light) dark:bg-[#0a0f19] rounded-2xl mt-0 text-gray-500 dark:text-[#a0b8e3]/70">
			<div className="max-w-7xl md:w-full lg:w-4xl xl:w-full mx-auto text-sm font-medium flex flex-col sm:flex-row items-center gap-4 justify-between">
				<div className="flex flex-col sm:flex-row items-center gap-3">
					<Link
						href="/"
						className="flex flex-col sm:flex-row items-center gap-2"
					>
						<Image
							src="/static/icons/oscarballido-symbol-dark.svg"
							width={24}
							height={24}
							alt="Oscarballido Logo"
							className="hidden dark:block w-[24px] h-[24px]"
						/>
						<Image
							src="/static/icons/oc-symbol.svg"
							width={24}
							height={24}
							alt="Oscarballido Logo"
							className="block dark:hidden w-[24px] h-[24px]"
						/>
						<p className="text-left grow-0 w-auto">
							Oscar Carballido | UI Developer
						</p>
					</Link>
					<div className="flex gap-3 items-center py-2 px-3 bg-primary-10 dark:bg-(--background-light) rounded-full">
						<Image
							src="/static/footer/nextjs.svg"
							alt="NextJS logo"
							className="opacity-40 block dark:hidden w-[50px] h-[20px]"
							width={50}
							height={20}
						/>
						<Image
							src="/static/footer/nextjs-dark.svg"
							alt="NextJS logo"
							className="hidden dark:block opacity-70 w-[50px] h-[20px]"
							width={50}
							height={20}
						/>
						<span className="font-bold">+</span>
						<Image
							src="/static/footer/hygraph.svg"
							alt="NextJS logo"
							width={60}
							height={20}
							className="opacity-40 block dark:hidden w-[60px] h-[20px]"
						/>
						<Image
							src="/static/footer/hygraph-dark.svg"
							alt="NextJS logo"
							width={60}
							height={20}
							className="opacity-70 hidden dark:block w-[60px] h-[20px]"
						/>
					</div>
				</div>
				<nav>
					<ul className="inline-flex gap-3">
						<li>
							<Link
								href="https://github.com/ocarballido"
								className="flex gap-1 items-center"
								target="_blank"
								scroll={false}
							>
								<Image
									src="/static/icons/github-dark.svg"
									height={16}
									width={16}
									alt="Github icon"
									className="hidden dark:block opacity-70 w-[16px] h-[16px]"
								/>
								<Image
									src="/static/icons/github-black.svg"
									height={16}
									width={16}
									alt="Github icon"
									className="block dark:hidden opacity-40 w-[16px] h-[16px]"
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
									src="/static/icons/linkedin-dark.svg"
									height={16}
									width={16}
									alt="Github icon"
									className="hidden dark:block opacity-70 w-[16px] h-[16px]"
								/>
								<Image
									src="/static/icons/linkedin-black.svg"
									height={16}
									width={16}
									alt="Github icon"
									className="block dark:hidden opacity-40 w-[16px] h-[16px]"
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
