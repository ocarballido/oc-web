import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const OcLogo = () => {
	return (
		<Link className="flex flex-col gap-1.5" href="/">
			<Image
				alt="Oscarballido logo"
				width={100}
				height={72}
				src="/static/appbar/ocarballido-logo.svg"
				style={{ width: '100px', height: 'auto' }}
			/>
		</Link>
	);
};

export default OcLogo;
