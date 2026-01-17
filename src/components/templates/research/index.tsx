import { useTranslations } from 'next-intl';

import { ProjectDetail } from '@/types/types';

import OcCard from '@/components/atoms/card';
import OcTitleSubtitle from '@/components/molecules/title-subtitle';
import { ModalContent } from '@/components/organisms/modal';

type ContentProps = Pick<
	ProjectDetail,
	| 'problem'
	| 'users'
	| 'solution'
	| 'principles'
	| 'uxDecisions'
	| 'outcome'
	| 'needsTable'
>;

const OcResearch = ({
	problem,
	users,
	solution,
	principles,
	uxDecisions,
	outcome,
	needsTable,
}: ContentProps) => {
	const t = useTranslations('ResearchModal');

	return (
		<OcCard className="grid grid-cols-1 gap-3 mb-1">
			<OcTitleSubtitle
				title={problem?.title}
				description={problem?.description}
			/>

			{(users ||
				solution ||
				principles ||
				uxDecisions ||
				outcome ||
				needsTable) && (
				<ModalContent buttonText={t('moreDetails')} title={t('title')}>
					<div className="grid grid-cols-1 gap-6">
						{users && (
							<OcTitleSubtitle
								title={users.title}
								description={users.description}
							/>
						)}
						{needsTable && (
							<table className="w-full table-auto border-collapse text-sm dark:text-[#a0b8e3]">
								<thead>
									<tr>
										<th className="border-b border-gray-300 dark:border-[#a0b8e3]/40 p-3 pl-0 text-left font-medium">
											{t('user')}
										</th>
										<th className="border-b border-gray-300 dark:border-[#a0b8e3]/40 p-3 text-left font-medium">
											{t('keyNeeds')}
										</th>
										<th className="border-b border-gray-300 dark:border-[#a0b8e3]/40 p-3 pr-0 text-left font-medium">
											{t('productResponse')}
										</th>
									</tr>
								</thead>
								<tbody className="">
									{needsTable.map((row) => (
										<tr key={row.id}>
											<td className="border-b border-gray-100 dark:border-[#a0b8e3]/10 p-3 pl-0 font-medium opacity-70">
												{row.user}
											</td>
											<td className="border-b border-gray-100 dark:border-[#a0b8e3]/10 p-3 font-medium opacity-70">
												{row.need}
											</td>
											<td className="border-b border-gray-100 dark:border-[#a0b8e3]/10 p-3 pr-0 font-medium opacity-70">
												{row.solution}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
						{solution && (
							<OcTitleSubtitle
								title={solution.title}
								description={solution.description}
							/>
						)}
						{principles && (
							<OcTitleSubtitle
								title={principles.title}
								description={principles.description}
							/>
						)}
						{uxDecisions && (
							<OcTitleSubtitle
								title={uxDecisions.title}
								description={uxDecisions.description}
							/>
						)}
						{outcome && (
							<OcTitleSubtitle
								title={outcome.title}
								description={outcome.description}
							/>
						)}
					</div>
				</ModalContent>
			)}
		</OcCard>
	);
};

export default OcResearch;
