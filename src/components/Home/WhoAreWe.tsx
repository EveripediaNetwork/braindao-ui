import { component$ } from "@builder.io/qwik";
import { BgGradient } from "../shared/BgGradient";

export const WhoAreWe = component$(() => (
  <div class="flex flex-col text-center md:flex-row md:text-left relative justify-between items-center md:items-start gap-10 my-20 md:my-44 px-5">
    <h1 class="flex-1 text-4xl xl:text-6xl font-medium">Who are we</h1>
    <BgGradient className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

    <div class="flex-1 flex flex-col max-w-lg xl:text-lg gap-4">
      <p>
        A tight- knit group of professionsals from all over the world with
        profound industrial knowledge in different areas of their expertise,
        working together to build products geared towards web 3.0 to take world
        to the next level of technological advancement.
      </p>
      <p>
        Our goal to bring the blockchain knowledge to the world and help verify
        facts in an era of misinformation and unlocking a new class of use cases
        in the blockchain space.
      </p>
    </div>
  </div>
));