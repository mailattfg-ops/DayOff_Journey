import Navigation from './Navigation';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { Heart, Shield, Award, Globe, MapPin, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion for Travel',
    description: 'We live and breathe travel, bringing enthusiasm to every journey we craft'
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: '24/7 support and vetted partners ensure your peace of mind'
  },
  {
    icon: Award,
    title: 'Expert Curation',
    description: 'Years of local expertise result in authentic, unforgettable experiences'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connections in over 100 countries bring the world to your doorstep'
  }
];

const branches = [
  { city: 'New York', address: '123 Travel Street, NY 10001', phone: '+1 (555) 123-4567' },
  { city: 'London', address: '456 Explorer Lane, London EC1A 1BB', phone: '+44 20 1234 5678' },
  { city: 'Singapore', address: '789 Wanderlust Road, Singapore 018956', phone: '+65 6123 4567' }
];

const stats = [
  { value: '50K+', label: 'Happy Travelers' },
  { value: '100+', label: 'Destinations' },
  { value: '15+', label: 'Years Experience' },
  { value: '4.9★', label: 'Average Rating' }
];

export default function About() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Crafting extraordinary journeys since 2008 — where wanderlust meets expertise
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-text-muted dark:text-gray-400 mb-6">
                What began as a small team of passionate travelers has grown into a trusted global community. 
                We believe travel isn't just about destinations — it's about transformation, connection, 
                and the stories we collect along the way.
              </p>
              <p className="text-lg text-text-muted dark:text-gray-400 mb-6">
                With over 15 years of experience and a network spanning 100+ countries, we've helped 
                thousands discover the world's hidden gems. Our mission is simple: make extraordinary 
                travel accessible, authentic, and unforgettable.
              </p>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-background-dark/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
              Our core values shape every journey we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-text-muted dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary">
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

      {/* Our Branches */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
              Stop by one of our offices or reach out anytime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <div
                key={branch.city}
                className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-text-main dark:text-white">
                    {branch.city}
                  </h3>
                </div>
                <p className="text-text-muted dark:text-gray-400 mb-2">
                  {branch.address}
                </p>
                <p className="text-text-main dark:text-white font-semibold">
                  {branch.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-background-dark/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="text-center">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto mb-8">
              A diverse group of travel enthusiasts, local experts, and customer champions 
              dedicated to making your dream trips a reality
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
