import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            'url(https://i.pinimg.com/736x/2a/f1/9b/2af19b21c4c10cb91803d5f83dc839b8.jpg)',
        }}
      />

      {/* Overlay to ensure readability */}
      <div className="relative z-10">
        <div className="container-custom py-12 px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About Company + Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Flojet Engineers Pvt Ltd
              </h3>
              <div className="relative w-20 h-1 overflow-hidden mb-6">
                <div
                  className="absolute top-0 left-0 h-1 w-20 bg-red-500"
                  style={{ animation: 'slideLine 4s linear infinite' }}
                ></div>

                <style>{`
                  @keyframes slideLine {
                    0% {
                      transform: translateX(-100%);
                    }
                    100% {
                      transform: translateX(100%);
                    }
                  }
                `}</style>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                  <span className="ml-3">
                    31, At End of, Rd Number 2, Sardar Estate,<br />
                    Sayaji Park Society, Vadodara, Gujarat 390019
                  </span>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="ml-3">
                    +91 9824037632 / +91 9376222520
                  </span>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-500 shrink-0" />
                  <a
                    href="mailto:sales@flojet21.com"
                    className="ml-3 hover:text-blue-500 transition-colors"
                  >
                    sales@flojet21.com
                  </a>
                </div>
              </div>
              <p className="text-sm mt-4">
                © {new Date().getFullYear()} Flojet Engineers Pvt Ltd. All
                rights reserved.
              </p>
            </div>

            {/* Products */}
            <div>
            <h3 className="text-xl font-bold text-white mb-4">                
              Products
            </h3>
            <div className="relative w-20 h-1 overflow-hidden mb-6">
                <div
                  className="absolute top-0 left-0 h-1 w-20 bg-red-500"
                  style={{ animation: 'slideLine 4s linear infinite' }}
                ></div>

                <style>{`
                  @keyframes slideLine {
                    0% {
                      transform: translateX(-100%);
                    }
                    100% {
                      transform: translateX(100%);
                    }
                  }
                `}</style>
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/products/generations" className="hover:text-primary transition-colors">
                    Non Asbestos Braided Gland Packing Rope & Rings
                  </Link>
                </li>
                <li>
                  <Link to="/products/regular/2" className="hover:text-primary transition-colors">
                    Expanded Graphite Sealing Products
                  </Link>
                </li>
                <li>
                  <Link to="/products/regular/3" className="hover:text-primary transition-colors">
                    100% Expanded Pure PTFE Products
                  </Link>
                </li>
                <li>
                  <Link to="/products/regular/4" className="hover:text-primary transition-colors">
                    Cold Welding Epoxy Compounds
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Company
            </h3>
            <div className="relative w-20 h-1 overflow-hidden mb-6">
                <div
                  className="absolute top-0 left-0 h-1 w-20 bg-red-500"
                  style={{ animation: 'slideLine 4s linear infinite' }}
                ></div>

                <style>{`
                  @keyframes slideLine {
                    0% {
                      transform: translateX(-100%);
                    }
                    100% {
                      transform: translateX(100%);
                    }
                  }
                `}</style>
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about#about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/about#background" className="hover:text-primary transition-colors">
                    Background
                  </Link>
                </li>
                <li>
                  <Link to="/about#we-are-there-for-you" className="hover:text-primary transition-colors">
                    We are there for you
                  </Link>
                </li>
                <li>
                  <Link to="/about#our-vision" className="hover:text-primary transition-colors">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link to="/about#why-us" className="hover:text-primary transition-colors">
                    Why Us?
                  </Link>
                </li>
              </ul>
            </div>

            {/* Embedded Map */}
            <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Our Location
            </h3>
            <div className="relative w-20 h-1 overflow-hidden mb-6">
                <div
                  className="absolute top-0 left-0 h-1 w-20 bg-red-500"
                  style={{ animation: 'slideLine 4s linear infinite' }}
                ></div>

                <style>{`
                  @keyframes slideLine {
                    0% {
                      transform: translateX(-100%);
                    }
                    100% {
                      transform: translateX(100%);
                    }
                  }
                `}</style>
              </div>
              <div className="rounded-md overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.6401162726459!2d73.23243271244249!3d22.31547672808382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf9ccd817a9f%3A0x26ad116ba404a026!2sFlojet%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747251043459!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
