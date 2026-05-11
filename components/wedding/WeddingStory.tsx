'use client';

import { motion } from 'framer-motion';

const storyMoments = [
  {
    title: 'The Beginning',
    story:
      'Brought together by God\'s grace, two paths converged in faith and hope. What began as friendship bloomed into a love that feels written in eternity.',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80&fit=crop',
    side: 'left',
  },
  {
    title: 'Growing Together',
    story:
      'Through seasons of joy and growth, Melbin and Nena discovered in each other a kindred spirit — steadfast, gentle, and full of God\'s purpose.',
    image: 'https://images.unsplash.com/photo-1583939411023-14783179e581?w=800&q=80&fit=crop',
    side: 'right',
  },
  {
    title: 'Forever Begins · 31 May 2026',
    story:
      'Today they stand before God, family, and loved ones, to pledge a love that is patient, kind, and unending — as written in His word.',
    image: 'https://images.unsplash.com/photo-1606216794079-73bd3b01a7da?w=800&q=80&fit=crop',
    side: 'left',
  },
];

export default function WeddingStory() {
  return (
    <section id="story" className="w-full bg-cream py-24 md:py-36 px-6 md:px-16">
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
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
        >
          Two Lives, One Journey
        </h2>
        <h1
          className="font-serif italic text-charcoal font-light mb-6"
          style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}
        >
          Our Story
        </h1>
        <div className="w-15 h-px bg-gold mx-auto" />
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Center Line - Desktop Only */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
          style={{ backgroundColor: 'rgba(184, 149, 106, 0.3)' }}
        />

        {/* Story Cards */}
        <div className="space-y-12 md:space-y-20">
          {storyMoments.map((moment, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                moment.side === 'right' ? 'md:grid-flow-dense' : ''
              }`}
              initial={{
                opacity: 0,
                x: moment.side === 'left' ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.div
                className={`relative overflow-hidden h-64 md:h-80 group ${
                  moment.side === 'right' ? 'md:col-start-2' : ''
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className={moment.side === 'right' ? 'md:col-start-1' : ''}>
                {/* Timeline Dot */}
                <div
                  className="w-4 h-4 rounded-full bg-gold mb-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                  style={{ zIndex: 10 }}
                />

                <h3
                  className="font-display text-gold-dark uppercase text-sm mb-4"
                  style={{ letterSpacing: '0.25em' }}
                >
                  {moment.title}
                </h3>
                <p
                  className="font-serif text-text-muted leading-relaxed"
                  style={{ fontSize: '1.05rem' }}
                >
                  {moment.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
