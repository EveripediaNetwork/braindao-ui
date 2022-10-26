import { component$ } from "@builder.io/qwik";
import { HeroBackground } from "../svgs/HeroBackground";

export const Hero = component$(() => (
  <>
    <div class="flex flex-col items-center justify-between h-[calc(100vh-65px)]">
      <div class="mt-20 w-full max-w-4xl mr-auto">
        <h1 class="text-[15vw] text-6xl leading-tight font-bold">
          We Are The World’s Largest Blockchain & Crypto Encyclopedia
        </h1>
        <p class="text-[15vw] max-w-2xl mt-6 text-2xl leading-snug">
          Start your crypto journey with IQ Wiki! The compass for exploring your
          web3 curiosities.
        </p>
        <a
          href="https://iq.braindao.org"
          target="_blank"
          class="inline-block mt-14 bg-pink-500 px-8 py-4 rounded-md"
        >
          Launch Dashboard
        </a>
      </div>
      <HeroBackground className="-mt-80 -z-10 w-screen h-[100vw] max-h-[56rem] max-w-4xl" />
    </div>

    <p class="absolute w-screen left-0 bottom-8 p-6 text-md lg:text-lg text-center bg-white/10 backdrop-blur-md">
      IQ.Wiki's mission is to bring the world's knowledge on-chain through the
      IQ token.
    </p>
  </>
));
