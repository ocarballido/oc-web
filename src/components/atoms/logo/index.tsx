import Image from 'next/image';
import Link from 'next/link';

const OcLogo = () => {
	return (
		<Link className="flex flex-col gap-1.5" href="/">
			<Image
				alt="Oscarballido logo"
				width={100}
				height={72}
				priority
				src="/static/appbar/ocarballido-logo-dark.svg"
				className="hidden dark:block opacity-60"
				style={{ width: '100px', height: 'auto' }}
			/>
			<Image
				alt="Oscarballido logo"
				width={100}
				height={72}
				priority
				src="/static/appbar/ocarballido-logo.svg"
				className="block dark:hidden"
				style={{ width: '100px', height: 'auto' }}
			/>
		</Link>
	);
};

export default OcLogo;
