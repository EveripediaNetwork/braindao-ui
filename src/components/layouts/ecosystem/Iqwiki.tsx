import InViewAnimateBottom from '@/components/transitions/InViewAnimateBottom';
import InViewAnimateLeft from '@/components/transitions/InViewAnimateLeft';
import InViewAnimateRight from '@/components/transitions/InViewAnimateRight';
import InViewAnimateSlideUp from '@/components/transitions/inViewSlideUp';
import Image from 'next/image';
import React from 'react';
import { TokenBrief } from '../Iqtoken';

const Iqwiki = () => {
	return (
		<div id='iq-wiki'>
			<TokenBrief
				title='IQ.wiki'
				description="IQ.wiki, the world's largest blockchain and cryptocurrency encyclopedia, is a Polygon-based platform, featuring thousands of pages, that uses IPFS for data storage and on-chain edits. IQ token stakers govern the platform, which offers a gasless experience for contributors and utilizes OpenAI's GPT-3 for article summarization."
				action='https://iq.wiki'
				buttonText='Explore IQ.wiki'
			/>
			<div className='border overflow-hidden rounded-xl mt-16 border-whiteAlpha-400 bg-gray700 grid md:grid-cols-3'>
				<div className='col-span-1 pl-3 pt-4 lg:pl-6 lg:pt-8'>
					<p className='max-w-[390px] text-sm xl:text-base text-whiteAlpha-800'>
						Explore a diverse range of wikis designed to guide you through the
						realms of cryptocurrency and blockchain.
					</p>
				</div>
				<div className='col-span-2'>
					<div className='h-[250px] sm:h-[300px] lg:h-[400px] 2xl:h-[450px]bg-gray700 w-full relative'>
						<Image
							src={'/images/iqwiki-homepage-dark.png'}
							alt=''
							fill
							sizes='(max-width:500px) 100vw, 50vw'
						/>
						<InViewAnimateSlideUp className='absolute top-1 left-0 w-full h-4/5 z-10 bg-gray700'>
							<div></div>
						</InViewAnimateSlideUp>
					</div>
				</div>
			</div>
			<InViewAnimateBottom>
				<div className='flex flex-col md:flex-row gap-2 sm:gap-5 mt-2 sm:mt-5'>
					<div className='md:flex-1 rounded-xl relative overflow-hidden bg-gray700 h-[330px] sm:h-[450px] md:h-[350px] lg:h-[470px] xl:h-[440px] 2xl:h-[528px]'>
						<Image
							src={'/images/iqwiki-widget-dark.png'}
							alt=''
							fill
							sizes='(max-width:480px) 100vw, 50vw'
						/>
					</div>
					<div className='md:flex-1 flex flex-col gap-2 lg:gap-0 justify-between'>
						<div className='w-full relative h-[300px] sm:h-[380px] md:h-[280px] lg:h-[380px] xl:h-[340px] 2xl:h-[418px] rounded-xl bg-gray700'>
							<Image
								src={'/images/iqwiki-rank-dark.png'}
								alt=''
								fill
								sizes='(max-width:480px) 100vw, 50vw'
							/>
						</div>
						<div className='p-3 lg:p-5 flex items-center bg-gray700 border border-whiteAlpha-400 justify-between gap-2 rounded-xl'>
							<span className='font-medium md:text-sm lg:text-lg xl:text-xl text-whiteAlpha-800'>
								Integrations:
							</span>
							<div className='flex gap-3 lg:gap-6 items-center xl:gap-8'>
								<div className='w-8 sm:w-10 h-8 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 bg-eth bg-contain bg-no-repeat' />
								<div className='w-8 sm:w-10 h-8 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 bg-graph bg-contain bg-no-repeat' />
								<div className='w-8 sm:w-10 h-8 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 bg-coingecko bg-contain bg-no-repeat' />
								<div className='2xl:w-32 2xl:h-12 md:w-20 md:h-8 w-24 h-10 lg:w-28 lg:h-10 bg-magic bg-contain bg-no-repeat' />
							</div>
						</div>
					</div>
				</div>
			</InViewAnimateBottom>
		</div>
	);
};

export default Iqwiki;
