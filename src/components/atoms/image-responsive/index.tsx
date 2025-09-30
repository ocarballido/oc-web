import Image from 'next/image';

type ImageProps = { imageUrl: string; alt: string };

const OcImageResponsive = ({ imageUrl, alt = 'Image' }: ImageProps) => {
	return (
		<Image
			src={imageUrl}
			alt={alt}
			sizes="100vw"
			style={{
				width: '100%',
				height: 'auto',
			}}
			width={500}
			height={300}
		/>
	);
};

export default OcImageResponsive;
