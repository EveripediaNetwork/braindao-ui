import { component$ } from '@builder.io/qwik';
import { DiscordIcon } from '../icons/Discord';
import { BrainIcon } from '../icons/Brain';
import { TwitterIcon } from '../icons/Twitter';
import { HeroBackground } from '../svgs/HeroBackground';

export const Hero = component$(() => (
  <div class='flex flex-col items-center justify-center relative overflow-y-hidden h-[calc(85vh-65px)] md:h-[calc(100vh-65px)] px-[5vw] xl:px-5'>
    <div class='flex text-center md:text-left items-center md:items-start flex-col justify-start mx-auto gap-5 md:gap-10 w-full  max-w-7xl mr-auto -translate-y-10'>
      <h1 class='text-[clamp(30px,9vw,60px)] xl:text-[70px] !leading-tight font-bold'>
        Building a more intelligent future through the IQ token.
      </h1>
      <p class='text-[clamp(16px,4vw,40px)] md:text-xl lg:text-3xl'>
        Join our mission to expand the scope of human knowledge with BrainDAO,
        the governing DAO powering the IQ ecosystem.
      </p>
      <a
        href='https://iq.braindao.org'
        target='_blank'
        class='inline-block bg-pink-500 px-8 py-4 md:mt-8 rounded-md hover:bg-white hover:text-black transition-all ease-in-out duration-300'
      >
        Launch IQ Dashboard
      </a>
    </div>
    <div class='absolute bottom-5 right-5'>
      <div class='flex items-center mt-4 gap-3 children:bg-gradient-radial-at-tr children:rounded-md children:from-white/20 children:to-transparent children:p-2 children:border-white/20 children:border-[1px]'>
        <a href='https://twitter.com/Everipedia' target='_blank' rel='nofollow'>
          <TwitterIcon className='w-5 h-5 fill-white' />
        </a>
        <a href='https://iq.wiki/wiki/braindao' target='_blank'>
          <BrainIcon className='w-5 h-5' />
        </a>
        <a href='https://discord.gg/uvJ63SuxHQ' target='_blank' rel='nofollow'>
          <DiscordIcon className='w-5 h-5 fill-white' />
        </a>
      </div>
    </div>
    <HeroBackground className='absolute lg:mt-10 -z-10 w-[100%] h-[95vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[70rem] max-w-4xl' />
  </div>
));
