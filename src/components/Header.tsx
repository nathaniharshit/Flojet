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
      ? "text-white transition-colors px-4 py-2 rounded font-bold bg-gradient-to-r from-blue-500 to-purple-500"
      : "hover:text-white transition-colors px-4 py-2 rounded";

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block text-white transition-colors font-bold bg-gradient-to-r from-blue-500 to-purple-500"
      : "block hover:text-white transition-colors";

  const isExactHashMatch = (hash: string) =>
    location.pathname + location.hash === `/about${hash}`;

  return (
    <>
      <header className="py-4 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50 border-b-0 relative animate-fadeInDown">
        <div className="container-custom flex flex-col items-center md:items-start">
          <div className="w-full flex justify-between items-center mb-4">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <img
                src="https://your-logo-url.com/logo.png"
                alt="Flojet Logo"
                className="h-16 md:h-20 w-auto rounded-xl shadow-md"
              />
            </NavLink>

            <div className="hidden md:flex items-center gap-6">
              <img src="https://your-image-url.com/image1.png" alt="msme" className="h-16 w-auto rounded-lg shadow" />
              <img src="https://your-image-url.com/image2.gif" alt="globe" className="h-24 w-auto rounded-lg shadow" />
            </div>
          </div>

          <nav className="hidden md:flex justify-center gap-10 border-t pt-4 w-full relative font-semibold text-white">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>

            <div className="relative group" onMouseEnter={() => setIsAboutDropdownOpen(true)} onMouseLeave={() => setIsAboutDropdownOpen(false)}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 px-2 py-1 text-white font-bold rounded cursor-pointer select-none"
                    : "flex items-center gap-1 px-2 py-1 hover:text-white rounded cursor-pointer select-none"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Company Profile <ChevronDown size={16} />
              </NavLink>

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
              Products
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/certificates" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
              Certificates
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 px-6 py-2 rounded-xl shadow-lg font-bold transition-all duration-200 border-0">
                Get a Quote
              </Button>
            </NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="w-full flex justify-end md:hidden mt-2">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
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
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 w-full py-2 rounded-xl shadow-lg font-bold border-0">
                  Get a Quote
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </header>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border-0 animate-bounce"
          style={{ zIndex: 1000 }}
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
};

export default Header;
