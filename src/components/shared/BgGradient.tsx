import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";

export const BgGradient = component$(
  ({ className }: { className?: string }) => {
    const gradientRef = useSignal<HTMLDivElement>();
    useClientEffect$(() => {
      gsap.set("body", { overflowX: "hidden" });
      gsap.to(gradientRef.value!, {
        repeat: -1,
        duration: 2,
        x: "random(-100%, 100%)",
        y: "random(-100%, 100%)",
        z: "random(-100%, 100%)",
        repeatRefresh: true,
      });
    });
    return (
      <div
        ref={gradientRef}
        class={`absolute -z-10 pointer-events-none rounded-full h-[350px] w-[350px] bg-gradient-radial-at-tl from-[#cc4c7f]/40 via-[#8c63a5]/40 to-[#4b7acb]/10 blur-[120px] ${className}`}
      />
    );
  }
);
