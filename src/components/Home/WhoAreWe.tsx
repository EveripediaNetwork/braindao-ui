import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BgGradient } from "../shared/BgGradient";
import { Border } from "../shared/Border";

export const WhoAreWe = component$(() => {
  const textRef = useSignal<HTMLHeadingElement>();
  const sectionRef = useSignal<HTMLHeadingElement>();
  const descRef = useSignal<HTMLParagraphElement>();
  const borderRef = useSignal<HTMLDivElement>();

  useClientEffect$(() => {
    if (textRef.value && descRef.value && sectionRef.value && borderRef.value) {
      gsap.registerPlugin(ScrollTrigger);

      // ANIMATIONS FOR SECTION HEADING
      gsap.fromTo(
        textRef.value,
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

      // ANIMATIONS FOR SECTION DESCRIPTION
      gsap.fromTo(
        descRef.value,
        { opacity: 0 },
        {
          opacity: 1,
          color: "white",
          scrollTrigger: {
            trigger: sectionRef.value,
            start: "top 75%",
          },
        }
      );

      // ANIMATIONS FOR BORDER
      gsap.fromTo(
        borderRef.value,
        { x: "-100%", display: "block" },
        {
          x: 0,
          duration: 1,
          scrollTrigger: sectionRef.value,
        }
      );
    }
  });

  return (
    <div class="overflow-hidden">
      <div ref={borderRef} class="hidden">
        <Border />
      </div>
      <div
        ref={sectionRef}
        class="flex flex-col text-center md:flex-row md:text-left relative justify-between items-center md:items-start gap-10  md:my-44 px-5"
      >
        <h1
          ref={textRef}
          class="text-transparent flex-1 text-4xl xl:text-6xl font-medium"
        >
          Who are we
        </h1>
        <BgGradient className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          ref={descRef}
          class="flex-1 text-transparent flex flex-col max-w-lg xl:text-lg gap-4"
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
    </div>
  );
});
