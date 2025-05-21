import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel: React.FC = () => {
  const images = [
    "https://github.com/nathaniharshit/Flojet/blob/main/images/1.jpeg?raw=true",
    "https://github.com/nathaniharshit/Flojet/blob/main/images/2.jpeg?raw=true",
    "https://github.com/nathaniharshit/Flojet/blob/main/images/3.jpeg?raw=true",
    "https://github.com/nathaniharshit/Flojet/blob/main/images/4.jpeg?raw=true",
    "https://github.com/nathaniharshit/Flojet/blob/main/images/5.jpeg?raw=true",
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden shadow-xl">
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-contain z-0"
        />
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
};

export default ImageCarousel;
