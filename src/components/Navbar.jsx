import { useState, useEffect } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-900/95 backdrop-blur-md shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center group-hover:bg-gold-500/30 transition-all duration-300">
            <Flower2 className="w-5 h-5 text-gold-400" />
          </div>
          <div>
            <span className="font-display text-xl font-semibold text-white leading-none block">
              White Lotus
            </span>
            <span className="text-gold-400 text-[10px] tracking-[0.25em] uppercase font-body">
              Hotel & Restaurant
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-sm font-medium text-white/80 hover:text-gold-400 transition-colors duration-300 tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:+919435084865"
          className="hidden md:flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Book Now
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-forest-900/98 backdrop-blur-md border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body text-white/80 hover:text-gold-400 transition-colors duration-200 text-base block py-1 border-b border-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+919435084865"
                className="block text-center bg-gold-500 hover:bg-gold-600 text-white font-body font-semibold px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
