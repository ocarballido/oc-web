const OcTitleSubtitle = ({
	title,
	subtitle,
	description,
	list,
}: {
	title?: string;
	subtitle?: string;
	description?: string;
	list?: string[];
}) => {
	return (
		<div className="dark:text-[#a0b8e3]">
			{title && <h3 className="font-medium mb-2">{title}</h3>}
			{subtitle && (
				<h4 className="opacity-90 font-normal text-lg mb-2">
					{subtitle}
				</h4>
			)}
			{description && (
				<p className="opacity-70 font-normal">{description}</p>
			)}
			{list && (
				<ul className="list-disc pl-5">
					{list.map((item) => (
						<li key={item} className="opacity-70 font-normal">
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default OcTitleSubtitle;
