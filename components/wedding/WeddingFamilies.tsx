'use client';

import { motion } from 'framer-motion';

export default function WeddingFamilies() {
  return (
    <section className="w-full bg-parchment py-20 md:py-28 px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="font-display text-gold-dark uppercase mb-4"
          style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
        >
          Blessed Families
        </h2>
        <h1
          className="font-serif italic text-charcoal font-light mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          With the Blessings of Our Parents
        </h1>
        <div className="w-12 h-px bg-gold mx-auto" />
      </motion.div>

      {/* Family Cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-4">
          {/* Groom's Family */}
          <motion.div
            className="bg-opacity-60 border border-opacity-25 border-gold p-10"
            style={{
              backgroundColor: 'rgba(250, 246, 240, 0.6)',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <h3
              className="font-display text-gold-dark uppercase text-xs mb-4"
              style={{ letterSpacing: '0.25em' }}
            >
              Groom
            </h3>

            {/* Top Border */}
            <div className="w-10 h-0.5 bg-gold mb-6" />

            {/* Name */}
            <p className="font-serif text-charcoal text-2xl font-normal mb-3">
              Melbin C Varghese
            </p>

            {/* Subtitle */}
            <p className="font-sans text-text-muted text-sm mb-2">
              S/o Mr. Varghese C O & Mrs. Sarakutty Varghese
            </p>

            {/* Address */}
            <p className="font-sans text-text-muted text-sm italic">
              Chathanayathu House, Ramamangalam, Muvattupuzha
            </p>

            {/* Decorative Floral */}
            <div className="mt-6 w-15 h-auto">
              <svg viewBox="0 0 100 50" fill="none" stroke="var(--gold)" strokeWidth="0.8">
                <path d="M20,40 Q30,20 50,25 Q70,20 80,40" />
                <path d="M35,40 Q40,30 50,35 Q60,30 65,40" />
              </svg>
            </div>
          </motion.div>

          {/* Bride's Family */}
          <motion.div
            className="bg-opacity-60 border border-opacity-25 border-gold p-10 relative"
            style={{
              backgroundColor: 'rgba(250, 246, 240, 0.6)',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Vertical Divider - Desktop Only */}
            <div
              className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px"
              style={{
                backgroundColor: 'rgba(184, 149, 106, 0.3)',
                transform: 'translateX(-50%)',
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  color: 'var(--gold)',
                  fontSize: '1rem',
                }}
              >
                ◆
              </div>
            </div>

            {/* Label */}
            <h3
              className="font-display text-gold-dark uppercase text-xs mb-4"
              style={{ letterSpacing: '0.25em' }}
            >
              Bride
            </h3>

            {/* Top Border */}
            <div className="w-10 h-0.5 bg-gold mb-6" />

            {/* Name */}
            <p className="font-serif text-charcoal text-2xl font-normal mb-3">
              Dr. Nena Mathew
            </p>

            {/* Subtitle */}
            <p className="font-sans text-text-muted text-sm mb-2">
              D/o Mr. Mathew Varghese & Mrs. Elsamma Mathew
            </p>

            {/* Address */}
            <p className="font-sans text-text-muted text-sm italic">
              Valiyaveettil House, Punnavely, Mallapally
            </p>

            {/* Decorative Floral */}
            <div className="mt-6 w-15 h-auto">
              <svg viewBox="0 0 100 50" fill="none" stroke="var(--gold)" strokeWidth="0.8">
                <path d="M20,40 Q30,20 50,25 Q70,20 80,40" />
                <path d="M35,40 Q40,30 50,35 Q60,30 65,40" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
