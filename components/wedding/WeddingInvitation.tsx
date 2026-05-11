'use client';

import { motion } from 'framer-motion';

export default function WeddingInvitation() {
  return (
    <section className="w-full bg-ivory py-24 md:py-32 px-6">
      <motion.div
        className="max-w-3xl mx-auto flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative SVG - Top */}
        <motion.div
          className="w-20 h-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="var(--gold)" strokeWidth="0.5">
            <path d="M50,10 Q70,20 60,40 Q80,35 90,50 Q80,65 60,60 Q70,80 50,90 Q30,80 40,60 Q20,65 10,50 Q20,35 40,40 Q30,20 50,10" />
          </svg>
        </motion.div>

        {/* Invitation Text */}
        <motion.p
          className="font-serif italic text-charcoal opacity-85 leading-relaxed mb-8"
          style={{
            fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          With the blessing of the Almighty God and our parents, we request the honour of your presence
          as we join hands in the Holy Sacrament of Matrimony.
        </motion.p>

        {/* Decorative SVG - Bottom */}
        <motion.div
          className="w-20 h-auto mb-8 transform scale-x-[-1]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="var(--gold)" strokeWidth="0.5">
            <path d="M50,10 Q70,20 60,40 Q80,35 90,50 Q80,65 60,60 Q70,80 50,90 Q30,80 40,60 Q20,65 10,50 Q20,35 40,40 Q30,20 50,10" />
          </svg>
        </motion.div>

        {/* Bible Verse */}
        <motion.p
          className="font-serif italic text-text-muted"
          style={{ fontSize: '1.1rem' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          May your constant love be with us, Lord, as we put our hope in you. — Psalm 33:22
        </motion.p>
      </motion.div>
    </section>
  );
}
