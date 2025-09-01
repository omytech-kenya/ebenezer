
import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolCrest } from '../components/icons/SchoolCrest';
import { SparklesIcon, TrophyIcon } from '../components/icons/IconLibrary';

const achievements = [
  {
    icon: <TrophyIcon className="h-10 w-10 text-white" />,
    title: 'Top KCPE Performers',
    description: 'Consistently producing students with 400+ marks, ranking among the best in the county.',
  },
  {
    icon: <SparklesIcon className="h-10 w-10 text-white" />,
    title: 'Extracurricular Excellence',
    description: 'Regional champions in music festivals and athletics, nurturing all-round student development.',
  },
  {
    icon: <SchoolCrest className="h-10 w-10 text-white" />,
    title: 'Modern Facilities',
    description: 'Well-equipped classrooms, a modern library, and science labs to support holistic learning.',
  },
];

const galleryImages = [
  'https://picsum.photos/seed/school1/600/400',
  'https://picsum.photos/seed/students2/600/400',
  'https://picsum.photos/seed/classroom3/600/400',
  'https://picsum.photos/seed/library4/600/400',
  'https://picsum.photos/seed/sports5/600/400',
  'https://picsum.photos/seed/campus6/600/400',
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary-navy text-white py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://picsum.photos/seed/campus/1600/900')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="flex justify-center mb-6">
            <SchoolCrest className="h-24 w-24 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Ebenezer Academy, Busia</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">“Center of Academic Excellence in Busia”</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Apply Now
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
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-green mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-navy">{item.title}</h3>
                <p className="mt-2 text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-navy sm:text-4xl">Campus Life</h2>
            <p className="mt-4 text-lg text-gray-600">A glimpse into our vibrant and engaging school environment.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-3 aspect-h-2">
                <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transition duration-300 transform hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
