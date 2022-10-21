import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import { HeroBackground } from "~/components/svgs/HeroBackground";
import { BgGradient } from "../shared/BgGradient";
import { HeroScrollToContent } from "../svgs/HeroScrollToContent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import SplitType from "split-type";

export const Hero = component$(() => {
  const heroRef = useSignal<HTMLDivElement>();
  const heroTextRef = useSignal<HTMLDivElement>();
  const heroDescRef = useSignal<HTMLDivElement>();
  useClientEffect$(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    const text = new SplitType(heroTextRef.value!, { types: "words, chars" });
    gsap.set(heroTextRef.value!, { visibility: "visible" });
    gsap.from(text.chars, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
    });
  });
  return (
    <>
      <div
        ref={heroRef}
        class="flex flex-col items-center justify-between pt-12 p-5"
      >
        <h1
          ref={heroTextRef}
          class="text-[15vw] invisible sm:text-[90px] lg:text-[115px] leading-none font-medium"
        >
          Meet the Humans of{" "}
          <span
            class="bg-gradient-to-r bg-clip-text text-transparent 
            from-white via-pink-500 to-yellow-500
            animate-text"
          >
            BrainDAO{" ‎ "}
          </span>
          and Builders of IQ.Wiki.
        </h1>
        <HeroBackground className="-mt-64 -z-10 w-screen h-[100vw] max-h-[56rem] max-w-4xl" />
        <div ref={heroDescRef} class="flex flex-col gap-[10vh] w-full">
          <div class="relative -mt-10 md:-mt-32">
            <BgGradient className="right-0 -top-36" />
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
