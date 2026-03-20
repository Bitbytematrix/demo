import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    caption: 'Deluxe Suite',
    span: 'col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    caption: 'Fine Dining',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
    caption: 'Assamese Cuisine',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    caption: 'Restaurant Ambiance',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
    caption: 'Banquet Hall',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
    caption: 'Hotel Lobby',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    caption: 'Chef\'s Specials',
    span: '',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const [lightbox, setLightbox] = useState(null);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subheading fade-up">Visual Tour</p>
          <h2 className="section-heading fade-up">
            A Glimpse of Our{' '}
            <span className="italic text-forest-700">World</span>
          </h2>
          <div className="gold-divider mx-auto mb-5 fade-up" />
          <p className="font-body text-gray-500 max-w-lg mx-auto fade-up">
            Step inside White Lotus — from elegant rooms and vibrant dining spaces
            to grand celebrations and every moment in between.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`fade-up relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-center">
                  <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="font-body text-white text-sm font-medium">{item.caption}</p>
                </div>
              </div>
              {/* Caption label */}
              <div className="absolute bottom-3 left-3">
                <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-body px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors duration-200"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <img
              src={lightbox.url}
              alt={lightbox.caption}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-center text-white/70 font-body mt-4 text-sm tracking-wide">
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
