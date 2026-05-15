'use client';

import { motion, useInView } from 'framer-motion';
import { Clock, MapPin, Gem, Flame, Church, PartyPopper } from 'lucide-react';
import { useRef, cloneElement, ReactElement } from 'react';
import { HeadingReveal } from './HeadingReveal';

const EVENTS = [
  {
    date: 'MAY 28, 2026',
    title: 'The Engagement',
    description: 'Melbin and Nena in the presence of their families, begins the sacred chapter together.',
    time: '11:30 AM',
    venue: 'Eden Garden Convention Centre',
    location: 'Mallappally, Kerala',
    type: 'ENGAGEMENT',
    icon: <Gem size={24} strokeWidth={1.5} />,
    color: '#0d9488', // Teal
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Eden+Garden+Convention+Centre+Mallappally+Kerala'
  },
  {
    date: 'MAY 29, 2026',
    title: 'Eve of the Wedding',
    description: 'An evening of prayer, music and togetherness at groom\'s house.',
    time: '6:30 PM',
    venue: "Groom's Home",
    location: 'Ramamangalam, Kerala',
    type: 'FAMILY EVENT',
    icon: <Flame size={24} strokeWidth={1.5} />,
    color: '#f97316', // Orange
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Ramamangalam+Kerala'
  },
  {
    date: 'MAY 31, 2026',
    title: 'The Wedding Ceremony',
    description: 'Melbin & Nena make their covenant before God at the beautiful St. Athanasius Jacobite Syrian Cathedral, Puthenkurish — surrounded by family, faith, and love.',
    time: '10:30 AM',
    venue: 'St. Athanasius Jacobite Syrian Cathedral',
    location: 'Puthenkurish, Kolencherry',
    type: 'MAIN CEREMONY',
    icon: <Church size={24} strokeWidth={1.5} />,
    color: '#4338ca', // Indigo
    mapLink: 'https://www.google.com/maps/search/?api=1&query=St.+Athanasius+Jacobite+Syrian+Cathedral+Puthenkurish'
  },
  {
    date: 'MAY 31, 2026',
    title: 'Wedding Reception',
    description: 'A joyful celebration with feasting, laughter, and blessings from our dearest people.',
    time: '12:30 PM',
    venue: 'Njattumkalayil Hilltop Event Center',
    location: 'Kolencherry, Kerala',
    type: 'CELEBRATION',
    icon: <PartyPopper size={24} strokeWidth={1.5} />,
    color: '#db2777', // Pink/Magenta
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Njattumkalayil+Hilltop+Event+Center+Kolencherry+Kerala'
  },
];

function TimelineEvent({ event, index, isLast }: { event: typeof EVENTS[0]; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="relative flex flex-col items-center pb-12 md:pb-20 w-full">

      {/* ── Icon Circle ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-center z-20 mb-12 md:mb-20"
      >
        {/* Pulse ring */}
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-6 h-6 rounded-full"
          style={{ backgroundColor: event.color }}
        />
        {/* Icon circle */}
        <div 
          className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border-[1px] shadow-[0_4px_30px_rgba(0,0,0,0.12)] flex items-center justify-center"
          style={{ borderColor: `${event.color}40`, color: event.color }}
        >
          {/* Bigger icon */}
          {cloneElement(event.icon as ReactElement<any>, { size: 28, strokeWidth: 1.2 })}
        </div>
      </motion.div>

      {/* ── Content Card ── */}
      <motion.div
        className="w-full max-w-5xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative group p-8 md:p-14 bg-[#fdfcfb] shadow-[0_8px_50px_rgba(184,149,106,0.1)] border-[0.5px] border-[#b8956a]/15 hover:shadow-[0_15px_70px_rgba(184,149,106,0.18)] transition-all duration-700 hover:border-[#b8956a]/40 rounded-2xl text-center">

          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-[0.5px] border-l-[0.5px] border-[#b8956a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-[0.5px] border-r-[0.5px] border-[#b8956a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top row: badge + date */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <span className="inline-block px-6 py-2.5 bg-[#b8956a]/[0.08] border-[0.5px] border-[#b8956a]/30 font-sans text-[13px] md:text-[16px] tracking-[0.4em] text-[#b8956a] uppercase font-bold">
              {event.type}
            </span>
            <span className="font-sans text-[14px] md:text-[18px] tracking-[0.5em] text-[#b8956a]/50 uppercase font-medium">
              {event.date}
            </span>
          </div>

          {/* Title */}
          <HeadingReveal
            as="h3"
            className="font-serif italic font-light text-[#1a1816] leading-tight mb-8"
            style={{ fontSize: 'clamp(2.6rem, 8vw, 4.8rem)' }}
          >
            {event.title}
          </HeadingReveal>

          {/* Description */}
          <p className="font-sans text-[19px] md:text-[26px] leading-relaxed text-[#1a1816]/90 mb-10 max-w-[850px] mx-auto font-light">
            {event.description}
          </p>

          {/* Time & Venue row */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-[#b8956a]">
              <Clock size={18} strokeWidth={1.5} />
              <span className="font-sans text-[15px] md:text-[18px] tracking-[0.12em] uppercase font-extrabold">
                {event.time}
              </span>
            </div>
            <a 
              href={event.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-[#2a2622]/80 hover:text-[#b8956a] transition-all duration-300 group/link"
            >
              <div className="flex items-start gap-2">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-[#b8956a]" />
                <span className="font-sans text-[15px] md:text-[18px] leading-snug border-b border-[#b8956a]/20 group-hover/link:border-[#b8956a] pb-0.5">
                  {event.venue}, {event.location}
                </span>
              </div>
              <span className="font-sans text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#b8956a]/60 font-bold group-hover/link:text-[#b8956a] transition-colors">
                (Tap to view on Google Maps)
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function WeddingCeremony() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section id="ceremony" className="relative w-full bg-[#faf9f6] pt-12 pb-14 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}
      />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-5 md:px-7 relative">
        {/* ── Header ── */}
        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-18"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-sans text-[12px] tracking-[0.5em] text-[#b8956a] uppercase mb-5">
            The Sacrament &amp; The Celebration
          </span>
          <HeadingReveal
            as="h2"
            className="font-serif italic font-light text-[#1a1816] leading-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            Our Journey
          </HeadingReveal>
          <div className="flex items-center gap-4 w-24">
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
            <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Continuous Center Line */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#b8956a]/25 via-[#b8956a]/10 to-transparent z-0"
            style={{ top: '100px', bottom: '100px' }}
          />

          {EVENTS.map((event, i) => (
            <TimelineEvent key={i} event={event} index={i} isLast={i === EVENTS.length - 1} />
          ))}

          {/* End ornament */}
          <motion.div
            className="flex flex-col items-center gap-12 -mt-12 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-4 h-4 border-[1px] border-[#b8956a]/40 rotate-45 bg-[#faf9f6] z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
