'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Compass } from 'lucide-react';
import { HeadingReveal } from './HeadingReveal';

const VENUES = [
  {
    type: 'The Ceremony',
    time: '10:30 AM',
    name: 'St. Athanasius Jacobite Syrian Cathedral',
    address: 'Puthenkurish, Kolencherry, Kerala',
    mapUrl: 'https://maps.google.com/maps?q=St.+Athanasius+Jacobite+Syrian+Cathedral+Puthenkurish',
    embedUrl: 'https://maps.google.com/maps?q=St.+Athanasius+Jacobite+Syrian+Cathedral+Puthenkurish&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    type: 'The Reception',
    time: '12:30 PM',
    name: 'Njattumkalayil Hilltop Event Center',
    address: 'Kolencherry, Kerala',
    mapUrl: 'https://maps.google.com/maps?q=Njattumkalayil+Hilltop+Event+Centre+Kolencherry',
    embedUrl: 'https://maps.google.com/maps?q=Njattumkalayil+Hilltop+Event+Centre+Kolencherry&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];

export default function WeddingVenue() {
  return (
    <>
      <section id="venues" className="relative w-full pt-8 pb-12 md:pt-16 md:pb-20 bg-[#faf9f6] overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

        <div className="max-w-6xl mx-auto px-7 relative z-10">
          
          {/* Header Section */}
          <motion.div 
            className="flex flex-col items-center text-center mb-10 md:mb-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <span className="font-display text-[10px] tracking-[0.5em] text-[#b8956a] uppercase mb-4">
              Find Your Way
            </span>
            <HeadingReveal 
              as="h2"
              className="font-serif italic font-light text-[#1a1816] leading-tight mb-8"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Venues
            </HeadingReveal>
            <div className="flex items-center gap-4 w-24">
              <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
              <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
              <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
            </div>
          </motion.div>

          {/* Venue Cards - Swipeable on mobile, Grid on desktop */}
          <div className="relative">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16">
              {VENUES.map((venue, i) => (
                <VenueCard key={i} venue={venue} delay={i * 0.2} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </>
  );
}

function VenueCard({ venue, delay }: { venue: any, delay: number }) {
  return (
    <motion.div 
      className="group relative flex flex-col w-full bg-white/60 backdrop-blur-md border-[0.5px] border-[#b8956a]/15 shadow-xl shadow-[#b8956a]/5 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      {/* Interactive Map Header */}
      <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-[#eee] border-b-[0.5px] border-[#b8956a]/10">
        <iframe 
          title={venue.name}
          src={venue.embedUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[0.4] contrast-[1.1] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Type Overlay */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 pointer-events-none">
          <span className="px-3 py-1 md:px-4 md:py-1.5 bg-white/95 backdrop-blur-md text-[#b8956a] font-display text-[8px] md:text-[9px] tracking-[0.3em] uppercase rounded-full shadow-sm border-[0.5px] border-[#b8956a]/10">
            {venue.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-12 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4 md:mb-6 text-[#b8956a]">
          <Clock size={12} strokeWidth={1.5} />
          <span className="font-display text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium">{venue.time}</span>
        </div>

        <HeadingReveal 
          as="h3" 
          className="font-serif text-[24px] md:text-[34px] text-[#1a1816] leading-tight mb-3 md:mb-4 group-hover:text-[#b8956a] transition-colors duration-500"
        >
          {venue.name}
        </HeadingReveal>
        
        <div className="flex items-start gap-3 mb-8 md:mb-10 text-[#2a2622]/60">
          <MapPin size={12} strokeWidth={1.5} className="mt-1 flex-shrink-0" />
          <p className="font-serif text-[15px] md:text-[17px] leading-relaxed">
            {venue.address}
          </p>
        </div>

        <div className="mt-auto">
          <motion.a
            href={venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center w-full py-3 md:py-4 overflow-hidden border-[0.5px] border-[#b8956a]/30 group/btn transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-[#b8956a] transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
            <div className="relative flex items-center gap-3 text-[#b8956a] group-hover/btn:text-white transition-colors duration-500">
              <Compass size={13} strokeWidth={1.5} className="group-hover/btn:rotate-45 transition-transform duration-700" />
              <span className="font-display text-[9px] md:text-[10px] tracking-[0.4em] uppercase">
                Directions
              </span>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#b8956a]/40 to-transparent" />
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#b8956a]/40 to-transparent" />
      </div>
    </motion.div>
  );
}
