import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#f0f4f3] dark:border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer">
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
              <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => navigate('/destinations')} className="text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors">
                Destinations
              </button>
              <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Right Side: Book Now & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
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
            <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="block text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors text-left w-full">
              Home
            </button>
            <button onClick={() => { navigate('/destinations'); setMobileMenuOpen(false); }} className="block text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors text-left w-full">
              Destinations
            </button>
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); setMobileMenuOpen(false); }} className="block text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors text-left w-full">
              About
            </button>
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); setMobileMenuOpen(false); }} className="block text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors text-left w-full">
              Contact
            </button>
            <Button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); setMobileMenuOpen(false); }}
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
