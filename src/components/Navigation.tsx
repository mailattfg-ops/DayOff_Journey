import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#f0f4f3] dark:border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-text-main dark:text-white">Dayoff Journeys</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => document.getElementById('south-india-paradise')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-semibold text-text-muted dark:text-gray-400 hover:text-primary transition-colors">
                Destinations
              </button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-semibold text-text-muted dark:text-gray-400 hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-semibold text-text-muted dark:text-gray-400 hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Right Side: Book Now & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
            <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="block text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors text-left w-full">
              Home
            </button>
            <button onClick={() => { document.getElementById('south-india-paradise')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="block text-sm font-semibold text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-left w-full">
              Destinations
            </button>
            <button onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="block text-sm font-semibold text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-left w-full">
              About
            </button>
            <button onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="block text-sm font-semibold text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-left w-full">
              Contact
            </button>
            <Button
              onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
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
