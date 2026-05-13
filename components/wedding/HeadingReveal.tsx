"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ElementType, ReactNode, useMemo } from "react";

interface HeadingRevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const HeadingReveal = ({
  children,
  as: Component = "h2",
  className = "",
  style,
  delay = 0,
}: HeadingRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(8px)",
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
  };

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children.trim() : "";
    if (!text) return children;
    
    // Split by spaces but keep them to preserve layout
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return <span key={index}>{word}</span>;
      return (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block"
        >
          {word}
        </motion.span>
      );
    });
  }, [children, wordVariants]);

  return (
    <Component ref={ref} className={className} style={style}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
      >
        {splitText}
      </motion.span>
    </Component>
  );
};
