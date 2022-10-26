import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";

export const BgGradient = component$(
  ({ className, path }: { className?: string; path?: string }) => {
    const gradientRef = useSignal<HTMLDivElement>();
    useClientEffect$(() => {
      gsap.registerPlugin(MotionPathPlugin);
      gsap.set("body", { overflowX: "hidden" });
      gsap.to(gradientRef.value!, {
        repeat: -1,
        ease: "none",
        duration: path ? 10 : 2,
        repeatRefresh: true,
        motionPath: { path: path || "M0,0 L100,0 L100,100 L0,100 Z" },
      });
    });
    return (
      <div class="absolute  w-screen h-screen overflow-x-hidden overflow-y-visible">
        <svg
          ref={gradientRef}
          class={`absolute -z-10 pointer-events-none rounded-full h-[650px] w-[650px] ${className}`}
          width="907"
          height="811"
          viewBox="0 0 907 811"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_5_1255)">
            <path
              d="M454 505C509.228 505 554 460.228 554 405C554 349.772 509.228 305 454 305C398.772 305 354 349.772 354 405C354 460.228 398.772 505 454 505Z"
              fill="url(#paint0_linear_5_1255)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_5_1255"
              x="54"
              y="5"
              width="800"
              height="800"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="s-rGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_5_1255"
              />
            </filter>
            <linearGradient
              id="paint0_linear_5_1255"
              x1="398.601"
              y1="352.867"
              x2="464.423"
              y2="500.348"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F89DB" />
              <stop offset="1" stop-color="#F42A8B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
);
