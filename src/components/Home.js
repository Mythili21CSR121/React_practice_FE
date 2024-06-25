import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomCarousel.css'; // Add your custom styles if needed

const CustomCarousel = () => {
  return (
    <Carousel interval={2000} className="fullscreen-carousel">
      <Carousel.Item className="fullscreen-item">
        <img
          className="fullscreen-image"
          src="https://static.dezeen.com/uploads/2022/02/carousel-rise-design-studio_dezeen_2364_col_17.jpg"
          alt="Dish 1"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="fullscreen-item">
        <img
          className="fullscreen-image"
          src="https://carousel-london.com/wp-content/uploads/2022/11/carousel2.0_space_JoeOkpako_FULL-59-1-1024x683.jpg"
          alt="Dish 2"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="fullscreen-item">
        <img
          className="fullscreen-image"
          src="https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/cms/guides/best-glendale-restaurants/JakobLayman.Carousel_08"
          alt="Dish 3"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
