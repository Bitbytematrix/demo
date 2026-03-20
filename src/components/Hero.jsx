import { useEffect, useState } from 'react';
import { Phone, CalendarCheck, ChevronDown } from 'lucide-react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80',
    label: 'Luxury Rooms',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
    label: 'Fine Dining',
  },
  {
    url: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=1920&q=80',
    label: 'Banquet Halls',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/50 to-forest-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/30 to-transparent" />

      {/* Decorative top-right corner */}
      <div className="absolute top-32 right-12 w-64 h-64 rounded-full border border-gold-500/10 hidden lg:block" />
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full border border-gold-500/10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Slide label */}
        <div
          className={`transition-all duration-700 delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-gold-400 uppercase tracking-[0.3em] text-xs font-body font-semibold border border-gold-400/30 rounded-full px-4 py-1.5 mb-6 bg-gold-500/10 backdrop-blur-sm">
            Welcome to North Lakhimpur's Finest
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-4 transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          White{' '}
          <span className="italic text-gold-400">Lotus</span>
        </h1>

        {/* Divider */}
        <div
          className={`flex items-center gap-4 mb-5 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="h-[1px] w-12 bg-gold-400/60" />
          <span className="text-gold-300 text-sm tracking-[0.2em] uppercase font-body">Hotel & Restaurant</span>
          <span className="h-[1px] w-12 bg-gold-400/60" />
        </div>

        {/* Tagline */}
        <p
          className={`font-body text-white/80 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Where Assamese warmth meets modern elegance — your sanctuary of comfort,
          cuisine & culture in the heart of North Lakhimpur.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="tel:+919435084865"
            className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-105 tracking-wide"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-forest-900 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg tracking-wide backdrop-blur-sm"
          >
            <CalendarCheck className="w-4 h-4" />
            Book a Table
          </a>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-8 h-2 bg-gold-400' : 'w-2 h-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold-400 transition-colors duration-300 z-10 flex flex-col items-center gap-1 group"
      >
        <span className="font-body text-xs tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
