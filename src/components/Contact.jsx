import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 94350 84865',
    sub: 'Mon–Sun: 7:00 AM – 10:00 PM',
    href: 'tel:+919435084865',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@whitelotus-lakhimpur.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@whitelotus-lakhimpur.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Marketing Society Rd, near Khelmati Bazar',
    sub: 'North Lakhimpur, Assam 787031',
    href: 'https://maps.app.goo.gl/aFr9T7VSS6ind5aW9',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Open Daily: 7:00 AM – 11:00 PM',
    sub: 'Restaurant & Reception',
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'dining' });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '', type: 'dining' });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-cream lotus-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subheading fade-up">Get In Touch</p>
          <h2 className="section-heading fade-up">
            Reserve Your <span className="italic text-forest-700">Experience</span>
          </h2>
          <div className="gold-divider mx-auto mb-5 fade-up" />
          <p className="font-body text-gray-500 max-w-lg mx-auto fade-up">
            Whether it's a table for dinner, a room for the night, or a hall for your grand event —
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info + Map */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="fade-up glass-card p-5 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <info.icon className="w-5 h-5 text-forest-700 group-hover:text-gold-600 transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-body text-xs text-gray-400 uppercase tracking-wider mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="font-body font-semibold text-forest-900 hover:text-gold-600 transition-colors duration-200 text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-body font-semibold text-forest-900 text-sm">{info.value}</p>
                  )}
                  <p className="font-body text-xs text-gray-400 mt-0.5">{info.sub}</p>
                </div>
              </div>
            ))}

            {/* Google Map Embed */}
            <div className="fade-up rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-52">
              <iframe
                title="White Lotus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.890!2d94.1!3d27.235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374137d899e86275%3A0xaf161be5356cbcd2!2sWhite%20Lotus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3 fade-up">
            <div className="glass-card p-8 shadow-xl">
              <h3 className="font-display text-2xl font-semibold text-forest-900 mb-6">
                Send Us a Message
              </h3>

              {sent && (
                <div className="flex items-center gap-3 bg-forest-50 border border-forest-200 rounded-xl p-4 mb-6">
                  <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0" />
                  <p className="font-body text-forest-700 text-sm">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200 bg-white"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Enquiry Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200 bg-white appearance-none cursor-pointer"
                  >
                    <option value="dining">Dining / Restaurant Booking</option>
                    <option value="accommodation">Room / Accommodation</option>
                    <option value="banquet">Banquet / Event Booking</option>
                    <option value="other">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements — date, number of guests, special requests..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-forest-800 hover:bg-forest-900 text-white font-body font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-forest-900/20 group tracking-wide"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
