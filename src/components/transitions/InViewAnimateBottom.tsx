"use client";

import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.5,
        },
      });
    }
    if (!inView && !hasAnimated) {
      animation.start({
        y: "10vw",
        opacity: 0.5,
      });
    }
  }, [animation, delay, inView, hasAnimated]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div animate={animation}>{children}</motion.div>
    </div>
  );
};

export default InViewAnimateBottom;
