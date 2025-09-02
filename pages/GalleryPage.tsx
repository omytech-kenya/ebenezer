import React from 'react';

const images: { src: string; label?: string }[] = [
  { src: '/ebe1.png', label: 'School' },
  { src: '/ebe2.png', label: 'School' },
  { src: '/logo.png', label: 'Logo' },
  { src: '/campus/ebe1.png', label: 'Campus' },
  { src: '/campus/ebe2.png', label: 'Campus' },
  { src: '/campus/ebe3.png', label: 'Campus' },
  { src: '/campus/ebe4.png', label: 'Campus' },
  { src: '/campus/ebe5.png', label: 'Campus' },
  { src: '/campus/ebe6.png', label: 'Campus' },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/ebe2.png')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Gallery</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-200">A collection of moments from BUSIA EBENEZER ACADEMY.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 bg-white aspect-[4/3]">
              <img src={img.src} alt={img.label ? `${img.label} ${idx + 1}` : `Image ${idx + 1}`} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 opacity-80"></div>
            </div>
          ))}
        </div>
        {/* CTA Band */}
        <section className="py-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary-navy to-black text-white p-8 md:p-12 ring-1 ring-black/10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-green/20 blur-3xl"></div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Visit Our Campus</h3>
                <p className="mt-2 text-gray-200">Schedule a tour to experience our community firsthand.</p>
              </div>
              <div>
                <a href="#/contact" className="inline-flex items-center justify-center rounded-full bg-primary-green px-6 py-3 font-semibold text-white shadow-lg hover:bg-green-700 transition-colors">Book a Visit</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GalleryPage;


