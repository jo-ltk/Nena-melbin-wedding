'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  'https://images.unsplash.com/photo-1606216794079-73bd3b01a7da?w=700&q=80&fit=crop',
  'https://images.unsplash.com/photo-1583939411023-14783179e581?w=700&q=80&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80&fit=crop',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?w=700&q=80&fit=crop',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=700&q=80&fit=crop',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80&fit=crop',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=700&q=80&fit=crop',
  'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=700&q=80&fit=crop',
];

export default function WeddingGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="w-full bg-charcoal py-20 md:py-28 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="font-display text-gold uppercase mb-4"
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
        >
          A Glimpse of Us
        </h2>
        <h1
          className="font-serif italic text-cream font-light"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          Gallery
        </h1>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="columns-1 md:columns-2 lg:columns-3 gap-1 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="mb-1 cursor-pointer overflow-hidden group relative aspect-square"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => setSelectedIndex(index)}
          >
            <motion.img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2 }}
            />
            <motion.div
              className="absolute inset-0 bg-gold"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-92 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
              onClick={() => setSelectedIndex(null)}
              whileHover={{ scale: 1.1 }}
            >
              <X size={32} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex]}
                alt="Gallery"
                className="w-full h-auto"
              />

              {/* Navigation Arrows */}
              <motion.button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 text-gold hover:text-gold-light transition-colors"
                onClick={handlePrevious}
                whileHover={{ scale: 1.2 }}
              >
                <ChevronLeft size={40} />
              </motion.button>

              <motion.button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 text-gold hover:text-gold-light transition-colors"
                onClick={handleNext}
                whileHover={{ scale: 1.2 }}
              >
                <ChevronRight size={40} />
              </motion.button>

              {/* Counter */}
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-cream font-display text-sm"
                style={{ letterSpacing: '0.2em' }}
              >
                {selectedIndex + 1} / {galleryImages.length}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
