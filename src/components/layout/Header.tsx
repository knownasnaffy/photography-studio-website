import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Header() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Portfolio', path: '/gallery' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b thin-border bg-background/80 backdrop-blur-md transition-shutter">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/image.webp" alt="Lucky Photography Logo" className="h-10 w-auto object-contain" />
        </Link>
        
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
    </nav>
  );
}
