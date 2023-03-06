import React, { MutableRefObject, useRef } from 'react'
import {BraindaoLogoDark} from '../svgs/BraindaoLogoDark'
import { HamburgerIcon } from '../icons/HamburgerIcon'
import { RightArrowIcon } from '../icons/RightArrow'

const Navbar = () => {
  const mobileNav:  MutableRefObject<HTMLDivElement | null> = useRef(null)
  return (
    <header className='flex flex-col backdrop-blur-xl bg-[#121212]/60 z-50 lg:-mx-7 lg:px-14 p-3'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='flex gap-2 items-center text-lg font-medium'>
          <a href='/'>
            <BraindaoLogoDark />
          </a>
        </h1>
        <nav className='hidden md:flex gap-20 text-sm'>
          <a target='_blank' href='https://iq.wiki'>
            IQ WIKI
          </a>
          <a target='_blank' href='https://oraqles.com'>
            IQ OraQles
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
          className='hidden md:block bg-pink-500 text-sm px-5 py-2 rounded-md  hover:bg-white hover:text-black transition-all ease-in-out duration-300'
        >
          Launch IQ Dashboard
        </a>
        <button
          className='fill-white md:hidden'
          onClick={() => {
            mobileNav.current?.classList.toggle('hidden');
            mobileNav.current?.classList.toggle('block');
          }}
        >
          <HamburgerIcon />
        </button>
      </div>
      <div ref={mobileNav} className='hidden md:hidden'>
        <ul className='flex flex-col divide-y-[1px] max-w-xl mx-auto divide-white/25 p-5 text-lg children:p-3'>
          <li>
            <a href='https://iq.wiki'>IQ WIKI</a>
          </li>
          <li>
            <a href='https://oraqles.com'>IQ OraQles</a>
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
              className='flex justify-between'
            >
              <span>IQ Dashboard</span>
              <RightArrowIcon className='fill-white' />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
