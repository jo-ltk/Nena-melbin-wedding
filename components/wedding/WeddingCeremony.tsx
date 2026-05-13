'use client';

import { motion, useInView } from 'framer-motion';
import { Clock, MapPin, Gem, Flame, Church, PartyPopper } from 'lucide-react';
import { useRef } from 'react';

const EVENTS = [
  {
    date: 'MAY 28, 2026',
    title: 'The Engagement',
    description: 'Melbin and Nena in the presence of their families, begins the sacred chapter together.',
    time: '11:30 AM',
    venue: 'Eden Convention Center',
    location: 'Mallappally, Kerala',
    type: 'ENGAGEMENT',
    icon: <Gem size={22} strokeWidth={1.5} />,
    color: '#0d9488', // Teal
  },
  {
    date: 'MAY 29, 2026',
    title: 'Eve of the Wedding',
    description: 'An evening of prayer, music and togetherness at groom\'s house.',
    time: '6:30 PM',
    venue: "Groom's Home",
    location: 'Ramamangalam, Kerala',
    type: 'FAMILY EVENT',
    icon: <Flame size={22} strokeWidth={1.5} />,
    color: '#f97316', // Orange
  },
  {
    date: 'MAY 31, 2026',
    title: 'The Wedding Ceremony',
    description: 'Melbin & Nena make their covenant before God at the beautiful St. Athanasius Jacobite Syrian Cathedral, Puthenkurish — surrounded by family, faith, and love.',
    time: '10:30 AM',
    venue: 'St. Athanasius Jacobite Syrian Cathedral',
    location: 'Puthenkurish, Kolencherry',
    type: 'MAIN CEREMONY',
    icon: <Church size={22} strokeWidth={1.5} />,
    color: '#4338ca', // Indigo
  },
  {
    date: 'MAY 31, 2026',
    title: 'Wedding Reception',
    description: 'A joyful celebration with feasting, laughter, and blessings from our dearest people.',
    time: '12:30 PM',
    venue: 'Njattumkalayil Hilltop Event Center',
    location: 'Kolencherry, Kerala',
    type: 'CELEBRATION',
    icon: <PartyPopper size={22} strokeWidth={1.5} />,
    color: '#db2777', // Pink/Magenta
  },
];

function TimelineEvent({ event, index, isLast }: { event: typeof EVENTS[0]; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="relative flex gap-5 md:gap-8">

      {/* ── Left: spine column ── */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 56 }}>
        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center z-10"
        >
          {/* Pulse ring */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={isInView ? { scale: [1, 2, 1], opacity: [0.3, 0, 0.3] } : {}}
            transition={{ duration: 3, delay: index * 0.12 + 0.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-5 h-5 rounded-full"
            style={{ backgroundColor: event.color }}
          />
          {/* Icon circle - Using specific event color */}
          <div 
            className="w-14 h-14 rounded-full bg-white border-[1px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center"
            style={{ borderColor: `${event.color}40`, color: event.color }}
          >
            {event.icon}
          </div>
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="flex-1 w-[1px] bg-gradient-to-b from-[#b8956a]/40 to-[#b8956a]/10 origin-top mt-1"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: index * 0.12 + 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>

      {/* ── Right: content card (full width) ── */}
      <motion.div
        className="flex-1 pb-10 md:pb-14"
        initial={{ opacity: 0, y: 24, x: 16 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.12 + 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative group p-6 md:p-8 bg-white/60 backdrop-blur-sm border-[0.5px] border-[#b8956a]/15 shadow-[0_2px_24px_rgba(184,149,106,0.06)] hover:shadow-[0_8px_40px_rgba(184,149,106,0.12)] transition-all duration-700 hover:border-[#b8956a]/30">

          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-[0.5px] border-l-[0.5px] border-[#b8956a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-[0.5px] border-r-[0.5px] border-[#b8956a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top row: badge + date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1.5 bg-[#b8956a]/[0.07] border-[0.5px] border-[#b8956a]/20 font-sans text-[9px] md:text-[10px] tracking-[0.25em] text-[#b8956a] uppercase">
              {event.type}
            </span>
            <span className="font-sans text-[10px] md:text-[11px] tracking-[0.35em] text-[#b8956a]/50 uppercase">
              {event.date}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-serif italic font-light text-[#1a1816] leading-tight mb-3"
            style={{ fontSize: 'clamp(1.65rem, 5.5vw, 2.4rem)' }}
          >
            {event.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-[14px] md:text-[16px] leading-relaxed text-[#1a1816]/80 mb-5 max-w-[600px]">
            {event.description}
          </p>

          {/* Time & Venue row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2 text-[#b8956a]/80">
              <Clock size={13} strokeWidth={1.5} />
              <span className="font-sans text-[12px] md:text-[13px] tracking-[0.08em] uppercase font-medium">
                {event.time}
              </span>
            </div>
            <div className="flex items-start gap-2 text-[#2a2622]/50">
              <MapPin size={13} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
              <span className="font-sans text-[12px] md:text-[13px] leading-snug">
                {event.venue}, {event.location}
              </span>
            </div>
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

      <div ref={sectionRef} className="max-w-4xl mx-auto px-5 md:px-7 relative">
        {/* ── Header ── */}
        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-18"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-sans text-[10px] tracking-[0.5em] text-[#b8956a] uppercase mb-5">
            The Sacrament &amp; The Celebration
          </span>
          <h2
            className="font-serif italic font-light text-[#1a1816] leading-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            Our Journey
          </h2>
          <div className="flex items-center gap-4 w-24">
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
            <div className="w-1.5 h-1.5 border-[0.5px] border-[#b8956a]/40 rotate-45" />
            <div className="flex-1 h-[0.5px] bg-[#b8956a]/30" />
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {EVENTS.map((event, i) => (
            <TimelineEvent key={i} event={event} index={i} isLast={i === EVENTS.length - 1} />
          ))}

          {/* End ornament */}
          <motion.div
            className="flex justify-start pl-[21px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-3.5 h-3.5 border-[1px] border-[#b8956a]/35 rotate-45 bg-[#faf9f6]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
