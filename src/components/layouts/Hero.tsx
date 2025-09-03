"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

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
		<div className="relative">
			<div className="absolute top-0 left-0 right-0 h-[50vh] sm:[50vh] md:h-[90vh] z-90">
				<Image
					src="/images/gradient-blur-bg.png"
					alt="gradient blur"
					fill
					className="w-full h-full object-fill"
				/>
			</div>

			<div className="absolute inset-0 top-60 w-full lg:h-[800px] opacity-80 z-[-1]">
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
					<div className="relative w-full pt-24 md:pt-32 lg:pt-36 pb-8 md:pb-12 lg:pb-16 flex flex-col items-center justify-center">
						<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-4 md:space-y-4 transition-all duration-700 transform opacity-100 translate-y-0">
							<h1
								ref={headingRef}
								className="text-[32px] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-medium font-satoshi !leading-[1.08] tracking-[-0.02em] text-foreground"
							>
								<span className="block">Building A More</span>
								<span className="block">Intelligent Future</span>
								<span className="block">
									Through The{" "}
									<span className="italic text-primary">IQ Token.</span>
								</span>
							</h1>

							<p
								ref={paragraphRef}
								className="text-sm sm:text-lg max-w-[513px] lg:max-w-2xl text-center mx-auto lg:text-xl text-white pt-0"
							>
								Join our mission to expand the scope of human knowledge with
								BrainDAO, the governing DAO powering the IQ ecosystem.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
