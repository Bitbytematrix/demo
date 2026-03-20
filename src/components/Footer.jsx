import { Flower2, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'];
const services = ['Accommodation', 'Fine Dining', 'Bar & Beverages', 'Banquet Hall', 'Room Service', 'Travel Assistance'];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-forest-950 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-gold-500/5" />
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-gold-500/5" />
      <div className="absolute bottom-20 left-5 w-48 h-48 rounded-full border border-gold-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <span className="font-display text-xl font-semibold text-white block leading-none">
                  White Lotus
                </span>
                <span className="text-gold-400 text-[10px] tracking-[0.25em] uppercase font-body">
                  Hotel & Restaurant
                </span>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
              Your sanctuary of comfort, cuisine, and Assamese culture in the heart of
              North Lakhimpur since 2014.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-5 h-[1px] bg-gold-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-gold-400 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-5 h-[1px] bg-gold-500" />
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="font-body text-sm text-white/50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 flex-shrink-0" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-5 h-[1px] bg-gold-500" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919435084865"
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-white/50 group-hover:text-gold-400 transition-colors duration-200">
                    +91 94350 84865
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@whitelotus-lakhimpur.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-white/50 group-hover:text-gold-400 transition-colors duration-200 break-all">
                    info@whitelotus-lakhimpur.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/aFr9T7VSS6ind5aW9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-white/50 group-hover:text-gold-400 transition-colors duration-200">
                    Marketing Society Rd, near Khelmati Bazar, North Lakhimpur, Assam 787031
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} White Lotus Hotel & Restaurant. All rights reserved. | North Lakhimpur, Assam
          </p>
          <p className="font-body text-xs text-white/20">
            Designed with ♥ for hospitality
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollTop}
        className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-gold-500 hover:bg-gold-600 text-white flex items-center justify-center shadow-lg hover:shadow-gold-500/30 hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
