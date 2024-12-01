import React, { useState } from 'react';
import './Carousel.css'; // Add styles if needed

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#8249;
      </button>
      <img
        src={images['rose']}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button className="carousel-btn next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
