import { Suspense, lazy, useEffect } from 'react';
import LazyLoadWhenVisible from '@/components/shared/LazyLoadWhenVisible';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/features/home/HeroSection';
import SEO from '@/components/shared/SEO';
import SectionSkeleton from '@/components/shared/SectionSkeleton';

// Lazy load below-the-fold components
const JourneyRoadmap = lazy(() => import('@/components/features/home/JourneyRoadmap'));
const CoreServices = lazy(() => import('@/components/features/home/CoreServices'));
const ServicesSection = lazy(() => import('@/components/features/home/ServicesSection'));
const SeasonalHotspots = lazy(() => import('@/components/features/home/SeasonalHotspots'));
const ContactSection = lazy(() => import('@/components/features/contact/ContactSection'));
const Footer = lazy(() => import('@/components/layout/Footer'));
const FloatingWhatsApp = lazy(() => import('@/components/features/contact/FloatingWhatsApp'));

import { useScrollToLocation } from '@/hooks/useScrollToLocation';

function Home() {
  useScrollToLocation();

  return (
    <div className="min-h-screen w-full bg-background">
      <SEO
        title="Authentic Travel Experiences in South India"
        description="Discover the magic of South India with Dayoff Journeys. We offer premium, curated travel experiences to Ooty, Munnar, and Kodaikanal."
        schema={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Dayoff Journeys",
          "image": "https://dayoffjourneys.com/images/browser-logo.svg",
          "description": "Premium travel experiences in South India.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "East Villoor, Indianoor (P.O)",
            "addressLocality": "Kottakkal",
            "addressRegion": "Kerala",
            "postalCode": "676503",
            "addressCountry": "IN"
          },
          "telephone": "+919633403404",
          "url": "https://dayoffjourneys.com"
        }}
        preloadImages={['/images/kashi.webp']}
      />
      <Navigation />
      <HeroSection />

      {/* 
        We use LazyLoadWhenVisible for each section.
        minHeight ensures the scrollbar is accurate and prevents layout shifts.
        The wrapper itself acts as the placeholder until the component loads.
      */}

      <Suspense fallback={<SectionSkeleton />}>
        <SeasonalHotspots />
      </Suspense>

      <div className="hidden lg:block">
        <Suspense fallback={<SectionSkeleton />}>
          <JourneyRoadmap />
        </Suspense>
      </div>

      <div id="services" className="scroll-mt-20">
        <Suspense fallback={<SectionSkeleton />}>
          <CoreServices />
        </Suspense>
      </div>

      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>



      <div id="contact" className="scroll-mt-20">
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </div>

      <LazyLoadWhenVisible className="min-h-[400px]">
        <Footer />
      </LazyLoadWhenVisible>

      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  )
}

export default Home
