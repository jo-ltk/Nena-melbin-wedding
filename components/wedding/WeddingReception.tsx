'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeadingReveal } from './HeadingReveal';

export default function WeddingReception() {
  return (
    <section id="reception" className="w-full bg-burgundy">
      <div className="grid md:grid-cols-7 gap-0 min-h-screen">
        {/* Left Column - Content */}
        <motion.div
          className="md:col-span-4 bg-burgundy p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Number */}
          <p
            className="font-display text-gold-light uppercase text-sm mb-4 opacity-50"
            style={{ letterSpacing: '0.2em', fontSize: '0.55rem' }}
          >
            02 / 02
          </p>

          {/* Eyebrow */}
          <h2
            className="font-display text-gold uppercase mb-4"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em' }}
          >
            The Celebration Continues
          </h2>

          {/* Headline */}
          <HeadingReveal
            as="h3"
            className="font-serif italic text-cream font-light mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            }}
          >
            Reception
          </HeadingReveal>

          {/* Gold Line */}
          <div
            className="w-12 h-px mb-8"
            style={{ backgroundColor: 'rgba(184, 149, 106, 0.5)' }}
          />

          {/* Details */}
          <div className="space-y-6 mb-12">
            <div
              className="border-b pb-6"
              style={{ borderColor: 'rgba(212, 184, 150, 0.15)' }}
            >
              <p
                className="font-display text-gold uppercase text-xs mb-2"
                style={{ letterSpacing: '0.25em' }}
              >
                Time
              </p>
              <p className="font-serif text-cream text-lg">12:30 PM onwards</p>
            </div>

            <div
              className="border-b pb-6"
              style={{ borderColor: 'rgba(212, 184, 150, 0.15)' }}
            >
              <p
                className="font-display text-gold uppercase text-xs mb-2"
                style={{ letterSpacing: '0.25em' }}
              >
                Venue
              </p>
              <p className="font-serif text-cream text-lg">Njattumkalayil Hilltop Event Centre</p>
            </div>

            <div>
              <p
                className="font-display text-gold uppercase text-xs mb-2"
                style={{ letterSpacing: '0.25em' }}
              >
                Location
              </p>
              <p className="font-serif text-cream text-lg">Kolencherry, Kerala</p>
            </div>
          </div>

          {/* Family Note */}
          <p
            className="font-sans text-cream italic text-sm mb-8 leading-relaxed opacity-50"
            style={{ color: 'rgba(250, 246, 240, 0.5)' }}
          >
            Daughter of Mr. Mathew Varghese & Mrs. Elsamma Mathew
            <br />
            Valiyaveettil House, Punnavely, Mallapally
          </p>

          {/* Button */}
          <motion.a
            href="https://maps.google.com/maps/search/Njattumkalayil+Hilltop+Event+Centre+Kolencherry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold-light text-gold-light px-8 py-3 font-display uppercase text-sm"
            style={{ letterSpacing: '0.2em' }}
            whileHover={{
              backgroundColor: 'var(--gold)',
              color: 'var(--burgundy)',
              borderColor: 'var(--gold)',
            }}
            transition={{ duration: 0.3 }}
          >
            Get Directions
          </motion.a>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="md:col-span-3 order-first md:order-last"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 md:h-full overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&fit=crop"
              alt="Reception Venue"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              quality={80}
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
