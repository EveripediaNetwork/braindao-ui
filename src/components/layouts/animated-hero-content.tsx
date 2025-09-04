"use client";

import gsap from "gsap";
import type React from "react";
import { useEffect, useRef } from "react";

type AnimatedHeroContentProps = {
	title: React.ReactNode;
	description: string;
};

const AnimatedHeroContent = ({
	title,
	description,
}: AnimatedHeroContentProps) => {
	const headingRef = useRef<HTMLHeadingElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (headingRef.current) {
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
		<div className="relative max-w-[1536px] mx-auto">
			<div className="w-full pt-24 md:pt-32 lg:pt-36 pb-8 md:pb-12 lg:pb-16 flex flex-col items-center justify-center">
				<div className="z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-4">
					<h1
						ref={headingRef}
						className="text-[32px] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-medium font-satoshi !leading-[1.08] tracking-[-0.02em] text-foreground"
					>
						{title}
					</h1>

					<p
						ref={paragraphRef}
						className="text-sm sm:text-lg max-w-[513px] lg:max-w-2xl text-center mx-auto lg:text-xl text-white"
					>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AnimatedHeroContent;
