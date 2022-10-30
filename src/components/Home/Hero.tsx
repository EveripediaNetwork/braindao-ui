import { component$ } from "@builder.io/qwik";
import { HeroBackground } from "../svgs/HeroBackground";

export const Hero = component$(() => (
  <div class="flex flex-col items-center justify-center relative overflow-y-hidden h-[calc(100vh-65px)]">
    <div class="flex flex-col justify-start items-start gap-6 w-full p-[5vw] max-w-7xl xl:p-5 mr-auto">
      <h1 class="text-[clamp(30px,9vw,60px)] xl:text-7xl !leading-tight font-bold font-montserrat">
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
    <HeroBackground className="absolute lg:mt-10 -z-10 w-[100%] h-[95vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[70rem] max-w-4xl" />
  </div>
));
