import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BgGradient } from "../shared/BgGradient";
import { Border } from "../shared/Border";

export const WhoAreWe = component$(() => {
  const headingRef = useSignal<HTMLHeadingElement>();
  const sectionRef = useSignal<HTMLHeadingElement>();
  const descRef = useSignal<HTMLParagraphElement>();

  useClientEffect$(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ANIMATIONS FOR SECTION HEADING
    gsap.fromTo(
      headingRef.value!,
      { visibility: "visible", y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 75%",
        },
      }
    );

    // ANIMATIONS FOR SECTION DESCRIPTION
    gsap.fromTo(
      descRef.value!,
      { opacity: 0 },
      {
        opacity: 1,
        visibility: "visible",
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 75%",
        },
      }
    );
  });

  return (
    <>
      <Border />
      <div
        ref={sectionRef}
        class="flex flex-col text-center md:flex-row md:text-left relative justify-between items-center md:items-start gap-10 my-24 md:my-44 px-5"
      >
        <h1
          ref={headingRef}
          class="invisible flex-1 text-4xl xl:text-6xl font-medium"
        >
          Who are we
        </h1>
        <BgGradient className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          ref={descRef}
          class="flex-1 invisible flex flex-col max-w-lg xl:text-lg gap-4"
        >
          <p>
            A tight- knit group of professionals from all over the world with
            profound industrial knowledge in different areas of their expertise,
            working together to build products geared towards web 3.0 to take
            world to the next level of technological advancement.
          </p>
          <p>
            Our goal to bring the blockchain knowledge to the world and help
            verify facts in an era of misinformation and unlocking a new class
            of use cases in the blockchain space.
          </p>
        </div>
      </div>
    </>
  );
});
