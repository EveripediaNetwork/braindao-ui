import { space_grotesk } from '@/app/font';
import Link from 'next/link';
import React from 'react';
import { BrainIcon } from '../icons/Brain';
import { DiscordIcon } from '../icons/Discord';
import { TwitterIcon } from '../icons/Twitter';
import { HeroBackground } from '../svgs/HeroBackground';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

const Hero = () => {
	return (
		<div className='max-w-[1536px] mx-auto text-whiteAlpha-900'>
			<div className='flex flex-col items-center justify-center relative overflow-y-hidden h-[calc(85vh-65px)] md:h-[calc(100vh-65px)] px-[5vw] xl:px-5'>
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
				<div className='absolute bottom-5 right-5'>
					<div className='flex items-center mt-4 gap-3 children:bg-gradient-radial-at-tr children:rounded-md children:from-white/20 children:to-transparent children:p-2 children:border-white/20 children:border-[1px]'>
						<a
							href='https://twitter.com/Everipedia'
							target='_blank'
							rel='nofollow'
						>
							<TwitterIcon className='w-5 h-5 fill-white' />
						</a>
						<a href='https://iq.wiki/wiki/braindao' target='_blank'>
							<BrainIcon className='w-5 h-5' />
						</a>
						<a
							href='https://discord.gg/uvJ63SuxHQ'
							target='_blank'
							rel='nofollow'
						>
							<DiscordIcon className='w-5 h-5 fill-white' />
						</a>
					</div>
				</div>
				<HeroBackground className='absolute lg:mt-10 -z-10 w-[100%] h-[95vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[70rem] max-w-4xl' />
			</div>
		</div>
	);
};

export default Hero;
