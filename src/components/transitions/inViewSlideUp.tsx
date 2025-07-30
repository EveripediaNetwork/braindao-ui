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
const InViewAnimateSlideUp: FC<TInViewAnimate> = ({
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
				y: "-400px",
				transition: {
					type: "tween",
					duration: 1.2,
				},
			});
		}
		if (!inView && !hasAnimated) {
			animation.start({
				y: 0,
			});
		}
	}, [animation, inView, hasAnimated]);

	return (
		<motion.div animate={animation} ref={ref} className={cn(className)}>
			{children}
		</motion.div>
	);
};

export default InViewAnimateSlideUp;

// Well, for the part I am working on: check the draft PR i created, the link is available there
