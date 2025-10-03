import Image from 'next/image';

type ImageProps = { imageUrl: string; alt: string };

const OcImageResponsive = ({ imageUrl, alt = 'Image' }: ImageProps) => {
	const graySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#e6effd" /></svg>`;
	const grayDataUrl =
		'data:image/svg+xml;base64,' +
		(typeof window !== 'undefined'
			? btoa(unescape(encodeURIComponent(graySvg)))
			: Buffer.from(graySvg).toString('base64'));

	return (
		<Image
			src={imageUrl}
			alt={alt}
			sizes="100vw"
			style={{
				width: '100%',
				height: 'auto',
			}}
			placeholder="blur"
			blurDataURL={grayDataUrl}
			width={500}
			height={300}
		/>
	);
};

export default OcImageResponsive;
