import React from 'react';
import { BraindaoLogoDark } from '../svgs/BraindaoLogoDark';
import NavBarButton from './NavBarButton';
import { navLinks } from '@/data/Nav';
import { raleway } from '@/app/font';
import { RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
	return (
		<div className='bg-transparent text-whiteAlpha-900'>
			<div className='max-w-[1536px] mx-auto'>
				<header className=' flex flex-col z-50 lg:-mx-7 lg:px-14 p-3'>
					<div className='flex justify-between items-center w-full'>
						<h1 className='flex gap-2 items-center text-lg font-medium'>
							<a href='/'>
								<BraindaoLogoDark />
							</a>
						</h1>
						<nav className='hidden lg:flex gap-10 xl:gap-20 text-sm lg:text-base'>
							{navLinks.map((link) => (
								<a
									target={link.target}
									href={link.href}
									key={link.href}
									className=''
								>
									{link.title}
								</a>
							))}
						</nav>
						<div className='flex gap-2 items-center'>
							<a
								href='https://iq.braindao.org'
								target='_blank'
								className={`hidden md:flex flex-1 justify-center bg-brand-500 dark:bg-brand-700 hover:bg-brand-700 md:w-[184px] text-sm lg:text-base px-5 py-2 rounded-md transition-all ease-in-out duration-300 ${raleway.className}`}
							>
								Launch Dashboard
							</a>
							<NavBarButton />
						</div>
					</div>
					<div
						id='mobile_nav_items'
						className='hidden absolute left-0 bg-white w-full top-0 h-[60vh] z-10'
					>
						<ul className='flex flex-col divide-y-[1px] text-gray600 w-full divide-gray200'>
							<div className='flex justify-end sm:px-3 py-2'>
								<button
									className='text-gray800 px-5 py-2'
									onClick={() => {
										const mobileNav = document.getElementById(
											'mobile_nav_items'
										) as HTMLDivElement;
										mobileNav.classList.toggle('hidden');
									}}
								>
									<RiCloseFill size={24} />
								</button>
							</div>
							<div className='flex flex-col text-sm sm:text-base px-5'>
								{navLinks.map((link) => (
									<li key={link.href} className='sm:px-3 py-4'>
										<a target={link.target} href={link.href}>
											{link.title}
										</a>
									</li>
								))}
							</div>
							<li className='pt-3 px-5 md:hidden'>
								<a
									href='https://iq.braindao.org'
									target='_blank'
									className={`flex flex-1 justify-center text-whiteAlpha-900 bg-brand-500 dark:bg-brand-700 hover:bg-brand-700 md:w-[184px] text-sm lg:text-base px-5 py-2 rounded-md transition-all ease-in-out duration-300 ${raleway.className}`}
								>
									<span>Launch Dashboard</span>
								</a>
							</li>
						</ul>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Navbar;
