"use client";

import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type TInViewAnimate = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};
const InViewAnimateSlideUp: React.FC<TInViewAnimate> = ({
  children,
  className,
  delay,
}) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "-400px",
        transition: {
          type: "tween",
          duration: 2,
          delay: delay ? delay : 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: 0,
      });
    }
  }, [animation, delay, inView]);

  return (
    <motion.div animate={animation} ref={ref} className={`${className}`}>
      {children}
    </motion.div>
  );
};

export default InViewAnimateSlideUp;
