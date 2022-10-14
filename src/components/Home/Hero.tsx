import { component$ } from "@builder.io/qwik";
import { HeroBackground } from "~/components/svgs/HeroBackground";
import { HeroScrollToContent } from "../svgs/HeroScrollToContent";

export const Hero = component$(() => {
  return (
    <>
      <div class="flex flex-col items-center justify-between pt-12 p-5 h-[calc(150vh)]">
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
        <div class="flex flex-col gap-[10vh] w-full">
          <p class="ml-auto p-4 md:p-8 text-lg text-center rounded-md md:rounded-none max-w-md bg-white/10 backdrop-blur-md">
            IQ.Wiki's mission is to bring the world's knowledge on-chain through
            the IQ token.
          </p>
          <div class="flex flex-col justify-center items-center gap-3 text-pink-400 text-lg">
            <p>Get to know us</p>
            <HeroScrollToContent />
          </div>
        </div>
      </div>

      {/* POSITION FIXED ELEMENTS */}
      <div class="absolute w-screen h-[170vh] top-0 left-0">
        <HeroBackground className="absolute left-[20%] top-[15%] -z-[1]" />
        <div class="relative w-full h-full overflow-hidden">
          <div class="absolute rounded-full h-[1000px] w-[1000px] top-[70vh] left-[40%] md:top-[70vh] -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 bg-gradient-radial from-pink-400/30 via-transparent to-transparent" />
        </div>
      </div>
    </>
  );
});
