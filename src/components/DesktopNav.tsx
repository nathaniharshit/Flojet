import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DesktopNavProps {
  navLinkClass: ({ isActive }: { isActive: boolean }) => string;
  isAboutDropdownOpen: boolean;
  setIsAboutDropdownOpen: (open: boolean) => void;
  setIsMenuOpen: (open: boolean) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navLinkClass, isAboutDropdownOpen, setIsAboutDropdownOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isExactHashMatch = (hash: string) =>
    location.pathname + location.hash === `/about${hash}`;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`hidden md:flex sticky top-0 z-50 justify-center gap-10 border-t py-4 w-full font-semibold text-gray-700 shadow-2xl transition-colors duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg' : 'bg-white'}`}>
      <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
        <span className="relative after:block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
          Home
        </span>
      </NavLink>
      <div className="relative group" onMouseEnter={() => setIsAboutDropdownOpen(true)} onMouseLeave={() => setIsAboutDropdownOpen(false)}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-1 px-2 py-1 text-primary font-bold rounded cursor-pointer select-none"
              : "flex items-center gap-1 px-2 py-1 hover:text-primary rounded cursor-pointer select-none"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Company Profile <ChevronDown size={16} />
        </NavLink>
        {/* Dropdown */}
        <div className="absolute top-full left-0 mt-0.5 w-56 bg-white/95 border border-gray-200 rounded-xl shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform translate-y-0.5 group-hover:translate-y-0 transition-opacity transition-transform duration-200 ease-in-out backdrop-blur-md">
          {[
            { href: 'about', label: 'About Us', rounded: 'rounded-t-lg' },
            { href: 'background', label: 'Background' },
            { href: 'we-are-there-for-you', label: 'We are there for you' },
            { href: 'our-vision', label: 'Our Vision' },
            { href: 'why-us', label: 'Why us?', rounded: 'rounded-b-lg' },
          ].map(({ href, label, rounded = '' }) => (
            <button
              key={href}
              onClick={() => {
                setIsMenuOpen(false);
                setIsAboutDropdownOpen(false);
                if (location.pathname === '/about') {
                  document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = `/about#${href}`;
                }
              }}
              className={`block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors w-full text-left ${rounded}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <NavLink to="/products" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
        <span className="relative after:block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
          Products
        </span>
      </NavLink>
      <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
        <span className="relative after:block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
          Contact
        </span>
      </NavLink>
      <NavLink to="/certificates" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
        <span className="relative after:block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
          Certificates
        </span>
      </NavLink>
      <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
        <Button className="bg-gradient-to-r from-red-500 via-blue-400 to-blue-300 text-white hover:from-blue-400 hover:to-red-500 px-6 py-2 rounded-xl shadow-lg font-bold transition-all duration-200 border-0">
          Get a Quote
        </Button>
      </NavLink>
    </nav>
  );
};

export default DesktopNav;
