import { component$ } from "@builder.io/qwik";
import { Hero } from "~/components/Home/Hero";
import { OurStory } from "~/components/Home/OurStory";

export default component$(() => (
  <div>
    <Hero />
    <OurStory />
  </div>
));
