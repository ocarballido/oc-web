import Image from 'next/image';

const OcSpinner = () => {
	return (
		<div className="w-full h-full flex flex-1 items-center justify-center bg-gray-100/80">
			<Image
				src="/static/icons/oc-symbol.svg"
				alt="Oscarballido logo"
				width={60}
				height={37}
			/>
		</div>
	);
};

export default OcSpinner;
