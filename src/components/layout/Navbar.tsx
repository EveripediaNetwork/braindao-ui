import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { BraindaoLogo } from "../svgs/BraindaoLogo";
import { ArrowDropDownIcon } from "../svgs/icons/ArrowDropDown";
import { GlobeIcon } from "../svgs/icons/Globe";

export const Navbar = component$(() => {
  return (
    <header class="flex justify-between items-center p-5">
      <h1 class="flex gap-2 items-center text-lg font-medium">
        <BraindaoLogo /> BrainDAO
      </h1>
      <nav class="flex gap-6 text-md">
        <Link href="/">Home</Link>
        <a href="https://iq.wiki">IQ.Wiki</a>
        <a href="#">Brainies</a>
        <a href="#">IQ Dashboard</a>
      </nav>
      <div class="flex items-center gap-2 fill-white text-sm">
        <GlobeIcon /> English, USA <ArrowDropDownIcon />
      </div>
    </header>
  );
});
