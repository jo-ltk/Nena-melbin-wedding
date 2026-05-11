'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function WeddingVenue() {
  return (
    <section className="w-full bg-cream py-20 md:py-28 px-6">
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
          Find Your Way
        </h2>
        <h1
          className="font-serif italic text-charcoal font-light"
          style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          Venues
        </h1>
      </motion.div>

      {/* Venue Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Ceremony Card */}
        <motion.div
          className="border border-opacity-25 border-gold p-8"
          style={{ backgroundColor: 'rgba(74, 20, 40, 0.02)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3
            className="font-display text-gold-dark uppercase text-sm mb-6"
            style={{ letterSpacing: '0.25em' }}
          >
            Ceremony · 10:30 AM
          </h3>

          <h2
            className="font-serif text-charcoal mb-2"
            style={{ fontSize: '1.4rem' }}
          >
            St. Athanasius Jacobite Syrian Cathedral
          </h2>

          <p className="font-sans text-text-muted text-sm mb-6">
            Puthenkurish, Ernakulam, Kerala
          </p>

          {/* Map Placeholder */}
          <div
            className="w-full h-48 bg-parchment border border-opacity-15 border-gold mb-6 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin size={32} className="text-gold-dark mx-auto mb-2 opacity-50" />
              <p className="font-display text-xs text-gold-dark opacity-50" style={{ letterSpacing: '0.2em' }}>
                Map View
              </p>
            </div>
          </div>

          {/* Directions Button */}
          <motion.a
            href="https://maps.google.com/maps/search/St.+Athanasius+Jacobite+Syrian+Cathedral+Puthenkurish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold-dark text-gold-dark px-6 py-3 font-display uppercase text-xs w-full text-center"
            style={{ letterSpacing: '0.2em' }}
            whileHover={{
              backgroundColor: 'var(--burgundy)',
              color: 'var(--gold-light)',
              borderColor: 'var(--burgundy)',
            }}
            transition={{ duration: 0.3 }}
          >
            View on Maps
          </motion.a>
        </motion.div>

        {/* Reception Card */}
        <motion.div
          className="border border-opacity-25 border-gold p-8"
          style={{ backgroundColor: 'rgba(74, 20, 40, 0.02)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3
            className="font-display text-gold-dark uppercase text-sm mb-6"
            style={{ letterSpacing: '0.25em' }}
          >
            Reception · 12:30 PM
          </h3>

          <h2
            className="font-serif text-charcoal mb-2"
            style={{ fontSize: '1.4rem' }}
          >
            Njattumkalayil Hilltop Event Centre
          </h2>

          <p className="font-sans text-text-muted text-sm mb-6">
            Kolencherry, Kerala
          </p>

          {/* Map Placeholder */}
          <div
            className="w-full h-48 bg-parchment border border-opacity-15 border-gold mb-6 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin size={32} className="text-gold-dark mx-auto mb-2 opacity-50" />
              <p className="font-display text-xs text-gold-dark opacity-50" style={{ letterSpacing: '0.2em' }}>
                Map View
              </p>
            </div>
          </div>

          {/* Directions Button */}
          <motion.a
            href="https://maps.google.com/maps/search/Njattumkalayil+Hilltop+Event+Centre+Kolencherry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold-dark text-gold-dark px-6 py-3 font-display uppercase text-xs w-full text-center"
            style={{ letterSpacing: '0.2em' }}
            whileHover={{
              backgroundColor: 'var(--burgundy)',
              color: 'var(--gold-light)',
              borderColor: 'var(--burgundy)',
            }}
            transition={{ duration: 0.3 }}
          >
            View on Maps
          </motion.a>
        </motion.div>
      </div>

      {/* Travel Info */}
      <motion.div
        className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-opacity-15 border-gold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="font-serif text-charcoal text-lg mb-4">
          A celebration of love uniting our families across Kerala
        </p>
        <p className="font-sans text-text-muted text-sm">
          We look forward to celebrating with you at both venues. Please allow travel time between locations.
        </p>
      </motion.div>
    </section>
  );
}
