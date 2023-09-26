'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import {
	RiDatabaseLine,
	RiNewspaperLine,
	RiPlug2Line,
	RiQuestionAnswerLine,
} from 'react-icons/ri';
import { TokenBrief } from '../Iqtoken';

export const FeatureList = ({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: JSX.Element;
}) => {
	return (
		<div className='flex flex-col gap-4 items-start'>
			<div className='w-12 h-12 rounded-full flex justify-center text-xl text-brand-500 items-center border-8 border-brand-50 dark:border-brand-200 bg-brand-100 dark:bg-brand-400'>
				{icon}
			</div>
			<div className=''>
				<h4 className='text-gray800 dark:text-whiteAlpha-900 font-semibold text-lg mb-1'>
					{title}
				</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

const Iqgpt = () => {
	const { theme } = useTheme();
	return (
		<div className='max-w-[1536px] px-[120px] mx-auto flex flex-col gap-16 py-24'>
			<TokenBrief
				title='IQ GPT'
				description="IQ GPT is an extension of IQ wiki's decentralized framework, integrating crypto-focused AI models that utilize diverse data sources to bolster capabilities, offering insights into intricate terms, live market trends, and breaking news.IQ GPT is powered by the IQ token, enabling IQ holders to participate in governance and get access to additional features."
				action='https://iq.wiki'
				buttonText='Explore IQ GPT'
			/>
			<div className='flex gap-12 py-2'>
				<FeatureList
					icon={<RiDatabaseLine />}
					title='Access to real-time data'
					description='Access to real-time price data, trading volumes, market
							capitalization.'
				/>
				<FeatureList
					icon={<RiQuestionAnswerLine />}
					title='AI generated answers'
					description='Get AI generated answers to all your crypto questions.'
				/>
				<FeatureList
					icon={<RiNewspaperLine />}
					title='Update on news and trends'
					description='Equip yourself with AI powered market analysis from real time market data, news and trends.'
				/>
				<FeatureList
					icon={<RiPlug2Line />}
					title='Pluggins'
					description='Access to different plugins to select data sources for your enquires.'
				/>
			</div>
			<div className='relative w-full h-[1087px]'>
				<Image
					src={
						theme === 'dark' ? '/iq-gpt-mockup-dark.png' : '/iq-gpt-mockup.png'
					}
					alt='IQ.wiki mockup'
					fill
				/>
			</div>
		</div>
	);
};

export default Iqgpt;
