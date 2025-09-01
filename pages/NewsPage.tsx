
import React from 'react';

const announcements = [
  {
    date: 'August 15, 2024',
    title: 'Term 3 Opening Day',
    excerpt: 'We are excited to welcome all our students back for the third term. Please ensure students arrive in full uniform by 8:00 AM.',
    category: 'Academics',
  },
  {
    date: 'August 5, 2024',
    title: 'Annual Sports Day Results',
    excerpt: 'Congratulations to the Green House for winning this year\'s Annual Sports Day! A big thank you to all parents who attended.',
    category: 'Events',
  },
  {
    date: 'July 28, 2024',
    title: 'Parent-Teacher Meeting Schedule',
    excerpt: 'The end-of-term parent-teacher meetings will be held next week. Please book your slot with your child\'s class teacher.',
    category: 'Announcements',
  },
];

const calendarEvents = [
    { day: '15 Aug', event: 'School Re-opens' },
    { day: '25 Aug', event: 'Inter-Class Debates' },
    { day: '10 Sep', event: 'Mid-Term Exams Begin' },
    { day: '28 Sep', event: 'Academic Clinic Day' },
    { day: '12 Oct', event: 'Music & Drama Festival' },
    { day: '25 Oct', event: 'Closing Day & Prize Giving' },
];

const NewsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-navy sm:text-5xl">News & Updates</h1>
          <p className="mt-4 text-xl text-gray-600">Stay informed about the latest happenings at Ebenezer Academy.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Announcements List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-primary-green mb-6">School Announcements</h2>
            <div className="space-y-8">
              {announcements.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-primary-green text-xs font-semibold px-2.5 py-0.5 rounded-full">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-navy mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Event Calendar */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
              <h2 className="text-2xl font-semibold text-primary-green mb-6 text-center">Term 3 Event Calendar</h2>
              <ul className="space-y-4">
                {calendarEvents.map((item, index) => (
                   <li key={index} className="flex items-center space-x-4">
                     <div className="flex-shrink-0 bg-secondary-navy text-white text-center rounded-lg p-2 w-20">
                       <div className="font-bold text-lg">{item.day.split(' ')[0]}</div>
                       <div className="text-xs uppercase">{item.day.split(' ')[1]}</div>
                     </div>
                     <p className="text-gray-800 font-medium">{item.event}</p>
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
