"use client";

import { space_grotesk } from "@/app/font";
import gsap from "gsap";
import React, { MouseEventHandler, useRef, useState } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Navbar from "./Navbar";

const Hero = () => {
  const plane = useRef<HTMLDivElement>(null);

  let requestAnimationFrameId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  let xBoundary = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { movementX, movementY } = e;
    console.log(movementX);
    xBoundary = movementX;
    xForce += movementX * speed;
    // yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane.current, { x: `+=${xForce}`, y: `+=${yForce}` });

    if (Math.abs(xForce) < 0.01 || Math.abs(xBoundary) > 20) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId!);
      requestAnimationFrameId = null;
    }
  };

  return (
    <div>
      <div
        onMouseMove={manageMouseMove}
        className="relative bg-braindao-sm sm:bg-hero bg-cover bg-no-repeat bg-center text-whiteAlpha-900"
      >
        <div
          ref={plane}
          className="hidden sm:block bg-brainie bg-cover bg-center bg-no-repeat w-full absolute top-0 bottom-0"
        />
        <div className="relative bg-black/50">
          <div className="max-w-[1536px] mx-auto">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center relative overflow-y-hidden h-[calc(40vh-65px)] md:h-[calc(60vh-65px)] lg:h-[calc(100vh-65px)]">
              <div className="flex bg-red-100 text-center md:text-left items-center md:items-start flex-col sm:pt-10 justify-start mx-auto gap-1 sm:gap-5 w-full  max-w-6xl">
                <h1
                  className={`text-2xl sm:text-4xl md:text-5xl animate-fade-in xl:text-[60px] 2xl:text-[70px] !leading-tight text-center font-bold ${space_grotesk.className}`}
                >
                  Building a more intelligent future through the IQ token.
                </h1>
                <p className="md:text-lg max-w-[513px] animate-slide-up lg:max-w-2xl text-center mx-auto lg:text-xl">
                  Join our mission to expand the scope of human knowledge with
                  BrainDAO, the governing DAO powering the IQ ecosystem.
                </p>
                <a
                  href={"#iq-token"}
                  className="mt-4 mx-auto hover:animate-bounce"
                >
                  <RiArrowDownDoubleLine size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
