import { component$ } from "@builder.io/qwik";
import { ourValuesData } from "~/data/our-values";
import { CloudTail } from "../svgs/CloudTail";

export const OurValuesCloud = component$(
  ({ content, title, i }: { content: string; title: string; i: number }) => (
    <div
      class={`p-[3px] bg-gradient-to-bl from-pink-500 to-teal-900 w-full md:w-1/2 rounded-[100%] ${
        i % 2 == 0 ? "mr-left" : "ml-auto"
      } `}
    >
      <div class="flex flex-col items-center justify-center bg-[#121212] text-center p-10 md:p-20 rounded-[100%]">
        <h2 class="text-3xl mb-4">{title}</h2>
        <p class="text-sm">{content}</p>
      </div>
    </div>
  )
);

export const OurValues = component$(() => (
  <div class="relative p-5 overflow-hidden md:overflow-visible flex flex-col justify-center items-center placeholder-teal-200 pb-20 xl:p-40 max-w-6xl mx-auto">
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
          <OurValuesCloud {...value} i={i} />
        </>
      ))}
    </div>
  </div>
));
