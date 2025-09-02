
import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolCrest } from './icons/SchoolCrest';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from './icons/IconLibrary';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-navy text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Ebenezer Academy" className="h-12 w-12 object-contain" />
              <div>
                <h2 className="text-xl font-bold">Ebenezer Academy</h2>
                <p className="text-sm text-gray-300">Busia, Kenya</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm">Center of Academic Excellence in Busia.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="hover:text-primary-green transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-primary-green transition-colors">Academics</Link></li>
              <li><Link to="/contact" className="hover:text-primary-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Contact Info</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <LocationMarkerIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>Off Busia–Kisumu Road, Opp. Airstrip, Busia, Kenya</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3" />
                <span>info@ebenezeracademy.ac.ke</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Connect</h3>
            <p className="mt-4 text-gray-300">Follow us on our social media channels to stay updated.</p>
            {/* Social media icons can be added here */}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ebenezer Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
