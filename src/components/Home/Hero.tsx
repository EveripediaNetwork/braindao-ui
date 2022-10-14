import { component$ } from "@builder.io/qwik";
import { HeroBackground } from "~/components/svgs/HeroBackground";
import { HeroScrollToContent } from "../svgs/HeroScrollToContent";

export const Hero = component$(() => {
  return (
    <>
      <div class="flex flex-col items-center justify-between pt-12 p-5">
        <h1 class="text-5xl md:text-7xl lg:text-[115px] leading-snug font-medium">
          Meet the Humans of{" "}
          <span
            class="bg-gradient-to-r bg-clip-text text-transparent 
            from-white via-pink-500 to-yellow-500
            animate-text"
          >
            BrainDAO{" "}
          </span>
          and Builders of IQ.Wiki.
        </h1>
        <HeroBackground className="-mt-64 -z-10 w-screen h-[100vw] max-h-[56rem] max-w-4xl" />
        <div class="flex flex-col gap-[10vh] w-full">
          <div class="relative -mt-10 md:-mt-32">
            <div class="absolute rounded-full right-0 -top-36 h-[400px] w-[400px] bg-gradient-radial-at-tl from-[#4b7acb]/20 via-[#cc4c7f]/20 to-transparent blur-[120px]" />
            <p class="ml-auto p-4 md:p-8 text-md lg:text-lg text-center rounded-md md:rounded-none max-w-md bg-white/10 backdrop-blur-md">
              IQ.Wiki's mission is to bring the world's knowledge on-chain
              through the IQ token.
            </p>
          </div>
          <div class="flex flex-col justify-center items-center gap-3 text-pink-400 text-lg">
            <p>Get to know us</p>
            <HeroScrollToContent />
          </div>
        </div>
      </div>
    </>
  );
});
