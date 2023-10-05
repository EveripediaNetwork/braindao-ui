'use client';

import InViewAnimateBottom from '@/components/transitions/InViewAnimateBottom';
import InViewAnimateLeft from '@/components/transitions/InViewAnimateLeft';
import InViewAnimateRight from '@/components/transitions/InViewAnimateRight';
import InViewAnimateGrow from '@/components/transitions/InViewAnimationGrow';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
		<InViewAnimateRight
			delay={delay}
			className='flex flex-1 flex-col gap-4 items-start'
		>
			<div className='w-12 h-12 rounded-full flex justify-center text-xl text-brand-500 dark:text-brand-800 items-center border-8 border-brand-50 dark:border-brand-200 bg-brand-100 dark:bg-brand-400'>
				{icon}
			</div>
			<div className=''>
				<h4 className='text-gray800 dark:text-whiteAlpha-900 font-semibold text-lg md:text-xl mb-1'>
					{title}
				</h4>
				<p className='text-sm lg:text-base'>{description}</p>
			</div>
		</InViewAnimateRight>
	);
};

const Iqgpt = () => {
	const { theme } = useTheme();
	const [appTheme, setAppTheme] = useState('');

	useEffect(() => {
		setAppTheme(theme || '');
	}, [theme]);
	let imageUrl;
	if (appTheme === 'light') {
		imageUrl = '/images/iqgpt-main.png';
	}
	if (appTheme === 'dark') {
		imageUrl = '/images/iqgpt-main-dark.png';
	}
	return (
		<div
			id='iq-gpt'
			className='max-w-[1536px] px-4 sm:px-10 xl:px-[120px] mx-auto flex flex-col gap-10 xl:gap-16 py-[48px] sm:py-[80px] xl:py-24 relative'
		>
			<TokenBrief
				title='IQ GPT'
				description="IQ GPT is an extension of IQ wiki's decentralized framework, integrating crypto-focused AI models that utilize diverse data sources to bolster capabilities, offering insights into intricate terms, live market trends, and breaking news.IQ GPT is powered by the IQ token, enabling IQ holders to participate in governance and get access to additional features."
				action='https://iqgpt.com'
				buttonText='Explore IQ GPT'
			/>
			<div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-2 2xl:gap-12 py-2'>
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
					delay={0.3}
				/>
				<FeatureList
					icon={<RiNewspaperLine />}
					title='Update on news and trends'
					description='Equip yourself with AI powered market analysis from real time market data, news and trends.'
					delay={0.5}
				/>
				<FeatureList
					icon={<RiPlug2Line />}
					title='Pluggins'
					description='Access to different plugins to select data sources for your enquires.'
					delay={0.7}
				/>
			</div>
			<div className='px-11'>
				<div className='bg-gray100 dark:bg-gray700 px-3 border border-gray200 dark:border-whiteAlpha-400 sm:px-8 xl:px-12 pt-3 pb-[35px] sm:pt-6 sm:pb-[70px] xl:pt-10 xl:pb-[100px] w-full rounded-lg sm:rounded-[32px] relative'>
					<div className='w-full relative h-[280px] sm:h-[600px] md:h-[650px] lg:h-[850px] xl:h-[900px] 2xl:h-[1117px]'>
						{imageUrl && <Image src={imageUrl} alt='' fill sizes='100vw' />}
						<InViewAnimateGrow
							delay={3.0}
							className='dark:bg-iqgpt-widget-3-dark bg-iqgpt-widget-3 w-[81px] h-[134px] sm:w-[250px] lg:w-[300px] 2xl:w-[350px] sm:h-[380px] lg:h-[430px] 2xl:h-[480px] bg-cover bg-no-repeat absolute -bottom-8 sm:-bottom-[110px] 2xl:-bottom-[100px] right-1'
						>
							<div></div>
						</InViewAnimateGrow>
					</div>
					<InViewAnimateGrow className='bg-iqgpt-widget dark:bg-iqgpt-widget-dark w-[100px] h-[200px] sm:w-[250px] lg:w-[320px] xl:w-[360px] 2xl:w-[500px] sm:h-[450px] lg:h-[580px] xl:h-[620px] 2xl:h-[820px] bg-contain sm:bg-cover bg-no-repeat absolute -bottom-0 -left-4 sm:-left-14 xl:-left-32 2xl:-left-40'>
						<div></div>
					</InViewAnimateGrow>
					<InViewAnimateGrow
						delay={2.0}
						className='bg-iqgpt-widget-2 dark:bg-iqgpt-widget-2-dark w-[85px] h-[94px] sm:w-[250px] lg:w-[300px] 2xl:w-[360px] sm:h-[280px] lg:h-[320px] 2xl:h-[380px] bg-cover bg-no-repeat absolute top-10 sm:top-20 lg:top-40 -right-4 sm:-right-8 xl:-right-20'
					>
						<div></div>
					</InViewAnimateGrow>
				</div>
			</div>
			<div className='h-[174px] w-full absolute bg-gradient-linear-light dark:bg-gradient-linear bg-cover left-0 -bottom-2 sm:bottom-8'></div>
		</div>
	);
};

export default Iqgpt;
