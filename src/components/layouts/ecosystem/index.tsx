import React from 'react';
import IqDashboard from './IqDashboard';
import Iqgpt from './Iqgpt';
import Iqwiki from './Iqwiki';

const Ecosystem = () => {
	return (
		<div className='bg-white text-gray600 dark:bg-gray800 dark:text-whiteAlpha-900'>
			<div className='max-w-[1536px] px-4 md:px-10 xl:px-[120px] mx-auto py-[80px] xl:py-24'>
				<h2 className='text-center text-4xl xl:text-5xl text-gray800 dark:text-whiteAlpha-900 font-semibold mb-10 xl:mb-14'>
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
