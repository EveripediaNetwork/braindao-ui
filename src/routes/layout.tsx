import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/layout/Navbar";

export default component$(() => {
  return (
    <div class="container mx-auto">
      <Navbar />
      <main>
        <Slot />
      </main>
    </div>
  );
});
