import React from 'react';
// FIX: Import the `Link` component from `react-router-dom`.
import { Link } from 'react-router-dom';

const requirements = [
  'Completed Application Form',
  'Original and copy of birth certificate',
  'Two recent passport-size photographs',
  'Copy of previous school report cards/transcripts',
  'Copy of parent/guardian National ID',
  'Successful completion of entry assessment/interview',
];

const AdmissionsPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-navy sm:text-5xl">Admissions</h1>
          <p className="mt-4 text-xl text-gray-600">Join the Ebenezer Academy family and start your journey to success.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Admission Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-green mb-4">Our Admission Process</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  <strong>Obtain Application Form:</strong> Download the form from our website or pick one up from the school's administration office.
                </li>
                <li>
                  <strong>Submit Documents:</strong> Return the completed form along with all the required documents and the non-refundable application fee.
                </li>
                <li>
                  <strong>Assessment:</strong> The prospective student will be scheduled for an age-appropriate entrance assessment or interview.
                </li>
                <li>
                  <strong>Offer of Admission:</strong> Successful candidates will receive an official offer letter and an admission packet with further instructions.
                </li>
                <li>
                  <strong>Acceptance:</strong> To secure the place, parents must return the signed acceptance letter and pay the required school fees by the specified deadline.
                </li>
              </ol>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-green mb-4">Admission Requirements</h2>
              <p className="text-gray-700 mb-6">Please ensure you have the following documents ready when submitting your application:</p>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-primary-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-gray-800">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-bold text-secondary-navy mb-4">Application Form</h3>
              <p className="text-gray-600 mb-6">Click the button below to download the official admission application form.</p>
              <a 
                href="/Ebenezer_Academy_Admission_Form.pdf" // Placeholder link
                download
                className="w-full bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
              >
                Download Form (PDF)
              </a>
            </div>

            <div className="bg-secondary-navy text-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">School Fee Structure</h3>
              <p className="text-gray-200 mb-4">
                Our fee structure is competitive and provides excellent value. For detailed information on school fees for the current academic year, please visit our administration office or contact us directly.
              </p>
              <Link to="/contact" className="text-primary-green font-semibold hover:underline">
                Contact Finance Office &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;