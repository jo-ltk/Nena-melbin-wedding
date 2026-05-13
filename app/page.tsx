'use client';

import React from 'react';
import WeddingNav from '@/components/wedding/WeddingNav';
import WeddingHero from '@/components/wedding/WeddingHero';
import WeddingCountdown from '@/components/wedding/WeddingCountdown';
import WeddingInvitation from '@/components/wedding/WeddingInvitation';
import WeddingCeremony from '@/components/wedding/WeddingCeremony';
import WeddingReception from '@/components/wedding/WeddingReception';
import WeddingStory from '@/components/wedding/WeddingStory';
import WeddingFamilies from '@/components/wedding/WeddingFamilies';
import WeddingGallery from '@/components/wedding/WeddingGallery';

import WeddingVenue from '@/components/wedding/WeddingVenue';
import WeddingTravel from '@/components/wedding/WeddingTravel';
import WeddingFooter from '@/components/wedding/WeddingFooter';
import FloatingMonogram from '@/components/wedding/FloatingMonogram';

export default function Home() {

  return (
    <>

      <WeddingNav />
      <FloatingMonogram />
      <WeddingHero />
      <WeddingCountdown />
      <WeddingInvitation />
      <WeddingCeremony />
      <WeddingStory />
      <WeddingFamilies />
      <WeddingGallery />
      <WeddingTravel />
      <WeddingVenue />
      <WeddingFooter />
    </>
  );
}
