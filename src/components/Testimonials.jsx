import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rituraj Borah',
    role: 'Business Traveller, Guwahati',
    avatar: 'https://i.pravatar.cc/80?img=11',
    rating: 5,
    text:
      'White Lotus is my go-to stop every time I travel to North Lakhimpur for work. The rooms are spotless, the staff incredibly warm, and the Assamese thali here is simply the best I\'ve had outside of home. Highly recommended!',
  },
  {
    name: 'Priya Gogoi',
    role: 'Wedding Guest, Dhemaji',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
    text:
      'We hosted my cousin\'s wedding reception at their banquet hall and everything was absolutely perfect. The decor, the food, the hospitality — exceeded every expectation. Our family still talks about it!',
  },
  {
    name: 'Aman Sharma',
    role: 'Tourist from Delhi',
    avatar: 'https://i.pravatar.cc/80?img=3',
    rating: 4,
    text:
      'As a first-time visitor to North Lakhimpur, I was pleasantly surprised by White Lotus. The location is super convenient, rooms are comfortable, and the food is delicious. The staff helped me plan a day trip to Kaziranga too!',
  },
  {
    name: 'Mrinmoyee Deka',
    role: 'Family Traveller, Tezpur',
    avatar: 'https://i.pravatar.cc/80?img=25',
    rating: 5,
    text:
      'Stayed here for three nights with my family and couldn\'t have asked for a better experience. The kids loved the food, the room service was prompt, and the staff treated us like family. Will definitely return.',
  },
  {
    name: 'Rahul Das',
    role: 'Corporate Guest, Dibrugarh',
    avatar: 'https://i.pravatar.cc/80?img=60',
    rating: 5,
    text:
      'Hosted a two-day corporate retreat at White Lotus. The conference setup was excellent, catering was top-notch, and the team\'s attention to detail made it a seamless experience. A true professional establishment.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-forest-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, #c9a84c22 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subheading fade-up">Guest Voices</p>
          <h2 className="section-heading fade-up">
            What Our <span className="italic text-forest-700">Guests Say</span>
          </h2>
          <div className="gold-divider mx-auto mb-5 fade-up" />
          <p className="font-body text-gray-500 max-w-lg mx-auto fade-up">
            Real stories from real guests — discover why White Lotus is
            North Lakhimpur's most cherished hospitality destination.
          </p>
        </div>

        {/* Cards — Desktop 3-up, Mobile single */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={t.name + i}
              className={`fade-up glass-card p-7 transition-all duration-500 ${
                i === 1
                  ? 'ring-2 ring-gold-500/40 shadow-xl scale-105'
                  : 'opacity-70 hover:opacity-90'
              }`}
            >
              <Quote className="w-8 h-8 text-gold-400/30 mb-4" />
              <p className="font-body text-gray-600 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-gold-300 object-cover"
                />
                <div>
                  <p className="font-display font-semibold text-forest-900 text-sm">{t.name}</p>
                  <p className="font-body text-xs text-gray-400">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3.5 h-3.5 ${
                        j < t.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile single card */}
        <div className="md:hidden fade-up glass-card p-7">
          <Quote className="w-8 h-8 text-gold-400/30 mb-4" />
          <p className="font-body text-gray-600 leading-relaxed mb-6 text-sm">
            "{testimonials[current].text}"
          </p>
          <div className="flex items-center gap-3">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-12 h-12 rounded-full border-2 border-gold-300 object-cover"
            />
            <div>
              <p className="font-display font-semibold text-forest-900 text-sm">
                {testimonials[current].name}
              </p>
              <p className="font-body text-xs text-gray-400">{testimonials[current].role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10 fade-up">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border-2 border-forest-200 hover:border-gold-500 hover:bg-gold-500 text-forest-700 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2.5 bg-gold-500' : 'w-2.5 h-2.5 bg-forest-200'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border-2 border-forest-200 hover:border-gold-500 hover:bg-gold-500 text-forest-700 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
