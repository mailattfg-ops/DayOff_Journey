import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    // Delegate all scroll logic to Home.tsx via state for robustness
    navigate('/', {
      state: { scrollTo: id },
      replace: location.pathname === '/' // Don't push to history if already on home
    });
  };

  const handleNavigation = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#f0f4f3] dark:border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div onClick={() => handleNavigation('/')} className="flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer">
              {/* Light Mode Logo (Green) */}
              <img
                src="/images/green-logo.svg"
                alt="Dayoff Journeys"
                className="h-24 w-auto dark:hidden relative -my-2"
              />
              {/* Dark Mode Logo (Yellow) */}
              <img
                src="/images/yellow-logo.svg"
                alt="Dayoff Journeys"
                className="h-24 w-auto hidden dark:block relative -my-2"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('/')}
                onMouseEnter={() => import('@/pages/Home')}
                className={`text-sm font-semibold transition-colors ${
                  isActive('/') 
                    ? 'text-primary' 
                    : 'text-text-main dark:text-white hover:text-primary'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                onMouseEnter={() => import('@/pages/About')}
                className={`text-sm font-semibold transition-colors ${
                  isActive('/about') 
                    ? 'text-primary' 
                    : 'text-text-main dark:text-white hover:text-primary'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('/destinations')}
                onMouseEnter={() => import('@/pages/Destinations')}
                className={`text-sm font-semibold transition-colors ${
                  isActive('/destinations') 
                    ? 'text-primary' 
                    : 'text-text-main dark:text-white hover:text-primary'
                }`}
              >
                Destinations
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                onMouseEnter={() => import('@/pages/Services')}
                className={`text-sm font-semibold transition-colors ${
                  isActive('/services') 
                    ? 'text-primary' 
                    : 'text-text-main dark:text-white hover:text-primary'
                }`}
              >
                Services
              </button>
              <button onClick={() => handleScroll('contact')} className="text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Right Side: Book Now & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => handleScroll('contact')}
              className="hidden lg:inline-flex bg-primary hover:bg-primary-light shadow-lg shadow-primary/20"
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-text-main dark:text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-background-dark">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => handleNavigation('/')}
              onMouseEnter={() => import('@/pages/Home')}
              className={`block text-sm font-semibold transition-colors text-left w-full ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-text-main dark:text-white hover:text-primary'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              onMouseEnter={() => import('@/pages/About')}
              className={`block text-sm font-semibold transition-colors text-left w-full ${
                isActive('/about') 
                  ? 'text-primary' 
                  : 'text-text-main dark:text-white hover:text-primary'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('/destinations')}
              onMouseEnter={() => import('@/pages/Destinations')}
              className={`block text-sm font-semibold transition-colors text-left w-full ${
                isActive('/destinations') 
                  ? 'text-primary' 
                  : 'text-text-main dark:text-white hover:text-primary'
              }`}
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              onMouseEnter={() => import('@/pages/Services')}
              className={`block text-sm font-semibold transition-colors text-left w-full ${
                isActive('/services') 
                  ? 'text-primary' 
                  : 'text-text-main dark:text-white hover:text-primary'
              }`}
            >
              Services
            </button>
            <button onClick={() => handleScroll('contact')} className="block text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors text-left w-full">
              Contact
            </button>
            <Button
              onClick={() => handleScroll('contact')}
              className="w-full bg-primary hover:bg-primary-light shadow-lg shadow-primary/20 mt-4"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
