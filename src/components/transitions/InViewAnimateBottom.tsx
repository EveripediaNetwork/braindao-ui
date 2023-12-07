'use client';

import { useAnimation, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type TInViewAnimate = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};
const InViewAnimateBottom: React.FC<TInViewAnimate> = ({
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
				// y: 0,
				opacity: 1,
				transition: {
					type: 'tween',
					duration: 1.5,
				},
			});
		}
		if (!inView && !hasAnimated) {
			animation.start({
				// y: '100px',
				opacity: 0,
			});
		}
	}, [animation, delay, inView, hasAnimated]);

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
