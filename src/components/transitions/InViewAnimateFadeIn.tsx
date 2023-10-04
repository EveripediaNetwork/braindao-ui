'use client';

import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export type TInViewAnimate = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};
const InViewAnimateFadeIn: React.FC<TInViewAnimate> = ({
	children,
	className,
	delay,
}) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				transition: {
					duration: 0.8,
					delay: delay ? delay : 0.2,
				},
			});
		}
		if (!inView) {
			animation.start({
				opacity: 0,
			});
		}
	}, [animation, delay, inView]);

	return (
		<motion.div ref={ref} animate={animation} className={`${className}`}>
			{children}
		</motion.div>
	);
};

export default InViewAnimateFadeIn;
