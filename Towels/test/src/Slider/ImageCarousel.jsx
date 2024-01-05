// BootstrapImageCarousel.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageCarousel.css';
const BootstrapImageCarousel = () => {
  const images = [
    'https://softweave.co.in/wp-content/uploads/2019/11/softweave_kids_banner.jpg',
    'https://softweave.co.in/wp-content/uploads/2019/10/Bamboo-Towels-Banner_1920X900.jpg',
    'https://softweave.co.in/wp-content/uploads/2019/04/Matrix-Web-Banners_1920X900.jpg',
    // Add more image URLs as needed
  ];

  return (
    <Carousel interval={2000} fade={true}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BootstrapImageCarousel;
