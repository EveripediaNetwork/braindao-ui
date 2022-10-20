import { component$ } from "@builder.io/qwik";
import { ContactUs } from "~/components/Home/ContactUs";
import { Hero } from "~/components/Home/Hero";
import { OurStory } from "~/components/Home/OurStory";
import { OurValues } from "~/components/Home/OurValues";
import { TheTeam } from "~/components/Home/TheTeam";
import { WhoAreWe } from "~/components/Home/WhoAreWe";

export default component$(() => (
  <div>
    <Hero />
    <OurStory />
    <OurValues />
    <WhoAreWe />
    <TheTeam />
    <ContactUs />
  </div>
));
