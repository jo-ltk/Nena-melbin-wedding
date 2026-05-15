'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WeddingLoader() {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsHiding(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-burgundy z-9999"
      animate={{ opacity: isHiding ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ pointerEvents: isHiding ? 'none' : 'auto' } as any}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Monogram */}
        <motion.h1
          className="font-serif italic text-gold-light tracking-widest"
          style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', letterSpacing: '0.3em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          N & M
        </motion.h1>

        {/* Vertical Line */}
        <motion.div
          className="w-px bg-gold-light"
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
        />

        {/* Date Label */}
        <motion.div
          className="font-display text-gold uppercase tracking-widest"
          style={{ fontSize: '0.65rem', letterSpacing: '0.35em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          31 · May · 2026
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
