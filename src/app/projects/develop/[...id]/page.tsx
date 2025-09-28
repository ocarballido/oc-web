type PageProps = {
	params: Promise<{ id: string[] }>;
};

const SingleProject = async ({ params }: PageProps) => {
	const { id } = await params;

	return (
		<div>
			<p>{id}</p>
		</div>
	);
};

export default SingleProject;
