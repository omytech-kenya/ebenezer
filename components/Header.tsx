
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SchoolCrest } from './icons/SchoolCrest';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'News & Updates', path: '/news' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 block rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-primary-green text-white'
        : 'text-secondary-navy hover:bg-green-100'
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Ebenezer Academy" className="h-12 w-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary-green leading-tight">Ebenezer Academy</span>
                <span className="text-xs text-secondary-navy font-medium leading-tight">Busia, Kenya</span>
              </div>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={linkClass}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-navy hover:bg-green-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
