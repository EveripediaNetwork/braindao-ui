import InViewAnimateBottom from '@/components/transitions/InViewAnimateBottom';
import InViewAnimateFadeIn from '@/components/transitions/InViewAnimateFadeIn';
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
	delay,
}: {
	title: string;
	description: string;
	icon: JSX.Element;
	delay?: number;
}) => {
	return (
		<InViewAnimateBottom
			// delay={delay}
			className='flex flex-1 flex-col gap-4 items-start'
		>
			<div className='w-12 h-12 rounded-full flex justify-center text-xl text-brand-800 items-center border-8 border-brand-200 bg-brand-400'>
				{icon}
			</div>
			<div className=''>
				<h4 className='text-whiteAlpha-900 font-semibold text-lg md:text-xl mb-1'>
					{title}
				</h4>
				<p className='text-sm lg:text-base'>{description}</p>
			</div>
		</InViewAnimateBottom>
	);
};

const Iqgpt = () => {
	return (
		<div
			id='iq-gpt'
			className='max-w-[1536px] px-4 sm:px-10 xl:px-[120px] mx-auto flex flex-col gap-10 xl:gap-16 pt-[48px] sm:pt-[80px] 2xl:pt-24 relative'
		>
			<TokenBrief
				title='IQ GPT'
				description={`IQ GPT is an extension of IQ.wiki's decentralized framework, integrating crypto-focused AI models that utilize diverse data sources to bolster capabilities, offering insights into intricate terms, live market trends, and breaking news.`}
				description2={`IQ GPT is powered by the IQ token, enabling IQ holders to participate in governance and get access to additional features.`}
				action='https://iqgpt.com'
				buttonText='Explore IQ GPT'
			/>
			<div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-2 2xl:gap-12 py-2'>
				<FeatureList
					icon={<RiDatabaseLine />}
					title='Access to real-time data'
					description='Access to real-time price data, trading volumes, and market capitalization.'
				/>
				<FeatureList
					icon={<RiQuestionAnswerLine />}
					title='AI-generated answers'
					description='Receive AI-generated answers to all your crypto questions.'
					delay={0.8}
				/>
				<FeatureList
					icon={<RiNewspaperLine />}
					title='Update on news and trends'
					description='Equip yourself with AI-powered market analysis using real-time market data, news, and trends.'
					delay={1.0}
				/>
				<FeatureList
					icon={<RiPlug2Line />}
					title='Plugins'
					description='Access various plugins to select data sources for your inquiries.'
					delay={1.2}
				/>
			</div>
			<InViewAnimateBottom>
				<div className='w-full relative h-[280px] sm:h-[600px] md:h-[650px] lg:h-[850px] xl:h-[1000px] 2xl:h-[1117px]'>
					<Image
						src={'/images/iq-gpt-mockup-dark-2.png'}
						alt=''
						fill
						sizes='100vw'
					/>
				</div>
			</InViewAnimateBottom>
			<div className='h-[174px] w-full absolute bg-gradient-linear bg-cover left-0 -bottom-2 sm:bottom-8'></div>
		</div>
	);
};

export default Iqgpt;
