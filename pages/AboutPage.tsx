
import React from 'react';

const coreValues = [
  { name: 'Integrity' },
  { name: 'Love' },
  { name: 'Respect' },
  { name: 'Unity' },
  { name: 'Peace' },
  { name: 'Patriotism' },
  { name: 'Responsibility' },
  { name: 'Social Justice' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/ebe2.png')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Ebenezer Academy</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">A legacy of quality education and community building.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-secondary-navy mb-4">Our History</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded over two decades ago, Ebenezer Academy started as a small community school with a big dream: to provide unparalleled education in Busia. From humble beginnings, we have grown into a leading institution, known for academic rigor and character development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey has been one of continuous improvement, driven by a passion for nurturing young minds. We are proud of our history and excited for a future of continued excellence.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10">
              <img src="/campus/ebe2.png" alt="School building history" className="w-full h-auto object-cover"/>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-black/5 shadow-sm">
              <h3 className="text-2xl font-semibold text-secondary-navy mb-3">Our Vision</h3>
              <p className="text-gray-700">To be a Centre of Academic Excellence in the provision of Quality and Holistic Education.</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-black/5 shadow-sm">
              <h3 className="text-2xl font-semibold text-secondary-navy mb-3">Our Mission</h3>
              <p className="text-gray-700">To promote and nurture the growth and potential of our learners by creation of a secure and enabling environment to make them achieve the best in their lives for constructive service to God and humanity.</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-secondary-navy text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {coreValues.map(value => (
              <div key={value.name} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-green text-white">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="font-semibold text-secondary-navy">{value.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Director's Message */}
        <div className="bg-secondary-navy text-white rounded-2xl shadow-xl p-8 md:p-12 ring-1 ring-black/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="/campus/ebe3.png" alt="School Director" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-green flex-shrink-0"/>
            <div>
              <h2 className="text-3xl font-semibold mb-4">A Message from the Director</h2>
              <blockquote className="text-lg text-gray-200 italic leading-relaxed border-l-4 border-primary-green pl-6">
                "Welcome to Ebenezer Academy! We believe that every child is a unique gift, and our dedicated team is committed to providing an environment where they can flourish academically, socially, and morally. We invite you to join our family and embark on a journey of discovery and success."
              </blockquote>
              <p className="mt-6 font-bold text-right">- Mr Bogonko, School Director</p>
            </div>
          </div>
        </div>

      </div>
      {/* CTA Band */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary-navy to-black text-white p-8 md:p-12 ring-1 ring-black/10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-green/20 blur-3xl"></div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Join BUSIA EBENEZER ACADEMY</h3>
                <p className="mt-2 text-gray-200">Get in touch to learn more or begin enrollment.</p>
              </div>
              <div>
                <a href="#/contact" className="inline-flex items-center justify-center rounded-full bg-primary-green px-6 py-3 font-semibold text-white shadow-lg hover:bg-green-700 transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
