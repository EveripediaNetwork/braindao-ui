'use client';

import { useErc20 } from '@/hooks/useEr20';
import { useLockOverview } from '@/hooks/useLockOverview';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import InViewAnimateBottom from '../transitions/InViewAnimateBottom';
import InViewAnimateSlideDown from '../transitions/InViewSlideDown';
import InViewAnimateSlideUp from '../transitions/inViewSlideUp';
import { fetchPriceChange, numFormatter } from '../utils/stats-utils';

export const StatsPointers = ({
  title,
  content,
  className,
  headerSize
}: {
  title: string;
  content: string;
  className?: string;
  headerSize?: string;
}) => {
  return (
    <InViewAnimateBottom className='flex-1'>
      <div className='border-l-2 border-pink-500 pl-4'>
        <div className={`flex flex-col ${className}`}>
          <h4
            className={`dark:text-whiteAlpha-900 text-gray800 font-semibold ${
              headerSize ? headerSize : 'text-2xl xl:text-3xl'
            }`}
          >
            {title}
          </h4>
          <span className={headerSize ? '' : 'xl:text-lg'}>{content}</span>
        </div>
      </div>
    </InViewAnimateBottom>
  );
};

export const TokenBrief = ({
  title,
  description,
  description2,
  buttonText,
  action
}: {
  title: string;
  description: string;
  description2?: string;
  buttonText: string;
  action: string;
}) => {
  return (
    <div className='flex items-start flex-col xl:flex-row xl:gap-[186px]'>
      <InViewAnimateBottom>
        <h3 className='font-semibold dark:text-whiteAlpha-900 text-gray800 text-2xl sm:text-3xl xl:text-4xl'>
          {title}
        </h3>
      </InViewAnimateBottom>
      <div className='flex-1 mt-2 xl:mt-0'>
        <InViewAnimateBottom>
          <p className='xl:text-lg dark:text-whiteAlpha-800 text-gray600'>
            {description}
          </p>
          {description2 && (
            <p className='xl:text-lg dark:text-whiteAlpha-800 text-gray600'>
              {description2}
            </p>
          )}
        </InViewAnimateBottom>
        <InViewAnimateBottom>
          <a
            href={action}
            target='_blank'
            className='flex justify-center w-[200px] xl:w-[256px] text-white/90 dark:bg-brand-800 bg-brand-500 py-3 xl:py-4 mt-4 xl:mt-8 rounded-md hover:bg-brand-700 transition-all ease-in-out duration-300'
            rel='noreferrer'
          >
            {buttonText}
          </a>
        </InViewAnimateBottom>
      </div>
    </div>
  );
};

const Iqtoken = () => {
  const { theme } = useTheme();
  const [appTheme, setAppTheme] = useState('');
  const { tvl } = useErc20();
  const { totalHiiqSupply } = useLockOverview();
  const isFetchedData = useRef(false);
  const [marketData, setMarketData] = useState<{ [x: string]: any } | null>(
    null
  );

  useEffect(() => {
    setAppTheme(theme || '');
    if (!isFetchedData.current) {
      isFetchedData.current = true;
      const res2 = fetchPriceChange();

      Promise.resolve(res2).then((data) => {
        setMarketData(data);
      });
    }
  }, [theme]);
  let imageUrl;
  if (appTheme === 'light') {
    imageUrl = '/images/aboutus.png';
  }
  if (appTheme === 'dark') {
    imageUrl = '/images/aboutus-dark.png';
  }

  return (
    <div
      id='iq-token'
      className='dark:bg-gray800 bg-[#F9FAFB] dark:text-whiteAlpha-900 text-gray600'
    >
      <div className='max-w-[1536px] px-4 md:px-10 xl:px-24 2xl:px-[120px] mx-auto py-[48px] sm:py-[80px] xl:py-24'>
        <TokenBrief
          title='The IQ Token'
          description="The IQ token is a cryptocurrency that powers a knowledge ecosystem
							that includes the world's largest cryptocurrency and
							blockchain encyclopedia, IQ.wiki. IQ token holders can stake their
							tokens to participate in governance and get access to additional
							features. They can vote on governance decisions and govern
							BrainDAO, the native DAO and treasury of the IQ ecosystem."
          action='https://iq.wiki'
          buttonText='Learn more'
        />
        <div className='flex flex-col-reverse lg:flex-row items-start mt-16'>
          <div className='lg:flex-1 w-full overflow-hidden'>
            <InViewAnimateBottom className='w-full md:w-[80%] xl:w-full h-[300px] sm:h-[450px] lg:h-[380px] xl:h-[500px] relative'>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt=''
                  fill
                  sizes='(max-width:960px) 80vw, 50vw'
                  className='object-contain'
                />
              )}
            </InViewAnimateBottom>
          </div>
          <div className='flex-1'>
            <InViewAnimateBottom>
              <h3 className='dark:text-whiteAlpha-900 text-gray800 text-3xl xl:text-4xl font-semibold'>
                HiIQ
              </h3>
            </InViewAnimateBottom>
            <InViewAnimateBottom>
              <p className='text-sm xl:text-lg dark:text-whiteAlpha-800 text-gray600 mt-4'>
                HiIQ, launched to incentivize long-term engagement and
                governance participation, allows users to lock up IQ tokens,
                increasing HiIQ balance for voting power and earning IQ token
                rewards, with 3 million tokens generated daily.
              </p>
            </InViewAnimateBottom>
            <div className='pt-8'>
              <div className='flex flex-col gap-10 xl:gap-12'>
                <div className='flex justify-between'>
                  <StatsPointers
                    title={`${numFormatter(
                      marketData?.circulatingSupply || ''
                    )} IQ`}
                    content='Circulating supply'
                    className='h-[80px] xl:h-[95px] justify-between'
                  />
                  <StatsPointers
                    title={`$${numFormatter(marketData?.marketCap || '')}`}
                    content='Market cap'
                    className='h-[80px] xl:h-[95px] justify-between'
                  />
                </div>
                <div className='flex justify-between'>
                  <StatsPointers
                    title={`$${numFormatter(tvl)}+`}
                    content='Total HiIQ'
                    className='h-[80px] xl:h-[95px] justify-between'
                  />
                  <StatsPointers
                    title={`${numFormatter(totalHiiqSupply)} IQ+`}
                    content='Total volume locked'
                    className='h-[80px] xl:h-[95px] justify-between'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iqtoken;
