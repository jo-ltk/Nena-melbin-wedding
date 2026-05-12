'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  offset?: number;
  scrollOffset?: ["start start" | "start end" | "end start" | "end end", "start start" | "start end" | "end start" | "end end"];
  yRange?: [string, string];
  scaleOverride?: number;
}

export default function ParallaxImage({ 
  children, 
  className = '', 
  offset = 15,
  scrollOffset = ['start end', 'end start'],
  yRange,
  scaleOverride
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: scrollOffset
  });

  // Default moves from -offset% to +offset%, or uses custom yRange
  const y = useTransform(scrollYProgress, [0, 1], yRange || [`-${offset}%`, `${offset}%`]);
  
  // Calculate minimum scale needed to avoid empty edges during translation
  // If we move up/down by offset%, we need the image to be taller by 2*offset%
  const scale = scaleOverride || (1 + (offset * 2) / 100);

  return (
    <div ref={ref} className={`overflow-hidden ${className.includes('absolute') || className.includes('fixed') ? '' : 'relative'} ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ y, scale }}
      >
        {children}
      </motion.div>
    </div>
  );
}
