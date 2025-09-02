
import React from 'react';
import { Link } from 'react-router-dom';

const achievements = [
  {
    title: 'Top KCPE Performers',
    description: 'Consistently producing students with 400+ marks, ranking among the best in the county.',
  },
  {
    title: 'Extracurricular Excellence',
    description: 'Regional champions in music festivals and athletics, nurturing all-round student development.',
  },
  {
    title: 'Modern Facilities',
    description: 'Well-equipped classrooms, a modern library, and science labs to support holistic learning.',
  },
];

const galleryImages = [
  '/campus/ebe1.png',
  '/campus/ebe2.png',
  '/campus/ebe3.png',
  '/campus/ebe4.png',
  '/campus/ebe5.png',
  '/campus/ebe6.png',
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary-navy text-white pt-12 pb-20 md:pt-20 md:pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ebe1.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="relative flex justify-center mb-6">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-white/70 blur-xl opacity-90"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-white/30 blur-3xl opacity-80"></div>
            <img src="/logo.png" alt="Busia Ebenezer Academy" className="relative h-24 w-24 object-contain drop-shadow-2xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">BUSIA EBENEZER ACADEMY</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">“TOGETHER WE ALL SUCCEED”</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="bg-white hover:bg-gray-200 text-secondary-navy font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-navy sm:text-4xl">Why Choose Ebenezer Academy?</h2>
            <p className="mt-4 text-lg text-gray-600">Nurturing bright futures with a commitment to excellence.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg ring-1 ring-black/5 p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-green/10 blur-2xl"></div>
                <div className="h-1.5 w-14 bg-primary-green rounded-full mb-6"></div>
                <h3 className="text-xl font-semibold text-secondary-navy">{item.title}</h3>
                <p className="mt-2 text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="campus-life" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-navy sm:text-4xl">Campus Life</h2>
            <p className="mt-3 text-base md:text-lg text-gray-600">A glimpse into our vibrant, welcoming and engaging school environment.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 aspect-[3/2] bg-white"
              >
                <img
                  src={src}
                  alt={`Campus image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-navy sm:text-4xl">What Parents Say</h2>
            <p className="mt-3 text-base md:text-lg text-gray-600">Real stories from our community.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[{
              quote: 'Our child has flourished academically and socially. The teachers truly care.',
              name: 'Grace A.',
              role: 'Parent of Grade 6'
            },{
              quote: 'A nurturing environment with strong values and excellent results.',
              name: 'Peter O.',
              role: 'Parent of JSS'
            },{
              quote: 'The extracurriculars helped my son discover his passion for music.',
              name: 'Lydia N.',
              role: 'Parent of Grade 4'
            }].map((t, i) => (
              <div key={i} className="rounded-2xl bg-gray-50 p-8 ring-1 ring-black/5 shadow-sm">
                <div className="mb-4 text-primary-green">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V20h8v-8H6.83A2.83 2.83 0 0 1 9.66 9.17 5.17 5.17 0 0 0 7.17 6Zm10 0A5.17 5.17 0 0 0 12 11.17V20h8v-8h-3.17A2.83 2.83 0 0 1 19.66 9.17 5.17 5.17 0 0 0 17.17 6Z"/></svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-green/20 ring-1 ring-primary-green/30"></div>
                  <div>
                    <div className="font-semibold text-secondary-navy">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA Band */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary-navy to-black text-white p-8 md:p-12 ring-1 ring-black/10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-green/20 blur-3xl"></div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to Join BUSIA EBENEZER ACADEMY?</h3>
                <p className="mt-2 text-gray-200">Have questions or want to start enrollment? Talk to us today.</p>
              </div>
              <div>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary-green px-6 py-3 font-semibold text-white shadow-lg hover:bg-green-700 transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
