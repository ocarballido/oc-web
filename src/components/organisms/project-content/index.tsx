import { ProjectDetail } from '@/types/types';

import OcResearch from '@/components/templates/research';
import OcImageGallery from '@/components/templates/image-gallery';

type ContentProps = Pick<
	ProjectDetail,
	| 'title'
	| 'images'
	| 'problem'
	| 'users'
	| 'solution'
	| 'principles'
	| 'uxDecisions'
	| 'outcome'
	| 'needsTable'
>;

const OcProjectContent = ({
	title,
	images,
	problem,
	users,
	solution,
	principles,
	uxDecisions,
	outcome,
	needsTable,
}: ContentProps) => {
	return (
		<div className="flex-1 w-full">
			<div className="relative rounded-2xl overflow-hidden">
				{problem && (
					<OcResearch
						problem={problem}
						users={users}
						solution={solution}
						principles={principles}
						uxDecisions={uxDecisions}
						outcome={outcome}
						needsTable={needsTable}
					/>
				)}
				<OcImageGallery images={images} title={title} />
			</div>
		</div>
	);
};

export default OcProjectContent;
