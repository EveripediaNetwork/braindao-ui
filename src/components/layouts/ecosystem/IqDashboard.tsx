'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { StatsPointers, TokenBrief } from '../Iqtoken';

const IqDashboard = () => {
	const { theme } = useTheme();
	const [appTheme, setAppTheme] = useState('');

	useEffect(() => {
		setAppTheme(theme || '');
	}, [theme]);
	let imageUrl;
	if (appTheme === 'light') {
		imageUrl = '/images/iq-dashboard-mockup.png';
	}
	if (appTheme === 'dark') {
		imageUrl = '/images/iq-dashboard-mockup-dark.png';
	}

	return (
		<div className='max-w-[1536px] mx-auto flex flex-col gap-10 xl:gap-16 py-[48px] sm:py-[80px] xl:py-24'>
			<div className='px-10 xl:px-[120px]'>
				<TokenBrief
					title='IQ Dashboard'
					description='Utilizing the IQ Dashboard, you have the ability to stake your tokens, facilitate cross-blockchain bridging, participate in governance proposal voting, and engage in numerous other activities within the blockchain ecosystem.'
					action='https://iq.braindao.org/dashboard'
					buttonText='Explore IQ Dashboard'
				/>
				<div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-6 py-3 mt-16 w-full'>
					<StatsPointers
						title='Swap'
						headerSize='text-xl'
						content='Get involved in the IQ Ecosystem and swap the IQ token easily across different exchange platforms.'
						className=' gap-4'
					/>
					<StatsPointers
						title='Bridge'
						headerSize='text-xl'
						content='Transfer IQ from EOS to ETH and vice versa using the IQ bridge
'
						className='gap-4'
					/>
					<StatsPointers
						title='Bridge'
						headerSize='text-xl'
						content='Lock IQ token over a period of time and earn IQ token rewards.
'
						className='gap-4'
					/>
					<StatsPointers
						title='Voting'
						headerSize='text-xl'
						content='Stakers can vote on all governance proposals and create their own proposals.'
						className='gap-4'
					/>
				</div>
			</div>
			<div className='w-full relative h-[220px] sm:h-[500px] md:h-[600px] xl:h-[887px]'>
				{imageUrl && <Image src={imageUrl} alt='' fill sizes='100vw' />}
			</div>
		</div>
	);
};

export default IqDashboard;
