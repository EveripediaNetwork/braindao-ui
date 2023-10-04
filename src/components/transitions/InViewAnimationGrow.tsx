"use client";

import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type TInViewAnimate = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};
const InViewAnimateGrow: React.FC<TInViewAnimate> = ({
  children,
  className,
  delay,
}) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        transition: {
          type: "tween",
          duration: 1,
          delay: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        scale: 1.4,
      });
    }
  }, [animation, delay, inView]);

  return (
    <motion.div
      animate={animation}
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimateGrow;
