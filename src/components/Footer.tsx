import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { name: 'Home', action: () => scrollToSection('home') },
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Services', action: () => scrollToSection('services') },
    ],
    destinations: [
      { name: 'Ooty', action: () => scrollToSection('south-india-paradise') },
      { name: 'Munnar', action: () => scrollToSection('south-india-paradise') },
      { name: 'Kodaikanal', action: () => scrollToSection('south-india-paradise') },
    ],
    support: [
      { name: 'Contact Us', action: () => scrollToSection('contact') },
    ]
  };

  const instagramImages = [
    '/images/Ooty_Card.webp',
    '/images/Munnar_Card.webp',
    '/images/Kodaikanal_Card.webp',
    '/images/Tea Gardens.webp',
    '/images/Pine Forest.webp',
    '/images/Ooty-lake.webp'
  ];

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Identity */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">Reach Us</h3>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="mailto:dayoffjourneys@gmail.com" className="flex items-center gap-3 text-text-muted dark:text-gray-400 group cursor-pointer hover:text-primary transition-colors">
                <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-base">dayoffjourneys@gmail.com</span>
              </a>
              <a href="tel:+919633403404" className="flex items-center gap-3 text-text-muted dark:text-gray-400 group cursor-pointer hover:text-primary transition-colors">
                <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-base">+91 96334 03404</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=East+Villoor,+Indianoor+(P.O),+Kottakkal,+Malappuram,+676503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-text-muted dark:text-gray-400 group cursor-pointer hover:text-primary transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-all mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-base leading-relaxed">
                  East Villoor, Indianoor (P.O)<br />
                  Kottakkal, Malappuram<br />
                  676503
                </span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={link.action}
                    className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-left text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Links */}
          <div>
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">Destinations</h3>
            <ul className="space-y-4">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={link.action}
                    className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-left text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links & Logo */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">Support</h3>
              <ul className="space-y-4 mb-8">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.action}
                      className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-left text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={() => scrollToSection('home')} className="block transition-transform hover:scale-105 mt-auto">
              {/* Light Mode Logo (Green) */}
              <img
                src="/images/green-logo.svg"
                alt="Dayoff Journeys"
                className="h-64 w-auto dark:hidden -ml-4"
              />
              {/* Dark Mode Logo (Yellow) */}
              <img
                src="/images/yellow-logo.svg"
                alt="Dayoff Journeys"
                className="h-64 w-auto hidden dark:block -ml-4"
              />
            </button>
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-text-main dark:text-white mb-4 text-center">
            Follow Our Adventures @DayoffJourneys
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {instagramImages.map((image, index) => (
              <a
                key={index}
                href="https://www.instagram.com/dayoffjourneys/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Dayoff Journeys. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/dayoffjourneys/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
