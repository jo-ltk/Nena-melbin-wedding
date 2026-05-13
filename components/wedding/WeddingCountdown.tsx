'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeadingReveal } from './HeadingReveal';
import confetti from 'canvas-confetti';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function WeddingCountdown() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasEnded, setHasEnded] = useState(false);
  const [hasPopped, setHasPopped] = useState(false);
  
  const handleCracker = () => {
    if (hasPopped) return;
    setHasPopped(true);
    
    // Elegant center burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#b8956a', '#d4b896', '#ffffff'],
      scalar: 1,
      zIndex: 100,
    });
  };

  useEffect(() => {
    const calculateCountdown = () => {
      // May 31, 2026, 10:30 AM IST (UTC+5:30)
      const weddingDate = new Date('2026-05-31T10:30:00+05:30').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setHasEnded(true);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center flex-1">
      <div className="relative h-[100px] md:h-[140px] flex items-center justify-center overflow-hidden w-full">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -20, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 'clamp(3.5rem, 8vw, 6rem)',
              color: 'rgba(255, 246, 230, 0.95)',
              textShadow: '0 0 30px rgba(255, 212, 120, 0.15)',
              lineHeight: 1,
            }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      
      <motion.p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(9px, 2vw, 11px)',
          letterSpacing: '0.4em',
          color: 'rgba(255, 218, 140, 0.5)',
          textTransform: 'uppercase',
          marginTop: -5
        }}
      >
        {label}
      </motion.p>
    </div>
  );

  return (
    <motion.section 
      className="relative w-full py-24 md:py-32 overflow-hidden" 
      style={{ backgroundColor: '#1a0808' }}
      onViewportEnter={handleCracker}
      viewport={{ amount: 0.5, once: true }}
    >
      {/* Background grain/texture effect */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

      <div className="max-w-5xl mx-auto px-7 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 200,
              fontSize: 10,
              letterSpacing: '0.6em',
              color: 'rgba(255, 218, 140, 0.7)',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            {hasEnded ? "The Celebration Begins" : "Counting down to the day"}
          </motion.span>
          
          {/* Ornamental Divider */}
          <div className="flex items-center gap-4 w-full max-w-[200px]">
            <div className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent to-[rgba(255,210,120,0.3)]" />
            <div className="w-1.5 h-1.5 border-[0.5px] border-[rgba(255,210,120,0.5)] rotate-45" />
            <div className="flex-1 h-[0.5px] bg-gradient-to-l from-transparent to-[rgba(255,210,120,0.3)]" />
          </div>
        </div>

        {/* Countdown Grid or Celebration Message */}
        <AnimatePresence mode="wait">
          {!hasEnded ? (
            <motion.div 
              key="countdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              className="flex justify-between items-center gap-2 md:gap-8"
            >
              <CountdownUnit value={countdown.days} label="Days" />
              <div className="h-10 w-[0.5px] bg-[rgba(255,212,120,0.15)] hidden md:block" />
              <CountdownUnit value={countdown.hours} label="Hours" />
              <div className="h-10 w-[0.5px] bg-[rgba(255,212,120,0.15)] hidden md:block" />
              <CountdownUnit value={countdown.minutes} label="Minutes" />
              <div className="h-10 w-[0.5px] bg-[rgba(255,212,120,0.15)] hidden md:block" />
              <CountdownUnit value={countdown.seconds} label="Seconds" />
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center text-center"
            >
              <HeadingReveal 
                as="h2"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  color: 'rgba(255, 246, 230, 0.95)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.2
                }}
              >
                It's Wedding Day!
              </HeadingReveal>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: 12,
                  letterSpacing: '0.4em',
                  color: 'rgba(255, 218, 140, 0.6)',
                  textTransform: 'uppercase',
                  marginTop: 16
                }}
              >
                Melbin & Nena • May 31, 2026
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
