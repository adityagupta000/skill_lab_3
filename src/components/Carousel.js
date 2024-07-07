import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';

const CarouselComponent = () => (
  <Carousel style={{ width: 'auto', margin: '0 auto' }}>
    <Carousel.Item style={{ height: '600px' }}>
      <img className="d-block w-100 my-2" src={image2} alt="Second slide" />
      <Carousel.Caption>
        <h5>Featured Book 2</h5>
        <p>Discover our second featured book.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{ height: '600px' }}>
      <img className="d-block w-100 my-2" src={image3} alt="Third slide" />
      <Carousel.Caption>
        <h5>Featured Book 3</h5>
        <p>Discover our third featured book.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;