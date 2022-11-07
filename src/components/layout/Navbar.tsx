import { component$, useSignal } from '@builder.io/qwik';
import { HamburgerIcon } from '../icons/HamburgerIcon';
import { RightArrowIcon } from '../icons/RightArrow';

export const Navbar = component$(() => {
  const mobileNav = useSignal<HTMLDivElement>();
  return (
    <header class='flex flex-col backdrop-blur-xl bg-[#121212]/60 z-50 lg:-mx-7 lg:px-14 p-3'>
      <div class='flex justify-between items-center w-full'>
        <h1 class='flex gap-2 items-center text-lg font-medium'>
          <img
            class='w-10 h-10'
            src='/images/braindao-logo.png'
            alt='BrainDAO logo'
          />{' '}
          BrainDAO
        </h1>
        <nav class='hidden md:flex gap-20 text-sm'>
          <a target='_blank' href='https://iq.wiki'>
            IQ WIKI
          </a>
          <a target='_blank' href='https://learn.everipedia.org/iq/'>
            Learn
          </a>
          <a target='_blank' href='https://iq.wiki/blog'>
            Blog
          </a>
        </nav>
        <a
          href='https://iq.braindao.org'
          target='_blank'
          class='hidden md:block bg-pink-500 text-sm px-5 py-2 rounded-md  hover:bg-white hover:text-black transition-all ease-in-out duration-300'
        >
          Launch IQ Dashboard
        </a>
        <button
          class='fill-white md:hidden'
          onClick$={() => {
            mobileNav.value?.classList.toggle('hidden');
            mobileNav.value?.classList.toggle('block');
          }}
        >
          <HamburgerIcon />
        </button>
      </div>
      <div ref={mobileNav} class='hidden md:hidden'>
        <ul class='flex flex-col divide-y-[1px] max-w-xl mx-auto divide-white/25 p-5 text-lg children:p-3'>
          <li>
            <a href='https://iq.wiki'>IQ WIKI</a>
          </li>
          <li>
            <a href='https://learn.everipedia.org/iq/'>Learn</a>
          </li>
          <li>
            <a href='https://iq.wiki/blog'>Blog</a>
          </li>
          <li>
            <a
              href='https://iq.braindao.org'
              target='_blank'
              class='flex justify-between'
            >
              <span>IQ Dashboard</span>
              <RightArrowIcon className='fill-white' />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
