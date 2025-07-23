"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type TInViewAnimate = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};
const InViewAnimateSlideDown: React.FC<TInViewAnimate> = ({
	children,
	className,
	delay,
}) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (inView && !hasAnimated) {
			setHasAnimated(true);
			animation.start({
				y: "30vh",
				transition: {
					duration: 1.5,
					delay: delay ?? 0.2,
				},
			});
		}
		if (!inView && !hasAnimated) {
			animation.start({
				y: "0",
			});
		}
	}, [animation, delay, inView, hasAnimated]);

	return (
		<motion.div animate={animation} ref={ref} className={cn(className)}>
			{children}
		</motion.div>
	);
};

export default InViewAnimateSlideDown;
