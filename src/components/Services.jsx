import { useEffect, useRef } from 'react';
import { Bed, UtensilsCrossed, Wine, PartyPopper, Car, Wifi, Coffee, ConciergeBell } from 'lucide-react';

const services = [
  {
    icon: Bed,
    title: 'Deluxe Accommodation',
    description:
      'Spacious, air-conditioned rooms furnished with modern amenities, offering the perfect retreat after a long day. Choose from Standard, Deluxe, and Suite categories.',
    highlight: 'From ₹1,200/night',
  },
  {
    icon: UtensilsCrossed,
    title: 'Fine Dining Restaurant',
    description:
      'Savour an exquisite menu of authentic Assamese delicacies, North Indian classics, Chinese, and Continental dishes prepared by our expert culinary team.',
    highlight: 'Open 7 AM – 11 PM',
  },
  {
    icon: Wine,
    title: 'Bar & Beverages',
    description:
      "Unwind at our well-stocked bar featuring premium spirits, curated cocktails, fresh juices, and a selection of warm beverages including Assam's finest teas.",
    highlight: 'Premium Selection',
  },
  {
    icon: PartyPopper,
    title: 'Banquet & Events',
    description:
      'Host weddings, receptions, corporate meetings, and social gatherings in our elegantly designed banquet hall with capacity for up to 500 guests.',
    highlight: 'Up to 500 Guests',
  },
  {
    icon: Coffee,
    title: 'Room Service',
    description:
      'Enjoy freshly prepared meals, snacks, and beverages delivered directly to your room at any hour. Our in-room dining ensures comfort around the clock.',
    highlight: '24/7 Available',
  },
  {
    icon: Car,
    title: 'Travel & Transport',
    description:
      'We offer complimentary airport and railway station pickups, local sightseeing packages, and taxi arrangements to make your stay hassle-free.',
    highlight: 'Pickup & Drop',
  },
  {
    icon: Wifi,
    title: 'Business Facilities',
    description:
      'Stay connected with high-speed Wi-Fi throughout the property, along with a dedicated business centre for meetings, printing, and conference calls.',
    highlight: 'High-Speed WiFi',
  },
  {
    icon: ConciergeBell,
    title: 'Concierge Services',
    description:
      'Our attentive concierge team is here to assist with tour bookings, restaurant reservations, event planning, and any special requests around the clock.',
    highlight: 'Always at Your Service',
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-forest-950 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold-500/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-500/5 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 uppercase tracking-[0.25em] text-sm font-body font-semibold mb-3 fade-up">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4 fade-up">
            Our <span className="italic text-gold-400">Services</span>
          </h2>
          <div className="gold-divider mx-auto mb-5 fade-up" />
          <p className="font-body text-white/60 max-w-xl mx-auto fade-up">
            From comfortable stays to exquisite meals and memorable events — we provide
            a complete hospitality experience tailored for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="fade-up group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-400 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
                <service.icon className="w-6 h-6 text-gold-400" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-white/50 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Highlight Badge */}
              <span className="inline-block text-gold-400 text-xs font-body font-semibold bg-gold-500/10 border border-gold-500/20 rounded-full px-3 py-1">
                {service.highlight}
              </span>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
