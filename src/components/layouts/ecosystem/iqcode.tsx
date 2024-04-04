'use client';

import InViewAnimateBottom from '@/components/transitions/InViewAnimateBottom';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TokenBrief } from '../Iqtoken';

export const FeatureList = ({
  title,
  description,
  icon,
  delay
}: {
  title: string;
  description: string;
  icon: JSX.Element;
  delay?: number;
}) => {
  return (
    <InViewAnimateBottom className='flex flex-1 flex-col gap-4 items-start'>
      <div className='w-12 h-12 rounded-full flex justify-center text-xl dark:text-brand-800 text-brand-500 items-center border-8 dark:border-brand-200 border-brand-50 dark:bg-brand-400 bg-brand-100'>
        {icon}
      </div>
      <div className=''>
        <h4 className='dark:text-whiteAlpha-900 text-gray800 font-semibold text-lg md:text-xl mb-1'>
          {title}
        </h4>
        <p className='text-sm lg:text-base'>{description}</p>
      </div>
    </InViewAnimateBottom>
  );
};

const Iqcode = () => {
  const { theme } = useTheme();
  const [appTheme, setAppTheme] = useState('');

  useEffect(() => {
    setAppTheme(theme ?? '');
  }, [theme]);

  let imageUrl: string | undefined;
  if (appTheme === 'light') {
    imageUrl = '/images/iq-code-light.png';
  }
  if (appTheme === 'dark') {
    imageUrl = '/images/iq-code-dark.png';
  }

  return (
    <div
      id='iq-code'
      className='max-w-[1536px] px-4 sm:px-10 xl:px-[120px] mx-auto flex flex-col gap-10 xl:gap-16 pt-[48px] sm:pt-[80px] 2xl:pt-24 relative'
    >
      <TokenBrief
        title='IQ code'
        description={
          'IQ code is an upcoming smart contract coding tool with AI features specifically tailored for smart contracts. The product will function as a Solidity advisor, aiming to improve coding efficiency and code quality, to assist developers. '
        }
        action='https://iqcode.ai/demo'
        buttonText='See Demo'
      />

      <InViewAnimateBottom>
        <div className='w-full relative h-[320px] min-[500px]:h-[450px] sm:h-[600px] md:h-[650px] lg:h-[750px] xl:h-[1000px]'>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt='IQ Code Illustration'
              fill
              sizes='100vw'
              className='object-cover md:object-contain'
            />
          )}
        </div>
      </InViewAnimateBottom>
      <div className='h-[174px] w-full absolute dark:bg-gradient-linear bg-gradient-linear-light bg-cover left-0 -bottom-2 sm:bottom-0' />
    </div>
  );
};

export default Iqcode;
