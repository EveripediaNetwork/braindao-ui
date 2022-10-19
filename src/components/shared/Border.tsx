import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Border = component$((p: { className?: string }) => {
  const borderRef = useSignal<HTMLDivElement>();

  useClientEffect$(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      borderRef.value!,
      { x: "-100%", display: "block" },
      {
        x: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: borderRef.value!,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div class="w-full overflow-hidden">
      <div ref={borderRef} class="hidden">
        <div class={`border-b-[1px] border-white/20 ${p.className}`} />
      </div>
    </div>
  );
});
