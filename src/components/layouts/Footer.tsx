import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<div className='pt-16 pb-12 bg-brand-200'>
			<div className='p-8 flex flex-col items-center gap-10 border-b border-blackAlpha-50'>
				<Image src={'/svgs/brainie.svg'} alt='' width={40} height={34} />
				<div className='flex flex-col items-center gap-4'>
					<h2 className='text-brand-800 text-center'>
						Stay up to date every month with our newsletter
					</h2>
					<p className='text-gray800 text-center'>
						Never miss any of the most popular and trending articles on IQ.wiki
						when you sign up to our email newsletter.
					</p>
					<a
						href={'https://www.getdrip.com/forms/505929689/submissions/new'}
						target='_blank'
						className='flex justify-center w-[210px] text-white/90 bg-brand-500 py-3 rounded-md hover:bg-brand-700 transition-all ease-in-out duration-300'
					>
						Subscribe
					</a>
				</div>
			</div>
			<div className='pt-8 px-8 text-center'>
				<small className='pt-5 text-gray800'>
					©️2023 Powered by IQ and BrainDAO. All Rights Reserved.
				</small>
			</div>
		</div>
	);
};

export default Footer;
