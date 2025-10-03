import Image from 'next/image';

const OcSpinner = () => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/80">
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
