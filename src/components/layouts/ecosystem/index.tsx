import Image from 'next/image';
import React from 'react';
import { TokenBrief } from '../Iqtoken';
import IqDashboard from './IqDashboard';
import Iqgpt from './Iqgpt';
import Iqwiki from './Iqwiki';

const Ecosystem = () => {
	return (
		<div className='bg-white text-gray600 dark:bg-gray800 dark:text-whiteAlpha-900'>
			<div className='max-w-[1536px] px-[120px] mx-auto py-24'>
				<h2 className='text-center text-5xl text-gray800 dark:text-whiteAlpha-900 font-semibold mb-14'>
					The IQ Ecosystem
				</h2>
				<Iqwiki />
			</div>
			<Iqgpt />
			<IqDashboard />
		</div>
	);
};

export default Ecosystem;
