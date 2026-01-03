import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';
import SEO from './SEO';
import { Heart, Shield, Award, Globe, MapPin, Users, ArrowLeft } from 'lucide-react';
import { lazy, Suspense } from 'react';
import LazyLoadWhenVisible from './LazyLoadWhenVisible';

const Footer = lazy(() => import('./Footer'));
const FloatingWhatsApp = lazy(() => import('./FloatingWhatsApp'));

const missionPoints = [
  {
    icon: Globe,
    title: 'Customized Solutions',
    description: 'To provide customized travel solutions that meet diverse travel needs and budgets'
  },
  {
    icon: Shield,
    title: 'Safe & Comfortable',
    description: 'To ensure safe, comfortable, and hassle-free journeys for every traveller'
  },
  {
    icon: Award,
    title: 'Reliable Service',
    description: 'To deliver reliable service through expert planning and local knowledge'
  },
  {
    icon: Users,
    title: 'Long-term Relationships',
    description: 'To build long-term relationships through customer satisfaction and trust'
  }
];



const stats = [
  { value: '100%', label: 'Customized Trips' },
  { value: '24/7', label: 'On-Trip Support' },
  { value: 'Verified', label: 'Local Experts' },
  { value: 'No', label: 'Hidden Charges' }
];

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-background">
      <SEO
        title="About Us | Your Trusted Travel Partner"
        description="Day Off Journeys creates meaningful and seamless travel experiences. Learn about our story, mission, and the team behind your perfect trip."
        canonical="/about"
      />
      <Navigation />

      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative min-h-[50vh] w-full overflow-hidden flex flex-col justify-center py-20">
        <div className="absolute inset-0">
          <img
            src="/images/about-us-hero.webp"
            alt="About Us Background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="w-fit text-white hover:text-white hover:bg-white/20 mb-8 pl-0 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Button>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight animate-fade-in-up drop-shadow-lg mb-6 will-change-transform">
            Discover
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
              Our Story
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in-up font-light will-change-transform">
            Day Off Journeys — Your trusted partner for meaningful and seamless travel experiences.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <LazyLoadWhenVisible minHeight="400px">
        <section className="py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-text-muted dark:text-gray-400 mb-6">
                  Day Off Journeys is a trusted travel service company based in Malappuram, specializing in curated and personalized travel experiences across Kerala, South India, and other parts of India.
                </p>
                <p className="text-lg text-text-muted dark:text-gray-400 mb-6">
                  Founded with a vision to create meaningful and seamless journeys, we focus on planning tailor-made travel experiences designed around our clients’ interests, preferences, and budgets. Whether it’s a family vacation, an outstation trip, a nature escape, or a spiritual journey, our team ensures smooth planning, reliable coordination, and hassle-free travel.
                </p>
                <p className="text-lg text-text-muted dark:text-gray-400">
                  At Day Off Journeys, we believe travel should be relaxing and worry-free. With a strong emphasis on comfort, safety, and privacy, we carefully plan every detail to deliver high-quality service and memorable experiences. Our personalized approach and local expertise allow us to transform travel dreams into reality.
                </p>
              </div>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-our-story.webp"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </LazyLoadWhenVisible>

      {/* Vision Section */}
      <LazyLoadWhenVisible minHeight="300px">
        <section className="py-12 lg:py-16 bg-white dark:bg-white/5">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
              Our Vision
            </h2>
            <p className="text-2xl italic font-medium text-text-muted dark:text-gray-300 max-w-4xl mx-auto">
              "To become a trusted and preferred travel partner by delivering meaningful, comfortable, and personalized travel experiences that create lasting memories."
            </p>
          </div>
        </section>
      </LazyLoadWhenVisible>

      {/* Mission Section */}
      <LazyLoadWhenVisible minHeight="400px">
        <section className="py-12 lg:py-16 bg-white dark:bg-background-dark/50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                Dedicated to excellence in every journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missionPoints.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-muted dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazyLoadWhenVisible>

      {/* Impact Stats */}
      <LazyLoadWhenVisible minHeight="200px">
        <section className="py-12 lg:py-16 bg-primary">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/90 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazyLoadWhenVisible>

      {/* Experience the Difference */}
      <LazyLoadWhenVisible minHeight="400px">
        <section className="py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="relative rounded-[2.5rem] overflow-hidden p-8 lg:p-16 text-center">
              {/* Background with Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-white/10 dark:to-transparent" />

              {/* Decorative blurs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-black text-text-main dark:text-white mb-6">
                  Ready to Experience <br />
                  <span className="text-primary">The Difference?</span>
                </h2>
                <p className="text-xl text-text-muted dark:text-gray-300 mb-10 leading-relaxed">
                  "We don't just plan trips; we craft personal stories. Let us handle the details while you focus on making memories that last a lifetime."
                </p>

                <Button
                  onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                  className="h-16 px-10 bg-primary text-white hover:bg-primary/90 text-lg font-bold rounded-full shadow-lg hover:shadow-primary/25 transition-all hover:scale-105 active:scale-95"
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>
        </section>
      </LazyLoadWhenVisible>

      {/* Client Stories */}
      <LazyLoadWhenVisible minHeight="400px">
        <section className="pb-12 lg:pb-16 pt-0 bg-white dark:bg-background-dark/50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <Heart className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
                Traveler Stories
              </h2>
              <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                Real experiences from people who trusted us with their journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-white/10 relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
                <p className="text-text-muted dark:text-gray-300 mb-6 italic leading-relaxed">
                  "We wanted a peaceful getaway to Munnar, and Day Off Journeys delivered beyond expectations. The resort selection was perfect!"
                </p>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">Arjun K.</h4>
                  <span className="text-sm text-primary">Family Vacation</span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-white/10 relative mt-0 md:-mt-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
                <p className="text-text-muted dark:text-gray-300 mb-6 italic leading-relaxed">
                  "The entire booking process was smooth. Our driver was very polite and knowledgeable about the local spots in Ooty. Highly recommended."
                </p>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">Mohammed Asif</h4>
                  <span className="text-sm text-primary">Solo Traveler</span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-white/10 relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
                <p className="text-text-muted dark:text-gray-300 mb-6 italic leading-relaxed">
                  "A truly customized experience. They listened to our needs and planned a pilgrimage tour that was comfortable for my elderly parents."
                </p>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">Rajesh Menon</h4>
                  <span className="text-sm text-primary">Pilgrimage Tour</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoadWhenVisible>

      <Suspense fallback={<div className="h-40 w-full bg-gray-50 animate-pulse" />}>
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}
