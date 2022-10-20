import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ourValuesData } from "~/data/our-values";
import { CloudTail } from "../../svgs/CloudTail";
import { OurValuesCloud } from "./OurValuesCloud";

export const OurValues = component$(() => {
  const headingRef = useSignal<HTMLHeadingElement>();
  const sectionRef = useSignal<HTMLHeadingElement>();

  useClientEffect$(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ANIMATIONS FOR HEADING
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
  });

  return (
    <div
      ref={sectionRef}
      class="relative p-5 overflow-hidden md:overflow-visible flex flex-col justify-center items-center placeholder-teal-200 pb-20 max-w-6xl mx-auto"
    >
      <h2 ref={headingRef} class="invisible text-4xl xl:text-6xl font-bold">
        Our Values
      </h2>
      <div class="flex flex-col justify-center items-stretch mt-10 w-full">
        {ourValuesData.map((value, i) => (
          <>
            {i !== 0 && (
              <div
                class={`${i % 2 == 0 ? "ml-auto" : "mr-auto"} w-[80%] md:w-1/2`}
              >
                <CloudTail
                  className={`${
                    i % 2 != 0
                      ? "ml-auto translate-x-1/2"
                      : "mr-auto -translate-x-1/2 rotate-90"
                  } h-24 w-24 md:w-36 md:h-36 md:-my-12`}
                />
              </div>
            )}
            <div
              class={`${i % 2 == 0 ? "mr-left" : "ml-auto"} w-full md:w-1/2`}
            >
              <OurValuesCloud {...value} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
});
