'use client';

import { Fragment, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import OcLogo from '@/components/atoms/logo';
import OcButtonIcon from '@/components/molecules/button-icon';
import OcMainMenu from '../main-menu';
import OcMenuDrawer from '../mnu-drawer';
import ThemeSwitch from '@/components/molecules/theme-swith';

const OcAppBar = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<boolean>(false);

	const badgeStyles = clsx(
		scrolled ? 'shadow-lg/5 dark:shadow-lg/20' : 'shadow-none'
	);

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

	useEffect(() => {
		const handleScroll = (): void => {
			setScrolled(window.scrollY > 16);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Fragment>
			<header
				className={`bg-white/90 dark:bg-(--background-light)/90 mx-2 md:mx-3 p-4 rounded-2xl flex justify-center sticky top-2 md:top-3 z-50 backdrop-blur-md items-center transition-shadow duration-300 ${badgeStyles}`}
			>
				<div className="flex items-center justify-center max-w-7xl flex-1 w-full">
					<OcLogo />
					<OcMainMenu
						className="hidden md:flex gap-2 ml-auto"
						path={pathname}
					/>
					<div className="flex items-center ml-auto md:ml-0">
						<OcButtonIcon
							icon="/static/icons/menu-primary.svg"
							color="white"
							className="flex md:hidden !bg-transparent"
							onClick={handleMobileMenu}
						/>
						<ThemeSwitch />
					</div>
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
