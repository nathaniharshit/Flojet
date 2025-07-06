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
    <div className="relative w-screen h-[500px] overflow-hidden shadow-2xl">
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <AnimatePresence custom={direction} mode="sync">
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
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>

      {/* Carousel navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/70 hover:bg-white/90 active:bg-white/80 text-black p-3 rounded-full shadow-lg z-20 transition-all duration-200 border border-black/10"
        aria-label="Previous Slide"
      >
        <span className="text-2xl font-bold">&lsaquo;</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/70 hover:bg-white/90 active:bg-white/80 text-black p-3 rounded-full shadow-lg z-20 transition-all duration-200 border border-black/10"
        aria-label="Next Slide"
      >
        <span className="text-2xl font-bold">&rsaquo;</span>
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
