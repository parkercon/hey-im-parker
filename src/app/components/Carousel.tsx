'use client'

// ImageCarousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increase the current slide index
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change the interval as needed (in milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
  };

  return (
    <div className='h-full w-full overflow-y-clip'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
