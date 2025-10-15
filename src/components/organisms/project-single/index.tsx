const OcProjectSingle = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className="px-3 flex flex-col flex-1">
			<div className="py-6 max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-4 items-start">
				{children}
			</div>
		</main>
	);
};

export default OcProjectSingle;
