'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import { TokenBrief } from '../Iqtoken';

const Iqwiki = () => {
	const { theme } = useTheme();
	return (
		<>
			<TokenBrief
				title='IQ Wiki'
				description="IQ.wiki, the world's largest blockchain and cryptocurrency encyclopedia, is a Polygon-based platform, featuring thousands of pages, that uses IPFS for data storage and on-chain edits. IQ token stakers govern the platform, which offers a gasless experience for contributors and utilizes OpenAI's GPT-3 for article summarization."
				action='https://iq.wiki'
				buttonText='Explore IQ wiki'
			/>
			<div className='border overflow-hidden rounded-xl mt-16 border-gray200 dark:border-whiteAlpha-400 bg-white dark:bg-gray700 grid grid-cols-3'>
				<div className='col-span-1 pl-6 pt-8'>
					<p className='max-w-[390px] dark:text-whiteAlpha-800'>
						Explore a diverse range of wikis designed to guide you through the
						realms of cryptocurrency and blockchain.
					</p>
				</div>
				<div className='col-span-2 h-[450px] bg-wiki-homepage bg-no-repeat dark:bg-wiki-homepage-dark bg-cover' />
			</div>
			<div className='flex gap-5 mt-5'>
				<div className='flex-1 bg-wiki-image bg-cover bg-center dark:bg-wiki-widget-dark h-[528px]' />
				<div className='flex-1 flex flex-col justify-between'>
					<div className='w-full h-[418px] bg-center bg-wiki-rank bg-cover dark:bg-wiki-rank-dark' />
					<div className='p-5 flex items-center dark:bg-gray700 border border-gray200 dark:border-whiteAlpha-400 justify-between rounded-xl'>
						<span className='text-xl dark:text-whiteAlpha-800'>
							Integrations:
						</span>
						<div className='flex gap-8'>
							<div className='w-12 h-12 bg-eth bg-contain bg-no-repeat' />
							<div className='w-12 h-12 bg-graph bg-contain bg-no-repeat' />
							<div className='w-12 h-12 bg-coingecko bg-contain bg-no-repeat' />
							<div className='w-32 h-12 bg-magic-white dark:bg-magic bg-contain bg-no-repeat' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Iqwiki;
