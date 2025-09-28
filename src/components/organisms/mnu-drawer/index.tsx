import OcButtonIcon from '@/components/molecules/button-icon';
import OcButtonLink from '@/components/molecules/button-link';
import OcMainMenu from '../main-menu';

type DrawerProps = {
	isMenuOpen: boolean;
	path: string;
	handleMobileMenu: () => void;
};

const OcMenuDrawer = ({ isMenuOpen, handleMobileMenu, path }: DrawerProps) => {
	return (
		<div
			className={`fixed w-full h-full bg-white flex justify-center items-center bg-[url('/static/appbar/mobile-menu-bg.webp')] bg-no-repeat bg-center transition-all left-0 top-0 duration-300 z-50 ${
				isMenuOpen ? 'ranslate-x-0' : '-translate-x-full'
			}`}
			onClick={handleMobileMenu}
		>
			<div className="absolute right-[28px] top-[57px] flex">
				<OcButtonIcon
					icon="/static/icons/close-white.svg"
					color="primary"
					className="flex"
					onClick={handleMobileMenu}
				/>
			</div>
			<div className="p-8 shadow-2xl min-w-[220px] rounded-2xl bg-white flex flex-col gap-2">
				<OcButtonLink label="Inicio" href="/" color="white" />
				<OcMainMenu className="flex flex-col gap-2" path={path} />
			</div>
		</div>
	);
};

export default OcMenuDrawer;
