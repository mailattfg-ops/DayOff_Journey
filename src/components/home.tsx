import { Suspense, lazy, useEffect } from 'react';
import LazyLoadWhenVisible from './LazyLoadWhenVisible';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import SEO from './SEO';

// Lazy load below-the-fold components
const JourneyRoadmap = lazy(() => import('@/components/JourneyRoadmap'));
const CoreServices = lazy(() => import('@/components/CoreServices'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const SeasonalHotspots = lazy(() => import('@/components/SeasonalHotspots'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('./Footer'));
const FloatingWhatsApp = lazy(() => import('./FloatingWhatsApp'));

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const elementId = (location.state as any).scrollTo;

      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // We expect the element to be at top + header height (approx 80px)
          const isCorrectlyPositioned = Math.abs(rect.top - 80) < 20;

          if (!isCorrectlyPositioned) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      // Initial scroll
      setTimeout(scrollToElement, 100);

      // Check and correct for layout shifts (e.g. images loading)
      // We check at increasing intervals to catch late loads without causing constant jitter
      const timers = [
        setTimeout(scrollToElement, 500),
        setTimeout(scrollToElement, 1000),
        setTimeout(scrollToElement, 2000)
      ];

      // Clean up local state after we're likely done
      const cleanupTimer = setTimeout(() => {
        window.history.replaceState({}, '');
      }, 2500);

      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(cleanupTimer);
      };
    } else {
      // Only scroll to top if we are NOT redirecting to a specific section and no hash
      if (!location.hash) {
        window.scrollTo(0, 0);
      }
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

      <Suspense fallback={<div className="h-screen w-full bg-background/50 animate-pulse" />}>
        <div className="hidden lg:block">
          <LazyLoadWhenVisible minHeight="300px">
            <JourneyRoadmap />
          </LazyLoadWhenVisible>
        </div>

        <div id="services" className="scroll-mt-20">
          <LazyLoadWhenVisible minHeight="400px">
            <CoreServices />
          </LazyLoadWhenVisible>
        </div>

        <LazyLoadWhenVisible minHeight="400px">
          <ServicesSection />
        </LazyLoadWhenVisible>

        <LazyLoadWhenVisible minHeight="800px">
          <SeasonalHotspots />
        </LazyLoadWhenVisible>

        <div id="contact" className="scroll-mt-20">
          <LazyLoadWhenVisible minHeight="800px">
            <ContactSection />
          </LazyLoadWhenVisible>
        </div>

        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  )
}

export default Home
