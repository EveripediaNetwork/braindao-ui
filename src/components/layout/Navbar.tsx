import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { BraindaoLogo } from "../svgs/BraindaoLogo";
import { ArrowDropDownIcon } from "../icons/ArrowDropDown";
import { GlobeIcon } from "../icons/Globe";
import { HamburgerIcon } from "../icons/HamburgerIcon";

export const Navbar = component$(() => {
  const mobileNav = useSignal<HTMLDivElement>();
  return (
    <header class="flex flex-col sticky top-0 backdrop-blur-xl bg-[#121212]/60 z-50 lg:-mx-7 lg:px-14 p-3">
      <div class="flex justify-between items-center w-full">
        <h1 class="flex gap-2 items-center text-lg font-medium">
          <BraindaoLogo /> BrainDAO
        </h1>
        <nav class="hidden md:flex gap-6 text-md">
          <Link href="/">Home</Link>
          <a href="https://iq.wiki">IQ.Wiki</a>
          <a href="#">Brainies</a>
          <a href="#">IQ Dashboard</a>
        </nav>
        <div class="hidden md:flex items-center gap-2 fill-white text-sm">
          <GlobeIcon /> English, USA <ArrowDropDownIcon />
        </div>
        <button
          class="fill-white md:hidden"
          onClick$={() => {
            mobileNav.value?.classList.toggle("hidden");
            mobileNav.value?.classList.toggle("block");
          }}
        >
          <HamburgerIcon />
        </button>
      </div>
      <div ref={mobileNav} class="hidden md:hidden">
        <ul class="flex flex-col divide-y-[1px] max-w-xl mx-auto divide-white/25 p-5 text-lg children:p-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">IQ.Wiki</a>
          </li>
          <li>
            <a href="#">Brainies</a>
          </li>
          <li>
            <a href="#">IQ Dashboard</a>
          </li>
        </ul>
      </div>
    </header>
  );
});
