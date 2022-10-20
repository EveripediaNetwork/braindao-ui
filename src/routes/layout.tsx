import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/layout/Footer";
import { Navbar } from "~/components/layout/Navbar";

export default component$(() => {
  return (
    <div class="container mx-auto">
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
