import { component$, useStore } from "@builder.io/qwik";
import { ourStory } from "~/data/our-story";
import { BgGradient } from "../shared/BgGradient";

export const OurStory = component$(() => {
  const storyStore = useStore(ourStory[1]);
  return (
    <div class="relative overflow-hidden md:overflow-visible  flex flex-col justify-center items-center my-20">
      <h2 class="text-5xl font-bold">Our Story</h2>
      <nav class="flex items-center gap-4 md:gap-10 mt-10 children:text-xl">
        {ourStory.map((story) => (
          <button
            class={
              storyStore.year === story.year ? "!text-3xl text-pink-500" : ""
            }
            onClick$={() => {
              storyStore.content = story.content;
              storyStore.year = story.year;
            }}
          >
            {story.year}
          </button>
        ))}
      </nav>
      <BgGradient className="left-0 top-7" />
      <div class="mt-10 mx-5 max-w-4xl text-center bg-white/10 p-5 md:p-16 border-[1px] border-white/10 backdrop-blur-md">
        {storyStore.content}
      </div>
    </div>
  );
});
