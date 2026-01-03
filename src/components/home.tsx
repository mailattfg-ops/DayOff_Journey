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
          // Check if element is already roughly in view (within 50px) to avoid unnecessary scrolling
          const rect = element.getBoundingClientRect();
          const isInView = Math.abs(rect.top - 80) < 50; // 80px offset for sticky header

          if (!isInView) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          return true;
        }
        return false;
      };

      // Robust "Seek and Scroll"
      const start = Date.now();
      const scrollWithRetry = () => {
        const success = scrollToElement();

        // Continue checking for 2.5 seconds to handle late layout shifts
        if (Date.now() - start < 2500) {
          // If successful, check less frequently, otherwise keep trying
          requestAnimationFrame(() => setTimeout(scrollWithRetry, 500));
        } else {
          // Final cleanup
          window.history.replaceState({}, '');
        }
      };

      scrollWithRetry();

      return () => {
        // Cleanup not strictly necessary for self-terminating loop but good practice
      };
    } else {
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

        <LazyLoadWhenVisible minHeight="600px">
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
