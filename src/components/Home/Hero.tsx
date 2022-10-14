import { component$ } from "@builder.io/qwik";
import { HeroBackground } from "~/components/svgs/HeroBackground";
import { HeroScrollToContent } from "../svgs/HeroScrollToContent";

export const Hero = component$(() => {
  return (
    <>
      <div className="flex flex-col items-center justify-between pt-12 p-5 relative h-[calc(100vh-80px)]">
        <HeroBackground className="fixed top-1/3 -z-[1]" />
        <h1 class="text-5xl md:text-7xl lg:text-8xl leading-snug font-medium">
          Meet the Humans of{" "}
          <span
            class="bg-gradient-to-r bg-clip-text  text-transparent 
            from-white via-pink-500 to-yellow-500
            animate-text"
          >
            BrainDAO{" "}
          </span>
          and builders of IQ.Wiki.
        </h1>
        <p class="ml-auto p-4 md:p-8 rounded-md md:rounded-none max-w-md bg-white/10 backdrop-blur-md">
          IQ.Wiki's mission is to bring the world's knowledge on-chain through
          the IQ token.
        </p>
        <div class="flex flex-col justify-center items-center gap-3 text-pink-400 text-lg">
          <p>Get to know us</p>
          <HeroScrollToContent />
        </div>
      </div>

      <div class="absolute w-screen h-screen top-0 left-0">
        <div class="relative w-full h-full overflow-hidden">
          <div class="absolute rounded-full h-[60vw] w-[60vw] top-1/4 left-1/2 bg-gradient-radial from-pink-400/30 via-transparent to-transparent" />
        </div>
      </div>
    </>
  );
});
