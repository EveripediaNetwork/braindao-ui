import React from 'react';
import { BraindaoLogoDark } from '../svgs/BraindaoLogoDark';
import { RightArrowIcon } from '../icons/RightArrow';
import NavBarButton from './NavBarButton';
import { navLinks } from '@/data/Nav';
import { raleway } from '@/app/font';
import dynamic from 'next/dynamic';
import { CgSpinner } from 'react-icons/cg';

const ThemeSwitcher = dynamic(
	() => import('@/components/layouts/theme/ThemeSwitcher'),
	{
		ssr: false,
		loading: () => <CgSpinner size={36} className='animate-spin' />,
	}
);

const Navbar = () => {
	return (
		<div className='bg-black text-whiteAlpha-900'>
			<div className='max-w-[1536px] mx-auto'>
				<header className=' flex flex-col z-50 lg:-mx-7 lg:px-14 p-3'>
					<div className='flex justify-between items-center w-full'>
						<h1 className='flex gap-2 items-center text-lg font-medium'>
							<a href='/'>
								<BraindaoLogoDark />
							</a>
						</h1>
						<nav className='hidden md:flex gap-20 text-sm lg:text-base'>
							{navLinks.map((link) => (
								<a
									target='_blank'
									href={link.href}
									key={link.href}
									className=''
								>
									{link.title}
								</a>
							))}
						</nav>
						<div className='flex gap-1 items-center'>
							<a
								href='https://iq.braindao.org'
								target='_blank'
								className={`hidden md:block bg-pink-500 text-sm lg:text-base px-5 py-2 rounded-md  hover:bg-white hover:text-black transition-all ease-in-out duration-300 ${raleway.className}`}
							>
								Launch App
							</a>
							<ThemeSwitcher />
						</div>
						<NavBarButton />
					</div>
					<div id='mobile_nav_items' className='hidden md:hidden'>
						<ul className='flex flex-col divide-y-[1px] max-w-xl mx-auto divide-white/25 p-5 text-lg children:p-3'>
							{navLinks.map((link) => (
								<li key={link.href}>
									<a target='_blank' href={link.href}>
										{link.title}
									</a>
								</li>
							))}
							<li>
								<a
									href='https://iq.braindao.org'
									target='_blank'
									className='flex justify-between'
								>
									<span>IQ Dashboard</span>
									<RightArrowIcon className='fill-white' />
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
