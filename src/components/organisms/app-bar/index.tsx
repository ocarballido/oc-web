'use client';

import { Fragment, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import OcLogo from '@/components/atoms/logo';
import OcButtonIcon from '@/components/molecules/button-icon';
import OcMainMenu from '../main-menu';
import OcMenuDrawer from '../mnu-drawer';

const OcAppBar = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleMobileMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			if (isMenuOpen) setIsMenuOpen(false);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [isMenuOpen]);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	return (
		<Fragment>
			<header className="bg-white/90 mx-2 md:mx-3 p-4 rounded-2xl flex justify-center sticky top-2 md:top-3 shadow-xs z-50 backdrop-blur-md">
				<div className="flex items-center justify-between max-w-7xl w-full">
					<OcLogo />
					<OcMainMenu
						className="hidden md:flex gap-2"
						path={pathname}
					/>
					<OcButtonIcon
						icon="/static/icons/menu-primary.svg"
						color="white"
						className="flex md:hidden"
						onClick={handleMobileMenu}
					/>
				</div>
			</header>
			<OcMenuDrawer
				isMenuOpen={isMenuOpen}
				handleMobileMenu={handleMobileMenu}
				path={pathname}
			/>
		</Fragment>
	);
};

export default OcAppBar;
