import { component$ } from "@builder.io/qwik";
import { CopyRightIcon } from "../icons/CopyRight";
import { DiscordIcon } from "../icons/Discord";
import { OpenSeaIcon } from "../icons/OpenSea";
import { TwitterIcon } from "../icons/Twitter";
import { Border } from "../shared/Border";

export const Footer = component$(() => {
  return (
    <footer class="text-center flex flex-col gap-4">
      <nav className="flex flex-wrap justify-center children:mx-2 md:children:mx-5">
        <a href="https://iq.wiki">IQ.Wiki</a>
        <a href="#">IQ</a>
        <a href="#">Brainies</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
      </nav>
      <Border />
      <nav class="fill-white flex justify-center gap-8">
        <TwitterIcon />
        <DiscordIcon />
        <OpenSeaIcon />
      </nav>
      <p class="mb-8">
        <CopyRightIcon className="fill-white inline-block w-4 h-4" /> 2022
        Everipedia. All Rights Reserved.
      </p>
    </footer>
  );
});
