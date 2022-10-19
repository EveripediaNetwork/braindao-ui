import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { BraindaoLogo } from "../svgs/BraindaoLogo";
import { ArrowDropDownIcon } from "../icons/ArrowDropDown";
import { GlobeIcon } from "../icons/Globe";
import { MobileHambuger } from "./MobileHamburger";

export const Navbar = component$(() => {
  return (
    <header class="flex sticky top-0 backdrop-blur-xl bg-[#121212]/60 z-50 -mx-7 px-14 justify-between items-center p-3">
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
      <div class="flex md:hidden items-center gap-2 fill-white text-sm">
        <MobileHambuger />
      </div>
    </header>
  );
});
