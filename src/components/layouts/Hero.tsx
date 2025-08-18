"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";

const Hero = () => {
	const headingRef = useRef<HTMLHeadingElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (typeof window !== "undefined" && headingRef.current) {
			const spans = headingRef.current.querySelectorAll("span");

			gsap.set(spans, {
				opacity: 0,
				filter: "blur(10px)",
				scale: 1.5,
			});

			if (paragraphRef.current) {
				gsap.set(paragraphRef.current, {
					opacity: 0,
					y: 30,
				});
			}

			const tl = gsap.timeline();

			tl.to(spans, {
				duration: 1.2,
				opacity: 1,
				filter: "blur(0px)",
				scale: 1,
				stagger: 0.1,
				ease: "power4.out",
			});

			if (paragraphRef.current) {
				tl.to(
					paragraphRef.current,
					{
						duration: 1.8,
						opacity: 1,
						y: 0,
						ease: "power2.out",
					},
					"-=0.3",
				);
			}
		}
	}, []);

	return (
		<div className="relative overflow-hidden pb-8">
			<div className="absolute top-0 left-0 right-0 h-[50vh] sm:[50vh] md:h-[90vh] z-90">
				<Image
					src="/images/gradient-blur-bg.png"
					alt="gradient blur"
					fill
					className="w-full h-full object-cover opacity-100"
				/>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-1/2 sm:h-2/3 md:h-2/3 opacity-80 ">
				<Image
					src="/images/mesh.png"
					alt=""
					width={1200}
					height={600}
					className="w-full object-cover"
				/>
			</div>

			<div className="relative">
				<div className="max-w-[1536px] mx-auto">
					<Navbar />
					<div
						className="flex flex-col items-center w-full h-[100vh] justify-center relative overflow-hidden min-h-[calc(40vh-65px)] md:min-h-[calc(60vh-65px)] 
					lg:min-h-[calc(60vh-65px)] pt-0 md:pt-20 lg:pt-2 pb-72 sm:pb-80 md:pb-[24rem] lg:pb-[32rem] xl:pb-32 -mt-20 md:-mt-32  xl:pt-0 xl:-mt-16"
					>
						<div className="flex text-center md:text-left items-center flex-col justify-start mx-auto gap-1 sm:gap-5 w-full px-4 sm:px-0 max-w-6xl overflow-hidden">
							<div className="w-full flex flex-col gap-4 items-center justify-center ">
								<h1
									ref={headingRef}
									className="text-[32px] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-medium text-white !leading-[1.08] tracking-[-0.02em] text-center font-satoshi"
								>
									<span className="block">Building A More</span>
									<span className="block">Intelligent Future </span>
									<span className="block">
										Through The{" "}
										<span className="italic text-primary">IQ Token.</span>
									</span>
								</h1>
								<p
									ref={paragraphRef}
									className="text-sm sm:text-lg max-w-[513px] lg:max-w-2xl text-center mx-auto lg:text-xl text-white pt-0 "
								>
									Join our mission to expand the scope of human knowledge with
									BrainDAO, the governing DAO powering the IQ ecosystem.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
