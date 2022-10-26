import {
  component$,
  useClientEffect$,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ourStoryData } from "~/data/our-story";
import { BgGradient } from "../shared/BgGradient";

export const OurStory = component$(() => {
  const storyStore = useStore(ourStoryData[1]);

  const sectionRef = useSignal<HTMLDivElement>();
  const headingRef = useSignal<HTMLHeadingElement>();
  const contentRef = useSignal<HTMLDivElement>();
  const tabsRef = useSignal<HTMLDivElement>();

  useClientEffect$(() => {
    if (
      headingRef.value &&
      contentRef.value &&
      sectionRef.value &&
      tabsRef.value
    ) {
      gsap.registerPlugin(ScrollTrigger);

      // ANIMATIONS FOR HEADING CONTENT
      gsap.fromTo(
        headingRef.value!,
        { color: "white", y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.value,
            start: "top 75%",
          },
        }
      );

      // ANIMATIONS FOR CONTENT AND TAB NAV
      [contentRef.value, tabsRef.value].forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.value,
              start: "top 50%",
            },
          }
        );
      });
    }
  });

  return (
    <div
      ref={sectionRef}
      class="relative overflow-hidden md:overflow-visible  flex flex-col justify-center items-center py-20"
    >
      <h2 ref={headingRef} class="text-4xl xl:text-6xl font-bold">
        Our Story
      </h2>
      <nav ref={tabsRef} class="flex items-center gap-6 md:gap-10 mt-10">
        {ourStoryData.map((story) => (
          <button
            class={
              storyStore.year === story.year
                ? "!text-4xl text-pink-500"
                : "text-2xl"
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
      <BgGradient
        path="M128.837 36.2528C269.601 36.2522 522.473 -20.5913 607.973 10.0854C650.855 20.7151 808 62.5 808 155.5C808 231.252 620.675 296.532 577.705 299.036C382.18 310.428 492.44 217.1 207.354 217.1C-77.7313 217.1 -31.0914 36.2535 128.837 36.2528Z"
        className="left-0"
      />
      <div
        ref={contentRef}
        class="mt-10 mx-5 max-w-4xl text-center bg-white/10 p-5 md:p-16 border-[1px] border-white/10 backdrop-blur-md"
      >
        {storyStore.content}
      </div>
    </div>
  );
});
