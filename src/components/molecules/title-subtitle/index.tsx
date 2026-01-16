const OcTitleSubtitle = ({
	title,
	subtitle,
	description,
}: {
	title?: string;
	subtitle?: string;
	description?: string;
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
		</div>
	);
};

export default OcTitleSubtitle;
