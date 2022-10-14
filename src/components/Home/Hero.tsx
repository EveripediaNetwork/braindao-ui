import { component$ } from "@builder.io/qwik";
import { HeroBackground } from "~/components/svgs/HeroBackground";

export const Hero = component$(() => {
  return (
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
        and builders of Everipedia.
      </h1>
      <p class="p-4 md:p-8 rounded-md md:rounded-none max-w-md bg-white/25 backdrop-blur-md  ml-auto">
        IQ.Wiki's mission is to bring the world's knowledge on-chain through the
        IQ token.
      </p>
    </div>
  );
});
