"use client";

import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TInViewAnimate } from "./InViewAnimateBottom";

const InViewAnimateLeft: React.FC<TInViewAnimate> = ({
  children,
  className,
  delay,
}) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1,
          delay: delay ? delay : 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-10vw",
        opacity: 0.5,
      });
    }
  }, [animation, delay, inView]);

  return (
    <motion.div ref={ref} animate={animation} className={`${className}`}>
      {children}
    </motion.div>
  );
};

export default InViewAnimateLeft;
