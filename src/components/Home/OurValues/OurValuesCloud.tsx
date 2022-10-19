import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const OurValuesCloud = component$(
  ({ content, title }: { content: string; title: string }) => {
    const contentRef = useSignal<HTMLParagraphElement>();
    useClientEffect$(() => {
      gsap.registerPlugin(ScrollTrigger);

      // ANIMATIONS FOR HEADING
      gsap.fromTo(
        contentRef.value!,
        { opacity: 0 },
        {
          opacity: 1,
          visibility: "visible",
          scrollTrigger: {
            trigger: contentRef.value,
            start: "top 75%",
          },
        }
      );
    });

    return (
      <div class="p-[2px] rounded-[100%] animate-border bg-white from-teal-500 via-pink-500 to-purple-500 bg-[length:400%_400%] transition bg-gradient-to-r hover:shadow-lg focus:outline-none focus:ring">
        <div class="flex flex-col bg-[#121212] p-10 md:p-20 rounded-[100%] items-center justify-center text-center">
          <div ref={contentRef}>
            <h2 class="text-3xl mb-4">{title}</h2>
            <p class="text-sm">{content}</p>
          </div>
        </div>
      </div>
    );
  }
);
