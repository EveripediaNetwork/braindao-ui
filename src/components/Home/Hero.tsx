import { component$ } from "@builder.io/qwik";
import { HeroBackground } from "~/components/svgs/HeroBackground";

export const Hero = component$(() => {
  return (
    <div className="flex items-center justify-center mt-12 p-5 relative">
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
    </div>
  );
});
