import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";

export const BgGradient = component$(
  ({ className }: { className?: string }) => {
    const gradientRef = useSignal<HTMLDivElement>();
    useClientEffect$(() => {
      gsap.set("body", { overflowX: "hidden" });
      gsap.timeline({ repeat: -1 }).to(gradientRef.value!, {
        x: "random(-100, 100, 50)",
        y: "random(-100, 100, 50)",
        duration: 2,
        ease: "none",
        repeat: -1,
        repeatRefresh: true,
      });
    });
    return (
      <div
        ref={gradientRef}
        class={`absolute pointer-events-none rounded-full h-[350px] w-[350px] bg-gradient-radial-at-tl from-[#4b7acb]/20 to-[#cc4c7f]/20 blur-[120px] ${className}`}
      />
    );
  }
);
