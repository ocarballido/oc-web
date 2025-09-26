import Image from 'next/image';
import Link from 'next/link';

const OcLogo = () => {
	return (
		<Link className="flex flex-col gap-1.5" href="/">
			<Image
				alt="Oscarballido logo"
				width={100}
				height={72}
				src="/static/appbar/ocarballido-logo.svg"
			/>
			<p className="text-sm font-medium opacity-80">UI Developer</p>
		</Link>
	);
};

export default OcLogo;
