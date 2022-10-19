import { component$ } from "@builder.io/qwik";
import { ourValuesData } from "~/data/our-values";
import { CloudTail } from "../svgs/CloudTail";

export const OurValuesCloud = component$(
  ({ content, title }: { content: string; title: string }) => (
    <div class="p-[2px] rounded-[100%] animate-border bg-white from-teal-500 via-pink-500 to-purple-500 bg-[length:400%_400%] transition bg-gradient-to-r hover:shadow-lg focus:outline-none focus:ring">
      <div class="flex flex-col bg-[#121212] p-10 md:p-20 rounded-[100%] items-center justify-center text-center">
        <h2 class="text-3xl mb-4">{title}</h2>
        <p class="text-sm">{content}</p>
      </div>
    </div>
  )
);

export const OurValues = component$(() => (
  <div class="relative p-5 overflow-hidden md:overflow-visible flex flex-col justify-center items-center placeholder-teal-200 pb-20 max-w-6xl mx-auto">
    <h2 class="text-4xl xl:text-6xl font-bold">Our Values</h2>
    <div class="flex flex-col justify-center items-stretch mt-10 w-full">
      {ourValuesData.map((value, i) => (
        <>
          {i !== 0 && (
            <div
              class={`${i % 2 == 0 ? "ml-auto" : "mr-auto"} w-[80%] md:w-1/2`}
            >
              <CloudTail
                className={`${
                  i % 2 != 0
                    ? "ml-auto translate-x-1/2"
                    : "mr-auto -translate-x-1/2 rotate-90"
                } h-24 w-24 md:w-36 md:h-36 md:-my-12`}
              />
            </div>
          )}
          <div class={`${i % 2 == 0 ? "mr-left" : "ml-auto"} w-full md:w-1/2`}>
            <OurValuesCloud {...value} />
          </div>
        </>
      ))}
    </div>
  </div>
));
