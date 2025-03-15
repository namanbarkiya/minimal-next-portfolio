"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export const AnimatedLink = ({
  href,
  children,
  className = "",
  onClick,
  target,
  rel,
}: AnimatedLinkProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        className={className}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    </motion.div>
  );
};
