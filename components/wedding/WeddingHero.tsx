'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const HERO_IMAGES = ['/JIJ01421.jpg', '/JIJ01996.jpg', '/JIJ01918.jpg', '/JIJ00992.jpg'];

export default function WeddingHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100svh', minHeight: 640 }}
    >
      {/* ── Parallax image ── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imgY, scale: 1.08 }}
      >
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Nena and Melbin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover object-top"
            style={{ filter: 'brightness(0.95) saturate(1.15) contrast(1.05)' }}
          />
        </AnimatePresence>
      </motion.div>

      {/* ── Overlay: bottom fade ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.2) 55%, transparent 100%)',
        }}
      />

      {/* ── Hero text ── */}
      <motion.div
        className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-16 px-7 text-center"
        style={{ y: textY, opacity }}
      >
        {/* eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(10px, 2.5vw, 12px)',
            letterSpacing: '0.5em',
            color: 'rgba(255,218,140,0.9)',
            textTransform: 'uppercase',
            marginBottom: 'clamp(16px, 4vw, 24px)',
            textShadow: '0 2px 15px rgba(0,0,0,0.4)',
          }}
        >
          Together with their families
        </motion.p>

        {/* names - HORIZONTAL */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(38px, 12vw, 88px)',
            lineHeight: 1.0,
            color: 'rgba(255,246,230,1)',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35em',
            textShadow: '0 4px 30px rgba(0,0,0,0.35), 0 0 50px rgba(255,212,120,0.2)',
            whiteSpace: 'nowrap',
          }}
        >
          <span>Nena</span>
          <span style={{ 
            color: 'rgba(255,212,120,0.7)', 
            fontSize: '0.42em', 
            fontStyle: 'normal', 
            letterSpacing: '0.05em',
          }}>
            &amp;
          </span>
          <span>Melbin</span>
        </motion.h1>

        {/* ornamental divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 my-8"
          style={{ width: 'clamp(140px, 40vw, 240px)' }}
        >
          <div style={{ flex: 1, height: '0.5px', background: 'rgba(255,210,120,0.4)' }} />
          <div style={{ width: 4, height: 4, background: 'rgba(255,210,120,0.6)', transform: 'rotate(45deg)' }} />
          <div style={{ flex: 1, height: '0.5px', background: 'rgba(255,210,120,0.4)' }} />
        </motion.div>

        {/* date + venue */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(11px, 3vw, 13px)',
              letterSpacing: '0.35em',
              color: 'rgba(255,238,200,0.85)',
              textTransform: 'uppercase',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            15 · 06 · 2025
          </p>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(9px, 2.5vw, 11px)',
              letterSpacing: '0.25em',
              color: 'rgba(255,238,200,0.55)',
              textTransform: 'uppercase',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Thrissur, Kerala
          </p>
        </motion.div>
      </motion.div>

      {/* Google Fonts loader — add to <head> in your layout instead */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
      `}</style>
    </section>
  );
}