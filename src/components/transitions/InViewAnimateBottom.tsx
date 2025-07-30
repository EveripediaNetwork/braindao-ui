"use client";

import { motion, useAnimation } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type TInViewAnimate = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};
const InViewAnimateBottom: React.FC<TInViewAnimate> = ({
	children,
	className,
}) => {
	const { inView } = useInView();
	const animation = useAnimation();
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (inView && !hasAnimated) {
			setHasAnimated(true);
			animation.start({
				opacity: 1,
				transition: {
					type: "tween",
					duration: 1.5,
				},
			});
		}
		if (!inView && !hasAnimated) {
			animation.start({
				opacity: 0,
			});
		}
	}, [animation, inView, hasAnimated]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default InViewAnimateBottom;
