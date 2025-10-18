import OcButtonIcon from '@/components/molecules/button-icon';
import OcMainMenu from '../main-menu';

type DrawerProps = {
	isMenuOpen: boolean;
	path: string;
	handleMobileMenu: () => void;
};

const OcMenuDrawer = ({ isMenuOpen, handleMobileMenu, path }: DrawerProps) => {
	return (
		<div
			className={`fixed w-full h-full bg-(--background-light) flex justify-center items-center bg-[url('/static/splash-01-vertical.webp')] dark:bg-[url('/static/splash-01-vertical-dark.webp')] bg-no-repeat bg-center bg-cover transition-all left-0 top-0 duration-300 z-50 ${
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
			<div className="p-8 shadow-2xl min-w-[220px] rounded-2xl bg-white dark:bg-(--background-light) flex flex-col gap-2">
				{/* <OcButtonLink label="Inicio" href="/" color="white" /> */}
				<OcMainMenu className="flex flex-col gap-2" path={path} />
			</div>
		</div>
	);
};

export default OcMenuDrawer;
