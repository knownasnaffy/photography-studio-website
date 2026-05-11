import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Portfolio', path: '/gallery' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b thin-border bg-background/80 backdrop-blur-md transition-shutter">
      <div className="max-w-7xl mx-auto px-6 min-h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo-dark.png" alt="Lucky Photography Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Mobile Navigation Toggle */}
        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center gap-1.5 p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span aria-hidden="true" className={`h-0.5 w-6 bg-on-surface transition-shutter ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span aria-hidden="true" className={`h-0.5 w-6 bg-on-surface transition-shutter ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span aria-hidden="true" className={`h-0.5 w-6 bg-on-surface transition-shutter ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 font-label-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-shutter text-glow ${location.pathname === link.path ? 'text-primary-container' : 'hover:text-primary-container'}`}
            >
              {link.name}
            </Link>
          ))}
          <Button asLink to="/contact" variant="primary" className="px-6 py-3">
            Book Session
          </Button>
        </div>
      </div>
      <div
        id="mobile-navigation-menu"
        className={`md:hidden grid transition-shutter ${isMenuOpen ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-2'}`}
      >
        <div className="overflow-hidden px-6 pb-6 flex flex-col items-start gap-5 font-label-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-shutter text-glow ${location.pathname === link.path ? 'text-primary-container' : 'hover:text-primary-container'}`}
            >
              {link.name}
            </Link>
          ))}
          <Button asLink to="/contact" variant="primary" className="px-6 py-3">
            Book a session
          </Button>
        </div>
      </div>
    </nav>
  );
}
