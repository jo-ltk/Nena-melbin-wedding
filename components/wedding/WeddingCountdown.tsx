'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
  const [prevValues, setPrevValues] = useState<CountdownState>(countdown);
  const countdownRef = useRef(countdown);

  useEffect(() => {
    countdownRef.current = countdown;
  }, [countdown]);

  useEffect(() => {
    const calculateCountdown = () => {
      // May 31, 2026, 10:30 AM IST (UTC+5:30)
      const weddingDate = new Date('2026-05-31T10:30:00+05:30').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setPrevValues(countdownRef.current);
        setCountdown({ days, hours, minutes, seconds });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => {
    const hasChanged = value !== prevValues[label.toLowerCase() as keyof CountdownState];

    return (
      <motion.div
        className="flex flex-col items-center"
        animate={hasChanged ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <div
          className="bg-opacity-6 border border-opacity-20 border-gold p-8 md:p-6 lg:p-8 text-center"
          style={{
            backgroundColor: 'rgba(250, 246, 240, 0.06)',
            borderColor: 'rgba(184, 149, 106, 0.2)',
          }}
        >
          <div
            className="font-serif font-light text-gold-light"
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            }}
          >
            {String(value).padStart(2, '0')}
          </div>
          <div
            className="font-display uppercase text-opacity-60 text-gold-light mt-3"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.25em',
            }}
          >
            {label}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="w-full bg-burgundy py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-display uppercase text-gold mb-4"
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
            }}
          >
            Counting Down To
          </h2>
          <div className="w-10 h-px bg-gold mx-auto" />
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <CountdownUnit value={countdown.days} label="Days" />
          <CountdownUnit value={countdown.hours} label="Hours" />
          <CountdownUnit value={countdown.minutes} label="Minutes" />
          <CountdownUnit value={countdown.seconds} label="Seconds" />
        </div>

        {/* Bottom Divider */}
        <div
          className="w-full h-px"
          style={{
            backgroundColor: 'rgba(184, 149, 106, 0.15)',
          }}
        />
      </div>
    </section>
  );
}
