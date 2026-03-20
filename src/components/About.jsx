import { useEffect, useRef } from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: Clock, value: '10+', label: 'Years of Excellence' },
  { icon: Users, value: '50K+', label: 'Happy Guests' },
  { icon: Award, value: '15+', label: 'Awards & Accolades' },
  { icon: MapPin, value: '1', label: 'Prime Location' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-cream lotus-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative fade-up">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
                alt="White Lotus Hotel lobby"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-6 glass-card p-5 max-w-[220px] shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-forest-900">10+</p>
                  <p className="font-body text-xs text-gray-500">Years Serving</p>
                </div>
              </div>
              <p className="font-body text-xs text-gray-500 leading-relaxed">
                North Lakhimpur's most trusted hospitality destination
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-gold-400/30 -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <p className="section-subheading fade-up">Our Story</p>
            <h2 className="section-heading fade-up">
              A Legacy of Warmth &<br />
              <span className="italic text-forest-700">Assamese Hospitality</span>
            </h2>
            <div className="gold-divider mb-6 fade-up" />
            <p className="font-body text-gray-600 leading-relaxed mb-5 fade-up">
              Nestled on Marketing Society Road near the vibrant Khelmati Bazar, White Lotus
              has been the pride of North Lakhimpur for over a decade. We are more than a
              hotel and restaurant — we are a celebration of Assam's rich culture, flavors,
              and legendary warmth.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8 fade-up">
              From the moment you step through our doors, you are enveloped in an atmosphere
              that balances contemporary comfort with the soul of the Northeast. Our team of
              experienced chefs, attentive staff, and dedicated management strive every day to
              make every visit truly unforgettable.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-10 fade-up">
              {[
                'Authentic Assamese & North Indian cuisine',
                'Comfortable AC rooms with modern amenities',
                'Banquet & event facilities for all occasions',
                'Prime location near Khelmati Bazar, NH-15',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-gray-700">
                  <span className="mt-1.5 w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-gold-500 block" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex fade-up"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="fade-up text-center glass-card p-6 hover:shadow-xl transition-shadow duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-forest-700 group-hover:text-gold-600 transition-colors duration-300" />
              </div>
              <p className="font-display text-3xl font-bold text-forest-900 mb-1">{stat.value}</p>
              <p className="font-body text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
