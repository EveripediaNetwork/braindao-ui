import { component$, useSignal } from "@builder.io/qwik";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { RightArrowIcon } from "../icons/RightArrow";
import { BraindaoLogo } from "../svgs/BraindaoLogo";

export const Navbar = component$(() => {
  const mobileNav = useSignal<HTMLDivElement>();
  return (
    <header class="flex flex-col backdrop-blur-xl bg-[#121212]/60 z-50 lg:-mx-7 lg:px-14 p-3">
      <div class="flex justify-between items-center w-full">
        <h1 class="flex gap-2 items-center text-lg font-medium">
          <BraindaoLogo /> BrainDAO
        </h1>
        <nav class="hidden md:flex gap-6 text-md">
          <a href="#values">Values</a>
          <a href="#who're-we">Who're We</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="https://iq.braindao.org"
          target="_blank"
          class="hidden md:block bg-pink-500 px-5 py-1 rounded-md"
        >
          IQ Dashboard
        </a>
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
            <a href="#values">Values</a>
          </li>
          <li>
            <a href="#who're-we">Who're We</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://iq.braindao.org"
              target="_blank"
              class="flex justify-between"
            >
              <span>IQ Dashboard</span>
              <RightArrowIcon className="fill-white" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
