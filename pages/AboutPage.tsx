
import React from 'react';

const coreValues = [
  { name: 'Excellence', description: 'Striving for the highest standards in all we do.' },
  { name: 'Integrity', description: 'Upholding honesty and strong moral principles.' },
  { name: 'Discipline', description: 'Fostering self-control, order, and respect.' },
  { name: 'Community', description: 'Building a supportive and collaborative environment.' },
  { name: 'Innovation', description: 'Embracing new ideas and creative thinking.' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-navy sm:text-5xl">About Ebenezer Academy</h1>
          <p className="mt-4 text-xl text-gray-600">A legacy of quality education and community building.</p>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-primary-green mb-4">Our History</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded over two decades ago, Ebenezer Academy started as a small community school with a big dream: to provide unparalleled education in Busia. From humble beginnings, we have grown into a leading institution, known for academic rigor and character development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey has been one of continuous improvement, driven by a passion for nurturing young minds. We are proud of our history and excited for a future of continued excellence.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://picsum.photos/seed/history/600/400" alt="School building history" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-gray-50 rounded-lg p-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-navy mb-3">Our Vision</h3>
              <p className="text-gray-700">To be a beacon of academic excellence, shaping future leaders with wisdom and integrity.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary-navy mb-3">Our Mission</h3>
              <p className="text-gray-700">To provide a holistic education in a nurturing environment that empowers students to achieve their full potential and contribute positively to society.</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
            <h2 className="text-3xl font-semibold text-primary-green text-center mb-10">Our Core Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                {coreValues.map(value => (
                    <div key={value.name} className="flex flex-col items-center">
                        <div className="bg-primary-green text-white rounded-full p-4 mb-3">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h4 className="font-bold text-lg text-secondary-navy">{value.name}</h4>
                    </div>
                ))}
            </div>
        </div>

        {/* Director's Message */}
        <div className="bg-secondary-navy text-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="https://picsum.photos/seed/director/200/200" alt="School Director" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-green flex-shrink-0"/>
            <div>
              <h2 className="text-3xl font-semibold mb-4">A Message from the Director</h2>
              <blockquote className="text-lg text-gray-200 italic leading-relaxed border-l-4 border-primary-green pl-6">
                "Welcome to Ebenezer Academy! We believe that every child is a unique gift, and our dedicated team is committed to providing an environment where they can flourish academically, socially, and morally. We invite you to join our family and embark on a journey of discovery and success."
              </blockquote>
              <p className="mt-6 font-bold text-right">- Mrs. Jane Doe, School Director</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
