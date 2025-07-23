"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { type FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type TInViewAnimate = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};
const InViewAnimateTop: FC<TInViewAnimate> = ({
	children,
	className,
	delay,
}) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 0,
				transition: {
					type: "tween",
					duration: 1,
					delay: delay ? delay : 0.2,
				},
			});
		}
		if (!inView) {
			animation.start({
				y: "-10vw",
			});
		}
	}, [animation, delay, inView]);

	return (
		<motion.div
			animate={animation}
			ref={ref}
			className={cn("overflow-hidden", className)}
		>
			{children}
		</motion.div>
	);
};

export default InViewAnimateTop;
