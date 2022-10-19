import { component$ } from "@builder.io/qwik";

export const BgGradient = component$(
  ({ className }: { className?: string }) => (
    <div
      class={`absolute pointer-events-none rounded-full h-[350px] w-[350px] bg-gradient-radial-at-tl from-[#4b7acb]/20 to-[#cc4c7f]/20 blur-[120px] ${className}`}
    />
  )
);
