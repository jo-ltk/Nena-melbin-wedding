'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Compass } from 'lucide-react';
import { useState } from 'react';
import { HeadingReveal } from './HeadingReveal';

const VENUES = [
  {
    type: 'Engagement',
    time: '11:30 AM',
    name: 'Eden Garden Convention Centre',
    address: 'Mallappally, Pathanamthitta',
    mapUrl: 'https://maps.google.com/maps?q=Eden+Garden+Convention+Centre+Mallappally',
    embedUrl: 'https://maps.google.com/maps?q=Eden+Garden+Convention+Centre+Mallappally&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    type: 'Ceremony',
    time: '10:30 AM',
    name: 'St. Athanasius Jacobite Syrian Cathedral',
    address: 'Puthenkurish, Kolencherry',
    mapUrl: 'https://maps.google.com/maps?q=St.+Athanasius+Jacobite+Syrian+Cathedral+Puthenkurish',
    embedUrl: 'https://maps.google.com/maps?q=St.+Athanasius+Jacobite+Syrian+Cathedral+Puthenkurish&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    type: 'Reception',
    time: '12:30 PM',
    name: 'Njattumkalayil Hilltop Center',
    address: 'Kolencherry, Kerala',
    mapUrl: 'https://maps.google.com/maps?q=Njattumkalayil+Hilltop+Event+Centre+Kolencherry',
    embedUrl: 'https://maps.google.com/maps?q=Njattumkalayil+Hilltop+Event+Centre+Kolencherry&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];

export default function WeddingVenue() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="venues" className="relative w-full py-12 md:py-20 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.span 
            className="font-sans text-[12px] tracking-[0.5em] text-[#b8956a] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Locations
          </motion.span>
          <HeadingReveal 
            as="h2"
            className="font-serif italic font-light text-[#1a1816] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Venues
          </HeadingReveal>
          <div className="flex items-center gap-4 w-24">
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
            <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex lg:hidden justify-center mb-10 border-b border-[#b8956a]/10">
          {VENUES.map((venue, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 pb-4 font-sans text-[11px] tracking-[0.2em] uppercase transition-all duration-500 relative ${
                activeTab === i ? 'text-[#b8956a] font-bold' : 'text-[#b8956a]/40'
              }`}
            >
              {venue.type}
              {activeTab === i && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b8956a]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* Mobile View (Single Animated Card) */}
          <div className="lg:hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <VenueCard venue={VENUES[activeTab]} delay={0} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-10">
            {VENUES.map((venue, i) => (
              <VenueCard key={i} venue={venue} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VenueCard({ venue, delay }: { venue: any, delay: number }) {
  return (
    <motion.div 
      className="w-full group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    >
      <div className="bg-[#fdfcfb] border-[0.5px] border-[#b8956a]/15 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 rounded-lg">
        
        {/* Map Header */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#eee]">
          <iframe 
            title={venue.name}
            src={venue.embedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            className="grayscale-[0.5] contrast-[1.1] opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <div className="px-3 py-1 bg-[#b8956a]/5 border-[0.5px] border-[#b8956a]/20 text-[#b8956a] font-sans text-[10px] tracking-[0.2em] uppercase rounded-sm">
              {venue.type}
            </div>
            <div className="flex items-center gap-2 text-[#b8956a]">
              <Clock size={14} strokeWidth={1.5} />
              <span className="font-sans text-[12px] tracking-widest uppercase font-bold">{venue.time}</span>
            </div>
          </div>

          <h3 className="font-serif text-[26px] md:text-[32px] text-[#1a1816] leading-tight mb-4 font-light italic">
            {venue.name}
          </h3>
          
          <div className="flex items-start gap-3 mb-8 text-[#2a2622]/70">
            <MapPin size={14} className="mt-1 flex-shrink-0 text-[#b8956a]" />
            <p className="font-sans text-[14px] md:text-[16px] font-light leading-relaxed">
              {venue.address}
            </p>
          </div>

          <motion.a
            href={venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#b8956a] text-white font-sans text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#a68459] shadow-lg shadow-[#b8956a]/10"
            whileTap={{ scale: 0.98 }}
          >
            <Compass size={14} strokeWidth={1.5} />
            Directions
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
