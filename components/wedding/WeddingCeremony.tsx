'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, MapPinIcon } from 'lucide-react';

export default function WeddingCeremony() {
  return (
    <section id="ceremony" className="w-full bg-cream">
      <div className="grid md:grid-cols-7 gap-0 min-h-screen">
        {/* Left Column - Image */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 md:h-full overflow-hidden group">
            <motion.img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80&fit=crop"
              alt="Ceremony Venue"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 2 }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(to top, rgba(74,20,40,0.6) 0%, transparent 100%)',
              }}
            />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          className="md:col-span-4 bg-cream p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-px h-8 bg-gold" />
            <h2
              className="font-display text-gold-dark uppercase"
              style={{ fontSize: '0.6rem', letterSpacing: '0.28em' }}
            >
              The Holy Sacrament
            </h2>
          </div>

          {/* Section Number */}
          <p
            className="font-display text-text-muted uppercase text-sm mb-4"
            style={{ letterSpacing: '0.2em', fontSize: '0.55rem' }}
          >
            01 / 02
          </p>

          {/* Headline */}
          <h3
            className="font-serif italic text-charcoal font-light mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            }}
          >
            The Ceremony
          </h3>

          {/* Gold Line */}
          <div className="w-12 h-px bg-gold mb-8" />

          {/* Details */}
          <div className="space-y-6 mb-12">
            <div className="border-b border-opacity-20 border-gold pb-6">
              <p
                className="font-display text-gold-dark uppercase text-xs mb-2"
                style={{ letterSpacing: '0.25em' }}
              >
                Date
              </p>
              <p className="font-serif text-charcoal text-lg">Sunday, 31 May 2026</p>
            </div>

            <div className="border-b border-opacity-20 border-gold pb-6">
              <p
                className="font-display text-gold-dark uppercase text-xs mb-2"
                style={{ letterSpacing: '0.25em' }}
              >
                Time
              </p>
              <p className="font-serif text-charcoal text-lg">10:30 AM</p>
            </div>

            <div className="border-b border-opacity-20 border-gold pb-6">
              <p
                className="font-display text-gold-dark uppercase text-xs mb-2"
                style={{ letterSpacing: '0.25em' }}
              >
                Venue
              </p>
              <p className="font-serif text-charcoal text-lg">St. Athanasius Jacobite Syrian Cathedral</p>
            </div>

            <div>
              <p
                className="font-display text-gold-dark uppercase text-xs mb-2"
                style={{ letterSpacing: '0.25em' }}
              >
                Location
              </p>
              <p className="font-serif text-charcoal text-lg">Puthenkurish, Ernakulam, Kerala</p>
            </div>
          </div>

          {/* Family Note */}
          <p className="font-sans text-text-muted italic text-sm mb-8 leading-relaxed">
            Son of Mr. Varghese C O & Mrs. Sarakutty Varghese
            <br />
            Chathanayathu House, Ramamangalam, Muvattupuzha
          </p>

          {/* Button */}
          <motion.a
            href="https://maps.google.com/maps/search/St.+Athanasius+Jacobite+Syrian+Cathedral+Puthenkurish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold-dark text-gold-dark px-8 py-3 font-display uppercase text-sm"
            style={{ letterSpacing: '0.2em' }}
            whileHover={{ backgroundColor: 'var(--burgundy)', color: 'var(--gold-light)', borderColor: 'var(--burgundy)' }}
            transition={{ duration: 0.3 }}
          >
            Get Directions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
