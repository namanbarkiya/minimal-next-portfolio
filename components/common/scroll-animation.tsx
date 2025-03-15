"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  effect?: "fade" | "zoom" | "slide" | "rotate";
}

export const ScrollAnimation = ({
  children,
  className = "",
  effect = "fade",
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create transform values outside of any function
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const xOffset = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);
  const rotation = useTransform(scrollYProgress, [0, 0.5], [-10, 0]);

  // Get the appropriate animation style based on the effect
  const animationStyle = (() => {
    switch (effect) {
      case "fade":
        return { opacity };
      case "zoom":
        return { scale, opacity };
      case "slide":
        return { x: xOffset, opacity };
      case "rotate":
        return { rotate: rotation, opacity };
      default:
        return { opacity };
    }
  })();

  return (
    <motion.div ref={ref} className={className} style={animationStyle}>
      {children}
    </motion.div>
  );
};
