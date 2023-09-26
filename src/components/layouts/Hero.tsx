import { space_grotesk } from '@/app/font';
import React from 'react';
import { HeroBackground } from '../svgs/HeroBackground';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

const Hero = () => {
	return (
		<div className='bg-hero-image bg-cover text-whiteAlpha-900'>
			<div className='max-w-[1536px] mx-auto'>
				<div className='flex flex-col items-center w-full justify-center relative overflow-y-hidden h-[calc(85vh-65px)] md:h-[calc(100vh-65px)]'>
					<div className='flex text-center md:text-left items-center md:items-start flex-col justify-start mx-auto gap-5 w-full  max-w-6xl mr-auto -translate-y-10'>
						<h1
							className={`xl:text-[70px] !leading-tight text-center font-bold ${space_grotesk.className}`}
						>
							Building a more intelligent future through the IQ token.
						</h1>
						<p className='md:text-lg max-w-2xl text-center mx-auto lg:text-xl'>
							Join our mission to expand the scope of human knowledge with
							BrainDAO, the governing DAO powering the IQ ecosystem.
						</p>
						<a href={'#iq-token'} className='mt-4 mx-auto'>
							<RiArrowDownDoubleLine size={24} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
