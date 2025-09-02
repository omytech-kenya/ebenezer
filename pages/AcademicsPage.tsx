
import React, { useState } from 'react';

const academicLevels = {
  'Pre-Primary': {
    description: "Our Pre-Primary section (PP1 & PP2) focuses on learning through play. We provide a stimulating environment that builds a strong foundation in literacy, numeracy, and social skills, preparing young learners for primary school.",
    subjects: ['Language Activities', 'Mathematical Activities', 'Environmental Activities', 'Psychomotor & Creative Activities', 'Religious Education'],
    image: '/campus/ebe1.png'
  },
  'Primary': {
    description: "The Primary section (Grade 1 to 6) follows the CBC curriculum, emphasizing inquiry-based learning and critical thinking. We aim to develop competent, confident, and responsible students.",
    subjects: ['English', 'Kiswahili', 'Mathematics', 'Science & Technology', 'Agriculture', 'Social Studies', 'CRE', 'Art & Craft', 'Music', 'Physical & Health Education'],
    image: '/campus/ebe4.png'
  },
  'Junior Secondary': {
    description: "Our Junior Secondary School (JSS - Grade 7, 8, & 9) bridges primary and secondary education. We provide a broad curriculum that allows students to explore their interests and talents while preparing for future academic pathways.",
    subjects: ['Core Subjects (e.g., English, Maths)', 'Optional Subjects (e.g., Foreign Languages, Performing Arts)', 'Pre-Technical & Pre-Career Studies'],
    image: '/campus/ebe5.png'
  }
};

type AcademicLevel = keyof typeof academicLevels;

const extracurriculars = ['Athletics', 'Football', 'Volleyball', 'Music Club', 'Drama Club', 'Debate Club', 'Science Club', 'Scouts & Girl Guides'];

const AcademicsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AcademicLevel>('Pre-Primary');

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/ebe1.png')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Academic Programs</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-200">A comprehensive curriculum for holistic development.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Academic Levels Tabs */}
        <div className="mb-16">
          <div className="flex justify-center">
            <nav className="inline-flex rounded-full bg-white p-1 ring-1 ring-black/5 shadow-sm" aria-label="Tabs">
              {Object.keys(academicLevels).map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveTab(level as AcademicLevel)}
                  className={`mx-1 rounded-full px-4 py-2 text-sm md:text-base font-medium transition ${
                    activeTab === level
                      ? 'bg-primary-green text-white shadow'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {level}
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-8">
            {Object.entries(academicLevels).map(([level, content]) => (
              <div key={level} className={activeTab === level ? 'block' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-secondary-navy mb-4">{level}</h3>
                        <p className="text-gray-700 mb-4">{content.description}</p>
                        <h4 className="font-semibold text-secondary-navy mb-2">Key Learning Areas:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {content.subjects.map(subject => <li key={subject}>{subject}</li>)}
                        </ul>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 aspect-[4/3] md:aspect-[16/10]">
                      <img src={content.image} alt={level} className="absolute inset-0 h-full w-full object-cover"/>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16 ring-1 ring-black/5">
            <h2 className="text-3xl font-bold text-center text-secondary-navy mb-8">Academic Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-xl bg-gray-50 ring-1 ring-black/5">
                    <div className="text-4xl font-bold text-secondary-navy">400+</div>
                    <p className="mt-2 text-gray-600">Marks achieved by our top KCPE students.</p>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 ring-1 ring-black/5">
                    <div className="text-4xl font-bold text-secondary-navy">95%</div>
                    <p className="mt-2 text-gray-600">Transition rate to top National & County schools.</p>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 ring-1 ring-black/5">
                    <div className="text-4xl font-bold text-secondary-navy">Top 5</div>
                    <p className="mt-2 text-gray-600">Ranking within Busia County schools.</p>
                </div>
            </div>
            <p className="text-center mt-8 text-gray-700">We are incredibly proud of our students' consistent and outstanding performance in national examinations.</p>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <h2 className="text-3xl font-bold text-center text-secondary-navy mb-8">Beyond the Classroom</h2>
          <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">We believe in nurturing well-rounded individuals. Our extracurricular activities provide students with opportunities to explore their talents, build teamwork, and develop leadership skills.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {extracurriculars.map(activity => (
              <span key={activity} className="bg-green-100 text-primary-green font-medium py-2 px-4 rounded-full">
                {activity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
