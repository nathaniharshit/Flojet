import React from 'react';

const ImageCarousel: React.FC = () => {
  const images = [
    "https://github.com/nathaniharshit/Flojet/blob/main/images/1.jpeg?raw=true",
    "https://github.com/nathaniharshit/Flojet/blob/main/images/2.jpeg?raw=true",
    "https://github.com/nathaniharshit/Flojet/blob/main/images/3.jpeg?raw=true",
    "https://github.com/nathaniharshit/Flojet/blob/main/images/4.jpeg?raw=true",
    "https://github.com/nathaniharshit/Flojet/blob/main/images/5.jpeg?raw=true",
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 500); // Match with transition duration
    }, 5000); // Change slide every 5s

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 500);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 500);
  };

  return (
    <div className="w-full h-full overflow-hidden shadow-xl">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`w-full h-full object-contain transition-all duration-500 ease-in-out transform ${
          fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      />

      {/* Prev button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-md transition-all duration-300"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-md transition-all duration-300"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
};

export default ImageCarousel;
