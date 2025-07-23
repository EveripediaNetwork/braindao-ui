"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { type FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type TInViewAnimate = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};
const InViewAnimateFadeIn: FC<TInViewAnimate> = ({
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
				opacity: 1,
				transition: {
					duration: 0.8,
					delay: delay ? delay : 0.2,
					ease: "easeInOut",
				},
			});
		}
		if (!inView && !hasAnimated) {
			animation.start({
				opacity: 0,
			});
		}
	}, [inView, animation, delay, hasAnimated]);

	return (
		<motion.div ref={ref} animate={animation} className={cn(className)}>
			{children}
		</motion.div>
	);
};

export default InViewAnimateFadeIn;
