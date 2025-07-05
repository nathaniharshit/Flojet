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
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 1.05,
    }),
  };

  return (
    <motion.div
      className="w-screen h-[500px] overflow-hidden shadow-2xl relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
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
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
        />
      </AnimatePresence>

      <motion.button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-blue-500/70 active:bg-blue-700/80 text-white p-4 rounded-full shadow-xl z-20 transition-all duration-200 border border-white/30"
        aria-label="Previous Slide"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-3xl font-bold drop-shadow-lg">&lsaquo;</span>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-blue-500/70 active:bg-blue-700/80 text-white p-4 rounded-full shadow-xl z-20 transition-all duration-200 border border-white/30"
        aria-label="Next Slide"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-3xl font-bold drop-shadow-lg">&rsaquo;</span>
      </motion.button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-5 h-5 rounded-full border-2 border-white shadow-lg transition-all duration-300 flex items-center justify-center ${
              idx === currentIndex
                ? 'bg-blue-500 scale-125 ring-4 ring-blue-300/40'
                : 'bg-white/40 hover:bg-blue-400/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ImageCarousel;
