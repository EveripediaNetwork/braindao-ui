import { component$ } from "@builder.io/qwik";
import { DiscordIcon } from "../icons/Discord";
import { TwitterIcon } from "../icons/Twitter";

export const Footer = component$(() => {
  return (
    <footer class="text-center flex flex-col  mb-8 gap-4">
      <nav class="fill-white flex justify-center gap-8">
        <TwitterIcon />
        <DiscordIcon />
      </nav>
      <div class="border-b-[1px] border-white/20 max-w-2xl w-full mx-auto" />
      <nav className="flex flex-wrap justify-center children:mx-2 md:children:mx-5">
        <a href="https://iq.wiki">IQ.Wiki</a>
        <a href="https://iq.braindao.org">IQ Dashboard</a>
        <a href="#">IQ</a>
      </nav>
    </footer>
  );
});
