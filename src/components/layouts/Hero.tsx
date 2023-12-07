import { space_grotesk } from '@/app/font';
import React from 'react';
import { RiArrowDownDoubleLine } from 'react-icons/ri';
import InViewAnimateBottom from '../transitions/InViewAnimateBottom';
import Navbar from './Navbar';

const Hero = () => {
	return (
		<div>
			<div className='relative text-whiteAlpha-900'>
				<video
					className='w-full h-full object-cover absolute'
					autoPlay
					muted
					loop
				>
					<source src='/hero.mp4' type='video/mp4' />
				</video>
				<div className='relative bg-black/40'>
					<div className='max-w-[1536px] mx-auto'>
						<Navbar />
						<div className='flex flex-col items-center w-full justify-center relative overflow-y-hidden h-[calc(40vh-65px)] md:h-[calc(60vh-65px)] lg:h-[calc(60vh-65px)]'>
							<div className='flex text-center md:text-left items-center flex-col justify-start mx-auto gap-1 sm:gap-5 w-full px-4 sm:px-0 max-w-6xl'>
								<InViewAnimateBottom>
									<h1
										className={`text-2xl sm:text-4xl md:text-5xl animate-fade-in xl:text-[60px] 2xl:text-[70px] !leading-tight text-center font-bold ${space_grotesk.className}`}
									>
										Building a more intelligent future through the IQ token.
									</h1>
								</InViewAnimateBottom>
								<InViewAnimateBottom>
									<p className='text-sm sm:text-lg max-w-[513px] lg:max-w-2xl text-center mx-auto lg:text-xl'>
										Join our mission to expand the scope of human knowledge with
										BrainDAO, the governing DAO powering the IQ ecosystem.
									</p>
								</InViewAnimateBottom>
								<a href={'#iq-token'} className='mt-4 mx-auto animate-bounce'>
									<RiArrowDownDoubleLine size={24} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
