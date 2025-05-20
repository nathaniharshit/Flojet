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
      <header className="py-4 px-4 md:px-8 bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom flex flex-col items-center md:items-start">
          <div className="w-full flex justify-between items-center mb-4">
            <NavLink to="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
              <img
                src="https://i.pinimg.com/736x/1a/a6/59/1aa659bf1e867faf95720744642ac133.jpg"
                alt="Flojet Logo"
                className="h-20 md:h-20 w-auto"
              />
            </NavLink>

            <div className="hidden md:flex items-center gap-4">
              <img src="https://github.com/nathaniharshit/Flojet/blob/main/images/msme.png?raw=true" alt="msme" className="h-20 w-auto" />
              <img src="https://i.pinimg.com/736x/03/55/14/0355149909327bf7ba59f77d8ac1e114.jpg" alt="globe" className="h-28 w-auto" />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center gap-10 border-t pt-4 w-full relative font-semibold text-gray-700">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>

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
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0 transition-opacity transition-transform duration-200 ease-in-out">
                {[
                  { href: '#aboutus', label: 'About Us', rounded: 'rounded-t-lg' },
                  { href: '#background', label: 'Background' },
                  { href: '#we-are-there-for-you', label: 'We are there for you' },
                  { href: '#our-vision', label: 'Our Vision' },
                  { href: '#why-us', label: 'Why us?', rounded: 'rounded-b-lg' },
                ].map(({ href, label, rounded = '' }) => (
                  <NavLink
                    key={href}
                    to={`/about${href}`}
                    className={
                      isExactHashMatch(href)
                        ? `block px-4 py-3 text-primary font-bold bg-primary/10 ${rounded}`
                        : `block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors ${rounded}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/products" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Products</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <NavLink to="/certificates" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Certificates</NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-primary text-white hover:bg-primary/90 px-5 py-2 rounded ml-4">Get a Quote</Button>
            </NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="w-full flex justify-end md:hidden mt-2">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 w-full bg-white shadow-md rounded-lg p-4 space-y-4 font-semibold text-gray-700">
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
                <Button className="bg-primary text-white hover:bg-primary/90 w-full py-2 rounded">Get a Quote</Button>
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
          className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-500 transition"
          style={{ zIndex: 1000 }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Header;
