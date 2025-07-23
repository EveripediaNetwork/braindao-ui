"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { FC } from "react";
import { useInView } from "react-intersection-observer";
import type { TInViewAnimate } from "./InViewAnimateBottom";

const InViewAnimateRight: FC<TInViewAnimate> = ({
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
				x: 0,
				opacity: 1,
				transition: {
					type: "tween",
					duration: 0.8,
					delay: delay ? delay : 0.2,
				},
			});
		}
		if (!inView && !hasAnimated) {
			animation.start({
				x: "10vw",
				opacity: 0.5,
			});
		}
	}, [animation, delay, inView, hasAnimated]);

	return (
		<motion.div animate={animation} ref={ref} className={cn(className)}>
			{children}
		</motion.div>
	);
};

export default InViewAnimateRight;
