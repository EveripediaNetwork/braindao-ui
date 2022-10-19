import { component$ } from "@builder.io/qwik";

export const Border = component$((p: { className?: string }) => (
  <div class={`border-b-[1px] border-white/20 ${p.className}`} />
));
