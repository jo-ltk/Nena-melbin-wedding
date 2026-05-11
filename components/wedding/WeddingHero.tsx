'use client';

import { motion } from 'framer-motion';

export default function WeddingHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full bg-cream">
      {/* Header with Navigation */}
      <motion.header
        className="relative z-20 flex items-center justify-between px-8 py-6 border-b border-charcoal border-opacity-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="font-display text-sm uppercase tracking-widest text-charcoal">
          Ceremony
        </div>
        <nav className="flex items-center gap-8">
          <a href="#schedule" className="font-sans text-xs uppercase tracking-wide text-charcoal hover:text-gold transition-colors">
            Schedule
          </a>
          <a href="#venue" className="font-sans text-xs uppercase tracking-wide text-charcoal hover:text-gold transition-colors">
            Venue
          </a>
          <a href="#contact" className="font-sans text-xs uppercase tracking-wide text-charcoal hover:text-gold transition-colors">
            Contact
          </a>
        </nav>
      </motion.header>

      {/* Text Content Section */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Names */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-charcoal text-center leading-tight"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Nena & Melbin
        </motion.h1>

        {/* Wedding Date */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-xs uppercase tracking-widest text-charcoal text-opacity-70 mb-12"
          style={{ letterSpacing: '0.15em' }}
        >
          May 31, 2026
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative w-full h-96 overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="https://images.unsplash.com/photo-1606216794079-73bd3b01a7da?w=1920&q=80&fit=crop"
          alt="Nena & Melbin"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="relative z-10 flex justify-center items-center gap-2 py-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-sans text-xs uppercase tracking-widest text-charcoal text-opacity-50">
          Scroll to explore
        </span>
        <div className="w-px h-4 bg-charcoal bg-opacity-30" />
      </motion.div>
    </section>
  );
}
