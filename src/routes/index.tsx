import { component$ } from "@builder.io/qwik";
import { Hero } from "~/components/Home/Hero";
import { OurStory } from "~/components/Home/OurStory";
import { OurValues } from "~/components/Home/OurValues";
import { WhoAreWe } from "~/components/Home/WhoAreWe";

export default component$(() => (
  <div>
    <Hero />
    <OurStory />
    <OurValues />
    <div class="border-b-[1px] border-white/20" />
    <WhoAreWe />
  </div>
));
