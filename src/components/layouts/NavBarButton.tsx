'use client';
import React from 'react';
import { RiMenuLine } from 'react-icons/ri';

const NavBarButton = () => {
	return (
		<button
			className='fill-white border border-whiteAlpha-400 p-1 rounded-[6px] lg:hidden'
			onClick={() => {
				const mobileNav = document.getElementById(
					'mobile_nav_items'
				) as HTMLDivElement;
				mobileNav.classList.toggle('hidden');
				mobileNav.classList.toggle('block');
			}}
		>
			<RiMenuLine size={24} />
		</button>
	);
};

export default NavBarButton;
