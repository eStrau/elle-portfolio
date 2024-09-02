import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'

const ImageCarousel = ({ images, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle manual image navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle automatic image slideshow
  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        goToNext();
      }, autoPlayInterval);

      return () => clearInterval(intervalId);
    }
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div className="carousel-controls">
        <button onClick={goToPrevious}>Previous</button>
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;