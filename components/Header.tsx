import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SchoolCrest } from "./icons/SchoolCrest";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortalsOpen, setIsPortalsOpen] = useState(false);
  const portalsCloseTimer = React.useRef<number | null>(null);

  const openPortals = () => {
    if (portalsCloseTimer.current) {
      window.clearTimeout(portalsCloseTimer.current);
      portalsCloseTimer.current = null;
    }
    setIsPortalsOpen(true);
  };

  const scheduleClosePortals = () => {
    if (portalsCloseTimer.current) {
      window.clearTimeout(portalsCloseTimer.current);
    }
    portalsCloseTimer.current = window.setTimeout(() => {
      setIsPortalsOpen(false);
    }, 400);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 block rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "bg-primary-green text-white"
        : "text-secondary-navy hover:bg-green-100"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Ebenezer Academy"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary-green leading-tight">
                  Ebenezer Academy
                </span>
                <span className="text-xs text-secondary-navy font-medium leading-tight">
                  Busia, Kenya
                </span>
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

              {/* Portals Dropdown */}
              <div
                className="relative"
                onMouseEnter={openPortals}
                onMouseLeave={scheduleClosePortals}
              >
                <button
                  className={linkClass({
                    isActive: false as unknown as boolean,
                  })}
                  aria-haspopup="true"
                  aria-expanded={isPortalsOpen}
                >
                  <span className="inline-flex items-center">
                    Portals
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${
                        isPortalsOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {isPortalsOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/10 z-50"
                    onMouseEnter={openPortals}
                    onMouseLeave={scheduleClosePortals}
                  >
                    <div className="py-2">
                      <NavLink
                        to="/portal/teachers"
                        className={({ isActive }) =>
                          linkClass({ isActive }) + " !rounded-none"
                        }
                      >
                        Teachers Portal
                      </NavLink>
                      <NavLink
                        to="/portal/parents"
                        className={({ isActive }) =>
                          linkClass({ isActive }) + " !rounded-none"
                        }
                      >
                        Parents Portal
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
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
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
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
              <NavLink
                key={link.name}
                to={link.path}
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Portals items in mobile */}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <div className="px-3 py-2 text-xs font-semibold uppercase text-gray-500">
                Portals
              </div>
              <NavLink
                to="/portal/teachers"
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Teachers Portal
              </NavLink>
              <NavLink
                to="/portal/parents"
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Parents Portal
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
