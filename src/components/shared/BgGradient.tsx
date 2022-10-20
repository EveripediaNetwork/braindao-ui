import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";

export const BgGradient = component$(
  ({ className }: { className?: string }) => {
    const gradientRef = useSignal<HTMLDivElement>();
    useClientEffect$(() => {
      gsap.set("body", { overflowX: "hidden" });
      gsap.to(gradientRef.value!, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        transformOrigin: "120px 120px",
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
