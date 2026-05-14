'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Compass, ChevronRight } from 'lucide-react';
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
  return (
    <section id="venues" className="relative w-full py-10 md:py-16 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.span 
            className="font-[Cinzel] text-[10px] tracking-[0.4em] text-[#b8956a] uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Locations
          </motion.span>
          <HeadingReveal 
            as="h2"
            className="font-serif italic font-light text-[#1a1816] mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Venues
          </HeadingReveal>
          <div className="w-10 h-[1px] bg-[#b8956a]/30" />
        </div>

        {/* Mobile-Focused Swipeable Carousel / Desktop Grid */}
        <div className="relative">
          {/* Swipe Hint for Mobile */}
          <motion.div 
            className="flex lg:hidden items-center justify-center gap-2 mb-4 text-[#b8956a]/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-[Cinzel] text-[8px] tracking-[0.2em] uppercase">Swipe to explore</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight size={10} strokeWidth={1} />
            </motion.div>
          </motion.div>

          <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar lg:grid lg:grid-cols-3 lg:gap-8 gap-4 px-2">
            {VENUES.map((venue, i) => (
              <VenueCard key={i} venue={venue} delay={i * 0.1} />
            ))}
          </div>
          
          {/* Swipe Hint for Mobile */}
          <div className="flex lg:hidden justify-center gap-1.5 mt-2">
            {VENUES.map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#b8956a]/30" />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

function VenueCard({ venue, delay }: { venue: any, delay: number }) {
  return (
    <motion.div 
      className="flex-shrink-0 w-[85vw] sm:w-[350px] lg:w-full snap-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="bg-white border-[0.5px] border-[#b8956a]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
        
        {/* Map Header - More Compact */}
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
          <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#b8956a] font-[Cinzel] text-[8px] tracking-[0.2em] uppercase border-[0.5px] border-[#b8956a]/10">
            {venue.type}
          </div>
        </div>

        {/* Content - Compact & Clean */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3 text-[#b8956a]">
            <Clock size={12} />
            <span className="font-[Jost] text-[10px] tracking-widest uppercase">{venue.time}</span>
          </div>

          <h3 className="font-serif text-[22px] md:text-[26px] text-[#1a1816] leading-tight mb-2">
            {venue.name}
          </h3>
          
          <div className="flex items-start gap-2 mb-6 text-[#2a2622]/60">
            <MapPin size={12} className="mt-1 flex-shrink-0" />
            <p className="font-[Jost] text-[13px] font-light leading-relaxed">
              {venue.address}
            </p>
          </div>

          <motion.a
            href={venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#b8956a] text-white font-[Cinzel] text-[9px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#a68459]"
            whileTap={{ scale: 0.98 }}
          >
            <Compass size={12} />
            Directions
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
