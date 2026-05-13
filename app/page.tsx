'use client';

import React from 'react';
import WeddingNav from '@/components/wedding/WeddingNav';
import WeddingHero from '@/components/wedding/WeddingHero';
import WeddingCountdown from '@/components/wedding/WeddingCountdown';
import WeddingInvitation from '@/components/wedding/WeddingInvitation';
import WeddingCeremony from '@/components/wedding/WeddingCeremony';
import WeddingStory from '@/components/wedding/WeddingStory';
import WeddingFamilies from '@/components/wedding/WeddingFamilies';

import WeddingTravel from '@/components/wedding/WeddingTravel';
import WeddingVenue from '@/components/wedding/WeddingVenue';
import WeddingFooter from '@/components/wedding/WeddingFooter';

export default function Home() {
  return (
    <>
      <WeddingNav />
      <WeddingHero />
      <WeddingCountdown />
      <WeddingInvitation />
      <WeddingCeremony />
      <WeddingStory />
      <WeddingFamilies />
      <WeddingTravel />
      <WeddingVenue />
      <WeddingFooter />
    </>
  );
}
