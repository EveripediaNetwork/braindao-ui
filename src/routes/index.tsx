import { component$ } from "@builder.io/qwik";
import { Hero } from "~/components/Home/Hero";
import { OurStory } from "~/components/Home/OurStory";
import { OurValues } from "~/components/Home/OurValues";

export default component$(() => (
  <div>
    <Hero />
    <OurStory />
    <OurValues />
  </div>
));
