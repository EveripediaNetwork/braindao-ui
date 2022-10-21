import { component$ } from "@builder.io/qwik";
import { SwooshLine } from "../svgs/SwooshLine";

export const ContactUs = component$(() => (
  <div class="flex flex-col md:flex-row text-center md:text-left gap-6 px-5 my-40 items-center">
    <div id="contact" class="flex-[2] scroll-mt-24">
      <h2 class="text-3xl lg:text-6xl font-medium">
        We would love to hear from you, Get in touch with us!
      </h2>
      <SwooshLine className="w-[70%] mx-auto md:mt-4" />
    </div>
    <div class="flex-[1] h-full flex justify-end items-center">
      <button class="h-full bg-pink-500 px-16 py-4 rounded-md">
        Contact Us
      </button>
    </div>
  </div>
));
