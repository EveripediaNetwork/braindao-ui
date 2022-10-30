import { component$ } from "@builder.io/qwik";
import { BrainIcon } from "../icons/Brain";
import { DiscordIcon } from "../icons/Discord";
import { TwitterIcon } from "../icons/Twitter";
import { HeroBackground } from "../svgs/HeroBackground";

export const Hero = component$(() => (
  <div class="flex flex-col items-center justify-center relative overflow-y-hidden h-[calc(100vh-65px)] px-[5vw] xl:px-5">
    <div class="flex flex-col justify-start mx-auto items-start gap-5 md:gap-10 w-full  max-w-7xl mr-auto -translate-y-10">
      <h1 class="text-[clamp(30px,9vw,60px)] xl:text-[70px] !leading-tight font-bold font-montserrat">
        BrainDAO invests in the future of knowledge with IQ.Wiki
      </h1>
      <p class="text-[clamp(16px,4vw,40px)] md:text-xl lg:text-3xl">
        Our vision is to create an ecosystem of knowledge around the IQ token
        which creates value through dapps, DeFi, and NFTs. The IQ token powers
        IQ.wiki the world’s largest crypto encyclopedia and HiIQ staking.
      </p>
      <a
        href="https://iq.braindao.org"
        target="_blank"
        class="inline-block bg-pink-500 px-8 py-4 md:mt-8 rounded-md"
      >
        Launch IQ Dashboard
      </a>
    </div>
    <div class="absolute bottom-5 right-5">
      <div class="flex items-center mt-4 gap-3 children:bg-gradient-radial-at-tr children:rounded-md children:from-white/20 children:to-transparent children:p-2 children:border-white/20 children:border-[1px]">
        <a href="https://twitter.com/Everipedia" target="_blank">
          <TwitterIcon className="w-5 h-5 fill-white" />
        </a>
        <a href="https://iq.wiki" target="_blank">
          <BrainIcon className="w-5 h-5" />
        </a>
        <a href="https://discord.gg/uvJ63SuxHQ" target="_blank">
          <DiscordIcon className="w-5 h-5 fill-white" />
        </a>
      </div>
    </div>
    <HeroBackground className="absolute lg:mt-10 -z-10 w-[100%] h-[95vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[70rem] max-w-4xl" />
  </div>
));
