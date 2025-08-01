import React, { useState } from 'react';
import './styles.css';

const ImageCarousel = ({ images = [] }) => {
  const [state, setState] = useState(0);

  const handlePrev = () => {
    setState((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setState((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setState(index);
  };

  if (!images.length) return <p>No images available.</p>;

  return (
    <div className="carousel-container">
      <div className="image-wrapper">
        <img
          src={images[state].src}
          alt={images[state].alt || `Image ${state + 1}`}
          className="carousel-image"
        />
        <button className="nav-button prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="nav-button next" onClick={handleNext}>
          ❯
        </button>
      </div>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${state === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
