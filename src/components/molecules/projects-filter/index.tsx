import OcButtonLink from '../button-link';

type FilterProps = {
	active: 'DEVELOP' | 'DESIGN' | 'BOTH';
};

const OcProjectsFilter = ({ active }: FilterProps) => {
	return (
		<nav className="flex items-center justify-center">
			<ul className="flex gap-1 p-1 bg-white rounded-4xl shadow-xs items-center justify-center w-full max-w-md">
				<li className="flex-1">
					<OcButtonLink
						label="Desarrollo"
						href="/projects/develop"
						color="white"
						icon="/static/icons/brain-left-primary.svg"
						className="w-full"
						active={active === 'DEVELOP'}
					/>
				</li>
				<li className="flex-1">
					<OcButtonLink
						label="Diseño"
						href="/projects/design"
						color="white"
						icon="/static/icons/brain-right-primary.svg"
						className="w-full"
						active={active === 'DESIGN'}
					/>
				</li>
				<li className="flex-1">
					<OcButtonLink
						label="Ambos"
						href="/projects/both"
						color="white"
						icon="/static/icons/brain-both-primary.svg"
						className="w-full"
						active={active === 'BOTH'}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default OcProjectsFilter;
