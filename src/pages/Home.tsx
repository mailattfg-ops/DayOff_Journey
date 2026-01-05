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

interface LocationState {
  scrollTo?: string;
  selectedDestination?: string;
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Robust scroll logic:
    // We combine immediate scrolling with multiple checks to handle layout shifts (loading images, skeletons replacing).
    // This ensures that even if content expands above, we re-adjust to keep the target in view.
    // Cast state to known type
    const state = location.state as LocationState;
    if (state && state.scrollTo) {
      const elementId = state.scrollTo;

      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // 1. Initial attempt
      setTimeout(scrollToElement, 100);

      // 2. Retry sequence to catch late layout shifts
      const timers = [
        setTimeout(scrollToElement, 500),
        setTimeout(scrollToElement, 1000),
        setTimeout(scrollToElement, 2000),
        setTimeout(scrollToElement, 3000)
      ];

      // 3. Clean up history state only after we are likely fully settled
      const cleanupTimer = setTimeout(() => {
        window.history.replaceState({}, '');
      }, 3500);

      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(cleanupTimer);
      };
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
      />
      <Navigation />
      <HeroSection />

      {/* 
        We use LazyLoadWhenVisible for each section.
        minHeight ensures the scrollbar is accurate and prevents layout shifts.
        The wrapper itself acts as the placeholder until the component loads.
      */}

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

      <Suspense fallback={<SectionSkeleton />}>
        <SeasonalHotspots />
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
