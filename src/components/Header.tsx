import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp, ArrowUp } from "lucide-react";
import { NavLink, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAboutDropdownMobile = () => setIsAboutDropdownOpen(!isAboutDropdownOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary transition-colors px-2 py-1 rounded font-bold"
      : "hover:text-primary transition-colors px-2 py-1 rounded";

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block text-primary transition-colors font-bold"
      : "block hover:text-primary transition-colors";

  const isExactHashMatch = (hash: string) =>
    location.pathname + location.hash === `/about${hash}`;

  return (
    <>
      {/* Animated header entrance */}
      <header className="py-4 px-4 md:px-8 bg-white/70 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b-0 relative animate-fadeInDown">
        {/* Gradient accent border */}
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-primary via-pink-400 to-blue-400 opacity-80 rounded-b-xl pointer-events-none" />
        <div className="container-custom flex flex-col items-center md:items-start">
          <div className="w-full flex justify-between items-center mb-4">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <img
                src="https://github.com/nathaniharshit/Flojet/blob/main/Flojet_Logo-removebg-preview.png?raw=true"
                alt="Flojet Logo"
                className="h-20 md:h-28 w-auto rounded-xl border-primary/30"
              />
            </NavLink>

            <div className="hidden md:flex items-center gap-6">
              <img src="https://github.com/nathaniharshit/Flojet/blob/main/msme-removebg-preview.png?raw=true" alt="msme" className="h-24 w-auto" />
              <img src="https://github.com/nathaniharshit/Flojet/blob/main/FLOJET.gif?raw=true" alt="globe" className="h-32 w-auto" />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center gap-10 border-t pt-4 w-full relative font-semibold text-gray-700">
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
              <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 border border-gray-200 rounded-xl shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0 transition-opacity transition-transform duration-200 ease-in-out backdrop-blur-md">
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
                    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
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

          {/* Mobile Menu Toggle */}
          <div className="w-full flex justify-end md:hidden mt-2">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 w-full bg-white/95 shadow-2xl rounded-xl p-4 space-y-4 font-semibold text-gray-700 backdrop-blur-md border border-primary/10">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Home</NavLink>

              <div>
                <NavLink to="/about" onClick={() => { setIsMenuOpen(false); setIsAboutDropdownOpen(false); }} className={mobileNavLinkClass}>
                  About Us
                </NavLink>
                <button
                  onClick={toggleAboutDropdownMobile}
                  className="flex items-center gap-1 mt-1 text-gray-600 hover:text-primary focus:outline-none"
                >
                  {isAboutDropdownOpen ? <><ChevronUp size={16} /> Hide Details</> : <><ChevronDown size={16} /> More About Us</>}
                </button>

                {isAboutDropdownOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-600">
                    {[
                      { href: '#about', label: 'About Our Company' },
                      { href: '#overview', label: 'Company Overview' },
                      { href: '#commitment', label: 'Our Commitment' },
                    ].map(({ href, label }) => (
                      <NavLink
                        key={href}
                        to={`/about${href}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={
                          isExactHashMatch(href)
                            ? "text-primary font-bold hover:text-primary transition-colors"
                            : "hover:text-primary transition-colors"
                        }
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/products" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Products</NavLink>
              <NavLink to="/features" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Features</NavLink>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Contact</NavLink>
              <NavLink to="/certificates" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Certificates</NavLink>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 text-white hover:from-yellow-400 hover:to-red-500 w-full py-2 rounded-xl shadow-lg font-bold border-0">
                  Get a Quote
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-gradient-to-br from-red-500 via-blue-400 to-blue-300 text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border-0 animate-"
          style={{ zIndex: 1000 }}
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
};

export default Header;
